"use client";

import Link from "next/link";
import Image from "next/image";
import CalendarIcon from "./calendar-icon";
import { DiagonalIcon } from "./diagonal-icon";
import Line from "./line";

const HERO_IMAGE = "/hero-img.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 md:px-6 md:pb-16 md:pt-10 lg:flex lg:gap-12 lg:pb-20">
        {/* Left: text content */}
        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:justify-center">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CalendarIcon className="shrink-0" />
            <span>Upcoming Events</span>
          </div>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-black md:mt-4 md:text-5xl lg:text-6xl">
            Journey to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Excellence</span>
              <svg
                className="absolute left-0 w-full min-w-[105%] -translate-x-0.5 bottom-[-0.02em]"
                viewBox="0 0 323 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M0 19V0L323 1.72727V10.3636L0 19Z" fill="#96CEF4" />
              </svg>
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:mt-5 md:text-lg">
            Professional Learning Day brings together educators, specialists,
            and thought leaders to inspire growth, share best practices, and
            advance teaching excellence.
          </p>

          <Link
            href="/register"
            className="mt-6 inline-flex w-fit items-center gap-2 border border-gray-800 bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors duration-150 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-[0.98]"
          >
            Register Now
            <DiagonalIcon className="w-4 h-4" />
          </Link>

          <div className="mt-8 md:mt-10">
            <h2 className="text-sm font-bold uppercase tracking-wide text-black underline underline-offset-2">
              Next Event
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="block text-xs text-neutral-500">Time</span>
                <span className="text-2xl font-semibold text-black md:text-3xl">
                  08:00
                </span>
              </div>
              <Line />
              <div className="flex items-center gap-2">
                <span className="block text-xs text-neutral-500">Date</span>
                <span className="text-2xl font-semibold text-black md:text-3xl">
                  03/26
                </span>
              </div>
              <Line />
              <div className="flex items-center gap-2">
                <span className="block text-xs text-neutral-500">Venue</span>
                <span className="text-2xl font-semibold text-black md:text-3xl">
                  Event Hall
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image grid */}
        <div className="relative mt-10 lg:mt-0 lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end">
          <Image
            src={HERO_IMAGE}
            alt="hero"
            width={412}
            height={412}
            quality={100}
          />
        </div>
      </div>

      {/* Bottom paragraph */}
      <div className="mx-auto max-w-3xl px-4 pb-12 text-center md:px-6 md:pb-16">
        <p className="text-sm leading-relaxed text-neutral-500 md:text-base">
          Held every spring and fall, this event showcases the incredible work
          happening in our classes while providing resources for families
          throughout our district.
        </p>
      </div>
    </section>
  );
}
