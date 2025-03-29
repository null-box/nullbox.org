import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ',
  description: "Frequently asked questions about Null Box Ltd's services and engagement models.",
}

export default function FAQPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg font-medium mb-4">Frequently Asked Questions</h1>
        <p className="text-xs text-muted-foreground mb-8">
          Find answers to common questions about our services, engagement models, and how we work
          with clients.
        </p>

        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm font-medium">
              What services do you offer?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              We offer a comprehensive range of services including cloud architecture design,
              platform engineering, DevOps transformation, infrastructure as code implementation,
              system design, performance engineering, software engineering (both application
              development and modernization), and technical training & developer enablement
              services. You can find detailed information about each service on our{' '}
              <Link href="/services" className="text-primary hover:underline">
                Services page
              </Link>
              .
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm font-medium">
              Do you work with clients remotely?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Yes, we work with clients globally and have experience collaborating with distributed
              teams across different time zones.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm font-medium">
              What is your typical engagement model?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              We offer flexible engagement models including project-based work, retainer
              arrangements, and technical advisory services. We'll work with you to determine the
              best approach for your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm font-medium">
              How quickly can you start on a new project?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Our availability varies depending on current commitments, but we typically can begin
              initial consultations within 1-2 weeks and project work within 2-4 weeks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-sm font-medium">
              What technologies and platforms do you specialize in?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              We specialize in cloud platforms (AWS, Azure, GCP, OpenStack), containerization
              (Docker, Kubernetes, Mesos, Nomad), infrastructure as code (Terraform, OpenTofu,
              CloudFormation, Ansible), CI/CD pipelines, and modern software development practices.
              Our team stays current with emerging technologies to provide the best solutions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-sm font-medium">
              Do you offer ongoing support after project completion?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              While we do not offer ongoing support contracts, we are happy to assist with team
              training, knowledge transfer sessions, or ad hoc engagements in case of emergencies or
              critical issues. Our goal is to empower your team to operate independently, with the
              confidence that expert help is available when truly needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-sm font-medium">
              How do you approach security and compliance in your projects?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Security is integrated into our process from the beginning, not added as an
              afterthought. We implement security best practices, conduct regular audits, and ensure
              compliance with relevant standards (GDPR, HIPAA, SOC2, etc.). We also provide
              documentation and training to help your team maintain secure operations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-sm font-medium">
              What is your project methodology?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              We typically follow an agile approach with regular iterations and feedback cycles. Our
              process begins with a thorough discovery phase to understand your requirements,
              followed by planning, implementation, testing, and deployment phases. We emphasize
              transparency, regular communication, and adaptability throughout the project
              lifecycle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-sm font-medium">
              How do you handle knowledge transfer to our internal teams?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Knowledge transfer is a core part of our approach. We provide comprehensive
              documentation, conduct hands-on training sessions, and work alongside your team during
              implementation. We also offer dedicated workshops and can create custom training
              materials specific to your environment and technologies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-sm font-medium">
              What makes Null Box Ltd different from other consultancies?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Our focus on simplicity, knowledge transfer, and long-term client success sets us
              apart. We don't just build solutions; we ensure your team understands them and can
              maintain them independently. We prioritize practical, maintainable solutions over
              unnecessary complexity, and we're committed to open source technologies and best
              practices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger className="text-sm font-medium">
              How do you price your services?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Our pricing depends on the scope, complexity, and duration of the engagement. We offer
              both time-based (daily/weekly rates) and fixed-price options. For ongoing support, we
              provide retainer packages with different service levels. We're transparent about costs
              and will provide detailed estimates before any work begins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12">
            <AccordionTrigger className="text-sm font-medium">
              Can you work with our existing infrastructure and codebase?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Absolutely. We have extensive experience working with legacy systems and existing
              infrastructure. We begin with a thorough assessment to understand your current setup,
              then develop a plan that builds upon your existing investments while introducing
              improvements incrementally where needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13">
            <AccordionTrigger className="text-sm font-medium">
              How do you measure project success?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              We define success metrics at the beginning of each engagement, aligned with your
              business objectives. These might include performance improvements, cost reductions,
              increased reliability, or team productivity gains. We track these metrics throughout
              the project and provide regular reports on progress.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-14">
            <AccordionTrigger className="text-sm font-medium">
              Do you have experience in our industry?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              We've worked across various industries including finance, healthcare, e-commerce,
              SaaS, and more. While industry-specific knowledge is valuable, our technical expertise
              is applicable across domains. We quickly learn the unique requirements of your
              industry and adapt our solutions accordingly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-15">
            <AccordionTrigger className="text-sm font-medium">
              How do you handle communication during projects?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              We establish clear communication channels at the project start, typically including
              regular status meetings, a shared project management tool, and direct access to team
              members. We provide weekly progress reports and maintain transparent documentation.
              Our goal is to be responsive and accessible throughout the engagement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-16">
            <AccordionTrigger className="text-sm font-medium">
              Can you provide references or case studies?
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              Yes, we can share relevant case studies and connect you with past clients upon
              request. Many of our engagements involve confidential work, but we have several
              clients willing to serve as references. We're proud of our track record and the
              long-term relationships we've built with our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center border-t border-border/30 pt-8">
          <h2 className="text-sm font-medium mb-3">Still have questions?</h2>
          <p className="text-xs text-muted-foreground mb-4">
            Contact us directly and we'll be happy to answer any additional questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="sm" asChild className="text-xs">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="text-xs">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
