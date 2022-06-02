import React from 'react'
import Key from './Key'
import './Keyboard.css'
import { Notes } from '../constants.js'

function Keyboard() {
  return (
    <div className="keyboard">
        { Notes.map((note, index)=> 
          <Key 
            key={index}
            note={note}
          />)
        }
    </div>
  )
}

export default Keyboard