"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <div className="mesh-gradient min-h-screen px-6 py-20">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--wave-teal)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--wave-teal)]/20">
              <img
                src="/GoWavy_LOGO.png"
                alt="GoWavy logo"
                className="h-6 w-6 rounded-full object-cover"
              />
            </span>
            GoWavy AI
          </Link>
          <Badge className="border-[color:var(--border-strong)] bg-[color:var(--surface-2)] text-[color:var(--wave-teal)]">
            Join the crew
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Create your account and start planning faster.
          </h1>
          <p className="max-w-lg text-lg text-[color:var(--text-muted)]">
            One profile, unlimited vibes. Share plans, split costs, and keep
            everyone aligned.
          </p>
        </div>

        <Card className="glass-panel border-[color:var(--border-soft)]">
          <CardHeader>
            <CardTitle className="text-2xl">Create account</CardTitle>
            <CardDescription>
              Get started with your email in less than a minute.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input type="text" placeholder="Full name" required />
              <Input type="email" placeholder="Email address" required />
              <Input type="password" placeholder="Password" required />
              <Button type="submit" variant="glow" className="w-full">
                Create Account
              </Button>
            </form>
            <div className="text-center text-sm text-[color:var(--text-muted)]">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-[color:var(--wave-teal)] hover:text-[color:var(--wave-ink)]"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
