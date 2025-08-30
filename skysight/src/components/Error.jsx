const Error = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4 w-full max-w-md text-center">
      <strong className="font-bold">Error: </strong>
      <span>{message || "Something went wrong!"}</span>
    </div>
  );
};

export default Error;
