"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import { profileData, type ProjectItem } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

/** Small looping illustration per project — there are no screenshots, so each gets a motif. */
function ProjectGlyph({ variant }: { variant: number }) {
  const common = "h-full w-full text-glow";

  if (variant === 0) {
    // supply network
    const nodes = [
      [30, 100],
      [85, 45],
      [85, 155],
      [140, 100],
      [175, 50],
      [175, 150],
    ];
    const links = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [3, 5],
    ];
    return (
      <svg viewBox="0 0 200 200" className={common} fill="none">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="animate-dash"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={i === 3 ? 11 : 6}
            fill={i === 3 ? "currentColor" : "rgb(var(--panel))"}
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}
      </svg>
    );
  }

  if (variant === 1) {
    // ledger bars
    const bars = [50, 88, 64, 120, 96, 140];
    return (
      <svg viewBox="0 0 200 200" className={common} fill="none">
        <line x1="20" y1="170" x2="180" y2="170" stroke="currentColor" strokeOpacity="0.4" />
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={28 + i * 26}
            y={170 - h}
            width="14"
            height={h}
            rx="7"
            fill={i === bars.length - 1 ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ scaleY: [1, 0.72, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.22, ease: "easeInOut" }}
            style={{ transformOrigin: `${35 + i * 26}px 170px` }}
          />
        ))}
        <circle cx="165" cy="22" r="3" fill="currentColor" className="animate-pulse" />
      </svg>
    );
  }

  if (variant === 2) {
    // route
    const route = "M25 165 C 60 165, 55 105, 100 100 S 140 40, 175 35";
    return (
      <svg viewBox="0 0 200 200" className={common} fill="none">
        <path d={route} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
        <path
          d={route}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 9"
          className="animate-dash"
        />
        <circle cx="25" cy="165" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="175" cy="35" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="175" cy="35" r="4" fill="currentColor" />
        <circle r="6" fill="currentColor">
          <animateMotion dur="5s" repeatCount="indefinite" path={route} />
        </circle>
      </svg>
    );
  }

  // building blocks
  const blocks = [
    [40, 130, 0],
    [82, 130, 1],
    [124, 130, 2],
    [61, 88, 3],
    [103, 88, 4],
    [82, 46, 5],
  ];
  return (
    <svg viewBox="0 0 200 200" className={common} fill="none">
      <line x1="20" y1="172" x2="180" y2="172" stroke="currentColor" strokeOpacity="0.4" />
      {blocks.map(([x, y, order]) => (
        <motion.rect
          key={order}
          x={x}
          y={y}
          width="38"
          height="38"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill={order === 5 ? "currentColor" : "none"}
          animate={{ opacity: [0, 1, 1, 0], y: [-14, 0, 0, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: order * 0.28,
            times: [0, 0.12, 0.85, 1],
          }}
        />
      ))}
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // earlier cards shrink a little as later ones stack on top of them
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.035]);

  return (
    <div className="stack:sticky" style={{ top: `calc(5.5rem + ${index}rem)` }}>
      <motion.div
        style={{ "--s": scale } as unknown as MotionStyle}
        className="origin-top stack:scale-[var(--s)]"
      >
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="group grid grid-cols-1 gap-8 rounded-[2rem] border border-line/10 bg-panel p-6 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.45)] sm:p-9 lg:grid-cols-12 lg:gap-10"
      >
        <div className="flex flex-col lg:col-span-8">
          <div className="flex items-center justify-between gap-4">
            <span className="label text-muted">
              <span className="text-glow">{String(index + 1).padStart(2, "0")}</span> /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <Badge variant="volt">{project.category}</Badge>
          </div>

          <h3 className="mt-6 max-w-2xl font-display text-[clamp(1.75rem,3.3vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {project.title}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-line/10 pt-6 text-[0.8125rem] leading-relaxed text-muted md:grid-cols-2">
            {project.responsibilities.map((item, rIdx) => (
              <li key={rIdx} className="flex gap-3">
                <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-glow" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[14rem] items-center justify-center overflow-hidden rounded-3xl border border-line/10 bg-bg p-8 lg:col-span-4 lg:flex">
          <span className="absolute left-5 top-4 font-display text-7xl font-extrabold leading-none tracking-tighter text-fg/10">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="aspect-square w-full max-w-[15rem] transition-transform duration-700 ease-expo group-hover:scale-110">
            <ProjectGlyph variant={index % 4} />
          </div>
        </div>
      </motion.article>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const projects = profileData.projects;

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="06"
          eyebrow="Projects"
          title="Selected"
          accent="work."
          subtitle="Full-stack enterprise platforms built with React, Node.js, TypeScript and modern databases."
        />

        <div ref={ref} className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
