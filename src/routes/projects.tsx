import { createFileRoute } from "@tanstack/react-router";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { projects, videos } from "@/lib/site";

export const Route = createFileRoute("/projects")({ component: ProjectsPage });

function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Student projects"
        title="Classwork, group ads, first-time vlogs, and client work."
        lead="Students transform lessons into actual creative work — then submit it, take corrections, and ship a stronger version."
      />

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]">
                <img src={p.image} alt={p.title} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container>
          <Eyebrow>Moving pictures</Eyebrow>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Films made for class, not for a moodboard.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {videos.map((v) => (
              <figure key={v.title}>
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="aspect-[4/5] w-full rounded-xl bg-bg object-cover sm:aspect-video"
                  src={v.src}
                >
                  Sorry, your browser cannot play this video.
                </video>
                <figcaption className="mt-3">
                  <p className="font-display font-semibold">{v.title}</p>
                  <p className="text-sm text-muted">{v.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
