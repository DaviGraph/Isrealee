import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { faqs, SITE, socials, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Register, ask a question, or send proof of payment."
        lead="The fastest path is WhatsApp. Fill the form and we open a message to Coach Israel with your details already written."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <RegisterForm />
          <PaymentCard />
        </Container>
      </Section>
      <Section className="bg-bg-elevated">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl font-semibold">Straight answers.</h2>
          </div>
          <Accordion type="single" collapsible>
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>
    </main>
  );
}

function RegisterForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Video Editing & Animation Masterclass");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const fullName = String(fd.get("name") || name || "(name)");
    const tel = String(fd.get("phone") || phone || "(not shared)");
    const note = String(fd.get("message") || message);
    const body = [
      `Hello Coach Israel, my name is ${fullName}.`,
      `Phone: ${tel}.`,
      `I am interested in: ${interest}.`,
      note ? `Message: ${note}` : "",
      "I would like to register / get the next steps for Israelee Academy.",
    ]
      .filter(Boolean)
      .join(" ");
    window.location.href = whatsappHref(body);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8">
      <Eyebrow>Message</Eyebrow>
      <h2 className="font-display text-2xl font-semibold">Write to the academy</h2>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">WhatsApp number</Label>
          <Input
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0803…"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="interest">I want</Label>
          <select
            id="interest"
            className="h-11 rounded-md border border-border bg-bg-subtle px-4 text-sm text-fg"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option>Video Editing & Animation Masterclass</option>
            <option>Graphic design (bonus)</option>
            <option>Partnership / group training</option>
            <option>General question</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Note</Label>
          <Textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us where you are starting from."
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Continue on WhatsApp
        </Button>
      </div>
    </form>
  );
}

function PaymentCard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl bg-cream p-6 text-cream-fg sm:p-8">
        <Eyebrow>
          <span className="text-cream-fg/70">Pay into</span>
        </Eyebrow>
        <h2 className="font-display text-2xl font-semibold">Registration is {SITE.fee}</h2>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-cream-fg/70">Palmpay</dt>
            <dd className="mt-1 flex items-center justify-between gap-3">
              <span className="font-display text-2xl tracking-wide">{SITE.palmpay}</span>
              <CopyButton value={SITE.palmpay} label="account number" />
            </dd>
          </div>
          <div>
            <dt className="text-cream-fg/70">Account name</dt>
            <dd className="mt-1 font-medium">{SITE.payee}</dd>
          </div>
          <div>
            <dt className="text-cream-fg/70">Send proof of payment</dt>
            <dd className="mt-1 font-medium">{SITE.phoneDisplay}</dd>
          </div>
        </dl>
        <Button asChild className="mt-8 w-full bg-cream-fg text-cream hover:bg-bg">
          <a href={whatsappHref("Hello Coach Israel, I have made payment for the masterclass. Here is my proof.")}>
            Send proof on WhatsApp
          </a>
        </Button>
      </div>

      <div className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]">
        <h3 className="font-display text-lg font-semibold">Talk to us</h3>
        <p className="mt-2 text-sm text-muted">
          Call{" "}
          <a className="text-cream" href={`tel:${SITE.phoneTel}`}>
            {SITE.phoneDisplay}
          </a>
          . Follow the work while you wait.
        </p>
        <ul className="mt-4 space-y-2">
          {socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-fg">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="inline-flex size-11 items-center justify-center rounded-full bg-cream-fg/10 text-cream-fg"
      aria-label={`Copy ${label}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          toast.success("Copied Palmpay number");
          window.setTimeout(() => setDone(false), 1500);
        } catch {
          toast.error("Could not copy. Long-press the number instead.");
        }
      }}
    >
      {done ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}
