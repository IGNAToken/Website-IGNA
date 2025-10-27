import React from 'react'

type Props = {
  href: string
  icon: React.ReactNode
  title: string
  description?: string
  fileType?: string
}

const FileCard = ({ href, title, icon, description, fileType }: Props) => {
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a Cloudinary URL, force download by fetching as blob
    if (href.includes('cloudinary') || href.includes('res.cloudinary.com')) {
      e.preventDefault()
      try {
        const response = await fetch(href)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${title}.${fileType || 'pdf'}`.replace(/\s+/g, '-')
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } catch (error) {
        console.error('Download failed:', error)
        // Fallback: open in new tab
        window.open(href, '_blank')
      }
    }
    // For same-origin URLs, the browser will handle download naturally
  }

  return (
    <a
      className='group relative block w-full max-w-sm bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      onClick={handleDownload}
    >
      {/* Background glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center text-center space-y-4'>
        {/* Icon container with enhanced styling */}
        <div className='relative'>
          <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300'>
            <div className='text-primary group-hover:scale-110 transition-transform duration-300'>{icon}</div>
          </div>
          {/* File type badge */}
          {fileType && (
            <div className='absolute -top-2 -right-2 px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30'>
              {fileType}
            </div>
          )}
        </div>

        {/* Title */}
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300'>
            {title}
          </h3>
          {description && (
            <p className='text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300'>
              {description}
            </p>
          )}
        </div>

        {/* Download indicator */}
        <div className='flex items-center gap-2 text-xs text-white/60 group-hover:text-primary/80 transition-colors duration-300'>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
            />
          </svg>
          <span>Click to download</span>
        </div>
      </div>
    </a>
  )
}

export default FileCard
