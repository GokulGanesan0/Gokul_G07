import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import CustomCursor from "@/components/CustomCursor"
import SmoothScroll from "@/components/SmoothScroll"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Gokul Ganesan - IT Infrastructure',
  description: 'Portfolio of Gokul Ganesan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans bg-[#0a0a0a] text-white antialiased cursor-default`}>
        <CustomCursor />
        <SmoothScroll>
          {/* Noise Overlay */}
          <div className="noise-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.03]"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
