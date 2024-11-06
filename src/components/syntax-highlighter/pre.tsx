import SyntaxHighlighter from 'react-syntax-highlighter';
 
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type HighlightLanguageType =
| 'bash'
| 'css'
| 'dns'
| 'html'
| 'ini'
| 'javascript'
| 'json'
| 'makefile'
| 'markdown'
| 'nginx'
| 'plaintext'
| 'php'
| 'python'
| 'rust'
| 'shell'
| 'sql'
| 'typescript'
| 'xml'
| 'yaml'
;

interface IPre {
  children: string | string[];
  language: HighlightLanguageType;
}

export function Pre({
  children,
  language,
} : IPre) {
  // trim the children
  const code = children?.toString().trim();

  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      dir="ltr"
      wrapLongLines={true}
      wrapLines={true}
      className="mt-3 mb-6 rounded-lg text-xs md:text-sm text-left"
      customStyle={{ 'padding': '16px 24px' }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
