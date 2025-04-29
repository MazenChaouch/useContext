import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-semibold mb-4">🏠 Home Page</h1>
      <p className="text-lg mb-4">
        Current Theme: <strong>Light</strong>
      </p>
      <Link
        to="/settings"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Go to Settings
      </Link>
    </div>
  );
};

export default Home;
