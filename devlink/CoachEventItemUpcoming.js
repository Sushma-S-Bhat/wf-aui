import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachEventItemUpcoming.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-171":{"id":"e-171","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"84a17d19-c3fb-bdb4-8066-95c71e49b83c"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686892615918},"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"84a17d19-c3fb-bdb4-8066-95c71e49b83c"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686892615919}},"actionLists":{"a-107":{"id":"a-107","title":"event-accordion-open","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content-wrapper","selectorGuids":["12dd1c00-3bf2-6f2d-2145-c5762e62e430"]},"heightValue":0,"widthUnit":"px","heightUnit":"px"}},{"id":"a-107-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".view-details-button","selectorGuids":["f167aac1-090f-ce6e-73c5-b42f5ae1291d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-107-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content-wrapper","selectorGuids":["12dd1c00-3bf2-6f2d-2145-c5762e62e430"]},"widthUnit":"PX","heightUnit":"AUTO"}},{"id":"a-107-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".view-details-button","selectorGuids":["f167aac1-090f-ce6e-73c5-b42f5ae1291d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"createdOn":1686892621295,"useFirstGroupAsInitialState":true},"a-108":{"id":"a-108","title":"event-accordion-close","actionItemGroups":[{"actionItems":[{"id":"a-108-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"locked":false,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-content-wrapper","selectorGuids":["12dd1c00-3bf2-6f2d-2145-c5762e62e430"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px"}},{"id":"a-108-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".view-details-button","selectorGuids":["f167aac1-090f-ce6e-73c5-b42f5ae1291d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"createdOn":1686892621295,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachEventItemUpcoming({
  as: _Component = _Builtin.Block,
  textDate = "Date",
  textDay = "Day",
  textName = "Name",
  onClickJoinMeeting = {},
  slotEventQa,
  imageProfilePic = "",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "events-detail-block")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "events-detail-wrapper")}
        data-w-id="84a17d19-c3fb-bdb4-8066-95c71e49b83c"
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
              className={_utils.cx(_styles, "event-avatar")}
              loading="lazy"
              width="auto"
              height="auto"
              src={imageProfilePic}
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
              className={_utils.cx(
                _styles,
                "text-md-default",
                "text-color-grey"
              )}
              tag="div"
            >
              {textDate}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-md-default",
                "text-color-grey"
              )}
              tag="div"
            >
              {textDay}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "meeting-buttons-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button", "meeting")}
            tag="div"
            {...onClickJoinMeeting}
          >
            {"Join"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "view-details-button")}
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "link-embed-icon")}
              value="%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.6877%201.01198C10.9033%200.796349%2011.2179%200.84005%2011.3905%201.10959C11.5438%201.34918%2011.5332%201.68656%2011.3775%201.91002L11.3124%201.98807L6.31237%206.98807C6.15584%207.14459%205.94285%207.16695%205.77019%207.05515L5.68767%206.98807L0.687671%201.98807C0.47204%201.77244%200.437079%201.37913%200.609584%201.10959C0.762922%200.869999%201.02857%200.808848%201.23715%200.949662L1.31237%201.01198L6.00002%205.69877L10.6877%201.01198Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion-content-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "event-detail-accordion-content")}
          tag="div"
        >
          {slotEventQa}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
