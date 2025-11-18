import React, { useState, useEffect } from "react";
import "../assets/CSS/Typewriter.css";

const TypewriterText = ({ texts, typingSpeed = 120, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % texts.length;
    const fullText = texts[i];

    let timer;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, typingSpeed * 1.2); // 💨 faster delete
      } else {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        timer = setTimeout(() => {}, 800); // shorter pause before next word
      }
    } else {
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, typingSpeed * 1.6); // 💨 faster typing
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime); // pause before deleting
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, texts, typingSpeed, pauseTime]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypewriterText;
