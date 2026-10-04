import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CppProgrammingProjects from "./pages/CppProgrammingProjects";
import MyFirstPortfolio from "./pages/MyFirstPortfolio";
import EngineeringProjects from "./pages/EngineeringProjects";

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* C++ Programming Projects Page */}
        <Route
          path="/projects/cpp-programming"
          element={<CppProgrammingProjects />}
        />

        {/* My First Portfolio Page */}
        <Route
          path="/projects/my-first-portfolio"
          element={<MyFirstPortfolio />}
        />

        {/* Engineering Projects Page */}
        <Route
          path="/projects/engineering-projects"
          element={<EngineeringProjects />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;