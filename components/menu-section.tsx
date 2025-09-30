"use client"

import { useState } from "react"
import MenuItemCard from "./menu-item-card"
import ProductModal from "./product-modal"
import type { Category, MenuItem } from "@/lib/menu-data"

interface MenuSectionProps {
  category: Category
  index: number
}

export default function MenuSection({ category, index }: MenuSectionProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <>
      <section
        id={category.id}
        className="scroll-mt-32 animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tight">{category.name}</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.items.map((item, itemIndex) => (
            <MenuItemCard key={itemIndex} item={item} onClick={() => setSelectedItem(item)} index={itemIndex} />
          ))}
        </div>
      </section>

      {selectedItem && <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </>
  )
}
