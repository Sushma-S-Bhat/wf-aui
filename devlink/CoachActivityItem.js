import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachActivityItem.module.css";

export function CoachActivityItem({
  as: _Component = _Builtin.Block,
  textActivity = "This is some default text block.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "job-activity-item-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "job-activity-item")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "activity-timeline-dot")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-md-default",
            "text-color-dark-grey"
          )}
          tag="div"
        >
          {textActivity}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "job-activity-item-separator")}
        tag="div"
      />
    </_Component>
  );
}
