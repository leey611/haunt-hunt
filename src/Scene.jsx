import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CabinetModel from "./CabinetModel";
import AnimatedCamera from "./AnimatedCamera";
function Scene() {
    return (
        <div id="canvas_wrapper">
            <Canvas>
                <AnimatedCamera />
                <ambientLight intensity={1} />
                <pointLight position={[0, 2, 2]} intensity={20} />
                <pointLight position={[-5, 2, 0]} intensity={40} />
                <pointLight position={[0, 0, -10]} intensity={30} />
                {/* <pointLight position={[0, 80, -200]} intensity={10000} /> */}
                {/* <color args={["black"]} attach={"background"}/> */}
                {/* <OrbitControls /> */}
                <Suspense fallback={null}>
                    <CabinetModel />
                </Suspense>
            </Canvas>
            
        </div>
    )
}

export default Scene