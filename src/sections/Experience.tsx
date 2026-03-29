"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Data Science & Machine Learning Intern",
    company: "BrainyBeam Info-Tech Pvt. Ltd.",
    location: "Remote / Gujarat, India",
    period: "Present",
    type: "Internship",
    description: "Working on real-world AI/ML projects, developing production-ready machine learning pipelines, and implementing end-to-end solutions for client requirements.",
    highlights: [
      "Developing ML models for business intelligence applications",
      "Building data pipelines and preprocessing workflows",
      "Implementing computer vision solutions",
      "Working with cloud-based ML services",
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "Cloud Computing"],
    current: true,
  },
];

const education = {
  degree: "Master of Science (MSc) in Data Science",
  institution: "University",
  location: "Gujarat, India",
  period: "Completed",
  description: "Specialized in advanced machine learning, deep learning, and statistical modeling with focus on practical applications.",
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="section-label section-label-cyan">Experience</span>
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <div className="section-divider" style={{ background: "linear-gradient(90deg, color-mix(in srgb, var(--accent-2) 40%, transparent), transparent)" }} />
          </div>
          <p className="mt-3 max-w-xl text-sm" style={{ color: "var(--muted-foreground)" }}>
            My professional experience and educational background in Artificial Intelligence and Data Science.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "var(--tl-line)" }}
            />

            {/* Experience cards */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-6 w-4 h-4 rounded-full hidden md:block z-10"
                  style={{ background: "var(--exp-dot-cyan)", boxShadow: "0 0 10px color-mix(in srgb, var(--accent-2) 50%, transparent)" }}
                />

                <div className="glass-card gradient-border rounded-xl md:ml-16 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <div
                          className="p-1.5 rounded-lg"
                          style={{
                            background: "color-mix(in srgb, var(--accent-2) 10%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--accent-2) 22%, transparent)",
                          }}
                        >
                          <Building2 className="w-4 h-4" style={{ color: "var(--accent-2)" }} />
                        </div>
                        <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium pl-9" style={{ color: "var(--accent-2)" }}>{exp.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span
                        className="flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{
                          background: exp.current ? "rgba(34, 197, 94, 0.10)" : "color-mix(in srgb, var(--accent) 8%, transparent)",
                          color: exp.current ? "#16a34a" : "var(--muted-foreground)",
                          border: `1px solid ${exp.current ? "rgba(34, 197, 94, 0.25)" : "var(--border)"}`,
                        }}
                      >
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{
                          background: "color-mix(in srgb, var(--accent) 8%, transparent)",
                          color: "var(--accent)",
                          border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--accent-2)" }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag-violet">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div
                className="absolute left-6 top-6 w-4 h-4 rounded-full hidden md:block z-10"
                style={{ background: "var(--exp-dot-violet)", boxShadow: "0 0 10px color-mix(in srgb, var(--accent) 50%, transparent)" }}
              />

              <div className="glass-card gradient-border rounded-xl md:ml-16 p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{
                      background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
                    }}
                  >
                    <span className="text-xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                      {education.degree}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                      {education.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {education.location}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {education.period}</span>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {education.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
