import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Maximize2, Minimize2, Sparkles } from 'lucide-react';

interface PreviewPanelProps {
  content: string;
}

export function PreviewPanel({ content }: PreviewPanelProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Extract code blocks and their types from the content
  const extractCode = (text: string) => {
    const files = {
      html: '',
      css: '',
      javascript: ''
    };
    
    const lines = text.split('\n');
    let isInCodeBlock = false;
    let currentLanguage = '';
    let currentBlock = '';

    for (const line of lines) {
      if (line.startsWith('```')) {
        if (isInCodeBlock) {
          // End of code block
          switch (currentLanguage) {
            case 'html':
              files.html = currentBlock;
              break;
            case 'css':
              files.css = currentBlock;
              break;
            case 'javascript':
            case 'js':
              files.javascript = currentBlock;
              break;
          }
          currentBlock = '';
          currentLanguage = '';
        } else {
          // Start of code block
          currentLanguage = line.slice(3).toLowerCase().trim();
        }
        isInCodeBlock = !isInCodeBlock;
        continue;
      }
      if (isInCodeBlock) {
        currentBlock += line + '\n';
      }
    }

    return files;
  };

  const { html, css, javascript } = extractCode(content);

  // Combine the files into a single HTML document
  const combinedContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${javascript}
        </script>
      </body>
    </html>
  `;

  return (
    <Card className={`relative bg-black/40 backdrop-blur-md text-white ${
      isFullscreen ? 'fixed inset-4 z-50' : ''
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-neutral-800">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-violet-400" />
          Preview Portal
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className={`${isFullscreen ? 'h-[calc(100%-4rem)]' : 'h-[500px]'}`}>
        {(html || css || javascript) ? (
          <iframe
            srcDoc={combinedContent}
            className="w-full h-full border-0 bg-white"
            title="Preview Portal"
            sandbox="allow-scripts"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400">
            No preview available
          </div>
        )}
      </div>
    </Card>
  );
}