import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center h-16 bg-blue-900 text-white ">
      <Link
        href="/"
        className="bg-white py-1 px-6 rounded-md text-blue-900 font-serif"
      >
        Header
      </Link>
    </div>
  );
}
