export default function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm uppercase tracking-wider font-medium text-brand-indigo/70">{subtitle}</p>
      <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">{title}</h2>
    </div>
  );
}
