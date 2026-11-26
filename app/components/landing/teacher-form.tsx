"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./icon";

export function TeacherForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="space-y-4 px-4 py-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-chip-emerald text-primary">
          <Icon name="task_alt" className="text-[36px]" />
        </div>
        <h4 className="font-sans text-2xl font-bold text-ink">
          Application Submitted!
        </h4>
        <p className="mx-auto max-w-md type-body-sm text-ink-subtle">
          Thank you for applying to teach with TutorParks. Our recruitment
          coordinator will review your profile and reach out within 48 hours
          for your pedagogical interview and live teaching demonstration.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="e.g. Dr. Aisha Rahman"
            required
            type="text"
          />
        </div>
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">
            Email Address <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">
            Phone Number <span className="text-error">*</span>
          </label>
          <input
            className="field-input"
            placeholder="+971, +966, +974, +965, or +968"
            required
            type="tel"
          />
        </div>
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">
            Primary Teaching Subject <span className="text-error">*</span>
          </label>
          <select className="field-input" required defaultValue="">
            <option disabled value="">
              Select specialty subject...
            </option>
            <option value="maths">Maths (K-12)</option>
            <option value="english">English</option>
            <option value="science">Science</option>
            <option value="languages">Languages</option>
            <option value="social">EVS / Social Studies</option>
            <option value="multi">Multi-subject</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">
            Highest Degree &amp; Credential <span className="text-error">*</span>
          </label>
          <select className="field-input" required defaultValue="">
            <option disabled value="">
              Select highest degree...
            </option>
            <option value="bachelor">Bachelor&apos;s Degree</option>
            <option value="master">Master&apos;s Degree (M.Ed / M.S. / M.A.)</option>
            <option value="phd">Ph.D. / Doctorate</option>
            <option value="license">Teaching diploma / certified teacher</option>
            <option value="boards">
              CBSE / ICSE / IB / IGCSE teaching experience
            </option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">
            Weekly Availability <span className="text-error">*</span>
          </label>
          <select className="field-input" required defaultValue="5-10">
            <option value="5-10">
              5 – 10 hours / week (part-time evenings)
            </option>
            <option value="10-20">10 – 20 hours / week</option>
            <option value="20+">20+ hours / week</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block type-label-sm text-ink">
          Experience Summary or Portfolio / Resume Link{" "}
          <span className="text-error">*</span>
        </label>
        <textarea
          className="field-input"
          placeholder="Brief summary of your teaching background, grade levels taught, or a link to your LinkedIn / resume..."
          required
          rows={3}
        />
      </div>
      <div className="flex items-center gap-2 pt-1">
        <input
          className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
          id="teaching-exp"
          required
          type="checkbox"
        />
        <label
          className="cursor-pointer type-body-sm font-medium text-ink"
          htmlFor="teaching-exp"
        >
          I have at least 1 year of formal teaching or structured tutoring
          experience <span className="text-error">*</span>
        </label>
      </div>
      <button className="btn-primary mt-2 w-full cursor-pointer" type="submit">
        <span>Submit Teacher Application</span>
        <Icon name="send" className="ml-2 text-[18px]" />
      </button>
      <p className="text-center type-body-sm text-ink-subtle">
        Our team reviews applications within 48 hours and follows up for a
        teaching demonstration.
      </p>
    </form>
  );
}
