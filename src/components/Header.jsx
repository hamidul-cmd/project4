import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showmanu, setshowmanu] = useState(false);
  return (
    <>
      <div className="max-w-wrapper m-auto px-4 pt-10 xll:px-5 xll:pt-5 3xl:px-7.5 bg-white__97">
        <Link className="bg-Orange__50 flex items-center justify-center py-2.5 font-pro text-sm leading-15 text-white rounded-md 3xl:py-3.5 3xl:rounded-lg 3xl:text-lg">
          <p className="mr-3 xll:mr-5.3">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
          <svg
            className="w-5 h-5 3xl:w-6 3xl:h-6"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.59961 12.5C3.59961 12.0029 4.00255 11.6 4.49961 11.6L17.2651 11.6L12.2758 6.84874C11.9175 6.50423 11.9063 5.93449 12.2509 5.5762C12.5954 5.2179 13.1651 5.20673 13.5234 5.55125L20.1234 11.8512C20.2999 12.0209 20.3996 12.2552 20.3996 12.5C20.3996 12.7448 20.2999 12.9791 20.1234 13.1487L13.5234 19.4487C13.1651 19.7933 12.5954 19.7821 12.2509 19.4238C11.9063 19.0655 11.9175 18.4958 12.2758 18.1512L17.2651 13.4L4.49961 13.4C4.00255 13.4 3.59961 12.9971 3.59961 12.5Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="max-w-wrapper m-auto px-4 xll:px-[80px] 3xl:px-[162px] bg-white__97 border-b border-white__95 sticky top-0 z-[1000]">
        <div className="flex justify-between items-center py-3.5 ">
          <div className="flex items-center xll:gap-12.5">
            <Link to="/" className="logo">
              <svg
                className="w-10 h-10 xll:h-10.6 xll:w-10.6 3xl:w-12.6 3xl:h-12.6"
                viewBox="0 0 54 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="54" height="54" rx="8" fill="#FF9500" />
                <path
                  d="M11.167 44.1667L22.0003 33.3333H32.8337V22.5L43.667 33.3333L32.8337 44.1667H11.167Z"
                  fill="white"
                />
                <path
                  d="M11.167 22.5L22.0003 33.3333V22.5H32.8337L43.667 11.6667H22.0003L11.167 22.5Z"
                  fill="white"
                />
              </svg>
            </Link>
            <ul
              className={`flex items-center flex-col absolute left-0 w-full top-full z-[1000] ${
                showmanu ? "translate-x-0" : "translate-x-[-100%]"
              } bg-Orange__50 text-white transition-all ease-in-out duration-300 py-5 gap-5 xll:relative xll:flex-row xll:translate-x-0 xll:bg-transparent 3xl:transition-none xll:gap-0`}
            >
              <li onClick={() => setshowmanu(!showmanu)}>
                <Link
                  to="/"
                  className="py-3 px-5 text-base xll:text-sm xll:leading-15 xll:rounded-md xll:hover:bg-white__95 xll:text-gray__15 transition-all ease-in-out duration-300 3xl:py-3.5 3xl:px-6 3xl:rounded-lg 3xl:text-lg 3xl:leading-15 3xl:font-medium"
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setshowmanu(!showmanu)}>
                <Link
                  to="/courses"
                  className="py-3 px-5 text-base xll:text-sm xll:leading-15 xll:rounded-md xll:hover:bg-white__95 xll:text-gray__15 transition-all ease-in-out duration-300 3xl:py-3.5 3xl:px-6 3xl:rounded-lg 3xl:text-lg 3xl:leading-15 3xl:font-medium"
                >
                  Courses
                </Link>
              </li>
              <li onClick={() => setshowmanu(!showmanu)}>
                <Link
                  to="/about"
                  className="py-3 px-5 text-base xll:text-sm xll:leading-15 xll:rounded-md xll:hover:bg-white__95 xll:text-gray__15 transition-all ease-in-out duration-300 3xl:py-3.5 3xl:px-6 3xl:rounded-lg 3xl:text-lg 3xl:leading-15 3xl:font-medium"
                >
                  About Us
                </Link>
              </li>
              <li onClick={() => setshowmanu(!showmanu)}>
                <Link
                  to="/pricing"
                  className="py-3 px-5 text-base xll:text-sm xll:leading-15 xll:rounded-md xll:hover:bg-white__95 xll:text-gray__15 transition-all ease-in-out duration-300 3xl:py-3.5 3xl:px-6 3xl:rounded-lg 3xl:text-lg 3xl:leading-15 3xl:font-medium"
                >
                  Pricing
                </Link>
              </li>
              <li onClick={() => setshowmanu(!showmanu)}>
                <Link
                  to="/contact"
                  className="py-3 px-5 text-base xll:text-sm xll:leading-15 xll:rounded-md xll:hover:bg-white__95 xll:text-gray__15 transition-all ease-in-out duration-300 3xl:py-3.5 3xl:px-6 3xl:rounded-lg 3xl:text-lg 3xl:leading-15 3xl:font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div>
              <Link
                to="/signup"
                className="py-3 px-5 text-sm leading-15 text-gray__15 rounded-md hover:bg-Orange__50 hover:text-white transition-all ease-in-out duration-300 3xl:text-lg 3xl:py-3.5 3xl:px-8.5 3xl:rounded-lg 3xl:font-medium"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="py-3 px-5 text-sm leading-15 text-gray__15 rounded-md hover:bg-Orange__50 hover:text-white transition-all ease-in-out duration-300 3xl:text-lg 3xl:py-3.5 3xl:px-8.5 3xl:rounded-lg 3xl:font-medium"
              >
                Login
              </Link>
            </div>
            <div onClick={() => setshowmanu(!showmanu)} className="xll:hidden">
              <svg
                className="h-8.5 w-8.5 "
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.25 10.0625C4.25 9.4757 4.7257 9 5.3125 9H28.6875C29.2743 9 29.75 9.4757 29.75 10.0625C29.75 10.6493 29.2743 11.125 28.6875 11.125H5.3125C4.7257 11.125 4.25 10.6493 4.25 10.0625ZM4.25 17.5C4.25 16.9132 4.7257 16.4375 5.3125 16.4375H28.6875C29.2743 16.4375 29.75 16.9132 29.75 17.5C29.75 18.0868 29.2743 18.5625 28.6875 18.5625H5.3125C4.7257 18.5625 4.25 18.0868 4.25 17.5ZM15.9375 24.9375C15.9375 24.3507 16.4132 23.875 17 23.875H28.6875C29.2743 23.875 29.75 24.3507 29.75 24.9375C29.75 25.5243 29.2743 26 28.6875 26H17C16.4132 26 15.9375 25.5243 15.9375 24.9375Z"
                  fill="#262626"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
