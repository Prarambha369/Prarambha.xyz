import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="space-y-8 max-w-lg">
        <h1 className="text-display-lg font-bold text-primary">404</h1>
        <h2 className="text-h2 font-display">Page Not Found</h2>
        <p className="text-text-2 text-lg">
          The page you are looking for doesn't exist or has been moved.
          Building the future is messy sometimes.
        </p>
        <Button href="/">Return Home</Button>
      </div>
    </div>
  );
}
