'use client'
import '@/devlink/global.css'
import './globals.css'
import { DevLinkProvider } from '@/devlink'
import { LinkRenderer, ImageRenderer } from "@/components/renderers"; // My custom components


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
      {/* <DevLinkProvider renderLink={LinkRenderer} renderImage={ImageRenderer}> */}
      <DevLinkProvider  renderLink={LinkRenderer}>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  )
}
