"use client"

import { motion } from "framer-motion"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const team = [
  {
    quote:
      "Applies exceptional problem-solving and critical thinking to navigate challenges, driving innovation and progress at every step.",
    name: "Usman Ahmad",
    designation: "Co-Founder",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Expertly transforms complex projects into streamlined successes, ensuring precision and timely delivery with a strategic approach.",
    name: "Usama Aziz",
    designation: "Co-Founder",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Combines technical expertise with a keen eye for detail, building robust and efficient backend solutions that power seamless user experiences.",
    name: "Ummaima Nadeem",
    designation: "Co-Founder",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face",
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
