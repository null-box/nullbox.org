"use server"

import { z } from "zod"
import { Resend } from "resend"

// Form validation schema with more lenient requirements
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z.string().min(5, { message: "Message is required." }),
})

type FormData = z.infer<typeof formSchema>

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Log the data for debugging
    console.log("Sending email with data:", validatedData)

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not defined")
      return {
        success: false,
        message: "Email configuration error. Please contact the administrator.",
      }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "contact-form@nullbox.org", // Changed from email address
      to: ["contact@nullbox.org"], // Your receiving email
      reply_to: validatedData.email,
      subject: `Website Contact: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}
    `,
      // You can also use HTML for a nicer email
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Subject:</strong> ${validatedData.subject}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, "<br>")}</p>
</div>
    `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to send your message. Please try again or contact us directly at contact@nullbox.org.",
      }
    }

    console.log("Email sent successfully:", data)
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    if (error instanceof z.ZodError) {
      // Format validation errors for better display
      const fieldErrors = error.errors.reduce(
        (acc, curr) => {
          const path = curr.path[0] as string
          acc[path] = curr.message
          return acc
        },
        {} as Record<string, string>,
      )

      return {
        success: false,
        message: "Please correct the errors below.",
        fieldErrors,
      }
    }
    return {
      success: false,
      message: "Failed to send message. Please try again or contact us directly at contact@nullbox.org",
    }
  }
}
