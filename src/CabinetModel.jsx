import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MeshStandardMaterial } from "three";
import { CameraTimeline } from "./AnimatedCamera";

const originalColor = "#743EBB"
const originalMaterial = new MeshStandardMaterial({ color: originalColor, transparent: true })
const highlightMaterial =  new MeshStandardMaterial({ color: "yellow", transparent: true, opacity: 0.7 })
const originalMaterialColor = originalMaterial.color
const highlightMaterialColor = highlightMaterial.color

function CabinetModel() {
    const obj = useLoader(OBJLoader, `${import.meta.env.BASE_URL}cabinet.obj`)

    useEffect(() => {
        if (obj) {
            const top = [obj.children[0], obj.children[1]]
            const speakerStand = obj.children[7]
            // const bottom = obj.children[10]
            const controls = [obj.children[11], obj.children[12], obj.children[13], obj.children[14], obj.children[15], obj.children[16]]
            obj.traverse((child) => {
                const material = new MeshStandardMaterial({ color: originalColor, transparent: true });
                if (child.isMesh) {
                    child.material = material;
                }
            });
            // top
            top.forEach(part => {
                CameraTimeline.to(part.material, { opacity: highlightMaterial.opacity }, "toAcrylicView");
                CameraTimeline.to(part.material.color, { r: highlightMaterialColor.r, g: highlightMaterialColor.g, b: highlightMaterialColor.b }, "toAcrylicView");
                CameraTimeline.to(part.material, { opacity: originalMaterial.opacity, duration: 0.2 }, "toControlsView");
                CameraTimeline.to(part.material.color, { r: originalMaterialColor.r, g: originalMaterialColor.g, b: originalMaterialColor.b, duration: 0.2 }, "toControlsView");
            })
            // controls
            controls.forEach(part => {
                CameraTimeline.to(part.material, { opacity: highlightMaterial.opacity }, "toControlsView")
                CameraTimeline.to(part.material.color, { r: highlightMaterialColor.r, g: highlightMaterialColor.g, b: highlightMaterialColor.b }, "toControlsView")
                CameraTimeline.to(part.material, { opacity: originalMaterial.opacity, duration: 0.2 }, "toSpeakerView");
                CameraTimeline.to(part.material.color, { r: originalMaterialColor.r, g: originalMaterialColor.g, b: originalMaterialColor.b, duration: 0.2 }, "toSpeakerView");
            })

            // speaker
            CameraTimeline.to(speakerStand.material, { opacity: highlightMaterial.opacity, duration: 0.2 }, "toSpeakerView")
            CameraTimeline.to(speakerStand.material.color, { r: highlightMaterialColor.r, g: highlightMaterialColor.g, b: highlightMaterialColor.b, duration: 0.2 }, "toSpeakerView")
            CameraTimeline.to(speakerStand.material, { opacity: originalMaterial.opacity, duration: 0.2 }, "toStorage");
            CameraTimeline.to(speakerStand.material.color, { r: originalMaterialColor.r, g: originalMaterialColor.g, b: originalMaterialColor.b, duration: 0.2 }, "toStorage");
        }
        return () => CameraTimeline.kill()
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