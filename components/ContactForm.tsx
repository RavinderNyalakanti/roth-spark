export default function ContactForm() {
  return (
    <form className="rounded-xl border border-slate-200 bg-white p-8 shadow-card">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-dark">Name</label>
          <input id="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-brand-dark outline-none transition placeholder:text-brand-slate focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-dark">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-brand-dark outline-none transition placeholder:text-brand-slate focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-brand-dark">Message</label>
          <textarea id="message" rows={5} placeholder="Tell us about your project" className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-brand-dark outline-none transition placeholder:text-brand-slate focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/10" />
        </div>
      </div>
      <button type="submit" className="mt-6 w-full rounded-lg bg-brand-indigo px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-indigo/90 shadow-soft">
        Send message
      </button>
    </form>
  );
}
