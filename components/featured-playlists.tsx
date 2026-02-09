"use client";

import { ExternalLink, Clock, Music } from "lucide-react";
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
  },
];

export function FeaturedPlaylists() {
  return (
    <section id="playlists" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
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
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all on Spotify
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Playlist grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playlists.map((pl) => (
            <div
              key={pl.title}
              className={`group overflow-hidden rounded-xl border ${pl.borderColor} bg-card transition-all hover:bg-secondary/30`}
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

              {/* Spotify embed */}
              <div className="px-5 pb-5">
                <iframe
                  title={`${pl.title} Spotify Playlist`}
                  src={pl.spotifyEmbed}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
