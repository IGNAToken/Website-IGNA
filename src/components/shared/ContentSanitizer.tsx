import DOMPurify from 'dompurify'

const ContentSanitizer = ({ content }: { content: string }) => {
  const sanitizedContent = DOMPurify.sanitize(content)

  return (
    <div
      className='prose prose-lg prose-invert max-w-none text-white [&_*]:text-white  [&_ol]:list-decimal [&_ul]:list-disc [&_li]:marker:text-white [&_ol_li]:marker:text-white [&_ul_li]:marker:text-white
        [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-6 [&_h1]:mt-8
        [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-4 [&_h2]:mt-6
        [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mb-3 [&_h3]:mt-5
        [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-white [&_h4]:mb-2 [&_h4]:mt-4
        [&_p]:text-white/90 [&_p]:leading-relaxed [&_p]:mb-4
        [&_ul]:text-white/90 [&_ul]:mb-4 [&_ul]:pl-6
        [&_ol]:text-white/90 [&_ol]:mb-4 [&_ol]:pl-6
        [&_li]:mb-2 [&_li]:leading-relaxed
        [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:bg-primary/5 [&_blockquote]:rounded-r-lg [&_blockquote]:text-white/80 [&_blockquote]:italic [&_blockquote]:my-6
        [&_code]:bg-white/10 [&_code]:px-2 [&_code]:py-1 [&_blockquote]:rounded [&_code]:text-primary [&_code]:text-sm [&_code]:font-mono
        [&_pre]:bg-white/5 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-white/90
        [&_a]:text-primary [&_a]:hover:text-primary/80 [&_a]:underline [&_a]:underline-offset-2
        [&_img]:rounded-lg [&_img]:my-6 [&_img]:shadow-lg
        [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
        [&_th]:border [&_th]:border-white/20 [&_th]:px-4 [&_th]:py-2 [&_th]:bg-white/5 [&_th]:text-white [&_th]:font-semibold
        [&_td]:border [&_td]:border-white/20 [&_td]:px-4 [&_td]:py-2 [&_td]:text-white/90
        [&_strong]:text-white [&_strong]:font-semibold
        [&_em]:text-white/80 [&_em]:italic'
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}

export default ContentSanitizer
