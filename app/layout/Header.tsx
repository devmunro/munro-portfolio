import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const header = () => {
  return (
    <div className="h-full flex items-center justify-center ">
      <div className="flex items-center justify-center w-1/2">
        <Avatar className="shadow-md shadow-white ">
          <AvatarImage src="https://github.com/devmunro.png" />
          <AvatarFallback>DM</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-1/2 text-center text-7xl space-y-8">
        <h1 className="font-bold uppercase ">Hi, Im DAVID</h1>
        <h2 className="text-4xl">I am a ... </h2>
        <h3 className="font-semibold">Fullstack developer</h3>
      </div>
    </div>
  );
};

export default header;
