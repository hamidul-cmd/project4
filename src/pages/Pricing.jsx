import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Pricing() {
  const [tik, setTik] = useState(false);
  const [tik2, setTik2] = useState(false);
  const [tik3, setTik3] = useState(false);
  const [tik4, setTik4] = useState(false);
  const [tik5, setTik5] = useState(false);
  const [tik6, setTik6] = useState(false);
  const [tik7, setTik7] = useState(false);
  const [tik8, setTik8] = useState(false);
  const [tik9, setTik9] = useState(false);
  const [tik10, setTik10] = useState(false);
  const [tik11, setTik11] = useState(false);
  const [tik12, setTik12] = useState(false);
  const [tik13, setTik13] = useState(false);
  const [tik14, setTik14] = useState(false);

  const [faq, setfaq] = useState(false);
  const [faq2, setfaq2] = useState(false);
  const [faq3, setfaq3] = useState(false);
  const [faq4, setfaq4] = useState(false);
  const [faq5, setfaq5] = useState(false);

  return (
    <>
      <section className="hero pt-12.5 pb-7.5 border-b border-white__90 xll:flex justify-between xll:pt-20 xll:pb-10 3xl:pb-12.5 3xl:pt-24.5">
        <h1 className="text-fs_28 font-semibold leading-15 text-gray__15 mb-4 xll:text-fs_38 xll:mb-0 3xl:text-5xl 3xl:leading-15">
        Our Pricings
        </h1>
        <p className="text-sm leading-15 text-gray__35 xll:w-[600px] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading5 3xl:w-[748px]">
        Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
        </p>
      </section>
      <section className="py-12.5 xll:py-24.5 3xl:py-20">
        <div className="tittle flex justify-center items-end flex-wrap gap-5 xll:gap-0 mb-10 xll:mb-14.5 3xl:mb-20 ">
          <div className="flex justify-center w-full xll:w-fit">
            <div className="p-3 rounded-lg bg-white flex">
              <Link className="py-3 px-6 rounded-md text-sm font-medium leading-15 text-white bg-Orange__50 block  3xl:py-3.5 3xl:px-7.5 3xl:text-lg 3xl 3xl:leading-15">
                Monthly
              </Link>
              <Link className="py-3 px-6 rounded-md text-sm font-medium leading-15 text-gray__15 block 3xl:py-3.5 3xl:px-7.5 3xl:text-lg 3xl 3xl:leading-15">
                Yearly
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl xll:p-12.5 3xl:p-20 flex flex-col gap-7.5 xll:flex-row xll:flex-nowrap justify-between">
          <div className="bg-white__99 border border-white__95 p-5 pt-7.5 rounded-xl xll:p-6 xll:pt-10 3xl:p-7.5 3xl:pt-12.5 flex-grow">
            <div className="py-2 border border-Orange__90 bg-Orange__97 rounded text-center text-base leading-15 text-gray__15 font-medium mb-7.5 xll:py-2.5 xll:text-lg xll:leading-15 xll:mb-12.5 3xl:py-3 3xl:text-fs_22 3xl:mb-14.7">
              <span>Free Plan</span>
            </div>
            <div className="mb-7.5 text-center xll:mb-12.5">
              <span className="text-fs_50 font-semibold leading-7.5 text-gray__15 xll:text-fs_60 3xl:text-fs_80">
                $0
              </span>
              <span className="text-sm font-medium leading-7.5 text-gray__30 xll:text-base xll:leading-7.5 3xl:text-xl 3xl:leading-7.5">
                /month
              </span>
            </div>
            <div className=" bg-white border border-white__95 rounded-[10px]">
              <div className="p-5 xll:p-7.5 3xl:p-10">
                <h4 className="text-lg text-center font-medium leading-15 text-gray__15 mb-5 xll:mb-6 3xl:text-xl 3xl:leading-15 3xl:mb-7.5">
                  Available Features
                </h4>
                <div className="flex flex-col gap-5 items-start xll:px-7.5">
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik(!tik)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Unlimited access to all courses.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik2(!tik2)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik2 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik2 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik2 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      ULimited course materials and resources.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik3(!tik3)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik3 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik3 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik3 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Basic community support.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik4(!tik4)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik4 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik4 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik4 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      No certification upon completion.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik5(!tik5)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik5 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik5 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik5 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Ad-supported platform.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik6(!tik6)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik6 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik6 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik6 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Access to exclusive Pro Plan community forums.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik7(!tik7)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik7 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik7 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik7 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Early access to new courses and updates.
                    </h5>
                  </div>
                </div>
              </div>
              <Link className="block py-4.8 text-sm font-semibold text-white bg-Orange__50 text-center rounded-b-lg 3xl:py-5 3xl:text-lg">
                Get Started
              </Link>
            </div>
          </div>
          <div className="bg-white__99 border border-white__95 p-5 pt-7.5 rounded-xl xll:p-6 xll:pt-10 3xl:p-7.5 3xl:pt-12.5 flex-grow">
            <div className="py-2 border border-Orange__90 bg-Orange__97 rounded text-center text-base leading-15 text-gray__15 font-medium mb-7.5 xll:py-2.5 xll:text-lg xll:leading-15 xll:mb-12.5 3xl:py-3 3xl:text-fs_22 3xl:mb-14.7">
              <span>Pro Plan</span>
            </div>
            <div className="mb-7.5 text-center xll:mb-12.5">
              <span className="text-fs_50 font-semibold leading-7.5 text-gray__15 xll:text-fs_60 3xl:text-fs_80">
                $79
              </span>
              <span className="text-sm font-medium leading-7.5 text-gray__30 xll:text-base xll:leading-7.5 3xl:text-xl 3xl:leading-7.5">
                /month
              </span>
            </div>
            <div className=" bg-white border border-white__95 rounded-[10px]">
              <div className="p-5 xll:p-7.5 3xl:p-10">
                <h4 className="text-lg text-center font-medium leading-15 text-gray__15 mb-5 xll:mb-6 3xl:text-xl 3xl:leading-15 3xl:mb-7.5">
                  Available Features
                </h4>
                <div className="flex flex-col gap-5 items-start xll:px-7.5">
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik8(!tik8)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik8 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik8 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik8 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Unlimited access to all courses.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik9(!tik9)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik9 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik9 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik9 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Unlimited course materials and resources.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik10(!tik10)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik10 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik10 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik10 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Priority support from instructors.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik11(!tik11)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik11 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik11 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik11 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Course completion certificates.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik12(!tik12)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik12 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik12 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik12 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Ad-free experience.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik13(!tik13)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik13 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik13 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik13 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Access to exclusive Pro Plan community forums.
                    </h5>
                  </div>
                  <div
                    className="flex items-center p-3 border border-white__95 gap-2 rounded-md 3xl:p-3.5 3xl:rounded-lg 3xl:gap-3 w-full"
                    onClick={() => setTik14(!tik14)}
                  >
                    <div
                      className={`p-1 border border-white__95 h-fit rounded 3xl:p-1.5  3xl:rounded-md ${
                        tik14 ? "bg-Orange__95" : "bg-transparent"
                      }`}
                    >
                      <span className={`${tik14 ? "block" : "hidden"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className={`${tik14 ? "hidden" : "block"}`}>
                        <svg
                          className="h-4 w-4 3xl:h-5 3xl:w-5"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-sm leading-15 text-gray__15">
                      Early access to new courses and updates.
                    </h5>
                  </div>
                </div>
              </div>
              <Link className="block py-4.8 text-sm font-semibold text-white bg-Orange__50 text-center rounded-b-lg 3xl:py-5 3xl:text-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="faq pb-12.5 xll:pb-24.5 3xl:pb-36.5">
        <div className=" p-6 rounded-xl bg-white flex flex-col gap-10 xll:flex-row xll:gap-20 xll:p-20 3xl:gap-[120px] 3xl:p-24.5">
          <div className="tittle xll:w-[408px] ">
            <h2 className="text-fs_28 font-semibold leading-12 text-gray__15 mb-2 xll:text-fs_38 3xl:text-5xl xll:leading-12 3xl:mb-2.5">
              Frequently Asked Questions
            </h2>
            <p className="text-sm leading-15 text-gray__20 mb-5 xll:text-base xll:mb-10 3xl:text-lg 3xl:leading-15 3xl:mb-12.5">
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <Link className="py-3.5 px-5 border border-white__95 rounded-md text-sm font-medium text-gray__15 leading-15 3xl:py-4.8 3xl:px-6 3xl:text-lg 3xl:leading-15 3xl:rounded-lg">
              See All FAQ’s
            </Link>
          </div>
          <div className="space-y-5 xll:w-[631px] 3xl:w-[867px] 3xl:space-y-7.5">
            <div
              className={`bg-white p-6 border border-white__95 rounded-[10px] xll:px-10 transition-all ease-in duration-150 cursor-pointer ${
                faq
                  ? "xll:pb-10 3xl:pb-12.5 py-10 3xl:py-12.5"
                  : "py-6 3xl:py-7.5"
              }`}
              onClick={() => setfaq(!faq)}
            >
              <div
                className={`flex justify-between items-center border-white__95 ${
                  faq
                    ? "mb6 border-b 3xl:mb-12.5 xll:mb-10 pb-5"
                    : "mb-0 border-b-0 pb-0"
                }`}
                onClick={() => setfaq(!faq)}
              >
                <h4 className="text-base font-semibold leading-15 text-gray__15 xll:text-lg xll:leading-15 3xl:text-xl 3xl:leading-15">
                  Can I enroll in multiple courses at once?
                </h4>
                <div className="p-2.5 rounded-md bg-Orange__95 3xl:p-3 3xl:rounded-lg">
                  <div
                    className={`${
                      faq ? "rotate-45" : "rotate-0"
                    } transition-all ease-in`}
                  >
                    <svg
                      className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 14H14M21 14H14M14 14V7M14 14V21"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`overflow-hidden ${faq ? "h-fit" : "h-0"}`}>
                <p className="text-sm leading-15 text-gray__30 mb-5 xll:text-base xll:leading-15 xll:mb-10 3xl:text-lg 3xl:leading-15 3xl:mb-12.5">
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
                <div className="p-3.5 bg-white__97 border border-white__95 rounded-md flex justify-between items-center xll:py-4 xll:px-6 3xl:py-5 3xl:px-7.5 3xl:rounded-lg">
                  <h4 className="text-sm font-medium leading-15 text-[#333333] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                    Enrollment Process for Different Courses
                  </h4>
                  <div className="bg-white p-2.5 rounded-full xll:p-3 3xl:p-3.5">
                    <div>
                      <svg
                        className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99967 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21"
                          stroke="#4C4C4C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-white p-6 border border-white__95 rounded-[10px] xll:px-10 transition-all ease-in duration-150 cursor-pointer ${
                faq2
                  ? "xll:pb-10 3xl:pb-12.5 py-10 3xl:py-12.5"
                  : "py-6 3xl:py-7.5"
              }`}
              onClick={() => setfaq2(!faq2)}
            >
              <div
                className={`flex justify-between items-center border-white__95 ${
                  faq2
                    ? "mb6 border-b 3xl:mb-12.5 xll:mb-10 pb-5"
                    : "mb-0 border-b- pb-0"
                }`}
                onClick={() => setfaq2(!faq2)}
              >
                <h4 className="text-base font-semibold leading-15 text-gray__15 xll:text-lg xll:leading-15 3xl:text-xl 3xl:leading-15">
                  What kind of support can I expect from instructors?
                </h4>
                <div className="p-2.5 rounded-md bg-Orange__95 3xl:p-3 3xl:rounded-lg">
                  <div
                    className={`${
                      faq2 ? "rotate-45" : "rotate-0"
                    } transition-all ease-in`}
                  >
                    <svg
                      className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 14H14M21 14H14M14 14V7M14 14V21"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`overflow-hidden ${faq2 ? "h-fit" : "h-0"}`}>
                <p className="text-sm leading-15 text-gray__30 mb-5 xll:text-base xll:leading-15 xll:mb-10 3xl:text-lg 3xl:leading-15 3xl:mb-12.5">
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
                <div className="p-3.5 bg-white__97 border border-white__95 rounded-md flex justify-between items-center xll:py-4 xll:px-6 3xl:py-5 3xl:px-7.5 3xl:rounded-lg">
                  <h4 className="text-sm font-medium leading-15 text-[#333333] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                    Enrollment Process for Different Courses
                  </h4>
                  <div className="bg-white p-2.5 rounded-full xll:p-3 3xl:p-3.5">
                    <div>
                      <svg
                        className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99967 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21"
                          stroke="#4C4C4C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-white p-6 border border-white__95 rounded-[10px] xll:px-10 transition-all ease-in duration-150 cursor-pointer ${
                faq3
                  ? "xll:pb-10 3xl:pb-12.5 py-10 3xl:py-12.5"
                  : "py-6 3xl:py-7.5"
              }`}
              onClick={() => setfaq3(!faq3)}
            >
              <div
                className={`flex justify-between items-center border-white__95 ${
                  faq3
                    ? "mb6 border-b 3xl:mb-12.5 xll:mb-10 pb-5"
                    : "mb-0 border-b- pb-00"
                }`}
                onClick={() => setfaq3(!faq3)}
              >
                <h4 className="text-base font-semibold leading-15 text-gray__15 xll:text-lg xll:leading-15 3xl:text-xl 3xl:leading-15">
                  Are the courses self-paced or do they have specific start and
                  end dates?
                </h4>
                <div className="p-2.5 rounded-md bg-Orange__95 3xl:p-3 3xl:rounded-lg">
                  <div
                    className={`${
                      faq3 ? "rotate-45" : "rotate-0"
                    } transition-all ease-in`}
                  >
                    <svg
                      className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 14H14M21 14H14M14 14V7M14 14V21"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`overflow-hidden ${faq3 ? "h-fit" : "h-0"}`}>
                <p className="text-sm leading-15 text-gray__30 mb-5 xll:text-base xll:leading-15 xll:mb-10 3xl:text-lg 3xl:leading-15 3xl:mb-12.5">
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
                <div className="p-3.5 bg-white__97 border border-white__95 rounded-md flex justify-between items-center xll:py-4 xll:px-6 3xl:py-5 3xl:px-7.5 3xl:rounded-lg">
                  <h4 className="text-sm font-medium leading-15 text-[#333333] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                    Enrollment Process for Different Courses
                  </h4>
                  <div className="bg-white p-2.5 rounded-full xll:p-3 3xl:p-3.5">
                    <div>
                      <svg
                        className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99967 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21"
                          stroke="#4C4C4C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-white p-6 border border-white__95 rounded-[10px] xll:px-10 transition-all ease-in duration-150 cursor-pointer ${
                faq4
                  ? "xll:pb-10 3xl:pb-12.5 py-10 3xl:py-12.5"
                  : "py-6 3xl:py-7.5"
              }`}
              onClick={() => setfaq4(!faq4)}
            >
              <div
                className={`flex justify-between items-center border-white__95 ${
                  faq4
                    ? "mb6 border-b 3xl:mb-12.5 xll:mb-10 pb-5"
                    : "mb-0 border-b-0 pb-0"
                }`}
                onClick={() => setfaq4(!faq4)}
              >
                <h4 className="text-base font-semibold leading-15 text-gray__15 xll:text-lg xll:leading-15 3xl:text-xl 3xl:leading-15">
                  Are there any prerequisites for the courses?
                </h4>
                <div className="p-2.5 rounded-md bg-Orange__95 3xl:p-3 3xl:rounded-lg">
                  <div
                    className={`${
                      faq4 ? "rotate-45" : "rotate-0"
                    } transition-all ease-in`}
                  >
                    <svg
                      className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 14H14M21 14H14M14 14V7M14 14V21"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`overflow-hidden ${faq4 ? "h-fit" : "h-0"}`}>
                <p className="text-sm leading-15 text-gray__30 mb-5 xll:text-base xll:leading-15 xll:mb-10 3xl:text-lg 3xl:leading-15 3xl:mb-12.5">
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
                <div className="p-3.5 bg-white__97 border border-white__95 rounded-md flex justify-between items-center xll:py-4 xll:px-6 3xl:py-5 3xl:px-7.5 3xl:rounded-lg">
                  <h4 className="text-sm font-medium leading-15 text-[#333333] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                    Enrollment Process for Different Courses
                  </h4>
                  <div className="bg-white p-2.5 rounded-full xll:p-3 3xl:p-3.5">
                    <div>
                      <svg
                        className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99967 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21"
                          stroke="#4C4C4C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`bg-white p-6 border border-white__95 rounded-[10px] xll:px-10 transition-all ease-in duration-150 cursor-pointer ${
                faq5
                  ? "xll:pb-10 3xl:pb-12.5 py-10 3xl:py-12.5"
                  : "py-6 3xl:py-7.5"
              }`}
              onClick={() => setfaq5(!faq5)}
            >
              <div
                className={`flex justify-between items-center border-white__95 ${
                  faq5
                    ? "mb6 border-b 3xl:mb-12.5 xll:mb-10 pb-5"
                    : "mb-0 border-b- pb-00"
                }`}
                onClick={() => setfaq5(!faq5)}
              >
                <h4 className="text-base font-semibold leading-15 text-gray__15 xll:text-lg xll:leading-15 3xl:text-xl 3xl:leading-15">
                  Can I download the course materials for offline access?
                </h4>
                <div className="p-2.5 rounded-md bg-Orange__95 3xl:p-3 3xl:rounded-lg">
                  <div
                    className={`${
                      faq5 ? "rotate-45" : "rotate-0"
                    } transition-all ease-in`}
                  >
                    <svg
                      className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 14H14M21 14H14M14 14V7M14 14V21"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`overflow-hidden ${faq5 ? "h-fit" : "h-0"}`}>
                <p className="text-sm leading-15 text-gray__30 mb-5 xll:text-base xll:leading-15 xll:mb-10 3xl:text-lg 3xl:leading-15 3xl:mb-12.5">
                  Absolutely! You can enroll in multiple courses simultaneously
                  and access them at your convenience.
                </p>
                <div className="p-3.5 bg-white__97 border border-white__95 rounded-md flex justify-between items-center xll:py-4 xll:px-6 3xl:py-5 3xl:px-7.5 3xl:rounded-lg">
                  <h4 className="text-sm font-medium leading-15 text-[#333333] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                    Enrollment Process for Different Courses
                  </h4>
                  <div className="bg-white p-2.5 rounded-full xll:p-3 3xl:p-3.5">
                    <div>
                      <svg
                        className="h-5 w-5 xll:w-6 xll:h-6 3xl:h-[28px] 3xl:w-[28px]"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99967 14H21.583M21.583 14L14.583 7M21.583 14L14.583 21"
                          stroke="#4C4C4C"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
