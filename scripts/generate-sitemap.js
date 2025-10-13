#!/usr/bin/env node

/**
 * Dynamic Sitemap Generator for IGNA Website
 *
 * This script generates a sitemap.xml file that includes:
 * - Static pages (home, blog index, swap, etc.)
 * - Dynamic blog posts fetched from the API
 *
 * Usage:
 *   node scripts/generate-sitemap.js
 *
 * Environment Variables:
 *   - API_URL: The base URL for the API (preferred)
 *   - VITE_API_URL: Fallback API URL (Vite env var, may not be available in Node scripts)
 *   - SITE_URL: The base URL for the website (defaults to https://igna.com)
 */

import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables from .env file
try {
  const envPath = path.join(process.cwd(), '.env')
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8')
    envContent.split('\n').forEach((line) => {
      const [key, ...valueParts] = line.split('=')
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim()
        if (!process.env[key.trim()]) {
          process.env[key.trim()] = value
        }
      }
    })
    console.log('📄 Loaded environment variables from .env file')
  } else {
    console.log(
      '📄 No .env file found, using system environment variables only'
    )
  }
} catch (error) {
  console.warn('⚠️  Warning: Could not load .env file:', error.message)
}

// Configuration
const SITE_URL = process.env.SITE_URL || 'https://www.ignatoken.com'
const API_URL = process.env.API_URL || process.env.VITE_API_URL || ''
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'sitemap.xml')

console.log('Environment variables:')
console.log('  SITE_URL:', process.env.SITE_URL || 'not set')
console.log('  API_URL:', process.env.API_URL || 'not set')
console.log('  VITE_API_URL:', process.env.VITE_API_URL || 'not set')
console.log('  Using API_URL:', API_URL)

// Static routes configuration
const STATIC_ROUTES = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/blog',
    priority: '0.8',
    changefreq: 'daily',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/swap',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  // Note: The following standalone routes are the canonical URLs
  // The /blog/ versions will have lower priority and point to these as canonical
  {
    url: '/how-to-buy-igna',
    priority: '0.8', // High priority - this is the canonical URL
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/igna-tokenomics',
    priority: '0.8', // High priority - this is the canonical URL
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
  },
]

/**
 * Fetch all blog posts from the API
 */
async function fetchBlogPosts() {
  try {
    console.log('🔍 Fetching blog posts from API...')
    console.log(`   API endpoint: ${API_URL}/api/blogs`)

    const response = await axios.get(`${API_URL}api/blogs`, {
      params: {
        populate: '*',
        'pagination[pageSize]': 1000, // Get all posts
        'sort[0]': 'publishedAt:desc',
      },
      timeout: 10000, // 10 second timeout
    })

    console.log(`   API response status: ${response.status}`)
    console.log(`   Data received: ${response.data?.data?.length || 0} posts`)

    return response.data.data || []
  } catch (error) {
    console.warn('⚠️  Warning: Could not fetch blog posts from API')
    console.warn(`   Error: ${error.message}`)
    console.warn('   Continuing with static pages only...')
    return []
  }
}

/**
 * Generate XML sitemap content
 */
function generateSitemap(blogPosts = []) {
  const urls = [...STATIC_ROUTES]

  // Add blog post URLs
  // Posts that have standalone routes should have lower priority since the standalone route is canonical
  const standaloneRouteSlugs = ['how-to-buy-igna', 'igna-tokenomics']

  blogPosts.forEach((post) => {
    if (post.url_slug) {
      const hasStandaloneRoute = standaloneRouteSlugs.includes(post.url_slug)
      urls.push({
        url: `/blog/${post.url_slug}`,
        priority: hasStandaloneRoute ? '0.3' : '0.6', // Lower priority if standalone route exists
        changefreq: 'monthly',
        lastmod: post.updatedAt
          ? post.updatedAt.split('T')[0]
          : new Date().toISOString().split('T')[0],
      })
    }
  })

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  urls.forEach((route) => {
    xml += '  <url>\n'
    xml += `    <loc>${SITE_URL}${route.url}</loc>\n`
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`
    xml += `    <priority>${route.priority}</priority>\n`
    xml += '  </url>\n'
  })

  xml += '</urlset>\n'
  return xml
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Starting sitemap generation...')
    console.log(`📁 Output file: ${OUTPUT_FILE}`)
    console.log(`🌐 Site URL: ${SITE_URL}`)
    console.log(`🔗 API URL: ${API_URL}`)

    // Fetch blog posts
    const blogPosts = await fetchBlogPosts()
    console.log(`📝 Found ${blogPosts.length} blog posts`)

    // Generate sitemap XML
    const sitemapXml = generateSitemap(blogPosts)

    // Write to file
    fs.writeFileSync(OUTPUT_FILE, sitemapXml, 'utf8')

    console.log(`✅ Sitemap generated successfully: ${OUTPUT_FILE}`)
    console.log(`📊 Total URLs: ${STATIC_ROUTES.length + blogPosts.length}`)
    console.log(`   - Static pages: ${STATIC_ROUTES.length}`)
    console.log(`   - Blog posts: ${blogPosts.length}`)
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message)
    console.error('Stack trace:', error.stack)
    process.exit(1)
  }
}

// Run the script when executed directly
main()

export { generateSitemap, fetchBlogPosts }
