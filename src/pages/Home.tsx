import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bosses from "../components/sections/Bosses";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Videos from "../components/sections/Videos";

const Home = () => {
  const { hash } = useLocation();

  // Al volver desde una guía (/#bosses) baja hasta la sección indicada.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Hero />
      <Bosses/>
      <Services/>
      <Videos />
    </>
  );
};

export default Home;
