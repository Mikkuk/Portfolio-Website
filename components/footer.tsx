import React from "react";

export default function Footer() {
  return (
    <footer className="my-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Mikko Kukkonen.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion and hosted on Vercel.
      </p>
    </footer>
  );
}