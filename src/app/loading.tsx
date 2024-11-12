export default function Loading() {
  return (
    <div className="min-h-screen flex bg-darkBlue justify-center items-center">
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-lightBlue"></div>
      </div>
    </div>
  );
}
