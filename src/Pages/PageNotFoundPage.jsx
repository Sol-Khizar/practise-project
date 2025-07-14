import React from "react";
import { Link } from "react-router";

const PageNotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFoundPage;
