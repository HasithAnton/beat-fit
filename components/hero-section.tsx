"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

function AudioVisualizer() {
  const bars = 24;
  return (
    <div className="flex items-end gap-[3px] h-10" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-primary/70"
          style={{
            animation: `barBounce ${0.8 + Math.random() * 0.6}s ease-in-out ${Math.random() * 0.5}s infinite alternate`,
            height: `${14 + Math.random() * 26}px`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <style jsx>{`
        @keyframes barBounce {
          0% { height: 6px; }
          100% { height: 40px; }
        }
      `}</style>

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover scale-105 transition-transform duration-[2s]"
          style={{ transform: visible ? "scale(1)" : "scale(1.05)" }}
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
            }}
          >
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Music-powered fitness
            </span>
          </div>

          <h1
            className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl transition-all duration-700 delay-150"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <span className="text-balance">
              Train to the
              <br />
              <span className="text-primary">beat.</span>
            </span>
          </h1>

          <p
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl transition-all duration-700 delay-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Every workout deserves the perfect soundtrack. We pair your training
            with curated playlists that match your intensity, mood, and goals.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-[450ms]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Button
              size="lg"
              className="font-display text-base font-semibold group"
              asChild
            >
              <a href="#workouts">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Explore Workouts
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-display text-base font-semibold bg-transparent group"
              asChild
            >
              <a href="#playlists">
                <Headphones className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Browse Playlists
              </a>
            </Button>
          </div>

          {/* Audio Visualizer */}
          <div
            className="mt-16 transition-all duration-700 delay-[600ms]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <AudioVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
}
