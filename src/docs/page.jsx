import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Home, Info } from "lucide-react";
import contentData from "./contentData";
import "./docs.css";

export default function DocsWebsite() {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [expandedSection, setExpandedSection] = useState("Introduction"); // Mở rộng mặc định
  const [activeSubSection, setActiveSubSection] = useState(
    "IntroductionToLayerEdge"
  );

  const sections = [
    {
      name: "Introduction",
      icon: <Home size={20} />,
      subSections: ["IntroductionToLayerEdge"],
    },
    {
      name: "NETWORK",
      icon: <FileText size={20} />,
      subSections: ["NetWorkInfor", "Quick Start", "Requirements"],
    },
    { name: "Components", icon: <FileText size={20} /> },
    { name: "API Reference", icon: <FileText size={20} /> },
    { name: "FAQ", icon: <FileText size={20} /> },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section.name);
    setExpandedSection(expandedSection === section.name ? null : section.name);
    setActiveSubSection(null);
  };

  const handleSubSectionClick = (subSection) => {
    setActiveSubSection(subSection);
  };

  const content = contentData[activeSubSection] || [
    { type: "h1", text: activeSubSection || activeSection },
  ];

  return (
    <div className="docs-container">
      {/* Sidebar */}
      <nav className="docs-navbar">
        <div className="docs-logo">
          <img
            src="https://media-hosting.imagekit.io//7002c0c85af843d1/logo-removebg-preview.png?Expires=1836138153&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wmdY~NaTRMdv4vdhJ~gn0tG0hrZlqYNTny1tGWnph3Se~QBWGIADSxmo1gOLjawdOW3Y1X7qUAwFjGCYkDXg9vxGuI3zC~n3o2K24AG2m21MweUCGQCTM3CwTkN7zsJ1zw3yOCbO1BdJX8nafDThP7fsRXKlBzjbUPk3V~iHJ67-O6SwPqeVo9RE5ucVz1qWjJrK3MJ7Tqv9vnu1vpVmCEML8FhD97ij-wQe2MMmBy9el-xFhgKAQw89THDQhSoUZ7EloiBbnrr3028GKzfxwCqBaHgtruBB-60hKehxg90wGkqmLJ6pbpIl-WDselAk9svapgJXEZegWXLzjhSCGA__"
            alt="Logo"
          />
        </div>
        <div className="docs-search">
          <Input placeholder="Search..." icon={<Search size={16} />} />
        </div>
      </nav>

      <aside className="docs-sidebar">
        <div className="docs-menu">
          {sections.map((section) => (
            <div key={section.name}>
              <Button
                className={`docs-menu-button ${
                  activeSection === section.name ? "docs-active" : ""
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section.icon}
                <span>{section.name}</span>
              </Button>
              <AnimatePresence>
                {expandedSection === section.name && section.subSections && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="docs-submenu"
                  >
                    {section.subSections.map((sub) => (
                      <Button
                        key={sub}
                        className="docs-submenu-button"
                        onClick={() => handleSubSectionClick(sub)}
                      >
                        {sub}
                      </Button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </aside>

      {/* Nội dung chính */}
      <main className="docs-content">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="docs-content-card">
            <CardContent>
              {contentData[activeSubSection] // Ưu tiên subSection nếu có
                ? contentData[activeSubSection].map((item, index) => {
                    if (item.type === "h1")
                      return <h1 key={index}>{item.text}</h1>;
                    if (item.type === "h2")
                      return <h2 key={index}>{item.text}</h2>;
                    if (item.type === "p")
                      return <p key={index}>{item.text}</p>;
                    if (item.type === "info")
                      return (
                        <div key={index} className="info-box">
                          <p>{item.text}</p>
                          {item.link && (
                            <a href={item.link.url} className="info-link">
                              {item.link.text}
                            </a>
                          )}
                        </div>
                      );
                    return null;
                  })
                : contentData[activeSection]?.map((item, index) => {
                    if (item.type === "h1")
                      return <h1 key={index}>{item.text}</h1>;
                    if (item.type === "h2")
                      return <h2 key={index}>{item.text}</h2>;
                    if (item.type === "p")
                      return <p key={index}>{item.text}</p>;
                    return null;
                  })}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
