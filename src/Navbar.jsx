import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Justin Hadinata - Landing Page</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <a
          href="https://github.com/JustinHadinataCS/JustinHadinata-ToDoList"
          className="hover:underline"
        >
          To-Do
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
