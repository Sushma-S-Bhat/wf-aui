import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachDashboardLayout.module.css";

export function CoachDashboardLayout({
  as: _Component = _Builtin.Block,
  isActivityLoading = true,
  isActivityEmpty = true,
  slotCoachActivityItem,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "coach-dashboard-page")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coachdashboard-layout")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-content-left")}
          id={_utils.cx(
            _styles,
            "w-node-cb3f9983-7aab-61f1-8568-0998478e1782-478e1780"
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Dashboard left"}</_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-dashboard-activity")}
          id={_utils.cx(
            _styles,
            "w-node-cb3f9983-7aab-61f1-8568-0998478e1785-478e1780"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-xl-bold")}
            tag="div"
          >
            {"Your Activity"}
          </_Builtin.Block>
          {isActivityEmpty ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-empty-state")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/6487485113eb43195de49c2e_empty.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-md-bold")}
                tag="div"
              >
                {"You do not have any activity yet"}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          {isActivityLoading ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "activity-loading-state")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-bold")}
                tag="div"
              >
                {"Loading...."}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className={_utils.cx(_styles, "job-activity-stack")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-activity-stack")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "hide")}
                value="%3Cstyle%3E%0A.job-activity-item-wrap%3Anth-last-child(1)%20.job-activity-item-separator%20%2C.job-activity-item-wrap%3Alast-child%20.job-activity-item-separator%7B%0Adisplay%3Anone%3B%0A%7D%0A%3C%2Fstyle%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "job-activity-stack")}
                tag="div"
              >
                {slotCoachActivityItem}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
