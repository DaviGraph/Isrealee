import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SITE, socials, testimonials } from "@/lib/site";

export const Route = createFileRoute("/community")({ component: CommunityPage });

function CommunityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Community"
        title="A classroom that stays open after the session ends."
        lead="Live classes on WhatsApp and Telegram, group project rooms, Israelee TV tutorials, and a network of people who already walked the ten weeks."
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          <img
            src="/media/community-whatsapp.jpg"
            alt="WhatsApp community channels for Israelee students"
            className="h-80 w-full rounded-xl object-cover"
          />
          <img
            src="/media/live-classes.jpg"
            alt="Students in a live video class"
            className="h-80 w-full rounded-xl object-cover"
          />
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container>
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Students, in their own words.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl bg-bg p-6 shadow-[var(--shadow-border)]">
                <p className="text-sm leading-relaxed">“{t.quote}”</p>
                <footer className="mt-5 text-xs tracking-wide text-cream uppercase">{t.name}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["/media/chat-1.jpg", "/media/chat-2.jpg", "/media/chat-3.jpg", "/media/chat-4.jpg", "/media/chat-5.jpg", "/media/reviews.jpg"].map(
              (src) => (
                <img key={src} src={src} alt="Student chat testimonial" className="h-64 w-full rounded-xl object-cover" />
              ),
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <img src="/brand/israelee-tv.png" alt="Israelee TV" className="h-16 w-auto" />
            <Eyebrow>Israelee TV</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Daily tutorials for people who want the skill, even before they pay for class.
            </h2>
            <p className="mt-4 text-muted">
              Graphic design on a smartphone, video animation, folktales, YouTube knowledge, and AI
              walkthroughs. Smash subscribe — the button is friendly.
            </p>
            <Button asChild className="mt-6">
              <a href="https://www.youtube.com/@israeliwebunor" target="_blank" rel="noreferrer">
                Watch Israelee TV
              </a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/media/youtube-channel.jpg"
              alt="Israelee TV YouTube channel"
              className="h-56 w-full rounded-xl object-cover"
            />
            <img
              src="/media/youtube-subs.jpg"
              alt="YouTube subscriber community"
              className="h-56 w-full rounded-xl object-cover"
            />
            <img
              src="/media/youtube-reviews.jpg"
              alt="YouTube comments and reviews"
              className="h-56 w-full rounded-xl object-cover sm:col-span-2"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-elevated">
        <Container>
          <Eyebrow>Batch 3</Eyebrow>
          <h2 className="font-display text-3xl font-semibold">Doctors, lawyers, teachers, pastors, creators.</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Profile of a recent classroom — and a reminder that your background is not a barrier.
            You are next to fill a box in the new batch.
          </p>
          <img
            src="/media/batch3.jpg"
            alt="Batch 3 student profiles of Israelee Academy"
            className="mt-8 w-full rounded-xl object-cover"
          />
          <p className="mt-6 text-sm text-muted">
            Register: {SITE.phoneDisplay}. Then join the rooms where the work actually happens.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.slice(0, 4).map((s) => (
              <Button key={s.href} asChild variant="outline" size="sm">
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </Button>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
