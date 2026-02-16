"use client";

import { useEffect, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const moodChips = [
  "neon ramen",
  "cozy corner",
  "lo-fi cafe",
  "sunset gelato",
  "arcade nostalgia",
  "rooftop breeze",
  "vinyl lounge",
  "late-night dessert",
  "street art crawl",
  "night market",
];

const features = [
  {
    title: "Mood-first discovery",
    description:
      "Pick a vibe and GoWavy surfaces nearby spots that match the energy, not just the category.",
    accent: "from-[var(--wave-red)] to-[var(--wave-teal)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 3v5m0 0l3-3m-3 3l-3-3m9 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Instant crew sync",
    description:
      "Create a shared board, vote on options, and lock plans without a 40-message thread.",
    accent: "from-[var(--wave-teal)] to-[var(--wave-blue)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M7 13a4 4 0 1 1 6.6-3M14.5 15.5a4 4 0 1 0 2.2-7.4M5 20c.6-2.5 2.6-4 5-4s4.4 1.5 5 4M13.8 20c.3-1.2 1.3-2 2.7-2 1.3 0 2.4.8 2.7 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Budget guardrails",
    description:
      "Set a spend limit and we keep every suggestion inside your comfort zone.",
    accent: "from-[var(--wave-blue)] to-[var(--wave-navy)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M7 7h10M7 12h6m-6 5h10M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Drop your mood",
    detail:
      "Pick a vibe like late-night ramen or sunset gelato and set a distance cap.",
  },
  {
    title: "Bring the crew",
    detail:
      "Invite friends, sync availability, and get instant votes on what feels right.",
  },
  {
    title: "Lock the plan",
    detail:
      "One tap shares the itinerary, budget split, and a live arrival tracker.",
  },
];

const stats = [
  { label: "Avg plan time", value: "3 min" },
  { label: "Mood tags", value: "150+" },
  { label: "Collab votes", value: "Real-time" },
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
        gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element, i) => {
          gsap.fromTo(
            element,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: i * 0.06,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
              },
            }
          );
        });

        gsap.to(".hero-orb", {
          yPercent: -14,
          rotate: 16,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-wave", {
          yPercent: 18,
          rotate: -12,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".scroll-track", {
          xPercent: -24,
          scrollTrigger: {
            trigger: ".scroll-track",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".floating-card", {
          y: -24,
          rotate: 6,
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
      className="relative min-h-screen overflow-x-hidden bg-white text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-28 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_top,_var(--wave-coral),_transparent_70%)] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-12%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle_at_bottom,_var(--wave-mint),_transparent_70%)] opacity-70 blur-3xl" />

      <header className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-[conic-gradient(from_120deg,_var(--wave-red),_var(--wave-teal),_var(--wave-navy),_var(--wave-red))] shadow-[0_10px_30px_-12px_rgba(31,43,90,0.7)]" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              GoWavy
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Find your vibe
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-10 text-sm text-slate-600 lg:flex">
          <a className="transition hover:text-slate-900" href="#features">
            Features
          </a>
          <a className="transition hover:text-slate-900" href="#how">
            How it works
          </a>
          <a className="transition hover:text-slate-900" href="#collab">
            Collab
          </a>
          <a className="transition hover:text-slate-900" href="#waitlist">
            Waitlist
          </a>
        </nav>
        <Button className="hidden lg:inline-flex" variant="glow">
          Join waitlist
        </Button>
      </header>

      <main className="relative z-10">
        <section className="hero mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div data-animate>
            <Badge className="mb-6">Early access</Badge>
            <h1 className="text-4xl leading-[1.05] md:text-6xl">
              Find a hangout that matches your{" "}
              <span className="text-gradient">mood</span> and your crew.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              GoWavy is the vibe-first platform for picking nearby spots. Set a
              mood, sync with friends, lock a budget, and get out the door in
              minutes.
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
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--wave-teal)]" />
                City-by-city rollouts
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--wave-red)]" />
                Invite-only beta
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--wave-blue)]" />
                Budget-safe plans
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center" data-animate>
            <div className="relative h-[360px] w-[360px] perspective-1200">
              <div className="hero-orb absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_var(--wave-coral),_var(--wave-teal)_45%,_var(--wave-navy)_90%)] glow-ring animate-float-slow" />
              <div className="hero-wave absolute inset-10 rounded-[999px] bg-[conic-gradient(from_90deg,_rgba(255,255,255,0.2),_rgba(63,215,196,0.5),_rgba(87,179,255,0.35),_rgba(255,255,255,0.1))] blur-sm" />
              <div className="absolute inset-16 rounded-full border border-white/70 bg-white/40 backdrop-blur" />
              <div className="absolute -bottom-10 left-1/2 h-20 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(31,43,90,0.35),_transparent_70%)] opacity-60 blur-2xl" />
            </div>

            <div className="floating-card absolute right-[-6%] top-8 hidden w-48 rounded-3xl border border-white/80 bg-white/70 p-4 text-xs text-slate-600 shadow-[0_20px_60px_-40px_rgba(12,18,40,0.7)] backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Tonight
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Neon ramen + stroll
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--wave-red)]" />
                <span>5 spots within 2 miles</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16" data-animate>
          <div className="scroll-track flex w-[160%] flex-nowrap gap-3 text-sm text-slate-600">
            {moodChips.map((mood) => (
              <span
                key={mood}
                className="rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 shadow-[0_10px_30px_-20px_rgba(12,18,40,0.3)] backdrop-blur"
              >
                {mood}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Scroll to ride the wave of moods.
          </p>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4" data-animate>
            <Badge>What makes it slick</Badge>
            <h2 className="text-3xl md:text-4xl">
              A hangout engine that feels like magic.
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              GoWavy is built to collapse decision fatigue into a single, smooth
              flow. Discover, collaborate, and commit without the noise.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 perspective-1200">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-3d rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.5)]"
                data-animate
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
            <div data-animate>
              <Badge>How it works</Badge>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Three steps to the perfect hangout.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Go from vibe to venue in minutes with an interface that feels
                like a shared playlist for your night out.
              </p>
              <div className="mt-8 grid gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-panel rounded-2xl border border-white/60 px-5 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6" data-animate>
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="glass-panel rounded-3xl border border-white/60 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--wave-ink)] text-sm font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="collab" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
            <div className="space-y-6" data-animate>
              <Badge>Collaboration</Badge>
              <h2 className="text-3xl md:text-4xl">
                Plan together without the chaos.
              </h2>
              <p className="text-lg text-slate-600">
                Build a shared queue, drop reactions, and watch the consensus
                form in real time. GoWavy keeps the energy up and the friction
                down.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel rounded-3xl border border-white/60 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Live reactions
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Emoji votes and instant feedback keep every friend in the
                    loop.
                  </p>
                </div>
                <div className="glass-panel rounded-3xl border border-white/60 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Smart meetups
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Auto-suggest the best midpoint for everyone in the crew.
                  </p>
                </div>
              </div>
              <Button variant="outline">See collaboration demo</Button>
            </div>

            <div className="relative perspective-1200" data-animate>
              <div className="card-3d rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.55)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Crew board
                  </p>
                  <span className="text-xs text-slate-500">8 friends</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    "Rooftop breeze",
                    "Cozy bookstore",
                    "Neon ramen",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3"
                    >
                      <span className="text-sm text-slate-700">{item}</span>
                      <span className="rounded-full bg-[var(--wave-teal)]/15 px-3 py-1 text-xs font-semibold text-slate-700">
                        72% voted
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-[var(--wave-ink)]/90 px-4 py-3 text-xs text-white">
                  Plan locked. Share ETA with the crew.
                </div>
              </div>
              <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-white/70 bg-white/70 shadow-[0_20px_60px_-40px_rgba(12,18,40,0.6)] backdrop-blur lg:block" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20" data-animate>
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
            <div>
              <Badge>Budget first</Badge>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Keep plans within your comfort zone.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Set a hard cap or let GoWavy auto-balance options based on the
                crew. Every recommendation stays inside your spend limit.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>$15 chill</span>
                  <span>$50 all-in</span>
                </div>
                <input
                  type="range"
                  defaultValue={32}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[var(--wave-teal)]"
                />
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="rounded-full bg-[var(--wave-red)]/15 px-3 py-1 text-xs font-semibold text-slate-700">
                    Your cap
                  </span>
                  <span>$32 per person</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 perspective-1200">
              {["Chill bites", "Craft mocktails", "Late-night dessert", "Live DJ"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="card-3d rounded-3xl border border-slate-200/70 bg-white/80 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {`Pick ${index + 1}`}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-slate-900">
                      {item}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Est. ${18 + index * 6} per person
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-[36px] border border-slate-200/70 bg-white/90 p-10 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.6)]" data-animate>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge>Waitlist</Badge>
                <h2 className="mt-4 text-3xl md:text-4xl">
                  Ready to ride the GoWavy wave?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Get early access, invite friends, and help shape the future of
                  mood-first hangouts.
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
                <p className="mt-3 text-xs text-slate-500">
                  No spam. Just the invite when your city opens.
                </p>
              </div>
              <div className="card-3d rounded-3xl border border-slate-200/70 bg-[radial-gradient(circle_at_top,_var(--wave-mint),_transparent_60%)] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Beta preview
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Mood: Chill + chat
                    </p>
                    <p className="mt-2 text-xs text-slate-600">
                      3 spots, 12 min walk, $22 cap
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Crew sync
                    </p>
                    <p className="mt-2 text-xs text-slate-600">
                      6 of 8 friends confirmed
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Auto itinerary
                    </p>
                    <p className="mt-2 text-xs text-slate-600">
                      Meet at 7:30 PM, split with one tap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200/70 px-6 py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[conic-gradient(from_120deg,_var(--wave-red),_var(--wave-teal),_var(--wave-navy),_var(--wave-red))]" />
            <span>GoWavy</span>
          </div>
          <div className="flex items-center gap-6">
            <span>hello@gowavy.com</span>
            <span>Launching 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
