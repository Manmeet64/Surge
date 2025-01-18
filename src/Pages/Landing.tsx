import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../Components/Mascot.jsx";

function Landing() {
  return (
    <div className="w-[100%] h-[110vh] flex flex-col justify-center bg-white items-center bg-custom-gradient">
      <div className="w-[100%] h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold font-poppins text-center text-[#8f41cf]">
          Because people <br />
          make businesses
        </h1>
      </div>
      <Canvas className="w-[100%] h-[50vh] flex justify-center items-center">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default Landing;
