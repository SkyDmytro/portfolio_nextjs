import './styles/Loader.style.css';

export const LoadingForm = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="loader-container">
        <span className="loader-line"></span>
        <span className="loader-line"></span>
        <span className="loader-line"></span>
        <span className="loader-line"></span>
      </div>
    </div>
  );
};
