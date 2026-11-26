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
          Free trial reserved
        </h3>
        <p className="mx-auto max-w-md type-body-sm text-ink-subtle">
          We&apos;ve sent the class details to your email. An advisor will
          confirm the slot and tutor shortly.
        </p>
        <div className="pt-4">
          <button
            type="button"
            className="btn-outline type-label-sm"
            onClick={() => setSubmitted(false)}
          >
            Book another student
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2 block type-label-lg text-ink">
          Child&apos;s current grade <span className="text-error">*</span>
        </label>
        <select className="field-input" required defaultValue="">
          <option disabled value="">
            Select grade band...
          </option>
          <option value="k-5">Grades K – 5 (Primary)</option>
          <option value="6-8">Grades 6 – 8 (Middle)</option>
          <option value="9-12">Grades 9 – 12 (Secondary)</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block type-label-lg text-ink">
          Primary focus subject <span className="text-error">*</span>
        </label>
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
          <label className="mb-2 block type-label-lg text-ink">
            Parent / guardian name <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="e.g. Fatima Al-Hassan"
            required
            type="text"
          />
        </div>
        <div>
          <label className="mb-2 block type-label-lg text-ink">
            Parent email address <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="parent@example.com"
            required
            type="email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block type-label-lg text-ink">
            Mobile (with country code) <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="+971, +966, +974, +965, or +968"
            required
            type="tel"
          />
        </div>
        <div>
          <label className="mb-2 block type-label-lg text-ink">
            Preferred trial window <span className="text-error">*</span>
          </label>
          <select className="field-input" required defaultValue="today">
            <option value="today">Today evening (4PM – 7PM Gulf time)</option>
            <option value="tomorrow-eve">
              Tomorrow evening (5PM – 8PM Gulf time)
            </option>
            <option value="friday">This Friday (evening / weekend)</option>
            <option value="saturday">This Saturday (morning / midday)</option>
            <option value="custom">Contact me to customize timing</option>
          </select>
        </div>
      </div>
      <button className="btn-primary w-full cursor-pointer" type="submit">
        <span>Confirm free trial class</span>
        <Icon name="verified" className="ml-2 text-[18px]" />
      </button>
      <p className="text-center type-body-sm text-ink-subtle">
        We respect family privacy. Your information is never sold or shared.
      </p>
    </form>
  );
}
