import { Service } from "./Service";
import Title from "./Title";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const Services = () => {
  return (
    <div>
      <Title title="Mis Servicios" />
      {/* TODO -> if the content is focus or select for the client, it would moved to next Card */}
      <section className="flex flex-col">
        <div className="gap-1 items-center justify-center py-3 px-6 md:inline-block">
          {" "}
          <Carousel
            className="rounded-xl w-full h-full"
            autoplay
            loop
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="indigo"
                size="sm"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-4"
              >
                <ArrowLeftIcon strokeWidth={4} className="w-6 h-6" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="indigo"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 !right-4"
              >
                <ArrowRightIcon strokeWidth={4} className="w-6 h-6" />
              </IconButton>
            )}
          >
            <Service title="Psicoterapia de pareja" price="40.000" />
            <Service title="Terapia de pareja" price="40.000" />
            <Service
              title="Psicoterapia breve centrada en soluciones"
              price="30.000"
            />
            <Service
              title="Psicoterapia en adolescentes y adultos"
              price="30.000"
            />
            <Service title="Terapia de familia" price="40.000" />
          </Carousel>
        </div>
      </section>
    </div>
  );
};
