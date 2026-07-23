export default function BentoCard({ children, className = '', id }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      id={id} 
      className={`bento-card ${className}`} 
      onMouseMove={handleMouseMove}
    >
      {children}
    </section>
  );
}