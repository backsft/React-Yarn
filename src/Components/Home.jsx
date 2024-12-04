import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/superuser");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Welcome to Home!
        </h1>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 font-medium text-white bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
