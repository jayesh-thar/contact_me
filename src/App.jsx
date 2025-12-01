import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaLinkedin, FaGithub, FaReddit, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jayesh-thar/", 
    handle: "@jayesh-thar",
    badge: "Professional",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/jayesh-thar", 
    handle: "@jayesh-thar",
    badge: "Projects",
  },
  {
    label: "LeetCode",
    icon: SiLeetcode,
    href: "https://leetcode.com/u/JAYESH_THAR_14/", 
    handle: "@JAYESH_THAR_14",
    badge: "DSA / Coding",
  },
  {
    label: "CodeChef",
    icon: SiLeetcode,
    href: "https://www.codechef.com/users/jay_2xcodemine",
    handle: '@jay_2xcodemine',
    badge: "DSA / Coding",
  },
  {
    label: "X (Twitter)",
    icon: FaXTwitter,
    href: "https://x.com/JayeshThar14", 
    handle: "@JayeshThar14",
    badge: "Thoughts",
  },
  {
    label: "Reddit",
    icon: FaReddit,
    href: "https://www.reddit.com/user/Gullible_Debate1442/", 
    handle: "@code_with_JAYESH",
    badge: "Communities",
  },
];

function App() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    // Clear old refs in case of hot-reload
    cardsRef.current = cardsRef.current.slice(0, SOCIAL_LINKS.length);

    const tl = gsap.timeline();

    tl.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
    })
      .from(
        headingRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        cardsRef.current,
        {
          opacity: 0,
          y: 24,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return <>
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      {/* Background gradient blob */}
      <div className="pointer-events-none fixed inset-0">
        <div className="bg-animated-blob absolute -top-32 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-brand-purple/40 via-pink-300/40 to-sky-500/40 blur-3xl opacity-50" />
        <div className="bg-animated-blob absolute -bottom-36 -left-10 h-72 w-72 rounded-full bg-gradient-to-tl from-emerald-400/30 via-brand-purple/30 to-sky-500/30 blur-3xl opacity-40 animation-delay-3000" />
      </div>

      {/* Main card */}
      <div
        ref={containerRef}
        className="relative max-w-3xl w-full"
      >
        <div className="relative backdrop-blur-xl bg-slate-900/60 border border-slate-700/70 rounded-3xl p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
          {/* Floating header */}
          <div ref={headingRef} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Hi Guy's <br /> it's Jayesh here... <br /> <br />
              </p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">
                Let&apos;s build something cool together.
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Reach out on any platform below. I&apos;m most active on{" "}
                <span className="text-[#7C3AED] font-medium">GitHub</span> &
                <span className="text-pink-300 font-medium"> LinkedIn</span>.
              </p>
            </div>

            <div className="mt-4 sm:mt-0 float-soft">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-slate-200">
                  Open for opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Grid of social links */}
          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
            {SOCIAL_LINKS.map((item, index) => (
              <a
                key={item.label}
                ref={(el) => (cardsRef.current[index] = el)}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/60 px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:border-purple-500/70 hover:bg-slate-900/90"
              >
                {/* Circle "icon" */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600/80 to-pink-300/80 text-sm font-semibold shadow-lg group-hover:scale-105 transition-transform">
                  <item.icon size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400 truncate">
                    {item.handle}
                  </p>
                </div>

                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                  ↗
                </span>

                {/* Glow on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-purple/10 via-brand-pink/10 to-sky-500/10" />
              </a>
            ))}

            {/* Portfolio – Coming soon */}
            <div className="sm:col-span-2 mt-5">
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-brand-pink/60 bg-slate-900/70 px-4 py-4 pulse-soft">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/5 via-transparent to-brand-purple/5 pointer-events-none" />
                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 border border-brand-pink/60 px-3 py-1 text-xs font-medium text-pink-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-pink-300 animate-pulse" />
                      Portfolio
                    </div>
                    <p className="mt-2 text-sm font-semibold">
                      Personal portfolio - coming soon
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      I&apos;ll add my projects, case studies, and blogs here. Stay tuned!
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 text-xs text-slate-200">
                      In progress 🔧
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <p>
              Collaboration fuels innovation. And snacks. Snacks also fuel innovation.
            </p>
            <p className="text-slate-500">
              <span className="text-pink-300">Mining ⛏️ </span>{" "}
              <span className="text-[#7C3AED]">Crafting ⚡</span>{" "}
              <span className="text-sky-400">Building 🪙</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default App
