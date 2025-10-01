"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black/70"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Coffee Time Lounge"
          className="h-12 md:h-16 object-contain transition-all duration-300"
        />
      </div>
    </header>
  )
}
