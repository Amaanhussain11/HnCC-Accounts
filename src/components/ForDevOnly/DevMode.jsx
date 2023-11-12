import React from "react";
import { Link } from "react-router-dom";


const DevMode = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <ul>
          <li className="inline mx-4" value="">
            <Link to={"/"}>Landing Page</Link>
          </li>
          <li className="inline mx-4" value="">
            <Link to={"/dash"}>Admin DashBoard</Link>
          </li>
          <li className="inline mx-4" value="">
            <Link to={"/Welcome_back"}>WelcomeBack Page</Link>
          </li>
          <li className="inline mx-4" value="">
            <Link to={"/login"}>Login Page/Signup</Link>
          </li>
          <li className="inline mx-4" value="">
            <Link to={"/congo"}>Congratulations Page</Link>
          </li>
          <li className="inline mx-4" value="">
            <Link to={"/Admin_login"}>Admin Login</Link>
          </li>
          <li className="inline mx-4" value="">
            <Link to={"/make_payment"}>Payment Page</Link>
          </li>
          <li className="inline mx-4" value="">
            <Link to={"/scanqr"}>Scan QR</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DevMode;
