import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the App</h1>
      <a
        href="https://github.com/JustinHadinataCS/JustinHadinata-ToDoList"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Go to To-Do-List
      </a>
    </div>
  );
}

export default LandingPage;
