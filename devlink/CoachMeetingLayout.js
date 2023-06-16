import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachMeetingLayout.module.css";

export function CoachMeetingLayout({
  as: _Component = _Builtin.Block,
  slotCoachEventTabs,
  isCalendlyNotConnected = true,
  isLoading = true,
  slotCalender,
  isCalendlyConnected = true,
  onClickConnectCalendly = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "coach-meeting-page")} tag="div">
      {isCalendlyConnected ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-meeting-layout")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "meeting-content-left")}
            id={_utils.cx(
              _styles,
              "w-node-_2dce358d-ee05-a15d-8214-2cbc6f0b8337-6f0b8335"
            )}
            tag="div"
          >
            {slotCalender ?? (
              <_Builtin.Block tag="div">
                {"Calender"}
                <br />
                {"‍"}
              </_Builtin.Block>
            )}
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
      ) : null}
      {isCalendlyNotConnected ? (
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "meeting-empty-state")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/6487485113eb43195de49c2e_empty.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Calendly not connected yet"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "button", "is-green")}
              tag="div"
              {...onClickConnectCalendly}
            >
              <_Builtin.Block tag="div">{"Connect Calendly"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {isLoading ? (
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "meeting-loading-state")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Loading...."}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
