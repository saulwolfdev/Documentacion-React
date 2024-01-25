import React, { useState } from "react";

const ToggleComponent = ({ title, level = "h1", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const Heading = level;

  return (
    <div>
      <Heading onClick={toggle} style={{ cursor: "pointer" }}>
        {title}
      </Heading>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ToggleComponent;
