import React from 'react';
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackFileExplorer,
  } from "@codesandbox/sandpack-react";

const SandPack = () => {
  
  return (
    <div style={{ width: '900px' }}> 
    <SandpackProvider
    theme="light" 
    template="react"
    files={{ 
      "/Button.js": 
`import React from "react";

const Button=()=> {
   const handleClick = () => {
    alert("hola");
  };
  return <button onClick={handleClick}>hola</button>;
}

export default Button;`,

"Style.css":
`.button {
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}`,
        
"App.js": 
`import React from "react";
import Button from "./Button.js";

const App=()=> {
  return (
    <div>
      <Button />
    </div>
  );
}

export default App`
    }}
    options={{
      visibleFiles: ["/App.js", "/Button.js", "/Style.css"],

    }} 
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor closableTabs showTabs />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
    </div>
  );
};

export default SandPack;
