"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Brain, Code2, Sparkles, MapPin } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const highlights = [
  { icon: Brain,    title: "Machine Learning", description: "Predictive modeling with ensemble methods", accentVar: "--accent"   },
  { icon: Code2,    title: "Deep Learning",    description: "CNNs, Transfer Learning, TensorFlow",      accentVar: "--accent-2" },
  { icon: Sparkles, title: "Generative AI",    description: "Multi-agent LLMs, RAG, LangChain",        accentVar: "--accent"   },
];

const interests = [
  "AI Research", "Computer Vision", "NLP", "Edge AI",
  "Open Source", "Wildlife", "Photography", "Hiking",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label section-label-violet">About Me</span>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
              Who <span className="gradient-text">I Am</span>
            </h2>
            <div className="section-divider" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl leading-relaxed font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Hello! I&apos;m Dharm, an AI/ML enthusiast and MSc Data Science graduate
              based in Gujarat, India. I&apos;m passionate about building intelligent
              systems that solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              My expertise spans the entire AI/ML spectrum — from traditional machine
              learning algorithms to cutting-edge generative AI applications. I have
              hands-on experience developing wildlife species recognition systems with
              90+ classes, building multi-agent agricultural advisory systems, and
              creating urban analytics solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              When I&apos;m not training models or debugging code, you can find me
              exploring new AI research papers, contributing to open-source projects,
              or enjoying the outdoors. Always excited to collaborate on innovative
              projects that push the boundaries of what&apos;s possible with AI.
            </motion.p>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <TiltCard className="glass-card gradient-border rounded-xl p-5 flex items-start gap-3">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{
                    background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
                  }}
                >
                  <Briefcase className="w-4 h-4" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Current Role</p>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Data Science &amp; ML Intern</p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: "var(--accent)" }}>BrainyBeam Info-Tech</p>
                </div>
              </TiltCard>

              <TiltCard className="glass-card gradient-border rounded-xl p-5 flex items-start gap-3">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{
                    background: "color-mix(in srgb, var(--accent-2) 10%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--accent-2) 22%, transparent)",
                  }}
                >
                  <GraduationCap className="w-4 h-4" style={{ color: "var(--accent-2)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Education</p>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>MSc Data Science</p>
                  <p className="text-xs mt-0.5 font-medium flex items-center gap-1" style={{ color: "var(--accent-2)" }}>
                    <MapPin className="w-3 h-3" /> Gujarat, India
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden preserve-3d"
            >
              <TiltCard className="glass-card rounded-xl p-6 h-full w-full">
                <h3
                  className="text-xs font-semibold tracking-widest uppercase mb-5"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Core Expertise
                </h3>
                <div className="space-y-4 preserve-3d">
                  {highlights.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 transform transition-transform duration-300 hover:translate-z-10 group">
                      <div
                        className="p-2 rounded-lg shrink-0"
                        style={{
                          background: `color-mix(in srgb, var(${item.accentVar}) 10%, transparent)`,
                          border: `1px solid color-mix(in srgb, var(${item.accentVar}) 22%, transparent)`,
                        }}
                      >
                        <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: `var(${item.accentVar})` }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{item.title}</p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl overflow-hidden preserve-3d"
            >
              <TiltCard className="glass-card rounded-xl p-6 h-full w-full">
                <h3
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2 preserve-3d">
                  {interests.map((interest) => (
                    <span key={interest} className="interest-pill hover:translate-z-8 transition-transform duration-300">
                      {interest}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
