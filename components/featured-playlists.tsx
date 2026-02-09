"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Clock, Music, ChevronDown, ChevronUp, Disc3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const playlists = [
  {
    title: "Morning Cardio Blast",
    category: "Cardio",
    bpm: "150 BPM",
    tracks: 24,
    duration: "1h 12m",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator&theme=0",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    hoverBorder: "hover:border-red-400/40",
    trackList: null,
  },
  {
    title: "Heavy Lift Anthems",
    category: "Strength",
    bpm: "120 BPM",
    tracks: 30,
    duration: "1h 45m",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfnE9m?utm_source=generator&theme=0",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/40",
    trackList: [
      { name: "Lose Yourself", artist: "Eminem", bpm: "120" },
      { name: "Till I Collapse", artist: "Eminem ft. Nate Dogg", bpm: "116" },
      { name: "Stronger", artist: "Kanye West", bpm: "104" },
      { name: "Power", artist: "Kanye West", bpm: "120" },
      { name: "Remember The Name", artist: "Fort Minor", bpm: "106" },
      { name: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", bpm: "146" },
      { name: "Enter Sandman", artist: "Metallica", bpm: "123" },
      { name: "Thunderstruck", artist: "AC/DC", bpm: "134" },
    ],
  },
  {
    title: "Flow State Frequencies",
    category: "Yoga",
    bpm: "72 BPM",
    tracks: 18,
    duration: "58m",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator&theme=0",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    hoverBorder: "hover:border-accent/40",
    trackList: null,
  },
  {
    title: "Interval Mayhem",
    category: "HIIT",
    bpm: "160 BPM",
    tracks: 20,
    duration: "52m",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9MpMnDhMxRb?utm_source=generator&theme=0",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    hoverBorder: "hover:border-orange-400/40",
    trackList: [
      { name: "Bangarang", artist: "Skrillex ft. Sirah", bpm: "110" },
      { name: "Turn Down for What", artist: "DJ Snake & Lil Jon", bpm: "100" },
      { name: "Levels", artist: "Avicii", bpm: "126" },
      { name: "Titanium", artist: "David Guetta ft. Sia", bpm: "126" },
      { name: "Animals", artist: "Martin Garrix", bpm: "128" },
      { name: "Lean On", artist: "Major Lazer & DJ Snake", bpm: "98" },
      { name: "Scary Monsters and Nice Sprites", artist: "Skrillex", bpm: "140" },
      { name: "Core", artist: "RL Grime", bpm: "100" },
    ],
  },
  {
    title: "Power Walk Beats",
    category: "Cardio",
    bpm: "128 BPM",
    tracks: 22,
    duration: "1h 05m",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator&theme=0",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20",
    hoverBorder: "hover:border-yellow-400/40",
    trackList: null,
  },
  {
    title: "Late Night Stretch",
    category: "Recovery",
    bpm: "65 BPM",
    tracks: 15,
    duration: "42m",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp?utm_source=generator&theme=0",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20",
    hoverBorder: "hover:border-indigo-400/40",
    trackList: null,
  },
];

function PlaylistCard({
  pl,
  index,
}: {
  pl: (typeof playlists)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group overflow-hidden rounded-xl border ${pl.borderColor} ${pl.hoverBorder} bg-card transition-all duration-500 hover:bg-secondary/30 hover:shadow-lg hover:shadow-background/50`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <Badge
              variant="secondary"
              className={`mb-3 ${pl.bgColor} ${pl.color} border-0 text-xs font-semibold`}
            >
              {pl.category}
            </Badge>
            <h3 className="font-display text-lg font-bold text-foreground">
              {pl.title}
            </h3>
          </div>
          <Disc3
            className={`h-5 w-5 ${pl.color} opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-spin`}
            style={{ animationDuration: "3s" }}
          />
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Music className={`h-3.5 w-3.5 ${pl.color}`} />
            {pl.bpm}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className={`h-3.5 w-3.5 ${pl.color}`} />
            {pl.duration}
          </span>
          <span>{pl.tracks} tracks</span>
        </div>
      </div>

      {/* Track list for Heavy Lift Anthems & Interval Mayhem */}
      {pl.trackList && (
        <div className="px-5">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className={`flex w-full items-center justify-between rounded-lg border ${pl.borderColor} ${pl.bgColor} px-3 py-2 text-xs font-semibold transition-colors hover:bg-secondary/50`}
          >
            <span className={pl.color}>
              {expanded ? "Hide Tracklist" : "View Tracklist"}
            </span>
            {expanded ? (
              <ChevronUp className={`h-3.5 w-3.5 ${pl.color}`} />
            ) : (
              <ChevronDown className={`h-3.5 w-3.5 ${pl.color}`} />
            )}
          </button>
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: expanded ? "400px" : "0px" }}
          >
            <div className="mt-3 flex flex-col gap-1.5 pb-2">
              {pl.trackList.map((track, i) => (
                <div
                  key={track.name}
                  className="flex items-center gap-3 rounded-lg bg-background/40 px-3 py-2 transition-colors hover:bg-background/70"
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold ${pl.bgColor} ${pl.color}`}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-foreground">
                      {track.name}
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      {track.artist}
                    </p>
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {track.bpm} BPM
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spotify embed with lazy load */}
      <div className="px-5 pb-5 pt-3">
        {!showEmbed ? (
          <button
            type="button"
            onClick={() => setShowEmbed(true)}
            className={`flex w-full items-center justify-center gap-2 rounded-lg border border-dashed ${pl.borderColor} ${pl.bgColor} py-4 text-sm font-medium ${pl.color} transition-all hover:bg-secondary/50 hover:shadow-sm`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381C8.88 5.88 15.96 6.12 20.34 8.88c.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" />
            </svg>
            Play on Spotify
          </button>
        ) : (
          <iframe
            title={`${pl.title} Spotify Playlist`}
            src={pl.spotifyEmbed}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}

export function FeaturedPlaylists() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(playlists.map((p) => p.category))];
  const filtered =
    filter === "All" ? playlists : playlists.filter((p) => p.category === filter);

  return (
    <section id="playlists" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Featured Playlists
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">
                Curated for{" "}
                <span className="text-muted-foreground">every session.</span>
              </span>
            </h2>
          </div>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
          >
            View all on Spotify
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Playlist grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pl, i) => (
            <PlaylistCard key={pl.title} pl={pl} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
