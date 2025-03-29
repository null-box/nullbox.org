import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, TerminalIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-5 w-5" />
              <span className="font-medium text-xs">nullbox</span>
            </Link>
            <p className="text-xs text-muted-foreground max-w-xs">
              Premium consultancy offering software engineering, cloud computing architecture, and technical training
              services.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild className="h-6 w-6">
                <a href="https://github.com/null-box" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-6 w-6">
                <a
                  href="https://www.linkedin.com/company/null-box-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="h-6 w-6">
                <a href="mailto:contact@nullbox.org" aria-label="Email">
                  <MailIcon className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-xs mb-2">Services</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/services#cloud-architecture" className="text-muted-foreground hover:text-foreground">
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#software-engineering" className="text-muted-foreground hover:text-foreground">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#system-design" className="text-muted-foreground hover:text-foreground">
                  System Design
                </Link>
              </li>
              <li>
                <Link href="/services#devops" className="text-muted-foreground hover:text-foreground">
                  DevOps & IaC
                </Link>
              </li>
              <li>
                <Link href="/services#platform-engineering" className="text-muted-foreground hover:text-foreground">
                  Platform Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xs mb-2">Company</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Null Box Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <TerminalIcon className="h-3 w-3" />
            <span>Engineered with clarity in the Cloud !</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

