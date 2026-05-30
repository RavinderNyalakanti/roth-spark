'use client';

import SectionHeading from '../../components/SectionHeading';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  { title: 'NeonGrid Platform', label: 'Enterprise AI', description: 'Adaptive workflow automation with real-time decision telemetry.', accent: 'AI' },
  { title: 'PulseWave App', label: 'Mobile Experience', description: 'A premium customer app built with pixel-perfect motion and offline resilience.', accent: 'Mobile' },
  { title: 'CoreSync Cloud', label: 'Cloud Foundation', description: 'Secure multi-region infrastructure with policy-driven reliability.', accent: 'Cloud' }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading title="Portfolio" subtitle="Selected RothSpark projects" />
        <p className="max-w-3xl text-lg leading-8 text-slate-300">Our portfolio highlights premium digital systems built for speed, reliability, and a compelling customer experience.</p>
        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
