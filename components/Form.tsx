"use client";

import React from "react";
import { Button } from "./Button";

export const ContactForm = () => {
  return (
    <form className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="label-mono text-text">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-surface-2 border border-border p-4 text-text focus:border-primary outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="label-mono text-text">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full bg-surface-2 border border-border p-4 text-text focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="label-mono text-text">Message</label>
        <textarea
          rows={6}
          placeholder="How can I help you?"
          className="w-full bg-surface-2 border border-border p-4 text-text focus:border-primary outline-none transition-colors resize-none"
        />
      </div>

      <Button className="w-full md:w-auto">Send Message</Button>
    </form>
  );
};
