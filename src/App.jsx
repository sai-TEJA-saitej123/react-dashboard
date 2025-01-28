import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
