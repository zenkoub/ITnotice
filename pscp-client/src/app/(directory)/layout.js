import Navbar from '@/components/Navbar'

export const metadata = {
  title: '🚀 | IT NOTICE',
  description: 'พวกกู it',
  openGraph: {
    title: '🚀 | IT NOTICE',
    description: 'พวกกู it',
  },
}

export default function layout({ children }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-auto mt-7">
        <div className="container max-w-lg md:max-w-2xl mx-auto px-5">
          {children}
        </div>
      </main>
    </div>

  )
}
