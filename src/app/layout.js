import Navbar from '@/components/Navbar'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: '🚀 | IT NOTICE',
  description: 'พวกกู it',
  openGraph: {
    title: '🚀 | IT NOTICE',
    description: 'พวกกู it',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#03001C]">
        <Toaster />
        <div className="flex flex-col w-full min-h-screen">
          <Navbar />
          <main className="flex-grow mt-7">
            <div className="container max-w-7xl mx-auto px-5">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>

  )
}