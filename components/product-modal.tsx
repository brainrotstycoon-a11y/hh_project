"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"

interface ProductModalProps {
  item: MenuItem
  onClose: () => void
}

export default function ProductModal({ item, onClose }: ProductModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/90 rounded-full hover:bg-background transition-colors duration-200 shadow-lg"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-3xl md:text-4xl font-black text-card-foreground mb-4">{item.name}</h2>

          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            {item.description ||
              "A carefully crafted beverage made with premium ingredients to deliver an exceptional taste experience."}
          </p>

          <div className="flex items-center gap-8 p-6 bg-secondary rounded-xl">
            <div className="flex-1">
              <span className="text-sm font-semibold text-muted-foreground block mb-2">Price (USD)</span>
              <span className="text-4xl font-black text-accent">${item.priceUSD}</span>
            </div>
            <div className="w-px h-16 bg-border" />
            <div className="flex-1">
              <span className="text-sm font-semibold text-muted-foreground block mb-2">Price (LBP)</span>
              <span className="text-3xl font-black text-foreground">{item.priceLBP.toLocaleString()} L.L</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
