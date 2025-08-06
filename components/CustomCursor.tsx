'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursorEl = cursorRef.current
    if (!cursorEl) return

    // Move cursor
    const move = (e) => {
      // Use small offset to center the cursor element on pointer
      const x = e.clientX
      const y = e.clientY
      cursorEl.style.transform = `translate3d(${x - cursorEl.offsetWidth / 2}px, ${y - cursorEl.offsetHeight / 2}px, 0)`
    }

    // Toggle hover class when hovering designated elements
    const onOver = (e) => {
      // Look for nearest element with data-cursor="hover"
      const hoverTarget = e.target.closest('[data-cursor="hover"]')
      if (hoverTarget) {
        cursorEl.classList.add('cursor--hover')
      }
    }
    const onOut = (e) => {
      // If mouse leaves any element, check if still inside a hoverable
      const stillHover = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-cursor="hover"]')
      if (!stillHover) cursorEl.classList.remove('cursor--hover')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    // pointer-events-none ensures it doesn't block clicks
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-white/90 mix-blend-difference transition-transform duration-200 ease-out transform-gpu"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  )
}
