import React from "react";
import "./dashboard.css"; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">LayerEdge</h2>
        <ul className="menu">
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
      <button className="connect-wallet">Connect Wallet</button>
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
