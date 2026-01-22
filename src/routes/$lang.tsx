import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useEffect } from 'react'
import i18n from '@/i18n/config'

export const Route = createFileRoute('/$lang')({
  component: LangLayout,
  beforeLoad: ({ params }) => {
    const { lang } = params
    // Validate language parameter
    if (lang && !['en', 'hu', 'sk', 'uae'].includes(lang)) {
      throw redirect({
        to: '/$lang/landing',
        params: { lang: 'en' },
        replace: true,
      })
    }
  },
})

function LangLayout() {
  const { lang } = Route.useParams()

  useEffect(() => {
    // Change language when route parameter changes
    if (lang && ['en', 'hu', 'sk', 'uae'].includes(lang)) {
      i18n.changeLanguage(lang)
    }
  }, [lang])

  return <Outlet />
}
