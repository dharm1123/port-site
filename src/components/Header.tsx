"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X, Mail } from "lucide-react";
import Link from "next/link";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-3.5 h-3.5"}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-3.5 h-3.5"}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navLinks = [
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Projects", href: "#projects" },
  { name: "Life",     href: "#life"     },
  { name: "Repos",    href: "/repos"    },
];

export default function Header() {
  const [isDark, setIsDark]       = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Renders a single nav item — hash links scroll, page routes use Next Link
  const NavItem = ({
    link,
    className,
    mobile = false,
  }: {
    link: { name: string; href: string };
    className: string;
    mobile?: boolean;
  }) => {
    if (link.href.startsWith("#")) {
      return (
        <button
          key={link.name}
          onClick={() => scrollTo(link.href)}
          className={className}
          style={{ color: "var(--nav-text)" }}
          {...(!mobile && {
            onMouseEnter: (e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--nav-hover-bg)";
              (e.currentTarget as HTMLElement).style.color = "var(--nav-hover-text)";
            },
            onMouseLeave: (e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--nav-text)";
            },
          })}
        >
          {link.name}
        </button>
      );
    }
    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={() => setIsMenuOpen(false)}
        className={className}
        style={{ color: "var(--nav-text)" }}
        {...(!mobile && {
          onMouseEnter: (e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--nav-hover-bg)";
            (e.currentTarget as HTMLElement).style.color = "var(--nav-hover-text)";
          },
          onMouseLeave: (e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--nav-text)";
          },
        })}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <>
      {/* Scroll progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{ borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}` }}
      >
        {/* Marquee strip */}
        <div 
          className="overflow-hidden py-2" 
          style={{ 
            background: "var(--marquee-bg)",
            borderBottom: "1px solid color-mix(in srgb, var(--marquee-color) 20%, transparent)" 
          }}
        >
          <div className="flex whitespace-nowrap">
            <div className="flex animate-marquee">
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  aria-hidden={i >= 10}
                  className="text-xs font-semibold tracking-[0.18em] mx-8 uppercase select-none transition-colors"
                  style={{ color: "var(--marquee-color)" }}
                >
                  Dharm Dudhagara
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Nav bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Left: social links */}
          <div className="hidden sm:flex items-center gap-5">
            {[
              { href: "mailto:dudhagaradharm53@gmail.com", label: "Email",    Icon: Mail,        external: false },
              { href: "https://linkedin.com/in/dharmdudhagara", label: "LinkedIn", Icon: LinkedinIcon, external: true  },
              { href: "https://github.com/dharm1123",           label: "GitHub",   Icon: GithubIcon,   external: true  },
            ].map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-1.5 text-sm link-hover transition-colors"
                style={{ color: "var(--nav-text)" }}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}
          </div>

          {/* Center: nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.name}
                link={link}
                className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all"
              />
            ))}
          </nav>

          {/* Right: theme toggle + mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all"
              style={{ border: "1px solid var(--border)", background: "var(--interest-bg)", color: "var(--muted-foreground)" }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div key="sun" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                    <Sun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ scale: 0, rotate: 90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Moon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all"
              style={{ border: "1px solid var(--border)", background: "var(--interest-bg)", color: "var(--muted-foreground)" }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <NavItem
                    key={link.name}
                    link={link}
                    mobile
                    className="block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-all"
                  />
                ))}
                <div className="pt-3 mt-3 flex gap-5" style={{ borderTop: "1px solid var(--border)" }}>
                  <a href="mailto:dudhagaradharm53@gmail.com" className="flex items-center gap-1.5 text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                  <a href="https://linkedin.com/in/dharmdudhagara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>
                    <LinkedinIcon /> LinkedIn
                  </a>
                  <a href="https://github.com/dharm1123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm transition-colors" style={{ color: "var(--muted-foreground)" }}>
                    <GithubIcon /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-[88px]" />
    </>
  );
}
