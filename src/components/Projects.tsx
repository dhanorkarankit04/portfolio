import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Github, X, FolderGit2, Wrench, Lightbulb, UserCog, Boxes } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { projects, type Project } from '@/data/profile';

const ACCENT_MAP = {
  cyan: { text: 'text-pastel-cyan', ring: 'ring-pastel-cyan/30', chip: 'bg-pastel-cyan/10 text-pastel-cyan border-pastel-cyan/20', glow: 'from-pastel-cyan/15', border: 'hover:border-pastel-cyan/30' },
  lavender: { text: 'text-pastel-lavender', ring: 'ring-pastel-lavender/30', chip: 'bg-pastel-lavender/10 text-pastel-lavender border-pastel-lavender/20', glow: 'from-pastel-lavender/15', border: 'hover:border-pastel-lavender/30' },
  blue: { text: 'text-pastel-blue', ring: 'ring-pastel-blue/30', chip: 'bg-pastel-blue/10 text-pastel-blue border-pastel-blue/20', glow: 'from-pastel-blue/15', border: 'hover:border-pastel-blue/30' },
  mint: { text: 'text-pastel-mint', ring: 'ring-pastel-mint/30', chip: 'bg-pastel-mint/10 text-pastel-mint border-pastel-mint/20', glow: 'from-pastel-mint/15', border: 'hover:border-pastel-mint/30' },
} as const;

const FILTERS = ['All', 'VFX Pipeline / Python Automation', 'Desktop Software', 'Pipeline Automation', 'Business Software', 'Business Application'];

export function Projects() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="relative mx-auto max-w-content px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Selected work across software and pipeline engineering"
        description="Each project below is real and built for production use. Click any card for the full breakdown — problem, solution, architecture, and my contribution."
      />

      {/* Filters */}
      <div className="reveal mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 font-mono text-xs transition-all ${
              active === f
                ? 'bg-gradient-to-r from-pastel-cyan to-pastel-blue text-bg-base'
                : 'glass text-ink-secondary hover:text-ink-primary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => {
          const accent = ACCENT_MAP[project.accent];
          return (
            <article
              key={project.id}
              className={`reveal group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 ${accent.border}`}
            >
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${accent.glow} to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-50`}
              />

              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className={`mb-2 font-mono text-xs ${accent.text}`}>{project.category}</p>
                    <h3 className="font-display text-xl font-semibold text-ink-primary">
                      {project.title}
                    </h3>
                  </div>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ${accent.text}`}>
                    <FolderGit2 size={20} />
                  </div>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-ink-secondary">
                  {project.shortDescription}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-lg border px-2.5 py-1 font-mono text-xs ${accent.chip}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-primary transition-colors hover:text-pastel-cyan"
                >
                  View details
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const accent = ACCENT_MAP[project.accent];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl glass-strong p-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-1.5 text-ink-secondary transition-colors hover:bg-white/10 hover:text-ink-primary"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <p className={`mb-2 font-mono text-xs ${accent.text}`}>{project.category}</p>
        <h3 className="mb-5 font-display text-2xl font-bold text-ink-primary">
          {project.title}
        </h3>

        {/* Visual placeholder */}
        <div className="mb-6 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-bg-surface to-bg-secondary grid-bg">
          <p className="font-mono text-xs text-ink-secondary">[ Screenshot placeholder ]</p>
        </div>

        <div className="space-y-5">
          <DetailBlock icon={Lightbulb} accent={accent.text} label="Problem" text={project.problem} />
          <DetailBlock icon={Wrench} accent={accent.text} label="Solution" text={project.solution} />
          <DetailBlock icon={UserCog} accent={accent.text} label="My Contribution" text={project.contribution} />
          <DetailBlock icon={Boxes} accent={accent.text} label="Architecture" text={project.architecture} />
          {project.results && (
            <DetailBlock icon={ArrowUpRight} accent={accent.text} label="Results" text={project.results} />
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className={`rounded-lg border px-2.5 py-1 font-mono text-xs ${accent.chip}`}>
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold text-ink-primary transition-all hover:border-pastel-cyan/30"
          >
            <Github size={16} />
            View on GitHub
          </a>
        ) : (
          <p className="mt-6 font-mono text-xs text-ink-secondary">
            GitHub link available upon request.
          </p>
        )}
      </div>
    </div>
  );
}

function DetailBlock({
  icon: Icon,
  accent,
  label,
  text,
}: {
  icon: typeof Lightbulb;
  accent: string;
  label: string;
  text: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-2">
        <Icon size={16} className={accent} />
        <h4 className="font-display text-sm font-semibold text-ink-primary">{label}</h4>
      </div>
      <p className="text-sm leading-relaxed text-ink-secondary">{text}</p>
    </div>
  );
}
