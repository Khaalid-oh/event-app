"use client";

import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app";
const PLAY_STORE_URL = "https://play.google.com/store/apps";

export function AppDownloadSection() {
  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="border border-neutral-200 bg-white p-8 md:p-8 lg:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl lg:text-4xl">
            It&apos;s easier in the app
          </h2>

          <div className="mt-8 flex gap-6 md:flex-row md:flex-wrap md:gap-x-16 md:gap-y-6 lg:mt-10 lg:gap-x-20">
            <AppDownloadBlock
              href={APP_STORE_URL}
              badgeLabel="Download on the App Store"
              storeName="iOS Appstore"
              icon="apple"
            />
            <AppDownloadBlock
              href={PLAY_STORE_URL}
              badgeLabel="GET IT ON Google Play"
              storeName="Google Playstore"
              icon="google"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AppDownloadBlock({
  href,
  badgeLabel,
  storeName,
  icon,
}: {
  href: string;
  badgeLabel: string;
  storeName: string;
  icon: "apple" | "google";
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 flex-wrap items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#148AD9] focus:ring-offset-2 sm:flex-nowrap sm:gap-4"
    >
      <div className="flex h-12 shrink-0 items-center justify-center bg-black px-3 py-2 sm:h-14 sm:px-4">
        {icon === "apple" ? (
          <AppleBadgeContent label={badgeLabel} />
        ) : (
          <GooglePlayBadgeContent label={badgeLabel} />
        )}
      </div>
      <div className="min-w-0 hidden flex-1 md:block">
        <p className="text-base font-bold text-black sm:text-lg">
          Download the app
        </p>
        <p className="mt-0.5 text-sm text-neutral-500">Link to {storeName}</p>
      </div>
      <div
        className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#148AD9] text-white"
        aria-hidden
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
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function AppleBadgeContent({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2 text-white">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 shrink-0"
        aria-hidden
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="hidden font-medium sm:inline">{label}</span>
      <span className="text-xs font-medium sm:hidden">App Store</span>
    </span>
  );
}

function GooglePlayBadgeContent({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-white">
      <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden>
        <path
          d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden font-medium sm:inline">{label}</span>
      <span className="text-xs font-medium sm:hidden">Google Play</span>
    </span>
  );
}
