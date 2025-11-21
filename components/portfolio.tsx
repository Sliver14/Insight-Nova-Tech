'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with AI recommendations',
      image: '🛍️',
      tags: ['React', 'Node.js', 'AI'],
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      category: 'saas',
      description: 'Real-time patient data analytics platform',
      image: '⚕️',
      tags: ['Analytics', 'React', 'Firebase'],
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      category: 'mobile',
      description: 'Cross-platform fitness tracking and AI coaching',
      image: '💪',
      tags: ['React Native', 'AI', 'Cloud'],
    },
    {
      id: 4,
      title: 'AI Content Generator',
      category: 'saas',
      description: 'SaaS platform for AI-powered content creation',
      image: '✍️',
      tags: ['AI', 'Node.js', 'React'],
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'web',
      description: 'Property listing with virtual tours and AI valuation',
      image: '🏠',
      tags: ['Next.js', 'AI', 'Maps API'],
    },
    {
      id: 6,
      title: 'Supply Chain Management',
      category: 'enterprise',
      description: 'Enterprise system for logistics optimization',
      image: '📦',
      tags: ['Enterprise', 'Analytics', 'IoT'],
    },
  ]

  const filters = ['all', 'web', 'saas', 'mobile', 'enterprise']
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Our Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Projects We Have Completed
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition capitalize ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/30 text-foreground hover:bg-secondary/50 border border-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="bg-secondary/30 border-border overflow-hidden hover:border-primary/50 transition group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center text-7xl group-hover:scale-110 transition">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-primary font-semibold text-sm group-hover:translate-x-1 transition">
                  View Details →
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
