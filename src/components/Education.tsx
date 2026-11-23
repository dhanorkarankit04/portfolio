import { GraduationCap, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { education } from '@/data/profile';

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-content px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="05 — Education"
        title="Education & certifications"
        description="Academic background and technical certifications. Placeholder entries are marked and can be updated with verified details."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => {
          const Icon = i === 0 ? GraduationCap : Award;
          return (
            <div
              key={item.degree}
              className="reveal rounded-2xl glass p-6 transition-all hover:border-pastel-lavender/25 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-pastel-lavender">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-primary">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-secondary">{item.institution}</p>
              <p className="mt-3 font-mono text-xs text-pastel-lavender">{item.dateLabel}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
