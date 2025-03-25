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
import Knob from "./pages/Knob";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicePage title="Services" />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/knob" element={<Knob />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
