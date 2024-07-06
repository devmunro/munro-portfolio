"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

const Portfolio = () => {
  const projectShowcase = [
    {
      title: "Restaurant(Savor)",
      image: "/project1.png",
      tools: ["javascript", "react", "mongodb", "tailwind css"],
    },
    {
      title: "Yacht Club",
      image: "/project3.png",
      tools: ["javascript", "typescript", "tailwind css", "shadcn"],
    },

    {
      title: "Movie DB",
      image: "/project2.png",
      tools: ["javascript", "next.js", "tailwind css"],
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projectShowcase);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get the projects for the current page
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const languageOptions = [
    { name: "JavaScript", logoUrl: "/skills/javascript.png" },
    { name: "TypeScript", logoUrl: "/skills/typescript.png" },
    { name: "Python", logoUrl: "/skills/python.png" },
    { name: "PHP", logoUrl: "/skills/php.png" },
  ];

  const frameworkOptions = [
    // { name: "React", logoUrl: "/skills/react.png" },
    // { name: "Next.js", logoUrl: "/skills/nextjs.png" },
    // { name: "Express.js", logoUrl: "/skills/express.png" },
  ];

  const databaseOptions = [
    // { name: "MongoDB", logoUrl: "/skills/mongodb.png" },
    // { name: "MySQL", logoUrl: "/skills/mysql.png" },
    // { name: "PostgreSQL", logoUrl: "/skills/postgresql.png" },
    // { name: "Firebase", logoUrl: "/skills/firebase.png" },
  ];

  const frontEndLibraries = [
    // { name: "Tailwind CSS", logoUrl: "/skills/tailwind.png" },
    // { name: "Bootstrap", logoUrl: "/skills/bootstrap.png" },
  ];

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilter = (value: string) => {
    if (value === "reset") {
      setFilteredProjects(projectShowcase);
      return;
    }
    const includedProjects = projectShowcase.filter((project) =>
      project.tools.includes(value.toLowerCase())
    );
    setFilteredProjects(includedProjects);
  };

  return (
    <div className="flex flex-col items-center w-full h-full bg-blue-950">
      <h1 className="text-white font-extrabold text-4xl text-center p-4">
        Portfolio
      </h1>

      <ul className="w-full hidden md:flex items-center justify-center gap-2 px-2 text-xs md:text-sm ">
        <label className="font-bold text-white mb-2 md:mb-0">Filter:</label>
        {[...languageOptions].map((tool, index) => (
          <li key={index} className="mb-2 md:mb-0">
            <Button
              className="text-white flex items-center text-xs md:text-sm p-2"
              onClick={() => handleFilter(tool.name)}
            >
              <Image
                src={tool.logoUrl}
                alt={tool.name}
                width="20"
                height="20"
                className="w-6 h-6 md:mr-2"
              />
              <span className="hidden md:block">{tool.name}</span>
            </Button>
          </li>
        ))}
        <Button
          variant="link"
          className="text-white text-xs md:text-sm"
          onClick={() => handleFilter("reset")}
        >
          reset
        </Button>
      </ul>

      <div className="w-full h-full p-2 flex flex-col items-center">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 w-full h-full md:mt-4 md:p-8">
          {currentProjects.map((project, index) => (
            <Card
              key={index}
              className="justify-center shadow-2xl transform transition-transform duration-300 hover:scale-105 m-4"
            >
              <CardContent className="flex items-center justify-center h-full w-full relative bg-black rounded-lg border-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
                <h3 className="absolute bottom-0 w-full text-white bg-red-900 p-2 md:p-4 font-bold text-xs md:text-sm">
                  {project.title}
                </h3>
                {/* <ul className="absolute bottom-0 right-0 flex space-x-1 md:space-x-2 p-1 md:p-2">
                  {project.tools.map((tool, index) => (
                    <li key={index}>
                      <Badge className="bg-gray-700 text-white text-xs md:text-sm">
                        {tool}
                      </Badge>
                    </li>
                  ))}
                </ul> */}
              </CardContent>
            </Card>
          ))}
        </div>
        <Pagination className="mt-1 md:mt-4 w-full flex justify-center">
          <PaginationContent>
            <PaginationItem>
              <Button
                className="px-3 py-1 text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) {
                    handlePageChange(currentPage - 1);
                  }
                }}
                aria-disabled={currentPage === 1}
              >
                Prev
              </Button>
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <button
                    className={`px-3 py-1 text-sm font-medium ${
                      currentPage === pageNumber
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </button>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <Button
                className="px-3 py-1 text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) {
                    handlePageChange(currentPage + 1);
                  }
                }}
                aria-disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Portfolio;
