import Image from "next/image"
import Link from "next/link"

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Machine Learning",
  "Computer Vision",
  "NLP Solutions",
  "Data Analytics",
  "AI Consulting",
]

const connectLinks = [
  { label: "hello@fixoid.com", href: "mailto:hello@fixoid.com" },
  { label: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "GitHub", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-0 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">
          {/* Brand */}
          <div>
            <Link href="#hero" className="inline-flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Fixoid" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-foreground">Fixoid</span>
            </Link>
            <p className="text-sm text-muted-fg leading-relaxed max-w-[260px]">
              Transforming businesses through intelligent AI solutions. We build the technology that builds the future.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-fg hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-sm text-muted-fg hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5">Connect</h4>
            <ul className="space-y-2.5">
              {connectLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-fg hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t border-border text-sm text-muted-fg gap-3">
          <p>&copy; {new Date().getFullYear()} Fixoid. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
