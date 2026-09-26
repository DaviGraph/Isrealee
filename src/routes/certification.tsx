import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { graduates, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/certification")({
  component: CertificationPage,
});

function CertificationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Certification"
        title="The certificate shows you finished. Your projects show what you can do."
        lead="Students who complete the required programme receive a Certificate of Completion in Video Editing and Animation from Israelee Academy."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="/media/certificates.jpg"
            alt="Certificates of completion awarded to previous students"
            className="w-full rounded-xl object-cover"
          />
          <div>
            <Eyebrow>What it recognizes</Eyebrow>
            <h2 className="font-display text-3xl font-semibold">
              Dedication and proficiency in editing, animation, and post-production.
            </h2>
            <p className="mt-4 text-muted">
              After the 10-week programme, graduates are recognized for the skills they have
              acquired — and for the work they submitted, revised, and presented.
            </p>
            <p className="mt-4 text-muted">
              We believe the real value is not only the paper. The certificate is a marker. The
              portfolio is the proof.
            </p>
            <Button asChild className="mt-8">
              <a href={whatsappHref()}>Enrol for the next certificate cycle</a>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container>
          <Eyebrow>Recent graduates</Eyebrow>
          <h2 className="font-display text-3xl font-semibold">Names from the wall.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {graduates.map((name) => (
              <li
                key={name}
                className="rounded-lg bg-bg px-4 py-4 text-sm shadow-[var(--shadow-border)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
