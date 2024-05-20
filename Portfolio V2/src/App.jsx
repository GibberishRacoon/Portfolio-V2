import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarU from "./components/NavBar/NavBarU";
import Profile from "./components/profile/Profile";
import Portfolio from "./components/Portfolio/Portfolio";
import { initGA, logPageView } from "./analytics";

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
      <NavBarU />
      <Profile id="about" />
      <Portfolio id="portfolio" />
    </>
  );
}

export default App;
