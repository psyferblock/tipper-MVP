export default function SignIn() {
  return (
    <div className="bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className="sm:w-1/3 mb-10 sm:mb-0">
          <button className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <p className="text-lg">Back</p>
          </button>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        {/* RIGHT PART OF SCREEN */}
        <div className="bg-white grow sm:py-28 sm:px-40 ">
          <div className="mb-9 text-center sm:text-start">
            <p className="text-3xl font-bold ">Sign In</p>
            <p className="italic text-sm font-light">
              Welcome back to the network
            </p>
          </div>
          {/* INPUT FORMS */}
          <div className="space-y-3">
            {/* EMAIL ADDRESS */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Email Address*
              </label>
              {/* ENTITY NAME INPUT FIELD */}
              <input
                type="text"
                id="Email Address*"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            {/* PASSWORD INPUT */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Password*
              </label>
              {/* PASSWORD INPUT FIELD */}
              <input
                type="text"
                id="Password"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          {/* SIGN IN BUTTON */}
          <button className="w-full h-10 mt-8 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm">
            Sign In
          </button>
          <div className="flex items-center justify-center mt-3 space-x-1">
            <p>Don't have an account?</p>
            <a className="underline hover:text-blue-600 font-semibold" href="">
              Sign Up Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
