import { cacheLife } from "next/cache";
import { BrandName } from "./brand-name";
import { Icon } from "./icon";

const INSTAGRAM_URL =
  "https://www.instagram.com/tutorparks?dmpr=MXF3M3hqY3BlbjB1Mw%3D%3D";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
        width="20"
        x="2"
        y="2"
      />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.1" />
    </svg>
  );
}

export async function LandingFooter() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary-hover text-on-primary/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-12">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="flex max-w-sm flex-col items-center space-y-4 sm:items-start">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-secondary">
                <Icon name="local_library" filled className="text-[18px]" />
              </div>
              <BrandName
                className="font-sans text-xl font-bold tracking-tight"
                tutorClassName="text-on-primary"
              />
            </div>
            <p className="type-body-sm leading-relaxed text-on-primary/70">
              Live 1:1 online classes for K-12 in Maths, English, Science, and
              languages — for families across UAE and the GCC.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-16">
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold text-on-primary">
                Company
              </h3>
              <ul className="space-y-2.5 type-body-sm text-on-primary/70">
                <li>
                  <a className="transition-colors hover:text-on-primary" href="#how-it-works">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold text-on-primary">
                Social
              </h3>
              <ul className="space-y-2.5 type-body-sm text-on-primary/70">
                <li>
                  <a
                    aria-label="TutorParks on Instagram"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-on-primary"
                    href={INSTAGRAM_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary pt-6 type-body-sm text-on-primary/70">
          <p>© {year} TutorParks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
