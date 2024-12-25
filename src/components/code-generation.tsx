import { useState } from 'react';
import { Loader2, Scroll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { generateCode } from '@/lib/huggingface';
import { OutputSection } from './output-section';
import { PreviewPanel } from './preview-panel';

export function CodeGeneration() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setOutput('');
    try {
      const result = await generateCode(prompt);
      setOutput(result);
    } catch (error) {
      console.error('Error generating code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
      <Card className="text-white p-6 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40 min-h-[600px] flex flex-col border-neutral-800">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
          <Scroll className="w-6 h-6 text-white" />
          Input Incantation
        </h2>
        <Textarea
          placeholder="Inscribe your magical request here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 min-h-[400px] bg-black/20 resize-none border-neutral-800 text-white placeholder-neutral-400"
        />
        <Button 
          className="mt-4 w-full text-lg py-6 text-white"
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
        >
          {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin text-white" />}
          Invoke the Sage
        </Button>
      </Card>

      <div className="space-y-8">
        <OutputSection output={output} isLoading={isLoading} />
        {output && <PreviewPanel content={output} />}
      </div>
    </div>
  );
}
