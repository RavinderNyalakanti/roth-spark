import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const iconMap: { [key: string]: string } = {
    'Custom Software Development': '⚙️',
    'Web Development': '🌐',
    'Mobile App Development': '📱',
    'Cloud Solutions': '☁️',
    'UI/UX Design': '🎨',
    'AI & Automation': '🤖',
    'Enterprise Solutions': '🏢',
    'Data Engineering': '📊'
  };

  const displayIcon = icon || iconMap[title] || '✨';

  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group rounded-xl border border-slate-200 bg-white p-8 shadow-card hover:border-brand-indigo/50 transition-colors duration-300"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-2xl group-hover:bg-brand-indigo/10 transition-colors duration-300">
        {displayIcon}
      </div>
      <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-brand-slate">{description}</p>
    </motion.article>
  );
}
