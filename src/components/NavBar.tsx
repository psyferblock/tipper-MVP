import { useState } from "react";

export default function Navbar() {
  const isSignedIn = false;

  return (
    <>
      <div className="bg-gray-500 fixed w-full z-10 flex justify-between sm:justify-between sm:items-center h-16 sm:h-[78px] px-3 sm:px-12">
        <button className="py-0 sm:py-[18px] font-light sm:font-normal text-white hover:text-purple-400 text-2xl sm:text-4xl">
          Tipper
        </button>

        {isSignedIn ? (
          <div className="flex items-center space-x-4 sm:space-x-2 ">
            <button className="sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            <img
              className="w-6 h-6 inline-block rounded-full sm:ring-2 "
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />

            <button className="hidden sm:block text-xs text-white pr-9">
              Coco Makmak
            </button>
          </div>
        ) : (
          <div className="text-white text-sm sm:text-sm pt-1 sm:pt-0 font-light sm:font-normal flex items-center space-x-3 sm:space-x-5 ">
            <button className="hover:text-purple-400">About Us</button>
            <button className="hover:text-green-400">Contact Us</button>
            <button className="hover:text-sky-400">Sign In</button>
          </div>
        )}
      </div>
    </>
  );
}
