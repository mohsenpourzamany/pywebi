import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CarouselPage from "../header/CarouselPage";

const SignPage = () => {
  return (
    <>
      <CarouselPage />
      <div className="row">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default SignPage;
