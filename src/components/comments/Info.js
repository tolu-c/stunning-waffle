import woman from "../../images/woman.jpg";

export default function Info() {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={woman}
        alt="man"
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-sm font-bold text-gray-900">amyrobson</span>
      <span className="text-sm text-gray-500 font-normal">1 month ago</span>
    </div>
  );
}
