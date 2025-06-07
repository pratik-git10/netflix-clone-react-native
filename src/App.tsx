import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Footer from "./components/usable/footer";
import PageLoader from "./components/usable/PageLoader";
// import { Home } from "@/pages/Home.";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Router>
          <PageLoader>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<Privacy />} />
            </Routes>
          </PageLoader>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
