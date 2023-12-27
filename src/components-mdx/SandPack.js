import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

const SandPack = ({ files, autoHiddenFiles = true }) => {
  return (
    <div style={{ width: '1000px', padding: '16px 0px 16px 0px' }}> 
      <SandpackProvider
        theme={amethyst} 
        template="react"
        customSetup={{
          dependencies: {
            "css": "latest",
            "styled-components": "latest",
            "react-dom": "latest",
            "redux" : "latest",
            "react-redux" : "latest",
            "react-router-dom" : "latest"
          },
        }}
        files={files}
        options={{
          visibleFiles: Object.keys(files),
        }} 
      >
        <SandpackLayout>
          <SandpackFileExplorer autoHiddenFiles={autoHiddenFiles} />
          <SandpackCodeEditor closableTabs showTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default SandPack;
