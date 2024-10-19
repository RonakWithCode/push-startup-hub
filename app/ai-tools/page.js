'use client'

import { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const storySteps = [
  {
    title: "Your Startup Journey Begins",
    description: "Every great company starts with a single idea.",
    color: 'blue',
  },
  {
    title: "Overcome Challenges",
    description: "Our AI tools help you navigate the complexities of starting up.",
    color: 'green',
  },
  {
    title: "Grow and Succeed",
    description: "Watch your startup flourish with our AI-powered assistance.",
    color: 'red',
  },
];

export default function AIToolsPage() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % storySteps.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="w-full h-screen bg-gray-900">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <StoryScene currentStep={currentStep} />
      </Canvas>
      <div className="absolute bottom-10 left-0 right-0 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">{storySteps[currentStep].title}</h2>
        <p className="text-xl">{storySteps[currentStep].description}</p>
      </div>
    </div>
  );
}

function StoryScene({ currentStep }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {storySteps.map((step, index) => (
        <StoryModel key={index} {...step} isActive={index === currentStep} />
      ))}
    </group>
  );
}

function StoryModel({ color, isActive }) {
  return (
    <mesh scale={isActive ? 1.2 : 0.8} position={[isActive ? 0 : (Math.random() - 0.5) * 5, isActive ? 0 : (Math.random() - 0.5) * 5, isActive ? 0 : -5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
