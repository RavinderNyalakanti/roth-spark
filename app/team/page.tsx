import SectionHeading from '../../components/SectionHeading';

const features = [
  { title: 'Product-led engineering', description: 'We align product strategy and technical execution to keep every release impactful.' },
  { title: 'Design-first systems', description: 'Every interface is built with motion, accessibility, and a premium visual language.' },
  { title: 'Reliable delivery', description: 'Our cloud and DevOps workflows are optimized for safe, repeatable launches.' }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading title="Why RothSpark" subtitle="Our approach" />
        <p className="max-w-3xl text-lg leading-8 text-slate-300">We help teams move from idea to launch with modern software engineering, strong design systems, and measurable growth outcomes.</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-8 shadow-soft backdrop-blur-xl transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-8 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">How we work</h3>
            <p className="mt-4 text-slate-300">Discovery, UX vision, technical architecture, and production delivery are tightly integrated so we build products confidently and with speed.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-8 shadow-soft backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">Who we serve</h3>
            <p className="mt-4 text-slate-300">Enterprise teams, growth-stage startups, and ambitious digital product groups looking for engineering partners with seamless delivery and polished outcomes.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
