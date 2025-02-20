import React from "react";
import { Link, Element } from "react-scroll";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <span className="text-xl font-semibold">Blockchain</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Wallet Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
          Wallet
        </button>
      </nav>

      {/* Home Section */}
      <Element name="home">
        <header className="header">
          <video className="video-background" autoPlay loop muted>
            <source src="/src/assets/vid/background.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
          <div className="container">
            <h1 className="header__title">Welcome to Blockchain</h1>
            <p className="header__subtitle">
              Revolutionizing the way we do business, manage data, and secure transactions.
            </p>
            <button className="header__button btn-primary" aria-label="Get Started">Get Started</button>
            <div className="scroll-indicator" aria-label="Scroll Down">
              <span>Scroll Down</span>
              <div className="arrow"></div>
            </div>
          </div>
        </header>
      </Element>

      {/* Features Section */}
      <Element name="features">
        <section className="features p-10 text-center bg-gray-100">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="features-main ">
            <div className="feature-card flex-1 max-w-xs p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Decentralized</h3>
              <p className="mt-2 text-gray-600">
                Blockchain eliminates single points of failure and ensures data integrity across the network.
              </p>
            </div>
            <div className="feature-card flex-1 max-w-xs p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Secure</h3>
              <p className="mt-2 text-gray-600">
                End-to-end encryption and cryptography make blockchain technology one of the most secure systems.
              </p>
            </div>
            <div className="feature-card flex-1 max-w-xs p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Transparent</h3>
              <p className="mt-2 text-gray-600">
                All transactions are visible and auditable in real time, ensuring transparency across the board.
              </p>
            </div>
          </div>
        </section>
      </Element>

      {/* Blog Section */}
      <Element name="blog">
        <section className="blog-section">
          <div className="blog-more">
            <button className="blog-button">View more on M</button>
          </div>
          <h2 className="blog-title">What's new?</h2>  
          
          <div className="blog-main">
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">February 19, 2025, 11:47:57 PM</p>
                <h3 className="blog-title-text">Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC Zero's zkVM and Boundless for Proof...</h3>
              </div>
              <a href="#" className="blog-link">Learn More</a>
            </div>
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">February 6, 2025, 9:26:13 PM</p>
                <h3 className="blog-title-text">LayerEdge Monthly Recap—January</h3>
              </div>
              <a href="#" className="blog-link">Learn More</a>
            </div>
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">January 23, 2025, 7:01:15 AM</p>
                <h3 className="blog-title-text">LayerEdge Testnet Launch (Incentivized): Building the Bitcoin-Backed Internet</h3>
              </div>
              <a href="#" className="blog-link">Learn More</a>
            </div>
          </div>
        
        </section>
      </Element>












      {/* Contact Section */}
      <Element name="contact">
        <footer className="text-center bg-gray-900 text-white py-6">
          <p>&copy; 2025 Blockchain Technologies. All Rights Reserved.</p>
        </footer>
      </Element>
    </div>
  );
}

export default App;
