import "./View_Appointmen.css";

const appointments = [
    {
        appointmentId: 1,
        drName: "Dr. Priya Halder",
        drRole: "Consultant - Interventional Cardiologist",
        appointmentDate: "22/07/2025",
        appointmenTime: "11:00",
        paymentStatus: "Done",
        meetLink: "",
    },
    {
        appointmentId: 2,
        drName: "Dr. Rimita Halder",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    },
    {
        appointmentId: 3,
        drName: "Dr. Rimita Halder",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    },
    {
        appointmentId: 4,
        drName: "Dr. Rimita Halder",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    },
    {
        appointmentId: 5,
        drName: "Dr. Rimita Halder",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    }
];

const View_Appointmen = () => {
    return (
        <div className="body">
            <div className="container">
                <div className="header">
                    <h1>My Appointments</h1>
                </div>

                <div className="appointment-info">
                    {appointments.map((appt) => (
                        <div className="appointments" key={appt.appointmentId}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><h3>{appt.drName}</h3></td>
                                        <td><p><b>Date :</b> {appt.appointmentDate}</p></td>
                                        <td><p><b>Payment Status :</b> {appt.paymentStatus}</p></td>
                                    </tr>
                                    <tr>
                                        <td><h5>{appt.drRole}</h5></td>
                                        <td><p><b>Time :</b> {appt.appointmenTime}</p></td>
                                        <td><p><b>Meet Link :</b> {appt.meetLink || "N/A"}</p></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <button className="view-pdf">View PDF</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                    <div className="no-appointments">
                        <h4>No more bookings</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View_Appointmen
