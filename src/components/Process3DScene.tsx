"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Html, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

function LiveCodeScreen() {
  const [code, setCode] = useState("");
  const [cursor, setCursor] = useState("█");
  const fullCode = `const workflow = analyze();
async function automate() {
  console.log("Optimizing...");
  for (let task of workflow) {
    await ai.process(task);
  }
  return deploy();
}

// SYSTEM READY...`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length + 20) i = 0; // Pause at end before looping
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor(c => c === "█" ? "" : "█");
    }, 300);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Text
      position={[-0.9, 0.45, 0.05]}
      fontSize={0.09}
      color="#10b981"
      anchorX="left"
      anchorY="top"
      maxWidth={1.8}
      lineHeight={1.4}
      material-toneMapped={false} // Make the green glow very bright
    >
      {code + cursor}
    </Text>
  );
}

function TaskRobot() {
  const [hovered, setHovered] = useState(false);
  const robotGroupRef = useRef<THREE.Group>(null);
  const headGroupRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!robotGroupRef.current || !headGroupRef.current || !leftEyeRef.current || !rightEyeRef.current || !leftArmRef.current || !rightArmRef.current) return;
    
    const time = state.clock.elapsedTime;

    // Hover animations
    const targetScale = hovered ? 1.0 : 0.9;
    const targetRotY = hovered ? 0.2 : 0.6;
    robotGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    robotGroupRef.current.rotation.y = THREE.MathUtils.lerp(robotGroupRef.current.rotation.y, targetRotY, 0.1);

    // Focused looking animation (slight jitter)
    const lookX = Math.sin(time * 2) * 0.05 + 0.1; // Looking down slightly at the "screen"
    const lookY = Math.sin(time * 1.5) * 0.05;
    headGroupRef.current.rotation.x = THREE.MathUtils.lerp(headGroupRef.current.rotation.x, lookX, 0.1);
    headGroupRef.current.rotation.y = THREE.MathUtils.lerp(headGroupRef.current.rotation.y, lookY, 0.1);

    // Fast blinking (processing data)
    const blink = Math.sin(time * 15) > 0.9 ? 0.1 : 1;
    leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, blink, 0.8);
    rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, blink, 0.8);

    // Typing/working arm animation
    leftArmRef.current.rotation.x = Math.sin(time * 10) * 0.4 - 0.5;
    rightArmRef.current.rotation.x = Math.cos(time * 12) * 0.4 - 0.5;
  });

  // Common materials
  const whiteCeramic = new THREE.MeshPhysicalMaterial({ color: "#ffffff", metalness: 0.1, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.1 });
  const blackGlass = new THREE.MeshPhysicalMaterial({ color: "#050505", metalness: 0.9, roughness: 0.1, clearcoat: 1 });
  const emeraldGlow = new THREE.MeshBasicMaterial({ color: "#10b981" });
  const darkJoint = new THREE.MeshStandardMaterial({ color: "#222222", metalness: 0.8, roughness: 0.5 });

  return (
    <group 
      ref={robotGroupRef} 
      position={[0, -0.5, 0]} 
      rotation={[0, 0.6, 0]} 
      scale={0.9}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
    >
      <Float speed={3} rotationIntensity={0.05} floatIntensity={0.1}>
        
        {/* Head Group */}
        <group ref={headGroupRef} position={[0, 1.8, 0]}>
          <RoundedBox args={[2, 1.5, 1.6]} radius={0.4} smoothness={4} material={whiteCeramic} />
          <RoundedBox args={[1.8, 1.2, 1.7]} position={[0, 0, 0.05]} radius={0.3} smoothness={4} material={blackGlass} />
          
          <mesh ref={leftEyeRef} position={[-0.4, 0, 0.9]} material={emeraldGlow}>
            <sphereGeometry args={[0.2, 32, 32]} />
          </mesh>
          <mesh ref={rightEyeRef} position={[0.4, 0, 0.9]} material={emeraldGlow}>
            <sphereGeometry args={[0.2, 32, 32]} />
          </mesh>

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

        {/* Holographic Working Screen */}
        <group position={[0, 0.5, 1.2]} rotation={[-0.4, 0, 0]}>
          {/* Typing Code Overlay */}
          <LiveCodeScreen />
          
          <mesh>
            <planeGeometry args={[2, 1.2]} />
            <meshBasicMaterial color="#39FF14" transparent opacity={0.15} side={THREE.DoubleSide} />
          </mesh>
          <mesh>
            <planeGeometry args={[2, 1.2]} />
            <meshBasicMaterial color="#39FF14" wireframe transparent opacity={0.3} />
          </mesh>
        </group>
        
        {/* Speech Bubble */}
        <Html position={[0, 3.2, 0]} center zIndexRange={[100, 0]}>
          <div className={`w-48 p-3 rounded-xl backdrop-blur-md shadow-2xl text-xs font-medium leading-relaxed opacity-100 text-center transition-all duration-300 ${hovered ? 'bg-[#39FF14] border border-[#39FF14] text-[#021107] scale-110' : 'bg-brand-card/90 border border-[#39FF14]/30 text-slate-200'}`}>
            <div className={`absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 border-b border-r rotate-45 transition-colors duration-300 ${hovered ? 'bg-[#39FF14] border-[#39FF14]' : 'bg-brand-card/90 border-[#39FF14]/30'}`} />
            <p className={`relative z-10 font-bold transition-colors duration-300 ${hovered ? 'text-[#021107]' : 'text-[#39FF14] animate-pulse'}`}>
              {hovered ? "System Optimized! 🚀" : "Building Automation..."}
            </p>
          </div>
        </Html>
      </Float>
    </group>
  );
}

export default function Process3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* Soft Neon Green Radial Glow Behind Mascot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#39FF14]/20 blur-[130px] rounded-full z-0 pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />

      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-5, 5, -5]} intensity={1} color="#e2e8f0" />
        <pointLight position={[0, 1, 1.5]} intensity={3} color="#39FF14" distance={4} />
        
        <TaskRobot />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
