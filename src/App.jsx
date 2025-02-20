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
        <header className="text-center py-20 bg-gray-800 text-white">
          <h1 className="text-4xl font-bold">Welcome to Blockchain</h1>
          <p className="mt-4 text-lg">
            Revolutionizing the way we do business, manage data, and secure
            transactions.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
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
                Blockchain eliminates single points of failure and ensures data
                integrity across the network.
              </p>
            </div>
            <div className="feature-card flex-1 max-w-xs p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Secure</h3>
              <p className="mt-2 text-gray-600">
                End-to-end encryption and cryptography make blockchain
                technology one of the most secure systems.
              </p>
            </div>
            <div className="feature-card flex-1 max-w-xs p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Transparent</h3>
              <p className="mt-2 text-gray-600">
                All transactions are visible and auditable in real time,
                ensuring transparency across the board.
              </p>
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
