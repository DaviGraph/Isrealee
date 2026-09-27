import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { nav, SITE, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/brand/logo.jpg"
            alt=""
            className="size-10 rounded-md object-cover"
          />
          <span className="min-w-0">
            <span className="block font-display text-sm leading-none font-semibold tracking-[0.18em] sm:text-base">
              ISRAELEE
            </span>
            <span className="mt-1 block text-[0.65rem] tracking-[0.22em] text-muted uppercase">
              Academy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors duration-150",
                pathname === item.to ? "bg-bg-subtle text-cream" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={whatsappHref()}>Register</a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-fg xl:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-bg xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-base",
                  pathname === item.to ? "bg-bg-subtle text-cream" : "text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={whatsappHref()} onClick={() => setOpen(false)}>
                Register · {SITE.fee}
              </a>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
