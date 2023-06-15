'use client'
import '@/devlink/global.css'
import './globals.css'
import { DevLinkProvider } from '@/devlink'
import { LinkRenderer} from "@/components/renderers"; // My custom components


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <DevLinkProvider  renderLink={LinkRenderer}>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  )
}
