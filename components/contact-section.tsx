"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, MessageCircle, Star } from "lucide-react"
import Link from "next/link";
// import { FaFacebook } from "react-icons/fa";


export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">تواصل معنا</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            نحن هنا لخدمتك في أي وقت. تواصل معنا للطلب أو الاستفسار
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل</h3>

              <div className="space-y-6">
                {/* Phone */}
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">اتصل بنا</h4>
                        <p className="text-muted-foreground">01069044928</p>
                        <p className="text-muted-foreground">01287150157</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">العنوان</h4>
                        <p className="text-muted-foreground">شارع جسر الكونيسة - بجوار هايبر الجيزاوي - امام جامع السلام - المنيب</p>
                        {/* <p className="text-muted-foreground">تل أحمد عرابي</p> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Working Hours */}
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">ساعات العمل</h4>
                        <p className="text-muted-foreground">يومياً من 11:00 ظهراً - 5:00 صباحاً</p>
                        <p className="text-muted-foreground">خدمة التوصيل متاحة</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Facebook */}
                <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className=" p-3 rounded-full">
                        <i className="fa-brands fa-facebook text-blue-600 text-5xl"></i>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-1">فيسبوك</h4>
                        <Link
                          href="https://www.facebook.com/share/163VjBRXKe/?mibextid=wwXIfr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:underline"
                        >
                          كبدة ومخ الشرقاوي فرع الكُنَيسة
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                

                {/* WhatsApp */}
                {/* <Card className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="bg-green-500/10 p-3 rounded-full">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">واتساب</h4>
                        <p className="text-muted-foreground">اطلب عبر الواتساب</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          أرسل رسالة
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
              </div>
            </div>

            {/* Customer Reviews Preview */}
            {/* <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-bold text-foreground mb-4">آراء عملائنا</h3>
              <div className="space-y-4">
                <Card className="bg-card/50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="mr-2 text-sm text-muted-foreground">أحمد محمد</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "أكل ممتاز وخدمة سريعة. الكبدة المشوية لذيذة جداً والأسعار معقولة."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="mr-2 text-sm text-muted-foreground">فاطمة علي</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "مطعم رائع، الجمبري المشوي طعمه مميز والتوصيل سريع."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          {/* <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">الاسم</label>
                      <Input placeholder="اسمك الكريم" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">رقم الهاتف</label>
                      <Input placeholder="رقم هاتفك" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني</label>
                    <Input type="email" placeholder="بريدك الإلكتروني" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">الرسالة</label>
                    <Textarea placeholder="اكتب رسالتك أو طلبك هنا..." className="w-full min-h-[120px]" />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  )
}
