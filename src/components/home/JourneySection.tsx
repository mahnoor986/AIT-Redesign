const journeySteps = [
  {
    number: '01',
    title: 'Apply Online',
    description:
      'Fill out the registration form with your details and preferred course.',
  },
  {
    number: '02',
    title: 'Entrance Test',
    description:
      'Complete the next step in the admissions process for your selected course.',
  },
  {
    number: '03',
    title: 'Enroll',
    description:
      'Confirm your place and get ready to begin your AIT learning journey.',
  },
  {
    number: '04',
    title: 'Learn & Build',
    description:
      'Develop practical skills through guided learning and real projects.',
  },
  {
    number: '05',
    title: 'Get Certified',
    description:
      'Complete your course and receive a verifiable AIT certificate.',
  },
];

export default function JourneySection() {
  return (
    <section
      className="border-y border-slate-200 bg-white py-20 md:py-28"
      aria-labelledby="journey-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">
            Your Journey
          </p>

          <h2
            id="journey-heading"
            className="mt-5 max-w-2xl font-heading text-4xl font-extrabold leading-[1.08] text-slate-900 md:text-5xl"
          >
            From your first application to a verified tech credential.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 md:mt-20 md:grid-cols-5 md:gap-6">
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 md:block"
            aria-hidden="true"
          />

          {journeySteps.map((step) => (
            <article key={step.number} className="relative z-10">
              <div className="flex items-center gap-4 md:block">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-[0_4px_10px_rgba(15,23,42,0.18)] ring-4 ring-white">
                  {step.number}
                </span>

                <h3 className="font-heading text-xl font-bold text-slate-900 md:mt-10 md:text-lg lg:text-xl">
                  {step.title}
                </h3>
              </div>

              <p className="mt-3 pl-14 text-base leading-relaxed text-slate-500 md:pl-0 md:pr-5">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}