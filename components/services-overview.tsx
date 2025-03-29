import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesOverview() {
  return (
    <section className="container mx-auto px-4 py-8 border-t border-border/10">
      <div className="text-center mb-6">
        <h2 className="text-base font-medium mb-2">Our Services</h2>
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of services to help you build, optimize, and maintain your technical
          infrastructure.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
          <h3 className="text-sm font-medium mb-2">Cloud Architecture</h3>
          <ul className="list-disc pl-4 space-y-1 mb-3 text-xs text-muted-foreground">
            <li>Multi-cloud strategy</li>
            <li>Microservices design</li>
            <li>Serverless architecture</li>
          </ul>
          <Button variant="link" className="px-0 h-auto text-xs" asChild>
            <Link href="/services#cloud-architecture">Learn More</Link>
          </Button>
        </div>

        <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
          <h3 className="text-sm font-medium mb-2">Platform Engineering</h3>
          <ul className="list-disc pl-4 space-y-1 mb-3 text-xs text-muted-foreground">
            <li>Developer platforms</li>
            <li>CI/CD implementation</li>
            <li>Kubernetes design</li>
          </ul>
          <Button variant="link" className="px-0 h-auto text-xs" asChild>
            <Link href="/services#platform-engineering">Learn More</Link>
          </Button>
        </div>

        <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
          <h3 className="text-sm font-medium mb-2">DevOps & IaC</h3>
          <ul className="list-disc pl-4 space-y-1 mb-3 text-xs text-muted-foreground">
            <li>DevOps assessment</li>
            <li>Terraform architecture</li>
            <li>Ansible automation</li>
          </ul>
          <Button variant="link" className="px-0 h-auto text-xs" asChild>
            <Link href="/services#devops">Learn More</Link>
          </Button>
        </div>

        <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
          <h3 className="text-sm font-medium mb-2">System Design</h3>
          <ul className="list-disc pl-4 space-y-1 mb-3 text-xs text-muted-foreground">
            <li>Distributed systems</li>
            <li>Event-driven architecture</li>
            <li>API design</li>
          </ul>
          <Button variant="link" className="px-0 h-auto text-xs" asChild>
            <Link href="/services#system-design">Learn More</Link>
          </Button>
        </div>

        <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
          <h3 className="text-sm font-medium mb-2">Performance Engineering</h3>
          <ul className="list-disc pl-4 space-y-1 mb-3 text-xs text-muted-foreground">
            <li>Performance testing</li>
            <li>Bottleneck identification</li>
            <li>Caching strategies</li>
          </ul>
          <Button variant="link" className="px-0 h-auto text-xs" asChild>
            <Link href="/services#performance">Learn More</Link>
          </Button>
        </div>

        <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
          <h3 className="text-sm font-medium mb-2">Software Engineering</h3>
          <ul className="list-disc pl-4 space-y-1 mb-3 text-xs text-muted-foreground">
            <li>Full-stack development</li>
            <li>API implementation</li>
            <li>Legacy modernization</li>
          </ul>
          <Button variant="link" className="px-0 h-auto text-xs" asChild>
            <Link href="/services#software-engineering">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="text-center mt-6">
        <Button size="sm" asChild className="text-xs">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  )
}

