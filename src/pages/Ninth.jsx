import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar.jsx";
import Avatars9 from "../components/Avatars9.jsx";
import SpotAwardRequest from "../components/SpotAwardRequest9.jsx";

function Ninth() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Avatars9 />
      <SpotAwardRequest />
    </>
  );
}

export default Ninth;
