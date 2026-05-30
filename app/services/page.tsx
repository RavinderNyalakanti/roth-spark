'use client';

import SectionHeading from '../../components/SectionHeading';
import ServiceCard from '../../components/ServiceCard';

const services = [
  { title: 'AI Solutions', description: 'From custom models to embedded intelligence, we design AI systems that learn and scale.' },
  { title: 'Web Development', description: 'Crafted single-page applications and data platforms with exceptional speed and accessibility.' },
  { title: 'Mobile App Development', description: 'Native-like mobile experiences engineered for engagement and retention.' },
  { title: 'Cloud & DevOps', description: 'Automated infrastructure, observability, and secure delivery pipelines.' },
  { title: 'UI/UX Design', description: 'User-first product systems with modern visual design, motion, and clarity.' },
  { title: 'Data Engineering', description: 'Reliable pipelines, analytics architecture, and real-time data fabric.' }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading title="Services" subtitle="What RothSpark delivers" />
        <p className="max-w-3xl text-lg leading-8 text-slate-300">We partner with ambitious teams to deliver product engineering, AI, and cloud systems that feel modern, polished, and ready for scale.</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </main>
  );
}
