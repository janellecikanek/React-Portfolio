import "./App.css";
import React from "react";
import React, { useState } from "react"
import Header from './components/Header';
import About from './pages/About';
import Project from './pages/Project';
import Contact from "./pages/Contact"
import Nav from './components/Nav';
import Footer from './components/Footer';
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Project />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header />
      <Nav />
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
