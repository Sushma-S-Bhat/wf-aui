import { CoachNavbar } from '@/devlink'
import React from 'react'

export default function Candidates({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  return (<>
    <CoachNavbar isCandidate={true}/>
    {children}
    </>
  )
}
