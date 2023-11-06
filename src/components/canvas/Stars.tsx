import { useRef } from 'react'

import { Points, PointMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

export const Stars = () => {
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  const starRef = useRef<THREE.Points | null>(null)

  useFrame((state, delta) => {
    if (starRef.current) {
      starRef.current.rotation.x -= delta / 10
      starRef.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={starRef} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
