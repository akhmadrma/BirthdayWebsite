import React, { useState } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useLayoutEffect,useRef } from "react";
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export function Love(props) {
  const { nodes, materials } = useGLTF('../models/icons8_lego_heart.glb')
    const ref = useRef()
    const tl = useRef()
    const scroll = useScroll()
    const [scale, setScale] = useState([1, 1, 1]); // Initialize scale

    useFrame(()=>{
    const scrollProgress = scroll.range(0, 1); // Get the normalized scroll progress (0 to 1)
    const newScale = 3 - scrollProgress * 2; // Zoom in effect (2x max zoom)
    setScale([newScale, newScale, newScale]);
     // Rotate object based on scroll progress (smooth rotation)
    const rotationValue = scrollProgress * Math.PI; // Rotate up to 180 degrees based on scroll
    if (ref.current) {
      gsap.to(ref.current.rotation, {
        y: rotationValue,
        duration: 0.5, // Smooth rotation duration
        ease: "power2.out", // Easing for smooth transition
      });
    }
    })

    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
    },[])
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes.icons8_lego_heart.geometry} material={materials.icons8_lego_heart} position={[0, 0, 0]} scale={scale} />
    </group>
  )
}
 
useGLTF.preload('../models/icons8_lego_heart.glb')
