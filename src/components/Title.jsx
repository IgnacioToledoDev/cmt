// eslint-disable-next-line react/prop-types
export default function Title({ title }) {
  return (
    <div>
      <h3 className="font-semibold text-[28px] text-center p-2 pt-4 text-black uppercase">
        {title || "None title"}{" "}
      </h3>
    </div>
  );
}
