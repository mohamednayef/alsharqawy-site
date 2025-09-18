"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, Star, Clock, Flame } from "lucide-react"

// Sample menu data based on the original menu
const menuItems = {
  grilled: [
    {
      id: 1,
      name: "كبدة مشوية",
      description: "كبدة طازجة مشوية على الفحم مع البصل والطماطم",
      price: { small: 85, medium: 120, large: 175 },
      image: "/grilled-liver-middle-eastern.jpg",
      popular: true,
      spicy: false,
      cookTime: "15-20 دقيقة",
      rating: 4.8,
    },
    {
      id: 2,
      name: "مخ مشوي",
      description: "مخ طازج مشوي بالتوابل الشرقية الأصيلة",
      price: { small: 80, medium: 110, large: 160 },
      image: "/grilled-brain-middle-eastern.jpg",
      popular: false,
      spicy: false,
      cookTime: "12-15 دقيقة",
      rating: 4.6,
    },
    {
      id: 3,
      name: "فيليه مشوي",
      description: "قطع فيليه طرية مشوية مع الخضار المتنوعة",
      price: { small: 250, medium: 350, large: 450 },
      image: "/grilled-fillet-middle-eastern.jpg",
      popular: true,
      spicy: false,
      cookTime: "20-25 دقيقة",
      rating: 4.9,
    },
    {
      id: 4,
      name: "جمبري مشوي",
      description: "جمبري طازج مشوي بالثوم والليمون والبقدونس",
      price: { small: 480, medium: 640, large: 800 },
      image: "/grilled-shrimp-middle-eastern.jpg",
      popular: true,
      spicy: true,
      cookTime: "10-12 دقيقة",
      rating: 4.7,
    },
  ],
  rice: [
    {
      id: 5,
      name: "أرز بالخضار",
      description: "أرز أبيض مطبوخ مع خليط من الخضار الطازجة",
      price: { small: 25, medium: 35, large: 55 },
      image: "/rice-with-vegetables-middle-eastern.jpg",
      popular: false,
      spicy: false,
      cookTime: "25-30 دقيقة",
      rating: 4.4,
    },
    {
      id: 6,
      name: "أرز بالجمبري",
      description: "أرز بسمتي مع قطع الجمبري والتوابل الشرقية",
      price: { small: 520, medium: 690, large: 860 },
      image: "/rice-with-shrimp-middle-eastern.jpg",
      popular: true,
      spicy: false,
      cookTime: "30-35 دقيقة",
      rating: 4.8,
    },
  ],
  salads: [
    {
      id: 7,
      name: "سلطة خضراء",
      description: "خليط من الخضار الطازجة مع الصوص الخاص",
      price: { small: 0, medium: 0, large: 0 },
      image: "/fresh-green-salad-middle-eastern.jpg",
      popular: false,
      spicy: false,
      cookTime: "5 دقائق",
      rating: 4.2,
    },
    {
      id: 8,
      name: "سلطة كبدة",
      description: "سلطة مميزة مع قطع الكبدة المشوية",
      price: { small: 0, medium: 0, large: 0 },
      image: "/liver-salad-middle-eastern.jpg",
      popular: false,
      spicy: false,
      cookTime: "8 دقائق",
      rating: 4.3,
    },
  ],
}

interface FoodItemsDisplayProps {
  selectedCategory?: string
}

export default function FoodItemsDisplay({ selectedCategory = "grilled" }: FoodItemsDisplayProps) {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: "small" | "medium" | "large" }>({})

  const currentItems = menuItems[selectedCategory as keyof typeof menuItems] || menuItems.grilled

  const updateQuantity = (itemId: number, change: number) => {
    const key = `${itemId}`
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max(0, (prev[key] || 0) + change),
    }))
  }

  const updateSize = (itemId: number, size: "small" | "medium" | "large") => {
    const key = `${itemId}`
    setSelectedSizes((prev) => ({
      ...prev,
      [key]: size,
    }))
  }

  const getSizeLabel = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "صغير"
      case "medium":
        return "وسط"
      case "large":
        return "كبير"
      default:
        return "وسط"
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {selectedCategory === "grilled" && "المشويات الشهية"}
            {selectedCategory === "rice" && "أطباق الأرز"}
            {selectedCategory === "salads" && "السلطات الطازجة"}
            {selectedCategory === "seafood" && "المأكولات البحرية"}
            {selectedCategory === "beverages" && "المشروبات"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            اختر من تشكيلة واسعة من الأطباق المحضرة بأجود المكونات
          </p>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => {
            const itemKey = `${item.id}`
            const quantity = quantities[itemKey] || 0
            const selectedSize = selectedSizes[itemKey] || "medium"
            const currentPrice = item.price[selectedSize]

            return (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Food Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex gap-2">
                      {item.popular && (
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          الأكثر طلباً
                        </Badge>
                      )}
                      {item.spicy && (
                        <Badge variant="destructive">
                          <Flame className="h-3 w-3 mr-1" />
                          حار
                        </Badge>
                      )}
                    </div>

                    {/* Rating & Cook Time */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white text-sm">
                      <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                        <Star className="h-3 w-3 fill-current text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                        <Clock className="h-3 w-3" />
                        <span>{item.cookTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Food Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">{item.description}</p>

                    {/* Size Selection */}
                    {currentPrice > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">اختر الحجم:</p>
                        <div className="flex gap-2">
                          {Object.entries(item.price).map(([size, price]) => (
                            <Button
                              key={size}
                              variant={selectedSize === size ? "default" : "outline"}
                              size="sm"
                              onClick={() => updateSize(item.id, size as "small" | "medium" | "large")}
                              className="text-xs"
                            >
                              {getSizeLabel(size as "small" | "medium" | "large")} - {price} ج.م
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Price & Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="text-right">
                        {currentPrice > 0 ? (
                          <div className="text-2xl font-bold text-primary">{currentPrice} ج.م</div>
                        ) : (
                          <div className="text-lg font-medium text-muted-foreground">مجاناً</div>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={quantity === 0}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium min-w-[2rem] text-center">{quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    {quantity > 0 && (
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                        أضف للسلة - {(currentPrice * quantity).toFixed(0)} ج.م
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            اطلب الآن - 01002251854
          </Button>
        </div>
      </div>
    </section>
  )
}
