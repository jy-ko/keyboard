import React, { useEffect, useState } from 'react'
import './Key.css'

function Key({note}) {
  const [pressed, setPressed] = useState(false);
  const [sound, setSound] = useState('');

  useEffect(()=> {
    const audio = require(`../../public/audio/notes_${note}.mp3`);
    const audiofile = new Audio(audio);
    setSound(audiofile);
  },[note]);
  const noteIsFlat = (note) => {
    return note.length >1;
  }
  const onClick = (event) => {
    event.preventDefault();
    if (pressed)  {
      return;
    } else {
      setPressed(true);
      sound.play();
      setTimeout(function(){
        setPressed(false);
      },600);
    }
  }
  let keyClassName = "key";
  let key;
  if (noteIsFlat(note)) {
    keyClassName += " flat";
    key = (
      <div className={keyClassName} onClick={onClick} style={{ backgroundColor: pressed ? '#00d8ff': null}} sound={sound}></div>
    )
  } else {
    key = (
      <div className={keyClassName} onClick={onClick} style={{ backgroundColor: pressed ? '#00d8ff': null}}sound={sound}>
        <div className="key-text">{note}</div>
      </div>
    )
  }
  return key;
}

export default Key