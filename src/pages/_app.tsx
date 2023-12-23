import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/Slider.css'
import '../styles/Pages.css'
import { FileProvider } from '@/contexts/FileContext'
import i18n from '@/i18n'
import { I18nextProvider } from 'react-i18next'
import ResponsiveAppBar from '@/components/AppBar'

const contactData: AppInfo = {
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  name: process.env.NEXT_PUBLIC_NAME || ''
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <FileProvider>
        <ResponsiveAppBar phone={contactData.phone} email={contactData.email} name={contactData.name}/>
        <Component {...pageProps} />
      </FileProvider>
    </I18nextProvider>
    )
}
