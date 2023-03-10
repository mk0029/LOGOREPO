import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Tokemonics from "./components/Tokemonics";
import { RoadMap } from "./components/RoadMap";
import Loader from "./components/Loader";
import Backtop from "./components/Backtop";
import "./App.css";
import FAQ from "./components/FAQ";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      {/* <Backtop /> */}
      <Loader />
      <Header />
      <Tokemonics />
      <RoadMap />
      <FAQ />
    </div>
  );
}

export default App;
