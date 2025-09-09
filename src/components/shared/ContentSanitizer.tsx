import DOMPurify from 'dompurify'

const ContentSanitizer = ({ content }: { content: string }) => {
  const sanitizedContent = DOMPurify.sanitize(content)

  return (
    <div
      className='article-content text-white [&_*]:text-white [&_ol]:list-decimal [&_ul]:list-disc [&_li]:marker:text-white [&_ol_li]:marker:text-white [&_ul_li]:marker:text-white'
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}

export default ContentSanitizer
