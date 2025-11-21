import { CheckCircle2 } from 'lucide-react'

export default function HowWeWork() {
  const steps = [
    {
      title: 'Discover & Define',
      description: 'We dive deep to understand your business needs, target audience, and growth objectives for maximum impact.',
      icon: '🔍',
    },
    {
      title: 'Design & Develop',
      description: 'Our expert team crafts beautiful, functional solutions optimized for performance and user engagement.',
      icon: '⚙️',
    },
    {
      title: 'Launch & Optimize',
      description: 'We deploy your solution and continuously monitor, analyze, and refine for sustained business growth.',
      icon: '🚀',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Get a dedicated design team at fraction of the cost.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 border border-primary/40 text-3xl">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-primary text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
