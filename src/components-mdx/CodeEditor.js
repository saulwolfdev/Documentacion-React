import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const CodeEditor = ({ codeString }) => {
    // const modifiedCode = `${initialCode}`;
  return (
    <LiveProvider code={codeString || ''} >
      <div style={{ display: 'flex', height: '50vh' }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <LiveEditor style={{ height: '100%', border: 'none', boxSizing: 'border-box', margin: '10px', overflow: 'auto' }} />
          <LiveError />
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <LivePreview style={{ width: '100%', height: '100%', border: 'none', boxSizing: 'border-box', margin: '10px', fontFamily: 'monospace' }} />
        </div>
      </div>
    </LiveProvider>
  );
};

export default CodeEditor;