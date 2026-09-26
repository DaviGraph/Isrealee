import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clapperboard, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container, Eyebrow, Section } from "@/components/container";
import {
  bonuses,
  faqs,
  SITE,
  stats,
  steps,
  testimonials,
  whatsappHref,
  whyChoose,
} from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Stats />
      <AboutStrip />
      <Flagship />
      <ApproachPreview />
      <Why />
      <Work />
      <Stories />
      <BonusPreview />
      <Faq />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/brand/founder-hero.jpg"
          alt=""
          className="h-full w-full object-cover object-[center_20%] opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/75 via-bg/55 to-bg" />
      </div>
      <Container className="relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">
        <div>
          <p className="anim-in mb-5 inline-flex items-center gap-2 rounded-full bg-bg-subtle/80 px-3 py-1.5 text-xs tracking-[0.18em] text-cream uppercase">
            <Clapperboard className="size-3.5" />
            10-week intensive · Video · Animation · AI
          </p>
          <h1 className="anim-in font-display text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            Learn a skill.
            <span className="mt-1 block text-cream">Build your confidence.</span>
            <span className="mt-1 block">Create your opportunities.</span>
          </h1>
          <p className="anim-in-delay mt-6 max-w-xl text-lg text-muted">
            Israelee Academy is a practical digital skills studio. You learn by doing — classwork,
            corrections, live sessions, and projects you can show a client.
          </p>
          <div className="anim-in-delay mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={whatsappHref()}>
                Join the masterclass
                <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/courses">Explore courses</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted">
            {SITE.fee} · {SITE.duration} · Send proof of payment to {SITE.phoneDisplay}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-xl bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
            <img
              src="/brand/founder.jpg"
              alt={`${SITE.founder}, founder of Israelee Academy`}
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <div className="flex items-start justify-between gap-3 px-3 py-4">
              <div>
                <p className="font-display text-lg font-semibold">{SITE.founder}</p>
                <p className="text-sm text-muted">{SITE.founderRole}</p>
              </div>
              <a
                href="https://www.youtube.com/@israeliwebunor"
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full bg-cream text-cream-fg"
                aria-label="Watch Israelee TV on YouTube"
              >
                <Play className="ml-0.5 size-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Ticker() {
  const items = [
    "Now enrolling — Video Editing & Animation Masterclass",
    "Live classes on WhatsApp and Telegram",
    "CapCut Premium included",
    "Certificate of completion",
    "Previous batches join new batches free",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-cream text-cream-fg">
      <div className="ticker flex w-max gap-10 py-3 text-sm font-semibold tracking-wide uppercase">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10">
            {t}
            <span aria-hidden className="text-crimson">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <Section className="py-12 sm:py-16">
      <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-border pt-4">
            <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </Container>
    </Section>
  );
}

function AboutStrip() {
  return (
    <Section className="bg-bg-elevated">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            A studio-school for people who want to make work, not collect certificates.
          </h2>
        </div>
        <div className="space-y-4 text-muted">
          <p>
            Israelee Academy equips students, professionals, entrepreneurs, and creators with
            practical skills for a digital economy. Training combines structured instruction with
            hands-on practice, assignments, projects, feedback, and mentorship.
          </p>
          <p>
            We do not believe students should simply watch tutorials. The path is learn, practise,
            create, receive feedback, improve, and demonstrate.
          </p>
          <Button asChild variant="outline">
            <Link to="/about">
              About the academy
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function Flagship() {
  return (
    <Section>
      <Container>
        <Eyebrow>Flagship programme</Eyebrow>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            Video Editing & Animation Masterclass
          </h2>
          <p className="max-w-md text-muted">
            Ten weeks. Live coaching. Immediate corrections. Group projects. {SITE.fee} to register.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Editing workflow, cutting, and arrangement",
            "Motion graphics, text, and visual effects",
            "Colour correction and grading",
            "Audio, sound design, and music",
            "Storytelling for ads, vlogs, and brands",
            "Export, portfolio, and client delivery",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl bg-bg-elevated p-5 shadow-[var(--shadow-border)]"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-cream" />
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link to="/courses">
              Full curriculum & bonuses
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function ApproachPreview() {
  return (
    <Section className="bg-bg-elevated">
      <Container>
        <Eyebrow>How we teach</Eyebrow>
        <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Learn. Practise. Create. Improve.
        </h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.slice(0, 4).map((s) => (
            <li key={s.n} className="bg-bg-elevated p-6">
              <p className="font-display text-sm text-cream">{s.n}</p>
              <p className="mt-3 font-display text-xl font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/approach">
              The full method
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function Why() {
  return (
    <Section>
      <Container>
        <Eyebrow>Why Israelee</Eyebrow>
        <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Education should not end with knowledge. It should lead to ability.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <article key={w.title} className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl font-semibold">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{w.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Work() {
  return (
    <Section className="bg-bg-elevated">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Student work</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Made in class. Shown in public.</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/projects">
              All projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <img
            src="/media/classwork.jpg"
            alt="Classwork and assignment submissions with live corrections"
            className="h-64 w-full rounded-xl object-cover md:col-span-2 md:h-80"
          />
          <img
            src="/media/live-classes.jpg"
            alt="Practical live classes with students on WhatsApp and Telegram"
            className="h-64 w-full rounded-xl object-cover md:h-80"
          />
          <img
            src="/media/batch3.jpg"
            alt="Batch 3 students of the Video Editing Masterclass"
            className="h-56 w-full rounded-xl object-cover"
          />
          <img
            src="/media/certificates.jpg"
            alt="Certificates of completion awarded to graduates"
            className="h-56 w-full rounded-xl object-cover md:col-span-2"
          />
        </div>
      </Container>
    </Section>
  );
}

function Stories() {
  return (
    <Section>
      <Container>
        <Eyebrow>Student voices</Eyebrow>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">What happens after the first assignment.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col justify-between rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]"
            >
              <p className="text-sm leading-relaxed text-fg">“{t.quote}”</p>
              <footer className="mt-6 text-xs tracking-wide text-cream uppercase">{t.name}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/community">
              More reviews
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function BonusPreview() {
  return (
    <Section className="bg-bg-elevated">
      <Container>
        <Eyebrow>Included with registration</Eyebrow>
        <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Bonuses that used to be separate courses.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.slice(0, 3).map((b) => (
            <article key={b.title} className="overflow-hidden rounded-xl bg-bg shadow-[var(--shadow-border)]">
              <img src={b.image} alt="" className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Faq() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Before you send proof of payment.</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.slice(0, 5).map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="overflow-hidden rounded-xl bg-cream px-6 py-12 text-cream-fg sm:px-12 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase">Ready when you are</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
            Start the ten weeks. Leave with a skill you can charge for.
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base">
            Pay {SITE.fee} to Palmpay {SITE.palmpay} · {SITE.payee}. Then send your receipt to{" "}
            {SITE.phoneDisplay}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-cream-fg text-cream hover:bg-bg">
              <a href={whatsappHref()}>
                Register on WhatsApp
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-cream-fg/20 text-cream-fg hover:bg-cream-fg/10">
              <Link to="/contact">Payment details</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
