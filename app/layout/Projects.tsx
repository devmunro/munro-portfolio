"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const projects = () => {
  const projectShowcase = [
    {
      title: "JS Project",
      image: "/project1.png",
      tools: ["javascript", "mongodb", "tailwind css"],
    },
    {
      title: "Python Project",
      image: "https://via.placeholder.com/150",
      tools: ["python", "django", "sqlite"],
    },
    {
      title: "Next.JS Project",
      image: "https://via.placeholder.com/150",
      tools: ["next.js", "react", "node.js"],
    },
    {
      title: "PHP Project",
      image: "https://via.placeholder.com/150",
      tools: ["php", "laravel", "mysql"],
    },
    {
      title: "JS Project 2",
      image: "https://via.placeholder.com/150",
      tools: ["javascript", "express", "bootstrap"],
    },
  ];
  const [filteredProjects, setFilteredProjects] = useState(projectShowcase);

  const languageOptions = [
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "Java",
    "C#",
  ];
  const frameworkOptions = [
    "React",
    "Angular",
    "Vue.js",
    "Next.js",
    "Express.js",
    "Laravel",
  ];
  const databaseOptions = ["MongoDB", "MySQL", "PostgreSQL", "Firebase"];
  const frontEndLibraries = ["Tailwind CSS", "Bootstrap"];

  const handleFilter = (value) => {
    console.log(value)
    const includedProjects = projectShowcase.filter((project) =>
      project.tools.includes(value.toLowerCase())
    );
    setFilteredProjects(includedProjects)
  };

  return (
    <div className="flex bg-gray-400 text-black h-full items-center p-20">
      <div className="w-1/2">
        <h1>SKILLS</h1>
        <div>
          <label className=" mb-2 font-bold">Languages:</label>
          <ul className="flex flex-wrap space-x-2">
            {languageOptions.map((option, index) => (
              <li key={index} value={option}>
                <Button className="p-4" onClick={() => handleFilter(option)}>{option}</Button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label className=" mb-2 font-bold">Frameworks:</label>
          <ul className="flex  flex-wrap space-x-2 ">
            {frameworkOptions.map((option, index) => (
              <li key={index} value={option}>
                <Button onClick={() => handleFilter(option)}>{option}</Button>
                </li>
            ))}
          </ul>
        </div>
        <div>
          <label className=" mb-2 font-bold">Database:</label>
          <ul className="flex flex-wrap space-x-2 ">
            {databaseOptions.map((option, index) => (
              <li key={index} value={option}>
                <Button onClick={() => handleFilter(option)}>{option}</Button>
                </li>
            ))}
          </ul>
        </div>
        <div>
          <label className=" mb-2 font-bold">CSS Libraries:</label>
          <ul className="flex flex-wrap space-x-2 ">
            {frontEndLibraries.map((option, index) => (
              <li key={index} value={option}>
                <Button onClick={() => handleFilter(option)}>{option}</Button>
                </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" w-1/2">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className=" shadow-xl"
        >
          <CarouselContent className="-mt-1 h-[700px]">
            {filteredProjects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pt-1 w-full h-full basis-1/2"
              >
                <Card className="h-full relative">
                  <CardContent className="flex items-center justify-center p-6 h-full relative bg-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      objectFit="contain"
                      quality={100}
                      priority
                    />
                    <h3 className="bottom-0 left-0 absolute">
                      {project.title}
                    </h3>
                    <ul className="bottom-0 right-0 absolute flex">
                      {project.tools.map((tool, index) => (
                        <li key={index}>
                          <Badge className="">{tool}</Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default projects;
