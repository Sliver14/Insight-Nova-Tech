'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

export default function Services() {
  const allServices = [
    { id: 1, name: 'Web Design', icon: '🎨' },
    { id: 2, name: 'App Development', icon: '📱' },
    { id: 3, name: 'AI Integration', icon: '🤖' },
    { id: 4, name: 'Cloud Solutions', icon: '☁️' },
    { id: 5, name: 'Data Analytics', icon: '📊' },
    { id: 6, name: 'UI/UX Design', icon: '✨' },
    { id: 7, name: 'API Development', icon: '⚡' },
    { id: 8, name: 'DevOps', icon: '🔧' },
  ]

  const services = [
    {
      title: 'Web Design & Development',
      description: 'Beautiful, responsive websites that convert visitors into customers. We combine stunning design with powerful functionality.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuned'],
      icon: '🌐',
    },
    {
      title: 'AI SaaS Solutions',
      description: 'Cutting-edge AI-powered applications that automate processes and unlock new business opportunities.',
      features: ['Machine Learning', 'Automation', 'Real-time Analytics'],
      icon: '🤖',
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications built for engagement and user satisfaction.',
      features: ['iOS & Android', 'Cross-platform', 'Cloud Sync'],
      icon: '📱',
    },
    {
      title: 'Digital Transformation',
      description: 'Complete business digitalization strategies to modernize operations and enhance competitiveness.',
      features: ['Process Automation', 'Legacy Modernization', 'Integration'],
      icon: '🔄',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            We can help you with...
          </h2>
        </div>

        {/* Service Tags */}
        <div className="mb-20 flex flex-wrap gap-3">
          {allServices.map((service) => (
            <button
              key={service.id}
              className="px-4 py-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground text-foreground border border-border hover:border-primary transition duration-200 text-sm font-medium"
            >
              {service.icon} {service.name}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary/30 border-border p-8 hover:border-primary/50 transition group cursor-pointer">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-block text-primary font-semibold group-hover:translate-x-2 transition">
                Learn More →
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
