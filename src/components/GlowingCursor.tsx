import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlowingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-2xl" />
      </motion.div>

      {/* Small cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 400,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-primary/50 blur-sm" />
      </motion.div>
    </>
  );
};

export default GlowingCursor;
