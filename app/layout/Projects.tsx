"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import VerticalText from "./VerticalText";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Projects = () => {
  const projectShowcase = [
    {
      title: "Restaurant(Savor)",
      image: "/project1.png",
      tools: ["javascript", "react", "mongodb", "tailwind css"],
    },
    {
      title: "Movie DB",
      image: "/project2.png",
      tools: ["javascript", "next.js", "tailwind css"],
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
  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const handleFilter = (value) => {
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
    <div className="flex md:flex-row w-full h-full bg-blue-950">
      <VerticalText title="PORTFOLIO" />
      <div className="w-full h-full p-2 md:p-8 flex flex-col items-center justify-center">
        <div className="w-full ">
          <ul className="flex items-center justify-end gap-2 p-2 text-xs md:text-sm">
            <label className="font-bold text-white mb-2 md:mb-0">Filter:</label>
            {[
              ...languageOptions,
              ...frameworkOptions,
              ...databaseOptions,
              ...frontEndLibraries,
            ].map((tool, index) => (
              <li key={index} className="mb-2 md:mb-0">
                <Button
                  className="text-white flex items-center text-xs md:text-sm p-2"
                  onClick={() => handleFilter(tool.name)}
                >
                  <img
                    src={tool.logoUrl}
                    alt={tool.name}
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full h-full shadow-2xl mt-2 md:mt-4">
          {currentProjects.map((project, index) => (
            <Card key={index} className="shadow-2xl border-none ">
              <CardContent className="flex items-center justify-center h-full w-full relative bg-black rounded-lg p-2 border-4 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-fill md:object-contain"
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
        <Pagination className="mt-2 md:mt-4 w-full flex justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => handlePageChange(e, currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  onClick={(e) => handlePageChange(e, pageNumber + 1)}
                >
                  {pageNumber + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => handlePageChange(e, currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Projects;
