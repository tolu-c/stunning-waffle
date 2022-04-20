import Wrapper from "../helpers/Wrapper";
import Card from "../ui/Card";
import Info from "./Info";
import Reply from "./Reply";
import Vote from "./Vote";

function CommentList(props) {
  return (
    <Wrapper>
      {props.comments.map((comment, index) => (
        <Card key={index}>
          <div className="flex w-full justify-between order-last md:order-first">
            <Vote />
            <Reply />
          </div>
          <div className="flex flex-col gap-2 md:w-5/6 md:absolute md:left-12 md:h-full">
            <Info />
            <p className="w-full h-20 max-h-fit p-1 text-slate-700 text-ellipsis overflow-hidden">
              {comment.comment}
            </p>
          </div>
        </Card>
      ))}
    </Wrapper>
  );
}

export default CommentList;
