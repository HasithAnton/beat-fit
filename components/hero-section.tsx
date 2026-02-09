import Image from "next/image";
import { Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Music-powered fitness
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance">
              Train to the
              <br />
              <span className="text-primary">beat.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Every workout deserves the perfect soundtrack. We pair your training
            with curated playlists that match your intensity, mood, and goals.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="font-display text-base font-semibold">
              <Play className="mr-2 h-4 w-4" />
              Explore Workouts
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-display text-base font-semibold bg-transparent"
            >
              Browse Playlists
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-12">
            <div>
              <p className="font-display text-3xl font-bold text-foreground">
                150+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Curated Playlists
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">
                5K+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tracks Paired
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-foreground">
                50+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Workout Plans
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}
