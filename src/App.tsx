import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import { Signup } from "./screens/Signup";
import Login from "./screens/Login";
import Areas from "./screens/Areas";
import ApplyForProgrammer from "./screens/Apply";
import ApplicationStatus from "./screens/CheckStatus";
import Contact from "./screens/Contact";
import Services from "./screens/Services";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";
import Footer from "./components/Footer";
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Hamburger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/apply" element={<ApplyForProgrammer />} />
        <Route path="/checkStatus" element={<ApplicationStatus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
