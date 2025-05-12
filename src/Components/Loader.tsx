import { useEffect, useState } from 'react'

const Loader = () => {
  const [opacity, setOpacity] = useState(0);
  // const [showWelcome, setShowWelcome] = useState(false);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Fade in animation
    const fadeInInterval = setInterval(() => {
      setOpacity(prev => {
        if (prev >= 1) {
          clearInterval(fadeInInterval);
          return 1;
        }
        return prev + 0.02;
      });
    }, 60); // ~3 seconds for full fade in (0.02 * 50 iterations)

    // Show welcome message after 3 seconds
    const welcomeTimer = setTimeout(() => {
      // setShowWelcome(true);
    }, 3000);

    // Complete loader after welcome message displays (with slight delay)
    const completeTimer = setTimeout(() => {
      setLoaderComplete(true);
    }, 4500);

    return () => {
      clearInterval(fadeInInterval);
      clearTimeout(welcomeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (loaderComplete) return null;

  return (
    <div className="loader-container">
      <div className="loader-content" style={{ opacity }}>
        <div className="logo-container">
          <div className="blu-box">BLU</div>
          <div className="dammar-text">DAMMAR</div>
        </div>
        {/* {showWelcome && <div className="welcome-text">welcome back</div>} */}
      </div>
    </div>
  )
}

export default Loader