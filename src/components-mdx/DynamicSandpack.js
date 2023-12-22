import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

const DynamicSandpack = ({ dynamicFiles, dynamicDependencies, dynamicVisibleFiles }) => {
  const defaultDependencies = {"css": "latest", "styled-components" : "latest", "react-dom" : "latest" };

  const sandpackFiles = {  ...dynamicFiles };
  const sandpackDependencies = { ...defaultDependencies, ...dynamicDependencies };

  return (
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
  );
};

export default DynamicSandpack;
