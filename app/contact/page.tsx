import SectionHeading from '../../components/SectionHeading';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading title="Contact" subtitle="Let’s connect" />
        <p className="max-w-3xl text-lg leading-8 text-slate-300">Send us a message to discuss your next product, platform, or growth initiative. We’ll follow up with a clear plan and timeline.</p>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-800/80 p-8 shadow-soft backdrop-blur-xl">
            <span className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-sky-300">Reach out</span>
            <h2 className="text-3xl font-semibold text-white">Work with RothSpark.</h2>
            <p className="text-slate-300">Email, office information, and social links for engaging with our product and engineering studio.</p>
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
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
