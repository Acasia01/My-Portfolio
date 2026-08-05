import { useState, useEffect, useRef } from 'react';
import './IDCard.css';

const IDCard = () => {
  const [swingAngle, setSwingAngle] = useState(0);
  const velocityRef = useRef(0);
  const currentAngleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const lastTimeRef = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;
      const deltaTime = now - lastTimeRef.current;

      if (deltaTime > 0) {
        const scrollSpeed = deltaY / deltaTime;
        let target = scrollSpeed * 15;

        if (target > 60) target = 60;
        if (target < -60) target = -60;

        targetAngleRef.current = target;
      }

      lastScrollYRef.current = currentScrollY;
      lastTimeRef.current = now;
    };

    const animate = () => {
      targetAngleRef.current *= 0.95;

      const stiffness = 0.05;
      const damping = 0.90;

      const force = (targetAngleRef.current - currentAngleRef.current) * stiffness;
      velocityRef.current += force;
      velocityRef.current *= damping;
      currentAngleRef.current += velocityRef.current;

      setSwingAngle(currentAngleRef.current);
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className="id-card-container"
      style={{ transform: `scale(var(--id-scale, 1)) rotate(${swingAngle}deg)` }}
    >
      <div className="lanyard-left"></div>
      <div className="lanyard-right"></div>

      <div className="id-card">
        <div className="id-card-clip"></div>
        <div className="id-card-header">
          <div className="id-card-header-curve"></div>
        </div>
        <div className="id-card-profile">
          <img src="/profile_pic.png" alt="Profile" />
        </div>
        <div className="id-card-body">
          <h2 className="id-card-name">RENUKA</h2>
          <p className="id-card-title">Full Stack Developer</p>

          <div className="id-card-details">
            <div className="id-card-detail-row"><span>DOB</span> <span>: 01/01/2003</span></div>
            <div className="id-card-detail-row"><span>Mail</span> <span>: acasiadl01@gmail.com</span></div>
            <div className="id-card-detail-row"><span>ID No</span> <span>: #000123456</span></div>
          </div>
        </div>
        <div className="id-card-footer">
          <div className="id-card-footer-curve"></div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;