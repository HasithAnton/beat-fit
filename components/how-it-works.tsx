"use client";

import { useEffect, useRef, useState } from "react";
import { Target, Headphones, Play, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Pick Your Workout",
    description:
      "Choose from cardio, strength, yoga, HIIT, or use our mood selector to find your perfect fit.",
  },
  {
    number: "02",
    icon: Headphones,
    title: "Get Matched",
    description:
      "Our algorithm pairs your workout type with playlists engineered for optimal BPM and energy levels.",
  },
  {
    number: "03",
    icon: Play,
    title: "Press Play",
    description:
      "Stream directly from Spotify or YouTube. Your workout and music sync seamlessly together.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track & Evolve",
    description:
      "As your fitness evolves, so do your playlists. We adapt recommendations to your progress.",
  },
];

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className="mb-16 text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              Four steps to your{" "}
              <span className="text-muted-foreground">perfect session.</span>
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-card p-8 transition-all duration-300 hover:bg-secondary/30"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${300 + i * 150}ms`,
                  transitionProperty: "all",
                  transitionDuration: "700ms",
                }}
              >
                {/* Number */}
                <span className="font-display text-5xl font-bold text-secondary transition-colors duration-300 group-hover:text-primary/20">
                  {step.number}
                </span>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
