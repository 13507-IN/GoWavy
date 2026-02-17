"use client";

import { useEffect, useRef } from "react";

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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  CalendarCheck,
  MapPin,
  MessageCircle,
  Play,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

const moodStrip = [
  "neon ramen",
  "sunset gelato",
  "late-night vinyl",
  "rooftop breeze",
  "cozy bookstore",
  "midnight market",
  "gallery hop",
  "sushi sprint",
  "arcade nostalgia",
  "quiet wine bar",
  "street tacos",
  "harbor walk",
];

const heroStats = [
  { label: "Avg plan time", value: "2.8 min" },
  { label: "Live votes", value: "1.4k/hr" },
  { label: "Crew sweet spot", value: "4-6 friends" },
];

const featureCards = [
  {
    title: "Vibe intelligence",
    description:
      "Tell us the mood and GoWavy maps it to places that match energy, price, and distance.",
    icon: Sparkles,
    accent: "bg-[color:var(--wave-red)]",
  },
  {
    title: "Crew sync",
    description:
      "Invite the group, collect reactions, and watch consensus build in real time.",
    icon: Users,
    accent: "bg-[color:var(--wave-teal)]",
  },
  {
    title: "Budget guardrails",
    description:
      "Set a hard cap and we only suggest options that keep the whole crew comfy.",
    icon: Wallet,
    accent: "bg-[color:var(--wave-red)]",
  },
  {
    title: "Walkable radius",
    description:
      "Lock the distance and swap to the fastest, most fun path for everyone.",
    icon: MapPin,
    accent: "bg-[color:var(--wave-teal)]",
  },
];

const flowSteps = [
  {
    title: "Set the wave",
    description: "Pick a vibe, radius, and budget in under 10 seconds.",
    meta: "Mood + distance + cap",
  },
  {
    title: "Gather the crew",
    description: "Friends vote with taps, reacts, and quick notes.",
    meta: "Live collaboration",
  },
  {
    title: "Lock the plan",
    description: "Share the itinerary, split costs, and track arrivals.",
    meta: "One-tap send",
  },
];

const planTiles = [
  { title: "Neon ramen", meta: "12 min walk - $$", votes: "76% yes" },
  { title: "Midnight market", meta: "18 min walk - $", votes: "64% yes" },
  { title: "Vinyl lounge", meta: "15 min walk - $$$", votes: "58% yes" },
];

const testimonials = [
  {
    quote:
      "GoWavy turned a 40-message thread into a plan in under three minutes.",
    name: "Maya L.",
    role: "Austin, TX",
  },
  {
    quote:
      "The budget guardrail kept us honest without killing the vibe. Huge win.",
    name: "Jordan P.",
    role: "Toronto, ON",
  },
  {
    quote:
      "We finally stopped debating and just went. The crew board is magic.",
    name: "Kei R.",
    role: "Seattle, WA",
  },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (!rootRef.current) return;

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element, i) => {
          gsap.fromTo(
            element,
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: i * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
              },
            }
          );
        });

        gsap.to(".hero-orb", {
          yPercent: -12,
          rotate: 10,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".ticker-track", {
          xPercent: -20,
          scrollTrigger: {
            trigger: ".ticker-track",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".float-card", {
          y: -18,
          rotate: 5,
          scrollTrigger: {
            trigger: ".hero",
            start: "top 80%",
            end: "bottom top",
            scrub: true,
          },
        });
      }, rootRef);
    };

    init();

    return () => ctx?.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-[#F6F7EB] text-[color:var(--wave-ink)]"
    >
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[460px] w-[460px] rounded-full bg-[color:var(--wave-red)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 left-[-12%] h-[520px] w-[520px] rounded-full bg-[color:var(--wave-teal)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--wave-teal)] opacity-15 blur-3xl" />

      <header className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:rgba(246,247,235,0.9)] shadow-[0_10px_30px_-12px_rgba(31,43,90,0.35)] ring-1 ring-[color:rgba(246,247,235,0.6)]">
            <img
              src="/GoWavy_LOGO.png"
              alt="GoWavy logo"
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:rgba(107,144,128,0.75)]">
              GoWavy
            </p>
            <p className="text-sm font-semibold text-[color:var(--wave-ink)]">
              Plan the night fast
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-10 text-sm text-[color:var(--wave-teal)] lg:flex">
          <a className="transition hover:text-[color:var(--wave-ink)]" href="#features">
            Features
          </a>
          <a className="transition hover:text-[color:var(--wave-ink)]" href="#flow">
            Flow
          </a>
          <a className="transition hover:text-[color:var(--wave-ink)]" href="#board">
            Crew board
          </a>
          <a className="transition hover:text-[color:var(--wave-ink)]" href="#waitlist">
            Waitlist
          </a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost">Sign in</Button>
          <Button variant="glow">Join waitlist</Button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="hero mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          <div data-reveal>
            <Badge className="mb-6">Private beta</Badge>
            <h1 className="text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Turn any group chat into a plan in minutes. Ride the{" "}
              <span className="text-[color:var(--wave-red)]">GoWavy</span>.
            </h1>
            <p className="mt-6 text-lg text-[color:var(--wave-teal)]">
              GoWavy is the vibe-first planner for nights out. Drop a mood,
              invite the crew, keep the budget tight, and get moving fast.
            </p>
            <form
              className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                type="email"
                placeholder="you@domain.com"
                aria-label="Email address"
              />
              <Button variant="glow" size="lg" className="sm:w-auto">
                Join the waitlist
              </Button>
            </form>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[color:rgba(107,144,128,0.75)]">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Play className="h-4 w-4" />
                    See the flow
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>See the GoWavy flow</DialogTitle>
                    <DialogDescription>
                      A quick look at how crews move from vibe to venue.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {flowSteps.map((step, index) => (
                      <div
                        key={step.title}
                        className="rounded-none border border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.9)] p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-[color:rgba(107,144,128,0.75)]">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[color:var(--wave-ink)]">
                          {step.title}
                        </p>
                        <p className="mt-2 text-xs text-[color:var(--wave-teal)]">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <DialogFooter showCloseButton>
                    <Button variant="glow" className="gap-2">
                      Request beta
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--wave-teal)]" />
                City-by-city rollouts
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--wave-red)]" />
                Invite-only beta
              </span>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <Card
                  key={stat.label}
                  className="gap-2 border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.78)] py-4"
                >
                  <CardContent className="px-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:rgba(107,144,128,0.75)]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[color:var(--wave-ink)]">
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center" data-reveal>
            <div className="hero-orb absolute inset-4 rounded-full bg-[color:var(--wave-teal)] glow-ring animate-float-slower" />
            <Card className="relative z-10 w-full max-w-md border-[color:rgba(246,247,235,0.6)] bg-[color:rgba(246,247,235,0.9)] shadow-[0_40px_120px_-80px_rgba(15,23,42,0.6)] backdrop-blur">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:rgba(107,144,128,0.75)]">
                      Tonight's wave
                    </p>
                    <CardTitle className="mt-2 text-xl">Crew board</CardTitle>
                    <CardDescription>8 friends synced � 4 voting</CardDescription>
                  </div>
                  <Badge className="bg-[color:rgba(246,247,235,0.9)] text-[color:rgba(107,144,128,0.75)]">
                    Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {planTiles.map((tile) => (
                  <div
                    key={tile.title}
                    className="flex items-center justify-between rounded-none border border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.78)] px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--wave-ink)]">
                        {tile.title}
                      </p>
                      <p className="text-xs text-[color:rgba(107,144,128,0.75)]">{tile.meta}</p>
                    </div>
                    <span className="rounded-full bg-[var(--wave-teal)]/15 px-3 py-1 text-xs font-semibold text-[color:var(--wave-teal)]">
                      {tile.votes}
                    </span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="border-t border-[color:rgba(107,144,128,0.25)] pt-4">
                <div className="flex w-full items-center justify-between text-sm text-[color:var(--wave-teal)]">
                  <span>Meet at 7:30 PM</span>
                  <Button variant="outline" size="sm">
                    Lock plan
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <div className="float-card absolute -right-6 top-6 hidden w-44 rounded-none border border-[color:rgba(246,247,235,0.7)] bg-[color:rgba(246,247,235,0.9)] p-4 text-xs text-[color:var(--wave-teal)] shadow-[0_20px_60px_-40px_rgba(12,18,40,0.7)] backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:rgba(107,144,128,0.6)]">
                Next
              </p>
              <p className="mt-2 text-sm font-semibold text-[color:var(--wave-ink)]">
                Ramen + arcade
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--wave-red)]" />
                <span>2 miles away</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16" data-reveal>
            <div className="ticker-track flex w-[180%] flex-nowrap gap-4 text-base font-semibold uppercase tracking-[0.12em] text-[color:var(--wave-teal)] md:text-lg">
              {moodStrip.map((mood) => (
                <span
                  key={mood}
                  className="rounded-md border border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.78)] px-6 py-3 shadow-[0_10px_30px_-20px_rgba(12,18,40,0.25)] backdrop-blur"
                >
                  {mood}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[color:rgba(107,144,128,0.75)]">
              Scroll to ride the wave of moods.
            </p>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4" data-reveal>
            <Badge>Why GoWavy</Badge>
            <h2 className="text-3xl md:text-4xl">
              The shortest path from "what should we do?" to "we're on the way".
            </h2>
            <p className="max-w-2xl text-lg text-[color:var(--wave-teal)]">
              We built GoWavy to make group planning feel effortless. Less
              scrolling, more showing up.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="h-full border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.9)]"
                  data-reveal
                >
                  <CardHeader className="gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-none ${feature.accent} text-white shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="flow" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
            <div data-reveal>
              <Badge>Flow</Badge>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Three taps to get everyone moving.
              </h2>
              <p className="mt-4 text-lg text-[color:var(--wave-teal)]">
                GoWavy keeps the vibe front and center while quietly managing
                the logistics behind the scenes.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-3 text-sm text-[color:var(--wave-teal)]">
                  <CalendarCheck className="h-4 w-4 text-[var(--wave-teal)]" />
                  <span>Auto-sync availability as votes land.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[color:var(--wave-teal)]">
                  <MessageCircle className="h-4 w-4 text-[var(--wave-blue)]" />
                  <span>Short reactions replace long debates.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[color:var(--wave-teal)]">
                  <MapPin className="h-4 w-4 text-[var(--wave-red)]" />
                  <span>Routes update to keep everyone nearby.</span>
                </div>
              </div>
            </div>
            <div className="space-y-4" data-reveal>
              {flowSteps.map((step, index) => (
                <Card
                  key={step.title}
                  className="border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.9)]"
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--wave-ink)] text-sm font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {step.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-none bg-[var(--wave-ink)]/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:rgba(107,144,128,0.75)]">
                      {step.meta}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="board" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="space-y-6" data-reveal>
              <Badge>Crew board</Badge>
              <h2 className="text-3xl md:text-4xl">
                Everyone feels heard. Nobody gets stuck.
              </h2>
              <p className="text-lg text-[color:var(--wave-teal)]">
                Watch reactions stack, see the top picks float, and lock the
                perfect option together.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.9)]">
                  <CardHeader>
                    <CardTitle className="text-sm">Live reactions</CardTitle>
                    <CardDescription>
                      Emoji votes and instant feedback keep everyone aligned.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.9)]">
                  <CardHeader>
                    <CardTitle className="text-sm">Smart meetups</CardTitle>
                    <CardDescription>
                      Auto-suggest the midpoint that saves the most time.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <Button variant="outline" className="gap-2">
                Preview the board
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative" data-reveal>
              <Card className="border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.9)] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[color:var(--wave-ink)]">
                    Friday night board
                  </p>
                  <span className="text-xs text-[color:rgba(107,144,128,0.75)]">8 friends</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Sunset gelato",
                    "Rooftop breeze",
                    "Night market",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-none border border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.78)] px-4 py-3"
                    >
                      <span className="text-sm text-[color:var(--wave-teal)]">{item}</span>
                      <span className="rounded-full bg-[var(--wave-teal)]/15 px-3 py-1 text-xs font-semibold text-[color:var(--wave-teal)]">
                        72% voted
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-none bg-[var(--wave-ink)]/90 px-4 py-3 text-xs text-white">
                  Plan locked. Share ETA with the crew.
                </div>
              </Card>
              <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-[color:rgba(246,247,235,0.7)] bg-[color:rgba(246,247,235,0.78)] shadow-[0_20px_60px_-40px_rgba(12,18,40,0.6)] backdrop-blur lg:block" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20" data-reveal>
          <div className="flex flex-col gap-4">
            <Badge>Love notes</Badge>
            <h2 className="text-3xl md:text-4xl">
              Small crews, big energy.
            </h2>
            <p className="max-w-2xl text-lg text-[color:var(--wave-teal)]">
              Early testers are already shaving hours off planning and keeping
              the vibe high.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="h-full border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.9)]"
              >
                <CardContent className="space-y-4">
                  <p className="text-sm text-[color:var(--wave-teal)]">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--wave-ink)]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[color:rgba(107,144,128,0.75)]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl px-6 py-24">
          <div
            className="rounded-none border border-[color:rgba(107,144,128,0.25)] bg-[color:rgba(246,247,235,0.95)] p-10 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.6)]"
            data-reveal
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge>Waitlist</Badge>
                <h2 className="mt-4 text-3xl md:text-4xl">
                  Ready to ride the wave with your crew?
                </h2>
                <p className="mt-4 text-lg text-[color:var(--wave-teal)]">
                  Get early access, invite friends, and help shape the next
                  era of nights out.
                </p>
                <form
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <Input
                    type="email"
                    placeholder="email@domain.com"
                    aria-label="Email address"
                  />
                  <Button variant="glow" size="lg">
                    Join waitlist
                  </Button>
                </form>
                <p className="mt-3 text-xs text-[color:rgba(107,144,128,0.75)]">
                  No spam. Just a heads up when your city opens.
                </p>
              </div>
              <div className="rounded-none border border-[color:rgba(107,144,128,0.25)] bg-[color:var(--wave-cream)] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:rgba(107,144,128,0.75)]">
                  Beta preview
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-none border border-[color:rgba(246,247,235,0.7)] bg-[color:rgba(246,247,235,0.78)] p-4">
                    <p className="text-sm font-semibold text-[color:var(--wave-ink)]">
                      Mood: Rooftop breeze
                    </p>
                    <p className="mt-2 text-xs text-[color:var(--wave-teal)]">
                      4 spots, 10 min walk, $24 cap
                    </p>
                  </div>
                  <div className="rounded-none border border-[color:rgba(246,247,235,0.7)] bg-[color:rgba(246,247,235,0.78)] p-4">
                    <p className="text-sm font-semibold text-[color:var(--wave-ink)]">
                      Crew sync
                    </p>
                    <p className="mt-2 text-xs text-[color:var(--wave-teal)]">
                      5 of 7 friends confirmed
                    </p>
                  </div>
                  <div className="rounded-none border border-[color:rgba(246,247,235,0.7)] bg-[color:rgba(246,247,235,0.78)] p-4">
                    <p className="text-sm font-semibold text-[color:var(--wave-ink)]">
                      Auto itinerary
                    </p>
                    <p className="mt-2 text-xs text-[color:var(--wave-teal)]">
                      Meet at 7:45 PM, split with one tap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[color:rgba(107,144,128,0.25)] px-6 py-8 text-sm text-[color:rgba(107,144,128,0.75)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:rgba(246,247,235,0.9)] ring-1 ring-[color:rgba(246,247,235,0.6)]">
              <img
                src="/GoWavy_LOGO.png"
                alt="GoWavy logo"
                className="h-6 w-6 rounded-full object-cover"
              />
            </div>
            <span>GoWavy</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>hello@gowavy.com</span>
            <span>Launching 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
