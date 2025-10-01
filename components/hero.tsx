export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/20"
        style={{
          backgroundImage: "url(/coffee-shop-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <img
          src="/logo.png"
          alt="Coffee Time Lounge"
          className="h-24 md:h-32 mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4 tracking-tight">
          Welcome to Coffee Time
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-semibold">
          Experience the future of coffee culture with our curated selection
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
