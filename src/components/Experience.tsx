import { Briefcase } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experience } from '@/data/profile';

const ACCENT_DOT = {
  cyan: 'bg-pastel-cyan',
  lavender: 'bg-pastel-lavender',
  blue: 'bg-pastel-blue',
  mint: 'bg-pastel-mint',
} as const;

const ACCENT_TEXT = {
  cyan: 'text-pastel-cyan',
  lavender: 'text-pastel-lavender',
  blue: 'text-pastel-blue',
  mint: 'text-pastel-mint',
} as const;

export function Experience() {
  return (
    <section id="experience" className="relative bg-bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="04 — Experience"
          title="Professional experience across engineering and production"
          description="A path through VFX pipeline development, technical leadership, and production supervision."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-pastel-cyan/40 via-pastel-lavender/30 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <div
                key={item.role}
                className={`reveal relative flex gap-6 md:w-1/2 ${
                  i % 2 === 0 ? 'md:ml-auto md:flex-row md:pl-12' : 'md:flex-row-reverse md:pr-12 md:text-right'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1.5 -translate-x-1/2 md:left-auto md:right-auto md:top-1.5"
                  style={i % 2 === 0 ? { left: 'auto', right: '-6px' } : { left: '-6px' }}
                >
                  <span className={`block h-3 w-3 rounded-full ${ACCENT_DOT[item.accent]} ring-4 ring-bg-base`} />
                </div>

                <div className="ml-10 flex-1 md:ml-0">
                  <div className="rounded-2xl glass p-6 transition-all hover:border-pastel-cyan/20">
                    <div className={`mb-1 flex items-center gap-2 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={16} className={ACCENT_TEXT[item.accent]} />
                      <span className={`font-mono text-xs ${ACCENT_TEXT[item.accent]}`}>
                        {item.dateLabel}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink-primary">
                      {item.role}
                    </h3>
                    <p className="mb-4 text-sm text-ink-secondary">{item.organization}</p>
                    <ul className={`space-y-2 ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-ink-secondary">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${ACCENT_DOT[item.accent]}`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
