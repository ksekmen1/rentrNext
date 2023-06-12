import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rentr',
  description: 'Rentr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

          <Modal actionLabel='Submit' title='Udlej din lort' isOpen/>
          <Navbar />
        
        {children}
        </body>

    </html>
  )
}
