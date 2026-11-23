interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-pastel-cyan">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-secondary">{description}</p>
      )}
    </div>
  );
}
