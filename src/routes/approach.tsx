import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { steps, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/approach")({ component: ApproachPage });

function ApproachPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our approach"
        title="Learn. Practise. Create. Receive feedback. Improve. Demonstrate."
        lead="Practical learning sits at the centre of the academy. Students are not asked to memorise a tool. They are asked to make work, get it marked, and make it better."
      />

      <Section>
        <Container>
          <ol className="grid gap-4 lg:grid-cols-2">
            {steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[auto_1fr] gap-5 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8"
              >
                <span className="font-display text-3xl font-semibold text-cream">{s.n}</span>
                <div>
                  <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Project-based</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Every week should produce something you can show.
            </h2>
            <p className="mt-4 text-muted">
              Promotional videos, social cuts, short-form content, motion graphics, animated
              designs, business films, personal-brand pieces, and collaborative group ads. Projects
              give learners something practical to demonstrate their ability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={whatsappHref()}>Join the next batch</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">See student projects</Link>
              </Button>
            </div>
          </div>
          <img
            src="/media/live-classes.jpg"
            alt="Live classroom with students on a video call and a lesson outline"
            className="h-80 w-full rounded-xl object-cover"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 md:grid-cols-3">
          <article>
            <h3 className="font-display text-xl font-semibold">Career & freelancing</h3>
            <p className="mt-3 text-sm text-muted">
              Portfolio, personal branding, outreach, pitching, client communication, delivery, and
              turning a skill into income. Learning the tool is one half. Positioning it is the other.
            </p>
          </article>
          <article>
            <h3 className="font-display text-xl font-semibold">Follow-up support</h3>
            <p className="mt-3 text-sm text-muted">
              Mentorship continues after the live session. Students receive guidance through the
              ten weeks — and previous batches return for new classes at no extra fee.
            </p>
          </article>
          <article>
            <h3 className="font-display text-xl font-semibold">Collaborative rooms</h3>
            <p className="mt-3 text-sm text-muted">
              Group A and Group B briefs, shared workspaces, and peer review. Teamwork is part of
              the curriculum, because client work is rarely solo.
            </p>
          </article>
        </Container>
      </Section>
    </main>
  );
}
