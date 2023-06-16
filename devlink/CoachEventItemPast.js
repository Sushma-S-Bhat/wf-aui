import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachEventItemPast.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-171":{"id":"e-171","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"84a17d19-c3fb-bdb4-8066-95c71e49b83c"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686892615918},"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"84a17d19-c3fb-bdb4-8066-95c71e49b83c"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686892615919}},"actionLists":{"a-107":{"id":"a-107","title":"event-accordion-open","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content-wrapper","selectorGuids":["12dd1c00-3bf2-6f2d-2145-c5762e62e430"]},"heightValue":0,"widthUnit":"px","heightUnit":"px"}},{"id":"a-107-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".view-details-button","selectorGuids":["f167aac1-090f-ce6e-73c5-b42f5ae1291d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-107-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content-wrapper","selectorGuids":["12dd1c00-3bf2-6f2d-2145-c5762e62e430"]},"widthUnit":"PX","heightUnit":"AUTO"}},{"id":"a-107-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".view-details-button","selectorGuids":["f167aac1-090f-ce6e-73c5-b42f5ae1291d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"createdOn":1686892621295,"useFirstGroupAsInitialState":true},"a-108":{"id":"a-108","title":"event-accordion-close","actionItemGroups":[{"actionItems":[{"id":"a-108-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content-wrapper","selectorGuids":["12dd1c00-3bf2-6f2d-2145-c5762e62e430"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px"}},{"id":"a-108-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".view-details-button","selectorGuids":["f167aac1-090f-ce6e-73c5-b42f5ae1291d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"createdOn":1686892621295,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachEventItemPast({
  as: _Component = _Builtin.Block,
  textName = "Name",
  textDate = "23/25/2023",
  textDay = "Thursday",
  onClickViewDetails = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "events-detail-wrapper", "past")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "events-detail-content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "event-image-name-wrap")}
          tag="div"
        >
          <_Builtin.Image
            width="auto"
            height="auto"
            loading="lazy"
            src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/648748fa7efb76cc139d21d9_calendar.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-event-name")}
            tag="div"
          >
            {textName}
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
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "view-details-button")}
        tag="div"
        {...onClickViewDetails}
      >
        {"View details"}
      </_Builtin.Block>
    </_Component>
  );
}
