// components/PageLoader.tsx

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./loader";

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate page loading for 500ms

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div className="absolute top-5 right-4 text-sm text-muted-foreground px-3 py-1 rounded shadow z-50">
          <Loader />
        </div>
      )}
      <div
        className={`${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        } duration-300`}>
        {children}
      </div>
    </>
  );
};

export default PageLoader;
