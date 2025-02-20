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
          <img
            src="../public/img/iotext.png"
            alt="Logo"
            className=" object-contain"
          />
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
        <button className="wallet-btn">Wallet</button>
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
              Revolutionizing the way we do business, manage data, and secure
              transactions.
            </p>
            <button
              className="header__button btn-primary"
              aria-label="Get Started"
            >
              Get Started
            </button>
            <div className="scroll-indicator" aria-label="Scroll Down">
              <span>Scroll Down</span>
              <div className="arrow"></div>
            </div>
          </div>
        </header>
      </Element>

      {/* Features Section */}
      <Element name="features">
        <section className="features p-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>

          <div className="feature-main">
            {[
              {
                title: "Beginner Plan",
                price: "$199/month",
                description: "Blockchain eliminates single",
                features: [
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                ],
              },
              {
                title: "Intermediate Plan",
                price: "$349/month",
                description: "End-to-end encryption",
                features: [
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                ],
              },
              {
                title: "Advanced Plan",
                price: "$450/month",
                description: "All transactions are visible",
                features: [
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                  "Access to basic blockchain guides",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="feature-card p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="feature-des space-y-2">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="border-b border-gray-200 pb-2">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
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
                <h3 className="blog-title-text">
                  Scaling the Bitcoin-backed Internet: LayerEdge leverages RISC
                  Zero's zkVM and Boundless for Proof...
                </h3>
              </div>
              <a href="#" className="blog-link">
                Learn More
              </a>
            </div>
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">February 6, 2025, 9:26:13 PM</p>
                <h3 className="blog-title-text">
                  LayerEdge Monthly Recap—January
                </h3>
              </div>
              <a href="#" className="blog-link">
                Learn More
              </a>
            </div>
            <div className="blog-card">
              <div className="blog-header">
                <p className="blog-date">January 23, 2025, 7:01:15 AM</p>
                <h3 className="blog-title-text">
                  LayerEdge Testnet Launch (Incentivized): Building the
                  Bitcoin-Backed Internet
                </h3>
              </div>
              <a href="#" className="blog-link">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </Element>
      {/* Contact Section */}
      <Element name="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-box">
            <img className="contact-img" src="../public/img/snarkify.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="../public/img/orichi.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="../public/img/qai.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="../public/img/bqlabs.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="../public/img/clique.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="../public/img/zkm.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="../public/img/degame.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
          <div className="contact-box">
            <img className="contact-img" src="../public/img/avail.png"></img>
            <p>
              Blockchain technology is an advanced database mechanism that
              allows transparent information sharing within a business network.
            </p>
          </div>
        </div>
      </Element>
      <footer>
        <p>&copy; 2025 Blockchain. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
