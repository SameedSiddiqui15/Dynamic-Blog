"use client"
import React, { useState, useEffect } from "react"
import Link from 'next/link'

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      setCurrentDateTime(now.toLocaleDateString('en-UK', { hour12: true }) + ' ' + now.toLocaleDateString('en-US', options));
    };
    updateDateTime();
    const interValid = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValid)
  }, []);

  return (
    <header className="bg-slate-800 text-white body-font shadow-lg">
      <div className="mx-auto xl:mx-20 flex flex-wrap p-2 py-6 flex-col md:flex-row items-center">
        <div className="flex-1 text-white text-center md:text-start">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center mt-2 md:mt-0">
          <Link href={"/"} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Home</Link>
          <Link href={"../../Blog"} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">About</Link>
          <Link href={"../../Blog"} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Blog</Link>
          <Link href={"/"} className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105">Contact</Link>
          <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white transition-colors duration-300 rounded">
            <a href="https://github.com/SameedSiddiqui15" target="blank" className="flex items-center">Github <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          </a>
          </button>
        </nav>
      </div>
    </header>
  )
}
