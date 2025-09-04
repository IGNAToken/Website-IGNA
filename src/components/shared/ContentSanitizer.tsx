import DOMPurify from 'dompurify'

const ContentSanitizer = ({ content }: { content: string }) => {
  const sanitizedContent = DOMPurify.sanitize(content)

  return (
    <div
      className='article-content text-white [&_*]:text-white'
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}

export default ContentSanitizer
