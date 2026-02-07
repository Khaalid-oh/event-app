"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const leaders = [
  {
    id: "1",
    name: "Randolph MacLEAN",
    title: "Superintendent and CEO",
    image: "/team-01.jpg",
  },
  {
    id: "2",
    name: "Janique Chiasson",
    title:
      "Executive Assistant to the Superintendent and CEO Secretary to the District Education Council",
    image: "/team-02.jpg",
  },
  {
    id: "3",
    name: "Stephanie Patterson",
    title: "Director of Communications",
    image: "/team-03.jpg",
  },
  {
    id: "4",
    name: "Aubrey Kirkpatrick",
    title: "Director of Finance & Administration",
    image: "/team-04.jpg",
  },
  {
    id: "5",
    name: "Jacqui Eadle",
    title: "Director of Human Resources",
    image: "/team-05.jpg",
  },
  {
    id: "6",
    name: "Adam Rogerson",
    title: "Director of Education",
    image: "/team-06.jpg",
  },
  {
    id: "7",
    name: "Donna Godfrey",
    title: "Director of Education",
    image: "/team-07.png",
  },
  {
    id: "8",
    name: "Sarah Lowe",
    title: "Director of Education",
    image: "/team-08.jpg",
  },
  {
    id: "9",
    name: "Pamela Wilson",
    title: "Director of Curriculum & Instruction",
    image: "/team-09.jpg",
  },
  {
    id: "10",
    name: "Kim Oakley",
    title: "Director of Educational Support",
    image: "/team-10.jpg",
  },
  {
    id: "11",
    name: "Clare Archibald",
    title: "Director of Early Childhood",
    image: "/team-11.jpg",
  },
];

const SCROLL_DELAY_MS = 1200;
const SCROLL_SPEED_PX = 0.5;

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollRef.current;
    if (!section || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        const t = setTimeout(() => setHasStarted(true), SCROLL_DELAY_MS);
        return () => clearTimeout(t);
      },
      { threshold: 0.2, rootMargin: "0px" },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 2;

    const tick = () => {
      if (!container) return;
      container.scrollLeft += SCROLL_SPEED_PX;
      if (container.scrollLeft >= singleSetWidth - 1) {
        container.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasStarted]);

  const duplicatedLeaders = [...leaders, ...leaders];

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-12 md:px-6 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-4xl">
            Meet Our Senior Leadership Team
          </h2>
          <p className="mt-2 text-base text-black/90 md:text-lg">
            A Better Future...Through Quality Education
          </p>
        </header>

        <div className="relative mt-8 md:mt-10">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide md:gap-6 lg:gap-8"
            aria-label="Leadership team"
          >
            {duplicatedLeaders.map((leader, index) => (
              <div
                key={`${leader.id}-${index}`}
                className="relative h-[320px] w-[260px] shrink-0 overflow-hidden bg-neutral-200 sm:h-[360px] sm:w-[280px] md:h-[380px] md:w-[300px]"
              >
                <Image
                  src={leader.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 300px"
                  quality={100}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 via-black/40 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-sm font-bold uppercase text-center tracking-wide sm:text-base">
                    {leader.name}
                  </p>
                  <p className="mt-1 text-xs font-normal text-[#148AD9] text-center sm:text-sm">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
