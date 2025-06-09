import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Footer from "./components/usable/footer";
import Header from "./components/usable/header";

const App = () => {
  const path = useLocation().pathname;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {path === "/terms" || path === "/privacy-policy" ? null : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
