import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profile } from '@/data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available — no-op
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-content px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="07 — Contact"
        title="Let's build something together"
        description="Open to software development, pipeline, and technical leadership roles. Reach out through any channel below."
      />

      <div className="reveal relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-pastel-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-pastel-lavender/10 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-2">
          {/* Email card */}
          <div>
            <h3 className="mb-2 font-display text-lg font-semibold text-ink-primary">
              Professional Email
            </h3>
            <p className="mb-5 text-sm text-ink-secondary">
              The fastest way to reach me. Click to copy or send directly.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 rounded-xl glass px-4 py-3 font-mono text-sm text-ink-primary transition-all hover:border-pastel-cyan/30"
                aria-label="Copy email address"
              >
                <Mail size={16} className="text-pastel-cyan" />
                {profile.email}
                {copied ? (
                  <Check size={16} className="text-pastel-mint" />
                ) : (
                  <Copy size={14} className="text-ink-secondary transition-colors group-hover:text-ink-primary" />
                )}
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pastel-cyan to-pastel-blue px-5 py-3 font-semibold text-bg-base transition-all hover:shadow-[0_0_30px_-5px_rgba(168,230,225,0.6)]"
              >
                <Send size={16} />
                Send Email
              </a>
            </div>

            <p className="mt-3 font-mono text-xs text-ink-secondary">
              {copied ? 'Email copied to clipboard.' : 'Click the address to copy it.'}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl glass px-5 py-4 transition-all hover:border-pastel-lavender/25"
            >
              <Linkedin size={20} className="text-pastel-lavender" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink-primary">LinkedIn</p>
                <p className="font-mono text-xs text-ink-secondary">/in/ankit-dhanorkar</p>
              </div>
              <span className="text-ink-secondary transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl glass px-5 py-4 transition-all hover:border-pastel-cyan/25"
            >
              <Github size={20} className="text-pastel-cyan" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink-primary">GitHub</p>
                <p className="font-mono text-xs text-ink-secondary">/ankitdhanorkar</p>
              </div>
              <span className="text-ink-secondary transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="flex items-center gap-4 rounded-xl glass px-5 py-4">
              <MapPin size={20} className="text-pastel-blue" />
              <div>
                <p className="text-sm font-semibold text-ink-primary">Location</p>
                <p className="font-mono text-xs text-ink-secondary">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
