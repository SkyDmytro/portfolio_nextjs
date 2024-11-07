import '../styles/ScrollAnimationComponent.style.css';
export const ScrollAnimationComponent = () => {
  return (
    <div className="w-8 h-10 rounded-3xl border-2 border-white absolute bottom-4 left-1/2 scroll-container">
      <div className="w-1 h-1 bg-primaryFont rounded-full absolute top-2 left-[44%] scroll-dot"></div>
    </div>
  );
};
