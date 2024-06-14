import { useState } from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./components/Pages/About.jsx";
import Home from "./components/Pages/Home.jsx";

import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Header>
          {/* Navigation Links */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </Header>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
