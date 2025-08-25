import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ children, className, node, ...rest }) => {
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      children={String(children).replace(/\n$/, '')}
      language={match[1]}
      style={vscDarkPlus}
    />
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};

export default CodeBlock;


