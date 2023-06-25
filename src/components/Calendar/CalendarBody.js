// import moment from "moment/moment";
import { useEffect, useState } from "react";
import { generateDate } from "../../utils/arrayOfDate";
import WeekDaysNames from "./WeekDaysNames";
import TotalDays from "./TotalDays";
import Dialog from "../Events/Dialog";

const CalendarBody = ({ currentDate, defaultDate }) => {
  let month = currentDate.month();
  let year = currentDate.year();
  let totalDays = generateDate(month, year);

  const [selectedDate, setSelectedDate] = useState("");
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [createEvent, setCreateEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(false);
  const [eventsArray, setEventsArray] = useState([]);

  useEffect(() => {
    // console.log("selectedDate", selectedDate);
    console.log("calendarEvent", calendarEvent);
    // console.log("createEvent", createEvent);
    // console.log("showEvent", showEvent);
  }, [calendarEvent]);

  return (
    <>
      {showEvent && (
        <Dialog
          setShowEvent={setShowEvent}
          showEvent={showEvent}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          eventsArray={eventsArray}
          setEventsArray={setEventsArray}
          setCreateEvent={setCreateEvent}
          calendarEvent={calendarEvent}
          setCalendarEvent={setCalendarEvent}
        />
      )}

      <div role="table" className="table">
        <div className="thead">
          <WeekDaysNames defaultDate={defaultDate} />
        </div>
        <div className="tbody">
          <TotalDays
            totalDays={totalDays}
            setCalendarEvent={setCalendarEvent}
            setShowEvent={setShowEvent}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            eventsArray={eventsArray}
            createEvent={createEvent}
            setCreateEvent={setCreateEvent}
          />

          {/* <EventsComponents selectEventHandler={selectEventHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default CalendarBody;
