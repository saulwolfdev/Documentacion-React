import React from 'react';
import "../styles.css"

const StickyNav = ({ links }) => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky-nav">  
      {links.map((link, index) => (
        <a key={index} href={`#${link.id}`} onClick={(e) => scrollToSection(e, link.id)}>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default StickyNav;
