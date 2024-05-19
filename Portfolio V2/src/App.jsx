import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarU from "./components/NavBar/NavBarU";
import Profile from "./components/profile/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarU />
      <Profile />
    </>
  );
}

export default App;
