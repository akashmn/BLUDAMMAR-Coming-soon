import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Coming soon';
  const typingSpeed = 300; // milliseconds per character
  const cursorBlinkSpeed = 530; // milliseconds
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        // Start blinking cursor only after typing is complete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to <span className="blu-highlight">blu</span>Dammar</h1>
        <div className="typewriter-container">
          <h2 className="typewriter-text">
            {text}<span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
          </h2>
        </div>
        <div className="hero-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;