import { ReplyIcon } from "@heroicons/react/solid";

export default function Reply() {
  return (
    <div className="flex items-center gap-1 text-blue-900 hover:text-blue-200/80 cursor-pointer justify-items-end md:items-start">
      <ReplyIcon className="h-3 w-3 md:w-4 md:h-4 stroke-[4px]" />
      <span className="text-xs md:text-sm font-bold">Reply</span>
    </div>
  );
}
