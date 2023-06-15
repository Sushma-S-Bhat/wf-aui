'use client'
import { InteractionsProvider, createIX2Engine,CoachNavbar} from "@/devlink";

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <CoachNavbar isDashboard={true} />
          {children}
        </>
    )
}