import { useState } from "react";
import { PlusIcon, MinusSmIcon } from "@heroicons/react/solid";

function Vote() {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  return (
    <div className="flex md:flex-col gap-2 text-blue-600/40 bg-blue-700/10 rounded-lg p-1 items-center justify-center">
      <PlusIcon className="h-4 w-4 hover:text-blue-800" onClick={addCount} />
      <span className="text-base text-blue-800 font-bold">{count}</span>
      <MinusSmIcon
        className="h-4 w-4 hover:text-blue-800"
        onClick={minusCount}
      />
    </div>
  );
}

export default Vote;
