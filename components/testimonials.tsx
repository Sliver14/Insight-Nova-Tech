'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStartup Inc.',
      role: 'CEO',
      content: 'Insight Nova Tech transformed our digital presence. Their AI integration increased our efficiency by 60% in just 3 months. Highly recommend!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      company: 'RetailMax Co.',
      role: 'CTO',
      content: 'The team delivered an outstanding e-commerce platform that exceeded all our expectations. Their attention to detail is incredible.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Emma Rodriguez',
      company: 'FinanceFlow Ltd.',
      role: 'Product Manager',
      content: 'Working with Insight Nova Tech was a game-changer. They understood our vision and delivered a solution that drove real business results.',
      rating: 5,
      avatar: '👩‍🔬',
    },
    {
      name: 'David Thompson',
      company: 'HealthTech Solutions',
      role: 'Founder',
      content: 'Exceptional service, exceptional results. Insight Nova Tech is now our strategic partner for all digital transformation initiatives.',
      rating: 5,
      avatar: '👨‍💼',
    },
  ]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Client Success Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-secondary/30 border-border p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{testimonial.avatar}</div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array(testimonial.rating).fill(null).map((_, i) => (
                        <Star key={i} size={18} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground text-lg leading-relaxed">{testimonial.content}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition ${
                    index === current ? 'bg-primary w-8' : 'bg-secondary w-2'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="p-2 hover:bg-secondary rounded-full transition text-foreground"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-2 hover:bg-secondary rounded-full transition text-foreground"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
