import DOMPurify from 'dompurify'

const ContentSanitizer = ({ content }: { content: string }) => {
  const sanitizedContent = DOMPurify.sanitize(content)

  return <div className='article-content !text-white/75' dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
}

export default ContentSanitizer
