"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink, Loader2, ArrowLeft, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Custom SVG icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className ?? "w-5 h-5"}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const GitForkIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9" />
    <path d="M12 15V9" />
  </svg>
);

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

// GitHub username — update here to change all references
const GITHUB_USERNAME = "dharm1123";

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "urban-city-analysis",
    description:
      "Predictive ML system for smart city analytics with crime prediction, accident severity classification, and passenger demand forecasting.",
    html_url: "https://github.com/dharm1123/urban-city-analysis",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["machine-learning", "python", "data-science", "random-forest"],
    updated_at: "2024-01-01T00:00:00Z",
    fork: false,
  },
  {
    id: 2,
    name: "wildlife-species-recognition",
    description:
      "Deep learning system for wildlife conservation with 90+ species classification using EfficientNetB2 and Grad-CAM explainability.",
    html_url: "https://github.com/dharm1123/wildlife-species-recognition",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: [
      "deep-learning",
      "tensorflow",
      "computer-vision",
      "transfer-learning",
    ],
    updated_at: "2024-01-01T00:00:00Z",
    fork: false,
  },
  {
    id: 3,
    name: "khedut-sahayak",
    description:
      "Multi-agent AI agricultural advisory system using LangChain, LangGraph, and Azure OpenAI for crop health and market insights.",
    html_url: "https://github.com/dharm1123/khedut-sahayak",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["langchain", "generative-ai", "multi-agent", "rag"],
    updated_at: "2024-01-01T00:00:00Z",
    fork: false,
  },
  {
    id: 4,
    name: "ml-projects",
    description:
      "Collection of machine learning projects demonstrating various ML techniques and algorithms.",
    html_url: "https://github.com/dharm1123/ml-projects",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["machine-learning", "python", "scikit-learn"],
    updated_at: "2024-01-01T00:00:00Z",
    fork: false,
  },
  {
    id: 5,
    name: "deep-learning-projects",
    description:
      "Deep learning projects covering CNN, RNN, and transformer architectures using PyTorch and TensorFlow.",
    html_url: "https://github.com/dharm1123/deep-learning-projects",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["deep-learning", "pytorch", "tensorflow", "neural-networks"],
    updated_at: "2024-01-01T00:00:00Z",
    fork: false,
  },
  {
    id: 6,
    name: "genai-projects",
    description:
      "Generative AI experiments with LLMs, LangChain, and prompt engineering techniques.",
    html_url: "https://github.com/dharm1123/genai-projects",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["generative-ai", "llm", "langchain", "prompt-engineering"],
    updated_at: "2024-01-01T00:00:00Z",
    fork: false,
  },
];

const languageColors: { [key: string]: string } = {
  Python: "bg-yellow-400",
  JavaScript: "bg-yellow-300",
  TypeScript: "bg-blue-400",
  "Jupyter Notebook": "bg-orange-400",
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
  Shell: "bg-green-400",
  Go: "bg-cyan-400",
  Rust: "bg-orange-600",
};

export default function ReposPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState<string>("All");
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );
        if (response.ok) {
          const data: GitHubRepo[] = await response.json();
          const publicRepos = data.filter((r) => !r.fork);
          setRepos(publicRepos.length > 0 ? publicRepos : fallbackRepos);
        } else {
          setRepos(fallbackRepos);
        }
      } catch {
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Unique languages from loaded repos
  const languages = [
    "All",
    ...Array.from(
      new Set(repos.map((r) => r.language).filter(Boolean) as string[])
    ).sort(),
  ];

  const filtered = repos.filter((repo) => {
    const matchLang =
      selectedLang === "All" || repo.language === selectedLang;
    const query = search.toLowerCase();
    const matchSearch =
      !query ||
      repo.name.toLowerCase().includes(query) ||
      (repo.description ?? "").toLowerCase().includes(query) ||
      repo.topics.some((t) => t.toLowerCase().includes(query));
    return matchLang && matchSearch;
  });

  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Back link */}
      <div className="container-custom pt-8 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: "var(--muted-foreground)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      <section className="section-padding pt-10">
        <div className="container-custom" ref={headerRef}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Open Source</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              GitHub <span className="gradient-text">Repositories</span>
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--muted-foreground)" }}
            >
              Explore my public repositories showcasing projects in machine
              learning, deep learning, and generative AI.
            </p>

            <div className="mt-6">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "var(--muted-foreground)" }}
              />
              <input
                type="text"
                placeholder="Search repositories…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none transition-all"
                style={{
                  background: "var(--interest-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                }}
              />
            </div>

            {/* Language filter chips */}
            <div className="flex flex-wrap gap-2 items-center">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                  style={
                    selectedLang === lang
                      ? {
                          background: "var(--accent)",
                          color: "#fff",
                          border: "1px solid var(--accent)",
                        }
                      : {
                          background: "var(--interest-bg)",
                          color: "var(--muted-foreground)",
                          border: "1px solid var(--border)",
                        }
                  }
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Count */}
          {!loading && (
            <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>
              Showing {filtered.length} of {repos.length}{" "}
              {repos.length === 1 ? "repository" : "repositories"}
            </p>
          )}

          {/* Repos Grid */}
          {loading ? (
            <div className="flex justify-center py-24">
              <Loader2
                className="w-8 h-8 animate-spin"
                style={{ color: "var(--accent-2)" }}
              />
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="text-center py-24"
              style={{ color: "var(--muted-foreground)" }}
            >
              No repositories match your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.06, 0.6),
                  }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                  >
                    <Card
                      className="glass-card border-transparent h-full transition-all duration-200 group-hover:scale-[1.02]"
                      style={{ borderColor: "transparent" }}
                    >
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2 min-w-0">
                            <GithubIcon className="w-4 h-4 shrink-0 text-[var(--muted-foreground)]" />
                            <h3
                              className="text-base font-semibold truncate"
                              style={{ color: "var(--foreground)" }}
                            >
                              {repo.name}
                            </h3>
                          </div>
                          <ExternalLink
                            className="w-4 h-4 shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: "var(--muted-foreground)" }}
                          />
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm mb-4 flex-grow line-clamp-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {repo.description ?? "No description available"}
                        </p>

                        {/* Topics */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <Badge
                                key={topic}
                                variant="secondary"
                                className="tag-cyan text-xs border-0"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Footer */}
                        <div
                          className="flex items-center justify-between text-xs"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          <div className="flex items-center gap-1">
                            {repo.language && (
                              <>
                                <span
                                  className={`w-2.5 h-2.5 rounded-full ${
                                    languageColors[repo.language] ??
                                    "bg-slate-400"
                                  }`}
                                />
                                <span>{repo.language}</span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5" />
                              <span>{repo.stargazers_count}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GitForkIcon className="w-3.5 h-3.5" />
                              <span>{repo.forks_count}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-8 text-sm"
        style={{
          color: "var(--muted-foreground)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Link href="/" className="hover:underline transition-colors">
          ← Back to Portfolio
        </Link>
        <span className="mx-3 opacity-40">·</span>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors"
        >
          github.com/{GITHUB_USERNAME}
        </a>
      </footer>
    </main>
  );
}
