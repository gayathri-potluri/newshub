"use client";

import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer for React Big Calendar
const localizer = momentLocalizer(moment);

// Define event interface
export interface CalendarEventType {
  _id: string;
  title: string;
  eventDate: Date | string;
  location?: string;
  description?: string;
  allDay?: boolean;
}

// Interface for transformed events that react-big-calendar expects
interface TransformedEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  location?: string;
  description?: string;
}

interface CalendarViewProps {
  events: CalendarEventType[];
}

export default function CalendarView({ events = [] }: CalendarViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<TransformedEvent | null>(null);
  const [view, setView] = useState<string>("month");
  const [date, setDate] = useState<Date>(new Date());

  // Map the database events to the format expected by react-big-calendar
  const calendarEvents: TransformedEvent[] = events.map((event) => ({
    id: event._id,
    title: event.title,
    start: new Date(event.eventDate),
    end: new Date(new Date(event.eventDate).setHours(new Date(event.eventDate).getHours() + 2)),
    allDay: event.allDay || false,
    location: event.location,
    description: event.description,
  }));

  // Handle event selection
  const handleSelectEvent = (event: TransformedEvent) => {
    setSelectedEvent(event);
  };

  // Close event details modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Custom event styling
  const eventStyleGetter = (event: TransformedEvent) => {
    return {
      style: {
        backgroundColor: "#3b82f6",
        borderRadius: "4px",
        color: "white",
        border: "none",
        display: "block",
      },
    };
  };

  // Handle view change
  const handleViewChange = (newView: string) => {
    setView(newView);
  };

  // Handle date change
  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  // Event list component
  const EventList = () => {
    // Sort events by date
    const sortedEvents = [...calendarEvents].sort((a, b) => a.start.getTime() - b.start.getTime());
    
    // Group events by date
    const groupedEvents: Record<string, TransformedEvent[]> = {};
    sortedEvents.forEach(event => {
      const dateKey = moment(event.start).format('YYYY-MM-DD');
      if (!groupedEvents[dateKey]) {
        groupedEvents[dateKey] = [];
      }
      groupedEvents[dateKey].push(event);
    });

    return (
      <div className="bg-white rounded-lg shadow p-4 h-[600px] overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        {Object.keys(groupedEvents).length > 0 ? (
          Object.keys(groupedEvents).map(dateKey => {
            const eventDate = moment(dateKey);
            return (
              <div key={dateKey} className="mb-4 border-b pb-2">
                <div className="bg-gray-100 p-2">
                  <h3 className="font-medium">
                    {eventDate.format('dddd, MMMM D, YYYY')}
                  </h3>
                  <p className="text-xs text-gray-500">{eventDate.format('M/D/YY')}</p>
                </div>
                {groupedEvents[dateKey].map((event, index) => (
                  <div 
                    key={event.id || index} 
                    className="py-2 px-3 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleSelectEvent(event)}
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">
                          {event.allDay ? 'all-day' : moment(event.start).format('h:mm A')}
                        </div>
                        <div className="font-medium">{event.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No events scheduled</p>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end space-x-2 mb-2">
        <button 
          onClick={() => setView("month")}
          className={`px-3 py-1 rounded ${view === "month" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Calendar
        </button>
        <button 
          onClick={() => setView("list")}
          className={`px-3 py-1 rounded ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          List
        </button>
      </div>
      
      {view === "list" ? (
        <EventList />
      ) : (
        <div className="h-[600px] bg-white p-4 rounded-lg shadow">
          <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            onView={handleViewChange}
            onNavigate={handleNavigate}
            date={date}
            views={{
              month: true,
              week: true,
              day: true,
              agenda: true
            }}
            defaultView="month"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{selectedEvent.title}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"  
                  ></path>
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium">
                  {moment(selectedEvent.start).format("MMMM D, YYYY")}
                  {!selectedEvent.allDay && ` at ${moment(selectedEvent.start).format("h:mm A")}`}
                </p>
              </div>
              {selectedEvent.location && (
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{selectedEvent.location}</p>
                </div>
              )}
              {selectedEvent.description && (
                <div>
                  <p className="text-sm text-gray-500">Description</p>
                  <p className="text-gray-700">{selectedEvent.description}</p>
                </div>
              )}
            </div>
            <div className="mt-6">
              <button
                onClick={closeModal}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 