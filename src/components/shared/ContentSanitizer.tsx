
import DOMPurify from 'dompurify'

const ContentSanitizer = ({ content }: { content: string }) => {
  const sanitizedContent = DOMPurify.sanitize(content)

  return <div className='article-content' dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
}

export default ContentSanitizer
