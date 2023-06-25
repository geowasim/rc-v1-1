// import moment from "moment/moment";
import { useState } from "react";
import { compareTwoDates, generateDate } from "../../utils/arrayOfDate";
import CalendarDays from "./CalendarDays";
import EventsComponents from "../Events/EventsComponents";
import { FAKE_ARR_EVENTS } from "../../data/day-month";
import TotalDays from "./TotalDays";

const CalendarBody = ({ currentDate, defaultDate }) => {
  let month = currentDate.month();
  let year = currentDate.year();
  let totalDays = generateDate(month, year);

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(false);

  const selectDateHandle = (date) => {
    console.log(date.date(), date.month(), date.year());
    setSelectedDate(date);
  };

  const selectEventHandler = (selectedOne) => {
    console.log(selectedOne);
    setCalendarEvent(selectedOne);
  };

  return (
    <>
      {showEvent && (
        <div
          style={{
            width: "500px",
            height: "300px",
            background: "red",

            position: "absolute",
            top: "200px",
            zIndex: "500",
            opacity: 0.5,
          }}
        >
          <p>{calendarEvent.id}</p>
          <p>{`${
            calendarEvent.title ? "Edit " + CalendarBody.title : "Add new event"
          }`}</p>
          <p>{calendarEvent.date.date()}</p>
          <button onClick={() => setShowEvent(!showEvent)}>mmmm</button>
        </div>
      )}
      <div role="table" className="table">
        <div className="thead">
          <CalendarDays defaultDate={defaultDate} />
        </div>
        <div className="tbody">
          {/* <TotalDays /> */}
          {totalDays.map(({ isCurrentMonth, isToday, date }, idx) => {
            return (
              <ul
                key={idx}
                className={`${
                  isCurrentMonth ? "currentMonth" : "notCurrentMonth"
                } ${isToday ? "today" : ""} td  ${
                  date.toString() === selectedDate.toString()
                    ? "selectedDay"
                    : ""
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
                      selectDateHandle(date);
                      // setCalendarEvent(date);
                      setShowEvent(true);
                    }}
                  >
                    {date.date()}
                  </span>
                </li>
                {FAKE_ARR_EVENTS.map((evnt, idx) => {
                  return (
                    compareTwoDates(evnt.date, date) && (
                      <p
                        className="event_block"
                        key={idx}
                        style={{
                          color: evnt.color,
                          background: evnt.background,
                        }}
                        onClick={() => {
                          selectEventHandler(evnt);
                          setShowEvent(true);
                        }}
                      >
                        {evnt.title}
                      </p>
                    )
                  );
                })}
              </ul>
            );
          })}
          {/* <EventsComponents selectEventHandler={selectEventHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default CalendarBody;
