"use client"

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { ShaderBackground } from "@/components/ui/animated-shader-hero"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function HeroCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const start = performance.now()
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      <span className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">{count}</span>
      <span className="text-2xl sm:text-3xl font-bold text-primary">{suffix}</span>
    </span>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <ShaderBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:from-black/30 dark:via-black/10 dark:to-black/70 pointer-events-none" />

      {/* Top hero content */}
      <div className="relative z-10 pt-32 sm:pt-40 pb-0 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs sm:text-sm font-medium text-primary mb-6 font-mono">
          <span className="text-yellow-400">⚡</span>
          Powered by Artificial Intelligence
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto drop-shadow-sm dark:drop-shadow-lg">
          Building the Future
          <br />
          with <span className="gradient-text">Intelligent AI</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          We craft bespoke AI solutions that automate processes, uncover insights, and
          accelerate growth. From concept to deployment, Fixoid is your partner in innovation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-primary-fg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            style={{ background: "var(--gradient)" }}
          >
            View Our Work <ArrowRight size={16} />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold border-2 border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:text-foreground hover:border-primary/50 transition-all backdrop-blur-sm"
          >
            Explore Services
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
          <div className="text-center">
            <HeroCounter target={150} suffix="+" />
            <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Projects Delivered</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-300/50 dark:bg-white/10" />
          <div className="text-center">
            <HeroCounter target={50} suffix="+" />
            <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Global Clients</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-300/50 dark:bg-white/10" />
          <div className="text-center">
            <HeroCounter target={98} suffix="%" />
            <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Client Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Scroll Animation Showcase */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
            Experience the power of <br />
            <span className="text-3xl sm:text-4xl md:text-[6rem] font-bold mt-1 leading-none gradient-text">
              AI Innovation
            </span>
          </h2>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=720&fit=crop&q=80"
          alt="AI Dashboard"
          width={1400}
          height={720}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </section>
  )
}
