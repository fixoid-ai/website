"use client"
import { motion, Variants } from "framer-motion";
import { Bot, Eye, Languages, BarChart3, Cloud, Lightbulb } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const services = [
  {
    icon: Bot,
    title: "Machine Learning",
    desc: "Custom machine learning models designed for prediction, classification, and intelligent recommendation systems. Our solutions learn from your data and continuously improve to deliver more accurate insights over time.",
    tags: ["Predictive Analytics", "Recommendation Engines", "Anomaly Detection"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Powerful image and video analysis solutions that enable machines to see, understand, and interpret visual data for automation and intelligent decision-making.",
    tags: ["Object Detection", "Image Classification", "OCR Systems"],
  },
  {
    icon: Languages,
    title: "Natural Language Processing",
    desc: "Transform unstructured text into meaningful insights with AI-powered language solutions for communication, automation, and intelligent document processing.",
    tags: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Text Summarization"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turn raw data into clear, actionable insights with advanced analytics platforms, interactive dashboards, and seamless business intelligence integrations.",
    tags: ["Business Intelligence", "Data Visualization", "ETL Pipelines"],
  },
  {
    icon: Cloud,
    title: "MLOps & Deployment",
    desc: "Build reliable and scalable AI systems with end-to-end ML pipeline management, monitoring, and cloud deployment to keep your models running efficiently.",
    tags: ["CI/CD for Machine Learning", "Model Monitoring", "Auto-Scaling Infrastructure"],
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    desc: "Strategic AI guidance to help organizations identify opportunities, validate ideas, and build a roadmap for successful AI adoption.",
    tags: ["AI Strategy & Roadmap", "Feasibility Studies", "Team Training & Enablement"],
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.25, 0.1, 0.25, 1], // ✅ fixed
    },
  }),
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[3px] text-primary font-mono">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-5 text-foreground">
            AI Solutions That <span className="gradient-text">Transform Ideas into Results</span>
          </h2>
          <p className="text-muted-fg max-w-xl mx-auto">
            From strategy to deployment, we offer end-to-end AI services tailored to your unique business challenges.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="relative flex flex-1 flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl bg-glow flex items-center justify-center text-primary mb-2 transition-all duration-300 group-hover:shadow-lg">
                      <s.icon size={22} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                      <p className="text-sm text-muted-fg leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-3">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[0.68rem] font-mono bg-glow border border-primary/10 text-muted-fg rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
