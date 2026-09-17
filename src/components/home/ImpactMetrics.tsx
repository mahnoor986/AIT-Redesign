export default function ImpactMetrics() {
  const metrics = [
    { value: "4,816+", label: "Students Trained", description: "Learners reached through AIT technology education" },
    { value: "19+", label: "Tech Courses", description: "Practical paths across technology and digital skills" },
    { value: "1+", label: "Expert Instructors", description: "Mentors bringing real-world experience into class" },
    { value: "2+", label: "Batches Completed", description: "A growing community learning and building together" }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {metrics.map((metric, idx) => (
            <div key={idx} className="pt-8 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-white mb-2">{metric.label}</div>
              <div className="text-sm text-slate-400">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
