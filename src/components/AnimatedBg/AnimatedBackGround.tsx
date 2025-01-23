'use client';

const CombinedBackground = () => {
  return (
    <div
      className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-20"
      style={{
        backgroundImage:
          'radial-gradient(circle at center, white 1px, transparent 1px)',
        backgroundSize: '5% 5%',
      }}
    />
  );
};

export default CombinedBackground;
