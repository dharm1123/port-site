"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Loader2 } from "lucide-react";

// Custom SVG icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const GitForkIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="18" r="3"/>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="18" cy="6" r="3"/>
    <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/>
    <path d="M12 15V9"/>
  </svg>
);

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

// Featured repos to show first (or fallback if API fails)
const featuredRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "urban-city-analysis",
    description: "Predictive ML system for smart city analytics with crime prediction, accident severity classification, and passenger demand forecasting.",
    html_url: "https://github.com/dharm1123/urban-city-analysis",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["machine-learning", "python", "data-science", "random-forest"],
  },
  {
    id: 2,
    name: "wildlife-species-recognition",
    description: "Deep learning system for wildlife conservation with 90+ species classification using EfficientNetB2 and Grad-CAM explainability.",
    html_url: "https://github.com/dharm1123/wildlife-species-recognition",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["deep-learning", "tensorflow", "computer-vision", "transfer-learning"],
  },
  {
    id: 3,
    name: "khedut-sahayak",
    description: "Multi-agent AI agricultural advisory system using LangChain, LangGraph, and Azure OpenAI for crop health and market insights.",
    html_url: "https://github.com/dharm1123/khedut-sahayak",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["langchain", "generative-ai", "multi-agent", "rag"],
  },
  {
    id: 4,
    name: "ml-projects",
    description: "Collection of machine learning projects demonstrating various ML techniques and algorithms.",
    html_url: "https://github.com/dharm1123/ml-projects",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["machine-learning", "python", "scikit-learn"],
  },
  {
    id: 5,
    name: "deep-learning-projects",
    description: "Deep learning projects covering CNN, RNN, and transformer architectures using PyTorch and TensorFlow.",
    html_url: "https://github.com/dharm1123/deep-learning-projects",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["deep-learning", "pytorch", "tensorflow", "neural-networks"],
  },
  {
    id: 6,
    name: "genai-projects",
    description: "Generative AI experiments with LLMs, LangChain, and prompt engineering techniques.",
    html_url: "https://github.com/dharm1123/genai-projects",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    topics: ["generative-ai", "llm", "langchain", "prompt-engineering"],
  },
];

const languageColors: { [key: string]: string } = {
  Python: "bg-yellow-400",
  JavaScript: "bg-yellow-300",
  TypeScript: "bg-blue-400",
  "Jupyter Notebook": "bg-orange-400",
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
};

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>(featuredRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/dharm1123/repos?sort=updated&per_page=6"
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setRepos(data);
          }
        }
      } catch (error) {
        console.log("Using fallback repos");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            GitHub <span className="gradient-text">Repositories</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore my code repositories showcasing projects in machine learning,
            deep learning, and generative AI.
          </p>

          <div className="mt-8">
            <a
              href="https://github.com/dharm1123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-secondary flex items-center gap-2">
                <GithubIcon />
                View GitHub Profile
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Repos Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="glass-card border-transparent card-hover h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <GithubIcon className="w-5 h-5 text-slate-400" />
                          <h3 className="text-lg font-semibold text-white truncate">
                            {repo.name}
                          </h3>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500" />
                      </div>

                      <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-2">
                        {repo.description || "No description available"}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics?.slice(0, 3).map((topic) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="bg-cyan-400/10 text-cyan-400 text-xs border-0"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-4">
                          {repo.language && (
                            <div className="flex items-center gap-1">
                              <span
                                className={`w-3 h-3 rounded-full ${
                                  languageColors[repo.language] || "bg-slate-400"
                                }`}
                              />
                              <span>{repo.language}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitForkIcon className="w-4 h-4" />
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
  );
}
