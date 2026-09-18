'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-center text-foreground">
      <div className="max-w-md">
        <h1 className="font-heading text-3xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">
          We could not load this page. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </main>
  );
}