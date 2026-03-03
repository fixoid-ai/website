"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll("section[id]")
      let current = "hero"
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 160) {
          current = s.id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300",
        scrolled && "bg-nav-bg backdrop-blur-xl border-b border-border shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 z-10">
          <Image
            src="/logo.png"
            alt="Fixoid"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-foreground tracking-tight">
            Fixoid
          </span>
        </Link>

        {/* Desktop nav — tubelight style */}
        <div className="hidden lg:flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "text-primary",
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-tubelight"
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
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 z-10">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-fg shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            style={{ background: "var(--gradient)" }}
          >
            Get Started
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-background/98 backdrop-blur-xl z-40 flex flex-col p-6 gap-2 transition-all duration-300 lg:hidden",
          mobileOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "px-4 py-3 rounded-xl text-base font-medium transition-colors",
              activeSection === item.href.slice(1)
                ? "text-primary bg-glow"
                : "text-muted-fg hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 text-center px-5 py-3 rounded-full text-sm font-semibold text-primary-fg"
          style={{ background: "var(--gradient)" }}
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
