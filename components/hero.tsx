import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                Welcome to Insight Nova Tech
              </p>
              <h1 className="text-balance text-5xl sm:text-6xl font-bold leading-tight text-foreground">
                We Craft Innovative Web Solutions That Drive Business Growth
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We increase revenue and ensure sustainable long-term growth for your business through powerful strategic websites and cutting-edge digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group">
                Get Started <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/10 border border-border flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5"></div>
            <div className="relative text-center">
              <div className="text-6xl font-bold text-primary/30">💡</div>
              <p className="text-foreground font-semibold mt-4">Innovation in Action</p>
            </div>
          </div>
        </div>

        {/* Trusted Brands */}
        <div className="mt-20 pt-20 border-t border-border">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {['Layers', 'Quotient', 'CircodesAI', 'Hourglass', 'CommandFlow'].map((brand) => (
              <div key={brand} className="flex items-center justify-center h-12 bg-secondary/30 rounded border border-border/50 text-foreground/60 font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
