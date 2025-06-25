import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Love } from "./Love";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import TimeInterval from "../TimeInterval/TimeInterval";
import SliderPhoto from "../SliderPhoto/SliderPhoto";
import data from "../SliderPhoto/data";
import "bootstrap/dist/css/bootstrap.min.css";

function CenteredObject() {
  const boxRef = useRef();

  useFrame(() => {
    if (boxRef.current) {
      // Keep the object at the same position in the world space
      boxRef.current.position.set(0, 0, 0);
    }
  });

  return (
    <Love ref={boxRef} position={[0, 0, 0]}/>
  );
}

export const Experience = () =>{
return(
    <>
    <ambientLight intensity={0.2} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
    <PerspectiveCamera position={[0, 0, 0]} />
    <ScrollControls pages={3} >
        <Scroll html className="center" >
          <div className="container scroll-content">
            <div className="row">
              <TimeInterval />
            </div>
            <div className="row">
              <SliderPhoto data={data} activeSlide={2} />
            </div>
          </div>
          </Scroll>
    <CenteredObject />
    </ScrollControls>
    
    
    
    </>
)
}