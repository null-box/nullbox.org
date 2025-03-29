import { Button } from '@/components/ui/button'
import { BookOpen, Github, Minimize2, RefreshCw, Star, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Null Box Ltd and our mission to engineer clarity from complexity.',
}

export default function AboutPage() {
  return (
    <div className="p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg font-medium mb-4">About Null Box Ltd</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8 items-center">
          <div>
            <h2 className="text-sm font-medium mb-2">Our Mission</h2>
            <p className="text-xs text-muted-foreground mb-3">
              At Null Box Ltd, we're on a mission to engineer clarity from complexity. We believe
              that even the most intricate technical challenges can be solved with elegant,
              maintainable solutions.
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Our approach combines deep technical expertise with a focus on knowledge transfer,
              ensuring our clients not only receive exceptional solutions but also gain the skills
              to evolve and maintain them.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-background/50 group">
            <Image
              src="/images/nullbox-logo-transparent.png"
              alt="Null Box Ltd Logo"
              fill
              className="object-contain p-4 transition-all duration-500 ease-in-out transform group-hover:scale-110"
              priority
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-medium mb-3">Our Values</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
              <div className="pt-4 px-4">
                <h3 className="text-xs font-medium mb-1 flex items-center gap-2">
                  <Star className="h-3 w-3 text-primary/80" />
                  Technical Excellence
                </h3>
                <p className="text-xs">
                  We believe in doing things right. Our solutions are built with quality, security,
                  and maintainability as core principles.
                </p>
              </div>
            </div>

            <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
              <div className="pt-4 px-4">
                <h3 className="text-xs font-medium mb-1 flex items-center gap-2">
                  <BookOpen className="h-3 w-3 text-primary/80" />
                  Knowledge Sharing
                </h3>
                <p className="text-xs">
                  We're committed to empowering our clients through education, documentation, and
                  hands-on training.
                </p>
              </div>
            </div>

            <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
              <div className="pt-4 px-4">
                <h3 className="text-xs font-medium mb-1 flex items-center gap-2">
                  <Github className="h-3 w-3 text-primary/80" />
                  Open Source
                </h3>
                <p className="text-xs">
                  We actively contribute to and advocate for open source software, believing it
                  drives innovation and quality.
                </p>
              </div>
            </div>

            <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
              <div className="pt-4 px-4">
                <h3 className="text-xs font-medium mb-1 flex items-center gap-2">
                  <RefreshCw className="h-3 w-3 text-primary/80" />
                  Continuous Learning
                </h3>
                <p className="text-xs">
                  Technology evolves rapidly. We stay at the forefront through constant learning and
                  experimentation.
                </p>
              </div>
            </div>

            <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
              <div className="pt-4 px-4">
                <h3 className="text-xs font-medium mb-1 flex items-center gap-2">
                  <Minimize2 className="h-3 w-3 text-primary/80" />
                  Simplicity
                </h3>
                <p className="text-xs">
                  We value elegant, simple solutions over complex ones. Complexity should only be
                  introduced when necessary.
                </p>
              </div>
            </div>

            <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105">
              <div className="pt-4 px-4">
                <h3 className="text-xs font-medium mb-1 flex items-center gap-2">
                  <Users className="h-3 w-3 text-primary/80" />
                  Client Partnership
                </h3>
                <p className="text-xs">
                  We see our clients as partners. Your success is our success, and we're invested in
                  your long-term outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-sm font-medium mb-3">Our Story</h2>
          <p className="text-xs text-muted-foreground mb-4 max-w-2xl mx-auto">
            Null Box Ltd was founded in 2014 with a simple idea: technical complexity shouldn't be a
            barrier to business success. After years of seeing organizations struggle with
            over-engineered solutions and knowledge silos, we set out to create a consultancy that
            combines technical excellence with a focus on simplicity and knowledge transfer.
          </p>
        </div>

        <div className="text-center">
          <Button size="sm" className="text-xs" asChild>
            <a href="/contact">Work With Us</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
