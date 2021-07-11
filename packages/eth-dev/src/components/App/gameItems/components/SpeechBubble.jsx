import React from 'react'

export default function SpeechBubble({ children, direction }) {
  let alignmentClass = 'from-left'

  if (direction === 'right') {
    alignmentClass = 'from-right'
  }

  return (
    <div
      className={`nes-balloon ${alignmentClass}`}
      style={{
        width: 'calc(100% - 60px)',
        padding: '6px',
        fontSize: '8px',
        lineHeight: '15px'
      }}
    >
      {children}
    </div>
  )
}
