import Header from "@/components/header"
import Hero from "@/components/hero"
import CategoryFilter from "@/components/category-filter"
import MenuSection from "@/components/menu-section"
import { menuData } from "@/lib/menu-data"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryFilter />

      <div className="container mx-auto px-4 py-16 space-y-24">
        {menuData.map((category, index) => (
          <MenuSection key={category.id} category={category} index={index} />
        ))}
      </div>

      <footer className="bg-primary text-primary-foreground py-8 mt-24">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/logo.png"
            alt="Coffee Time Lounge"
            className="h-16 mx-auto mb-4 invert brightness-0 contrast-200"
          />
          <p className="text-sm opacity-80">© 2025 Coffee Time Lounge. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
