import React from 'react'
import { CoachNavbar } from '@/devlink'
export default function Profile({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  return (<>
    <CoachNavbar isProfile={true}/>
    {children}
    </>
  )
}
