import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
    const ref = useRef<THREE.Points>(null!)
    const mouse = useRef({ x: 0, y: 0 })

    const count = 3000
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const r = 1.5 + Math.random() * 3
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
            pos[i * 3 + 2] = r * Math.cos(phi) - 2
        }
        return pos
    }, [])

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y = clock.getElapsedTime() * 0.04
            ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.2
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#6C63FF"
                size={0.015}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    )
}

function TorusKnot() {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.3
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.2
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, -2]}>
            <torusKnotGeometry args={[0.7, 0.2, 200, 32, 3, 5]} />
            <meshStandardMaterial
                color="#6C63FF"
                emissive="#4040AA"
                emissiveIntensity={0.5}
                wireframe
                transparent
                opacity={0.35}
            />
        </mesh>
    )
}

function FloatingOrbs() {
    const positions: [number, number, number][] = [
        [2.5, 1, -3],
        [-2.5, -1, -4],
        [1.5, -2, -2.5],
        [-1.5, 2, -3.5],
    ]
    const colors = ['#6C63FF', '#43E97B', '#FF6584', '#6C63FF']

    return (
        <>
            {positions.map((pos, i) => (
                <OrbMesh key={i} position={pos} color={colors[i]} delay={i * 0.5} />
            ))}
        </>
    )
}

function OrbMesh({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() + delay
        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.3
            ref.current.position.x = position[0] + Math.cos(t * 0.6) * 0.2
        }
    })
    return (
        <mesh ref={ref} position={position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
    )
}

export default function HeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 3], fov: 75 }}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#6C63FF" />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#43E97B" />
            <ParticleField />
            <TorusKnot />
            <FloatingOrbs />
        </Canvas>
    )
}
