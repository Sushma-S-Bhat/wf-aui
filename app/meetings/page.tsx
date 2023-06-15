"use client";
import React from "react";
import {
  CoachEventTabs,
  CoachEventItem,
  EventPopupContent,
  EventQa,
  CoachMeetingLayout,
} from "@/devlink";

const events = [
  {
    name: "Hari",
    date: "12/03/23",
    day: "Tuesday",
    questions: [
      {
        question: "What is your expectation from the meeting?",
        answer: "I would like to know what skills i can improve",
      },
      {
        question: "Do you have a timeline to achieve this goal?",
        answer: "yes",
      },
      {
        question: "Any specific areas you would like to focus on?",
        answer: "Resume build",
      },
    ],
  },
  {
    name: "Shwetha",
    date: "19/03/23",
    day: "Monday",
    questions: [
      {
        question: "What is your expectation from the meeting?",
        answer: "Nothing",
      },
      {
        question: "Do you have a timeline to achieve this goal?",
        answer: "6 months",
      },
      {
        question: "Any specific areas you would like to focus on?",
        answer: "Nothing",
      },
    ],
  },
  {
    name: "Vijay",
    date: "14/03/23",
    day: "Friday",
    questions: [
      {
        question: "What is your expectation from the meeting?",
        answer: "Nothing",
      },
      {
        question: "What is your expectation from the meeting?",
        answer: "Nothing",
      },
      {
        question: "Any specific areas you would like to focus on?",
        answer: "Overall career feedback",
      },
    ],
  },
];
function Test() {
  const [popupContent, setpopupContent] = React.useState(<></>);
  function loadPopup(item) {
    setpopupContent(
      <EventPopupContent
        textName={item.name}
        slotEventQa={item.questions.map((i) => (
          <EventQa textQuestion={i.question} textAnswer={i.answer} />
        ))}
      />
    );
  }
  return (
    <CoachMeetingLayout
      slotCoachEventTabs={
        <CoachEventTabs
          isPastEventsEmpty={false}
          slotEventPopupContent={popupContent}
          isUpcomingEventsEmpty={false}
          isPastEventLoading={false}
          slotCoachEventItemPast={events.map((item) => (
            <CoachEventItem
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
