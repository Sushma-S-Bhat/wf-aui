import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CoachSideDashboardLayout.module.css";

export function CoachSideDashboardLayout({
  as: _Component = _Builtin.Block,
  isRequestEmpty = false,
  isRequestLoading = true,
  slotRequestCandidateListItem,
  isTimelineEmpty = true,
  slotCoachActivityItem,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "coach-dashboard-layout")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-dashboard-content-left")}
        id={_utils.cx(
          _styles,
          "w-node-a342ea11-9456-0294-b754-bd49b79f37f3-b79f37f2"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-xl-bold")}
          tag="div"
        >
          {"Requests"}
        </_Builtin.Block>
        {isRequestEmpty ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "empty-events")}
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
              {"There are no requests yet"}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        {isRequestLoading ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "stack-column")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-request-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "candidate-name-wrap",
                  "skeleton"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f37fd-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-embed", "skeleton")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "request-day-grid")}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3801-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"days text"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"text block"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-request-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "candidate-name-wrap",
                  "skeleton"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3807-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-embed", "skeleton")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "request-day-grid")}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f380b-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"days text"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"text block"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-request-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "candidate-name-wrap",
                  "skeleton"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3811-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-embed", "skeleton")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "request-day-grid")}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3815-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"days text"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"text block"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-request-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "candidate-name-wrap",
                  "skeleton"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f381b-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-embed", "skeleton")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "request-day-grid")}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f381f-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"days text"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"text block"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-request-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "candidate-name-wrap",
                  "skeleton"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3825-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-embed", "skeleton")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "request-day-grid")}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3829-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"days text"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"text block"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-request-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "candidate-name-wrap",
                  "skeleton"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f382f-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-embed", "skeleton")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "request-day-grid")}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3833-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"days text"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"text block"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "candidate-request-stack")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "candidate-name-wrap",
                  "skeleton"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f3839-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon-embed", "skeleton")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-skeleton")}
                  tag="div"
                >
                  {"Name"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "request-day-grid")}
                id={_utils.cx(
                  _styles,
                  "w-node-a342ea11-9456-0294-b754-bd49b79f383d-b79f37f2"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"days text"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-md-skeleton")}
                  tag="div"
                >
                  {"text block"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "stack-column")}
          tag="div"
        >
          {slotRequestCandidateListItem}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-dashboard-content-right")}
        id={_utils.cx(
          _styles,
          "w-node-a342ea11-9456-0294-b754-bd49b79f3843-b79f37f2"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-xl-bold")}
          tag="div"
        >
          {"Your Activity"}
        </_Builtin.Block>
        {isTimelineEmpty ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "empty-events")}
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
              {"Your Activity timeline seems empty."}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-activity-stack")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "hide")}
            value="%3Cstyle%3E%0A.job-activity-item-wrap%3Anth-last-child(1)%20.job-activity-item-separator%7B%0Adisplay%3Anone%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-activity-slot")}
            tag="div"
          >
            {slotCoachActivityItem}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
