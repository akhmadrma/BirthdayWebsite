import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./SliderPhoto/SliderPhoto.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience/Experience";


function App() {

  return (

    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%'}}>
      <Experience />
    </Canvas>
  );
}

export default App;
