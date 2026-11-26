"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./icon";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="space-y-4 px-4 py-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-chip-emerald text-primary">
          <Icon name="check_circle" className="text-[36px]" />
        </div>
        <h3 className="font-sans text-2xl font-bold text-ink">
          Demo Class Reserved!
        </h3>
        <p className="mx-auto max-w-md type-body-sm text-ink-subtle">
          We’ve sent the calendar invite, tutor profile, and digital classroom
          link to your email. An Academic Coordinator will text you brief
          confirmation instructions shortly.
        </p>
        <div className="pt-4">
          <button
            type="button"
            className="btn-outline type-label-sm"
            onClick={() => setSubmitted(false)}
          >
            Book Another Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block type-label-lg text-ink">
          Child&apos;s Current Grade <span className="text-error">*</span>
        </label>
        <select className="field-input" required defaultValue="">
          <option disabled value="">
            Select grade bracket...
          </option>
          <option value="k-2">Grades K - 2 (Early Foundations)</option>
          <option value="3-5">Grades 3 - 5 (Elementary Mastery)</option>
          <option value="6-8">Grades 6 - 8 (Middle School Pre-High)</option>
          <option value="9-12">Grades 9 - 12 (High School / Honors / AP)</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block type-label-lg text-ink">
          Primary Focus Subject <span className="text-error">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {[
            { value: "math", label: "Math", defaultChecked: true },
            { value: "english", label: "English" },
            { value: "science", label: "Science" },
            { value: "multiple", label: "Multiple" },
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
          <label className="mb-2 block type-label-lg text-ink">
            Parent / Guardian Name <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="e.g. Jessica Miller"
            required
            type="text"
          />
        </div>
        <div>
          <label className="mb-2 block type-label-lg text-ink">
            Parent Email Address <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="jessica@example.com"
            required
            type="email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block type-label-lg text-ink">
            Phone (For SMS reminder) <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="(555) 000-0000"
            required
            type="tel"
          />
        </div>
        <div>
          <label className="mb-2 block type-label-lg text-ink">
            Preferred Demo Window <span className="text-error">*</span>
          </label>
          <select className="field-input" required defaultValue="today">
            <option value="today">Today Afternoon (4PM - 7PM EST)</option>
            <option value="tomorrow-eve">Tomorrow Evening (5PM - 8PM EST)</option>
            <option value="saturday">This Saturday (Morning / Midday)</option>
            <option value="sunday">This Sunday (Afternoon)</option>
            <option value="custom">Contact me to customize timing</option>
          </select>
        </div>
      </div>
      <button className="btn-primary w-full cursor-pointer" type="submit">
        <span>Confirm Free 30-Min Demo Session</span>
        <Icon name="verified" className="ml-2 text-[18px]" />
      </button>
      <p className="text-center type-body-sm text-ink-subtle">
        We respect family privacy. Your information is never sold or shared.
      </p>
    </form>
  );
}
