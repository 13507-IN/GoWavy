"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Compass,
  Calendar,
  UserMinus,
  UserPlus,
  Rocket,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const vibeOptions = [
  { id: "energy", emoji: "\u26A1", label: "High Energy" },
  { id: "chill", emoji: "\uD83C\uDF0A", label: "Chill Out" },
  { id: "gourmet", emoji: "\uD83C\uDF7D", label: "Gourmet" },
  { id: "cultural", emoji: "\uD83C\uDFDB", label: "Cultural" },
];

const dateOptions = [
  { label: "Now" },
  { label: "Weekend" },
  { label: "Custom" },
];

const budgetMarks = ["$", "$$", "$$$", "$$$$"];
const budgetTones = ["Economy", "Comfort", "Premium", "Elite"];

export default function Planner() {
  const [selectedVibe, setSelectedVibe] = useState("energy");
  const [selectedDate, setSelectedDate] = useState("now");
  const [crewCount, setCrewCount] = useState(4);
  const [budgetLevel, setBudgetLevel] = useState(2);
  const [radius, setRadius] = useState(15);
  const [location, setLocation] = useState("Your Area");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initVibe = params.get("vibe");
    if (initVibe) setSelectedVibe(initVibe);

    const initBudget = params.get("budget");
    if (initBudget) {
      const budgetNum = parseInt(initBudget, 10);
      if (budgetNum <= 100) setBudgetLevel(1);
      else if (budgetNum <= 300) setBudgetLevel(2);
      else if (budgetNum <= 600) setBudgetLevel(3);
      else setBudgetLevel(4);
    }

    const initLocation = params.get("location");
    if (initLocation) {
      setLocation(initLocation);
    }
  }, []);

  const dateSummary =
    selectedDate === "now"
      ? "Today"
      : selectedDate === "weekend"
        ? "This Weekend"
        : "Custom Date";
  const budgetMark = budgetMarks[budgetLevel - 1] ?? "$$";
  const budgetTone = budgetTones[budgetLevel - 1] ?? "Comfort";
  const radiusSummary =
    radius <= 5 ? "Walkable" : radius <= 15 ? "Quick Drive" : "Explore Further";

  return (
    <div className="relative min-h-screen overflow-hidden mesh-gradient text-[color:var(--wave-ink)]">
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-[color:var(--wave-teal)]/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-[color:var(--wave-red)]/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-[35%] left-[40%] h-64 w-64 rounded-full bg-[color:var(--wave-blue)]/15 blur-[120px]" />
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
        {/* Header */}
        <header className="mx-4 mt-5 flex items-center justify-between rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface-1)]/90 px-5 py-4 backdrop-blur-xl shadow-[0_30px_90px_-70px_var(--shadow-strong)] lg:mx-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--wave-teal)]/20 text-[color:var(--wave-teal)] shadow-[0_12px_40px_-24px_var(--glow)]">
              <Compass className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              GoWavy{" "}
              <span className="text-[color:var(--wave-teal)]">Planner</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-[color:var(--border-strong)] bg-[color:var(--surface-2)] text-[color:var(--wave-ink)] hover:bg-[color:var(--surface-3)]"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </header>

        <main className="flex-1 grid grid-cols-1 gap-10 px-6 pb-24 pt-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
          {/* Main Planner Section */}
          <section className="space-y-10">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="rounded-full border-[color:var(--border-strong)] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)]">
                  Step 1 of 3
                </Badge>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  Build your perfect outing
                </span>
              </div>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Design Your{" "}
                <span className="bg-gradient-to-r from-[color:var(--wave-teal)] via-[color:var(--wave-blue)] to-[color:var(--wave-red)] bg-clip-text text-transparent">
                  Vibe
                </span>
              </h2>
              <p className="text-lg text-[color:var(--text-muted)]">
                Personalized experiences powered by your preferences.
              </p>
            </div>

            {/* Atmosphere Selector */}
            <Card className="glass-card rounded-[2rem] border-[color:var(--border-soft)] p-8 shadow-[0_30px_90px_-70px_var(--shadow-soft)] hover-pop">
              <label className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                Select Your Atmosphere
              </label>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {vibeOptions.map((vibe) => (
                  <Button
                    key={vibe.id}
                    variant={selectedVibe === vibe.id ? "default" : "outline"}
                    className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                      selectedVibe === vibe.id
                        ? "border-transparent bg-[color:var(--wave-teal)] text-white shadow-[0_20px_60px_-40px_var(--glow)]"
                        : "border-[color:var(--border-soft)] bg-[color:var(--surface-2)] text-[color:var(--wave-ink)]/80 hover:bg-[color:var(--surface-3)]"
                    }`}
                    onClick={() => setSelectedVibe(vibe.id)}
                  >
                    <span className="text-3xl">{vibe.emoji}</span>
                    <span>{vibe.label}</span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Date & Crew */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="glass-panel rounded-[2rem] border-[color:var(--border-soft)] p-8 shadow-[0_24px_70px_-50px_var(--shadow-soft)]">
                <label className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  When are we going?
                </label>
                <div className="flex gap-2 rounded-2xl bg-[color:var(--surface-2)] p-1.5">
                  {dateOptions.map((date) => (
                    <Button
                      key={date.label}
                      variant={selectedDate === date.label.toLowerCase() ? "default" : "ghost"}
                      className={`flex-1 rounded-xl py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                        selectedDate === date.label.toLowerCase()
                          ? "bg-[color:var(--wave-teal)] text-white shadow-[0_10px_30px_-18px_var(--glow)]"
                          : "text-[color:var(--wave-ink)]/70 hover:bg-[color:var(--surface-3)]"
                      }`}
                      onClick={() => setSelectedDate(date.label.toLowerCase())}
                    >
                      {date.label}
                    </Button>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 text-sm font-medium text-[color:var(--wave-teal)]">
                  <Calendar className="h-4 w-4" />
                  <span>Planning for {dateSummary}</span>
                </div>
              </Card>

              <Card className="glass-panel rounded-[2rem] border-[color:var(--border-soft)] p-8 shadow-[0_24px_70px_-50px_var(--shadow-soft)]">
                <label className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                  The Crew
                </label>
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-14 w-14 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] text-[color:var(--wave-ink)] hover:bg-[color:var(--surface-3)]"
                    onClick={() => setCrewCount(Math.max(1, crewCount - 1))}
                  >
                    <UserMinus className="h-5 w-5" />
                  </Button>
                  <div className="text-center">
                    <span className="text-5xl font-extrabold text-[color:var(--wave-ink)]">
                      {crewCount.toString().padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--text-muted)]">
                      People
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-14 w-14 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] text-[color:var(--wave-ink)] hover:bg-[color:var(--surface-3)]"
                    onClick={() => setCrewCount(crewCount + 1)}
                  >
                    <UserPlus className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-6 flex justify-between px-2">
                  <span className="text-[10px] font-black uppercase text-[color:var(--text-muted)]">
                    Solo
                  </span>
                  <span className="text-[10px] font-black uppercase text-[color:var(--wave-teal)]">
                    Squad
                  </span>
                  <span className="text-[10px] font-black uppercase text-[color:var(--text-muted)]">
                    Party
                  </span>
                </div>
              </Card>
            </div>
            {/* Budget & Radius */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="glass-card rounded-[2rem] border-[color:var(--border-soft)] p-8 shadow-[0_24px_70px_-50px_var(--shadow-soft)]">
                <div className="mb-6 flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                    Budget Range
                  </label>
                  <div className="rounded-full bg-[color:var(--surface-2)] px-3 py-1">
                    <span className="text-sm font-black text-[color:var(--wave-teal)]">{budgetMark}</span>
                  </div>
                </div>
                <input
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[color:var(--border-soft)] accent-[color:var(--wave-teal)]"
                  type="range"
                  min="1"
                  max="4"
                  value={budgetLevel}
                  onChange={(e) => setBudgetLevel(Number(e.target.value))}
                />
                <div className="mt-3 flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  <span>Economy</span>
                  <span>Premium</span>
                </div>
                <div className="mt-4 rounded-2xl bg-[color:var(--surface-2)] px-4 py-3 text-xs font-semibold text-[color:var(--wave-ink)]/80">
                  {budgetTone} tier selected
                </div>
              </Card>

              <Card className="glass-card rounded-[2rem] border-[color:var(--border-soft)] p-8 shadow-[0_24px_70px_-50px_var(--shadow-soft)]">
                <div className="mb-6 flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--text-muted)]">
                    Travel Radius
                  </label>
                  <div className="rounded-full bg-[color:var(--surface-2)] px-3 py-1">
                    <span className="text-sm font-black text-[color:var(--wave-teal)]">{radius} mi</span>
                  </div>
                </div>
                <input
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[color:var(--border-soft)] accent-[color:var(--wave-teal)]"
                  type="range"
                  min="1"
                  max="50"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                />
                <div className="mt-3 flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                  <span>Walk</span>
                  <span>Drive</span>
                  <span>Transit</span>
                </div>
                <div className="mt-4 rounded-2xl bg-[color:var(--surface-2)] px-4 py-3 text-xs font-semibold text-[color:var(--wave-ink)]/80">
                  {radiusSummary}
                </div>
              </Card>
            </div>
            {/* Generate Button */}
            <div className="pt-2 pb-12 lg:pb-0">
              <Button
                className="w-full rounded-[2.5rem] bg-[color:var(--wave-red)] py-6 text-lg font-black uppercase tracking-[0.2em] text-white shadow-[0_25px_70px_-40px_rgba(255,93,115,0.6)] transition hover:translate-y-[-1px] hover:brightness-95"
                size="lg"
              >
                <Rocket className="h-6 w-6" />
                Generate Plan
              </Button>
            </div>
          </section>

          {/* AI Sidebar */}
          <aside className="hidden lg:flex h-fit flex-col gap-8 lg:sticky lg:top-6">
            <Card className="glass-panel flex flex-col rounded-[2.5rem] border-[color:var(--border-soft)] p-8 shadow-[0_40px_120px_-80px_var(--shadow-soft)]">
              <div className="mb-8 flex items-center gap-4">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.75rem] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)] shadow-[0_20px_60px_-40px_var(--glow)]">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-[color:var(--surface-1)] bg-[color:var(--wave-teal)] animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Concierge AI</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--wave-teal)] animate-pulse"></span>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                      Scanning your vibe
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] p-5 text-sm text-[color:var(--wave-ink)]/80">
                  <p>
                    Energy vibes? I've locked onto some{" "}
                    <span className="font-bold text-[color:var(--wave-teal)]">trending rooftop venues</span>{" "}
                    and underground spots in your radius.
                  </p>
                </div>
                <div className="rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] p-5 text-sm text-[color:var(--wave-ink)]/80">
                  <p>
                    With a crew of 4, I'm checking real-time availability for{" "}
                    <span className="font-bold text-[color:var(--wave-teal)]">group bookings</span>. Should we include
                    interactive venues?
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge className="border-[color:var(--border-soft)] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)]">
                      Downtown
                    </Badge>
                    <Badge className="border-[color:var(--border-soft)] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)]">
                      Waterfront
                    </Badge>
                  </div>
                </div>

                <div className="mt-auto rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface-2)] p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Lightbulb className="h-5 w-5 text-[color:var(--wave-teal)]" />
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-[color:var(--wave-teal)]">
                      Expert Insight
                    </span>
                  </div>
                  <p className="text-xs font-medium leading-relaxed text-[color:var(--wave-ink)]/70">
                    Spots with high-energy peaks are trending tonight. Generate your plan now to lock in priority access.
                  </p>
                </div>
              </div>
            </Card>

            {/* Map Preview */}
            <div className="group relative h-56 overflow-hidden rounded-[2.5rem] border border-[color:var(--border-soft)] shadow-[0_30px_90px_-70px_var(--shadow-soft)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMALFlJJ1jZkHPGX2lfBTnlitlo_cmvgALBCfk1fWDas316f83plo1G2Ljc8aswYbXnzFU5TYLPz8QAWgqesfBsmnHdIe4f5NM0x8S8pq7jneo6gzbleeZ3FmYBFVwPz8vA8PFHvTaW_6dwgsYf8xOkWNhv2iCiYZSxXVbx_fZZi8IaBjtMY3HG-zKUnBEUVksuUrajHLn3Pw596ifxffCtmOEPTF8cqt66vaGSa_vFExX5Ip5Hg1OuCaZSHudYtitsB5eFCFoNiw"
                alt="Live Map Preview"
                fill
                className="object-cover grayscale brightness-75 contrast-125 transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--wave-navy)]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[color:var(--wave-teal)] animate-ping"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-[color:var(--wave-cream)]">
                    Scanning {location || "Your Area"}
                  </span>
                </div>
                <Badge className="bg-[color:var(--wave-teal)] px-3 py-1 text-[color:var(--wave-navy)] font-black shadow-[0_20px_50px_-35px_var(--glow)]">
                  Live Radar
                </Badge>
              </div>
            </div>
          </aside>
        </main>

        {/* Mobile Footer */}
        <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-[color:var(--border-soft)] bg-[color:var(--surface-1)]/95 p-4 backdrop-blur-xl lg:hidden">
          <Button className="w-full rounded-2xl bg-[color:var(--wave-red)] py-4 text-base font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_60px_-40px_rgba(255,93,115,0.6)]">
            <Rocket className="h-5 w-5" />
            Build Plan
          </Button>
        </footer>
      </div>
    </div>
  );
}
