/**
 * Environment variable validation
 * Lazy loading to prevent errors at module evaluation time
 */

function getEnvVar(key: string, defaultValue?: string): string {
  // Next.js automatically loads .env files, but let's ensure we're reading correctly
  const value = process.env[key] || defaultValue
  
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  
  return value
}

/**
 * Validates and formats email for Resend API
 * Resend requires format: "email@example.com" or "Name <email@example.com>"
 */
function formatEmailForResend(email: string, defaultName?: string): string {
  // Trim whitespace
  email = email.trim()
  
  // If already in correct format (contains < and >), clean it up
  if (email.includes('<') && email.includes('>')) {
    // Extract name and email, clean them up
    const match = email.match(/^(.+?)\s*<(.+?)>$/);
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
  
  // Otherwise return as is (just email, trimmed)
  return email.trim()
}

// Lazy getters to prevent errors at module load time
export const env = {
  get RESEND_API_KEY() {
    return getEnvVar('RESEND_API_KEY')
  },
  get RESEND_FROM_EMAIL() {
    const email = getEnvVar('RESEND_FROM_EMAIL', 'Contact Form <njoyaalexander71@gmail.com>')
    // Always format the email to ensure it's in the correct format
    return formatEmailForResend(email, 'Contact Form')
  },
  get RESEND_TO_EMAIL() {
    return getEnvVar('RESEND_TO_EMAIL')
  },
} as const

