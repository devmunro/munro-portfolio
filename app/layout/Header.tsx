"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Typewriter from "@/lib/typerwriter";


const header = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[url('/second.png')] bg-cover bg-black bg-opacity-40">
      <div className="flex items-center justify-center w-1/2">
        <Avatar className="shadow-md shadow-white ">
          <AvatarImage src="https://github.com/devmunro.png" />
          <AvatarFallback>DM</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-1/2 text-center text-7xl space-y-8 bg-black bg-opacity-40 h-full  flex-col flex justify-center">
        <h1 className="font-bold uppercase ">Hi, Im DAVID</h1>
        <h2 className="text-4xl">I am a ... </h2>
        <h3 className="font-semibold"></h3>
        <div>
        <Typewriter words={["Fullstack developer", "Game Developer", "Software Engineer", "Wordpress Developer"]}  />
        </div>
      </div>
      
    </div>
  );
};

export default header;
