"use client";

import React from "react";
import { Button } from "@/components/Button";

export default function Password() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="space-y-8 max-w-sm w-full bg-surface-2 border border-border p-12">
        <h2 className="text-h2 font-display">Protected Page</h2>
        <p className="text-text-2">
          This content is restricted. Please enter the access code.
        </p>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full bg-bg border border-border p-4 text-text focus:border-primary outline-none transition-colors"
        />
        <Button className="w-full">Unlock</Button>
      </div>
    </div>
  );
}
