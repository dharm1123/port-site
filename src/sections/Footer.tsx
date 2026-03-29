"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        {/* Webring Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <button
              className="p-2 hover:text-[var(--foreground)] transition-colors"
              aria-label="Previous site"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-md">
              <span className="w-2 h-2 rounded-full bg-[var(--foreground)]" />
              <span className="font-mono text-xs">AI/ML Webring</span>
            </div>

            <button
              className="p-2 hover:text-[var(--foreground)] transition-colors"
              aria-label="Next site"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center space-y-4"
        >
          <p className="text-sm text-[var(--muted-foreground)]">
            Built with ♡ by Dharm Dudhagara
          </p>

          <p className="text-xs text-[var(--muted-foreground)]">
            © {currentYear} All rights reserved.
          </p>

          {/* Tech Stack */}
          <div className="flex items-center justify-center gap-4 text-xs text-[var(--muted-foreground)]">
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion</span>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Back to top ↑
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
