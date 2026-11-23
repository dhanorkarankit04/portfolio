import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary/60">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-ink-primary">
              <span className="text-gradient">Ankit Dhanorkar</span>
            </p>
            <p className="mt-1 font-mono text-xs text-ink-secondary">
              Software Developer · VFX Pipeline Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-secondary transition-colors hover:text-pastel-cyan"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-secondary transition-colors hover:text-pastel-lavender"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-ink-secondary transition-colors hover:text-pastel-blue"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#top"
              className="flex h-9 w-9 items-center justify-center rounded-lg glass text-ink-secondary transition-all hover:border-pastel-cyan/30 hover:text-ink-primary"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-xs text-ink-secondary">
          © {year} Ankit Dhanorkar. Built with care. Deployable free to GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
