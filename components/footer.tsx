"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">
        <div className="relative z-10 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent typewriter-loop">
              الشرقاوي
            </h2>
            <div className="mt-6 flex justify-center space-x-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </footer>
  )
}
