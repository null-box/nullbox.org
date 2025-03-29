import { Card, CardContent } from '@/components/ui/card'

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-8 border-t border-border/10">
      <div className="text-center mb-6">
        <h2 className="text-base font-medium mb-2">What Our Clients Say</h2>
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          We're proud of the relationships we've built and the results we've delivered for our
          clients.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <Card className="card-minimal">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-3 italic">
              "Null Box Ltd transformed our cloud infrastructure, reducing costs by 40% while
              improving reliability. Their expertise in AWS and Terraform was invaluable."
            </p>
            <div className="flex justify-end">
              <p className="text-xs font-medium">Jane Doe</p>
            </div>
            <div className="flex justify-end">
              <p className="text-xs text-muted-foreground">CTO, TechCorp</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-minimal">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-3 italic">
              "The technical training provided by Null Box Ltd elevated our entire engineering team.
              Their hands-on approach to teaching Kubernetes and CI/CD practices was exactly what we
              needed."
            </p>
            <div className="flex justify-end">
              <p className="text-xs font-medium">John Smith</p>
            </div>
            <div className="flex justify-end">
              <p className="text-xs text-muted-foreground">Engineering Manager, DataFlow</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-minimal">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground mb-3 italic">
              "Working with Null Box Ltd on our platform engineering initiative was a game-changer.
              They didn't just build a solution; they transferred knowledge to our team throughout
              the process."
            </p>
            <div className="flex justify-end">
              <p className="text-xs font-medium">Alice Johnson</p>
            </div>
            <div className="flex justify-end">
              <p className="text-xs text-muted-foreground">VP of Engineering, CloudScale</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
