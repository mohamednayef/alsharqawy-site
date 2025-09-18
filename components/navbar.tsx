"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "المنيو", href: "#menu" },
    // { name: "عن المطعم", href: "#about" },
    { name: "تواصل معنا", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-slide-in-left flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 rounded-full flex items-center justify-center animate-bounce shadow-lg overflow-hidden">
              <img src="/logo01.jpeg" alt="الشرقاوي" className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">الشرقاوي</h1>
              {/* <p className="text-xs text-muted-foreground">مطعم أصيل</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 space-x-reverse">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-secondary/50 rounded-md"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>01002251854</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">اطلب الآن</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-secondary/50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex items-center space-x-2 space-x-reverse px-3 py-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>01002251854</span>
                </div>
                <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  اطلب الآن
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
