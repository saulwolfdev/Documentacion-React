import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const CodeEditor = ({ codeString }) => {
    // const modifiedCode = `${initialCode}`;
  return (
    <LiveProvider code={codeString || ''} noInline>
      <div style={{ display: 'flex', height: '50vh', padding: '16px 0 12px 0' }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <LiveEditor style={{ height: '100%', border: 'none', boxSizing: 'border-box', overflow: 'auto' }} />
          <LiveError />
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <LivePreview style={{ width: '100%', height: '100%', border: 'none', boxSizing: 'border-box', marginLeft: '8px', fontFamily: 'monospace' }} />
        </div>
      </div>
    </LiveProvider>
  );
};

export default CodeEditor;