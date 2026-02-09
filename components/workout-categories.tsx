"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Flame,
  Dumbbell,
  Leaf,
  Zap,
  Music,
  Clock,
  ArrowRight,
  Volume2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    id: "cardio",
    title: "Cardio",
    subtitle: "High BPM Playlists",
    description:
      "Push your limits with high-energy tracks above 140 BPM. Designed for running, cycling, and aerobic sessions.",
    image: "/images/cardio.jpg",
    icon: Flame,
    bpm: "140-180 BPM",
    duration: "30-60 min",
    tracks: 42,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    shadowColor: "shadow-red-400/5",
    genres: ["EDM", "Pop", "Drum & Bass"],
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator&theme=0",
  },
  {
    id: "strength",
    title: "Strength",
    subtitle: "Heavy Beats",
    description:
      "Power through your lifts with aggressive beats and bass-heavy tracks. Built for max effort sets.",
    image: "/images/strength.jpg",
    icon: Dumbbell,
    bpm: "100-130 BPM",
    duration: "45-75 min",
    tracks: 38,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    shadowColor: "shadow-primary/5",
    genres: ["Hip-Hop", "Trap", "Metal"],
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfnE9m?utm_source=generator&theme=0",
  },
  {
    id: "yoga",
    title: "Yoga & Stretch",
    subtitle: "Calm Music",
    description:
      "Find your center with serene soundscapes and gentle melodies. Perfect for flow, meditation, and recovery.",
    image: "/images/yoga.jpg",
    icon: Leaf,
    bpm: "60-90 BPM",
    duration: "20-45 min",
    tracks: 35,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    shadowColor: "shadow-accent/5",
    genres: ["Ambient", "Lo-fi", "Acoustic"],
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator&theme=0",
  },
  {
    id: "hiit",
    title: "HIIT",
    subtitle: "Peak Energy",
    description:
      "Interval training demands interval music. Tracks that surge and recover with your workout rhythm.",
    image: "/images/hiit.jpg",
    icon: Zap,
    bpm: "130-170 BPM",
    duration: "20-30 min",
    tracks: 30,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    shadowColor: "shadow-orange-400/5",
    genres: ["Techno", "Dubstep", "House"],
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9MpMnDhMxRb?utm_source=generator&theme=0",
  },
];

export function WorkoutCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCategoryChange = (cat: (typeof categories)[0]) => {
    if (cat.id === activeCategory.id) return;
    setIsTransitioning(true);
    setShowPlayer(false);
    setTimeout(() => {
      setActiveCategory(cat);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section id="workouts" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Workout Categories
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              Choose your intensity.{" "}
              <span className="text-muted-foreground">We handle the music.</span>
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Category selector */}
          <div
            className="flex flex-col gap-3 lg:col-span-4 transition-all duration-700 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory.id === cat.id;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat)}
                  className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? `${cat.borderColor} ${cat.bgColor} shadow-lg ${cat.shadowColor}`
                      : "border-border bg-card hover:border-border/80 hover:bg-secondary/50 hover:translate-x-1"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                      isActive ? `${cat.bgColor} scale-110` : "bg-secondary group-hover:scale-105"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? cat.color : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-base font-semibold text-foreground">
                      {cat.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{cat.subtitle}</p>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 transition-all duration-300 ${
                      isActive
                        ? `${cat.color} translate-x-0`
                        : "translate-x-[-4px] text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active category detail */}
          <div
            className="lg:col-span-8 transition-all duration-700 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(20px)",
            }}
          >
            <div
              className={`overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${
                isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
              }`}
            >
              {/* Image header */}
              <div className="relative h-64 overflow-hidden md:h-80">
                <Image
                  src={activeCategory.image || "/placeholder.svg"}
                  alt={`${activeCategory.title} workout`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.genres.map((genre) => (
                      <Badge
                        key={genre}
                        variant="secondary"
                        className="border border-border/50 bg-background/60 text-foreground backdrop-blur-sm transition-transform hover:scale-105"
                      >
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {activeCategory.title}
                  </h3>
                  <span className={`text-sm font-medium ${activeCategory.color}`}>
                    {activeCategory.subtitle}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {activeCategory.description}
                </p>

                {/* Meta info */}
                <div className="mt-6 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Music className={`h-4 w-4 ${activeCategory.color}`} />
                    <span className="text-sm text-foreground">
                      {activeCategory.bpm}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`h-4 w-4 ${activeCategory.color}`} />
                    <span className="text-sm text-foreground">
                      {activeCategory.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className={`h-4 w-4 ${activeCategory.color}`} />
                    <span className="text-sm text-foreground">
                      {activeCategory.tracks} tracks
                    </span>
                  </div>
                </div>

                {/* Spotify embed with click-to-load */}
                <div className="mt-6">
                  {!showPlayer ? (
                    <button
                      type="button"
                      onClick={() => setShowPlayer(true)}
                      className={`flex w-full items-center justify-center gap-3 rounded-xl border border-dashed ${activeCategory.borderColor} ${activeCategory.bgColor} py-6 text-sm font-semibold ${activeCategory.color} transition-all hover:bg-secondary/50 hover:shadow-md`}
                    >
                      <Volume2 className="h-5 w-5" />
                      Listen to {activeCategory.title} Playlist
                    </button>
                  ) : (
                    <iframe
                      title={`${activeCategory.title} Spotify Playlist`}
                      src={activeCategory.spotifyEmbed}
                      width="100%"
                      height="152"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
