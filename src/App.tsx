import { ThemeProvider } from '@/components/theme-provider';
import { CodeGeneration } from '@/components/code-generation';
import { Wand2 } from 'lucide-react';
import { BackgroundAnimation } from '@/components/background-animation';
import { GradientBackground } from '@/components/gradient-background';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen relative overflow-hidden bg-black text-white">
        <GradientBackground />
        <BackgroundAnimation />
        
        <main className="relative">
          <div className="container mx-auto py-12 px-6">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Wand2 className="text-teal-300 w-16 h-16 animate-spin-slow" />
                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 font-unica tracking-widest drop-shadow-md">
                  SYNTAX SAGE
                </h1>
              </div>
              <p className="text-neutral-200 font-raleway max-w-2xl mx-auto text-xl italic leading-loose">
                Harness the mystical power of AI to transmute your ideas into elegant code.
                Let the Sage guide your path through the arcane arts of programming.
              </p>
            </div>
            
            {/* Code Generation Section */}
            <CodeGeneration />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
