import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Education = () => {
  const skillImages = [
    "/skills/javascript.png",
    "/skills/python.png",
    "/skills/typescript.png",
    "/skills/php.png",
    "/skills/nextjs.png",
    "/skills/mysql.png",
    "/skills/mongodb.png",
    "/skills/firebase.png",
    "/skills/tailwind.png",
    "/skills/bootstrap.png",
  ];

  const education = [
    {
      company: "Masterschool",
      degree: "Software Engineering",
      startDate: "2022",
      endDate: "2023",
      logo: "logos/masterschool.jpg",
      details: [
        "Participated in an immersive, 7-month software engineering training program.",
        "Completed hundreds of hours of practice and real-world industry projects.",
      ],
    },
    {
      company: "OU",
      degree: "Bachelor of Science (B.S.) Computer Science and Statistics",
      startDate: "",
      endDate: "Expected: 2027",
      logo: "logos/OU.png",

      details: [
        "Acquiring foundational knowledge in computing, IT, and statistics through a structured 360-credit program.",
        "Developing key skills in problem-solving, project management, and ethical technology use.",
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-start md:items-center  text-center w-full h-full bg-black px-4 relative">
      <h1 className="text-white font-extrabold p-2 md:p-8 m-2 text-4xl">Skills</h1>
      <div className=" md:w-1/2 grid grid-cols-6 items-center justify-center gap-2 p-2">
        {skillImages.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-0  hover:animate-rotate"
          >
            <Avatar
              key={index}
              className="md:w-16 md:h-16 w-8 h-8 rounded-lg "
            >
              <AvatarImage src={skill} />
              <AvatarFallback className="text-black">LOGO</AvatarFallback>
            </Avatar>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center md:p-8">
        {/* education map */}
        <div className="flex flex-col justify-center gap-4 w-full md:w-1/2 ">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 text-white rounded-md shadow-md bg-indigo-900"
            >
              <Avatar className="w-12 h-12 md:w-24 md:h-24 items-center rounded-none border-2 md:border-4">
                <AvatarImage src={edu.logo} />
                <AvatarFallback className="text-black">DM</AvatarFallback>
              </Avatar>
              <Card className="md:p-2 w-full">
                <CardContent>
                  <div className="flex justify-between items-center md:mb-2">
                    <h2 className="font-bold text-sm md:text-lg">
                      {edu.company}
                    </h2>
                    <span className="text-xs italic md:text-sm">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <h2 className="font-semibold text-left text-xs md:text-sm">
                    {edu.degree}
                  </h2>
                  <p className="text-xs md:text-sm text-left md:py-2">
                    {edu.details}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Education;
