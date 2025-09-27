import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

// Note: You might still need MagicBento.css for the necessary ripple styles
// If you encounter styling issues later, you may need to copy the relevant
// CSS for the ripple effect from MagicBento.css into your global styles.

const InteractiveWrapper = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  glowColor = '132, 0, 255', // Default color, but can be customized
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const elementRef = useRef(null);

  // Function to create a click ripple effect
  const handleClick = useCallback((e) => {
    if (!clickEffect || disableAnimations) return;

    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const maxDistance = Math.max(
      Math.hypot(x, y),
      Math.hypot(x - rect.width, y),
      Math.hypot(x, y - rect.height),
      Math.hypot(x - rect.width, y - rect.height)
    );

    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      width: ${maxDistance * 2}px;
      height: ${maxDistance * 2}px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
      left: ${x - maxDistance}px;
      top: ${y - maxDistance}px;
      pointer-events: none;
      z-index: 1000;
    `;

    element.appendChild(ripple);

    gsap.fromTo(ripple, {
      scale: 0,
      opacity: 1
    }, {
      scale: 1,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => ripple.remove()
    });
  }, [clickEffect, disableAnimations, glowColor]);

  // Main Effect for Tilt and Magnetism
  useEffect(() => {
    if (disableAnimations || !elementRef.current) return;

    const element = elementRef.current;
    let magnetismAnimation;

    const handleMouseEnter = () => {
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      // Reset Tilt
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
      // Reset Magnetism
      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = e => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Tilt Calculation
      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      // Magnetism Calculation
      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimation = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      magnetismAnimation?.kill();
    };
  }, [disableAnimations, enableTilt, enableMagnetism, handleClick]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default InteractiveWrapper;