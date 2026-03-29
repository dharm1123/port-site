"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import TiltCard from "@/components/TiltCard";

const skillCategories = [
/*...*/
// ... keeping the categories ... //
/*...*/
  // ... let's replace everything below accurately:
  {
    title: "Programming",      icon: "💻", tagClass: "tag-cyan",
    skills: ["Python", "SQL", "MySQL"],
  },
  {
    title: "Machine Learning", icon: "🤖", tagClass: "tag-violet",
    skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Transfer Learning", "EfficientNet"],
  },
  {
    title: "Deep Learning",    icon: "🧠", tagClass: "tag-pink",
    skills: ["Neural Networks", "CNN", "ANN", "Grad-CAM", "Feature Engineering", "EDA"],
  },
  {
    title: "Generative AI / LLM", icon: "✨", tagClass: "tag-violet",
    skills: ["LangChain", "LangGraph", "RAG", "HuggingFace", "Azure OpenAI", "Prompt Engineering", "FAISS", "Multi-Agent Systems"],
  },
  {
    title: "NLP & Computer Vision", icon: "👁️", tagClass: "tag-cyan",
    skills: ["Natural Language Processing", "Computer Vision", "Image Classification", "TensorFlow Lite"],
  },
  {
    title: "Tools & Platforms", icon: "🛠️", tagClass: "tag-pink",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "FastAPI", "Git", "Google Colab", "Azure", "Jupyter"],
  },
];

const proficiencies = [
  { label: "Machine Learning", level: 90, gradient: "linear-gradient(90deg, var(--accent), var(--accent-2))" },
  { label: "Deep Learning",    level: 85, gradient: "linear-gradient(90deg, var(--accent-2), var(--accent))" },
  { label: "Generative AI",    level: 80, gradient: "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, var(--accent-2)))" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label section-label-cyan">Technical Skills</span>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
              Technologies <span className="gradient-text">I Work With</span>
            </h2>
            <div className="section-divider" style={{ background: "linear-gradient(90deg, color-mix(in srgb, var(--accent-2) 40%, transparent), transparent)" }} />
          </div>
          <p className="mt-3 max-w-xl text-sm" style={{ color: "var(--muted-foreground)" }}>
            A comprehensive toolkit spanning from data analysis to production-grade AI applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-xl overflow-hidden preserve-3d"
            >
              <TiltCard className="glass-card gradient-border rounded-xl p-6 group h-full w-full">
                <div className="flex items-center gap-3 mb-4 transform transition-transform duration-300 group-hover:translate-z-20">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 transform transition-transform duration-300 group-hover:translate-z-10">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={cat.tagClass}>{skill}</span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>




      </div>
    </section>
  );
}
