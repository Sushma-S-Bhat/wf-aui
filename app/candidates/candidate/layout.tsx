import React from 'react'

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
