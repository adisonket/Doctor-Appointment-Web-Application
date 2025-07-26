import { useState } from "react";
import style from "./ViewAppointment.module.css";

const appointments = [
  {
    appointmentId: 1,
    appointmentDate: "27/07/2025",
    appointmentTime: "11:00",
    patientName: "Adhip Halder",
    gender: "Male",
    description: "Heart broken for 4 times",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 3,
    appointmentDate: "27/07/2025",
    appointmentTime: "12:00",
    patientName: "Mriganka Adhikary",
    gender: "Male",
    description: "Heart broken for 12 times",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 4,
    appointmentDate: "28/07/2025",
    appointmentTime: "12:00",
    patientName: "Tousif Mehmood",
    gender: "Male",
    description: "Heart broken for 2 times",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 5,
    appointmentDate: "29/07/2025",
    appointmentTime: "13:00",
    patientName: "Adhip Halder",
    gender: "Male",
    description: "Pain in some private area",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 6,
    appointmentDate: "30/07/2025",
    appointmentTime: "11:00",
    patientName: "Sanket Adhikary",
    gender: "Male",
    description: "All ok just for fun",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
  {
    appointmentId: 7,
    appointmentDate: "30/07/2025",
    appointmentTime: "13:00",
    patientName: "Adhip Halder",
    gender: "Male",
    description: "Headache",
    meetLink: "https://meet.google.com/vtr-tprp-dcc",
  },
];

const getNextFourDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 4; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const formatted = d.toLocaleDateString("en-GB");
    dates.push(formatted);
  }
  return dates;
};

const ViewAppointment = () => {
  const dateOptions = getNextFourDates();
  const [selectedDate, setSelectedDate] = useState(dateOptions[0]);

  const filteredAppointments = appointments.filter(
    (appt) => appt.appointmentDate === selectedDate
  );

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 id={style.header}>Appointments</h1>
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          {dateOptions.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      <div className={style.appointmentInfo}>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appt) => (
            <div className={style.appointments} key={appt.appointmentId}>
              <div className={style.appointmentsTable}>
                <table>
                  <tbody>
                    <tr>
                      <td><p><b>Appointment ID : </b>{appt.appointmentId}</p></td>
                      <td><p><b>Date : </b>{appt.appointmentDate}</p></td>
                      <td><p><b>Time : </b>{appt.appointmentTime}</p></td>
                    </tr>
                    <tr>
                      <td><p><b>Patient Name : </b>{appt.patientName}</p></td>
                      <td><p><b>Gender : </b>{appt.gender}</p></td>
                    </tr>
                    <tr>
                      <td><p><b>Description : </b>{appt.description}</p></td>
                    </tr>
                    <tr>
                      <td><p><b>Meet Link : </b>{appt.meetLink ? (<a href={appt.meetLink} id={style.link} target="_blank" rel="noopener noreferrer">Join Meeting</a>) : (<span id={style.noLink}>Link not available</span>)}</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <button className={style.viewDoc}>Documemts</button>
              </div>
            </div>
          ))
        ) : (
          <div className={style.noAppointments}>
            <h4>No Appointments for this date</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAppointment;
