import { useState } from "react";

import "./App.css";
import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Videos  from "./Componentes/Videos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Hero/>
      <Videos/>
    </>
  );
}

export default App;
