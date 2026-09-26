import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { audience, outcomes, SITE, values, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Israelee Academy is built for people who want to do the work."
        lead="A practical digital skills and creative training academy. Beginners start from the basics. Everyone leaves with projects, corrections, and a clearer path to using the skill."
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Structured instruction. Hands-on practice. Mentorship that follows up.
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                We help individuals develop relevant, marketable, future-ready skills. From video
                editing and animation to graphic design, YouTube, WhatsApp, and AI, the academy is
                designed so you understand not only how to use a tool, but how to use the skill to
                solve problems, create value, and pursue opportunities.
              </p>
              <p>
                Students learn by doing — creating, practising, receiving corrections, completing
                projects, and developing work they can confidently use in the real world.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
            <img
              src="/brand/founder.jpg"
              alt={SITE.founder}
              className="aspect-[4/5] w-full rounded-lg object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="px-4 py-5">
              <p className="font-display text-xl font-semibold">{SITE.founder}</p>
              <p className="text-sm text-muted">{SITE.founderRole}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container className="grid gap-10 md:grid-cols-3">
          <article>
            <Eyebrow>Vision</Eyebrow>
            <p className="text-muted">
              To become a leading digital skills and creative education academy that empowers
              individuals with practical skills, creativity, confidence, and opportunities to succeed
              in a digital world.
            </p>
          </article>
          <article>
            <Eyebrow>Mission</Eyebrow>
            <p className="text-muted">
              To provide accessible, practical, high-quality training that equips learners to create,
              work, build businesses, serve clients, and pursue meaningful careers.
            </p>
          </article>
          <article>
            <Eyebrow>Purpose</Eyebrow>
            <p className="text-muted">
              Bridge the gap between learning and application. Leave with practical experience,
              completed projects, and a clear sense of how the skill is used.
            </p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Founder</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {SITE.founder} believes an instructor should guide you through understanding,
              practising, creating, correcting, and improving.
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                A digital creator, coach, and founder of Israelee Academy and Israelee TV. He trains
                video editors, animators, and AI creators through live classes — not abandoned
                tutorial dumps.
              </p>
              <p>
                The academy is known for converting business ads, active WhatsApp and Telegram
                classrooms, and students who have gone on to serve clients, grow channels, and teach
                others.
              </p>
              <p className="text-fg italic">
                “When you learn from the best, you become the best. Everyone deserves a practical
                path into digital work.”
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container>
          <Eyebrow>Values</Eyebrow>
          <h2 className="font-display text-3xl font-semibold">The principles that run the classroom.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article key={v.title}>
                <h3 className="font-display text-lg font-semibold text-cream">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Who can learn</Eyebrow>
            <h2 className="font-display text-3xl font-semibold">You do not have to be an expert to start.</h2>
            <ul className="mt-6 space-y-2 text-muted">
              {audience.map((a) => (
                <li key={a} className="border-b border-border py-2">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>What the skill is for</Eyebrow>
            <h2 className="font-display text-3xl font-semibold">From classroom to client.</h2>
            <ul className="mt-6 space-y-2 text-muted">
              {outcomes.map((a) => (
                <li key={a} className="border-b border-border py-2">
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={whatsappHref()}>
                  Join a batch
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/approach">How we teach</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
