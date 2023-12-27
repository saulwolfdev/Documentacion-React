import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

const DynamicSandpack = ({ dynamicFiles, dynamicDependencies, dynamicVisibleFiles }) => {
  const defaultDependencies = {"css": "latest", "styled-components" : "latest", "react-dom" : "latest" };

  const sandpackFiles = {  ...dynamicFiles };
  const sandpackDependencies = { ...defaultDependencies, ...dynamicDependencies };

  return (
    <div style={{ width: '1000px', padding: '16px 0px 16px 0px' }}>
    <Sandpack
      template="react"
      theme={amethyst}
      customSetup={{
        dependencies: sandpackDependencies,
      }}
      files={sandpackFiles}
      options={{
        visibleFiles: dynamicVisibleFiles,
        // showNavigator: true,
        showLineNumbers: true,        
      }}
    />
    </div>
  );
};

export default DynamicSandpack;
