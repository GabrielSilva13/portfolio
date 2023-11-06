'use client'

import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Loader } from '../Loader'
import useIsMobile from '@/hooks/useIsMobile'
import { Computer } from './Computer'

export const ComputerCanvas = () => {
  const isMobile = useIsMobile({ screenWidth: '500' })

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
