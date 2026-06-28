"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
    e.target.reset();
    setTimeout(() => setStatus("idle"), 3000);
  }

  const inputClass =
    "w-full rounded-md border border-white/10 bg-black px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-accent focus:ring-0";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Email row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your Name"
          className={inputClass}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your Email"
          className={inputClass}
        />
      </div>

      {/* Subject */}
      <input
        required
        name="subject"
        placeholder="Subject"
        className={inputClass}
      />

      {/* Message */}
      <textarea
        required
        name="message"
        placeholder="Message"
        rows={7}
        className={inputClass + " resize-none"}
      />

      {/* Send button — centered, pill shape */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="rounded-full bg-accent px-10 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-dark"
        >
          {status === "sent" ? "Message Sent ✓" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
