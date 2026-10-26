import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-ivory">
      <Container className="text-center">
        <p className="eyebrow text-bronze">Error 404</p>
        <h1 className="display-1 mt-5 text-espresso">This page has stepped out</h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-mocha">
          The page you’re looking for can’t be found. It may have moved, or the
          link may be out of date. Let’s get you back to beautiful hair.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Return Home</Button>
          <Button href="/booking" variant="outline">Book an Appointment</Button>
        </div>
      </Container>
    </section>
  );
}
