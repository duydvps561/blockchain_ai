import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import "./dashboard.css"; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
        console.log("Connected Wallet Address:", accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
      <h2 
  className="logo" 
  style={{ cursor: "pointer" }} 
  onClick={() => window.location.href = "/"}
>
  LayerEdge
</h2>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        <ul className={`menu ${menuOpen ? "show" : ""}`}>
          <li>Dashboard</li>
          <li>Tasks</li>
          <li>Proofs</li>
          <li>Referrals</li>
          <li>Mint</li>
          <li>FAQs</li>
          <li>Explorer</li>
          <li>Website</li>
        </ul>
      </aside>
      <article className="article">
      <button onClick={connectWallet} className="connect-wallet">
      {walletAddress ? `Connected: ${walletAddress.substring(0, 6)}...` : "Connect Wallet"}
    </button>
        <main className="main-content">
          <div className="action-card">
            <p>Run a light client and start earning points</p>
            <button>Start Now</button>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Dashboard;
