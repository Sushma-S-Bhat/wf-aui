"use client";
import React from "react";
import {
  CoachEventTabs,
  CoachEventItemUpcoming,
  CoachEventItemPast,
  EventPopupContent,
  EventQa,
  CoachMeetingLayout,
} from "@/devlink";
import events from '../../data/events'

function Test() {
  const [popupContent, setpopupContent] = React.useState(<></>);
  function loadPopup(item:any) {
    setpopupContent(
      <EventPopupContent
        textName={item.name}
        slotEventQa={item.questions.map((i:any) => (
          <EventQa textQuestion={i.question} textAnswer={i.answer} />
        ))}
      />
    );
  }
  return (
    <CoachMeetingLayout
    isCalendlyNotConnected={false}
    isLoading={false}
    isCalendlyConnected={true}
      slotCoachEventTabs={
        <CoachEventTabs
          isPastEventsEmpty={false}
          slotEventPopupContent={popupContent}
          isUpcomingEventsEmpty={false}
          isUpcomingEventsLoading={false}
          isPastEventLoading={false}
          slotCoachEventItemUpcoming={events.map((item) => (
            <CoachEventItemUpcoming
              textName={item.name}
              textDate={item.date}
              textDay={item.day}
              onClickViewDetails={{ onClick: () => loadPopup(item) }}
            />
          ))}
          slotCoachEventItemPast={events.map((item) => (
            <CoachEventItemPast
              textName={item.name}
              textDate={item.date}
              textDay={item.day}
              onClickViewDetails={{ onClick: () => loadPopup(item) }}
            />
          ))}
        />
      }
    />
  );
}

export default Test;
