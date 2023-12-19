import React from 'react';
import { CodeBlock, CodeEditor } from './index';

const InteractiveCodeBlock = ({ codeString, language, sandboxUrl, showButtons, showCodeBlock=false , showCodeEditor }) => {
  return (
    <div>
        {showCodeBlock ? (
          <CodeBlock codeString={codeString} language={language} sandboxUrl={sandboxUrl} showButtons={showButtons} />
        ) : null}
        {showCodeEditor ? (
          <CodeEditor codeString={codeString} />
        ) : null}
    </div>
  );
};

export default InteractiveCodeBlock;
