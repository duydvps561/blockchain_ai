import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import "./dashboard.css"; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [account, setAccount] = useState(null);
  const [ensName, setEnsName] = useState("");

  // Kiểm tra nếu đã kết nối trước đó
  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setAccount(window.ethereum.selectedAddress);
    }
  }, []);

  // Kết nối ví
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]); // Lưu địa chỉ ví

      const ens = await provider.lookupAddress(accounts[0]);
            if (ens) {
                setEnsName(ens);
            }
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  // Đăng xuất (xóa địa chỉ ví)
  const disconnectWallet = () => {
    setAccount(null);
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
