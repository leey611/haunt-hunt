import { useRef, useEffect } from "react"
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";

export const CameraTimeline = gsap.timeline({
    paused: true, // We set this here so we can adjust progress tied to scroll
});

function AnimatedCamera() {
    const cameraRef = useRef()

    useEffect(() => {
        // move to top view
        CameraTimeline.to(
            cameraRef.current.position,
            {
                y: 8,
                z: -1.67
            },
            "toTopView"
        )
        CameraTimeline.to(
            cameraRef.current.rotation,
            {
                x: -Math.PI/2,
                z: Math.PI/3
            },
            "toTopView"
        )
        // move closer to top
        CameraTimeline.to(
            cameraRef.current.position,
            {
                y: 5,
                z: -1.67
            },
            "toTopViewClose"
        )
        // stay , not move
        CameraTimeline.to(
            cameraRef.current.position,
            {
                y: 5,
                z: -1.67
            },
            "toTopViewClose-2"
        )
        
        // to acrylic view
        CameraTimeline.to(
            cameraRef.current.position,
            {
                y: 8,
                z: -1.67
            },
            "toAcrylicView"
        )
        
        // to speaker view
        CameraTimeline.to(
            cameraRef.current.position,
            {
                x: -0.5,
                y: 0,
                z: 5,
                // y: 5,
                // z: -1.67
            },
            "toSpeakerView"
        )
        CameraTimeline.to(
            cameraRef.current.rotation,
            {
                x: 0,//-Math.PI/2,
                z: 0,//Math.PI/3
            },
            "toSpeakerView"
        )
        // CameraTimeline.to(
        //     cameraRef.current.position,
        //     {
        //         y: 8,
        //         z: -1.67
        //     },
        //     "slide4-5"
        // )
        // CameraTimeline.to(
        //     cameraRef.current.rotation,
        //     {
        //         x: -Math.PI/2,
        //         z: Math.PI/3
        //     },
        //     "slide4-5"
        // )

        // 5-6
        
        CameraTimeline.to(
            cameraRef.current.position,
            {
                x: 1.8,
                y: 3,
                z: 3
            },
            "toControlsView"
        )
        CameraTimeline.to(
            cameraRef.current.rotation,
            {
                x: -Math.PI/4,
                y: 0,
                z: 0
            },
            "toControlsView"
        )

        // 6-7
        // CameraTimeline.to(
        //     cameraRef.current.position,
        //     {
        //         x: 1.5,
        //         y: 0,
        //         z: -13
        //     },
        //     "slide6-7"
        // )
        CameraTimeline.to(
            cameraRef.current.position,
            {
                x: 0.5,
                y: -1,
                z: -12
            },
            "toStorage"
        )
        CameraTimeline.to(
            cameraRef.current.rotation,
            {
                x: 0,
                y: -Math.PI,
                z:0
                // x: -Math.PI/2,
                // // y: -Math.PI/2,
                // z: -Math.PI/3
            },
            "toStorage"
        )

        // credit
        CameraTimeline.to(
            cameraRef.current.position,
            {
                x: 0,
                y: 0,
                z: 10
            },
            "end"
        )
        CameraTimeline.to(
            cameraRef.current.rotation,
            {
                x: 0,
                y: -Math.PI * 2,
                z: 0
                // x: -Math.PI/2,
                // // y: -Math.PI/2,
                // z: -Math.PI/3
            },
            "end"
        )
        
        return () => CameraTimeline.kill()
    }, [])
    return (
        <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            position={[0, 0, 10]}
            // near={10}
            // far={500}
            // fov={55}
        />
    )
}

export default AnimatedCamera