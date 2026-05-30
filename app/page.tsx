'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TechBadge from '@/components/TechBadge';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';

const services = [
  { title: 'AI Solutions', description: 'Custom models, computer vision, autonomous agents, and human-centered automation.' },
  { title: 'Web Development', description: 'Modern digital platforms built with resilient architecture and slick performance.' },
  { title: 'Mobile App Development', description: 'Cross-platform native experiences with immersive speed and polish.' },
  { title: 'Cloud & DevOps', description: 'Serverless pipelines, infrastructure as code, and secure deployment automation.' },
  { title: 'UI/UX Design', description: 'Future-facing interfaces with motion, accessibility, and brand cohesion.' },
  { title: 'Data Engineering', description: 'Streaming pipelines, analytics frameworks, and scalable data systems.' }
];

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Docker', 'AWS', 'Python', 'Figma', 'Terraform'
];

const projects = [
  { title: 'NeonGrid Platform', label: 'Enterprise AI', description: 'Adaptive workflow automation with real-time decision telemetry.', accent: 'AI' },
  { title: 'PulseWave App', label: 'Mobile Experience', description: 'A premium customer app built with pixel-perfect motion and offline resilience.', accent: 'Mobile' },
  { title: 'CoreSync Cloud', label: 'Cloud Foundation', description: 'Secure multi-region infrastructure with policy-driven reliability.', accent: 'Cloud' }
];

const testimonials = [
  { quote: 'RothSpark helped us define a bold product vision and delivered a launch-quality platform on schedule.', name: 'Alicia Harper', role: 'VP of Product, Atlas Labs' },
  { quote: 'Every interaction felt premium — the team brought clarity, speed, and a truly modern digital presence.', name: 'Devon Reed', role: 'CTO, Meridian Finance' },
  { quote: 'Their technical fluency and design finesse made complex systems feel effortless for our enterprise users.', name: 'Priya Malhotra', role: 'Head of Growth, Nova Dynamics' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-900 text-slate-100">
      <div className="absolute inset-x-0 top-0 h-96 bg-radial-glow opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.12),transparent_26%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <section className="relative z-10 grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-slate-800/75 px-4 py-2 text-sm uppercase tracking-[0.28em] text-sky-300">Built for ambitious growth</span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl">RothSpark designs intelligent platforms, premium apps, and cloud ecosystems for tomorrow’s leaders.</h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">From AI-enabled products to secure DevOps fabric, we engineer polished digital systems with experience, speed, and scale.</p>
              <p className="max-w-xl text-base leading-7 text-slate-400">RothSpark bridges product strategy, UX, and engineering to deliver next-gen platforms that feel premium and move fast.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-spark-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-spark-400">Start a project</a>
              <a href="/work" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:bg-white/10">See our work</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800/90 p-8 shadow-glow backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.14),transparent_35%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-800/80 p-4 ring-1 ring-white/10">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Insight Pulse</p>
                  <p className="mt-2 text-xl font-semibold text-white">Data velocity meets elegant design.</p>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-spark-500/15 text-spark-300">01</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-spark-400/30">
                  <h3 className="text-sm uppercase tracking-[0.22em] text-slate-400">Cloud orchestration</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Autonomous deployment logic with secure pipelines and observability.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-spark-400/30">
                  <h3 className="text-sm uppercase tracking-[0.22em] text-slate-400">Adaptive intelligence</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Human-centered AI that learns with context, not complexity.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeading title="About RothSpark" subtitle="Brand story" />
              <p className="max-w-xl text-lg leading-8 text-slate-300">At RothSpark, we combine next-gen software, AI orchestration, and refined product strategy to help brands deliver compelling digital systems. Our team shapes platforms that feel premium, future-proof, and built for rapid scale.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-6 shadow-soft">
                  <p className="text-3xl font-semibold text-white">20+</p>
                  <p className="mt-2 text-sm text-slate-400">Years of combined product and engineering leadership.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-6 shadow-soft">
                  <p className="text-3xl font-semibold text-white">50+</p>
                  <p className="mt-2 text-sm text-slate-400">Delivered enterprise-grade digital experiences.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-6 shadow-soft backdrop-blur-xl transition hover:-translate-y-1">
                <span className="inline-flex rounded-full bg-sky-300/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-sky-200">Vision</span>
                <p className="mt-4 text-lg font-semibold text-white">Design systems that adapt, scale, and feel intuitive.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-6 shadow-soft backdrop-blur-xl transition hover:-translate-y-1">
                <span className="inline-flex rounded-full bg-spark-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-spark-300">Promise</span>
                <p className="mt-4 text-lg font-semibold text-white">Technology built with clarity, speed, and elegant execution.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <SectionHeading title="Our services" subtitle="What we deliver" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        <section id="team" className="py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeading title="Why choose us" subtitle="Premium differentiation" />
              <p className="max-w-xl text-lg leading-8 text-slate-300">Our process blends product thinking, immersive user experiences, and resilient system design. We partner with teams that want more than code — they want strategic technology that amplifies brand and business impact.</p>
            </div>
            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-6 shadow-soft backdrop-blur-xl transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-white">Strategic execution</h3>
                <p className="mt-3 text-slate-300">End-to-end delivery from concept to launch with measurable outcomes.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-800/80 p-6 shadow-soft backdrop-blur-xl transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-white">Crafted for performance</h3>
                <p className="mt-3 text-slate-300">Fast, accessible experiences designed for scale in web and mobile ecosystems.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" className="py-16">
          <SectionHeading title="Technology stack" subtitle="Modern toolkit" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {technologies.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </section>

        <section id="work" className="py-16">
          <SectionHeading title="Featured projects" subtitle="RothSpark portfolio" />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <SectionHeading title="Client outcomes" subtitle="Trusted by leaders" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-800/80 p-8 shadow-soft backdrop-blur-xl">
              <span className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-sky-300">Contact</span>
              <h2 className="text-3xl font-semibold text-white">Let’s build what’s next.</h2>
              <p className="text-slate-300">Talk to RothSpark about your initiative and we’ll help you define a bold digital foundation for growth.</p>
              <div className="space-y-4 text-sm text-slate-400">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@rothspark.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Office</p>
                  <p>New York · London · Remote</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-1 text-slate-300">
                <a href="#" className="transition hover:text-white">LinkedIn</a>
                <a href="#" className="transition hover:text-white">Twitter</a>
                <a href="#" className="transition hover:text-white">Dribbble</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
