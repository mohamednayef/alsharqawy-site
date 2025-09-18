"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Utensils, Fish, Salad, Coffee, Star } from "lucide-react"

const categories = [
  {
    id: "grilled",
    name: "المشويات",
    icon: ChefHat,
    description: "كبدة، مخ، فيليه، جمبري",
    image: "/grilled-middle-eastern-meat-kebab.jpg",
    popular: true,
    items: 12,
  },
  {
    id: "rice",
    name: "الأرز",
    icon: Utensils,
    description: "أرز بالخضار، أرز بالجمبري، أرز بالفراخ",
    image: "/middle-eastern-rice-dishes-with-vegetables.jpg",
    popular: false,
    items: 8,
  },
  {
    id: "seafood",
    name: "المأكولات البحرية",
    icon: Fish,
    description: "جمبري، سمك، كاليماري",
    image: "/middle-eastern-seafood-dishes.jpg",
    popular: true,
    items: 6,
  },
  {
    id: "salads",
    name: "السلطات",
    icon: Salad,
    description: "سلطة خضراء، سلطة كبدة، سلطة طحينة",
    image: "/fresh-middle-eastern-salads.jpg",
    popular: false,
    items: 5,
  },
  {
    id: "beverages",
    name: "المشروبات",
    icon: Coffee,
    description: "عصائر طازجة، شاي، قهوة",
    image: "/traditional-middle-eastern-beverages-tea-coffee.jpg",
    popular: false,
    items: 10,
  },
]

interface MenuCategoriesProps {
  onCategorySelect?: (categoryId: string) => void
}

export default function MenuCategories({ onCategorySelect }: MenuCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onCategorySelect?.(categoryId)
  }

  return (
    <section id="menu" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">استكشف منيونا المتنوع</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            اختر من مجموعة واسعة من الأطباق الشرقية الأصيلة المحضرة بعناية فائقة
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            const isSelected = selectedCategory === category.id

            return (
              <Card
                key={category.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  isSelected ? "ring-2 ring-primary shadow-lg" : ""
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCategoryClick(category.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Popular Badge */}
                    {category.popular && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        الأكثر طلباً
                      </Badge>
                    )}

                    {/* Category Icon */}
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {category.items} صنف
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 text-pretty">{category.description}</p>

                    <Button
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      className="w-full transition-all duration-200"
                    >
                      {isSelected ? "تم الاختيار" : "عرض الأصناف"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div
            className="text-center p-4 bg-card rounded-lg border animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-2xl font-bold text-primary mb-1">40+</div>
            <div className="text-sm text-muted-foreground">صنف متنوع</div>
          </div>
          <div
            className="text-center p-4 bg-card rounded-lg border animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-2xl font-bold text-primary mb-1">15</div>
            <div className="text-sm text-muted-foreground">سنة خبرة</div>
          </div>
          <div
            className="text-center p-4 bg-card rounded-lg border animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="text-2xl font-bold text-primary mb-1">4.8</div>
            <div className="text-sm text-muted-foreground">تقييم العملاء</div>
          </div>
          <div
            className="text-center p-4 bg-card rounded-lg border animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-2xl font-bold text-primary mb-1">1000+</div>
            <div className="text-sm text-muted-foreground">عميل راضي</div>
          </div>
        </div>
      </div>
    </section>
  )
}
