import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/$lang')({
  component: LangLayout,
  beforeLoad: ({ params }) => {
    const { lang } = params
    // Validate language parameter
    if (lang && !['en', 'hu', 'sk'].includes(lang)) {
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
  const { i18n } = useTranslation()

  useEffect(() => {
    // Change language when route parameter changes
    if (lang && ['en', 'hu', 'sk'].includes(lang)) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  return <Outlet />
}
