import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import CreateStartUpPage from "./Screens/CreateStartUpScreen";
import CreateWithdrawalRequestPage from "./Screens/CreateWithdrawalRequestScreen";
import HomePage from "./Screens/HomeScreen";
import ViewStartUpPage from "./Screens/ViewStartUpScreen";
import WithdrawalRequestPage from "./Screens/WithdrawalRequestScreen";

const App = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/createstartup" element={<CreateStartUpPage />} />
        <Route path="/viewstartup" element={<ViewStartUpPage />} />
        <Route
          path="/createrequest"
          element={<CreateWithdrawalRequestPage />}
        />
        <Route path="/withdrawalrequest" element={<WithdrawalRequestPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
