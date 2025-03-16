import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [account, setAccount] = useState(null);
  const [ensName, setEnsName] = useState("");

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setAccount(window.ethereum.selectedAddress);
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      const ens = await provider.lookupAddress(accounts[0]);
      if (ens) setEnsName(ens);
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Header Mobile (các class mới của mobile) */}
      <header className="dashboard-mobile-header">
        <div className="dashboard-mobile-logo" onClick={() => navigate("/")}>
          LayerEdge
        </div>
        <div className="dashboard-mobile-account">
          {account
            ? (ensName || account.substring(0, 6) + "..." + account.slice(-4))
            : <button onClick={connectWallet} className="dashboard-mobile-connect">Connect Wallet</button>}
        </div>
        <button className="dashboard-menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </header>


      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="logo" onClick={() => navigate("/")}>
          LayerEdge
        </h2>
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

      {/* Overlay: hiển thị khi sidebar mở */}
      {menuOpen && (
        <div
          className="dashboard-sidebar-overlay"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Nội dung chính */}
      <article className="article">
        <div className="connect-wallet">
          {account ? (
            <div>
              <p>Chào, {ensName || account.substring(0, 6) + "..." + account.slice(-4)}</p>
              <button onClick={disconnectWallet}>Disconnect</button>
            </div>
          ) : (
            <button onClick={connectWallet}>Connect Wallet</button>
          )}
        </div>
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
