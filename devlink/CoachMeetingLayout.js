import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachMeetingLayout.module.css";

export function CoachMeetingLayout({
  as: _Component = _Builtin.Block,
  slotCoachEventTabs,
}) {
  return (
    <_Component tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-meeting-layout")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "metting-content-left")}
          id={_utils.cx(
            _styles,
            "w-node-_2dce358d-ee05-a15d-8214-2cbc6f0b8337-6f0b8335"
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {"Calender"}
            <br />
            {"‍"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "slot-coach-event-tab")}
          id={_utils.cx(
            _styles,
            "w-node-_2dce358d-ee05-a15d-8214-2cbc6f0b833c-6f0b8335"
          )}
          tag="div"
        >
          {slotCoachEventTabs}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
