'use client'
import React from 'react'
import { CandidatesListing,CandidateListingCard } from '@/devlink'
const candidates = [
    { textRole: "Manager", textApplied: 2, textOffered: 3, textName: "Sushma" },
    { textRole: "Manager", textApplied: 2, textOffered: 3, textName: "Krishna" },
    { textRole: "Manager", textApplied: 2, textOffered: 3, textName: "Radha" },
    { textRole: "Manager", textApplied: 2, textOffered: 3, textName: "Durga" },
    { textRole: "Manager", textApplied: 2, textOffered: 3, textName: "Shivani" },
    { textRole: "Manager", textApplied: 2, textOffered: 3, textName: "Shiva" },
  ];
export default function CandidateListing() {
  return (
    <CandidatesListing
        isEmpty={false}
        isLoading={false}
        slotSearch={<div>Search Input Form</div>}
        slotCandidateListingCard={candidates.map((i) => (
          <CandidateListingCard
            textName={i.textName}
            textApplied={i.textApplied}
            textOffered={i.textOffered}
            textRole={i.textRole}
            onClickCandidateCard={{onClick:()=>{window.location='/candidates/candidate'}}}
          />
        ))}
      />
  )
}
