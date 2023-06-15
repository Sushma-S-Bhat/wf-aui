import React from 'react'
import { CoachNavbar } from '@/devlink'

export default function Candidate({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  return (<>
    {children}
    </>
  )
}
