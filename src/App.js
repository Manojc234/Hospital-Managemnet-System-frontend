import Nav from "./components/Nav.js";
import SignUpDoctor from "./components/SignUpDoctor.js";
import SignUpPatient from "./components/SignUpPatient.js";
import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CoverPage from "./components/CoverPage.js";
import About from "./components/About.js";
import Gallery from "./components/Gallery.js";
import ContactUs from "./components/Contactus.js";
import DoctorLogin from "./components/DoctorLogin.js";
import PatientLogin from "./components/PatientLogin.js";
import Admin from "./components/Admin.js";
import AdminDashboard from "./components/AdminDashboard.js";
import DoctorDashboard from "./components/DoctorDashboard.js";
import PatientDashboard from "./components/PatientDashboard.js";
import Appointment from "./components/Appointment.js";
import AppointmentApplied from "./components/AppointmentsApplied.js";
import UpdateAppointment from "./components/UpdateAppointment.js";
import DoctorAppointmentapp from "./components/DoctorAppointmentapp.js";
import AdminGet from "./components/AdminGet.js";
import {useState,createContext} from "react";
import {HashRouter,Routes,Route} from "react-router-dom";
export const store=createContext();

function App() {
  const[token,setToken]=useState(null);
  return (
    <div>
    <store.Provider value={[token,setToken]}>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CoverPage/>}/>
        <Route path="/cover-page" element={<CoverPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/doctor-login" element={<DoctorLogin/>}/>
        <Route path="/patient-login" element={<PatientLogin/>}/>
        <Route path="/sign-updoctor" element={<SignUpDoctor/>}/>
        <Route path="/sign-uppatient" element={<SignUpPatient/>}/>
        <Route path="/doctor-dashboard" element={<DoctorDashboard/>}/>
        <Route path="/patient-dashboard" element={<PatientDashboard/>}/>
        <Route path="/patient-appointment" element={<Appointment/>}/>
        <Route path="/appointment-applied" element={<AppointmentApplied/>}/>
        <Route path="/update-appointment/:id" element={<UpdateAppointment/>}/>
        <Route path="/doctor-appointment" element={<DoctorAppointmentapp/>}/>
        <Route path="/admin-get" element={<AdminGet/>}/>
        <Route path="/admin-login" element={<Admin/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </HashRouter>
    </store.Provider>
    </div>

  );
}

export default App;
