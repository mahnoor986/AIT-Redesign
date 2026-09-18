'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <main className="flex min-h-screen items-center justify-center px-6 py-16 text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="mt-3 text-slate-300">Please try loading the page again.</p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-400"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}