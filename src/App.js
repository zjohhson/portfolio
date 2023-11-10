import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Testimonial from "./Pages/Home/Testimonials";
import ChatNYT from "./Pages/Home/ChatNYT";
import JPL from "./Pages/Home/JPL";
import Jailbreak from "./Pages/Home/Jailbreak";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ChatNYT" element={<ChatNYT/>}></Route>
            <Route path="/JPL" element={<JPL/>}></Route>
            <Route path="/Jailbreak" element={<Jailbreak/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
