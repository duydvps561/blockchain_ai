import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home_page/page";
import DocsWebsite from "./docs/page";
import Dashboard from "./Dashboard/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<DocsWebsite />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
