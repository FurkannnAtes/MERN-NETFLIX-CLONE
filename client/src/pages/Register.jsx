import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/register/Form";
import Footer from "../components/welcome/Footer";

const Register = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/welcome-bg.jpg')" }}
      >
        <div className="absolute z-10 top-0 left-0 w-full h-screen  bg-gradient-to-t to-[rgb(0,0,0,0.6)] from-[rgb(0,0,0,0.6)] via-transparent "></div>
        <div className="relative flex flex-col h-full z-30">
          <div className="flex justify-start px-1 md:px-5 lg:px-10 items-center absolute left-0 top-0">
            <Link to="/">
              <img
                className="h-full w-[150px]"
                src="/images/logo_netflix.png"
                alt=""
              />
            </Link>
          </div>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
