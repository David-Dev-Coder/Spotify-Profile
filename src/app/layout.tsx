import SessionProvider from '@/providers/sessionProvider'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Spotify Profile',
    description: 'Spotify Profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
        <html lang="pt-br">
            <body className="bg-zinc-900 text-zinc-50 font-body">
                {children}
            </body>
        </html>
    </SessionProvider>
  )
}
