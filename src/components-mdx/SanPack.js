import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

const SandPack = ({ files }) => {
  return (
    <div style={{ width: '1000px' }}> 
      <SandpackProvider
        theme={amethyst} 
        template="react"
        customSetup={{
          dependencies: {
            "css": "latest",
            "styled-components": "latest",
            "react-dom": "latest",
          },
        }}
        files={files}
      >
        <SandpackLayout>
          <SandpackFileExplorer autoHiddenFiles/>
          <SandpackCodeEditor closableTabs showTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default SandPack;
