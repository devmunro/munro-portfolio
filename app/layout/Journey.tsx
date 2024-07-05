import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Journey = () => {
  const workExperience = [
    {
      company: "NoledgeLoss",
      position: "Software Engineer",
      startDate: "Dec 2023",
      endDate: "Present",
      location: "Remote",
      logo: "logos/noledgeloss.jpg",
      details: [
        "Developed applications using React.js and other technologies, enhancing user experience and functionality.",
        "Utilized skills in software development, improving overall code quality and performance.",
      ],
    },
    {
      company: "Webeet.io",
      position: "Full-stack Developer",
      startDate: "Jan 2023",
      endDate: "Present",
      location: "Remote",
      logo: "logos/webeet.jpg",
      details: [
        "Crafted intuitive user interfaces, increasing user engagement by 15%.",
        "Addressed application challenges, ensuring optimal performance and robust data handling, leading to a 20% reduction in system downtime.",
        "Worked in Agile teams, ensuring timely project deliveries and implementing innovative efficiency solutions.",
      ],
    },
    {
      company: "Bonoeat",
      position: "Full-stack Developer",
      startDate: "Sep 2023",
      endDate: "Nov 2023",
      location: "Remote",
      logo: "logos/bono.png",
      details: [
        "Developed a platform to reduce hunger and food waste, utilizing JavaScript and MongoDB.",
        "Contributed to the design and implementation of key features, improving platform usability and effectiveness.",
      ],
    },
    {
      company: "Ceevee.ai",
      position: "Frontend Developer",
      startDate: "Apr 2023",
      endDate: "Jun 2023",
      location: "Remote",
      logo: "logos/ceevee.png",
      details: [
        "Worked on the development of Ceevee, enhancing its user interface and functionality.",
        "Collaborated with the team to deliver high-quality solutions, utilizing JavaScript and other technologies.",
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-black relative md:p-4">
      <h1 className="text-white text-center font-extrabold p-4 text-4xl">
        Journey
      </h1>

      {/* Container for timeline and items */}
      <div className="relative w-full flex justify-center ">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-red-900 h-full"></div>

        {/* Work Experience Map */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 relative z-5 px-1 md:p-4">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 md:p-4 bg-red-900 rounded-md shadow-md relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 w-4 h-6 bg-red-600 rounded-full border"></div>

              <Avatar className="w-16 h-16 md:w-24 md:h-24 items-center rounded-none border-2 md:border-4">
                <AvatarImage src={job.logo} />
                <AvatarFallback className="text-black">LOGO</AvatarFallback>
              </Avatar>
              <Card className="p-2 w-full">
                <CardContent className=" p-2">
                  <div className="flex justify-between items-center  h-full">
                    <h2 className="font-bold text-sm md:text-lg ">
                      {job.company}
                    </h2>
                    <span className="text-xs md:text-sm">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm">{job.position}</p>
                  <p className="text-xs md:text-sm">({job.location})</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Button
          variant="link"
          className="animate-bounce text-white scroll-smooth absolute bottom-10 "
        >
          <Link href="#Skills">
          <ArrowDown className="w-16 h-8 p-2 rounded-full bg-indigo-950 " />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Journey;
