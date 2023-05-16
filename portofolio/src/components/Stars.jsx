import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useRef, Suspense } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { PointMaterial, Points , Preload } from "@react-three/drei";

const Stars = (props) => {
  const [star] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2})
  );
  const starRef = useRef();
  useFrame((state, delta) => {
    starRef.current.rotation.x -= delta / 10;
    starRef.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
    <Points ref={starRef} positions={star} stride={3} frustumCulled={false} {...props}>
      <PointMaterial transparent color="#ffa0e0" size={0.002} sizeAttenuation={true} depthWrite={false} />
    </Points>
  </group>
  )
};

const StarsCanvas = () => {
    return (
      <div className='w-full h-auto absolute inset-0 z-[-1]'>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars/>
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    );
  };
  
  export default StarsCanvas;
