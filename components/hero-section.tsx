import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 py-2">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="terminal-box w-full max-w-3xl mx-auto p-4">
            <div className="terminal-header mb-3">
              <div className="terminal-dot bg-red-500 w-3 h-3"></div>
              <div className="terminal-dot bg-yellow-500 ml-2 w-3 h-3"></div>
              <div className="terminal-dot bg-green-500 ml-2 w-3 h-3"></div>
              <div className="ml-3 text-sm text-muted-foreground">nullbox.sh</div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex">
                <span className="text-green-500 mr-3">$</span>
                <span>cat mission.txt</span>
              </div>
              <div className="pl-6">Engineering Clarity from Complexity</div>
              <div className="flex">
                <span className="text-green-500 mr-3">$</span>
                <span>cat services.txt</span>
              </div>
              <div className="pl-6">- Software Engineering</div>
              <div className="pl-6">- Cloud Computing Architecture</div>
              <div className="pl-6">- Technical Training</div>
              <div className="flex">
                <span className="text-green-500 mr-3">$</span>
                <span className="flex items-center">
                  <span className="mr-1">_</span>
                  <span className="cursor-blink">|</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <Button size="sm" asChild className="text-xs">
              <Link href="/contact">Work With Us</Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="text-xs">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

