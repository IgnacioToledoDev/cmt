/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function TestimonialCard({ comment }) {
  return (
    <div className="lg:p-2 lg:m-2 border rounded-sm shadow-sm ">
      <Card color="transparent" shadow={false} className="max-w-[26rem] p-4">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {comment.author}
              </Typography>
              <div className="flex items-center gap-1">
                <Rating readonly value={comment.rating} />
              </div>
            </div>
            <hr className="my-2 border-blue-gray-50" />
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>&quot;{comment.comment}&quot;</Typography>
        </CardBody>
      </Card>
    </div>
  );
}
