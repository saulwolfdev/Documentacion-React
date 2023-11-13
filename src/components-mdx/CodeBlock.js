import React, {useState} from 'react'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, CodeSandboxLink } from './index';

const CodeBlock = ({ codeString, language, sandboxUrl, showButtons }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyButtonLabel = copied ? 'Copied' : 'Copy';
  const primary = copied ? true : false;

  const copyButton = <Button primary={primary} label={copyButtonLabel} size="small" />;

  return (
    <div>
      <SyntaxHighlighter language={language || "javascript"} style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
      
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {showButtons && (<CodeSandboxLink url={sandboxUrl} />)}
          <CopyToClipboard text={codeString} onCopy={handleCopy}>
            {copyButton}
          </CopyToClipboard>
        </div>
      
    </div>
  );
};

export default CodeBlock;


















  


// npm install react-syntax-highlighter prismjs
// npm install react-copy-to-clipboard