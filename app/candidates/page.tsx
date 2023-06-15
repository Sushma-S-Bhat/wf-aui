'use client'
import React from 'react'
import { CandidatesListing,CandidateListingCard } from '@/devlink'
import candidates from '../../data/candidates'
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
            //onClickCandidateCard={{onClick:()=>{window.location='/candidates/candidate'}}}
          />
        ))}
      />
  )
}
