import { motion } from 'framer-motion';

interface Project {
  title: string;
  label: string;
  description: string;
  accent: string;
  icon?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group rounded-xl border border-slate-200 bg-white p-8 shadow-card hover:border-brand-indigo/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex rounded-lg bg-brand-indigo/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-indigo">
          {project.label}
        </span>
        <span className="text-2xl">{project.icon || '📦'}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-brand-dark">{project.title}</h3>
      <p className="mt-4 text-sm leading-6 text-brand-slate">{project.description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm">
        <span className="inline-flex h-2 w-2 rounded-full bg-brand-indigo" />
        <span className="text-brand-slate">{project.accent}</span>
      </div>
    </motion.article>
  );
}
