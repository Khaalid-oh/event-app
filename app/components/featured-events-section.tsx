import Link from "next/link";
import Image from "next/image";
import { DiagonalIcon } from "./diagonal-icon";

const CARD_IMAGE = "/event.png";

const featuredEvents = [
  {
    id: "1",
    time: "9:00 AM",
    title: "Learning Showcases",
    date: "01 March",
    location: "Grand Event Hall",
    imagePosition: "0% 20%",
  },
  {
    id: "2",
    time: "9:00 AM",
    title: "Student Presentation",
    date: "01 March",
    location: "Grand Event Hall",
    imagePosition: "50% 30%",
  },
  {
    id: "3",
    time: "9:00 AM",
    title: "AI Adaption 2024",
    date: "01 March",
    location: "Grand Event Hall",
    imagePosition: "100% 40%",
  },
  {
    id: "4",
    time: "9:00 AM",
    title: "AI Adaption 2025",
    date: "01 March",
    location: "Grand Event Hall",
    imagePosition: "25% 60%",
  },
];

export function FeaturedEventsSection() {
  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <header>
          <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-4xl">
            Featured Events
          </h2>
          <p className="mt-2 text-base text-black/90 md:text-lg">
            Be sure not to miss these Event today
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {featuredEvents.map((event) => (
            <article
              key={event.id}
              className="flex flex-col overflow-hidden bg-white border border-neutral-200 p-4"
            >
              <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-neutral-200">
                <Image
                  src={CARD_IMAGE}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectPosition: event.imagePosition }}
                  quality={100}
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <p className="text-sm text-black">
                  Time:{" "}
                  <span className="font-medium text-[#148AD9]">
                    {event.time}
                  </span>
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-black sm:text-xl">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {event.date} | {event.location}
                </p>
                <Link
                  href={`/events/${event.id}`}
                  className="mt-8 flex w-full items-center justify-center gap-2 bg-neutral-200 px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                >
                  View
                  <DiagonalIcon className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
