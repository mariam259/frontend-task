import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Loging from "./Components/Loging";
import Payment from "./Components/Payment";
import Trainers from "./Components/Trainers";
import Nav from "./Components/Nav";
import PieCharts from "./Components/PieCharts";
import LinkCourseToTrainer from "./Components/LinkCourseToTrainer";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Nav />}

      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Loging />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/chart" element={<PieCharts />} />
        <Route path="/link" element={<LinkCourseToTrainer />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}