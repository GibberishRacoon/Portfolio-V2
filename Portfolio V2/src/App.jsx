import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/profile/Profile";
import Portfolio from "./components/Portfolio/Portfolio";
import { initGA, logPageView } from "./analytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useEffect(() => {
    initGA(); //init for google
    logPageView();
    // Listen for changes to the current location.
    // const unlisten = history.listen(() => {
    //   logPageView();
    // });
    // return () => {
    //   unlisten();
    // };
  }, []);

  return (
    <>
      <NavBar />
      <Profile id="about" />
      <Portfolio id="portfolio" />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
