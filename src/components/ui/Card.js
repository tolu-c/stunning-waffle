export default function Card(props) {
  return (
    <div className='w-full flex flex-col gap-2 bg-white rounded-lg shadow-md'>
      {props.children}
    </div>
  );
}
