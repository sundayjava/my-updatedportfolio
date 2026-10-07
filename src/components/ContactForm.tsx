"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const interests = [
  "API access",
  "Data licensing",
  "Custom software build",
  "Systems integration",
  "Digital products",
  "Business automation",
  "Sourcing & trade",
];

const requireEnv = (name: string, value: string | undefined): string => {
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
};

const field =
  "w-full border-b border-hairline-strong bg-transparent py-3 text-primary outline-none transition-colors placeholder:text-muted focus:border-accent";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    tel: "",
    message: "",
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        requireEnv(
          "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        ),
        requireEnv(
          "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        ),
        {
          name: form.name,
          email: form.email,
          company: form.company,
          tel: form.tel,
          message:
            (selected.length ? `[${selected.join(", ")}]\n\n` : "") +
            form.message,
        },
        requireEnv(
          "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
      );

      setStatus("sent");
      setForm({ name: "", email: "", company: "", tel: "", message: "" });
      setSelected([]);
    } catch (error) {
      console.error("Enquiry send failed:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Work email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium">
            Company <span className="text-accent">*</span>
          </label>
          <input
            id="company"
            required
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Organisation name"
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label htmlFor="tel" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="tel"
            type="tel"
            value={form.tel}
            onChange={(e) => setForm({ ...form, tel: e.target.value })}
            placeholder="Optional"
            className={`mt-2 ${field}`}
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium">
          What are you interested in?
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {interests.map((item) => {
            const on = selected.includes(item);
            return (
              <button
                key={item}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(item)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  on
                    ? "border-accent-fill bg-accent-fill text-on-accent"
                    : "border-hairline-strong text-secondary hover:border-accent hover:text-accent"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="What are you building, and what does success look like?"
          className={`mt-2 resize-none ${field}`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-accent-fill px-7 py-3 text-sm font-medium text-on-accent transition-colors hover:bg-accent-fill-hover disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className="text-sm text-secondary"
        >
          {status === "sent" &&
            "Received. We will be in touch within one business day."}
          {status === "error" &&
            "That did not send. Please email us directly."}
        </p>
      </div>
    </form>
  );
}
