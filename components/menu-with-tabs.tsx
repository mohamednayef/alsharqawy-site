"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Utensils, Salad, Coffee, Grid3X3 } from "lucide-react"
import { MapPin, Phone, Clock, MessageCircle, Star } from "lucide-react"

const CARD_WIDTH = 256
const GAP = 16
const ITEM_WIDTH = CARD_WIDTH + GAP

const categories = [
  {
    id: "all",
    name: "الكل",
    icon: Grid3X3,
    description: "جميع الأصناف المتاحة",
  },
  {
    id: "grilled",
    name: "الأطباق الرئيسية",
    icon: ChefHat,
    description: "كبدة، مخ، فليه، جمبري",
  },
  {
    id: "different",
    name: "الأطباق المشكلة",
    icon: ChefHat,
    description: "كبدة، مخ، فليه، جمبري",
  },
  {
    id: "meals",
    name: "وجبات الشرقاوي",
    icon: ChefHat,
    description: "كبدة، مخ، فليه، جمبري",
  },
  {
    id: "sandwichs",
    name: "سندويتشات",
    icon: ChefHat,
    description: "كبدة، مخ، فليه، جمبري",
  },
  {
    id: "rice",
    name: "الأرز",
    icon: Utensils,
    description: "أرز عادة، أرز بالجمبري، أرز بالخضة",
  },
  {
    id: "salads",
    name: "السلطات",
    icon: Salad,
    description: "سلطة خضراء، سلطة كبدة، سلطة طحينة",
  },
  {
    id: "beverages",
    name: "المشروبات",
    icon: Coffee,
    description: "شاي بالنعناع، شاي بالحليب، قهوة",
  },
]

const menuData = {
  grilled: [
    {
      id: 1,
      name: "كبدة",
      sizes: [
        { size: "كيلو", price: 400 },
        { size: "3/4", price: 300 },
        { size: "1/2", price: 210 },
        // { size: "1/3", price: 120 },
        { size: "1/4", price: 110 },
        { size: "1/8", price: 60 },
      ],
      image: "/liver01.jpg",
    },
    {
      id: 2,
      name: "مخ",
      sizes: [
        { size: "كيلو", price: 900 },
        { size: "3/4", price: 680 },
        { size: "1/2", price: 450 },
        // { size: "1/3", price: 140 },
        { size: "1/4", price: 230 },
        { size: "1/8", price: 120 },
      ],
      image: "/brain01.jpg",
    },
    {
      id: 3,
      name: "جمبري صغير",
      sizes: [
        { size: "كيلو", price: 520 },
        { size: "3/4", price: 390 },
        { size: "1/2", price: 260 },
        // { size: "1/3", price: 260 },
        { size: "1/4", price: 130 },
        { size: "1/8", price: 70 },
      ],
      image: "/smallg.jpg",
    },
    {
      id: 4,
      name: "جمبري وسط",
      sizes: [
        { size: "كيلو", price: 1100 },
        { size: "3/4", price: 825 },
        { size: "1/2", price: 550 },
        // { size: "1/3", price: 180 },
        { size: "1/4", price: 275 },
        { size: "1/8", price: 140 },
      ],
      image: "/bigg01.jpg",
    },
    {
      id: 5,
      name: "فليه",
      sizes: [
        { size: "كيلو", price: 420 },
        { size: "3/4", price: 330 },
        { size: "1/2", price: 210 },
        // { size: "1/3", price: 260 },
        { size: "1/4", price: 110 },
        { size: "1/8", price: 60 },
      ],
      image: "/fish01.jpg",
    },
    {
      id: 6,
      name: "فراخ بانيه",
      sizes: [
        { size: "كيلو", price: 420 },
        { size: "3/4", price: 330 },
        { size: "1/2", price: 210 },
        // { size: "1/3", price: 260 },
        { size: "1/4", price: 110 },
        { size: "1/8", price: 60 },
      ],
      image: "/hen01.jpg",
    },
    
    // {
    //   id: 7,
    //   name: "كبدة - مخ",
    //   sizes: [
    //     { size: "كيلو", price: 510 },
    //     { size: "3/4", price: 290 },
    //     { size: "1/2", price: 210 },
    //     { size: "1/4", price: 110 },
    //   ],
    //   image: "/mixed-liver-brain-grilled-middle-eastern.jpg",
    // },
    // {
    //   id: 8,
    //   name: "جمبري - مخ",
    //   sizes: [
    //     { size: "كيلو", price: 520 },
    //     { size: "3/4", price: 410 },
    //     { size: "1/2", price: 280 },
    //     { size: "1/4", price: 140 },
    //   ],
    //   image: "/shrimp-brain-mixed-grilled-middle-eastern.jpg",
    // },
    // {
    //   id: 9,
    //   name: "كبدة - جمبري",
    //   sizes: [
    //     { size: "كيلو", price: 480 },
    //     { size: "3/4", price: 360 },
    //     { size: "1/2", price: 260 },
    //     { size: "1/4", price: 130 },
    //   ],
    //   image: "/liver-shrimp-mixed-grilled-middle-eastern.jpg",
    // },
    // {
    //   id: 10,
    //   name: "كبدة - مخ - جمبري",
    //   sizes: [
    //     { size: "كيلو", price: 520 },
    //     { size: "3/4", price: 420 },
    //     { size: "1/2", price: 280 },
    //     { size: "1/4", price: 140 },
    //   ],
    //   image: "/liver-brain-shrimp-mixed-grilled-platter.jpg",
    // },
  ],
  different: [
    {
      id: 111,
      name: "مشكل كبدة ومخ",
      sizes: [
        { size: "كيلو", price: 600 },
        { size: "3/4", price: 450 },
        { size: "1/2", price: 300 },
        // { size: "1/3", price: 125 },
        { size: "1/4", price: 150 },
        { size: "1/8", price: 75 },
        { size: "سندوتش", price: 40 },
      ],
      image: "/liver01.jpg",
    },
  //   {
  //     id: 112,
  //     name: "كبدة وجمبري",
  //     sizes: [
  //       { size: "كيلو", price: 250 },
  //       { size: "3/4", price: 175 },
  //       { size: "1/2", price: 120 },
  //       { size: "1/3", price: 120 },
  //       { size: "1/4", price: 65 },
  //       { size: "1/8", price: 65 },
  //     ],
  //     image: "/liver01.jpg",
  //   },
  //   {
  //     id: 113,
  //     name: "كبدة ومخ وجمبري",
  //     sizes: [
  //       { size: "كيلو", price: 250 },
  //       { size: "3/4", price: 175 },
  //       { size: "1/2", price: 120 },
  //       { size: "1/3", price: 120 },
  //       { size: "1/4", price: 65 },
  //       { size: "1/8", price: 65 },
  //     ],
  //     image: "/liver01.jpg",
  //   },
  //   {
  //     id: 114,
  //     name: "كبدة ومخ وجمبري وفليه",
  //     sizes: [
  //       { size: "كيلو", price: 250 },
  //       { size: "3/4", price: 175 },
  //       { size: "1/2", price: 120 },
  //       { size: "1/3", price: 120 },
  //       { size: "1/4", price: 65 },
  //       { size: "1/8", price: 65 },
  //     ],
  //     image: "/liver01.jpg",
  //   },
  //   {
  //     id: 115,
  //     name: "جمبري وفليه",
  //     sizes: [
  //       { size: "كيلو", price: 250 },
  //       { size: "3/4", price: 175 },
  //       { size: "1/2", price: 120 },
  //       { size: "1/3", price: 120 },
  //       { size: "1/4", price: 65 },
  //       { size: "1/8", price: 65 },
  //     ],
  //     image: "/liver01.jpg",
  //   },
  //   {
  //     id: 116,
  //     name: "جمبري وبانيه",
  //     sizes: [
  //       { size: "كيلو", price: 250 },
  //       { size: "3/4", price: 175 },
  //       { size: "1/2", price: 120 },
  //       { size: "1/3", price: 120 },
  //       { size: "1/4", price: 65 },
  //       { size: "1/8", price: 65 },
  //     ],
  //     image: "/liver01.jpg",
  //   },
  ],
  meals: [
    {
      id: 121,
      name: "وجبة كبدة",
      sizes: [
        { size: "صغير", price: 50 },
        { size: "وسط", price: 65 },
        { size: "كبير", price: 80 },
      ],
      image: "/z.jpg",
    },
    // {
    //   id: 122,
    //   name: "وجبة مخ مع الرز",
    //   sizes: [
    //     { size: "المكونات: سلطة، طحينة، كانز", price: 250 },
    //   ],
    //   image: "/z.jpg",
    // },
    {
      id: 123,
      name: "وجبة جمبري صغير",
      sizes: [
        { size: "صغير", price: 55 },
        { size: "وسط", price: 70 },
        { size: "كبير", price: 90 },
      ],
      image: "/z.jpg",
    },
    // {
    //   id: 124,
    //   name: "وجبة جمبري وسط مع الرز",
    //   sizes: [
    //     { size: "المكونات: سلطة، طحينة، كانز", price: 250 },
    //   ],
    //   image: "/z.jpg",
    // },
    {
      id: 125,
      name: "وجبة فليه",
      sizes: [
        { size: "صغير", price: 55 },
        { size: "وسط", price: 70 },
        { size: "كبير", price: 90 },
      ],
      image: "/z.jpg",
    },
    {
      id: 126,
      name: "وجبة بانيه فراخ",
      sizes: [
        { size: "صغير", price: 55 },
        { size: "وسط", price: 70 },
        { size: "كبير", price: 90 },
      ],
      image: "/z.jpg",
    },
  ],
  sandwichs: [
    {
      id: 131,
      name: "سندوتش كبدة",
      sizes: [
        { size: "صغير", price: 20 }, 
        { size: "وسط", price: 25 },
        { size: "كبير", price: 30 },
      ],
      image: "/z.jpg",
    },
    {
      id: 132,
      name: "سندوتش مخ",
      sizes: [
        { size: "وسط", price: 50 }, 
        { size: "كبير", price: 70 },
      ],
      image: "/z.jpg",
    },
    {
      id: 133,
      name: "سندوتش جمبري صغير",
      sizes: [
        { size: "صغير", price: 25 }, 
        { size: "وسط", price: 30 }, 
        { size: "كبير", price: 35 },
      ],
      image: "/z.jpg",
    },
    {
      id: 134,
      name: "سندوتش جمبري وسط",
      sizes: [
        { size: "وسط", price: 70 }, 
        // { size: "كبير", price: 30 },
      ],
      image: "/z.jpg",
    },
    {
      id: 135,
      name: "سندوتش فليه",
      sizes: [
        { size: "صغير", price: 25 }, 
        { size: "وسط", price: 30 }, 
        { size: "كبير", price: 35 },
      ],
      image: "/z.jpg",
    },
    {
      id: 136,
      name: "سندوتش فراخ بانيه",
      sizes: [
        { size: "صغير", price: 25 }, 
        { size: "وسط", price: 30 }, 
        { size: "كبير", price: 35 },
      ],
      image: "/z.jpg",
    },
  ],
  rice: [
    {
      id: 11,
      name: "أرز سادة",
      sizes: [
        // { size: "صغير", price: 20 },
        { size: "وسط", price: 20 },
        { size: "كبير", price: 30 },
      ],
      image: "/rice01.jpg",
    },
    {
      id: 12,
      name: "أرز بالجمبري",
      sizes: [
        { size: "صغير", price: 55 },
        { size: "وسط", price: 70 },
        { size: "كبير", price: 90 },
      ],
      image: "/shrimp-rice-middle-eastern-cuisine.jpg",
    },
    {
      id: 13,
      name: "أرز بالكبدة",
      sizes: [
        { size: "صغير", price: 50 },
        { size: "وسط", price: 65 },
        { size: "كبير", price: 80 },
      ],
      image: "/vegetable-rice-middle-eastern-style.jpg",
    },
    {
      id: 14,
      name: "أرز بالبانيه",
      sizes: [
        { size: "صغير", price: 55 },
        { size: "وسط", price: 70 },
        { size: "كبير", price: 80 },
      ],
      image: "/special-seasoned-rice-middle-eastern.jpg",
    },
  ],
  salads: [
    {
      id: 15,
      name: "سلطة خضراء",
      sizes: [{ size: "طبق", price: 10 }],
      image: "/fresh-green-salad-middle-eastern.jpg",
    },
    {
      id: 16,
      name: "سلطة كبدة",
      sizes: [{ size: "طبق", price: 10 }],
      image: "/liver_salad.jpeg?height=120&width=224",
    },
    {
      id: 17,
      name: "سلطة طحينة",
      sizes: [{ size: "طبق", price: 10 }],
      image: "/thena.jpeg?height=120&width=224",
    },
    {
      id: 18,
      name: "خيار مخلل",
      sizes: [{ size: "طبق", price: 10 }],
      image: "/kheyar.jpeg?height=120&width=224",
    },
    {
      id: 19,
      name: "بتنجان",
      sizes: [{ size: "طبق", price: 10 }],
      image: "/kheyar.jpeg?height=120&width=224",
    },
    {
      id: 20,
      name: "عيش",
      sizes: [{ size: "٣ رغيف", price: 5 }],
      image: "/eash.jpeg?height=120&width=224",
    },
  ],
  beverages: [
    {
      id: 20,
      name: "مياة",
      sizes: [
        { size: "صغير", price: 10 },
        { size: "كبير", price: 15 },
      ],
      image: "/pure_water.jpeg",
    },
    {
      id: 21,
      name: "كانز",
      sizes: [
        { size: "بيبسي", price: 25 },
        { size: "شويبس", price: 25 }
      ],
      image: "/cans.jpeg",
    },
    // {
    //   id: 22,
    //   name: "قهوة",
    //   sizes: [{ size: "كوب", price: 35 }],
    //   image: "/placeholder.svg?height=120&width=224",
    // },
    // {
    //   id: 23,
    //   name: "شاي عادي",
    //   sizes: [{ size: "كوب", price: 15 }],
    //   image: "/placeholder.svg?height=120&width=224",
    // },
    // {
    //   id: 24,
    //   name: "شاي حليب - جمبري",
    //   sizes: [{ size: "كوب", price: 40 }],
    //   image: "/placeholder.svg?height=120&width=224",
    // },
    // {
    //   id: 25,
    //   name: "شاي حليب - جمبري",
    //   sizes: [{ size: "كوب", price: 40 }],
    //   image: "/placeholder.svg?height=120&width=224",
    // },
    // {
    //   id: 26,
    //   name: "شاي حليب - جمبري",
    //   sizes: [{ size: "كوب", price: 40 }],
    //   image: "/placeholder.svg?height=120&width=224",
    // },
  ],
}

export default function MenuWithTabs() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [slideStates, setSlideStates] = useState<Record<string, number>>({})

  const getDisplayItems = () => {
    if (activeCategory === "all") {
      return Object.entries(menuData).map(([categoryKey, items]) => ({
        categoryKey,
        categoryName: categories.find((cat) => cat.id === categoryKey)?.name || categoryKey,
        items,
      }))
    }
    return [
      {
        categoryKey: activeCategory,
        categoryName: categories.find((cat) => cat.id === activeCategory)?.name || activeCategory,
        items: menuData[activeCategory as keyof typeof menuData] || [],
      },
    ]
  }

  const displayData = getDisplayItems()

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = []

    displayData.forEach(({ categoryKey, items }) => {
      if (items.length > 3) {
        const interval = setInterval(() => {
          setSlideStates((prev) => ({
            ...prev,
            [categoryKey]: ((prev[categoryKey] || 0) + 1) % Math.max(1, items.length - 2),
          }))
        }, 4000)
        intervals.push(interval)
      }
    })

    return () => intervals.forEach(clearInterval)
  }, [displayData])

  const handleTouch = (categoryKey: string, itemsLength: number) => {
    let startX = 0
    let startY = 0
    let moved = false

    return {
      onTouchStart: (e: React.TouchEvent) => {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
        moved = false
      },
      onTouchMove: (e: React.TouchEvent) => {
        if (moved) return

        const currentX = e.touches[0].clientX
        const currentY = e.touches[0].clientY
        const diffX = startX - currentX
        const diffY = startY - currentY

        // Only handle horizontal swipes
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
          moved = true
          const maxSlide = Math.max(0, itemsLength - 1)

          if (diffX > 0) {
            // Swipe left - next
            setSlideStates((prev) => ({
              ...prev,
              [categoryKey]: Math.min((prev[categoryKey] || 0) + 1, maxSlide),
            }))
          } else {
            // Swipe right - previous
            setSlideStates((prev) => ({
              ...prev,
              [categoryKey]: Math.max((prev[categoryKey] || 0) - 1, 0),
            }))
          }
        }
      },
    }
  }

  return (
    <section id="menu" className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent mb-4 text-balance">
            مطعم الشرقاوي
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            {/* أشهى الأكلات الشرقية الأصيلة - للطلب والتوصيل */}
            😋 مرحبًا بالسادة الزائرين 😋
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-slate-200/50 min-w-max">
              {categories.map((category, index) => {
                const IconComponent = category.icon
                const isActive = activeCategory === category.id

                return (
                  <Button
                    key={category.id}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-1 transition-all duration-300 animate-fade-in-up text-xs px-3 py-2 whitespace-nowrap ${
                      isActive
                        ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg border-0 hover:from-slate-600 hover:to-slate-700"
                        : "bg-white/70 text-slate-700 border-slate-200 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 hover:text-white hover:border-0"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="h-3 w-3" />
                    <span className="font-medium">{category.name}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {displayData.map(({ categoryKey, categoryName, items }) => {
            const currentSlide = slideStates[categoryKey] || 0
            const touchHandlers = handleTouch(categoryKey, items.length)

            return (
              <div key={categoryKey} className="animate-fade-in-up">
                <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent">
                  {categoryName}
                </h3>

                <div className="relative overflow-hidden">
                  {/* Improved carousel with proper touch handling */}
                  <div
                    className="flex transition-transform duration-500 ease-out gap-6 pb-4 cursor-grab active:cursor-grabbing"
                    style={{
                      transform: `translateX(-${currentSlide * ITEM_WIDTH}px)`,
                    }}
                    {...touchHandlers}
                  >
                    {items.map((item, index) => (
                      <Card
                        key={item.id}
                        className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up bg-white/90 backdrop-blur-sm border border-slate-200/50 hover:border-slate-300/70 flex-shrink-0 w-64 hover:-translate-y 
                        -2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-32 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-600/20 to-transparent" />
                          </div>

                          <div className="p-4">
                            <h4 className="text-lg font-bold text-center mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                              {item.name}
                            </h4>

                            <div className="space-y-2">
                              {item.sizes.map((sizeInfo, sizeIndex) => (
                                <div
                                  key={sizeIndex}
                                  className="flex justify-between items-center p-2 rounded-lg bg-gradient-to-r from-slate-50 to-white border border-slate-200/70 hover:from-slate-100 hover:to-slate-50 hover:border-slate-300 transition-all duration-300 hover:shadow-md"
                                >
                                  <span className="font-medium text-slate-700 text-sm">{sizeInfo.size}</span>
                                  {sizeInfo.price === 0 ? (
                                    <span className="font-bold text-emerald-600 text-sm">مجاناً</span>
                                  ) : (
                                    <span className="font-bold bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent text-sm">
                                      {sizeInfo.price} ج.م
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Slide indicators */}
                  {items.length > 0 && (
                    <div className="flex justify-center mt-4 gap-2">
                      {Array.from({ length: Math.max(1, items.length) }).map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index ? "bg-slate-700 w-6" : "bg-slate-300 hover:bg-slate-500"
                          }`}
                          onClick={() => setSlideStates((prev) => ({ ...prev, [categoryKey]: index }))}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Info */}
        {/* <div className="text-center mt-16 animate-fade-in-up bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-slate-200/50">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent mb-4">
            للطلب والتوصيل
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">📞</span>
              <span className="font-bold text-slate-800">01069044928</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">📞</span>
              <span className="font-bold text-slate-800">01287150157</span>
            </div>
          </div>
          <p className="text-slate-600 mt-4">📍شارع جسر الكونيسة - بجوار هايبر الجيزاوي - امام جامع السلام - المنيب</p>
          <p className="text-sm text-slate-500 mt-2">فرعي عرابي</p>
          <div>
            <div className="flex justify-center items-center space-x-4 space-x-reverse mt-5">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            <h4 className="font-semibold text-foreground mb-1">ساعات العمل</h4>
            </div>
            <p className="text-muted-foreground">يومياً من 12:00 ظهراً - 2:00 صباحاً</p>
            <p className="text-muted-foreground">خدمة التوصيل متاحة</p>
          </div>
          
        </div> */}
      </div>
    </section>
  )
}
