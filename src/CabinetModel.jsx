import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";

function CabinetModel() {
    const obj = useLoader(OBJLoader, `${import.meta.env.BASE_URL}cabinet.obj`)
    console.log(obj)

    useEffect(() => {
        if (obj) {
            const material = new MeshStandardMaterial({ color: "#743EBB" });

            obj.traverse((child) => {
                if (child.isMesh) {
                    child.material = material;
                }
            });
        }
    }, [obj]);
    return (
        <primitive
            object={obj}
            position={[1,0,0]}
            scale={0.05}
            // rotation={[0,0,0]}
            rotation={[-Math.PI/2, 0, Math.PI/3]}
        >
        </primitive>
    )
}

export default CabinetModel