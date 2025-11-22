/**
 * Validation utilities for form inputs
 */

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function sanitizeString(input: string, maxLength: number = 1000): string {
  if (!input) return ''
  
  // Remove potentially dangerous characters and trim
  let sanitized = input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .slice(0, maxLength)
  
  return sanitized
}

export function sanitizeHtml(input: string, maxLength: number = 5000): string {
  if (!input) return ''
  
  // Basic HTML sanitization - escape HTML entities
  let sanitized = input
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .slice(0, maxLength)
  
  return sanitized
}

export function validatePhone(phone: string): boolean {
  if (!phone) return true // Optional field
  // Basic phone validation - allows international format
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export function validateFileSize(file: File, maxSizeMB: number = 10): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024
  return file.size <= maxSizeBytes
}

export function validateFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.some(type => file.type.includes(type) || file.name.toLowerCase().endsWith(type))
}

