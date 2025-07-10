import React, { useState } from "react";
import NavigationBar from "../navigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import SignUpBox from "../components/SignUpBox";
import SignUpForm from "../components/SignUpForm";

export default function Layout() {
  const [showSignUpBox, setShowSignUpBox] = useState(false);
  return (
    <>
      <NavigationBar setShowSignUpBox={setShowSignUpBox} />
      {showSignUpBox && (
        <SignUpBox>
          <SignUpForm setShowSignUpBox={setShowSignUpBox} />
        </SignUpBox>
      )}
      <Outlet />
      <Footer />
    </>
  );
}
