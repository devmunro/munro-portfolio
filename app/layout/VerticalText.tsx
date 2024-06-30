const VerticalText = ({ title }) => {
  return (
    <div className=" text-7xl font-bold h-full self-center  items-center justify-center flex flex-col animate-slide">
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
