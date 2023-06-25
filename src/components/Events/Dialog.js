import React from "react";
import "./style.css";
import { useState } from "react";
import { useRef } from "react";
import dayjs from "dayjs";
function Dialog({
  setShowEvent,
  showEvent,
  setCurrentEvent,
  currentEvent,
  selectedDate,
  eventsArray,
  setEventsArray,
  handleShowEvent,
  setCreateEvent,
  calendarEvent,
  setSelectedDate,
  setCalendarEvent,
}) {
  const [addTitle, setAddTitle] = useState("");

  function handleChange(e) {
    setAddTitle(e.target.value);
  }

  function handleSubmit(e) {
    const newEventsArray = {
      id: new Date().valueOf(),
      date: dayjs(dayjs(selectedDate).format("YYYY MM DD")),
      title: `${addTitle}`,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      message: "test",
    };
    e.preventDefault();
    setEventsArray([...eventsArray, newEventsArray]);
    setAddTitle("");
    setShowEvent(!showEvent);
    setSelectedDate("");
    setCreateEvent(null);
    setCalendarEvent(null);
  }

  const handleDelete = (id) => {
    const newEventsArray = eventsArray.filter((e) => e.id !== id);
    setEventsArray(newEventsArray);
    setShowEvent(false);
    setCreateEvent(null);
    setCalendarEvent(null);
  };

  const handleCancel = () => {
    setShowEvent(false);
    setCreateEvent(null);
    setCalendarEvent(null);
  };

  const inputEventRef = useRef();

  return (
    <div className="dialog-container">
      <div className="box">
        <div className="dialog-box">
          <h3>Event</h3>
          {calendarEvent ? <p>Edit {calendarEvent.title}</p> : <p>Add Event</p>}
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              ref={inputEventRef}
              type="text"
              name="title"
              value={addTitle}
              onChange={(e) => handleChange(e)}
              required
            />
            <button
              type="submit"
              onClick={() => {
                // setCurrentEvent(null);
              }}
              className="yes"
            >
              Save
            </button>
          </form>
          <div className="action">
            <button onClick={() => handleCancel()} className="no">
              Cancel{" "}
            </button>
            {calendarEvent && (
              <button
                onClick={() => {
                  handleDelete(calendarEvent.id);
                }}
              >
                {" "}
                Delete{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialog;

/**
 *  {showEvent && ( //show events onClick on event
        <div className="test_dialog">
          <p>{calendarEvent.id}</p>
          <p>{`${
            calendarEvent.title
              ? "Edit " + calendarEvent.title
              : "Add new event"
          }`}</p>

          <button
            onClick={() => {
              setShowEvent(!showEvent);
              // setCalendarEvent("");
            }}
          >
            mmmm
          </button>
 */
