export default function TechBadge({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-brand-dark shadow-card hover:border-brand-indigo/50 hover:bg-brand-indigo/5 transition-all duration-300 inline-block">
      {label}
    </div>
  );
}
