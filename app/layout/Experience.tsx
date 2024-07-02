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
    <div className="flex flex-col md:flex-row w-full h-full bg-black">
            <VerticalText title="Experience" />

  <div className="w-full flex justify-center p-2 md:p-8">
    <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
      {/* work experience map */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {workExperience.map((job, index) => (
          <div key={index} className="flex items-center space-x-2 p-2 bg-red-900 rounded-md shadow-md">
            <Avatar className="w-16 h-16 md:w-24 md:h-24 items-center rounded-none border-2 md:border-4">
              <AvatarImage src={job.logo} />
              <AvatarFallback className="text-black">LOGO</AvatarFallback>
            </Avatar>
            <Card className="p-2 w-full">
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-sm md:text-lg">{job.company}</h2>
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
      {/* education map */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 ">
        {education.map((edu, index) => (
          <div key={index} className="flex items-center space-x-2 p-2 text-white rounded-md shadow-md bg-indigo-900">
            <Avatar className="w-16 h-16 md:w-24 md:h-24 items-center rounded-none border-2 md:border-4">
              <AvatarImage src={edu.logo} />
              <AvatarFallback className="text-black">DM</AvatarFallback>
            </Avatar>
            <Card className="p-2 w-full">
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-sm md:text-lg">{edu.company}</h2>
                  <span className="text-xs md:text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <h2 className="font-semibold text-xs md:text-sm">{edu.degree}</h2>
                <p className="text-xs md:text-sm">{edu.details}</p>
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
