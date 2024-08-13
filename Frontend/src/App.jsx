import React from "react";

import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/courses";
import Signup from "./components/Signup";
import Contacts from "./Contacts/Contacts";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
