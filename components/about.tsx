"use client"

import { Shield, RefreshCw, Cpu } from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Orbit rings */}
              <div className="absolute inset-0 border border-border/50 rounded-full animate-[orbit_20s_linear_infinite]" />
              <div className="absolute inset-6 border border-border/40 rounded-full animate-[orbit_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-border/30 rounded-full animate-[orbit_10s_linear_infinite]" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl animate-pulse-glow"
                  style={{ background: "var(--gradient)" }}
                >
                  <Cpu size={32} />
                </div>
              </div>

              {/* Orbital dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary animate-[dot-pulse_2s_infinite]" />
              <div className="absolute bottom-4 right-2 w-3 h-3 rounded-full bg-secondary animate-[dot-pulse_2s_0.5s_infinite]" />
              <div className="absolute bottom-4 left-2 w-3 h-3 rounded-full bg-accent animate-[dot-pulse_2s_1s_infinite]" />

              {/* Floating cards */}
              <div className="absolute -top-2 -right-4 sm:right-[-3rem] flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl shadow-md animate-float z-10">
                <div className="w-8 h-8 rounded-lg bg-glow flex items-center justify-center text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" /><path d="M12 6v6l4 2" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">99.2%</div>
                  <div className="text-[0.65rem] text-muted-fg">Model Accuracy</div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-4 sm:left-[-2rem] flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl shadow-md animate-float-delayed z-10">
                <div className="w-8 h-8 rounded-lg bg-glow flex items-center justify-center text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4Z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">3x</div>
                  <div className="text-[0.65rem] text-muted-fg">Faster Deployment</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
          >
            <span className="text-xs font-semibold uppercase tracking-[3px] text-primary font-mono">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-6 text-foreground leading-tight">
              Pioneering AI Solutions<br />Since <span className="gradient-text">2022</span>
            </h2>
            <p className="text-muted-fg mb-4 leading-relaxed">
              Fixoid was founded with a singular mission: to democratize artificial intelligence for
              businesses of all sizes. We believe that AI shouldn&apos;t be a luxury reserved for tech
              giants — it should be accessible, practical, and transformative for every organization.
            </p>
            <p className="text-muted-fg mb-8 leading-relaxed">
              Our team of data scientists, ML engineers, and AI researchers work at the intersection of
              cutting-edge research and real-world application. We don&apos;t just build models — we build
              solutions that integrate seamlessly into your operations.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-glow border border-primary/20 flex items-center justify-center text-primary">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Enterprise-Grade Security</h4>
                  <p className="text-sm text-muted-fg">SOC 2 compliant with end-to-end encryption for all data pipelines.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-glow border border-primary/20 flex items-center justify-center text-primary">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Continuous Improvement</h4>
                  <p className="text-sm text-muted-fg">Our models learn and adapt, getting smarter with every interaction.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
