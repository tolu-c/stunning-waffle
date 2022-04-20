import DummyComment from "./components/comments/DummyComment";
import { useState } from 'react';
import CommentList from "./components/comments/CommentList";
import AddComment from "./components/comments/AddComment";

export default function App() {
  const [commentList, setCommentList] = useState([]);
  // console.log(commentList);

  function getComment(comment) {
    setCommentList((prevCommentList) => {
      return [...prevCommentList, { comment: comment }];
    });
  }

  return (
    <main className="bg-gradient-to-br from-blue-200/75 via-purple-400 to-blue-600 flex items-center justify-center overflow-hidden h-screen">
      <div className="w-5/6 max-w-md flex flex-col gap-4">
        <DummyComment />

        <CommentList comments={commentList} />
        <AddComment onAddComment={getComment} />
      </div>
    </main>
  );
}
