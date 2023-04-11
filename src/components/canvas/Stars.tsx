import { useState, useRef, Suspense, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

import { Points, PointMaterial, Preload } from "@react-three/drei"
import { random } from "maath"

const Stars = (props: any) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((state, delta) => {
    //@ts-ignore
    ref.current.rotation.x -= delta / 10
    //@ts-ignore
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
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

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  return (
    <>
      {isMobile ? null : (
        <div className="w-full h-full absolute inset-0 z-[-1]">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <Stars />
            </Suspense>

            <Preload all />
          </Canvas>
        </div>
      )}
    </>
  )
}

export default StarsCanvas
