import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="min-h-screen p-8 transition-colors bg-white text-black">
      <h1 className="text-4xl font-semibold mb-4">⚙️ Settings Page</h1>
      <p className="text-lg mb-4">
        Theme is currently: <strong>Light</strong>
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-4">
        Toggle Theme
      </button>
      <br />
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default Settings;
