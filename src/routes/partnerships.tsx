import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SITE, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/partnerships")({
  component: PartnershipsPage,
});

const offers = [
  {
    title: "Businesses & organisations",
    body: "Corporate digital skills, video production training, digital literacy, youth empowerment, group training, workshops, bootcamps, and creative project collaboration.",
  },
  {
    title: "Schools & students",
    body: "Practical skills alongside academic education. Help learners explore creative and digital career paths without abandoning their studies.",
  },
  {
    title: "Institutions & communities",
    body: "Digital entrepreneurship programmes, industry partnerships, and custom curricula as technology and hiring needs change.",
  },
];

function PartnershipsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partnerships"
        title="Bring the studio into your team, school, or community."
        lead="Israelee Academy works with organisations that want digital skills inside their people — not a one-off motivational talk."
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.title} className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]">
              <h2 className="font-display text-xl font-semibold">{o.title}</h2>
              <p className="mt-3 text-sm text-muted">{o.body}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container className="max-w-3xl">
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 className="font-display text-3xl font-semibold">Tell us who you train, and what they need to ship.</h2>
          <p className="mt-4 text-muted">
            Call or WhatsApp {SITE.phoneDisplay}. Ask for institutional training, a workshop, or a
            custom batch. We will reply with a practical plan — duration, outcomes, and how
            corrections work at group scale.
          </p>
          <Button asChild className="mt-8">
            <a
              href={whatsappHref(
                "Hello Coach Israel, I represent an organisation and would like to discuss partnership or group training with Israelee Academy.",
              )}
            >
              Partner with us
            </a>
          </Button>
        </Container>
      </Section>
    </main>
  );
}
