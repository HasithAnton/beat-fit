"use client";

import { useState } from "react";
import {
  Flame,
  Battery,
  CloudRain,
  Sun,
  Moon,
  Zap,
  Music,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const moods = [
  {
    id: "fired-up",
    label: "Fired Up",
    icon: Flame,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
    activeRing: "ring-red-400/30",
    workout: "HIIT Circuit",
    workoutDesc: "20 min all-out intervals with explosive movements",
    exercises: ["Burpees", "Box Jumps", "Mountain Climbers", "Sprint Intervals"],
    playlist: "Beast Mode Activated",
    bpm: "150-170 BPM",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator&theme=0",
    youtubeId: "gCYcHz2k5x0",
  },
  {
    id: "steady",
    label: "Steady & Strong",
    icon: Battery,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    activeRing: "ring-primary/30",
    workout: "Strength Foundation",
    workoutDesc: "45 min compound lifts with controlled tempo",
    exercises: ["Deadlifts", "Bench Press", "Squats", "Overhead Press"],
    playlist: "Iron Discipline",
    bpm: "110-130 BPM",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfnE9m?utm_source=generator&theme=0",
    youtubeId: "n1WpP7iowLc",
  },
  {
    id: "chill",
    label: "Chill Vibes",
    icon: CloudRain,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    activeRing: "ring-accent/30",
    workout: "Recovery Flow",
    workoutDesc: "30 min gentle stretching and mobility work",
    exercises: ["Cat-Cow Flow", "Hip Openers", "Spinal Twists", "Foam Rolling"],
    playlist: "Zen State",
    bpm: "60-80 BPM",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=generator&theme=0",
    youtubeId: "hJbRpHZr_d0",
  },
  {
    id: "energized",
    label: "Energized",
    icon: Sun,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
    activeRing: "ring-yellow-400/30",
    workout: "Cardio Rush",
    workoutDesc: "40 min running and cycling intervals",
    exercises: ["Treadmill Sprints", "Cycling Hills", "Jump Rope", "Rowing"],
    playlist: "Morning Energy",
    bpm: "140-160 BPM",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator&theme=0",
    youtubeId: "lTRiuFIWV54",
  },
  {
    id: "focused",
    label: "Laser Focus",
    icon: Zap,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    activeRing: "ring-blue-400/30",
    workout: "Mind-Muscle Connection",
    workoutDesc: "50 min isolation work with perfect form",
    exercises: ["Cable Flyes", "Leg Extensions", "Lateral Raises", "Curls"],
    playlist: "Deep Focus Beats",
    bpm: "100-120 BPM",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9MpMnDhMxRb?utm_source=generator&theme=0",
    youtubeId: "jfKfPfyJRdk",
  },
  {
    id: "unwind",
    label: "Wind Down",
    icon: Moon,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    borderColor: "border-indigo-400/30",
    activeRing: "ring-indigo-400/30",
    workout: "Evening Yoga",
    workoutDesc: "25 min restorative yoga and breathwork",
    exercises: [
      "Child's Pose",
      "Pigeon Pose",
      "Seated Forward Fold",
      "Savasana",
    ],
    playlist: "Sleep Waves",
    bpm: "50-70 BPM",
    spotifyEmbed:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp?utm_source=generator&theme=0",
    youtubeId: "DWcJFNfaw9c",
  },
];

export function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const activeMood = moods.find((m) => m.id === selectedMood);

  return (
    <section id="mood" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Mood-Based Workout
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              How are you feeling{" "}
              <span className="text-muted-foreground">right now?</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Select your current mood and we will pair you with the perfect
            workout and soundtrack.
          </p>
        </div>

        {/* Mood grid */}
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {moods.map((mood) => {
            const Icon = mood.icon;
            const isActive = selectedMood === mood.id;
            return (
              <button
                type="button"
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`group flex flex-col items-center gap-3 rounded-xl border p-4 transition-all ${
                  isActive
                    ? `${mood.borderColor} ${mood.bgColor} ring-2 ${mood.activeRing}`
                    : "border-border bg-card hover:border-border/80 hover:bg-secondary/50"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    isActive ? mood.bgColor : "bg-secondary"
                  } transition-colors`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? mood.color : "text-muted-foreground"
                    } transition-colors`}
                  />
                </div>
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {mood.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result */}
        {activeMood && (
          <div className="mx-auto mt-12 max-w-4xl">
            <div
              className={`overflow-hidden rounded-2xl border ${activeMood.borderColor} ${activeMood.bgColor}`}
            >
              <div className="grid gap-0 md:grid-cols-2">
                {/* Workout plan */}
                <div className="border-b border-border/50 p-8 md:border-b-0 md:border-r">
                  <div className="mb-4 flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${activeMood.bgColor}`}
                    >
                      <activeMood.icon
                        className={`h-4 w-4 ${activeMood.color}`}
                      />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Your Workout
                    </p>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {activeMood.workout}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {activeMood.workoutDesc}
                  </p>
                  <div className="mt-6 flex flex-col gap-2">
                    {activeMood.exercises.map((ex, i) => (
                      <div
                        key={ex}
                        className="flex items-center gap-3 rounded-lg bg-background/40 px-3 py-2"
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${activeMood.bgColor} ${activeMood.color}`}
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {ex}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Music recommendation */}
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${activeMood.bgColor}`}
                    >
                      <Music className={`h-4 w-4 ${activeMood.color}`} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Your Soundtrack
                    </p>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {activeMood.playlist}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="mt-2 border border-border/50 bg-background/40 text-foreground"
                  >
                    {activeMood.bpm}
                  </Badge>

                  {/* Spotify embed */}
                  <div className="mt-6">
                    <iframe
                      title={`${activeMood.playlist} Spotify Playlist`}
                      src={activeMood.spotifyEmbed}
                      width="100%"
                      height="152"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl"
                    />
                  </div>

                  {/* YouTube */}
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Watch on YouTube
                    </p>
                    <a
                      href={`https://www.youtube.com/watch?v=${activeMood.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium ${activeMood.color} hover:underline`}
                    >
                      <Play className="h-4 w-4" />
                      Open Mix on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!activeMood && (
          <div className="mx-auto mt-12 max-w-md text-center">
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12">
              <Music className="mx-auto h-10 w-10 text-muted-foreground/40" />
              <p className="mt-4 text-sm text-muted-foreground">
                Select a mood above to get your personalized workout + playlist
                pairing
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
