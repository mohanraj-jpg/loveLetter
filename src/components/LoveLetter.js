import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        My Dear kundanapu bomma🖤,<br />
        koti thaarallo muddugumma.., asalu sisalu apuroopama. <br />
        naa kalala Chandhamama<span >❤️</span>...
        oppukunte avtha ne vadini, kaadhante aypotha ne banisani<br />I loveeee youuuu :)<br />
        always yours,<br />
        <span style={{ color: 'red' }}>@Kittu<span style={{ fontSize: '1.2em' }}>❤️</span></span>
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
