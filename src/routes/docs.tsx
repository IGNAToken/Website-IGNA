import ErrorBlockWithLink from '@/components/shared/ErrorBlockWithLink'
import FileCard from '@/components/shared/FileCard'
import Loader from '@/components/shared/Loader'
import useDocs from '@/hooks/useDocs'
import { createFileRoute } from '@tanstack/react-router'
import { FileText } from 'lucide-react'

export const Route = createFileRoute('/docs')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, error } = useDocs()
  if (isLoading)
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
    )
  if (error) return <div>Error: {error.message}</div>
  if (!data?.length)
    return <ErrorBlockWithLink link='/' linkText='Back to home' status={404} error={error || 'Page not found'} />
  return (
    <div className='container mx-auto px-4 md:px-6 py-8'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
          Documents & Certificates
        </h1>
        <p className='text-lg text-white/75 max-w-2xl mx-auto leading-relaxed'>
          Access all official documents, certificates, and legal documentation related to IGNA Token and SlavkaSK n.o.
        </p>
      </div>

      {/* Documents Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {data.map((doc) => (
          <FileCard
            key={doc.id}
            href={doc.file.url}
            title={doc.name}
            description={doc.description}
            fileType={doc.file_extension}
            icon={<FileText className='size-8' />}
          />
        ))}
      </div>

      {/* Footer Note */}
      <div className='text-center mt-12 p-6 bg-white/5 rounded-xl border border-white/10 max-w-2xl mx-auto'>
        <p className='text-sm text-white/60'>
          All documents are provided in PDF format and can be downloaded for your records. For any questions regarding
          these documents, please contact our team.
        </p>
      </div>
    </div>
  )
}
