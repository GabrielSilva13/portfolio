'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Stars } from './Stars'

export const StarCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] hidden h-auto w-full xs:block">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
