import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachActivityItem.module.css";

export function CoachActivityItem({
  as: _Component = _Builtin.Block,
  activity = "Activity display here.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "job-activity-item-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-activity-item")}
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          src="https://uploads-ssl.webflow.com/6480adc68b3db6d220ed1734/64818140ceb2782715fa1915_timeline-circle.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
          tag="div"
        >
          {activity}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "job-activity-item-separator")}
        tag="div"
      />
    </_Component>
  );
}
