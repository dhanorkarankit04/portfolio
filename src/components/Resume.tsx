import { Download, Linkedin, Github, FileText } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profile } from '@/data/profile';

export function Resume() {
  return (
    <section id="resume" className="relative bg-bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="06 — Resume"
          title="Download my full resume"
          description="A complete career summary is available as a PDF. Replace the placeholder file with your latest resume when ready."
        />

        <div className="reveal grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl glass p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pastel-cyan to-pastel-blue text-bg-base">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-primary">
                  Career Summary
                </h3>
                <p className="font-mono text-xs text-ink-secondary">resume.pdf</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-ink-secondary">
              {profile.intro}
            </p>

            <p className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-3 font-mono text-xs text-amber-200/80">
              Note: Place your resume PDF at <code className="text-amber-200">/public/resume.pdf</code> to enable the download button.
            </p>

            <a
              href={profile.resumeUrl}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pastel-cyan to-pastel-blue px-6 py-3 font-semibold text-bg-base transition-all hover:shadow-[0_0_30px_-5px_rgba(168,230,225,0.6)]"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex items-center gap-4 rounded-2xl glass p-6 transition-all hover:border-pastel-lavender/25 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-pastel-lavender transition-colors group-hover:bg-pastel-lavender/15">
                <Linkedin size={22} />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-ink-primary">LinkedIn</h4>
                <p className="text-sm text-ink-secondary">View professional profile</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex items-center gap-4 rounded-2xl glass p-6 transition-all hover:border-pastel-cyan/25 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-pastel-cyan transition-colors group-hover:bg-pastel-cyan/15">
                <Github size={22} />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-ink-primary">GitHub</h4>
                <p className="text-sm text-ink-secondary">Browse source code & tools</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
