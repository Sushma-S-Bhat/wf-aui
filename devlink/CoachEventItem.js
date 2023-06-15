import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachEventItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-127":{"id":"e-127","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-128"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".view-details-button","originalId":"648866f69e38283a42aff747|5ff0b12f-4737-cc5e-490f-4cf0677972d0","appliesTo":"CLASS"},"targets":[{"selector":".view-details-button","originalId":"648866f69e38283a42aff747|5ff0b12f-4737-cc5e-490f-4cf0677972d0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686662285946}},"actionLists":{"a-90":{"id":"a-90","title":"eventdetail-popup-open","actionItemGroups":[{"actionItems":[{"id":"a-90-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".event-detail-popup-wrap","selectorGuids":["e7e699d7-6164-6bb4-8c94-166254a2ca94"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686662321267}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachEventItem({
  as: _Component = _Builtin.Block,
  textDate = "Date",
  textDay = "Day",
  textName = "Name",
  onClickViewDetails = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "events-detail-wrapper")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "events-detail-content")}
        tag="div"
      >
        <_Builtin.Image
          width="auto"
          height="auto"
          loading="lazy"
          src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/648748fa7efb76cc139d21d9_calendar.svg"
        />
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-event-name")}
            tag="div"
          >
            {textName}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "view-details-button")}
            tag="div"
            {...onClickViewDetails}
          >
            {"View details"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "event-date-day-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
          tag="div"
        >
          {textDate}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-md-default", "text-color-grey")}
          tag="div"
        >
          {textDay}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
