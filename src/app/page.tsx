import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";
import { Spotlight } from "@/components/spotlight";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Faint grid, fading out towards the edges */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_30%,transparent_100%)]"
      />
      {/* Soft glow behind the card */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[24rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.05] blur-[100px]"
      />
      {/* Cursor spotlight over the grid */}
      <Spotlight />

      <section className="flex w-full max-w-sm flex-col items-center text-center">
        <div className="animate-in fade-in zoom-in-95 fill-mode-backwards duration-700">
          <div className="rounded-full bg-gradient-to-b from-white/20 to-white/5 p-px shadow-[0_0_60px_-12px_rgba(255,255,255,0.25)]">
            <Image
              src="/matti.webp"
              alt="Portrait of Matti Nannt"
              width={112}
              height={112}
              priority
              className="size-24 rounded-full object-cover sm:size-28"
            />
          </div>
        </div>

        <h1 className="animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards mt-6 text-3xl font-semibold tracking-tight duration-700 [animation-delay:100ms] sm:text-4xl">
          Matti Nannt
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards mt-3 text-base text-muted-foreground duration-700 [animation-delay:200ms]">
          Founder of{" "}
          <a
            href="https://formbricks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-0.5 font-medium text-foreground underline-offset-4 transition-colors hover:underline"
          >
            formbricks.com
            <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-foreground" />
          </a>
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards mt-8 flex w-full flex-col gap-3 duration-700 [animation-delay:300ms] sm:flex-row sm:justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full gap-2 sm:w-auto sm:px-5"
          >
            <a
              href="https://github.com/mattinannt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full gap-2 sm:w-auto sm:px-5"
          >
            <a
              href="https://linkedin.com/in/matti-sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </Button>
        </div>
      </section>

      <footer className="animate-in fade-in fill-mode-backwards absolute bottom-6 duration-700 [animation-delay:500ms]">
        <p className="font-mono text-xs text-muted-foreground/60">matti.sh</p>
      </footer>
    </main>
  );
}
