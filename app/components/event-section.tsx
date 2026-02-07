"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DiagonalIcon } from "./diagonal-icon";

const EVENT_IMAGE = "/event-section.png";
const EVENT_DATE = new Date("2026-03-26T08:00:00");

const scheduleItems = [
  { time: "8:00 AM", title: "Opening Ceremony" },
  { time: "10:00 AM", title: "Presentation" },
  { time: "12:00 PM", title: "Breakout Session" },
  { time: "01:00 PM", title: "Featured Workshop" },
  { time: "02:00 PM", title: "Award Presentation" },
  { time: "04:00 PM", title: "Closing Ceremony" },
];

const scheduleDescription = "Kickoff the event with a spectacular welcome!";

function useCountdown(target: Date) {
  const [remaining, setRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, target.getTime() - now.getTime());
      setRemaining({
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        minutes: Math.floor(diff / (1000 * 60)) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return remaining;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function EventSection() {
  const { hours, minutes, seconds } = useCountdown(EVENT_DATE);

  return (
    <section className="px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Decide To Join The School Event
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 md:text-base">
            Held every spring and fall, this event showcases the incredible work
            happening in our classes
          </p>
        </header>

        {/* Event visual + countdown + CTA */}
        <div className="relative mt-8 overflow-hidden md:mt-10">
          <div className="relative aspect-16/10 w-full md:aspect-video">
            <Image
              src={EVENT_IMAGE}
              alt="School event - presenter and students"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority={false}
              quality={100}
            />

            {/* Countdown overlay - top right */}
            <div className="absolute right-0 top-0 bg-white px-4 py-3 sm:right-4 sm:px-5 sm:py-4">
              <p className="text-xs font-medium uppercase tracking-wider">
                Remaining Times
              </p>
              <div className="mt-2 flex items-baseline gap-2 sm:gap-3">
                <div className="text-center">
                  <span className="block text-2xl font-bold tabular-nums sm:text-3xl">
                    {pad(hours)}
                  </span>
                  <span className="text-xs text-neutral-500">Hours</span>
                </div>
                <span className="text-neutral-600" aria-hidden>
                  |
                </span>
                <div className="text-center">
                  <span className="block text-2xl font-bold tabular-nums sm:text-3xl">
                    {pad(minutes)}
                  </span>
                  <span className="text-xs text-neutral-500">Minutes</span>
                </div>
                <span className="text-neutral-600" aria-hidden>
                  |
                </span>
                <div className="text-center">
                  <span className="block text-2xl font-bold tabular-nums sm:text-3xl">
                    {pad(seconds)}
                  </span>
                  <span className="text-xs text-neutral-500">Seconds</span>
                </div>
              </div>
            </div>

            {/* Attend button - bottom left */}
            <Link
              href="/attend"
              className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white px-4 py-2.5 text-sm font-medium text-black shadow-lg transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 sm:bottom-4 sm:left-4 sm:px-5"
            >
              Attend The Event
              <DiagonalIcon className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* Date and time block - blue parallelogram cut-out */}
        <div className="mt-8 flex flex-col md:mt-10 w-2/3 md:w-[20%]">
          <div className="relative overflow-visible py-1">
            <span
              className="absolute inset-y-0 -left-1 -right-4 -z-10 -skew-x-[8deg] bg-[#148AD9] sm:-right-1"
              aria-hidden
            />
            <p className="px-3 py-1 text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
              March 26th, 2026
            </p>
          </div>
          <div className="relative ml-6 overflow-visible py-1 md:ml-2">
            <span
              className="absolute inset-y-0 -left-1 -right-4 -z-10 -skew-x-[8deg] bg-[#148AD9] sm:-right-2"
              aria-hidden
            />
            <p className="px-3 py-1 text-lg font-bold text-white sm:text-xl">
              8:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Schedule grid */}
        <div className="mt-10 grid gap-6 md:gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {scheduleItems.map((item) => (
            <article
              key={item.time + item.title}
              className="relative overflow-visible bg-gray-100 p-4 pt-8 text-black shadow-sm sm:p-5 sm:pt-10"
            >
              <time
                dateTime="2026-03-26T08:00"
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 -rotate-2 bg-[#148AD9] px-4 py-2 text-base font-bold text-white shadow sm:text-lg"
              >
                {item.time}
              </time>
              <h3 className="text-base font-bold tracking-tight sm:text-lg">
                {item.title.toUpperCase()}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                {scheduleDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
