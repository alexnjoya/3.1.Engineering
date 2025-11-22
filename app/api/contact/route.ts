import { Resend } from 'resend'
import { NextRequest } from 'next/server'
import { env } from '@/lib/env'
import { isValidEmail, sanitizeString, sanitizeHtml, validatePhone } from '@/lib/validations'
import { rateLimit, getClientIdentifier } from '@/lib/rate-limit'
import { successResponse, errorResponse } from '@/lib/api-response'

// Helper function to format email for Resend (same as in env.ts)
function formatEmailForResend(email: string, defaultName?: string): string {
  email = email.trim()
  
  // If already in correct format (contains < and >), clean it up
  if (email.includes('<') && email.includes('>')) {
    const match = email.match(/^(.+?)\s*<(.+?)>$/)
    if (match) {
      const name = match[1].trim()
      const emailAddr = match[2].trim()
      return `${name} <${emailAddr}>`
    }
    return email.trim()
  }
  
  // If it's just an email address, add a name if provided
  if (defaultName) {
    return `${defaultName} <${email.trim()}>`
  }
  
  return email.trim()
}

// Initialize Resend lazily to prevent errors at module load time
let resend: Resend | null = null

function getResendClient(): Resend {
  if (!resend) {
    try {
      resend = new Resend(env.RESEND_API_KEY)
    } catch (error) {
      throw new Error('Failed to initialize Resend client. Please check your RESEND_API_KEY environment variable.')
    }
  }
  return resend
}

// Rate limiting: 5 requests per 15 minutes per IP
const RATE_LIMIT_REQUESTS = 5
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientId = getClientIdentifier(request)
    const rateLimitResult = rateLimit(clientId, RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW)
    
    if (!rateLimitResult.allowed) {
      return errorResponse(
        'Too many requests. Please try again later.',
        429
      )
    }

    // Parse and validate request body
    let body
    try {
      body = await request.json()
    } catch {
      return errorResponse('Invalid JSON in request body', 400)
    }

    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return errorResponse('Name, email, and message are required', 400)
    }

    // Validate field lengths
    if (name.length > 100) {
      return errorResponse('Name must be less than 100 characters', 400)
    }
    if (message.length > 5000) {
      return errorResponse('Message must be less than 5000 characters', 400)
    }
    if (subject && subject.length > 200) {
      return errorResponse('Subject must be less than 200 characters', 400)
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return errorResponse('Invalid email format', 400)
    }

    // Validate phone if provided
    if (phone && !validatePhone(phone)) {
      return errorResponse('Invalid phone number format', 400)
    }

    // Sanitize inputs
    const sanitizedName = sanitizeString(name, 100)
    const sanitizedEmail = email.toLowerCase().trim()
    const sanitizedPhone = phone ? sanitizeString(phone, 50) : ''
    const sanitizedSubject = subject ? sanitizeString(subject, 200) : ''
    const sanitizedMessage = sanitizeHtml(message, 5000)

    // Validate environment variables before sending
    let resendClient: Resend
    let fromEmail: string
    let toEmail: string
    
    try {
      resendClient = getResendClient()
      
      // Get raw values from environment - use the env getter which handles defaults
      let rawFromEmail = process.env.RESEND_FROM_EMAIL
      let rawToEmail = process.env.RESEND_TO_EMAIL
      
      // If not found, use defaults
      if (!rawFromEmail) {
        rawFromEmail = 'njoyaalexander71@gmail.com'
      }
      if (!rawToEmail) {
        rawToEmail = 'njoyaalexander71@gmail.com'
      }
      
      // Format the emails properly - ensure we have a valid email address
      fromEmail = formatEmailForResend(rawFromEmail.trim(), 'Contact Form')
      toEmail = rawToEmail.trim()
      
      // Validate email format for Resend
      // Resend requires: "email@example.com" or "Name <email@example.com>"
      const emailFormatRegex = /^(?:(.+?)\s*<(.+?)>|(.+?@.+?))$/
      const match = fromEmail.match(emailFormatRegex)
      
      if (!match) {
        console.error('[ERROR] Invalid RESEND_FROM_EMAIL format:', fromEmail)
        throw new Error(`RESEND_FROM_EMAIL must be in format "email@example.com" or "Name <email@example.com>". Got: ${fromEmail}`)
      }
      
      // Extract the actual email address for validation
      const actualEmail = (match[2] || match[3] || '').trim()
      
      if (!actualEmail || !actualEmail.includes('@') || !actualEmail.includes('.')) {
        console.error('[ERROR] No valid email found in:', fromEmail, 'Match:', match, 'ActualEmail:', actualEmail)
        throw new Error(`RESEND_FROM_EMAIL must contain a valid email address. Got: ${fromEmail}, Extracted: ${actualEmail}`)
      }
    } catch (error) {
      console.error('Environment variable error:', error)
      return errorResponse(
        error instanceof Error ? error.message : 'Server configuration error. Please check environment variables.',
        500
      )
    }

    // Send email using Resend
    const { data, error } = await resendClient.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: sanitizedEmail,
      subject: sanitizedSubject || `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                        3.1ST Engineering
                      </h1>
                      <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 14px; font-weight: 400; opacity: 0.9;">
                        Contact Form
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Contact Details -->
                      <div style="background-color: #f9fafb; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Name</strong>
                              <span style="color: #1f2937; font-size: 15px; font-weight: 500;">${sanitizedName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Email</strong>
                              <a href="mailto:${sanitizedEmail}" style="color: #2563eb; font-size: 15px; text-decoration: none; font-weight: 500;">${sanitizedEmail}</a>
                            </td>
                          </tr>
                          ${sanitizedPhone ? `
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Phone</strong>
                              <a href="tel:${sanitizedPhone}" style="color: #2563eb; font-size: 15px; text-decoration: none; font-weight: 500;">${sanitizedPhone}</a>
                            </td>
                          </tr>
                          ` : ''}
                          ${sanitizedSubject ? `
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">Subject</strong>
                              <span style="color: #1f2937; font-size: 15px; font-weight: 500;">${sanitizedSubject}</span>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                      </div>
                      
                      <!-- Message -->
                      <div style="margin-bottom: 30px;">
                        <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
                        <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #2563eb; border-radius: 6px; padding: 20px;">
                          <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${sanitizedMessage}</p>
                        </div>
                      </div>
                      
                      <!-- Footer -->
                      <div style="padding-top: 25px; border-top: 1px solid #e5e7eb; text-align: center;">
                        <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; line-height: 1.6;">
                          This email was sent from the contact form on your website.<br>
                          Reply directly to this email to respond to <strong style="color: #1f2937;">${sanitizedName}</strong>.
                        </p>
                        <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 11px;">
                          Phone: 07300805194 | Email: 3.1stengineeringltd@gmail.com
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Construction Company - Building Excellence Since 2011

Name: ${sanitizedName}
Email: ${sanitizedEmail}
${sanitizedPhone ? `Phone: ${sanitizedPhone}` : ''}
${sanitizedSubject ? `Subject: ${sanitizedSubject}` : ''}

Message:
${sanitizedMessage}

---
This email was sent from the contact form on your website.
Reply directly to this email to respond to ${sanitizedName}.

Company Contact:
Phone: 07300805194
Email: 3.1stengineeringltd@gmail.com
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return errorResponse('Failed to send email. Please try again later.', 500)
    }

    return successResponse(data, 'Contact form submitted successfully')
  } catch (error) {
    console.error('Contact form error:', error)
    
    // Don't expose internal errors to client
    if (error instanceof Error && error.message.includes('environment variable')) {
      return errorResponse('Server configuration error', 500)
    }
    
    return errorResponse('Internal server error', 500)
  }
}

// Export route config for Next.js
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

