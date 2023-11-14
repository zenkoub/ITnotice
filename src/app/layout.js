import Navbar from '@/components/Navbar'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Container from '@/components/Container'

export const metadata = {
  title: '🚀 | IT NOTICE',
  description: 'IT NOTICE FOR IT STUDENT',
  openGraph: {
    title: '🚀 | IT NOTICE',
    description: 'IT NOTICE FOR IT STUDENT',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#03001C] text-white">
        <Toaster />
        <Navbar />
        <main className="flex-auto mt-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}