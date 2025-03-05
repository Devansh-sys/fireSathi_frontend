import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaBars, FaBell } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import SidebarInspector from "../components/SidebarInspector";

const localizer = momentLocalizer(moment);

export default function InspectorCalendar() {
  const [selectedMenu, setSelectedMenu] = useState("Pending Inspections");
  const [pendingInspections, setPendingInspections] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Simulating API call for pending inspections
    setTimeout(() => {
      setPendingInspections([
        { id: 1, location: "Building 01", date: new Date(2025, 0, 2) },
        { id: 2, location: "Building 02", date: new Date(2025, 0, 5) },
        { id: 3, location: "Building 03", date: new Date(2025, 0, 11) },
      ]);
    }, 1000);
  }, []);

  // Merge pending inspections into calendar events
  const events = pendingInspections.map((insp) => ({
    title: `Inspection: ${insp.location}`,
    start: insp.date,
    end: insp.date,
  }));

  const eventStyleGetter = () => ({
    style: {
      backgroundColor: "#3182ce",
      borderRadius: "4px",
      color: "white",
      padding: "4px 8px",
    },
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarInspector selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      <div className="flex flex-col flex-1">
        <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4 border-b">
          <FaBars className="text-gray-600 cursor-pointer text-xl" onClick={() => setSidebarOpen(!sidebarOpen)} />
          <div className="flex items-center gap-4">
            <HiOutlineGlobeAlt className="text-gray-600 text-xl cursor-pointer" />
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <img src="/profile.png" alt="Profile" className="w-10 h-10 rounded-full border" />
          </div>
        </nav>

        <div className="p-6">
          {selectedMenu === "Pending Inspections" ? (
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6">Pending Inspections</h2>
              <div className="grid grid-cols-1 gap-6">
                {pendingInspections.length === 0 ? (
                  <p className="text-gray-500">Loading pending inspections...</p>
                ) : (
                  pendingInspections.map((insp) => (
                    <Link
                      key={insp.id}
                      to={`/inspection/${insp.id}`}
                      className="bg-white p-8 rounded-xl shadow-lg flex justify-center items-center text-xl font-semibold border-l-8 border-blue-500 hover:bg-blue-50 transition w-full"
                    >
                      {insp.location}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6">Inspection Calendar</h2>
              <div className="bg-white shadow-lg rounded-xl p-6 border">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  titleAccessor="title"
                  style={{ height: 500 }}
                  className="rounded-lg"
                  eventPropGetter={eventStyleGetter}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}