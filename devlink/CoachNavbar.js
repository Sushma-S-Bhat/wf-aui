import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachNavbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099616},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"},"targets":[{"selector":".coaching-price-card-wrapper","originalId":"82111d76-4463-1f07-af21-45601f24cd61","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686056099617},"e-55":{"id":"e-55","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136088723},"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"8a0b6e39-5699-2947-07af-a29294bcc272","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686136088724},"e-57":{"id":"e-57","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-99"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686156183325},"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-link-2","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef6888","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686156183325},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-links","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef687e","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-links","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef687e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686156517360},"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-90"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dashboard-nav-links","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef687e","appliesTo":"CLASS"},"targets":[{"selector":".dashboard-nav-links","originalId":"fd65d4c7-81c1-19b2-48fa-24a98bef687e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686156517361},"e-141":{"id":"e-141","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-142"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"a6fc547b-822f-50be-d7ac-b419d0f9905e"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686808820576},"e-142":{"id":"e-142","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"a6fc547b-822f-50be-d7ac-b419d0f9905e"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686808820577},"e-143":{"id":"e-143","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"a6fc547b-822f-50be-d7ac-b419d0f99056"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686808890070},"e-144":{"id":"e-144","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-143"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"a6fc547b-822f-50be-d7ac-b419d0f99056"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686808890070}},"actionLists":{"a-10":{"id":"a-10","title":"Coach Pricing Hover In","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-sm-default","selectorGuids":["6f00d157-c0f8-129f-d4e0-87ff1eea0754"]},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-10-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-10-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-11":{"id":"a-11","title":"Coach Pricing Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"3a86b552","rValue":248,"bValue":249,"gValue":249,"aValue":1}},{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"80449ce7","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-11-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}},{"id":"a-11-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"82111d76-4463-1f07-af21-45601f24cd61"},"globalSwatchId":"e42b2e06","rValue":47,"bValue":65,"gValue":57,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686056103359},"a-21":{"id":"a-21","title":"Nav link Hover In","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"8a0b6e39-5699-2947-07af-a29294bcc272"},"value":1,"unit":""}},{"id":"a-21-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon.fill","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8","9e0971c9-a3aa-0d14-344b-5994f1575e58"]},"value":"flex"}},{"id":"a-21-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686136092829},"a-22":{"id":"a-22","title":"Nav link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"58bd2bb4-d389-1a87-8b91-39dabf22447e"},"value":0.7,"unit":""}},{"id":"a-22-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon.fill","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8","9e0971c9-a3aa-0d14-344b-5994f1575e58"]},"value":"none"}},{"id":"a-22-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dashboard-nav-icon","selectorGuids":["d74d5f00-5c96-5a0c-b03b-e28c4931aba8"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686136092829},"a-73":{"id":"a-73","title":"Avatar [open]","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".profile-items-list.width-profile","selectorGuids":["98c8bc0a-5b5e-05df-c590-fd77ce726e58","07a1fb61-89f8-5c8a-a6c0-5147bd7871f1"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686512102986},"a-74":{"id":"a-74","title":"Avatar [close]","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".profile-items-list.width-profile","selectorGuids":["98c8bc0a-5b5e-05df-c590-fd77ce726e58","07a1fb61-89f8-5c8a-a6c0-5147bd7871f1"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686512102986},"a-69":{"id":"a-69","title":"Notification[open]","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".notification-items-list.width-notifications","selectorGuids":["5464b987-a1a7-4497-e015-fe533f646c6d","5464b987-a1a7-4497-e015-fe533f646c70"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686511800457},"a-70":{"id":"a-70","title":"Notification[close]","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".notification-items-list.width-notifications","selectorGuids":["5464b987-a1a7-4497-e015-fe533f646c6d","5464b987-a1a7-4497-e015-fe533f646c70"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686511800457}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachNavbar({
  as: _Component = _Builtin.NavbarWrapper,
  isDashboard = false,
  isCandidate = false,
  isMeeting = false,
  isProfile = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "coach-navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-nav-container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/648708b2f7d889bb3eb81d30_Frame%205.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "coach-navmenu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-nav-menu")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "coach-nav-links")}
              button={false}
              options={{
                href: "/dashboard",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "link-embed-icon", "nav")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22currentcolor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.48462%207.22656C1.98983%207.22656%201.61743%207.10156%201.36743%206.85156C1.11743%206.59635%200.992432%206.21094%200.992432%205.69531V2.20312C0.992432%201.6875%201.11743%201.30469%201.36743%201.05469C1.61743%200.804688%201.98983%200.679688%202.48462%200.679688H6.04712C6.54191%200.679688%206.91431%200.804688%207.16431%201.05469C7.41431%201.30469%207.53931%201.6875%207.53931%202.20312V5.69531C7.53931%206.21094%207.41431%206.59635%207.16431%206.85156C6.91431%207.10156%206.54191%207.22656%206.04712%207.22656H2.48462ZM2.50024%206.125H6.02368C6.1591%206.125%206.26066%206.08854%206.32837%206.01562C6.40129%205.94271%206.43774%205.83594%206.43774%205.69531V2.20312C6.43774%202.0625%206.40129%201.95833%206.32837%201.89062C6.26066%201.81771%206.1591%201.78125%206.02368%201.78125H2.50024C2.36483%201.78125%202.26326%201.81771%202.19556%201.89062C2.12785%201.95833%202.09399%202.0625%202.09399%202.20312V5.69531C2.09399%205.83594%202.12785%205.94271%202.19556%206.01562C2.26326%206.08854%202.36483%206.125%202.50024%206.125ZM10.3284%207.22656C9.82837%207.22656%209.45337%207.10156%209.20337%206.85156C8.95337%206.59635%208.82837%206.21094%208.82837%205.69531V2.20312C8.82837%201.6875%208.95337%201.30469%209.20337%201.05469C9.45337%200.804688%209.82837%200.679688%2010.3284%200.679688H13.8831C14.3778%200.679688%2014.7502%200.804688%2015.0002%201.05469C15.2502%201.30469%2015.3752%201.6875%2015.3752%202.20312V5.69531C15.3752%206.21094%2015.2502%206.59635%2015.0002%206.85156C14.7502%207.10156%2014.3778%207.22656%2013.8831%207.22656H10.3284ZM10.344%206.125H13.8674C14.0081%206.125%2014.1096%206.08854%2014.1721%206.01562C14.2398%205.94271%2014.2737%205.83594%2014.2737%205.69531V2.20312C14.2737%202.0625%2014.2398%201.95833%2014.1721%201.89062C14.1096%201.81771%2014.0081%201.78125%2013.8674%201.78125H10.344C10.2034%201.78125%2010.0992%201.81771%2010.0315%201.89062C9.96379%201.95833%209.92993%202.0625%209.92993%202.20312V5.69531C9.92993%205.83594%209.96379%205.94271%2010.0315%206.01562C10.0992%206.08854%2010.2034%206.125%2010.344%206.125ZM2.48462%2015.0625C1.98983%2015.0625%201.61743%2014.9375%201.36743%2014.6875C1.11743%2014.4375%200.992432%2014.0547%200.992432%2013.5391V10.0391C0.992432%209.52865%201.11743%209.14844%201.36743%208.89844C1.61743%208.64323%201.98983%208.51562%202.48462%208.51562H6.04712C6.54191%208.51562%206.91431%208.64323%207.16431%208.89844C7.41431%209.14844%207.53931%209.52865%207.53931%2010.0391V13.5391C7.53931%2014.0547%207.41431%2014.4375%207.16431%2014.6875C6.91431%2014.9375%206.54191%2015.0625%206.04712%2015.0625H2.48462ZM2.50024%2013.9609H6.02368C6.1591%2013.9609%206.26066%2013.9245%206.32837%2013.8516C6.40129%2013.7839%206.43774%2013.6797%206.43774%2013.5391V10.0469C6.43774%209.90104%206.40129%209.79427%206.32837%209.72656C6.26066%209.65365%206.1591%209.61719%206.02368%209.61719H2.50024C2.36483%209.61719%202.26326%209.65365%202.19556%209.72656C2.12785%209.79427%202.09399%209.90104%202.09399%2010.0469V13.5391C2.09399%2013.6797%202.12785%2013.7839%202.19556%2013.8516C2.26326%2013.9245%202.36483%2013.9609%202.50024%2013.9609ZM10.3284%2015.0625C9.82837%2015.0625%209.45337%2014.9375%209.20337%2014.6875C8.95337%2014.4375%208.82837%2014.0547%208.82837%2013.5391V10.0391C8.82837%209.52865%208.95337%209.14844%209.20337%208.89844C9.45337%208.64323%209.82837%208.51562%2010.3284%208.51562H13.8831C14.3778%208.51562%2014.7502%208.64323%2015.0002%208.89844C15.2502%209.14844%2015.3752%209.52865%2015.3752%2010.0391V13.5391C15.3752%2014.0547%2015.2502%2014.4375%2015.0002%2014.6875C14.7502%2014.9375%2014.3778%2015.0625%2013.8831%2015.0625H10.3284ZM10.344%2013.9609H13.8674C14.0081%2013.9609%2014.1096%2013.9245%2014.1721%2013.8516C14.2398%2013.7839%2014.2737%2013.6797%2014.2737%2013.5391V10.0469C14.2737%209.90104%2014.2398%209.79427%2014.1721%209.72656C14.1096%209.65365%2014.0081%209.61719%2013.8674%209.61719H10.344C10.2034%209.61719%2010.0992%209.65365%2010.0315%209.72656C9.96379%209.79427%209.92993%209.90104%209.92993%2010.0469V13.5391C9.92993%2013.6797%209.96379%2013.7839%2010.0315%2013.8516C10.0992%2013.9245%2010.2034%2013.9609%2010.344%2013.9609Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-link-text")}
                tag="div"
              >
                {"Dashboard"}
              </_Builtin.Block>
              {isDashboard ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav-active-link")}
                  tag="div"
                />
              ) : null}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "coach-nav-links")}
              button={false}
              options={{
                href: "/candidates",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "link-embed-icon", "nav")}
                value="%3Csvg%20width%3D%2231%22%20height%3D%2216%22%20viewBox%3D%220%200%2031%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.7737%2015.2266C9.49764%2015.2266%208.85962%2014.8099%208.85962%2013.9766C8.85962%2013.4661%209.01587%2012.9219%209.32837%2012.3438C9.64087%2011.7656%2010.0914%2011.2214%2010.6799%2010.7109C11.2737%2010.1953%2011.9898%209.77604%2012.8284%209.45312C13.6721%209.13021%2014.6252%208.96875%2015.6877%208.96875C16.745%208.96875%2017.693%209.13021%2018.5315%209.45312C19.3752%209.77604%2020.0914%2010.1953%2020.6799%2010.7109C21.2737%2011.2214%2021.7268%2011.7656%2022.0393%2012.3438C22.3518%2012.9219%2022.5081%2013.4661%2022.5081%2013.9766C22.5081%2014.8099%2021.87%2015.2266%2020.594%2015.2266H10.7737ZM10.4065%2014.0469H20.969C21.068%2014.0469%2021.1383%2014.0312%2021.1799%2014C21.2268%2013.9688%2021.2502%2013.9115%2021.2502%2013.8281C21.2502%2013.5104%2021.1278%2013.1432%2020.8831%2012.7266C20.6435%2012.3047%2020.2867%2011.8984%2019.8127%2011.5078C19.3388%2011.1172%2018.7555%2010.7943%2018.0627%2010.5391C17.3752%2010.2786%2016.5836%2010.1484%2015.6877%2010.1484C14.7919%2010.1484%2013.9976%2010.2786%2013.3049%2010.5391C12.6122%2010.7943%2012.0289%2011.1172%2011.5549%2011.5078C11.081%2011.8984%2010.7216%2012.3047%2010.4768%2012.7266C10.2372%2013.1432%2010.1174%2013.5104%2010.1174%2013.8281C10.1174%2013.9115%2010.1383%2013.9688%2010.1799%2014C10.2268%2014.0312%2010.3023%2014.0469%2010.4065%2014.0469ZM15.6877%207.89062C15.068%207.89062%2014.5028%207.72656%2013.9924%207.39844C13.482%207.0651%2013.0732%206.6224%2012.7659%206.07031C12.4638%205.51302%2012.3127%204.90104%2012.3127%204.23438C12.3127%203.57292%2012.4638%202.97135%2012.7659%202.42969C13.0732%201.88802%2013.482%201.45573%2013.9924%201.13281C14.5028%200.809896%2015.068%200.648438%2015.6877%200.648438C16.3127%200.648438%2016.8805%200.807292%2017.3909%201.125C17.9013%201.44271%2018.3075%201.8724%2018.6096%202.41406C18.9117%202.95052%2019.0627%203.55208%2019.0627%204.21875C19.0627%204.89062%2018.9091%205.50521%2018.6018%206.0625C18.2997%206.61458%2017.8935%207.05729%2017.3831%207.39062C16.8726%207.72396%2016.3075%207.89062%2015.6877%207.89062ZM15.6877%206.71094C16.0732%206.71094%2016.4247%206.59896%2016.7424%206.375C17.0653%206.15104%2017.3232%205.85156%2017.5159%205.47656C17.7086%205.09635%2017.8049%204.67708%2017.8049%204.21875C17.8049%203.76562%2017.7086%203.35938%2017.5159%203C17.3284%202.63542%2017.0732%202.34896%2016.7502%202.14062C16.4325%201.93229%2016.0784%201.82812%2015.6877%201.82812C15.3023%201.82812%2014.9482%201.9349%2014.6252%202.14844C14.3075%202.36198%2014.0523%202.65104%2013.8596%203.01562C13.6669%203.375%2013.5706%203.78125%2013.5706%204.23438C13.5706%204.69271%2013.6669%205.10938%2013.8596%205.48438C14.0575%205.85938%2014.3153%206.15885%2014.6331%206.38281C14.956%206.60156%2015.3075%206.71094%2015.6877%206.71094ZM2.33618%2015.2266C1.81014%2015.2266%201.41431%2015.1172%201.14868%2014.8984C0.883057%2014.6849%200.750244%2014.362%200.750244%2013.9297C0.750244%2013.2786%200.90389%2012.6562%201.21118%2012.0625C1.51847%2011.4688%201.94295%2010.9375%202.48462%2010.4688C3.03149%2010%203.6617%209.63021%204.37524%209.35938C5.09399%209.08854%205.86222%208.95312%206.67993%208.95312C7.11222%208.95312%207.53149%208.99219%207.93774%209.07031C8.34399%209.14323%208.73462%209.25521%209.10962%209.40625C9.48983%209.55208%209.8492%209.73698%2010.1877%209.96094C10.0107%2010.0807%209.8492%2010.2109%209.70337%2010.3516C9.55754%2010.487%209.42472%2010.6328%209.30493%2010.7891C9.04972%2010.638%208.78149%2010.513%208.50024%2010.4141C8.2242%2010.3151%207.93254%2010.2396%207.62524%2010.1875C7.32316%2010.1354%207.00806%2010.1094%206.67993%2010.1094C6.03931%2010.1094%205.43254%2010.2135%204.85962%2010.4219C4.2867%2010.625%203.77889%2010.9036%203.33618%2011.2578C2.89347%2011.612%202.54451%2012.013%202.28931%2012.4609C2.03931%2012.9089%201.91431%2013.375%201.91431%2013.8594C1.91431%2013.9323%201.93254%2013.9844%201.96899%2014.0156C2.00545%2014.0521%202.06535%2014.0703%202.14868%2014.0703H7.86743C7.84139%2014.3099%207.88826%2014.5365%208.00806%2014.75C8.12785%2014.9635%208.28149%2015.1224%208.46899%2015.2266H2.33618ZM6.68774%208.0625C6.15129%208.0625%205.6617%207.91927%205.21899%207.63281C4.77629%207.34115%204.42212%206.95312%204.15649%206.46875C3.89087%205.98438%203.75806%205.44792%203.75806%204.85938C3.75285%204.28646%203.88306%203.76042%204.14868%203.28125C4.41431%202.80208%204.76847%202.42188%205.21118%202.14062C5.6591%201.85417%206.15129%201.71094%206.68774%201.71094C7.22941%201.71094%207.7216%201.85156%208.16431%202.13281C8.60701%202.41406%208.95858%202.79167%209.21899%203.26562C9.48462%203.73958%209.61743%204.26562%209.61743%204.84375C9.61743%205.4375%209.48462%205.97917%209.21899%206.46875C8.95337%206.95312%208.5992%207.34115%208.15649%207.63281C7.71379%207.91927%207.2242%208.0625%206.68774%208.0625ZM6.68774%206.89844C7.00545%206.89844%207.29972%206.80729%207.57056%206.625C7.84139%206.44271%208.05754%206.19531%208.21899%205.88281C8.38045%205.57031%208.46118%205.22396%208.46118%204.84375C8.46118%204.47396%208.38045%204.14062%208.21899%203.84375C8.06274%203.54688%207.8492%203.3125%207.57837%203.14062C7.31274%202.96354%207.01587%202.875%206.68774%202.875C6.36483%202.875%206.06795%202.96354%205.79712%203.14062C5.53149%203.31771%205.31795%203.55729%205.15649%203.85938C5.00024%204.16146%204.92212%204.49479%204.92212%204.85938C4.92212%205.23438%205.00285%205.57812%205.16431%205.89062C5.32576%206.19792%205.53931%206.44271%205.80493%206.625C6.07576%206.80729%206.37004%206.89844%206.68774%206.89844ZM29.0315%2015.2266H22.8987C23.0862%2015.1224%2023.2398%2014.9635%2023.3596%2014.75C23.4846%2014.5365%2023.5341%2014.3099%2023.5081%2014.0703H29.2268C29.3049%2014.0703%2029.3622%2014.0521%2029.3987%2014.0156C29.4403%2013.9844%2029.4612%2013.9323%2029.4612%2013.8594C29.4612%2013.375%2029.3336%2012.9089%2029.0784%2012.4609C28.8232%2012.013%2028.4742%2011.612%2028.0315%2011.2578C27.5888%2010.9036%2027.081%2010.625%2026.5081%2010.4219C25.9351%2010.2135%2025.331%2010.1094%2024.6956%2010.1094C24.3674%2010.1094%2024.0497%2010.1354%2023.7424%2010.1875C23.4403%2010.2396%2023.1487%2010.3151%2022.8674%2010.4141C22.5914%2010.513%2022.3258%2010.638%2022.0706%2010.7891C21.9456%2010.6328%2021.8101%2010.487%2021.6643%2010.3516C21.5237%2010.2109%2021.3648%2010.0807%2021.1877%209.96094C21.5263%209.73698%2021.8831%209.55208%2022.2581%209.40625C22.6331%209.25521%2023.0237%209.14323%2023.4299%209.07031C23.8414%208.99219%2024.2633%208.95312%2024.6956%208.95312C25.5133%208.95312%2026.2789%209.08854%2026.9924%209.35938C27.7112%209.63021%2028.3414%2010%2028.8831%2010.4688C29.4299%2010.9375%2029.857%2011.4688%2030.1643%2012.0625C30.4716%2012.6562%2030.6252%2013.2786%2030.6252%2013.9297C30.6252%2014.362%2030.4924%2014.6849%2030.2268%2014.8984C29.9612%2015.1172%2029.5627%2015.2266%2029.0315%2015.2266ZM24.6877%208.0625C24.1513%208.0625%2023.6617%207.91927%2023.219%207.63281C22.7763%207.34115%2022.4221%206.95312%2022.1565%206.46875C21.8909%205.97917%2021.7581%205.4375%2021.7581%204.84375C21.7581%204.26562%2021.8883%203.73958%2022.1487%203.26562C22.4143%202.79167%2022.7685%202.41406%2023.2112%202.13281C23.6539%201.85156%2024.1461%201.71094%2024.6877%201.71094C25.2242%201.71094%2025.7138%201.85417%2026.1565%202.14062C26.5992%202.42188%2026.9534%202.80208%2027.219%203.28125C27.4846%203.76042%2027.6174%204.28646%2027.6174%204.85938C27.6174%205.44792%2027.4846%205.98438%2027.219%206.46875C26.9534%206.95312%2026.5992%207.34115%2026.1565%207.63281C25.7138%207.91927%2025.2242%208.0625%2024.6877%208.0625ZM24.6877%206.89844C25.0055%206.89844%2025.2971%206.80729%2025.5627%206.625C25.8336%206.44271%2026.0497%206.19792%2026.2112%205.89062C26.3726%205.57812%2026.4534%205.23438%2026.4534%204.85938C26.4534%204.49479%2026.3726%204.16146%2026.2112%203.85938C26.0549%203.55729%2025.8414%203.31771%2025.5706%203.14062C25.3049%202.96354%2025.0107%202.875%2024.6877%202.875C24.3596%202.875%2024.0601%202.96354%2023.7893%203.14062C23.5237%203.3125%2023.3101%203.54688%2023.1487%203.84375C22.9924%204.14062%2022.9143%204.47396%2022.9143%204.84375C22.9143%205.22396%2022.995%205.57031%2023.1565%205.88281C23.318%206.19531%2023.5341%206.44271%2023.8049%206.625C24.0758%206.80729%2024.37%206.89844%2024.6877%206.89844Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-link-text")}
                tag="div"
              >
                {"My Candidates"}
              </_Builtin.Block>
              {isCandidate ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav-active-link")}
                  tag="div"
                />
              ) : null}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "coach-nav-links")}
              button={false}
              options={{
                href: "/meetings",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "link-embed-icon", "nav")}
                value="%3Csvg%20width%3D%2217%22%20height%3D%2218%22%20viewBox%3D%220%200%2017%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.68774%2017.0078C7.57316%2017.0078%206.52368%2016.7943%205.53931%2016.3672C4.55493%2015.9453%203.68774%2015.3594%202.93774%2014.6094C2.18774%2013.8594%201.5992%2012.9948%201.17212%2012.0156C0.750244%2011.0312%200.539307%209.97917%200.539307%208.85938C0.539307%207.74479%200.750244%206.69792%201.17212%205.71875C1.5992%204.73438%202.18514%203.86719%202.92993%203.11719C3.67993%202.36719%204.54712%201.78125%205.53149%201.35938C6.51587%200.932292%207.56535%200.71875%208.67993%200.71875C9.79451%200.71875%2010.844%200.932292%2011.8284%201.35938C12.818%201.78125%2013.6851%202.36719%2014.4299%203.11719C15.1799%203.86719%2015.7685%204.73438%2016.1956%205.71875C16.6226%206.69792%2016.8362%207.74479%2016.8362%208.85938C16.8362%209.97917%2016.6226%2011.0312%2016.1956%2012.0156C15.7685%2012.9948%2015.1799%2013.8594%2014.4299%2014.6094C13.6851%2015.3594%2012.8206%2015.9453%2011.8362%2016.3672C10.8518%2016.7943%209.80233%2017.0078%208.68774%2017.0078ZM8.68774%2015.2188C9.56795%2015.2188%2010.3909%2015.0547%2011.1565%2014.7266C11.9273%2014.3984%2012.6044%2013.9453%2013.1877%2013.3672C13.7711%2012.7839%2014.2268%2012.1094%2014.5549%2011.3438C14.8831%2010.5729%2015.0471%209.74479%2015.0471%208.85938C15.0471%207.97917%2014.8805%207.15625%2014.5471%206.39062C14.219%205.61979%2013.7633%204.94271%2013.1799%204.35938C12.6018%203.77604%2011.9273%203.32031%2011.1565%202.99219C10.3909%202.66406%209.56535%202.5%208.67993%202.5C7.79972%202.5%206.9742%202.66406%206.20337%202.99219C5.43774%203.32031%204.76326%203.77604%204.17993%204.35938C3.60181%204.94271%203.14868%205.61979%202.82056%206.39062C2.49764%207.15625%202.33618%207.97917%202.33618%208.85938C2.33618%209.74479%202.49764%2010.5729%202.82056%2011.3438C3.14868%2012.1094%203.60441%2012.7839%204.18774%2013.3672C4.77108%2013.9453%205.44556%2014.3984%206.21118%2014.7266C6.98201%2015.0547%207.80754%2015.2188%208.68774%2015.2188ZM5.92993%2012.6016C5.49243%2012.6016%205.1591%2012.4896%204.92993%2012.2656C4.70597%2012.0417%204.59399%2011.7135%204.59399%2011.2812V6.42969C4.59399%205.9974%204.70597%205.66927%204.92993%205.44531C5.1591%205.22135%205.49243%205.10938%205.92993%205.10938H11.4377C11.8752%205.10938%2012.206%205.22135%2012.4299%205.44531C12.6591%205.66927%2012.7737%205.9974%2012.7737%206.42969V11.2812C12.7737%2011.7135%2012.6591%2012.0417%2012.4299%2012.2656C12.206%2012.4896%2011.8752%2012.6016%2011.4377%2012.6016H5.92993ZM5.95337%2011.7266H11.4143C11.5706%2011.7266%2011.6877%2011.6875%2011.7659%2011.6094C11.844%2011.5312%2011.8831%2011.4115%2011.8831%2011.25V7.60156C11.8831%207.26823%2011.7164%207.10156%2011.3831%207.10156H5.97681C5.64868%207.10156%205.48462%207.26823%205.48462%207.60156V11.25C5.48462%2011.4115%205.52368%2011.5312%205.60181%2011.6094C5.67993%2011.6875%205.79712%2011.7266%205.95337%2011.7266ZM7.89868%208.52344C7.81014%208.52344%207.75024%208.50781%207.71899%208.47656C7.68774%208.4401%207.67212%208.38021%207.67212%208.29688V8.01562C7.67212%207.92708%207.68774%207.86719%207.71899%207.83594C7.75024%207.80469%207.81014%207.78906%207.89868%207.78906H8.17993C8.26326%207.78906%208.32056%207.80469%208.35181%207.83594C8.38826%207.86719%208.40649%207.92708%208.40649%208.01562V8.29688C8.40649%208.38021%208.38826%208.4401%208.35181%208.47656C8.32056%208.50781%208.26326%208.52344%208.17993%208.52344H7.89868ZM9.19556%208.52344C9.10701%208.52344%209.04451%208.50781%209.00806%208.47656C8.97681%208.4401%208.96118%208.38021%208.96118%208.29688V8.01562C8.96118%207.92708%208.97681%207.86719%209.00806%207.83594C9.04451%207.80469%209.10701%207.78906%209.19556%207.78906H9.46899C9.55754%207.78906%209.61743%207.80469%209.64868%207.83594C9.68514%207.86719%209.70337%207.92708%209.70337%208.01562V8.29688C9.70337%208.38021%209.68514%208.4401%209.64868%208.47656C9.61743%208.50781%209.55754%208.52344%209.46899%208.52344H9.19556ZM10.4924%208.52344C10.3987%208.52344%2010.3336%208.50781%2010.2971%208.47656C10.2659%208.4401%2010.2502%208.38021%2010.2502%208.29688V8.01562C10.2502%207.86458%2010.331%207.78906%2010.4924%207.78906H10.7581C10.9143%207.78906%2010.9924%207.86458%2010.9924%208.01562V8.29688C10.9924%208.44792%2010.9143%208.52344%2010.7581%208.52344H10.4924ZM6.60962%209.78906C6.45337%209.78906%206.37524%209.71615%206.37524%209.57031V9.28906C6.37524%209.13802%206.45337%209.0625%206.60962%209.0625H6.88306C7.03931%209.0625%207.11743%209.13802%207.11743%209.28906V9.57031C7.11743%209.65365%207.0992%209.71094%207.06274%209.74219C7.03149%209.77344%206.9716%209.78906%206.88306%209.78906H6.60962ZM7.89868%209.78906C7.81014%209.78906%207.75024%209.77344%207.71899%209.74219C7.68774%209.71094%207.67212%209.65365%207.67212%209.57031V9.28906C7.67212%209.20052%207.68774%209.14062%207.71899%209.10938C7.75024%209.07812%207.81014%209.0625%207.89868%209.0625H8.17993C8.26326%209.0625%208.32056%209.07812%208.35181%209.10938C8.38826%209.14062%208.40649%209.20052%208.40649%209.28906V9.57031C8.40649%209.65365%208.38826%209.71094%208.35181%209.74219C8.32056%209.77344%208.26326%209.78906%208.17993%209.78906H7.89868ZM9.19556%209.78906C9.10701%209.78906%209.04451%209.77344%209.00806%209.74219C8.97681%209.71094%208.96118%209.65365%208.96118%209.57031V9.28906C8.96118%209.20052%208.97681%209.14062%209.00806%209.10938C9.04451%209.07812%209.10701%209.0625%209.19556%209.0625H9.46899C9.55754%209.0625%209.61743%209.07812%209.64868%209.10938C9.68514%209.14062%209.70337%209.20052%209.70337%209.28906V9.57031C9.70337%209.65365%209.68514%209.71094%209.64868%209.74219C9.61743%209.77344%209.55754%209.78906%209.46899%209.78906H9.19556ZM10.4924%209.78906C10.3987%209.78906%2010.3336%209.77344%2010.2971%209.74219C10.2659%209.71094%2010.2502%209.65365%2010.2502%209.57031V9.28906C10.2502%209.13802%2010.331%209.0625%2010.4924%209.0625H10.7581C10.9143%209.0625%2010.9924%209.13802%2010.9924%209.28906V9.57031C10.9924%209.71615%2010.9143%209.78906%2010.7581%209.78906H10.4924ZM6.60962%2011.0625C6.45337%2011.0625%206.37524%2010.987%206.37524%2010.8359V10.5547C6.37524%2010.4036%206.45337%2010.3281%206.60962%2010.3281H6.88306C6.9716%2010.3281%207.03149%2010.3464%207.06274%2010.3828C7.0992%2010.4141%207.11743%2010.4714%207.11743%2010.5547V10.8359C7.11743%2010.987%207.03931%2011.0625%206.88306%2011.0625H6.60962ZM7.89868%2011.0625C7.81014%2011.0625%207.75024%2011.0469%207.71899%2011.0156C7.68774%2010.9844%207.67212%2010.9245%207.67212%2010.8359V10.5547C7.67212%2010.4714%207.68774%2010.4141%207.71899%2010.3828C7.75024%2010.3464%207.81014%2010.3281%207.89868%2010.3281H8.17993C8.26326%2010.3281%208.32056%2010.3464%208.35181%2010.3828C8.38826%2010.4141%208.40649%2010.4714%208.40649%2010.5547V10.8359C8.40649%2010.9245%208.38826%2010.9844%208.35181%2011.0156C8.32056%2011.0469%208.26326%2011.0625%208.17993%2011.0625H7.89868ZM9.19556%2011.0625C9.10701%2011.0625%209.04451%2011.0469%209.00806%2011.0156C8.97681%2010.9844%208.96118%2010.9245%208.96118%2010.8359V10.5547C8.96118%2010.4714%208.97681%2010.4141%209.00806%2010.3828C9.04451%2010.3464%209.10701%2010.3281%209.19556%2010.3281H9.46899C9.55754%2010.3281%209.61743%2010.3464%209.64868%2010.3828C9.68514%2010.4141%209.70337%2010.4714%209.70337%2010.5547V10.8359C9.70337%2010.9245%209.68514%2010.9844%209.64868%2011.0156C9.61743%2011.0469%209.55754%2011.0625%209.46899%2011.0625H9.19556Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-link-text")}
                tag="div"
              >
                {"My Meetings"}
              </_Builtin.Block>
              {isMeeting ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav-active-link")}
                  tag="div"
                />
              ) : null}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "coach-nav-links")}
              button={false}
              options={{
                href: "/profile",
              }}
            >
              {isProfile ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav-active-link")}
                  tag="div"
                />
              ) : null}
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "link-embed-icon", "nav")}
                value="%3Csvg%20width%3D%2215%22%20height%3D%2216%22%20viewBox%3D%220%200%2015%2016%22%20fill%3D%22currentcolor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.77368%2015.2266C1.49764%2015.2266%200.859619%2014.8099%200.859619%2013.9766C0.859619%2013.4661%201.01587%2012.9219%201.32837%2012.3438C1.64087%2011.7656%202.09139%2011.2214%202.67993%2010.7109C3.27368%2010.1953%203.98983%209.77604%204.82837%209.45312C5.67212%209.13021%206.62524%208.96875%207.68774%208.96875C8.74504%208.96875%209.69295%209.13021%2010.5315%209.45312C11.3752%209.77604%2012.0914%2010.1953%2012.6799%2010.7109C13.2737%2011.2214%2013.7268%2011.7656%2014.0393%2012.3438C14.3518%2012.9219%2014.5081%2013.4661%2014.5081%2013.9766C14.5081%2014.8099%2013.87%2015.2266%2012.594%2015.2266H2.77368ZM2.40649%2014.0469H12.969C13.068%2014.0469%2013.1383%2014.0312%2013.1799%2014C13.2268%2013.9688%2013.2502%2013.9115%2013.2502%2013.8281C13.2502%2013.5104%2013.1278%2013.1432%2012.8831%2012.7266C12.6435%2012.3047%2012.2867%2011.8984%2011.8127%2011.5078C11.3388%2011.1172%2010.7555%2010.7943%2010.0627%2010.5391C9.37524%2010.2786%208.58358%2010.1484%207.68774%2010.1484C6.79191%2010.1484%205.99764%2010.2786%205.30493%2010.5391C4.61222%2010.7943%204.02889%2011.1172%203.55493%2011.5078C3.08097%2011.8984%202.7216%2012.3047%202.47681%2012.7266C2.23722%2013.1432%202.11743%2013.5104%202.11743%2013.8281C2.11743%2013.9115%202.13826%2013.9688%202.17993%2014C2.22681%2014.0312%202.30233%2014.0469%202.40649%2014.0469ZM7.68774%208C7.06795%208%206.50285%207.83594%205.99243%207.50781C5.48201%207.17448%205.07316%206.73177%204.76587%206.17969C4.46379%205.6224%204.31274%205.01042%204.31274%204.34375C4.31274%203.68229%204.46379%203.08073%204.76587%202.53906C5.07316%201.9974%205.48201%201.5651%205.99243%201.24219C6.50285%200.919271%207.06795%200.757812%207.68774%200.757812C8.31274%200.757812%208.88045%200.916667%209.39087%201.23438C9.90129%201.55208%2010.3075%201.98177%2010.6096%202.52344C10.9117%203.0599%2011.0627%203.66146%2011.0627%204.32812C11.0627%205%2010.9091%205.61458%2010.6018%206.17188C10.2997%206.72396%209.89347%207.16667%209.38306%207.5C8.87264%207.83333%208.30754%208%207.68774%208ZM7.68774%206.82031C8.07316%206.82031%208.42472%206.70833%208.74243%206.48438C9.06535%206.26042%209.32316%205.96094%209.51587%205.58594C9.70858%205.20573%209.80493%204.78646%209.80493%204.32812C9.80493%203.875%209.70858%203.46875%209.51587%203.10938C9.32837%202.74479%209.07316%202.45833%208.75024%202.25C8.43254%202.04167%208.07837%201.9375%207.68774%201.9375C7.30233%201.9375%206.94816%202.04427%206.62524%202.25781C6.30754%202.47135%206.05233%202.76042%205.85962%203.125C5.66691%203.48438%205.57056%203.89062%205.57056%204.34375C5.57056%204.80208%205.66691%205.21875%205.85962%205.59375C6.05754%205.96875%206.31535%206.26823%206.63306%206.49219C6.95597%206.71094%207.30754%206.82031%207.68774%206.82031Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-link-text")}
                tag="div"
              >
                {"My Profile"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-nav-end")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "notification-dropdown")}
            data-w-id="a6fc547b-822f-50be-d7ac-b419d0f99056"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "notification-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "coach-nav-links", "bell-icon")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "bell-button", "coach")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "link-embed-icon", "nav")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2215%22%20viewBox%3D%220%200%2016%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.9466%2012C14.7502%2012%2015.3806%2011.2844%2015.2741%2010.4852C15.0618%208.91451%2014.4812%207.72396%2013.3103%207.41313C13.2977%207.21592%2013.2801%207.00535%2013.2566%206.78385C13.1611%205.88288%2012.9888%204.98064%2012.7185%204.1312C11.9111%201.59359%2010.39%200%207.99992%200C5.60987%200%204.08872%201.59359%203.2813%204.1312C3.01102%204.98064%202.83878%205.88288%202.74322%206.78385C2.71973%207.00535%202.70213%207.21592%202.68958%207.41313C1.51859%207.72394%200.938046%208.91434%200.725923%2010.4841C0.619205%2011.2844%201.24959%2012%202.05325%2012H5.33325C5.33325%2013.4749%206.52506%2014.6667%207.99992%2014.6667C9.47477%2014.6667%2010.6666%2013.4749%2010.6666%2012H13.9466ZM11.9307%206.92448C11.9827%207.41491%2011.9999%207.79294%2011.9999%208C11.9999%208.36819%2012.2984%208.66667%2012.6666%208.66667C13.3529%208.66667%2013.7853%209.42448%2013.9466%2010.6667C13.9466%2010.6667%202.04767%2010.6594%202.0474%2010.6614C2.21456%209.42448%202.6469%208.66667%203.33325%208.66667C3.70144%208.66667%203.99992%208.36819%203.99992%208C3.99992%207.79294%204.0171%207.41491%204.06912%206.92448C4.15585%206.1067%204.31173%205.29019%204.55187%204.53547C5.20278%202.48975%206.30663%201.33333%207.99992%201.33333C9.6932%201.33333%2010.7971%202.48975%2011.448%204.53547C11.6881%205.29019%2011.844%206.1067%2011.9307%206.92448ZM7.99992%2013.3333C8.49523%2013.3333%208.92593%2013.0657%209.15587%2012.6667H6.84396C7.0739%2013.0657%207.5046%2013.3333%207.99992%2013.3333Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-count")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notification-text-badge")}
                    tag="div"
                  >
                    {"1"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "notification-items-list",
                "width-notifications"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "notifications-list")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "notification-list-wrapper-2")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "notifications-wrapper-2")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "notification-title-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-sm-default")}
                        tag="div"
                      >
                        {"Notifications"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "clear-all-link-2")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-sm-default")}
                          tag="div"
                        >
                          {"Clear all"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "slot-notification-wrapper-2",
                        "flex-notifications"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "slots-notifiaction")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "tick-wrapper")}
                          tag="div"
                        >
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(_styles, "tick-icons")}
                            value="%3Csvg%20width%3D%228%22%20height%3D%226%22%20viewBox%3D%220%200%208%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M3%204.11612L6.55806%200.558058C6.80214%200.313981%207.19786%200.313981%207.44194%200.558058C7.68602%200.802136%207.68602%201.19786%207.44194%201.44194L3.44194%205.44194C3.19786%205.68602%202.80214%205.68602%202.55806%205.44194L0.558058%203.44194C0.313981%203.19786%200.313981%202.80214%200.558058%202.55806C0.802136%202.31398%201.19786%202.31398%201.44194%202.55806L3%204.11612Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block tag="div">
                          {"Great Job!"}
                          <br />
                          {" You’ve caught up on all your notifications"}
                        </_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "notification-link")}
                          button={false}
                          options={{
                            href: "/notifications",
                          }}
                        >
                          {"View old notifications"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block tag="div">
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "slot-notification-wrapper-2"
                        )}
                        tag="div"
                      />
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "notification-link",
                          "padding"
                        )}
                        button={false}
                        options={{
                          href: "/notifications",
                        }}
                      >
                        {"View all notifications"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "avatar-dropdown")}
            data-w-id="a6fc547b-822f-50be-d7ac-b419d0f9905e"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "avatar-dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-image-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "profile-image")}
                  tag="div"
                />
                <_Builtin.HtmlEmbed
                  className={_utils.cx(
                    _styles,
                    "dashboard-nav-icon",
                    "color-grey-400"
                  )}
                  value="%3Csvg%20width%3D%2212%22%20height%3D%226%22%20viewBox%3D%220%200%2012%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.3753%200.219107C10.8066%20-0.125903%2011.4359%20-0.0559812%2011.7809%200.375281C12.0994%200.773369%2012.0643%201.34019%2011.7178%201.6964L11.6247%201.78084L6.62473%205.78084C6.29272%206.04646%205.83364%206.0706%205.47853%205.85328L5.37534%205.78084L0.375342%201.78084C-0.0559202%201.43584%20-0.125842%200.806543%200.219168%200.375281C0.537638%20-0.0228072%201.09834%20-0.113007%201.52191%200.146831L1.62473%200.219107L6.00004%203.71898L10.3753%200.219107Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "profile-items-list",
                "width-profile",
                "coach"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-list")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "dashboard-more-wrapper")}
                  button={false}
                  options={{
                    href: "/login",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "more-link-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-md-bold")}
                      tag="div"
                    >
                      {"Logout"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "nav-menu-button")}
            tag="div"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
