import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, MessageCircle, Sparkles, Users } from "lucide-react";

const steps = [
  {
    title: "Set Your Vibe",
    description:
      "Tell us your mood. Pick your budget, dates, and destination preferences.",
    icon: MessageCircle,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQFgMOETt34Saw0sEX1vrTbahL_IO8PLX_B1XZUEkuR66JQLevXRGiNDj8i0FGKauyFahgzPcMmildY2hnW-UcsdU1wTdmzMXBHOmCNyJPvs3ee0iPDSQLZxdW59mfsopTh4XEv9vWHlVCbohSpXkep1JzhNkUzEYSf6kJKfQiSEJVnmpfSsh5MUNFtqrb1xIhne_9fdba_Bqy0G6zf5X6o7gyJVN3C9hpt-oS8-QfaKVSh3U9iQUWtX0oIepuZ9ZPAuREUJVleag",
  },
  {
    title: "AI Magic",
    description:
      "Our engine crafts a custom itinerary in seconds, tailored to your crew.",
    icon: Sparkles,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGU1mmCH1a5txiOE3IlVALnwOiQIE6cgnl7aeYITBOGTqolp8Jzdih2_E1MHe9P3dcCLBoPva43nqWquXs3-2Uc3CdJtvPWrNIXXwiIUFXl_hwsQyxS4xnIUP2oO3w648irn3KGKsPrf4rBR_r-2ShSJLg1UNprodCUByHL6JVGnaBULWH3DVrF9fUwhV40H3g79CiTGvl3R8ytUEYZgAcuYjV1GR3sQIvjVSlm7E8aL2pGVqWVcQYcWjZNIh_7-Z3zEa1qdURbz4",
  },
  {
    title: "Collaborate",
    description:
      "Invite friends to vote, swap activities, and lock the plan in real time.",
    icon: Users,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSz5db5Fltmfcrw_gYNZs3jcHrEQj3qydf0ulApW_ei0nwCETYFHcF_Ddhna_gs3x0jitMmOO-Qx4QJkEctSaJ4SDrqzSd5u9mGgeV9sLjEYLdEXAEGD0dZorvmyCDa8cDb1KVJ7-sVWIu0OBeYeR7RICXmOKMmaWBRtQADVkUm0EaMKn_qMDSGLxngAEtUARy9V1okXQThqbnEWYMFgFlYtNARgOZQkGfPowHMomii7fNjp6ctOqEOcQ22Vhbg5PGSxhJ3_f4KNk",
  },
  {
    title: "Go Enjoy",
    description:
      "Tickets, maps, and reminders in one place. Just show up and enjoy.",
    icon: MapPin,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3ZUIqes7kcqVhoXyUAI2o9VMbOB594oTP9yvSI-NM2S0MpZALl-3sqyIuLaw2rw1BKoVQFy4mvAuWZ5YcWYghui2vvx3ZJQkRLUBuTwXptHKp-SfETr14hbR7XY_dSZzpGjv6sOCfIuN76n-Fi7qA2CoyjqYIwLHA3fOkYwlJaMzz_er6jJaDE8LtoS3s4OQMBxvXRQyoJZrmKAwZyReDEq5r7ZDqPzTR-IAhnZZUq0gNGEffexpwdazGO52Y3UGfrgYKRxQISk0",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[color:var(--wave-cream)] text-[color:var(--wave-ink)]">
      <nav className="sticky top-0 z-50 w-full border-b border-[color:var(--border-soft)] bg-[color:var(--surface-1)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[96rem] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--surface-1)] ring-1 ring-[color:var(--border-soft)]">
              <img
                src="/GoWavy_LOGO.png"
                alt="GoWavy logo"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              GoWavy<span className="text-[color:var(--wave-teal)]">AI</span>
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-[color:var(--text-muted)] md:flex">
            <a className="hover:text-[color:var(--wave-teal)] transition-colors" href="#">
              Explore
            </a>
            <span className="text-[color:var(--wave-teal)]">How it Works</span>
            <a className="hover:text-[color:var(--wave-teal)] transition-colors" href="#">
              Pricing
            </a>
            <Button className="rounded-xl px-6 py-2.5">Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[1000px] w-full -translate-x-1/2 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-[color:var(--wave-teal)]/20 blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] h-[40%] w-[40%] rounded-full bg-[color:var(--wave-red)]/10 blur-[100px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 text-center">
          <Badge className="mb-8 rounded-full border-[color:var(--border-strong)] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)]">
            Planning, minus the stress
          </Badge>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            From{" "}
            <span className="italic text-[color:var(--wave-red)]">"Where to?"</span>
            <br />
            <span className="glow-text text-[color:var(--wave-ink)]">
              "We're here!"
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--text-muted)] md:text-xl">
            Forget the 20 open tabs and group chat chaos. Our AI handles the
            logistics while you focus on the vibe.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[color:var(--wave-teal)]/30 to-transparent -translate-y-1/2" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.title}
                  className="glass-card group relative h-full rounded-xl p-0 transition-all duration-300 hover:-translate-y-2 hover:border-[color:var(--border-strong)] hover:shadow-[0_0_30px_rgba(35,181,211,0.15)]"
                >
                  <CardContent className="flex h-full flex-col items-start p-8">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[color:var(--wave-teal)]/20 text-[color:var(--wave-teal)] transition-colors duration-300 group-hover:bg-[color:var(--wave-teal)] group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="step-number absolute right-4 top-4 text-6xl font-black text-[color:var(--wave-teal)]/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <CardTitle className="mb-4 text-2xl font-bold">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-[color:var(--text-muted)]">
                      {step.description}
                    </CardDescription>
                    <div className="mt-8 w-full overflow-hidden rounded-lg relative">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-48 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--wave-navy)] via-transparent to-transparent opacity-80" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="wave-gradient-bg relative overflow-hidden rounded-3xl border border-white/10 p-12 text-center text-white shadow-[0_40px_120px_-80px_var(--shadow-strong)]">
            <div className="absolute right-0 top-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Ready for your next adventure?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
                Join thousands of crews planning their perfect escapes with
                GoWavy AI.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="w-full rounded-xl bg-[color:var(--wave-cream)] px-10 py-4 text-[color:var(--wave-navy)] shadow-[0_20px_60px_-40px_rgba(35,181,211,0.45)] hover:bg-white sm:w-auto">
                  Plan My Trip
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-white/40 bg-white/10 px-10 py-4 text-white hover:bg-white/20 sm:w-auto"
                >
                  See Example Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl border-t border-[color:var(--border-soft)] px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2 opacity-70">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[color:var(--surface-1)] ring-1 ring-[color:var(--border-soft)]">
                <img
                  src="/GoWavy_LOGO.png"
                  alt="GoWavy logo"
                  className="h-4 w-4 rounded-full object-cover"
                />
              </div>
              <span className="text-sm font-bold uppercase tracking-tight">
                GoWavy
              </span>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-[color:var(--text-muted)]">
              <a className="hover:text-[color:var(--wave-teal)] transition-colors" href="#">
                Privacy
              </a>
              <a className="hover:text-[color:var(--wave-teal)] transition-colors" href="#">
                Terms
              </a>
              <a className="hover:text-[color:var(--wave-teal)] transition-colors" href="#">
                Help
              </a>
              <a className="hover:text-[color:var(--wave-teal)] transition-colors" href="#">
                Social
              </a>
            </div>
            <p className="text-sm text-[color:var(--text-muted)]">
              Copyright 2026 GoWavy AI. Made for the journey.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
