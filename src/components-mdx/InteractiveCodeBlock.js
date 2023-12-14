import React from 'react';
import { CodeBlock, CodeEditor } from './index';

const InteractiveCodeBlock = ({ codeString, language, sandboxUrl, showButtons }) => {
  return (
    <div>
      <CodeBlock codeString={codeString} language={language} sandboxUrl={sandboxUrl} showButtons={showButtons} />
      <CodeEditor codeString={codeString} />
    </div>
  );
};

export default InteractiveCodeBlock;
