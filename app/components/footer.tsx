import Link from "next/link";
import { DiagonalIcon } from "./diagonal-icon";

const QUICK_LINKS = [
  { href: "/#about", label: "About the Event" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#expect", label: "What to Expect" },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook", icon: "facebook" },
  { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
  { href: "https://pinterest.com", label: "Pinterest", icon: "pinterest" },
  { href: "https://tiktok.com", label: "TikTok", icon: "tiktok" },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12 lg:py-14">
        <div className="border-t border-neutral-200 pt-8 md:pt-10 lg:pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {/* Organization */}
            <div className="min-w-0 lg:max-w-[280px]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#148AD9] focus:ring-offset-2 rounded-sm"
                aria-label="J2E-AESD home"
              >
                {/* <Image
                  src="/logo.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0"
                /> */}
                <span className="text-lg font-bold text-black">J2E-AESD</span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Held every spring and fall, this event showcases the incredible
                work happening in our classes while providing resources
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-black">
                Quick Links
              </h3>
              <ul className="mt-4 flex flex-col gap-2" role="list">
                {QUICK_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-black transition-colors hover:text-[#148AD9] focus:outline-none focus:ring-2 focus:ring-[#148AD9] focus:ring-offset-2 rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-black">
                Contact Us
              </h3>
              <address className="mt-4 not-italic">
                <p className="text-sm text-black">
                  1077 St. George Blvd.
                  <br />
                  Moncton, NB, E1E 4C9
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-black">
                  <EnvelopeIcon className="h-4 w-4 shrink-0 text-neutral-500" />
                  <a
                    href="mailto:asdeinfo@nbed.nb.ca"
                    className="transition-colors hover:text-[#148AD9] focus:outline-none focus:ring-2 focus:ring-[#148AD9] focus:ring-offset-2 rounded-sm"
                  >
                    asdeinfo@nbed.nb.ca
                  </a>
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-black">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-neutral-500" />
                  <a
                    href="tel:506-856-3222"
                    className="transition-colors hover:text-[#148AD9] focus:outline-none focus:ring-2 focus:ring-[#148AD9] focus:ring-offset-2 rounded-sm"
                  >
                    506-856-3222
                  </a>
                </p>
              </address>
            </div>

            {/* Get Ticket CTA */}
            <div className="flex flex-col sm:items-start lg:items-end">
              <span className="text-sm text-black">Contact</span>
              <Link
                href="/#tickets"
                className="mt-4 inline-flex items-center gap-2 border border-black bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[#148AD9] focus:ring-offset-2"
              >
                Get Ticket
                <DiagonalIcon className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-neutral-200 pt-6 md:mt-12 md:flex-row md:justify-between md:gap-6 lg:mt-14">
            <p className="text-xs text-black sm:text-sm">
              © 2025 ASDE-E. Tous droits réservés.
            </p>
            <ul className="flex items-center gap-6" role="list">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-[#148AD9] focus:ring-offset-2 rounded-sm"
                    aria-label={item.label}
                  >
                    <SocialIcon name={item.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SocialIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    pinterest: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden
      >
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
      </svg>
    ),
    tiktok: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}
