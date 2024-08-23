import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4">
        <h1 className="text-white text-center text-3xl font-bold">Welcome to the Home Page</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">This is the Home Component</h2>
        <p className="text-gray-600 mb-6">
          This is a simple home component styled using Tailwind CSS. Tailwind CSS makes it easy to create responsive and modern UI.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </main>

      <footer className="bg-blue-600 w-full py-2 mt-6">
        <p className="text-white text-center">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
