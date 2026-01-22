// Base path for GitHub Pages deployment
export const basePath = process.env.NODE_ENV === 'production' ? '/MonsterRemodelingFWWeb' : ''

// Helper to get the correct asset path
export function getAssetPath(path: string): string {
  return `${basePath}${path}`
}
