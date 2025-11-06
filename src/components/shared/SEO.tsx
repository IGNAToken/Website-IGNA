import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { SITE_URL } from '@/config'

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  keywords?: string
  noindex?: boolean
}

/**
 * SEO Component for managing meta tags dynamically
 *
 * @param canonicalUrl - The canonical URL for this page (absolute URL)
 * @param title - Page title
 * @param description - Page description
 * @param ogImage - Open Graph image URL
 * @param keywords - SEO keywords
 * @param noindex - If true, adds noindex to prevent search engine indexing
 */
export default function SEO({ title, description, canonicalUrl, ogImage, keywords, noindex = false }: SEOProps) {
  const location = useLocation()
  const baseUrl = SITE_URL
  const currentUrl = `${baseUrl}${location.pathname}`

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title
      updateMetaTag('property', 'og:title', title)
      updateMetaTag('property', 'twitter:title', title)
      updateMetaTag('name', 'title', title)
    }

    // Update description
    if (description) {
      updateMetaTag('name', 'description', description)
      updateMetaTag('property', 'og:description', description)
      updateMetaTag('property', 'twitter:description', description)
    }

    // Update OG image
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage)
      updateMetaTag('property', 'twitter:image', ogImage)
    }

    // Update OG URL
    updateMetaTag('property', 'og:url', currentUrl)
    updateMetaTag('property', 'twitter:url', currentUrl)

    // Update canonical URL
    updateCanonicalLink(canonicalUrl || currentUrl)

    // Update robots meta tag
    updateMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
  }, [title, description, canonicalUrl, ogImage, keywords, noindex, currentUrl])

  return null
}

/**
 * Update or create a meta tag
 */
function updateMetaTag(attribute: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${attributeValue}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, attributeValue)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

/**
 * Update or create the canonical link
 */
function updateCanonicalLink(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}
