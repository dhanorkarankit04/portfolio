import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profile, aboutHighlights } from '@/data/profile';

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-content px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="01 — About"
        title="Engineering at the intersection of software and creative production"
      />

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        {/* Portrait */}
        <div className="reveal relative mx-auto w-full max-w-sm md:sticky md:top-28">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pastel-lavender/20 via-pastel-cyan/15 to-pastel-blue/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl glass-strong p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-bg-surface to-bg-secondary">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pastel-lavender to-pastel-cyan font-display text-3xl font-bold text-bg-base">
                  AD
                </div>
                <p className="font-mono text-xs text-ink-secondary">[ Portrait placeholder ]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="space-y-6">
          <p className="reveal text-lg leading-relaxed text-ink-secondary">
            {profile.intro}
          </p>
          <p className="reveal text-base leading-relaxed text-ink-secondary">
            {profile.philosophy}
          </p>

          <ul className="reveal grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl glass px-4 py-3 text-sm text-ink-primary transition-colors hover:border-pastel-cyan/25"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pastel-mint" />
                {item}
              </li>
            ))}
          </ul>

          <div className="reveal flex flex-wrap gap-3 pt-2 font-mono text-xs text-ink-secondary">
            <span className="rounded-full glass px-3 py-1">
              Currently at{' '}
              <span className="text-pastel-cyan">{profile.organization}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
