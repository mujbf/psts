import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Footer from "./components/sections/Footer";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services/consulting"
            element={<ServicePage title="Consulting" />}
          />
          <Route
            path="/services/development"
            element={<ServicePage title="Development" />}
          />
          <Route
            path="/services/design"
            element={<ServicePage title="Design" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
