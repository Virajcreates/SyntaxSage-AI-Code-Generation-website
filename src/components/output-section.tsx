import { Card } from './ui/card';
import { CodeBlock } from './code-block';
import { LoadingAnimation } from './loading-animation';

interface OutputSectionProps {
  output: string;
  isLoading: boolean;
}

export function OutputSection({ output, isLoading }: OutputSectionProps) {
  // Function to separate code blocks from explanations
  const parseOutput = (text: string) => {
    const parts = [];
    let currentPart = '';
    let inCodeBlock = false;
    
    const lines = text.split('\n');
    
    for (const line of lines) {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          parts.push({ type: 'code', content: currentPart.trim() });
          currentPart = '';
        } else {
          // Start of code block
          if (currentPart.trim()) {
            parts.push({ type: 'text', content: currentPart.trim() });
          }
          currentPart = '';
        }
        inCodeBlock = !inCodeBlock;
        continue;
      }
      
      currentPart += line + '\n';
      
      if (!inCodeBlock && line.trim() === '') {
        if (currentPart.trim()) {
          parts.push({ type: 'text', content: currentPart.trim() });
        }
        currentPart = '';
      }
    }
    
    if (currentPart.trim()) {
      parts.push({ 
        type: inCodeBlock ? 'code' : 'text', 
        content: currentPart.trim() 
      });
    }
    
    return parts;
  };

  return (
    <Card className="p-6 bg-background/95 backdrop-blur text-white supports-[backdrop-filter]:bg-background/60">
      <h2 className="text-xl font-semibold mb-4">The Sage's Verdict</h2>
      {isLoading ? (
        <div className="min-h-[250px] flex items-center text-white justify-center">
          <LoadingAnimation />
        </div>
      ) : output ? (
        <div className="space-y-4 text-white">
          {parseOutput(output).map((part, index) => (
            part.type === 'code' ? (
              <CodeBlock key={index} code={part.content} />
            ) : (
              <div key={index} className="text-white prose prose-invert max-w-none">
                {part.content.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )
          ))}
        </div>
      ) : (
        <div className="min-h-[250px] p-4 rounded-md bg-muted/50 font-mono text-sm flex items-center justify-center text-white text-muted-foreground">
          The Sage awaits your query...
        </div>
      )}
    </Card>
  );
}