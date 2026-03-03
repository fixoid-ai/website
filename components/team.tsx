"use client"

import { motion } from "framer-motion"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const team = [
  {
    quote:
      "Former Google AI researcher with 12+ years in machine learning and a PhD in Computer Science from MIT. Passionate about building AI that transforms industries.",
    name: "Ahmed Khan",
    designation: "CEO & Co-Founder",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Full-stack ML engineer and systems architect. Previously led AI infrastructure at Amazon Web Services. Driven by the challenge of scaling intelligent systems.",
    name: "Sarah Rodriguez",
    designation: "CTO & Co-Founder",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Statistics and deep learning expert specializing in NLP. Published 20+ papers in top-tier AI conferences. Turning research breakthroughs into real-world impact.",
    name: "James Chen",
    designation: "Head of Data Science",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Computer vision specialist with expertise in edge AI and real-time systems. Open-source contributor to PyTorch. Bridging the gap between research and production.",
    name: "Lisa Park",
    designation: "Lead ML Engineer",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&crop=face",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 px-4 bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[3px] text-primary font-mono">Our People</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-5 text-foreground">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-fg max-w-xl mx-auto">
            Brilliant minds passionate about pushing the boundaries of artificial intelligence.
          </p>
        </motion.div>

        <AnimatedTestimonials testimonials={team} autoplay />
      </div>
    </section>
  )
}
