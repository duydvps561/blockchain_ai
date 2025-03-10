import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, Home } from "lucide-react";
import contentData from "./contentData";
import "./docs.css";

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

export default function DocsWebsite() {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [expandedSection, setExpandedSection] = useState("Introduction");
  const [activeSubSection, setActiveSubSection] = useState("IntroductionToLayerEdge");

  // Xác định thiết bị: mobile hay desktop
  const [isMobile, setIsMobile] = useState(false);
  // Trên desktop, sidebar luôn hiển thị; trên mobile, ẩn mặc định
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (document.documentElement.clientWidth <= 768) {
        setIsMobile(true);
        setIsSidebarVisible(false);
      } else {
        setIsMobile(false);
        setIsSidebarVisible(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionClick = useCallback(
    (section) => {
      setActiveSection(section.name);
      setExpandedSection(expandedSection === section.name ? null : section.name);
      setActiveSubSection(null);
      // Nếu đang ở mobile, chọn mục cũng có thể ẩn menu đi (nếu mong muốn)
      if (isMobile) setIsSidebarVisible(false);
    },
    [expandedSection, isMobile]
  );

  const handleSubSectionClick = useCallback((subSection) => {
    setActiveSubSection(subSection);
    if (isMobile) setIsSidebarVisible(false);
  }, [isMobile]);

  const toggleSidebar = () => {
    console.log("Toggle sidebar clicked!");
    setIsSidebarVisible((prev) => !prev);
  };

  const content = contentData[activeSubSection] || [
    { type: "h1", text: activeSubSection || activeSection },
  ];

  return (
    <div className="docs-container">
      <nav className="docs-navbar">
        {/* Chỉ render nút toggle khi ở mobile */}
        {isMobile && (
          <button className="docs-toggle-button" onClick={toggleSidebar}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="PrimaryHeader_icon__rcP05"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
        )}
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

      {/* Sidebar: trên mobile, nếu isSidebarVisible === true, thêm class "visible" để hiện sidebar (nằm ngay dưới header) */}
      <aside className={`docs-sidebar ${isMobile && isSidebarVisible ? "visible" : ""}`}>
        <div className="docs-menu">
          {sections.map((section) => (
            <div key={section.name}>
              <Button
                className={`docs-menu-button ${activeSection === section.name ? "docs-active" : ""}`}
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

      <main className="docs-content">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="docs-content-card">
            <CardContent>
              {content.map((item, index) => {
                if (item.type === "h1") return <h1 key={index}>{item.text}</h1>;
                if (item.type === "h2") return <h2 key={index}>{item.text}</h2>;
                if (item.type === "p") return <p key={index}>{item.text}</p>;
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
              })}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
