import { Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { nav, SITE, socials } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/brand/logo.jpg" alt="" className="size-12 rounded-md object-cover" />
            <div>
              <p className="font-display text-lg tracking-[0.16em]">ISRAELEE</p>
              <p className="text-xs tracking-[0.2em] text-muted uppercase">Academy</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{SITE.tagline}</p>
          <p className="mt-3 max-w-md text-sm text-muted">
            Practical digital skills for video editors, animators, and AI creators. Live classes,
            corrections, projects, certificate.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] text-cream uppercase">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] text-cream uppercase">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="text-muted hover:text-fg">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="text-muted">
              Palmpay {SITE.palmpay}
              <br />
              {SITE.payee}
            </li>
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-fg">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-border pb-24 sm:pb-6">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Coach {SITE.founder} · Digital skills, practised in public.</p>
        </Container>
      </div>
    </footer>
  );
}
