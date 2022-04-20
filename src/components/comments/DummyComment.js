import Card from "../ui/Card";
import Body from "./Body";
import Info from "./Info";
import Reply from "./Reply";
import Vote from "./Vote";

export default function DummyComment() {
  return (
    <Card>
      <div className="flex w-full justify-between order-last md:order-first">
        <Vote />
        <Reply />
      </div>
      <div className="flex flex-col gap-2 md:w-5/6 md:absolute md:left-12 md:h-full">
        <Info />
        <Body />
      </div>
    </Card>
  );
}
