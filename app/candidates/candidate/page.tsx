"use client";
import {
  CandidateDetailHeader,
  CandidateDetailLayout,
  CandidateDetailTabs,
  CoachJobCard,
  CoachJobDescription,
} from "@/devlink";

import React from "react";
import newjobs from "../../../data/jobs";

export default function FloatingNav() {
  const [jobDetail, setJobDetail] = React.useState(false);
  const [joblist, setJobList] = React.useState(true);
  const [slotDetail, setSlotDetail] = React.useState(<></>);

  function showJobDetail(obj: any) {
    setJobDetail(true);
    setJobList(false);
    setSlotDetail(
      <CoachJobDescription
        textJobTitle={obj.job_title}
        isJobRemote={obj.job_is_remote}
        isJobOnsite={!obj.job_is_remote}
        imageCompanyLogo={obj.employer_logo}
        isInWishList={obj.wishlist}
        onClickCompanyWebsite={{ onClick: () => alert("clicked") }}
        isNotInWishlist={!obj.wishlist}
        textOriginalJobLink={obj.job_apply_link}
        textJobDescription={obj.job_description}
        textJobType={obj.job_employment_type}
        textCompanyAndLocation={`${obj.employer_name},${obj.job_city},${obj.job_state},${obj.job_country}`}
        textPostedDay={obj.job_posted_at_datetime_utc}
      />
    );
  }
  function back() {
    setJobDetail(false);
    setJobList(true);
  }
  return (
    <>
      <CandidateDetailLayout
        slotCandidateDetailHeader={
          <CandidateDetailHeader
            textRole="Marketing Executive"
            textName="Sudhakar"
            textApplied={1}
            textOffered={3}
            textEmail={"sudhakaranbhat@gmail.com"}
            textJobPreference={
              "looking for marketing executive role at bangalore"
            }
            textPhone={"90660077754"}
          />
        }
        slotCandidateDetailTabs={
          <CandidateDetailTabs
            isJobEmpty={false}
            isJobLoading={false}
            isJobListing={joblist}
            isJobDetail={jobDetail}
            slotJobDetails={slotDetail}
            onClickBack={{
              onClick: () => {
                back();
              },
            }}
            slotCoachJobCard={newjobs.map((obj, i) => (
              <CoachJobCard
                textJobTitle={obj.job_title}
                imageLogo={obj.employer_logo?obj.employer_logo:''}
                textJobType={obj.job_employment_type}
                textLocation={`${obj.employer_name},${obj.job_city},${obj.job_state},${obj.job_country}`}
                textPostedDate={obj.job_posted_at_datetime_utc}
                onClickJobCard={{ onClick: () => showJobDetail(obj) }}
              />
            ))}
          />
        }
      />
    </>
  );
}
