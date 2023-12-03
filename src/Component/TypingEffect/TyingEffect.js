import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, interval, repeatDelay }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeout;

    const startTyping = () => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setDisplayText('');
          index = 0;
          startTyping();
        }, repeatDelay);
      } else {
        timeout = setTimeout(startTyping, interval);
      }
    };

    startTyping();

    return () => clearTimeout(timeout);
  }, [text, interval, repeatDelay]);

  return <p>{displayText}</p>;
};

export default TypingEffect;
