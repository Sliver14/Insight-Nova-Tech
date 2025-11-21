import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
                TV
              </div>
              <span className="font-bold text-lg text-foreground">Insight Nova Tech</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Innovative tech solutions and digital transformation services.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Web Design</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">AI Solutions</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">App Development</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Consulting</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Documentation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Case Studies</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Insight Nova Tech. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with innovation and precision
          </p>
        </div>
      </div>
    </footer>
  )
}
