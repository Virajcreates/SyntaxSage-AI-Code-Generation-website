export function GradientBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none opacity-30 animate-gradient-shift"
      style={{
        background: 'linear-gradient(-45deg, #000000, #1a472a, #000000, #5c0000)',
        backgroundSize: '400% 400%',
      }}
    />
  );
}