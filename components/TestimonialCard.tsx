export default function TestimonialCard({ testimonial }: { testimonial: { quote: string; name: string; role: string } }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card hover:border-brand-indigo/50 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 flex gap-1 text-xl">⭐⭐⭐⭐⭐</div>
      <p className="text-base leading-7 text-brand-dark font-medium">"{testimonial.quote}"</p>
      <div className="mt-6 border-t border-slate-200 pt-5 text-sm">
        <p className="font-semibold text-brand-dark">{testimonial.name}</p>
        <p className="text-brand-slate">{testimonial.role}</p>
      </div>
    </div>
  );
}
