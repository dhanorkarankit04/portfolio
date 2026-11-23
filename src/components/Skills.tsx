import {
  Code2,
  Server,
  AppWindow,
  Container,
  Clapperboard,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillCategories } from '@/data/profile';

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Server,
  AppWindow,
  Container,
  Clapperboard,
  Sparkles,
};

const ACCENT_MAP = {
  cyan: {
    text: 'text-pastel-cyan',
    border: 'hover:border-pastel-cyan/30',
    glow: 'hover:glow-cyan',
    chip: 'bg-pastel-cyan/10 text-pastel-cyan border-pastel-cyan/20',
  },
  lavender: {
    text: 'text-pastel-lavender',
    border: 'hover:border-pastel-lavender/30',
    glow: 'hover:glow-lavender',
    chip: 'bg-pastel-lavender/10 text-pastel-lavender border-pastel-lavender/20',
  },
  blue: {
    text: 'text-pastel-blue',
    border: 'hover:border-pastel-blue/30',
    glow: 'hover:glow-blue',
    chip: 'bg-pastel-blue/10 text-pastel-blue border-pastel-blue/20',
  },
  mint: {
    text: 'text-pastel-mint',
    border: 'hover:border-pastel-mint/30',
    glow: 'hover:shadow-[0_0_40px_-10px_rgba(184,242,216,0.4)]',
    chip: 'bg-pastel-mint/10 text-pastel-mint border-pastel-mint/20',
  },
} as const;

export function Skills() {
  return (
    <section id="skills" className="relative bg-bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="02 — Skills"
          title="A full-stack toolkit for software and pipeline engineering"
          description="From backend services and desktop applications to VFX pipeline automation — a categorized view of the technologies I work with."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Code2;
            const accent = ACCENT_MAP[cat.accent];
            return (
              <div
                key={cat.title}
                className={`reveal group rounded-2xl glass p-6 transition-all duration-300 ${accent.border} ${accent.glow} hover:-translate-y-1`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${accent.text}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-primary">
                    {cat.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-transform group-hover:scale-[1.02] ${accent.chip}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
