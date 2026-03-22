"use client";

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Moon, Play, Sparkles, Sun, User } from "lucide-react";

const vibeOptions = [
  { label: "Chill", emoji: "🧊", id: "chill" },
  { label: "Party", emoji: "🥳", id: "energy" },
  { label: "Romantic", emoji: "❤️", id: "chill" },
  { label: "Adventure", emoji: "🏔️", id: "energy" },
  { label: "Healing", emoji: "🧘", id: "chill" },
];

const trendingTrips = [
  {
    title: "Tokyo Nightlife Loop",
    vibe: "🥳 Party",
    tag: "Trending",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxRfeUzoWpGounH5w_kBRrqxn9hyRGf0vNin9tPKd3XR1aZXsrSRJu2G-zEBPeXzTjCt6bixOd2p4ryBpN2hEkY0OKWCW4nFxmJ406g8CTvx6z4FvWGmeuKXUGYppZRoQGpMssoMAYXFaaN07yrT_ySXFIHbYsXpJ8wvV0okaUNjtOzNgXZxO6ENdl7kZFOjMzlcwJU4sF46eDB53d1NIECmVJ0lUaFUamQ_xy-6octPH65pPGhfZ98L9p1SUV8Qy_hYdoxPIZfK4",
    tagClass: "bg-[color:var(--wave-red)] text-white",
  },
  {
    title: "Alpine Escape",
    vibe: "🏔️ Adventure",
    tag: "Best Value",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdLZrwB6OmSTYxDwL-BIJ7fSBgyMshRJrvcf0IBrUcMyuo4yHgUnrqYYVKWhNCWMf2_OY5-jehNnDsw_rQ1tCpWgqkiOxu-Ovo0kCE0nmk8ZwTsQ8uOAtBV44YAznjZEQQ0MJj8vsoZMM4ThuSAjkXEib_7AcwPaVvQdYsaNUV5J5R3t3djwaMAn5k-IFEbmyQcH7mN0unh_piG1lnQTFQQECzC_b5FShK7cwJQ5cvo9OepBe2eFh6CWddjXnMSvZ-oFZ1gxQyJAw",
    tagClass: "bg-[color:var(--wave-teal)] text-white",
  },
  {
    title: "Kyoto Zen Retreat",
    vibe: "🧘 Healing",
    tag: "Relaxation",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr3RS1x2NgIRiyzSQg5yBvQjGeISNQqnqir_9IuFhrJLuZvofpqn4fiZeo5Dsjr89B4oWafxpD20gS2FiQRwSB-850Chc1ziWKB6acm5iimKS8rtQKCfAb-49jBeBRDDg7GWnAIw79dncUWFHbU_YOHGvk0foAC5o1OYU1ZsJT7hvrD3qYJF8_WGmCzosqfBcB6LdWy8fFDc5y-1EWy7w6cvUYY03_LXRMqmg_n8j1pbwBbkGvRQI9rMp0DzoOCoD_9cNKoJvvZLA",
    tagClass: "bg-[color:var(--wave-ink)] text-white",
  },
];

const stats = [
  { value: "1.2M+", label: "Plans Created" },
  { value: "98%", label: "Happy Vibes" },
  { value: "150+", label: "Cities Covered" },
  { value: "4.9/5", label: "App Store" },
];

const avatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAStXAR-ZhNOQyY6tYxkU4HBYb-Kawx5aWEslceVWN9MW6Fn4bwnJ098YJHkJSaEbYbipRqhlI2JOZc5qZdO3-4snVKl77YAMaYnoFWMVRa4dqrqjqmnORPq5AVSlNFFp0zfq5GDXMJqFkDWQwvO8VCUSDxvu9McqFREwSEgIGdVfvZHHxtXGTpykd9uMWKgb4FGyVFYzrAG5gcpDzxBAZAXBVYcR0QFF_sKnP3DE1WSKRKGX8c3JaUltDyf7DvsicmlHPuBUhggaQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCKWG6asbRfSoNFfFT5JVInKsHdDFJltrcaFT1JH_salotOx5RXDQ__No3nd6_4QMdUwndWaKPBAUz7SXIDveQWLKAqTfxhuh-oD1d3uGtkZ00XRAfRPk7l-iYpB4K-koPbHwn1LxMUMH1f11e499efK73n6X6k2clUnv3xRSDGKanytzJ332SSVGXbT9KMEoIiUSojEE-Bjr4_qlqIY0tWG1b9TWT9s1oWMJEnKJK6SmmY2oaccj4UF9rZExHHpW5-g9BhH9iur04",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCYLVkr_51jexREXyskrsOdeoyvpSbl53XBEGg2SSY5mtHgqYD4oHAF3SyBHwmXNLNhjDH4VPV6SWwMsfB4zZyzZBZZSrB2usOSoLZWi7xFvfu576ohl2vf6zuw6hgJpvtb0E0nV9OLgl721tiuS0PMHoN3J2NF9omBquvYbvv1YwSauoefTZfg32S7QhGB8XdSgxiypC_wzhYkV09Thrp9chfkb0ueVXg-s3h3YyV63ANqICpqHjZbgOvTbgJ_5orngSablC0Nwk",
];

export default function Home() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [vibe, setVibe] = useState("chill");
  const [budget, setBudget] = useState("250");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("gowavy-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialDark = storedTheme
      ? storedTheme === "dark"
      : prefersDark;

    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("gowavy-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--wave-cream)] text-[color:var(--wave-ink)]">
      <header className="fixed top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-10">
        <div className="glass-panel mx-auto flex w-full max-w-[96rem] items-center justify-between rounded-2xl border border-[color:var(--border-soft)] px-4 py-3 sm:px-6 shadow-[0_30px_80px_-60px_var(--shadow-strong)]">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--wave-teal)]/20">
              <img
                src="/GoWavy_LOGO.png"
                alt="GoWavy logo"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
            <span className="text-lg font-bold tracking-tight">
              GoWavy <span className="text-[color:var(--wave-teal)] text-xs">AI</span>
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--text-muted)] md:flex">
            <a className="transition hover:text-[color:var(--wave-ink)]" href="/planner">
              Planner
            </a>
            <a className="transition hover:text-[color:var(--wave-ink)]" href="#trending">
              Trending
            </a>
            <a className="transition hover:text-[color:var(--wave-ink)]" href="#stats">
              Stats
            </a>
            <a className="transition hover:text-[color:var(--wave-ink)]" href="#footer">
              Support
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/profile")}
              aria-label="Open profile"
            >
              <User className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="hidden sm:inline-flex"
              onClick={() => router.push("/sign-in")}
            >
              Sign In
            </Button>
            <Button
              variant="default"
              className="hidden sm:inline-flex"
              onClick={() => router.push("/sign-up")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="mesh-gradient min-h-screen px-6 pb-20 pt-32">
        <section className="mx-auto mb-12 max-w-4xl text-center">
          <Badge className="mb-6 rounded-full border-[color:var(--border-strong)] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)]">
            <Sparkles className="h-3 w-3" />
            The Future of Hanging Out
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Plan the perfect hangout or trip — powered by{" "}
            <span className="bg-gradient-to-r from-[color:var(--wave-teal)] via-[color:var(--wave-blue)] to-[color:var(--wave-red)] bg-clip-text text-transparent">
              AI
            </span>
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--text-muted)]">
            Skip the endless group chats. Tell us your vibe, and let our
            wave-checked AI craft your next unforgettable memory in seconds.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="glow"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => router.push("/planner")}
            >
              <Sparkles className="h-4 w-4" />
              Start Planning
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>See GoWavy in action</DialogTitle>
                  <DialogDescription>
                    A quick peek at how your crew goes from vibe to venue.
                  </DialogDescription>
                </DialogHeader>
                <Card className="border-[color:var(--border-soft)] bg-[color:var(--surface-1)]">
                  <CardHeader>
                    <CardTitle className="text-base">Tonight's plan</CardTitle>
                    <CardDescription>
                      AI is stitching together a coastal chill itinerary.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-[color:var(--text-muted)]">
                    <div className="rounded-none border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] px-4 py-3">
                      Sunset gelato + boardwalk stroll
                    </div>
                    <div className="rounded-none border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] px-4 py-3">
                      Rooftop breeze at 8:15 PM
                    </div>
                    <div className="rounded-none border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] px-4 py-3">
                      Budget cap locked at $28 per person
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-[color:var(--border-soft)]">
                    <Button
                      variant="glow"
                      className="ml-auto"
                      onClick={() => router.push("/planner")}
                    >
                      Build my plan
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-[color:var(--text-muted)]">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt="User avatar"
                  className="h-8 w-8 rounded-full border-2 border-[color:var(--wave-cream)] object-cover"
                />
              ))}
            </div>
            <span className="font-medium">Trusted by 50k+ travelers</span>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl">
          <Card className="glass-panel relative overflow-hidden rounded-[2.5rem] border-[color:var(--border-soft)] p-0 shadow-[0_50px_140px_-110px_var(--shadow-strong)]">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--wave-teal)]/20 blur-[120px]" />
            <div className="absolute -bottom-16 -left-20 h-56 w-56 rounded-full bg-[color:var(--wave-red)]/20 blur-[120px]" />
            <CardContent className="relative p-8 md:p-10">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                      Choose Your Vibe
                    </label>
                    <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
                      {vibeOptions.map((v) => (
                        <Button
                          key={v.label}
                          type="button"
                          variant="outline"
                          onClick={() => setVibe(v.id)}
                          className={`h-auto flex-col gap-2 rounded-2xl px-2 py-4 text-[10px] font-bold uppercase tracking-[0.2em] ${
                            vibe === v.id
                              ? "border-[color:var(--border-strong)] bg-[color:var(--surface-3)] text-[color:var(--wave-ink)]"
                              : "border-[color:var(--border-soft)] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)]"
                          }`}
                        >
                          <span className="text-2xl">{v.emoji}</span>
                          <span>{v.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                        Budget Range
                      </label>
                      <span className="text-sm font-bold text-[color:var(--wave-teal)]">
                        ${budget}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[color:var(--border-soft)] accent-[color:var(--wave-teal)]"
                    />
                    <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                      <span>Budget Friendly</span>
                      <span>Luxury</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                      Where to?
                    </label>
                    <div className="relative mt-4">
                      <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--text-muted)]" />
                      <Input
                        placeholder="Enter city or 'Near Me'"
                        className="pl-10 pr-20"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="absolute right-2 top-1/2 h-8 -translate-y-1/2 px-3 text-[10px] font-bold uppercase tracking-[0.2em]"
                      >
                        Auto
                      </Button>
                    </div>
                  </div>
                  <Card className="border-[color:var(--border-strong)] bg-[color:var(--surface-2)]">
                    <CardHeader className="flex flex-row items-center gap-2 px-6 pb-2">
                      <Sparkles className="h-4 w-4 text-[color:var(--wave-teal)]" />
                      <CardTitle className="text-sm text-[color:var(--wave-teal)]">
                        AI Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-sm italic text-[color:var(--text-muted)]">
                      "Scanning the best breeze-heavy spots... I found hidden
                      seaside cafes and panoramic sky decks for your chill
                      session."
                    </CardContent>
                  </Card>
                  <Button
                    variant="glow"
                    size="lg"
                    className="w-full text-lg"
                    onClick={() => router.push(`/planner?vibe=${encodeURIComponent(vibe)}&budget=${encodeURIComponent(budget)}&location=${encodeURIComponent(location)}`)}
                  >
                    Go to Planner
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          id="trending"
          className="mx-auto mt-24 grid w-full max-w-7xl gap-8 md:grid-cols-3"
        >
          {trendingTrips.map((trip, index) => (
            <Card
              key={trip.title}
              className={`group relative overflow-hidden rounded-3xl border-[color:var(--border-soft)] bg-[color:var(--surface-1)] p-0 ${
                index === 1 ? "md:mt-12" : ""
              }`}
            >
              <div className="absolute inset-0 bg-[color:var(--wave-teal)]/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardContent className="relative p-0">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--wave-navy)] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 space-y-2">
                  <Badge className={`border-transparent ${trip.tagClass}`}>
                    {trip.tag}
                  </Badge>
                  <h4 className="text-xl font-semibold text-white">
                    {trip.title}
                  </h4>
                  <p className="text-sm text-white/70">Perfect for: {trip.vibe}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section
          id="stats"
          className="mx-auto mt-32 w-full max-w-5xl border-t border-[color:var(--border-soft)] pt-16"
        >
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-semibold text-[color:var(--wave-teal)] md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface-1)]/60 px-6 py-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--wave-teal)]/20">
              <img
                src="/GoWavy_LOGO.png"
                alt="GoWavy logo"
                className="h-6 w-6 rounded-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold">GoWavy AI</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[color:var(--text-muted)]">
            <a className="transition hover:text-[color:var(--wave-ink)]" href="#">
              Privacy Policy
            </a>
            <a className="transition hover:text-[color:var(--wave-ink)]" href="#">
              Terms of Service
            </a>
            <a className="transition hover:text-[color:var(--wave-ink)]" href="#">
              Contact
            </a>
          </div>
          <div className="text-xs text-[color:var(--text-muted)]">
            © 2026 GoWavy AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
