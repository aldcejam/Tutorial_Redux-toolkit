"use client"
import { Provider } from 'react-redux'
import { Store } from '@/redux.config/store'
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Provider store={Store}>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
