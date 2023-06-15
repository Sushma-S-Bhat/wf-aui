import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachJobCard.module.css";

export function CoachJobCard({
  as: _Component = _Builtin.Block,
  textJobTitle = "Job Title",
  textLocation = "Location",
  textPostedDate = "Posted day",
  textJobType = "Job-Type",
  imageLogo = "",
  onClickJobCard = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "coach-job-card")}
      tag="div"
      {...onClickJobCard}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-job-logo-wrap")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "coach-job-logo")}
          width="auto"
          height="auto"
          loading="lazy"
          src={imageLogo}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "job-avatar-letter")}
          tag="div"
        >
          {textLocation}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-job-detail-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-detail-row-stack", "no-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold", "line-clamp-1")}
            tag="div"
          >
            {textJobTitle}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "job-type-chip")}
            tag="div"
          >
            {textJobType}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
          tag="div"
        >
          {textLocation}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
          tag="div"
        >
          {textPostedDate}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "hide")}
        value="%3Cstyle%3E%0A.line-clamp-1%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%201%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A.job-avatar-letter%3Afirst-letter%7B%0Afont-size%3A40px%20!important%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
