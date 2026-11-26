"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./icon";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="space-y-3 py-8 text-center">
        <Icon name="mark_email_read" className="text-[40px] text-primary" />
        <p className="font-sans text-lg font-bold text-ink">Message Received</p>
        <p className="type-body-sm text-ink-subtle">
          Thank you! An advisor will call or email you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">Your Name</label>
          <input
            className="field-input"
            placeholder="Parent full name"
            required
            type="text"
          />
        </div>
        <div>
          <label className="mb-1.5 block type-label-sm text-ink">Your Email</label>
          <input
            className="field-input"
            placeholder="name@email.com"
            required
            type="email"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block type-label-sm text-ink">
          Student Grade &amp; Main Concern
        </label>
        <input
          className="field-input"
          placeholder="e.g. 8th Grade Math, preparing for Algebra Regents"
          required
          type="text"
        />
      </div>
      <div>
        <label className="mb-1.5 block type-label-sm text-ink">
          How can we help?
        </label>
        <textarea
          className="field-input"
          placeholder="Tell us about your student's learning goals, schedule preferences, or past challenges..."
          rows={3}
        />
      </div>
      <button className="btn-primary w-full cursor-pointer" type="submit">
        <span>Send Question to Advisor</span>
        <Icon name="send" className="ml-2 text-[18px]" />
      </button>
    </form>
  );
}
