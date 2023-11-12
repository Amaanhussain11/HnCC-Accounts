import "./App.css";

import Signup from "./components/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Combined from "./components/Combined";
import Login from "./components/Login";
import AdminDashBoard from "./components/AdminDashBoard";
import Welcome_back from "./components/Welcome_back";
import Admin_login from "./components/Admin_login";
import Congrats from "./components/Congrats";
import DevMode from "./components/ForDevOnly/DevMode";
import MakePayment from "./components/MakePayment";
import ScanQR from "./components/ScanQR";

function App() {
  return (
    <>
      <BrowserRouter>
        <DevMode />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/dash" element={<AdminDashBoard />} />
          <Route exact path="/" element={<Combined />} />
          <Route path="/combined" element={<Combined />} />
          <Route path="/login" element={<Login />} />
          <Route path="/congo" element={<Congrats />} />
          <Route path="/Welcome_back" element={<Welcome_back />} />
          <Route path="/Admin_login" element={<Admin_login />} />
          <Route path="/make_payment" element={<MakePayment />} />
          <Route path="/scanqr" element={<ScanQR />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
