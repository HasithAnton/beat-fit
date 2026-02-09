import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { WorkoutCategories } from "@/components/workout-categories";
import { MoodSelector } from "@/components/mood-selector";
import { FeaturedPlaylists } from "@/components/featured-playlists";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WorkoutCategories />
      <MoodSelector />
      <FeaturedPlaylists />
      <HowItWorks />
      <Footer />
    </main>
  );
}
