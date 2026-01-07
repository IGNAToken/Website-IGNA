import { useEffect, useState, useRef } from 'react'

interface Bubble {
  id: number
  size: number
  x: number
  y: number
  color: 'primary' | 'secondary'
  animationDuration: number
  animationDelay: number
  positionChangeInterval: number
}

interface AnimatedBubblesProps {
  minSize?: number
  maxSize?: number
  count?: number
  className?: string
}

const AnimatedBubbles = ({ minSize = 30, maxSize = 110, count = 20, className = '' }: AnimatedBubblesProps) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const intervalRefs = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    // Initialize bubbles with random positions, sizes, colors, and animation timings
    const initialBubbles: Bubble[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * (maxSize - minSize) + minSize,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: Math.random() > 0.5 ? 'primary' : 'secondary',
      animationDuration: Math.random() * 4 + 3, // 3-7 seconds
      animationDelay: Math.random() * 2, // 0-2 seconds delay
      positionChangeInterval: Math.random() * 3 + 4, // 4-7 seconds between position changes
    }))
    setBubbles(initialBubbles)

    // Set up timers to change positions periodically
    intervalRefs.current = initialBubbles.map((bubble) => {
      return setInterval(() => {
        setBubbles((prevBubbles) =>
          prevBubbles.map((b) => {
            if (b.id === bubble.id) {
              return {
                ...b,
                x: Math.random() * 100,
                y: Math.random() * 100,
              }
            }
            return b
          })
        )
      }, bubble.positionChangeInterval * 1000)
    })

    return () => {
      // Cleanup intervals
      intervalRefs.current.forEach((interval) => clearInterval(interval))
      intervalRefs.current = []
    }
  }, [minSize, maxSize, count])

  return (
    <>
      <style>{`
        @keyframes bubbleFade {
          0%, 100% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
      <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full backdrop-blur-sm border ${
              bubble.color === 'primary' ? 'bg-primary/30 border-primary/30' : 'bg-secondary/30 border-secondary/30'
            }`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: `bubbleFade ${bubble.animationDuration}s ease-in-out infinite`,
              animationDelay: `${bubble.animationDelay}s`,
              transition: 'left 2s ease-in-out, top 2s ease-in-out',
              boxShadow: `0 0 ${bubble.size * 0.5}px ${
                bubble.color === 'primary' ? 'rgba(0, 255, 127, 0.3)' : 'rgba(5, 167, 166, 0.3)'
              }`,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default AnimatedBubbles
