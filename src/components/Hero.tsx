import { useEffect, useState } from 'react';
import { ArrowRight, Download, Linkedin, Terminal } from 'lucide-react';
import { ParticleNetwork } from './ParticleNetwork';
import { profile } from '@/data/profile';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    let timeout: number;

    if (!deleting && displayed.length < current.length) {
      timeout = window.setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && displayed.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }

    return () => window.clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0">
        <ParticleNetwork />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-base/40 via-transparent to-bg-base" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-pastel-cyan/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-pastel-lavender/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-content gap-12 px-6 pt-32 pb-20 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-pastel-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pastel-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pastel-mint" />
            </span>
            Available for opportunities
          </div>

          <h1 className="reveal font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-primary sm:text-5xl lg:text-6xl">
            {profile.headline.split(' & ')[0]}
            <span className="text-gradient"> &amp; </span>
            {profile.headline.split(' & ')[1]}
          </h1>

          <div className="reveal mt-6 flex h-8 items-center gap-2 font-mono text-base sm:text-lg">
            <Terminal size={18} className="text-pastel-cyan" />
            <span className="text-ink-secondary">$</span>
            <span className="font-medium text-ink-primary">{displayed}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-blink bg-pastel-lavender" />
          </div>

          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg">
            {profile.tagline}
          </p>

          <div className="reveal mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pastel-cyan to-pastel-blue px-6 py-3 font-semibold text-bg-base transition-all hover:shadow-[0_0_30px_-5px_rgba(168,230,225,0.6)]"
            >
              Explore My Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold text-ink-primary transition-all hover:border-pastel-cyan/30 hover:glow-cyan"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold text-ink-primary transition-all hover:border-pastel-lavender/30 hover:glow-lavender"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Portrait / visual card */}
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="relative animate-float-slow">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pastel-cyan/20 via-pastel-lavender/15 to-pastel-blue/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl glass-strong p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-bg-surface to-bg-secondary">
                {/* Placeholder portrait — replace /public/portrait.jpg */}
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pastel-cyan to-pastel-lavender font-display text-3xl font-bold text-bg-base">
                    AD
                  </div>
                  <p className="font-mono text-xs text-ink-secondary">
                    [ Portrait placeholder ]
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-3 font-mono text-xs">
              <p className="text-pastel-cyan">pip install</p>
              <p className="text-ink-primary">ankit-dhanorkar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
