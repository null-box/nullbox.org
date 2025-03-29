import { CalBookingWidget } from '@/components/cal-booking-widget'
import { ContactForm } from '@/components/contact-form'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Null Box Ltd for consultancy services, technical training, or project inquiries.',
}

export default function ContactPage() {
  return (
    <div className="p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 pb-4 border-b border-border/30">
          <h1 className="text-lg font-medium mb-2">Contact Us</h1>
          <p className="text-xs text-muted-foreground">
            Get in touch with us to discuss your project, request a consultation, or learn more
            about our services.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 flex flex-col">
            <div className="flex items-center mb-2">
              <Mail className="h-3 w-3 mr-2" />
              <h3 className="text-xs font-medium">Email</h3>
            </div>
            <a href="mailto:contact@nullbox.org" className="text-xs text-primary hover:underline">
              contact@nullbox.org
            </a>
          </div>

          <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 flex flex-col">
            <div className="flex items-center mb-2">
              <Phone className="h-3 w-3 mr-2" />
              <h3 className="text-xs font-medium">Phone</h3>
            </div>
            <div className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <a
                href="tel:+442046002203"
                className="text-xs text-primary hover:underline block mb-1"
              >
                +44 (0) 2046002203
              </a>
            </div>
            <div className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <a href="tel:+16505021545" className="text-xs text-primary hover:underline block">
                +1 (650) 502-1545
              </a>
            </div>
          </div>

          <div className="card-minimal-zoom-only group transition-transform duration-300 hover:scale-105 flex flex-col">
            <div className="flex items-center mb-2">
              <MapPin className="h-3 w-3 mr-2" />
              <h3 className="text-xs font-medium">Location</h3>
            </div>
            <div className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <a
                href="https://www.google.com/maps/place/71-75+Shelton+Street,+Covent+Garden,+London+WC2H+9JQ,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline block mb-1"
              >
                London, United Kingdom
              </a>
            </div>
            <div className="flex items-start">
              <span className="text-primary mr-1.5">•</span>
              <span className="text-xs text-muted-foreground">
                Remote{' '}
                <Link href="/services" className="text-primary hover:underline">
                  services
                </Link>{' '}
                worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Main Contact Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Message Form Section */}
          <div className="terminal-box p-4">
            <div className="terminal-header mb-3">
              <div className="terminal-dot bg-red-500 w-2 h-2"></div>
              <div className="terminal-dot bg-yellow-500 ml-1 w-2 h-2"></div>
              <div className="terminal-dot bg-green-500 ml-1 w-2 h-2"></div>
              <div className="ml-2 text-xs text-muted-foreground">message.sh</div>
            </div>
            <h2 className="text-sm font-medium mb-3">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Schedule Section */}
          <div className="terminal-box p-4">
            <div className="terminal-header mb-3">
              <div className="terminal-dot bg-red-500 w-2 h-2"></div>
              <div className="terminal-dot bg-yellow-500 ml-1 w-2 h-2"></div>
              <div className="terminal-dot bg-green-500 ml-1 w-2 h-2"></div>
              <div className="ml-2 text-xs text-muted-foreground">schedule.sh</div>
            </div>
            <h2 className="text-sm font-medium mb-3">Schedule a Consultation</h2>
            <p className="text-xs text-muted-foreground mb-3">
              Reserve a complimentary consultation to discuss your project requirements and
              technical objectives.
            </p>
            <CalBookingWidget />
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              If these times don't suit your schedule, please{' '}
              <a href="mailto:contact@nullbox.org" className="text-primary hover:underline">
                contact us directly
              </a>
              .
              <br />
              <br />
              For additional information, we also invite you to review our{' '}
              <Link href="/faq" className="text-primary hover:underline">
                Frequently Asked Questions
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Inspirational Message Section */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center group transition-transform duration-300 hover:scale-105">
          <h2 className="text-sm font-medium mb-3">Let's Build Something Great Together</h2>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            "Every complex system that works evolved from a simple system that worked. The inverse
            proposition is not true: A complex system designed from scratch never works."
            <br />— John Gall
          </p>
          <p className="text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
            At Null Box Ltd, we believe that clear communication is the foundation of successful
            technical projects. Your message today could be the first step toward engineering
            clarity from complexity.
          </p>
        </div>
      </div>
    </div>
  )
}
