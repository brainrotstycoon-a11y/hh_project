"use client"

import { useState } from "react"
import { menuData } from "@/lib/menu-data"

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId)
    const element = document.getElementById(categoryId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="sticky top-20 md:top-24 z-40 bg-background/95 backdrop-blur-md border-y border-border py-4 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
