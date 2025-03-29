"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { sendEmail } from "@/app/actions/send-email"

type FieldErrors = Record<string, string>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const validateForm = (): boolean => {
    const errors: FieldErrors = {}

    if (!formData.name.trim()) {
      errors.name = "Required"
    }

    if (!formData.email.trim()) {
      errors.email = "Required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Required"
    }

    if (!formData.message.trim()) {
      errors.message = "Required"
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      setFormStatus("error")
      setErrorMessage("Please correct the errors below.")
      return
    }

    setIsSubmitting(true)
    setFormStatus("idle")
    setErrorMessage("")

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setFormStatus("success")
      } else {
        setFormStatus("error")
        setErrorMessage(result.message || "Something went wrong. Please try again.")

        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors)
        }
      }
    } catch (error) {
      setFormStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormStatus("idle")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setFieldErrors({})
    setErrorMessage("")
  }

  return (
    <div>
      {formStatus === "success" ? (
        <div className="space-y-3">
          <Alert className="bg-green-900/20 border-green-900 text-xs">
            <CheckCircle2 className="h-3 w-3 text-green-400" />
            <AlertTitle className="text-xs">Message sent successfully!</AlertTitle>
            <AlertDescription className="text-xs">
              Thank you for reaching out. We'll get back to you soon.
            </AlertDescription>
          </Alert>
          <Button onClick={resetForm} size="sm" className="text-xs h-7">
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-xs">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`h-7 text-xs ${fieldErrors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-[10px] text-red-500">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`h-7 text-xs ${fieldErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-[10px] text-red-500">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="subject" className="text-xs">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`h-7 text-xs ${fieldErrors.subject ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              aria-invalid={!!fieldErrors.subject}
              aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
            />
            {fieldErrors.subject && (
              <p id="subject-error" className="text-[10px] text-red-500">
                {fieldErrors.subject}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="text-xs">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`text-xs ${fieldErrors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-[10px] text-red-500">
                {fieldErrors.message}
              </p>
            )}
          </div>

          {formStatus === "error" && errorMessage && (
            <Alert variant="destructive" className="text-xs py-2">
              <AlertCircle className="h-3 w-3" />
              <AlertTitle className="text-xs">Error</AlertTitle>
              <AlertDescription className="text-xs">{errorMessage}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full text-xs h-7" size="sm" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  )
}

