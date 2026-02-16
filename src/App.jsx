import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function RouteScrollManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useLayoutEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  return null;
}

function App() {
  return (
    <>
      <RouteScrollManager />
      <Outlet />
    </>
  );
}

export default App;
