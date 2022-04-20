import { Fragment } from "react";
import ReactDOM from "react-dom";
import { XIcon } from "@heroicons/react/solid";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-10 bg-black/60"
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  <div className="fixed top-[40vh] left-[8.5%] w-5/6 z-50 overflow-hidden bg-red-100/95 border-red-500 border rounded-lg p-3 shadow-lg shadow-red-400/40">
    <div className="flex flex-col gap-2 relative text-red-800">
      <h4 className="text-2xl font-bold capitalize">{props.title}!</h4>
      <p className="text-lg font-normal">{props.message}</p>
      <XIcon
        className="h-5 w-5 absolute top-0 right-0 cursor-pointer"
        onClick={props.onConfirm}
      />
    </div>
  </div>;
};

function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
}

export default ErrorModal;
