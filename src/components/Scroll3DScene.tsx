"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Html, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

function CuteHumanoidRobot() {
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (x > 0.55 && y > 0.1 && y < 0.9) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const robotGroupRef = useRef<THREE.Group>(null);
  const headGroupRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!robotGroupRef.current || !headGroupRef.current || !leftEyeRef.current || !rightEyeRef.current || !leftArmRef.current || !rightArmRef.current) return;

    // Look around animation based on time (subtle idle movement)
    const lookX = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    const lookY = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    headGroupRef.current.rotation.x = THREE.MathUtils.lerp(headGroupRef.current.rotation.x, lookX, 0.05);
    headGroupRef.current.rotation.y = THREE.MathUtils.lerp(headGroupRef.current.rotation.y, lookY, 0.05);

    // Blinking logic
    const time = state.clock.elapsedTime;
    const blink = Math.sin(time * 4) > 0.95 ? 0.1 : 1;
    if (!hovered) {
      leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, blink, 0.5);
      rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, blink, 0.5);
    }

    // Gentle arm swinging
    leftArmRef.current.rotation.x = Math.sin(time * 2) * 0.1;
    rightArmRef.current.rotation.x = Math.sin(time * 2 + Math.PI) * 0.1;
    rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, 0, 0.1);
  });

  // Common materials
  const whiteCeramic = new THREE.MeshPhysicalMaterial({ color: "#ffffff", metalness: 0.1, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.1 });
  const blackGlass = new THREE.MeshPhysicalMaterial({ color: "#050505", metalness: 0.9, roughness: 0.1, clearcoat: 1 });
  const emeraldGlow = new THREE.MeshBasicMaterial({ color: "#10b981" });
  const darkJoint = new THREE.MeshStandardMaterial({ color: "#222222", metalness: 0.8, roughness: 0.5 });

  return (
    <group ref={robotGroupRef} position={[3.8, -1.5, 0]} rotation={[0, -0.2, 0]} scale={0.85}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>

        {/* Head Group */}
        <group ref={headGroupRef} position={[0, 1.8, 0]}>
          {/* Head Shell */}
          <RoundedBox args={[2, 1.5, 1.6]} radius={0.4} smoothness={4} material={whiteCeramic} />

          {/* Visor */}
          <RoundedBox args={[1.8, 1.2, 1.7]} position={[0, 0, 0.05]} radius={0.3} smoothness={4} material={blackGlass} />
          
          {hovered ? (
            <Text
              position={[0, 0, 0.91]}
              fontSize={0.45}
              color="#10b981"
              anchorX="center"
              anchorY="middle"
              material-toneMapped={false}
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf"
            >
              Hello!
            </Text>
          ) : (
            <>
              {/* Left Eye */}
              <mesh ref={leftEyeRef} position={[-0.4, 0, 0.9]} material={emeraldGlow}>
                <sphereGeometry args={[0.2, 32, 32]} />
              </mesh>
              
              {/* Right Eye */}
              <mesh ref={rightEyeRef} position={[0.4, 0, 0.9]} material={emeraldGlow}>
                <sphereGeometry args={[0.2, 32, 32]} />
              </mesh>
            </>
          )}

          {/* Ears/Antennae */}
          <mesh position={[-1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={whiteCeramic}>
            <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
          </mesh>
          <mesh position={[1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={whiteCeramic}>
            <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 0.9, 0]} material={darkJoint}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
        </mesh>

        {/* Body */}
        <mesh position={[0, 0, 0]} material={whiteCeramic}>
          <capsuleGeometry args={[0.8, 0.8, 32, 32]} />
        </mesh>

        {/* Left Arm */}
        <group position={[-1.1, 0.4, 0]}>
          <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={darkJoint}>
            <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
          </mesh>
          <mesh ref={leftArmRef} position={[-0.2, -0.6, 0]} material={whiteCeramic}>
            <capsuleGeometry args={[0.25, 0.8, 32, 32]} />
          </mesh>
        </group>

        {/* Right Arm */}
        <group position={[1.1, 0.4, 0]}>
          <mesh position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={darkJoint}>
            <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
          </mesh>
          <mesh ref={rightArmRef} position={[0.2, -0.6, 0]} material={whiteCeramic}>
            <capsuleGeometry args={[0.25, 0.8, 32, 32]} />
          </mesh>
        </group>

        {/* Speech Bubble using HTML */}
        <Html position={[-1.5, 3, 0]} center zIndexRange={[100, 0]}>
          <div className="w-64 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl text-slate-800 text-sm font-medium leading-relaxed opacity-100">
            <div className="absolute right-4 -bottom-2 w-4 h-4 bg-white/95 border-b border-r border-slate-200 rotate-45" />
            <p className="relative z-10 font-bold text-brand-primary mb-1 text-xs tracking-wider">NEX ASSISTANT</p>
            <p className="relative z-10">Hello! I am Nex, your AI assistant. Scroll down to see what we do.</p>
          </div>
        </Html>
      </Float>
    </group>
  );
}

export default function Scroll3DScene() {
  return (
    <div className="absolute top-0 right-0 w-full h-[100vh] pointer-events-none z-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, 5, 5]} intensity={1.5} color="#e2e8f0" />
        <pointLight position={[0, 2, 2]} intensity={2} color="#10b981" distance={5} />

        <CuteHumanoidRobot />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
