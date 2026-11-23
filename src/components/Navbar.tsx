import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 24);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (top / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <a
            href="#top"
            onClick={close}
            className="font-display text-lg font-semibold tracking-tight text-ink-primary"
          >
            <span className="text-gradient">AD</span>
            <span className="ml-1 hidden sm:inline">Ankit Dhanorkar</span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-pastel-cyan to-pastel-lavender transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/ankitdhanorkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-dhanorkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <button
            className="text-ink-primary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div
          className="h-0.5 bg-gradient-to-r from-pastel-cyan via-pastel-lavender to-pastel-blue transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={close}
        />
        <aside
          className={`glass-strong absolute right-0 top-0 flex h-full w-72 flex-col gap-2 px-6 pb-8 pt-24 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg px-4 py-3 text-base font-medium text-ink-secondary transition-colors hover:bg-white/5 hover:text-ink-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto flex gap-4 px-4">
            <a
              href="https://github.com/ankitdhanorkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-secondary hover:text-ink-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-dhanorkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-secondary hover:text-ink-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
