import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachJobDescription.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-135":{"id":"e-135","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-136"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c58f9899-bf60-564e-fa98-fb0bb39929ad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c58f9899-bf60-564e-fa98-fb0bb39929ad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686738123188}},"actionLists":{"a-94":{"id":"a-94","title":"add-to-wishlist-coach","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"c58f9899-bf60-564e-fa98-fb0bb39929b1"},"value":"none"}}]},{"actionItems":[{"id":"a-94-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","id":"c58f9899-bf60-564e-fa98-fb0bb39929b1"},"value":"flex"}},{"id":"a-94-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"c58f9899-bf60-564e-fa98-fb0bb39929ad"},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686738132459}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachJobDescription({
  as: _Component = _Builtin.Block,
  textJobTitle = "Job Title",
  textCompanyAndLocation = "Location",
  textPostedDay = "Posted day",
  onClickAddtoWishlist = {},
  onclickGetSalary = {},
  onClickCompanyWebsite = {},
  textJobType = "Job-Type",
  isJobRemote = true,
  isJobOnsite = true,
  slotSalaryRangeAccordion,
  textJobDescription = "This is some text inside of a div block.",
  textOriginalJobLink = "Link",
  onClickOriginalJobLink = {},
  isInWishList = true,
  isNotInWishlist = true,
  imageCompanyLogo = "",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "job-detail-wrap")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "job-detail-stack-column")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-xl-bold")}
          tag="div"
        >
          {"Job Details"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-job-main-detail")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-job-logo-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-avatar-letter")}
              tag="div"
            >
              {textCompanyAndLocation}
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "coach-job-logo")}
              loading="lazy"
              width="auto"
              height="auto"
              src={imageCompanyLogo}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-job-detail-wrap", "gap-8")}
            id={_utils.cx(
              _styles,
              "w-node-c58f9899-bf60-564e-fa98-fb0bb39929a2-b3992998"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "coach-detail-row-stack", "gap-40")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-lg-bold", "line-clamp-1")}
                tag="div"
                title=""
              >
                {textJobTitle}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "job-pills-wrap")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "job-type-pill")}
                  tag="div"
                >
                  {textJobType}
                </_Builtin.Block>
                {isJobRemote ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "job-type-pill")}
                    tag="div"
                  >
                    {"Remote"}
                  </_Builtin.Block>
                ) : null}
                {isJobOnsite ? (
                  <_Builtin.Block
                    className={_utils.cx(_styles, "job-type-pill")}
                    tag="div"
                  >
                    {"Onsite"}
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-md-default",
                "text-color-grey"
              )}
              tag="div"
            >
              {textCompanyAndLocation}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-md-default",
                "text-color-grey"
              )}
              tag="div"
            >
              {textPostedDay}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-detail-buttons-wrap")}
            tag="div"
          >
            {isNotInWishlist ? (
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "button", "is-green", "small")}
                  data-w-id="c58f9899-bf60-564e-fa98-fb0bb39929ad"
                  tag="div"
                  {...onClickAddtoWishlist}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "link-embed-icon")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M8%204a.5.5%200%200%201%20.5.5v3h3a.5.5%200%200%201%200%201h-3v3a.5.5%200%200%201-1%200v-3h-3a.5.5%200%200%201%200-1h3v-3A.5.5%200%200%201%208%204z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Add to Wishlist"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "already-in-wishlist")}
                  data-w-id="c58f9899-bf60-564e-fa98-fb0bb39929b1"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "link-embed-icon")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M16%208A8%208%200%201%201%200%208a8%208%200%200%201%2016%200zm-3.97-3.03a.75.75%200%200%200-1.08.022L7.477%209.417%205.384%207.323a.75.75%200%200%200-1.06%201.06L6.97%2011.03a.75.75%200%200%200%201.079-.02l3.992-4.99a.75.75%200%200%200-.01-1.05z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">
                    {"Added to Wishlist"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
            {isInWishList ? (
              <_Builtin.Block
                className={_utils.cx(_styles, "already-in-wishlist")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "link-embed-icon")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M16%208A8%208%200%201%201%200%208a8%208%200%200%201%2016%200zm-3.97-3.03a.75.75%200%200%200-1.08.022L7.477%209.417%205.384%207.323a.75.75%200%200%200-1.06%201.06L6.97%2011.03a.75.75%200%200%200%201.079-.02l3.992-4.99a.75.75%200%200%200-.01-1.05z%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block tag="div">
                  {"Already in Wishlist"}
                </_Builtin.Block>
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "job-detail-block")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "coach-detail-row-stack")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-lg-bold")}
            tag="div"
          >
            {"Job description"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "coach-detail-row-stack", "stretch")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "button-outlined")}
              tag="div"
              {...onclickGetSalary}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "link-embed-icon")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M4%2010.781c.148%201.667%201.513%202.85%203.591%203.003V15h1.043v-1.216c2.27-.179%203.678-1.438%203.678-3.3%200-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11%201.879.714%202.07%201.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27%201.472-3.27%203.156%200%201.454.966%202.483%202.661%202.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616%200-.944.704-1.641%201.8-1.828v3.495l-.2-.05zm1.591%201.872c1.287.323%201.852.859%201.852%201.769%200%201.097-.826%201.828-2.2%201.939V8.73l.348.086z%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Get Salary Range"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "button")}
              tag="div"
              {...onClickCompanyWebsite}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "link-embed-icon")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M8.636%203.5a.5.5%200%200%200-.5-.5H1.5A1.5%201.5%200%200%200%200%204.5v10A1.5%201.5%200%200%200%201.5%2016h10a1.5%201.5%200%200%200%201.5-1.5V7.864a.5.5%200%200%200-1%200V14.5a.5.5%200%200%201-.5.5h-10a.5.5%200%200%201-.5-.5v-10a.5.5%200%200%201%20.5-.5h6.636a.5.5%200%200%200%20.5-.5z%22%2F%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M16%20.5a.5.5%200%200%200-.5-.5h-5a.5.5%200%200%200%200%201h3.793L6.146%209.146a.5.5%200%201%200%20.708.708L15%201.707V5.5a.5.5%200%200%200%201%200v-5z%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"Company Website"}</_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{slotSalaryRangeAccordion}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "job-description-text",
            "text-color-grey"
          )}
          tag="div"
        >
          {textJobDescription}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "original-job-link-wrap",
            "text-md-bold"
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">{"Original Job Link:"}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "external-link")}
            tag="div"
            {...onClickOriginalJobLink}
          >
            {textOriginalJobLink}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A.job-description-text%7B%0Awhite-space%3Apre-wrap%0A%7D%0A%3C%2Fstyle%3E" />
      </_Builtin.Block>
    </_Component>
  );
}
