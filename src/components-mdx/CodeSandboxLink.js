import React from 'react';
import { Button } from './index';

const CodeSandboxLink = ({ url }) => {
  const redirectToCodeSandbox = () => {
    window.open(url, '_blank');
  };

  const codeSandboxButton = <Button primary= {false} label="Ver en CodeSandbox" size="small" />;

  return (
    <span onClick={redirectToCodeSandbox} style={{ cursor: 'pointer', marginRight: '8px' }}>
      {codeSandboxButton}
    </span>
  );
};

export default CodeSandboxLink;
