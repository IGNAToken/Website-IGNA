import FileCard from '@/components/shared/FileCard'
import { createFileRoute } from '@tanstack/react-router'
import { FileText } from 'lucide-react'

export const Route = createFileRoute('/docs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-2 md:px-0'>
      <h1 className='text-2xl font-bold my-4'>Documents & Certificates</h1>
      <p className='text-md font-light text-white/75 max-w-xl mb-4'>
        Here you can find all the documents and certificates related to IGNA Token & SlavkaSK n.o.
      </p>
      <div className='flex flex-wrap gap-4'>
        <FileCard href='/docs/whitepaper.pdf' title='Whitepaper' icon={<FileText className='size-8' />} />
        <FileCard href='/docs/IMG_20250604_0002.pdf' title='XXX' icon={<FileText className='size-8' />} />
        <FileCard href='/docs/IMG_20250604_0003.pdf' title='XXX' icon={<FileText className='size-8' />} />
        <FileCard href='/docs/IMG_20250604_0007.pdf' title='XXX' icon={<FileText className='size-8' />} />
        <FileCard href='/docs/IMG_20250604_0008.pdf' title='XXX' icon={<FileText className='size-8' />} />
        <FileCard href='/docs/SKM_C22725060513540.pdf' title='XXX' icon={<FileText className='size-8' />} />
      </div>
    </div>
  )
}
