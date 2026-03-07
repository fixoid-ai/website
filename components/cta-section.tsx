"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 px-4 relative overflow-hidden" style={{ background: "var(--gradient)" }}>
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-white/80 mb-9 max-w-xl mx-auto">
            Let&apos;s discuss how Fixoid can help you harness the power of artificial intelligence to solve your toughest challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white text-cyan-700 dark:text-cyan-800 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link
              href="mailto:fixoid.ai@gmail.com"
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all"
            >
              fixoid.ai@gmail.com
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
