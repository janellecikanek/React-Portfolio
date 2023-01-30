import React, { useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./components/css/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Project />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
