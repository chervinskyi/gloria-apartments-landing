"use client"

import { Leaf, Camera, MessageCircle, Send } from "lucide-react"
import type { Lang } from "@/lib/translations"
import { translations } from "@/lib/translations"

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = translations[lang].footer
  const nav = translations[lang].nav

  const links = [
    { href: "#rooms", label: nav.rooms },
    { href: "#about", label: nav.about },
    { href: "#location", label: nav.location },
    { href: "#reviews", label: nav.reviews },
    { href: "#contacts", label: nav.contacts },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2 font-serif text-2xl font-semibold">
            <Leaf className="size-5" strokeWidth={1.5} />
            Gloria Apartments
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            {t.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            {t.menu}
          </h4>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            {t.contacts}
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/85">
            <li>
              <a href="tel:+380000000000" className="hover:text-primary-foreground">
                +38 (000) 000 00 00
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@gloria-apartments.com"
                className="hover:text-primary-foreground"
              >
                hello@gloria-apartments.com
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <SocialLink href="#" label="Instagram">
              <Camera className="size-5" />
            </SocialLink>
            <SocialLink href="#" label="Facebook">
              <MessageCircle className="size-5" />
            </SocialLink>
            <SocialLink href="#" label="Telegram">
              <Send className="size-5" />
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-primary-foreground/60 md:px-8">
          © {new Date().getFullYear()} Gloria Apartments. {t.rights}
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
    >
      {children}
    </a>
  )
}
