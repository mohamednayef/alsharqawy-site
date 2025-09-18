import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MenuWithTabs from "@/components/menu-with-tabs"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuWithTabs />
      <ContactSection />
      <Footer />
    </main>
  )
}
