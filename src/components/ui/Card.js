export default function Card(props) {
  return (
    <div className="w-full flex flex-col gap-2 bg-white rounded-lg shadow-lg p-2 md:relative max-h-fit md:h-40">
      {props.children}
    </div>
  );
}
