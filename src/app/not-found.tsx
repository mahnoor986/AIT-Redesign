import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-center text-foreground">
      <div className="max-w-md">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-3 font-heading text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}