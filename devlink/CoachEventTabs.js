import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachEventTabs.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-127":{"id":"e-127","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-128"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".view-details-button","originalId":"648866f69e38283a42aff747|5ff0b12f-4737-cc5e-490f-4cf0677972d0","appliesTo":"CLASS"},"targets":[{"selector":".view-details-button","originalId":"648866f69e38283a42aff747|5ff0b12f-4737-cc5e-490f-4cf0677972d0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686662285946},"e-129":{"id":"e-129","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-130"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4ef480fc-fd79-3f5e-b7a0-824cdcb76448","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4ef480fc-fd79-3f5e-b7a0-824cdcb76448","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686662421056}},"actionLists":{"a-90":{"id":"a-90","title":"eventdetail-popup-open","actionItemGroups":[{"actionItems":[{"id":"a-90-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".event-detail-popup-wrap","selectorGuids":["e7e699d7-6164-6bb4-8c94-166254a2ca94"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686662321267},"a-91":{"id":"a-91","title":"eventdetail-popup-close","actionItemGroups":[{"actionItems":[{"id":"a-91-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".event-detail-popup-wrap","selectorGuids":["e7e699d7-6164-6bb4-8c94-166254a2ca94"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686662321267}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachEventTabs({
  as: _Component = _Builtin.Block,
  isUpcomingEventsEmpty = true,
  slotCoachEventItemPast,
  slotCoachEventItemUpcoming,
  isUpcomingEventsLoading = true,
  isPastEventsEmpty = true,
  isPastEventLoading = true,
  slotEventPopupContent,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "event-detail-popup-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "event-detail-popup")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "popup-header")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-lg-bold")}
              tag="div"
            >
              {"Event Info"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "event-popup-close")}
              data-w-id="4ef480fc-fd79-3f5e-b7a0-824cdcb76448"
              tag="div"
            >
              <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M1.13379%2011.4307C1.27051%2011.5628%201.42773%2011.6494%201.60547%2011.6904C1.78776%2011.736%201.96549%2011.736%202.13867%2011.6904C2.31641%2011.6494%202.46908%2011.5674%202.59668%2011.4443L6.5%207.54102L10.3965%2011.4375C10.5241%2011.5697%2010.6768%2011.6562%2010.8545%2011.6973C11.0322%2011.7383%2011.21%2011.736%2011.3877%2011.6904C11.5654%2011.6494%2011.7204%2011.5628%2011.8525%2011.4307C11.9847%2011.2985%2012.0713%2011.1436%2012.1123%2010.9658C12.1579%2010.7881%2012.1602%2010.6104%2012.1191%2010.4326C12.0781%2010.2549%2011.9938%2010.1022%2011.8662%209.97461L7.96973%206.07129L11.8662%202.1748C11.9938%202.04264%2012.0781%201.88997%2012.1191%201.7168C12.1647%201.53906%2012.1647%201.36133%2012.1191%201.18359C12.0736%201.00586%2011.9847%200.850911%2011.8525%200.71875C11.7158%200.586589%2011.5586%200.497721%2011.3809%200.452148C11.2077%200.406576%2011.0322%200.406576%2010.8545%200.452148C10.6768%200.493164%2010.5241%200.577474%2010.3965%200.705078L6.5%204.60156L2.59668%200.705078C2.46908%200.577474%202.31641%200.493164%202.13867%200.452148C1.96094%200.411133%201.78092%200.411133%201.59863%200.452148C1.4209%200.493164%201.26595%200.582031%201.13379%200.71875C1.00618%200.850911%200.919596%201.00586%200.874023%201.18359C0.833008%201.36133%200.833008%201.53906%200.874023%201.7168C0.919596%201.89453%201.00391%202.04492%201.12695%202.16797L5.03027%206.07129L1.12695%209.98145C1.00391%2010.1045%200.919596%2010.2549%200.874023%2010.4326C0.828451%2010.6058%200.826172%2010.7835%200.867188%2010.9658C0.91276%2011.1436%201.00163%2011.2985%201.13379%2011.4307Z%22%20fill%3D%22currentcolor%22%2F%3E%0A%3C%2Fsvg%3E" />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">{slotEventPopupContent}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.TabsWrapper
        current="Tab 1"
        easing="ease"
        fadeIn={300}
        fadeOut={100}
      >
        <_Builtin.TabsMenu
          className={_utils.cx(_styles, "tabs-menu", "events")}
          tag="div"
        >
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "tablink")}
            data-w-tab="Tab 1"
          >
            <_Builtin.Block tag="div">{"Upcoming Events"}</_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "tablink")}
            data-w-tab="Tab 2"
          >
            <_Builtin.Block tag="div">{"Past Events"}</_Builtin.Block>
          </_Builtin.TabsLink>
        </_Builtin.TabsMenu>
        <_Builtin.TabsContent tag="div">
          <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
            <_Builtin.Block tag="div">
              {isUpcomingEventsEmpty ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "empty-events")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/6487485113eb43195de49c2e_empty.svg"
                  />
                  <_Builtin.Block tag="div">
                    {"No Upcoming Events"}
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              <_Builtin.Block
                className={_utils.cx(_styles, "stack-column")}
                tag="div"
              >
                {slotCoachEventItemUpcoming}
              </_Builtin.Block>
              {isUpcomingEventsLoading ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "stack-column")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
            <_Builtin.Block tag="div">
              {isPastEventsEmpty ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "empty-events")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="lazy"
                    src="https://uploads-ssl.webflow.com/648708b2f7d889bb3eb81cf8/6487485113eb43195de49c2e_empty.svg"
                  />
                  <_Builtin.Block tag="div">
                    {"No past events to show"}
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              <_Builtin.Block
                className={_utils.cx(_styles, "stack-column")}
                tag="div"
              >
                {slotCoachEventItemPast}
              </_Builtin.Block>
              {isPastEventLoading ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "stack-column")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "events-detail-wrapper",
                      "skeleton"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "events-detail-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "icon-embed", "skeleton")}
                        tag="div"
                      />
                      <_Builtin.Block tag="div">
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "coach-event-name",
                            "skeleton"
                          )}
                          tag="div"
                        >
                          {"Name"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "view-details-button",
                            "skeleton"
                          )}
                          tag="div"
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
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Date"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-md-skeleton")}
                        tag="div"
                      >
                        {"Day"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.TabsPane>
        </_Builtin.TabsContent>
      </_Builtin.TabsWrapper>
    </_Component>
  );
}
