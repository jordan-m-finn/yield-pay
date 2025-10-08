// TODO: Implement root layout with Convex and wagmi providers
// Sprint 1, Day 1-2
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YieldPay - Your Subscriptions, Paid Forever',
  description: 'Deposit once. Your crypto generates yield. The yield pays your subscriptions automatically.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: Add ConvexProvider */}
        {/* TODO: Add WagmiConfig */}
        {/* TODO: Add RainbowKitProvider */}
        {children}
      </body>
    </html>
  )
}
