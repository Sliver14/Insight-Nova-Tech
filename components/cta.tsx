import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-b from-background via-secondary/10 to-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Let's connect & transform your business
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to take your business to the next level? Schedule a free consultation with our team to discuss your goals and discover how we can help.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Contact Information</p>
                <p className="text-muted-foreground">📧 hello@Insight Nova Tech.com</p>
                <p className="text-muted-foreground">📱 +1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/30 border border-border rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-background border-border text-foreground placeholder-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background border-border text-foreground placeholder-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-background border border-border rounded-md px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group">
                Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
