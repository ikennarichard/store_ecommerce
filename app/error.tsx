"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error, "Digest:", error.digest);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative h-16 w-32 mx-auto">
          <Image src={logo} alt="Nike Logo" fill className="object-contain" />
        </div>

        {/* Error Heading */}
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Whoops, Something Broke!
        </h1>

        {/* Error Message */}
        <p className="text-lg text-gray-300">
          Looks like we hit a snag. Don’t worry, our team is sprinting to fix
          it. Try again or head back to shop the latest gear.
        </p>

        <p className="text-sm text-gray-500">
          Error ID: <span className="font-mono">{error.digest}</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={reset}
            className="text-white font-semibold py-3 px-6 rounded-full bg-orange-500 cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-primary text-primary font-semibold py-3 px-6 rounded-full bg-primary text-white"
          >
            Back to Homepage
          </Link>
        </div>

        {/* Nike Tagline */}
        <p className="text-sm text-gray-400 mt-4">
          Just Do It. Keep pushing forward.
        </p>
      </div>
    </div>
  );
}
