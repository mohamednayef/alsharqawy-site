"use client"

export default function HeroSection() {
  return (
    <section id="home" className="relative h-96 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/traditional-middle-eastern-restaurant-interior-war.jpg')`,
        }}
      />

      <div className="relative z-10 text-center text-white">
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">مطعم الشرقاوي</h1> */}
        {/* <p className="text-lg md:text-xl text-accent font-medium">طعم أصيل من قلب الشرق</p> */}
      </div>
    </section>
  )
}
