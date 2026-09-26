import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import {
  bonuses,
  curriculum,
  includes,
  programmes,
  SITE,
  whatsappHref,
} from "@/lib/site";

export const Route = createFileRoute("/courses")({ component: CoursesPage });

function CoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Courses"
        title="The masterclass, plus the courses that used to cost extra."
        lead="The flagship is a 10-week Video Editing & Animation Masterclass. Registration includes live classes, mentorship, a certificate, and a stack of bonus programmes."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Flagship</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Video Editing & Animation Masterclass
            </h2>
            <p className="mt-4 text-muted">
              Designed to take learners through the fundamentals and practical application of video
              editing, animation, and post-production. Beginners are welcome. Practising editors are
              pushed further.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {curriculum.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-cream" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-xl bg-cream p-6 text-cream-fg sm:p-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase">Registration</p>
            <p className="mt-3 font-display text-5xl font-semibold">{SITE.fee}</p>
            <p className="mt-1 text-sm">{SITE.duration} intensive coaching</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Live WhatsApp & Telegram classes</li>
              <li>Assignments with immediate corrections</li>
              <li>Group projects and portfolio pieces</li>
              <li>Certificate of completion</li>
              <li>Previous batches rejoin free</li>
            </ul>
            <Button asChild className="mt-8 w-full bg-cream-fg text-cream hover:bg-bg">
              <a href={whatsappHref()}>Register on WhatsApp</a>
            </Button>
            <p className="mt-4 text-xs">
              Palmpay {SITE.palmpay} · {SITE.payee}
              <br />
              Proof of payment: {SITE.phoneDisplay}
            </p>
          </aside>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container>
          <Eyebrow>What you get</Eyebrow>
          <h2 className="font-display text-3xl font-semibold">Inside the ten weeks.</h2>
          <ul className="mt-8 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex gap-3 border-b border-border py-3 text-sm sm:text-base">
                <Check className="mt-1 size-4 shrink-0 text-cream" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Bonuses for registered students</Eyebrow>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            CapCut Pro, design, YouTube, Facebook, WhatsApp, AI tools.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((b) => (
              <article key={b.title} className="overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
                <img src={b.image} alt="" className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted">{b.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container>
          <Eyebrow>All programmes</Eyebrow>
          <h2 className="font-display text-3xl font-semibold">A catalogue that grows with the industry.</h2>
          <div className="mt-10 grid gap-4">
            {programmes.map((p) => (
              <article
                key={p.title}
                className="grid gap-4 rounded-xl bg-bg p-5 shadow-[var(--shadow-border)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    {p.featured ? (
                      <span className="rounded-full bg-cream px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-cream-fg uppercase">
                        Flagship
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                  <p className="mt-3 text-xs tracking-wide text-cream uppercase">
                    {p.level} · {p.length}
                  </p>
                </div>
                <p className="font-display text-lg font-semibold sm:text-right">{p.fee}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
