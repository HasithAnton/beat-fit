"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Workouts", href: "#workouts" },
  { label: "Mood Selector", href: "#mood" },
  { label: "Playlists", href: "#playlists" },
  { label: "How It Works", href: "#how-it-works" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 shadow-lg shadow-background/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-300 group-hover:scale-110">
            <Headphones className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            BEATFIT
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button size="sm" className="font-display font-semibold" asChild>
            <a href="#mood">Get Started</a>
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="mt-3 font-display font-semibold" asChild>
            <a href="#mood" onClick={() => setMobileOpen(false)}>
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
