import React, {
  useState,
  useEffect,
} from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth })

  useEffect(() => {
    const getWindowSize = () => setWindowSize({ width: window.innerWidth })
    window.addEventListener('resize', getWindowSize)

    return () => window.removeEventListener('resize', getWindowSize)
  }, [])

  return windowSize
}