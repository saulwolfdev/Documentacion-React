import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";
import { Button } from './index';

const SandPack = ({ files, autoHiddenFiles }) => {
  const [isAutoHiddenFilesVisible, setAutoHiddenFilesVisible] = React.useState(!autoHiddenFiles);
  const primary = isAutoHiddenFilesVisible  ? false : true;
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
            "react-router-dom" : "latest",
            "@mui/material" : "latest",
            "@mui/styles" : "latest",
            "@emotion/react" : "latest",
            "@emotion/styled" : "latest",
            "@mui/icons-material": "latest"
          },
        }}
        files={files}
        options={{
          visibleFiles: Object.keys(files),
        }} 
      >
        <SandpackLayout>
          {!isAutoHiddenFilesVisible ? <SandpackFileExplorer autoHiddenFiles={isAutoHiddenFilesVisible} /> : null}          
          <SandpackCodeEditor closableTabs showTabs />
          <SandpackPreview />          
        </SandpackLayout>
      </SandpackProvider>
      <div style={{ padding: '12px 0px', display: 'flex', justifyContent: 'flex-end' }}>
        <Button        
          primary={primary}
          label={isAutoHiddenFilesVisible ? "Show Files" : "Hidden Files"}
          size="small"
          onClick={() => setAutoHiddenFilesVisible(!isAutoHiddenFilesVisible)}
        />
      </div>
    </div>
  );
};

export default SandPack;
