import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

export default function Earth() {
    const mapTextures = [
        "/textures/clouds.jpg",
        "/textures/daymap.jpg",
        "/textures/normal_map.jpg",
        "/textures/specular_map.jpg"
    ]
    const [cloudTexture, dayTexture, normalTexture, specularTexture] = useLoader(TextureLoader, mapTextures)
    const earthRef = React.useRef() as React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>> | undefined;
    const cloudsRef = React.useRef() as React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>> | undefined;
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        console.log(earthRef?.current.position)
        earthRef && (earthRef.current.rotation.y = elapsedTime / 6);
        cloudsRef && (cloudsRef.current.rotation.y = elapsedTime / 6);
    });

    return (
            <Suspense fallback={null}>
                <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
                <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true}/>
                <mesh ref={cloudsRef} position={[1.5, 0, 0]} scale={[2.5, 2.5, 2.5]}>
                    <sphereGeometry args={[1.004, 32, 32]} />
                    <meshPhongMaterial map={cloudTexture} opacity={0.4} depthWrite={false} transparent={true} side={THREE.DoubleSide}/>
                </mesh>
                <mesh ref={earthRef} position={[1.5, 0, 0]} scale={[2.5, 2.5, 2.5]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial specularMap={specularTexture} />
                    <meshStandardMaterial metalness={0.4} roughness={0.7} map={dayTexture} normalMap={normalTexture} />
                    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} panSpeed={0.5} rotateSpeed={0.4} zoomSpeed={0.5} />
                </mesh>
            </Suspense>
    );
};
