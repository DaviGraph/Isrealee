import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

export const Route = createFileRoute("/$")({ component: NotFound });

function NotFound() {
  return (
    <main>
      <Container className="py-28 text-center">
        <p className="text-xs tracking-[0.22em] text-cream uppercase">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">This page is not on the timeline.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The cut you asked for does not exist. Return home, or go straight to registration.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/">Back home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
