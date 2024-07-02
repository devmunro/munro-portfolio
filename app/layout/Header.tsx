"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Typewriter from "@/lib/typerwriter";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row items-center justify-center bg-[url('/second.png')] bg-cover bg-center ">
      <div className="flex items-center justify-center w-full md:w-1/2 md:h-full h-1/2">
        <Avatar className="shadow-md shadow-white w-72 h-72 md:w-96 md:h-96">
          <AvatarImage src="https://github.com/devmunro.png" />
          <AvatarFallback>DM</AvatarFallback>
        </Avatar>
      </div>
      <div className=" w-full md:w-1/2 md:h-full md:text-4xl text-md md:space-y-8 flex flex-col text-center items-center justify-center md:bg-black md:bg-opacity-40">
        <h1 className="font-bold uppercase text-2xl lg:text-7xl">
          Hi, I'm DAVID
        </h1>
        <h2 className="md:text-4xl text-md">I am a ...</h2>
        <h3 className=""></h3>
        <div>
          <Typewriter
            words={[
              "Fullstack developer",
              "Game Developer",
              "Software Engineer",
              "Wordpress Developer",
            ]}
          />
        </div>
      </div>
      <Button
        variant="link"
        className="animate-bounce text-white scroll-smooth absolute bottom-10 md:hidden"
      >
        <Link href="#Projects">
          <ArrowDown className="w-16 h-16 p-2 rounded-full bg-black md:hidden" />
        </Link>
      </Button>
    </div>
  );
};

export default Header;
