import React, { useState, useEffect } from 'react';
import "../styles.css";

const StickyNav = ({ links }) => {
  const [clickedLink, setClickedLink] = useState(null);
  const [showStickyNav, setShowStickyNav] = useState(window.innerWidth >= 1660);

  const scrollToSection = (event, sectionId, index) => {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }

    setClickedLink(index);
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjust the showStickyNav state based on the screen width
      setShowStickyNav(window.innerWidth >= 1660);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`sticky-nav ${showStickyNav ? 'visible' : 'hidden'}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={`#${link.id}`}
          onClick={(e) => scrollToSection(e, link.id, index)}
          className={`sticky-nav-link ${index === clickedLink ? 'clicked' : ''}`}
          title={link.text}
        >
          {index === clickedLink ? <span className="indicator">&#8226;</span> : null}
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default StickyNav;
