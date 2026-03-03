"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/ui/project-card"

const categories = ["All", "Computer Vision", "Machine Learning", "NLP", "Web Scraping"]
const categoryMap: Record<string, string> = {
  "All": "all",
  "Computer Vision": "cv",
  "Machine Learning": "ml",
  "NLP": "nlp",
  "Web Scraping": "scraping",
}

interface Project {
  id: string
  title: string
  category: string
  catLabel: string
  desc: string
  details: string
  imgSrc: string
  techs: string[]
  stats: { value: string; label: string }[]
}

const projects: Project[] = [
  {
    id: "mosaico",
    title: "Mosaico",
    category: "cv",
    catLabel: "Computer Vision",
    desc: "AI-powered tile detection and surface analysis solution that identifies mosaic patterns, layouts, and surface structures from images for architects and designers.",
    details: "Mosaico uses advanced image recognition techniques to detect and analyze mosaic tiles on walls and floors. The system assists architects, interior designers, and construction professionals in analyzing tile designs, inspecting surfaces, and managing renovation projects. It simplifies the process of identifying and evaluating mosaic patterns through automated visual analysis.",
    imgSrc: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=450&fit=crop&q=80",
    techs: ["OpenCV", "PyTorch", "Python"],
    stats: [{ value: "98%", label: "Pattern Accuracy" }, { value: "50+", label: "Tile Types" }, { value: "3s", label: "Avg. Analysis" }],
  },
  {
    id: "virtual-staging-ai",
    title: "Virtual Staging AI",
    category: "cv",
    catLabel: "Computer Vision",
    desc: "AI-powered virtual staging that instantly transforms any empty room into a fully furnished, photorealistic rendering while preserving original lighting, shadows, and proportions.",
    details: "Virtual Staging AI instantly transforms any room — living room, bedroom, kitchen, office, or outdoor space — into a fully furnished, photorealistic rendering. It preserves original lighting, shadows, and proportions, ensuring furniture and décor fit naturally. With intelligent layout analysis, the system offers a variety of design styles from Modern and Scandinavian to Rustic and Coastal applied across spaces like bedrooms, kitchens, offices, balconies, and gardens. Every room is staged with realistic, well-proportioned furniture and décor. Ideal for real estate listings, interior design concepts, renovation previews, or visual content creation, the tool delivers high-resolution renderings in seconds. Optional custom prompts allow for personalized or experimental designs, making it perfect for professional presentations and portfolios.",
    imgSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=450&fit=crop&q=80",
    techs: ["Stable Diffusion", "PyTorch", "React"],
    stats: [{ value: "15+", label: "Design Styles" }, { value: "<5s", label: "Render Time" }, { value: "4K", label: "Resolution" }],
  },
  {
    id: "ha-app",
    title: "HA App",
    category: "ml",
    catLabel: "Machine Learning",
    desc: "Intelligent health and wellness platform delivering personalized meal plans, exercise routines, and meditation recommendations powered by AI.",
    details: "HA App analyzes user inputs to generate tailored wellness plans that promote healthier habits and balanced living. Beyond AI-driven recommendations, users can create their own recipes, design customized meal plans, and organize weekly wellness schedules. By combining personalization, automation, and user-friendly design, HA App empowers individuals to take control of their health in a smarter and more convenient way.",
    imgSrc: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop&q=80",
    techs: ["Python", "FastAPI", "Flutter"],
    stats: [{ value: "10K+", label: "Active Users" }, { value: "500+", label: "Meal Plans" }, { value: "92%", label: "Goal Completion" }],
  },
  {
    id: "find-my-ball",
    title: "Find My Ball",
    category: "cv",
    catLabel: "Computer Vision",
    desc: "Advanced AI mobile app that helps golfers locate golf balls in complex terrains using cutting-edge object detection technology.",
    details: "Find My Ball uses computer vision and object detection to identify golf balls across various terrains such as grass, rough areas, and low-visibility surroundings. The intelligent detection system significantly reduces the time spent searching for lost balls, allowing players to focus on their performance and enjoy a smoother golfing experience. It demonstrates the practical application of AI in sports by enhancing efficiency and improving the overall game experience.",
    imgSrc: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=450&fit=crop&q=80",
    techs: ["YOLOv8", "CoreML", "Swift"],
    stats: [{ value: "97%", label: "Detection Rate" }, { value: "<2s", label: "Scan Time" }, { value: "4.8★", label: "App Rating" }],
  },
  {
    id: "brand-intercept",
    title: "BrandIntercept",
    category: "nlp",
    catLabel: "NLP",
    desc: "AI-powered social media engagement tool that monitors competitor conversations and auto-generates strategic replies to capture leads in real time.",
    details: "BrandIntercept monitors posts, comments, and discussions related to competitor brands or industry topics across social platforms. Using intelligent sentiment detection, it identifies negative feedback, complaints, or unmet customer needs. When an opportunity is detected, the bot automatically generates a contextual and strategic reply that introduces the client\u2019s product or service as a potential solution. The platform helps businesses increase visibility, capture competitor traffic, and improve lead generation through automated yet context-aware social media interactions.",
    imgSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop&q=80",
    techs: ["GPT-4", "LangChain", "Node.js"],
    stats: [{ value: "24/7", label: "Monitoring" }, { value: "3x", label: "Lead Growth" }, { value: "500+", label: "Daily Replies" }],
  },
  {
    id: "recipegen-ai",
    title: "RecipeGen AI",
    category: "nlp",
    catLabel: "NLP",
    desc: "AI-powered recipe generation chatbot that creates personalized recipes based on user preferences, dietary needs, and available ingredients.",
    details: "RecipeGen AI is an intelligent recipe generation platform built using LangGraph and LangChain. Users can input their preferences such as dietary restrictions, cuisine type, or available ingredients, and the chatbot dynamically generates detailed recipes including ingredients, cooking instructions, and preparation steps. By leveraging advanced language models with a conversational interface, RecipeGen AI makes meal planning faster, more creative, and highly personalized, helping users discover new dishes effortlessly.",
    imgSrc: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=450&fit=crop&q=80",
    techs: ["LangGraph", "LangChain", "Python"],
    stats: [{ value: "50+", label: "Cuisine Types" }, { value: "<3s", label: "Response Time" }, { value: "100+", label: "Dietary Profiles" }],
  },
  {
    id: "smartcart",
    title: "SmartCart",
    category: "scraping",
    catLabel: "Web Scraping",
    desc: "Multi-store ingredient aggregation platform that scrapes and unifies grocery product data from major retailers like Walmart and Pak'nSave into a single searchable system.",
    details: "SmartCart simplifies online grocery shopping by intelligently scraping and organizing product data from multiple retail stores into one centralized platform. Users can easily search, compare, and access ingredients across different stores without browsing multiple websites. By consolidating product availability, pricing, and ingredient details from various retailers, SmartCart saves time, improves convenience, and helps users make better purchasing decisions through a unified shopping experience.",
    imgSrc: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=450&fit=crop&q=80",
    techs: ["Web Scraping", "NLP", "Python"],
    stats: [{ value: "5+", label: "Retail Stores" }, { value: "10K+", label: "Products Indexed" }, { value: "<1s", label: "Search Speed" }],
  },
  {
    id: "docextract-ai",
    title: "DocExtract AI",
    category: "nlp",
    catLabel: "NLP",
    desc: "Intelligent PDF data extraction system that retrieves structured information from complex documents using OCR, machine learning, and advanced parsing techniques.",
    details: "DocExtract AI extracts structured data from unstructured or semi-structured PDFs such as reports, forms, invoices, and tables. The system accurately identifies key fields, organizes extracted information, and converts it into usable formats like Excel, JSON, or databases. By automating manual data entry, it reduces processing time and improves accuracy when handling large volumes of document-based information, helping businesses streamline their document workflows.",
    imgSrc: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=450&fit=crop&q=80",
    techs: ["OCR", "Machine Learning", "Python"],
    stats: [{ value: "99%", label: "Extraction Accuracy" }, { value: "50+", label: "Document Types" }, { value: "<5s", label: "Processing Time" }],
  },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[3px] text-primary font-mono">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-5 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-fg max-w-xl mx-auto">
            A selection of our most impactful AI projects across diverse industries.
          </p>
        </motion.div>

        {/* Filters — tubelight style */}
        <div className="flex flex-wrap justify-center mb-10">
          <div className="inline-flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full">
            {categories.map((cat) => {
              const val = categoryMap[cat]
              const isActive = activeFilter === val
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(val)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors",
                    "text-foreground/80 hover:text-primary",
                    isActive && "text-primary",
                  )}
                >
                  {cat === "All" ? "All Projects" : cat}
                  {isActive && (
                    <motion.div
                      layoutId="filter-tubelight"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard
                  imgSrc={p.imgSrc}
                  title={p.title}
                  description={p.desc}
                  category={p.catLabel}
                  tags={p.techs}
                  linkText="View Details"
                  onClick={() => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-surface border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/60 z-10 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.imgSrc}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[2px] text-primary font-mono">{selectedProject.catLabel}</span>
                <h2 className="text-2xl font-bold text-foreground mt-2 mb-4">{selectedProject.title}</h2>
                <p className="text-muted-fg leading-relaxed mb-3">{selectedProject.desc}</p>
                <p className="text-muted-fg leading-relaxed mb-6">{selectedProject.details}</p>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.stats.map((s) => (
                    <div key={s.label} className="text-center p-4 bg-glow border border-primary/10 rounded-xl">
                      <span className="block text-xl font-bold text-primary">{s.value}</span>
                      <span className="text-xs text-muted-fg">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
