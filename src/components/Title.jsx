// eslint-disable-next-line react/prop-types
export default function Title({ title }) {
  return (
    <div>
      <h3 className="font-semibold text-[20px] text-center p-3 text-black">
        {title || "None title"}{" "}
      </h3>
    </div>
  );
}
