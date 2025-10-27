import FileCard from '@/components/shared/FileCard'
import { createFileRoute } from '@tanstack/react-router'
import { FileText, Award, Shield } from 'lucide-react'

export const Route = createFileRoute('/docs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container mx-auto px-4 md:px-6 py-8'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
          Documents & Certificates
        </h1>
        <p className='text-lg text-white/75 max-w-2xl mx-auto leading-relaxed'>
          Access all official documents, certificates, and legal documentation
          related to IGNA Token and SlavkaSK n.o.
        </p>
      </div>

      {/* Documents Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        <FileCard
          href='/docs/whitepaper.pdf'
          title='IGNA Whitepaper'
          description='Complete technical documentation and project overview'
          fileType='PDF'
          icon={<FileText className='size-8' />}
        />

        <FileCard
          href='/docs/IMG_20250604_0002.pdf'
          title='Legal Certificate'
          description='Official legal documentation and compliance certificate'
          fileType='PDF'
          icon={<Award className='size-8' />}
        />

        <FileCard
          href='/docs/IMG_20250604_0003.pdf'
          title='Registration Document'
          description='Company registration and incorporation documents'
          fileType='PDF'
          icon={<Shield className='size-8' />}
        />

        <FileCard
          href='/docs/IMG_20250604_0007.pdf'
          title='Financial Report'
          description='Audited financial statements and reports'
          fileType='PDF'
          icon={<FileText className='size-8' />}
        />

        <FileCard
          href='/docs/IMG_20250604_0008.pdf'
          title='Compliance Document'
          description='Regulatory compliance and audit documentation'
          fileType='PDF'
          icon={<Shield className='size-8' />}
        />

        <FileCard
          href='/docs/SKM_C22725060513540.pdf'
          title='Official Certificate'
          description='Government-issued certificate and authorization'
          fileType='PDF'
          icon={<Award className='size-8' />}
        />
      </div>

      {/* Footer Note */}
      <div className='text-center mt-12 p-6 bg-white/5 rounded-xl border border-white/10 max-w-2xl mx-auto'>
        <p className='text-sm text-white/60'>
          All documents are provided in PDF format and can be downloaded for
          your records. For any questions regarding these documents, please
          contact our support team.
        </p>
      </div>
    </div>
  )
}
