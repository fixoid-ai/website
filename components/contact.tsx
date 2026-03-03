"use client"

import { useState, FormEvent } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Youtube, Send } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formName, setFormName] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setFormName(data.get("name") as string)
    setSubmitted(true)
    e.currentTarget.reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[3px] text-primary font-mono">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-5 text-foreground">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-muted-fg max-w-xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-glow flex items-center justify-center text-primary">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Email Us</div>
                <a href="mailto:hello@fixoid.com" className="text-sm text-muted-fg hover:text-primary transition-colors">hello@fixoid.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-glow flex items-center justify-center text-primary">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Call Us</div>
                <a href="tel:+15551234567" className="text-sm text-muted-fg hover:text-primary transition-colors">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-glow flex items-center justify-center text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Visit Us</div>
                <p className="text-sm text-muted-fg">123 Innovation Drive, Suite 400<br />San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="flex gap-2.5 pt-2">
              {[Linkedin, Github, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-fg hover:text-primary hover:border-primary/50 hover:bg-glow transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-sm placeholder:text-muted-fg transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-sm placeholder:text-muted-fg transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-sm placeholder:text-muted-fg transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-sm placeholder:text-muted-fg resize-y min-h-[120px] transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-primary-fg shadow-md hover:shadow-lg transition-all hover:scale-[1.01]"
              style={{ background: "var(--gradient)" }}
            >
              Send Message <Send size={16} />
            </button>
            {submitted && (
              <div className="text-center text-sm p-3 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Thank you, {formName}! Your message has been received. We&apos;ll respond within 24 hours.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
