import React from "react";
import EventsComponents from "../Events/EventsComponents";

const TotalDays = ({
  totalDays,
  selectedDate,
  setCalendarEvent,
  setShowEvent,
  setSelectedDate,
  eventsArray,
  setCreateEvent,
}) => {
  return (
    <>
      {totalDays.map(({ isCurrentMonth, isToday, date }, idx) => {
        return (
          <ul
            key={idx}
            className={`${
              isCurrentMonth ? "currentMonth" : "notCurrentMonth"
            } ${isToday ? "today" : ""} td  ${
              date.toString() === selectedDate.toString() ? "selectedDay" : ""
            }`}
          >
            <li
              className={`${
                date.toString() === selectedDate.toString()
                  ? "selectedDate"
                  : ""
              }`}
            >
              <span
                className="dayDate"
                onClick={() => {
                  setSelectedDate(date);
                  setCreateEvent(date);
                  setShowEvent(true);
                }}
              >
                {date.date()}
              </span>
            </li>
            <EventsComponents
              setCalendarEvent={setCalendarEvent}
              setShowEvent={setShowEvent}
              date={date}
              setSelectedDate={setSelectedDate}
              eventsArray={eventsArray}
            />
          </ul>
        );
      })}
    </>
  );
};

export default TotalDays;
