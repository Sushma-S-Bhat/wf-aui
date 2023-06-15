'use client'
import { InteractionsProvider, createIX2Engine, DashboardNav, Page404 } from "@/devlink";
import NavCompInternal from "../../comp/DashboardNavigation"
import SlotPlaceholderList from "../../comp/SlotPlaceholderList"
import SingleSlotPlaceholder from "../../comp/SingleSlotPlaceholder"

export default function Home() {
  return (
    <>
      <InteractionsProvider createEngine={createIX2Engine}>
        <NavCompInternal />
        <Page404 />
      </InteractionsProvider>
    </>
  )
}