import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      {/* Header */}
      <header className="flex flex-col items-center p-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Welcome to Our Platform
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-300 mt-2 font-light">
          Together, we build a better future
        </h2>
      </header>

      {/* Profession Selection */}
      <section className="mt-8 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-md text-center border border-gray-700">
        <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">
          Please select your profession:
        </h3>

        <div className="space-y-4">
          <button onClick={()=> navigate('/register')}
            className="w-full py-3 rounded-lg bg-gray-900 text-white font-medium border border-gray-600 hover:bg-blue-600 hover:border-blue-600 transition duration-300"
          >
            Normal Individual
          </button>

          <button onClick={()=> navigate('/govregister')}
            className="w-full py-3 rounded-lg bg-gray-900 text-white font-medium border border-gray-600 hover:bg-green-600 hover:border-green-600 transition duration-300"
             >
            Government Official
          </button>
        </div>
      </section>
    </div>
  );
};

export default StartPage;
