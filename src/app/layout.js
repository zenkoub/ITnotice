import Navbar from '@/components/Navbar'
import './globals.css'

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
      <body className="dark">
        <div className="flex flex-col w-full min-h-screen">
          <Navbar />
          <main className="flex-auto mt-7">
            <div className="container max-w-7xl mx-auto px-5">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>

  )
}