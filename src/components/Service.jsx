import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export const Service = () => {
  return (
    <div className="p-1 m-2">
      <Card className="w-full max-w-[42rem] flex-row p-8">
        <CardHeader
          shadow={true}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Terapia
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-3">
            Psicoterapia en adolescentes y adultos
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
          <Typography
            className="block w-full lg:inline-block text-blue-600 text-lg font-semibold"
            variant="text"
            size="lg"
          >
            Precio: $10000 por cada sesion
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};
