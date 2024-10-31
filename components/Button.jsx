export default ({ children, onClick, className }) => {
  return (
    <div className="flex ">
      <div
        onClick={onClick}
        className={`p-4 bg-green-600 hover:bg-green-800 text-white rounded-lg m-4 cursor-pointer ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
