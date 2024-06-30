import { Card, CardContent, CardFooter } from "@/components/ui/card";
import VerticalText from "./VerticalText";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const experience = () => {
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

  const education = [
    {
      company: "Masterschool",
      degree: "Software Engineering",
      startDate: "July 2022",
      endDate: "Jan 2023",
      logo: "logos/masterschool.jpg",
      details: [
        "Participated in an immersive, 7-month software engineering training program.",
        "Completed hundreds of hours of practice and real-world industry projects.",
        "Skills acquired in JavaScript, React, Vue Web Applications, OOP, Databases, SQL, NextJS, MongoDB, Node.js, HTML, CSS, Docker, Cloud.",
      ],
    },
    {
      institution: "Open University",
      degree: "Bachelor of Science (B.S.) Computer Science and Statistics",
      startDate: "",
      endDate: "Expected Graduation: 2027",
      logo: "logos/OU.png",

      details: [
        "Acquiring foundational knowledge in computing, IT, and statistics through a structured 360-credit program.",
        "Developing key skills in problem-solving, project management, and ethical technology use.",
      ],
    },
  ];

  return (
    <div className=" flex w-full h-full ">
      <VerticalText title="experience" />
      <div className="w-full flex center animate-slide">
        <div className="flex gap-24 w-full items-center justify-center">
          {/* work experience map */}
          <div className="flex flex-col gap-y-8 gap-x-2 w-1/3  ">
            {workExperience.map((job, index) => (
              <div key={index} className="flex items-center space-x-2 ">
                <Avatar className="w-24 h-24 items-center rounded-none border-4">
                  <AvatarImage src={job.logo} />
                  <AvatarFallback className="text-black">LOGO</AvatarFallback>
                </Avatar>
                <Card className="p-2 w-full">
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-bold">{job.company}</h2>
                      <span>
                        {job.startDate} - {job.endDate}
                      </span>
                    </div>
                    <p>{job.position}</p>
                    <p>({job.location})</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {/* education map */}
          <div className="flex flex-col gap-y-8 gap-x-2  w-1/3  ">
            {education.map((edu, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Avatar className="w-24 h-24 items-center rounded-none border-4">
                  <AvatarImage src={edu.logo} />
                  <AvatarFallback className="text-black">DM</AvatarFallback>
                </Avatar>
                <Card className="p-2 w-full">
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-bold">{edu.company}</h2>
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <h2 className="font-semibold">{edu.degree}</h2>
                    <p>{edu.details}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default experience;
