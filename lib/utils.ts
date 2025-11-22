/**
 * Calculate the number of years since the company was founded (2011)
 * @returns The number of years since 2011
 */
export function getYearsSinceFounded(): number {
  const currentYear = new Date().getFullYear()
  const foundedYear = 2011
  return currentYear - foundedYear
}

/**
 * Get formatted years of experience string (e.g., "13+")
 * @returns Formatted string like "13+" or "14+"
 */
export function getYearsOfExperience(): string {
  const years = getYearsSinceFounded()
  return `${years}+`
}

