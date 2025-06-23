import { OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Love } from "./Love";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import TimeInterval from "../TimeInterval/TimeInterval";
import SliderPhoto from "../SliderPhoto/SliderPhoto";
import data from "../SliderPhoto/data";

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
    <OrbitControls enableZoom={false}/>
    <PerspectiveCamera position={[0, 0, 0]} />
    <ScrollControls pages={3}>
        <Scroll html className="center" >
            {/* Konten scroll yang terpusat */}
            <div className="scroll-content">
              <TimeInterval className="d-flex justify-content-center align-items-center min-vh-100 text-center mb-2" />
              <SliderPhoto data={data} activeSlide={2} />
            </div>
          </Scroll>
    <CenteredObject />
    </ScrollControls>
    
    
    
    </>
)
}