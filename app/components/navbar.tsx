"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { DiagonalIcon } from "./diagonal-icon";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/#",
    label: "Events",
    badge: "5",
    badgeVariant: "dark" as const,
  },
  {
    href: "/##",
    label: "Schedule",
    badge: "Live",
    badgeVariant: "blue" as const,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = () => closeMobile();
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mobileOpen, closeMobile]);

  const menuButtonAria = {
    "aria-expanded": (mobileOpen ? "true" : "false") as "true" | "false",
    "aria-controls": "mobile-menu",
    "aria-label": mobileOpen ? "Close menu" : "Open menu",
  } as const;

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="relative mx-auto flex max-w-7xl items-stretch justify-between gap-4 px-4 pt-4 pb-[17px] md:px-6">
        {/* Logo: blue circle + Event text */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded-sm"
          aria-label="Event home"
        >
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop: center nav + right CTA */}
        <div className="hidden items-center gap-8 md:flex md:flex-1 md:justify-center">
          <ul className="flex items-center gap-1" role="list">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded-sm ${
                      isActive
                        ? "font-semibold text-black"
                        : "font-medium text-neutral-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span
                        className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-medium text-white ${
                          item.badgeVariant === "blue"
                            ? "bg-[#148AD9]"
                            : "bg-black"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span
                        className="absolute bottom-[-17px] left-2 right-2 z-10 h-0.5 bg-black"
                        aria-hidden
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded-sm"
          >
            Contact
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 border border-gray-800 bg-white px-4 py-2 text-sm font-medium text-black transition-colors duration-150 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-[0.98]"
          >
            Register Now
            <DiagonalIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile: hamburger + Register Now */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-black"
          >
            Register Now
            <DiagonalIcon className="w-4 h-4" />
          </Link>
          <button
            type="button"
            {...menuButtonAria}
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((prev) => !prev);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            {mobileOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 5h16M2 10h16M2 15h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Bottom border: grey line; active link underline sits on this */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 h-px bg-neutral-200"
        aria-hidden
      />

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-neutral-200 bg-white px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-100 text-black"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span
                        className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-medium text-white ${
                          item.badgeVariant === "blue"
                            ? "bg-[#148AD9]"
                            : "bg-black"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
