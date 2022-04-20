import DummyComment from "./components/comments/DummyComment";

export default function App() {
  return (
    <main className="bg-gradient-to-br from-blue-200/75 via-purple-400 to-blue-600 flex items-center justify-center overflow-hidden h-screen">
      <div className="w-5/6 max-w-md flex flex-col gap-4">
        <DummyComment />
      </div>
    </main>
  );
}
