import { useState, useEffect } from 'react'

function useIsMobile({ screenWidth }: { screenWidth: string }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${screenWidth}px)`)

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [screenWidth])

  return isMobile
}

export default useIsMobile
