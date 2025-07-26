import style from "./View_Appointmen.module.css";

const appointments = [
    {
        appointmentId: 1,
        drName: "Dr. Priya Banerjee",
        drRole: "Consultant - Interventional Cardiologist",
        appointmentDate: "22/07/2025",
        appointmenTime: "11:00",
        paymentStatus: "Done",
        meetLink: "https://meet.google.com/vtr-tprp-dcc",
    },
    {
        appointmentId: 2,
        drName: "Dr. Rimita Ghosh",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    },
    {
        appointmentId: 3,
        drName: "Dr. Ruhi Khan",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    },
    {
        appointmentId: 4,
        drName: "Dr. Koyel Mallick",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    },
    {
        appointmentId: 5,
        drName: "Dr. Agamani Banerjee",
        drRole: "Consultant - Orthopaedic (Hand & Wrist) Surgeon",
        appointmentDate: "22/07/2025",
        appointmenTime: "13:00",
        paymentStatus: "Done",
        meetLink: "",
    }
];

const View_Appointmen = () => {
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.header}>
                    <h1>My Appointments</h1>
                </div>

                <div className={style.appointmentInfo}>
                    {appointments.map((appt) => (
                        <div className={style.appointments} key={appt.appointmentId}>
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
                                        <td><p><b>Meet Link : </b>{appt.meetLink ? (<a href={appt.meetLink} id={style.link} target="_blank" rel="noopener noreferrer">Join Meeting</a>) : (<span id={style.noLink}>Link not available</span>)}</p></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            <button className={style.viewPdf}>View PDF</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                    <div className={style.noAppointments}>
                        <h4>No more bookings</h4>
                    </div>
                </div>
            </div>
            <div className={style.copyright}>
                 © {new Date().getFullYear()} Created & crafted by <a  href="https://www.linkedin.com/in/sanket-adhikary-020888253" target="_blank" rel="noopener noreferrer">Sanket Adhikary</a>. All rights reserved.
            </div>
        </div>
    );
};

export default View_Appointmen
