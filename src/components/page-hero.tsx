import { Container, Eyebrow } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <div className="border-b border-border bg-linear-to-b from-bg to-bg-elevated">
      <Container className="py-16 sm:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{lead}</p>
      </Container>
    </div>
  );
}
