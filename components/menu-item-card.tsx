"use client"

import type { MenuItem } from "@/lib/menu-data"

interface MenuItemCardProps {
  item: MenuItem
  onClick: () => void
  index: number
}

export default function MenuItemCard({ item, onClick, index }: MenuItemCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {item.name}
        </h3>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-600">USD</span>
            <span className="text-2xl font-black text-black">${item.priceUSD}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm font-semibold text-gray-600">LBP</span>
            <span className="text-lg font-bold text-black">
              {item.priceLBP.toLocaleString()} L.L
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
