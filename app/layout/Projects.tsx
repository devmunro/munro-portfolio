import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const projects = () => {
  const projects = [
    {
      title: "Project One",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "Project Two",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project Three",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project Four",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project Five",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex bg-gray-400 text-black h-full items-center p-20">
      <div className="w-1/2">BADGES</div>
      <div className=" w-1/2">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className=" "
        >
          <CarouselContent className="h-[700px]">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pt-1 w-full h-full basis-1/2">
                <Card className="h-full relative">
                  <CardContent className="flex items-center justify-center p-6 h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      objectFit="cover"
                      quality={100}
                      priority
                    />
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
