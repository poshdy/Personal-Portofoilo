import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload, OrbitControls, Center } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { styles } from "../styles";

const EarthCanvas = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <div className={`${styles.Container} ${styles.space}  w-[90%] md:[50%] h-[450px] md:h-[600px]`}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 35,
        }}
      >
        {/* <ambientLight intensity={0.4} /> */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Center>
            <primitive object={earth.scene}  />;
          </Center>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
