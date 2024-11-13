import React, { useEffect, useState } from 'react';
import keyboard from '../data/letters';

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    setLetters(keyboard)
  })

  return (
    <div className="stram-keypad">
      <p>↓ This is not a keyboard. It tells you what letters you've picked so far ↓</p>
      <aside style={{fontSize: 12}}>On laptop: use your keyboard. On mobile/tablet: tap for phone keyboard.</aside>
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}
