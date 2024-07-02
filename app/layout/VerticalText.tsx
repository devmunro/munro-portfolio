const VerticalText = ({ title }) => {
  return (
    <div className="hidden bg-black p-4 text-7xl font-bold h-full self-center  items-center justify-center md:flex md:flex-col">
      {title
        .toUpperCase()
        .split("")
        .map((char, index) => (
          <p key={index}>{char}</p>
        ))}
    </div>
  );
};

export default VerticalText;
