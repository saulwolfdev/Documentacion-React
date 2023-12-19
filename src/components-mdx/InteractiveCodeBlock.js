import React from 'react';
import { CodeBlock, CodeEditor } from './index';

const InteractiveCodeBlock = ({ codeString, language, sandboxUrl, showButtons, showCodeBlock , showCodeEditor, noInline }) => {
  return (
    <div>
        {showCodeBlock ? (
          <CodeBlock codeString={codeString} language={language} sandboxUrl={sandboxUrl} showButtons={showButtons} />
        ) : null}
        {showCodeEditor ? (
          <CodeEditor codeString={codeString} noInline={noInline} />
        ) : null}
    </div>
  );
};

export default InteractiveCodeBlock;
