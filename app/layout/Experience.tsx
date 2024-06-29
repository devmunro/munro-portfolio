import { Card, CardContent, CardFooter } from "@/components/ui/card";

const experience = () => {
  const workExperience = [
    {
      company: "NoledgeLoss",
      position: "Software Engineer",
      startDate: "Dec 2023",
      endDate: "Present",
      location: "Remote",
      responsibilities: [
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
      responsibilities: [
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
      responsibilities: [
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
      responsibilities: [
        "Worked on the development of Ceevee, enhancing its user interface and functionality.",
        "Collaborated with the team to deliver high-quality solutions, utilizing JavaScript and other technologies.",
      ],
    },
  ];

  return (
    <div className=" ">
      <h1 className="text-left font-bold text-2xl mb-8">Experience</h1>
      <div className="flex flex-col gap-y-8 gap-x-2 items-center ">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className={`w-1/2 ${index % 2 === 0 ? "self-end " : "self-start"} `}
          >
            <Card className="p-2">
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
    </div>
  );
};

export default experience;
