import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import RequirementsPage from "./pages/RequirementsPage";
import FamilyPage from "./pages/FamilyPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <CssBaseline />
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inspiration" element={<GalleryPage />} />
          <Route path="/requirements" element={<RequirementsPage />} />
          <Route path="/family" element={<FamilyPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
