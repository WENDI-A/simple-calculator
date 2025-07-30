const Display = ({ input }) => {
  return (
    <div>
      <input
        type="text"
        value={input}
        readOnly
        className="bg-gray-900 text-bold text-white max-w-sm mx-auto mt-10 p-4 rounded-xl shadow-lg h-20 w-full text-right text-2xl"
      />
    </div>
  );
};

export default Display;
