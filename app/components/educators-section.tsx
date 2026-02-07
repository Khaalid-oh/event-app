"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { DiagonalIcon } from "./diagonal-icon";

const PLACEHOLDER_IMAGE = [
  "/educator.png",
  "/educator_1.png",
  "/educator_2.png",
  "/educator_3.png",
  "/educator_4.png",
];

const educators = [
  {
    id: "1",
    name: "Sarah Mitchell",
    title: "Elementary School Teacher",
    quote:
      "The talent development opportunities here have reignited my passion for teaching and given me new tools to reach every student.",
    image: PLACEHOLDER_IMAGE[0],
    imagePosition: "0% 20%",
  },
  {
    id: "2",
    name: "Johnny Bell",
    title: "High School Science Teacher",
    quote:
      "The talent development opportunities here have reignited my passion for teaching and given me new tools to reach every student.",
    image: PLACEHOLDER_IMAGE[1],
    imagePosition: "50% 30%",
  },
  {
    id: "3",
    name: "Maria Chen",
    title: "High School English Teacher",
    quote:
      "The talent development opportunities here have reignited my passion for teaching and given me new tools to reach every student.",
    image: PLACEHOLDER_IMAGE[2],
    imagePosition: "100% 40%",
  },
  {
    id: "4",
    name: "David Okonkwo",
    title: "Middle School Math Teacher",
    quote:
      "The talent development opportunities here have reignited my passion for teaching and given me new tools to reach every student.",
    image: PLACEHOLDER_IMAGE[3],
    imagePosition: "25% 60%",
  },
  {
    id: "5",
    name: "Jane Doe",
    title: "High School English Teacher",
    quote:
      "The talent development opportunities here have reignited my passion for teaching and given me new tools to reach every student.",
    image: PLACEHOLDER_IMAGE[1],
    imagePosition: "0% 20%",
  },
  {
    id: "6",
    name: "John Smith",
    title: "Middle School Math Teacher",
    quote:
      "The talent development opportunities here have reignited my passion for teaching and given me new tools to reach every student.",
    image: PLACEHOLDER_IMAGE[2],
    imagePosition: "50% 30%",
  },
];

export function EducatorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto text-left">
          <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-4xl">
            A District That Invests in Excellence
          </h2>
          <p className="mt-3 text-base text-black/90 md:text-lg">
            Our commitment to innovation and teacher well-being creates an
            environment where educators thrive and students succeed.
          </p>
        </header>

        <div className="relative mt-8 md:mt-10">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth scrollbar-hide md:gap-6"
            aria-label="Educator profiles carousel"
          >
            {educators.map((edu) => (
              <Link
                key={edu.id}
                href={`/educators/${edu.id}`}
                className="group relative flex min-w-[280px] shrink-0 flex-col overflow-hidden bg-neutral-200 sm:min-w-[320px] md:min-w-[340px]"
              >
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={edu.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 340px"
                    style={{ objectPosition: edu.imagePosition }}
                    quality={100}
                  />
                  {/* Frosted glass overlay - bottom third */}
                  <div className="w-[90%] absolute inset-x-4 bottom-4 md:top-[60%] top-1/2 bg-white/20 backdrop-blur-lg border border-white/20" />
                  <div className="absolute inset-x-4 bottom-4 top-1/3 flex flex-col justify-end p-4 text-white">
                    <div className="absolute md:right-6 right-4  md:top-36 top-24 opacity-90">
                      <DiagonalIcon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col mb-4">
                      <p className="font-bold">{edu.name}</p>
                      <p className="mt-0.5 text-sm font-normal opacity-95">
                        {edu.title}
                      </p>
                    </div>
                    <p className="mt-2 line-clamp-3 text-sm leading-snug opacity-90">
                      {edu.quote}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="mt-6 flex justify-start gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
              aria-label="Scroll carousel left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
              aria-label="Scroll carousel right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
