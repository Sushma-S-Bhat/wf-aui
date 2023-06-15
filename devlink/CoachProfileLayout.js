import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachProfileLayout.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-161":{"id":"e-161","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"d88d2a90-c026-3e82-c22b-bbbe02825f7d"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686832291675},"e-163":{"id":"e-163","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"506526c6-90cc-a0fe-74a2-949708404d19"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686832351668},"e-165":{"id":"e-165","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"ec0f534e-4b73-5798-0977-16d98b20a608"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686834831962},"e-166":{"id":"e-166","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"ec0f534e-4b73-5798-0977-16d98b20a608"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686834831963},"e-167":{"id":"e-167","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"a82dd1f7-92e7-95c0-4b10-eb89b2a507b5"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686835656164},"e-169":{"id":"e-169","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"0105ac67-75d9-4f41-668b-ede0adcebad4"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686835687586}},"actionLists":{"a-102":{"id":"a-102","title":"query-popup-open","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"flex","target":{"selector":".meeting-query-popup-wrap","selectorGuids":["470f3edc-1447-4a2f-7c79-dd1c787888de"]}}}]}],"createdOn":1686832294967,"useFirstGroupAsInitialState":false},"a-103":{"id":"a-103","title":"query-popup-close","actionItemGroups":[{"actionItems":[{"id":"a-103-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".meeting-query-popup-wrap","selectorGuids":["470f3edc-1447-4a2f-7c79-dd1c787888de"]}}}]}],"createdOn":1686832294967,"useFirstGroupAsInitialState":false},"a-104":{"id":"a-104","title":"setting dropdoen open","actionItemGroups":[{"actionItems":[{"id":"a-104-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"flex","target":{"id":"8b0547b1-1b29-bda7-67a1-312163e572cd"}}}]}],"createdOn":1686834624899,"useFirstGroupAsInitialState":false},"a-105":{"id":"a-105","title":"setting dropdown close","actionItemGroups":[{"actionItems":[{"id":"a-105-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"useEventTarget":"CHILDREN","id":"8b0547b1-1b29-bda7-67a1-312163e572cd"}}}]}],"createdOn":1686834624899,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachProfileLayout({
  as: _Component = _Builtin.Block,
  textName = "Name",
  textEmail = "Email",
  textPhone = "Phone",
  textProfession = "Profession",
  textCompanyAndLocation = "Location",
  imageProfilePic = "",
  textBio = "Graphic designer with +8 years of experience in branding and print design. Skilled at Adobe Creative Suite (Photoshop, Illustrator) as well as sketching and hand drawing. Supervised 23 print design projects that resulted in an increase of 32% in savings.",
  slotSkill,
  slotLanguage,
  onClickEdit = {},
  onClickMeetingQueries = {},
  isEditVisible = true,
  isProfileShow = true,
  textPopupHeader = "Popup header",
  onClickChangePassword = {},
  onClickCalendlySettings = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "coach-profile-layout")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "coach-profile-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "profile-header-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-xxl-bold")}
            tag="div"
          >
            {"Your Profile"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "buttons-wrap-profilr")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "button", "medium")}
              data-w-id="d88d2a90-c026-3e82-c22b-bbbe02825f7d"
              tag="div"
              {...onClickMeetingQueries}
            >
              {"Meeting queries"}
            </_Builtin.Block>
            {isEditVisible ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "setting-icon-button")}
                tag="div"
                {...onClickEdit}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "link-embed-icon")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M12.854.146a.5.5%200%200%200-.707%200L10.5%201.793%2014.207%205.5l1.647-1.646a.5.5%200%200%200%200-.708l-3-3zm.646%206.061L9.793%202.5%203.293%209H3.5a.5.5%200%200%201%20.5.5v.5h.5a.5.5%200%200%201%20.5.5v.5h.5a.5.5%200%200%201%20.5.5v.5h.5a.5.5%200%200%201%20.5.5v.207l6.5-6.5zm-7.468%207.468A.5.5%200%200%201%206%2013.5V13h-.5a.5.5%200%200%201-.5-.5V12h-.5a.5.5%200%200%201-.5-.5V11h-.5a.5.5%200%200%201-.5-.5V10h-.5a.499.499%200%200%201-.175-.032l-.179.178a.5.5%200%200%200-.11.168l-2%205a.5.5%200%200%200%20.65.65l5-2a.5.5%200%200%200%20.168-.11l.178-.178z%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            ) : null}
            <_Builtin.Block
              className={_utils.cx(_styles, "profile-settings")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "setting-dropdown")}
                data-w-id="ec0f534e-4b73-5798-0977-16d98b20a608"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "setting-icon-button")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "link-embed-icon")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M9.405%201.05c-.413-1.4-2.397-1.4-2.81%200l-.1.34a1.464%201.464%200%200%201-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987%201.987l.169.311c.446.82.023%201.841-.872%202.105l-.34.1c-1.4.413-1.4%202.397%200%202.81l.34.1a1.464%201.464%200%200%201%20.872%202.105l-.17.31c-.698%201.283.705%202.686%201.987%201.987l.311-.169a1.464%201.464%200%200%201%202.105.872l.1.34c.413%201.4%202.397%201.4%202.81%200l.1-.34a1.464%201.464%200%200%201%202.105-.872l.31.17c1.283.698%202.686-.705%201.987-1.987l-.169-.311a1.464%201.464%200%200%201%20.872-2.105l.34-.1c1.4-.413%201.4-2.397%200-2.81l-.34-.1a1.464%201.464%200%200%201-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464%201.464%200%200%201-2.105-.872l-.1-.34zM8%2010.93a2.929%202.929%200%201%201%200-5.86%202.929%202.929%200%200%201%200%205.858z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "setting-dropdownlist")}
                  data-w-id="8b0547b1-1b29-bda7-67a1-312163e572cd"
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "setting-option")}
                    data-w-id="a82dd1f7-92e7-95c0-4b10-eb89b2a507b5"
                    tag="div"
                    {...onClickChangePassword}
                  >
                    {"Calendly Settings"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "setting-option")}
                    data-w-id="0105ac67-75d9-4f41-668b-ede0adcebad4"
                    tag="div"
                    {...onClickCalendlySettings}
                  >
                    {"Change password"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        {isProfileShow ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-profile-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-profile-main-details")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825f82-02825f77"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "your-profile-image")}
                loading="lazy"
                width="auto"
                height="auto"
                src={imageProfilePic}
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content", "stretch")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-xl-bold",
                    "margin-bottom-6"
                  )}
                  tag="div"
                >
                  {textName}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-stack-column")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-dark-grey"
                    )}
                    tag="div"
                  >
                    {textEmail}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-dark-grey"
                    )}
                    tag="div"
                  >
                    {textPhone}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-dark-grey"
                    )}
                    tag="div"
                  >
                    {textProfession}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-md-default",
                      "text-color-dark-grey"
                    )}
                    tag="div"
                  >
                    {textCompanyAndLocation}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "profile-content")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825f91-02825f77"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-xl-bold",
                  "margin-bottom-6"
                )}
                tag="div"
              >
                {"Bio"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-color-dark-grey")}
                tag="div"
              >
                {textBio}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-profile-content-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825f96-02825f77"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content", "gap-18")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-bold")}
                  tag="div"
                >
                  {"Expertise in"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "coach-stack-row",
                    "gap-16",
                    "wrap"
                  )}
                  tag="div"
                >
                  {slotSkill}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "profile-content", "gap-18")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-lg-bold")}
                  tag="div"
                >
                  {"Fluent in"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "coach-stack-row", "gap-12")}
                  tag="div"
                >
                  {slotLanguage}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-profile-content-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-d88d2a90-c026-3e82-c22b-bbbe02825fa2-02825f77"
              )}
              tag="div"
            />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "meeting-query-popup-wrap")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "query-popup")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "popup-header")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {textPopupHeader}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "event-popup-close")}
              data-w-id="506526c6-90cc-a0fe-74a2-949708404d19"
              tag="div"
            >
              <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M1.13379%2011.4307C1.27051%2011.5628%201.42773%2011.6494%201.60547%2011.6904C1.78776%2011.736%201.96549%2011.736%202.13867%2011.6904C2.31641%2011.6494%202.46908%2011.5674%202.59668%2011.4443L6.5%207.54102L10.3965%2011.4375C10.5241%2011.5697%2010.6768%2011.6562%2010.8545%2011.6973C11.0322%2011.7383%2011.21%2011.736%2011.3877%2011.6904C11.5654%2011.6494%2011.7204%2011.5628%2011.8525%2011.4307C11.9847%2011.2985%2012.0713%2011.1436%2012.1123%2010.9658C12.1579%2010.7881%2012.1602%2010.6104%2012.1191%2010.4326C12.0781%2010.2549%2011.9938%2010.1022%2011.8662%209.97461L7.96973%206.07129L11.8662%202.1748C11.9938%202.04264%2012.0781%201.88997%2012.1191%201.7168C12.1647%201.53906%2012.1647%201.36133%2012.1191%201.18359C12.0736%201.00586%2011.9847%200.850911%2011.8525%200.71875C11.7158%200.586589%2011.5586%200.497721%2011.3809%200.452148C11.2077%200.406576%2011.0322%200.406576%2010.8545%200.452148C10.6768%200.493164%2010.5241%200.577474%2010.3965%200.705078L6.5%204.60156L2.59668%200.705078C2.46908%200.577474%202.31641%200.493164%202.13867%200.452148C1.96094%200.411133%201.78092%200.411133%201.59863%200.452148C1.4209%200.493164%201.26595%200.582031%201.13379%200.71875C1.00618%200.850911%200.919596%201.00586%200.874023%201.18359C0.833008%201.36133%200.833008%201.53906%200.874023%201.7168C0.919596%201.89453%201.00391%202.04492%201.12695%202.16797L5.03027%206.07129L1.12695%209.98145C1.00391%2010.1045%200.919596%2010.2549%200.874023%2010.4326C0.828451%2010.6058%200.826172%2010.7835%200.867188%2010.9658C0.91276%2011.1436%201.00163%2011.2985%201.13379%2011.4307Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E" />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "querypopup-slot")}
            tag="div"
          >
            <_Builtin.Block tag="div" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
