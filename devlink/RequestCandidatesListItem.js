import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./RequestCandidatesListItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function RequestCandidatesListItem({
  as: _Component = _Builtin.Block,
  name = "Name",
  daysText = "days text",
  postedDate = "text block",
  onClickCandidate = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "candidate-request-stack")}
      tag="div"
      {...onClickCandidate}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "candidate-name-wrap")}
        id={_utils.cx(
          _styles,
          "w-node-_7a799230-2b50-e065-a3a5-2bdcd9f31407-d9f31406"
        )}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icon-embed")}
          value="%3Csvg%20width%3D%2227%22%20height%3D%2218%22%20viewBox%3D%220%200%2027%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3.15917%2017.2315H20.4649C21.2909%2017.2315%2021.9238%2017.0147%2022.3633%2016.5811C22.8086%2016.1533%2023.0312%2015.5264%2023.0312%2014.7002V7.51954L21.6161%208.93458V14.7706C21.6161%2015.1339%2021.5165%2015.4151%2021.3173%2015.6143C21.1181%2015.8135%2020.8369%2015.9131%2020.4736%2015.9131H3.15038C2.78711%2015.9131%202.50586%2015.8135%202.30663%2015.6143C2.10742%2015.4151%202.0078%2015.1339%202.0078%2014.7706V7.37891C2.0078%206.61718%202.38867%206.23633%203.15038%206.23633H17.4766L18.8036%204.91797H3.15917C2.333%204.91797%201.69726%205.13184%201.25195%205.55958C0.812499%205.9873%200.592773%206.61718%200.592773%207.44922V14.7002C0.592773%2015.5264%200.812499%2016.1533%201.25195%2016.5811C1.69726%2017.0147%202.333%2017.2315%203.15917%2017.2315ZM5.25976%2012.3272C5.60546%2012.3272%205.90137%2012.2041%206.14746%2011.958C6.39355%2011.7119%206.51659%2011.416%206.51659%2011.0703C6.51659%2010.7246%206.39355%2010.4287%206.14746%2010.1826C5.90137%209.93653%205.60546%209.81347%205.25976%209.81347C4.91407%209.81347%204.61816%209.93653%204.37207%2010.1826C4.12597%2010.4287%204.00292%2010.7246%204.00292%2011.0703C4.00292%2011.416%204.12597%2011.7119%204.37207%2011.958C4.61816%2012.2041%204.91405%2012.3272%205.25976%2012.3272ZM9.04784%2012.3272C9.39355%2012.3272%209.68945%2012.2041%209.93554%2011.958C10.1816%2011.7119%2010.3047%2011.416%2010.3047%2011.0703C10.3047%2010.7246%2010.1816%2010.4287%209.93554%2010.1826C9.68945%209.93653%209.39355%209.81347%209.04784%209.81347C8.70215%209.81347%208.40625%209.93653%208.16016%2010.1826C7.91407%2010.4287%207.79101%2010.7246%207.79101%2011.0703C7.79101%2011.416%207.91405%2011.7119%208.16016%2011.958C8.40625%2012.2041%208.70215%2012.3272%209.04784%2012.3272ZM12.8359%2012.3272C13.1816%2012.3272%2013.4775%2012.2041%2013.7236%2011.958C13.9697%2011.7119%2014.0928%2011.416%2014.0928%2011.0703C14.0928%2010.7246%2013.9697%2010.4287%2013.7236%2010.1826C13.4775%209.93653%2013.1816%209.81347%2012.8359%209.81347C12.4902%209.81347%2012.1943%209.93653%2011.9482%2010.1826C11.7022%2010.4287%2011.5791%2010.7246%2011.5791%2011.0703C11.5791%2011.416%2011.7022%2011.7119%2011.9482%2011.958C12.1943%2012.2041%2012.4902%2012.3272%2012.8359%2012.3272ZM15.8242%2011.5273L17.6172%2010.7363L25.3603%203.00196L24.1212%201.78028L16.3955%209.51466L15.5518%2011.2461C15.5107%2011.3223%2015.5254%2011.3984%2015.5958%2011.4746C15.666%2011.5508%2015.7422%2011.5684%2015.8242%2011.5273ZM26.0107%202.34278L26.67%201.6748C26.8222%201.5166%2026.8984%201.34083%2026.8984%201.14746C26.9043%200.948247%2026.8311%200.772462%2026.6787%200.620122L26.4678%200.409181C26.3272%200.268556%2026.1573%200.204103%2025.9581%200.215822C25.7647%200.22754%2025.5947%200.306643%2025.4482%200.453127L24.7891%201.10351L26.0107%202.34278Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-lg-bold")}
          tag="div"
        >
          {name}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "request-day-grid")}
        id={_utils.cx(
          _styles,
          "w-node-_7a799230-2b50-e065-a3a5-2bdcd9f3140b-d9f31406"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm-default", "text-color-grey")}
          tag="div"
        >
          {daysText}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-sm-default", "text-color-grey")}
          tag="div"
        >
          {postedDate}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
