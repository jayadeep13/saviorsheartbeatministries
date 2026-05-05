import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Savior's Heartbeat Ministries | Vijayawada, India",
  description: "Preaching and Preparing People for HIS Coming. A premier Christian ministry in Vijayawada, India — serving communities through evangelism, charity, and spiritual transformation since 1976.",
  keywords: "Saviors Heartbeat Ministries, Christian Ministry India, Vijayawada Church, Telugu Ministry, Evangelism India",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
