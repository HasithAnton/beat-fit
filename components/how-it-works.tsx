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
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
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
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-card p-8 transition-colors hover:bg-secondary/30"
              >
                {/* Number */}
                <span className="font-display text-5xl font-bold text-secondary">
                  {step.number}
                </span>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
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
