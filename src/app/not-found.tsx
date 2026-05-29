import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-x text-center">
        <p className="font-[family-name:var(--font-display)] text-7xl font-semibold text-gradient">
          404
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
          This page drifted out of orbit.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-[var(--color-mist)]">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Request a free preview
          </Button>
        </div>
      </div>
    </section>
  );
}
