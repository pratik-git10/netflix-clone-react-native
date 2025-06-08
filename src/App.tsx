import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Footer from "./components/usable/footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
