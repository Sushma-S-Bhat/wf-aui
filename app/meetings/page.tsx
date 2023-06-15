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
        //imageProfilePic={''}
        slotEventQa={item.questions.map((i:any) => (
          <EventQa textQuestion={i.question} textAnswer={i.answer} />
        ))}
      />
    );
  }
  return (
    <CoachMeetingLayout
    isCalendlyNotConnected={false}
    isLoading={false} // loading message while checking whether the coach is connected to calendly or not
    /*
    //if calendly is not connected set isCalendlyNotConnected to true to show cta to connect to calendly
    slotCalender={} // to display calender
    onClickConnectCalendly ={{onClick:()=>{}}} //cta button click event when calendly is not connected
    */
    isCalendlyConnected={true} //to show tabs and calender
      slotCoachEventTabs={
        <CoachEventTabs
          isPastEventsEmpty={false}   // empty state for past events
          slotEventPopupContent={popupContent} //to dynamically set the popup content of event details in onClickViewButton
          isUpcomingEventsEmpty={false} // empty state for upcoming events
          isUpcomingEventsLoading={false} //loading state for upcoming events
          isPastEventLoading={false}     //loading state for past events
          slotCoachEventItemUpcoming={events.map((item) => (
            <CoachEventItemUpcoming
              textName={item.name}
              textDate={item.date}
              textDay={item.day}
              //onClickJoinMeeting={{onClick:()=>{}}}
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
