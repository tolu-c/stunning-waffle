import ErrorModal from "../ui/ErrorModal";
import { useState, useRef } from "react";
import man from "../../images/man.jpg";
import Wrapper from "../helpers/Wrapper";

function AddComment(props) {
  const commentRef = useRef();
  const [error, setError] = useState();

  function addComment(event) {
    event.preventDefault();

    const enteredComment = commentRef.current.value;

    // error handling
    if (enteredComment.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Input fields cannot be empty.",
      });
      return;
    }

    console.log("form submitted");
    console.log(`{comment: ${enteredComment}}`);
    props.onAddComment(enteredComment);
    commentRef.current.value = "";
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="w-full md:max-w-xl mx-auto p-3 md:pt-4 bg-white rounded-lg h-auto shadow-md">
        <form
          onSubmit={addComment}
          className="flex flex-wrap md:flex-nowrap items-center md:items-start justify-between gap-4 md:gap-2 md:justify-start"
        >
          <textarea
            className="w-full basis-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 placeholder:text-gray-600 text-gray-900  font-normal text-base md:basis-5/6 md:order-2 md:h-24"
            placeholder="Add a comment..."
            name="comment"
            ref={commentRef}
          ></textarea>
          {/* <textarea
            className="w-full basis-full p-2 rounded border border-gray-300 placeholder:text-gray-600 text-gray-900 font-normal text-base md:basis-5/6 md:order-2 md:h-24"
            placeholder="Add a comment..."
            name="comment"
            ref={commentRef}
          ></textarea> */}
          {/* <textarea placeholder='Add a comment'></textarea> */}
          <input type="text" />
          <img
            src={man}
            alt="man"
            className="w-10 h-10 rounded-full object-cover md:order-1"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white basis-1/4 text-lg flex items-center justify-center rounded-md px-6 py-2 uppercase font-medium hover:bg-blue-500 md:order-last md:px-3 md:py-2"
          >
            send
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default AddComment;
