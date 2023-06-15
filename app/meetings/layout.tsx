'use client'
import React from 'react'
import { CoachNavbar } from '@/devlink'
export default function Meeting({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
  return (<>
    <CoachNavbar isMeeting={true}/>
    {children}
    </>
  )
}
