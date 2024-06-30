const VerticalText = ({ title }) => {
  return (
    <div className=" text-7xl font-bold h-full self-center  items-center justify-center flex flex-col">
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
