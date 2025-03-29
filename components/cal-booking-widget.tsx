"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface CalBookingWidgetProps {
  className?: string
}

export function CalBookingWidget({ className }: CalBookingWidgetProps) {
  return (
    <div className={`card-minimal ${className}`}>
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <Button size="sm" className="w-full text-xs h-7" asChild>
            <a href="https://cal.com/nullbox/15min" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-1.5 h-3 w-3" />
              15 Min Call
            </a>
          </Button>

          <Button size="sm" className="w-full text-xs h-7" asChild>
            <a href="https://cal.com/nullbox/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-1.5 h-3 w-3" />
              30 Min Call
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

