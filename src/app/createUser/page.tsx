import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm bg-blue-600">
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <form>
        <div className="text-start mb-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-700 ">eShuri</h1>
          <p className="text-blue-600 text-1xl">Mentor Sign Up</p>
        </div>
        <div className="text-center mb-8 capitalize text-red-600 hidden"></div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-slate-50 w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className=" bg-slate-50 w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className=" bg-slate-50 w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
           Confirm Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-slate-50 w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your Confirm password"
          />
        </div>
        <div className="mb-4 flex items-center">
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-50 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
        <div className="text-start">
          <Link href="./loginUser" className="text-blue-500 hover:underline text-sm">
            Already Have An Account? Log-in
          </Link>
        </div>
      </form>
    </div>
  </div>
  </main>
  );
};

export default page;
