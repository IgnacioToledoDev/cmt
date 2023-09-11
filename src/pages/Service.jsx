import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export const Service = ({ name, priceCLP, priceUSD }) => {
  return (
    <div className="p-1 lg:m-1 xl:m-2 xl:p-2">
      <Card className="w-full max-w-xl lg:max-w-[42rem] flex-row p-12">
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
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-3 capitalize font-semibold"
          >
            {name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
          <Typography
            className="block w-full lg:inline-block text-lg font-semibold"
            variant="lead"
            size="lg"
          >
            Precio en CLP: ${priceCLP}
          </Typography>
          <Typography
            className="block w-full lg:inline-block text-lg font-semibold"
            variant="lead"
            size="lg"
          >
            Precio en USD: ${priceUSD}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};
