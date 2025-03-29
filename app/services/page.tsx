import {
  Check,
  Cloud,
  Server,
  RefreshCw,
  FileCode,
  Network,
  Gauge,
  Code,
  ArrowUpCircle,
  GraduationCap,
  PenToolIcon as Tool,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services",
  description: "Explore our cloud architecture, platform engineering, and technical training services.",
}

export default function ServicesPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-lg font-medium mb-4">Our Services</h1>
        <p className="text-xs text-muted-foreground mb-8">
          We offer a comprehensive range of services to help you build, optimize, and maintain your technical
          infrastructure.
        </p>

        <div className="grid gap-8">
          <section id="cloud-architecture">
            <h2 className="text-sm font-medium mb-4">Cloud Architecture & Platform Engineering</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Cloud className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Cloud Architecture Design</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Expert guidance on building scalable, resilient cloud infrastructure
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Multi-cloud and hybrid cloud strategy</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Microservices architecture design</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Serverless application architecture</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>High-availability system design</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Cost optimization strategies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Server className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Platform Engineering</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Building developer platforms that enhance productivity and quality
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Internal developer platforms (IDPs)</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>CI/CD pipeline design and implementation</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Kubernetes platform design</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Self-service infrastructure platforms</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Platform governance and security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="devops">
            <h2 className="text-sm font-medium mb-4">DevOps & Infrastructure as Code</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">DevOps Transformation</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Implementing DevOps practices to accelerate delivery and improve quality
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>DevOps maturity assessment</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Continuous integration implementation</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Continuous delivery pipelines</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Automated testing strategies</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>DevSecOps implementation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <FileCode className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Infrastructure as Code</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Managing infrastructure through code for consistency and reliability
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Terraform architecture and implementation</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>OpenTofu expertise and migration</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Ansible automation</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Infrastructure testing frameworks</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>GitOps workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="system-design">
            <h2 className="text-sm font-medium mb-4">System Design & Performance Engineering</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Network className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">System Design</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Designing robust, scalable systems for complex requirements
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Distributed systems architecture</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Event-driven architecture</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>API design and implementation</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Data storage strategy</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>System integration patterns</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Performance Engineering</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Optimizing systems for speed, efficiency, and reliability
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Performance testing and analysis</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Bottleneck identification</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Caching strategies</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Database optimization</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Scalability planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="software-engineering">
            <h2 className="text-sm font-medium mb-4">Software Engineering</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Application Development</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Custom software solutions for your business needs
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Full-stack web application development</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Mobile application development</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Custom business software</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>SaaS product development</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>UI/UX design and implementation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <ArrowUpCircle className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Software Modernization</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Updating legacy systems with modern technologies
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Legacy system assessment</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Incremental modernization strategies</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Code refactoring and optimization</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Technology stack upgrades</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Monolith to microservices migration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-4">Team Training & Developer Enablement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Technical Training</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Customized training programs for technical teams
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Cloud platform workshops (AWS, Azure, GCP)</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Kubernetes and container orchestration</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Infrastructure as Code (Terraform, Ansible)</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>CI/CD and DevOps practices</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Microservices architecture</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 h-full">
                <div>
                  <div className="border-b border-border/50 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Tool className="h-3 w-3 text-primary/80" />
                      <h3 className="text-xs font-medium">Developer Enablement</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Empowering development teams with tools and practices
                    </p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Developer experience optimization</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Technical documentation systems</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Code quality and review processes</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Technical mentoring programs</span>
                    </li>
                    <li className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 mt-0.5" />
                      <span>Engineering team best practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-sm font-medium mb-3">Ready to Transform Your Technical Capabilities?</h2>
          <p className="text-xs text-muted-foreground mb-6">
            Contact us today to discuss how we can help you achieve your technical goals.
          </p>
          <Button size="sm" asChild className="text-xs">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

