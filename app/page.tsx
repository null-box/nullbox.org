import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <section className="container mx-auto px-4 py-8 border-t border-border/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-base font-medium mb-3 text-center">About Null Box Ltd</h2>
          <p className="text-xs text-muted-foreground mb-4 text-center">
            Null Box Ltd is a premium consultancy specializing in cloud architecture, platform engineering, and technical
            training. We help organizations build scalable, resilient systems and empower their teams with the knowledge
            to maintain them.
          </p>
          <div className="text-center">
            <Button variant="outline" size="sm" asChild className="text-xs">
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      <ServicesOverview />

      <section className="container mx-auto px-4 py-8 border-t border-border/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-medium mb-3">Ready to Transform Your Technical Capabilities?</h2>
          <p className="text-xs text-muted-foreground mb-4">
            Contact us today to discuss how we can help you build scalable, resilient systems and empower your team with
            the knowledge to maintain them.
          </p>
          <Button size="sm" asChild className="text-xs">
            <a href="/contact">Work With Us</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

