"use client";

import {
  CALLING_CODES,
  callingCodeForIso,
  countryByIso,
} from "@/lib/calling-codes";
import { FormEvent, useEffect, useState } from "react";
import { Icon } from "./icon";

type GeoInfo = {
  country: string;
  countryName: string;
  city: string;
  callingCode: string;
};

function tomorrowMinLocal(): string {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T00:00`;
}

function formatBookedSlot(localDateTime: string): string {
  const date = new Date(localDateTime);
  if (Number.isNaN(date.getTime())) return localDateTime;
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function DemoForm() {
  const [minDateTime, setMinDateTime] = useState("");
  const [selectedIso, setSelectedIso] = useState("AE");
  const [geo, setGeo] = useState<GeoInfo>({
    country: "",
    countryName: "",
    city: "",
    callingCode: callingCodeForIso("AE"),
  });
  const [localDateTime, setLocalDateTime] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [bookedLabel, setBookedLabel] = useState("");

  useEffect(() => {
    setMinDateTime(tomorrowMinLocal());
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/geo")
      .then((response) => response.json())
      .then((data: GeoInfo) => {
        if (cancelled) return;
        const iso = countryByIso(data.country)?.iso ?? "AE";
        setGeo({
          country: data.country ?? "",
          countryName: data.countryName ?? "",
          city: data.city ?? "",
          callingCode: data.callingCode || callingCodeForIso(iso),
        });
        setSelectedIso(iso);
      })
      .catch(() => {
        /* keep GCC fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const selectedDay = localDateTime.slice(0, 10);
    const minDay = minDateTime.slice(0, 10);
    if (!localDateTime || selectedDay < minDay) {
      setError("Please choose a time from tomorrow onward.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade: formData.get("grade"),
          subject: formData.get("subject"),
          parentName: formData.get("parentName"),
          parentEmail: formData.get("parentEmail"),
          callingCode: callingCodeForIso(selectedIso),
          mobile: formData.get("mobile"),
          localDateTime,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          country: geo.country,
          city: geo.city,
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error || "Could not book the trial. Please try again.");
        return;
      }
      setBookedLabel(formatBookedSlot(localDateTime));
    } catch {
      setError("Could not book the trial. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetBooking() {
    setBookedLabel("");
    setLocalDateTime("");
    setError("");
  }

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block type-label-lg text-ink" htmlFor="demo-grade">
            Child&apos;s current grade <span className="text-error">*</span>
          </label>
          <select
            className="field-input"
            id="demo-grade"
            name="grade"
            required
            defaultValue=""
          >
            <option disabled value="">
              Select grade band...
            </option>
            <option value="k-5">Grades K – 5 (Primary)</option>
            <option value="6-8">Grades 6 – 8 (Middle)</option>
            <option value="9-12">Grades 9 – 12 (Secondary)</option>
          </select>
        </div>
        <div>
          <p className="mb-2 type-label-lg text-ink">
            Primary focus subject <span className="text-error">*</span>
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {[
              { value: "maths", label: "Maths", defaultChecked: true },
              { value: "english", label: "English" },
              { value: "science", label: "Science" },
              { value: "languages", label: "Languages" },
              { value: "evs", label: "EVS / Social" },
              { value: "exam", label: "Exam prep" },
            ].map((subject) => (
              <label key={subject.value} className="cursor-pointer">
                <input
                  className="peer sr-only"
                  name="subject"
                  type="radio"
                  value={subject.value}
                  defaultChecked={subject.defaultChecked}
                  required
                />
                <div className="rounded border border-border bg-canvas p-3 text-center type-label-sm text-ink-subtle transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:text-on-primary">
                  {subject.label}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block type-label-lg text-ink" htmlFor="demo-name">
              Parent / guardian name <span className="text-error">*</span>
            </label>
            <input
              className="field-input"
              id="demo-name"
              name="parentName"
              placeholder="e.g. Fatima Al-Hassan"
              required
              type="text"
            />
          </div>
          <div>
            <label className="mb-2 block type-label-lg text-ink" htmlFor="demo-email">
              Parent email address <span className="text-error">*</span>
            </label>
            <input
              className="field-input"
              id="demo-email"
              name="parentEmail"
              placeholder="parent@example.com"
              required
              type="email"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block type-label-lg text-ink" htmlFor="demo-mobile">
              Mobile <span className="text-error">*</span>
            </label>
            <div className="flex gap-2">
              <select
                aria-label="Country calling code"
                className="field-input w-[8.5rem] shrink-0"
                name="callingCode"
                onChange={(event) => setSelectedIso(event.target.value)}
                value={selectedIso}
              >
                {CALLING_CODES.map((item) => (
                  <option key={item.iso} value={item.iso}>
                    {item.dial} {item.iso}
                  </option>
                ))}
              </select>
              <input
                className="field-input"
                id="demo-mobile"
                inputMode="tel"
                name="mobile"
                placeholder="50 000 0000"
                required
                type="tel"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block type-label-lg text-ink" htmlFor="demo-datetime">
              Preferred date and time <span className="text-error">*</span>
            </label>
            <input
              className="field-input"
              id="demo-datetime"
              min={minDateTime}
              name="localDateTime"
              onChange={(event) => setLocalDateTime(event.target.value)}
              required
              type="datetime-local"
              value={localDateTime}
            />
            <p className="mt-1.5 type-body-sm text-ink-subtle">
              Times are in your local timezone. Same-day bookings are not available.
            </p>
          </div>
        </div>
        {error ? (
          <p className="type-body-sm text-error" role="alert">
            {error}
          </p>
        ) : null}
        <button
          className="btn-primary w-full cursor-pointer disabled:opacity-60"
          disabled={submitting}
          type="submit"
        >
          <span>{submitting ? "Booking…" : "Confirm free trial class"}</span>
          <Icon name="verified" className="ml-2 text-[18px]" />
        </button>
        <p className="text-center type-body-sm text-ink-subtle">
          We respect family privacy. Your information is never sold or shared.
        </p>
      </form>

      {bookedLabel ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-success-title"
        >
          <div className="surface-card w-full max-w-md bg-canvas p-8 text-center shadow-float">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-chip-emerald text-primary">
              <Icon name="check_circle" className="text-[36px]" />
            </div>
            <h3
              className="mt-4 font-sans text-2xl font-bold text-ink"
              id="demo-success-title"
            >
              Free trial booked
            </h3>
            <p className="mt-3 type-body-md text-ink">{bookedLabel}</p>
            <p className="mt-2 type-body-sm text-ink-subtle">
              We&apos;ll connect you soon regarding free trial.
            </p>
            <button
              className="btn-primary mt-6 w-full cursor-pointer"
              onClick={resetBooking}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
