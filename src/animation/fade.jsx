import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function FadeIn({ children, setDelay }) {
  const ref = useRef(1)

  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [])

  return (
    <div
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden', height: 'auto' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1,
          delay: setDelay,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
