import React, { useState } from 'react';
import "../styles.css"

const StickyNav = ({ links }) => {
  const [clickedLink, setClickedLink] = useState(null);

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

  return (
    <div className="sticky-nav">  
      {links.map((link, index) => (
        <a
          key={index}
          href={`#${link.id}`}
          onClick={(e) => scrollToSection(e, link.id, index)}
          className={`sticky-nav-link ${index === clickedLink ? 'clicked' : ''}`}
        >
          {index === clickedLink ? <span className="indicator">&#8226;</span> : null}
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default StickyNav;
