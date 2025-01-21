import React from "react";
import video from "../assets/video.mp4";

function FrontEndDevelopment() {
  const box = [
    {
      number: "01",
      tittle: "Introduction to UI/UX Design",
      box1__tittle: "Understanding UI/UX Design Principles",
      box1__duration: "45 Minutes",

      box2__tittle: "Importance of User-Centered Design",
      box2__duration: "1 Hour",

      box3__tittle: "The Role of UI/UX Design in Product",
      box3__duration: "45 Minutes",
    },
    {
      number: "02",
      tittle: "User Research and Analysis",
      box1__tittle: "Conducting User Research and Interviews",
      box1__duration: "1 Hour",

      box2__tittle: "Analyzing User Needs and Behavior",
      box2__duration: "1 Hour",

      box3__tittle: "TCreating User Personas and Scenarios",
      box3__duration: "45 Minutes",
    },
    {
      number: "03",
      tittle: "Wireframing and Prototyping",
      box1__tittle: "Introduction to Wireframing Tools and Techniques",
      box1__duration: "1 Hour",

      box2__tittle: "Creating Low-Fidelity Wireframes",
      box2__duration: "1 Hour",

      box3__tittle: "Prototyping and Interactive Mockups",
      box3__duration: "1 Hour",
    },
    {
      number: "04",
      tittle: "Color Theory and Typography in UI Design",
      box1__tittle: "Visual Hierarchy and Layout Design",
      box1__duration: "1 Hour",

      box2__tittle: "Importance of User-Centered Design",
      box2__duration: "1 Hour",

      box3__tittle: "Creating a Strong Brand Identity",
      box3__duration: "45 Minutes",
    },
    {
      number: "05",
      tittle: "Usability Testing and Iteration",
      box1__tittle: "Usability Testing Methods and Techniques",
      box1__duration: "1 Hour",

      box2__tittle: "Analyzing Usability Test Results",
      box2__duration: "45 Minutes",

      box3__tittle: "Iterating and Improving UX Designs",
      box3__duration: "45 Minutes",
    },
  ];
  return (
    <>
      <section className="hero pt-12.5 pb-7.5 border-b border-white__90 xll:flex justify-between xll:pt-20 xll:pb-10 3xl:pb-12.5 3xl:pt-24.5">
        <h1 className="text-fs_28 font-semibold leading-15 text-gray__15 mb-4 xll:text-fs_38 xll:mb-0 3xl:text-5xl 3xl:leading-15">
        UI/UX Design Course
        </h1>
        <p className="text-sm leading-15 text-gray__35 xll:w-[600px] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading5 3xl:w-[748px]">
        Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum
        </p>
      </section>
      <section className="pt-7.5 pb-12.5 xll:pt-20 xll:pb-24.5 3xl:pt-24.5 3xl:pb-36.5">
        <div className="rounded-[10px] overflow-hidden 3xl:rounded-xl">
          <video muted autoPlay loop className="max-w-full h-auto">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="grid pb-12.5 grid-cols-1 gap-5 3xl:gap-7.5 xll:grid-cols-2">
        {box.map((data) => {
          return (
            <div className="bg-white p-7.5 rounded-[10px] xll:p-10 3xl:p-12.5 3xl:rounded-xl">
              <h1 className="text-fs_50 font-bold leading-6 text-gray__15 text-right mb-7.5 xll:text-fs_60 xll:mb-10 3xl:text-fs_80 3xl:mb-12.5">
                {data.number}
              </h1>
              <h2 className="text-lg font-semibold leading-15 text-gray__15 mb-7.5 xll:text-xl xll:leading-15 xll:mb-10 3xl:text-2xl 3xl:leading-15 3xl:mb-12.5">
                {data.tittle}
              </h2>
              <div className="space-y-4 3xl:space-y-5">
                <div className="p-6 border border-white__95  rounded-md hover:shadow-ss1 group  xll:mb-0 xll:flex xll:justify-between xll:items-center xll:py-5 3xl:py-6 3xl:px-7.5 3xl:rounded-lg transition-all ease-linear duration-300">
                  <div className="mb-6 xll:mb-0">
                    <h3 className="text-base leading-15 font-medium text-gray__20 mb-0.5 3xl:text-xl 3xl:leading-15 3xl:mb-1.5">
                      {data.box1__tittle}
                    </h3>
                    <h4 className="text-sm leading-15 text-gray__35 3xl:text-lg 3xl:leading-15">
                      Lesson 01
                    </h4>
                  </div>
                  <div className="flex gap-1 items-center w-fit rounded-md bg-white__97 p-2.5 group-hover:bg-Orange__90 3xl:py-3 3xl:px-3.5 transition-all duration-300 ease-linear">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 5V10H13.75M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                          stroke="#4C4C4D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h5 className="text-sm leading-15 to-gray__35 3xl:text-lg 3xl:leading-15">
                      {data.box1__duration}
                    </h5>
                  </div>
                </div>
                <div className="p-6 border border-white__95  rounded-md hover:shadow-ss1 group  xll:mb-0 xll:flex xll:justify-between xll:items-center xll:py-5 3xl:py-6 3xl:px-7.5 3xl:rounded-lg transition-all ease-linear duration-300">
                  <div className="mb-6 xll:mb-0">
                    <h3 className="text-base leading-15 font-medium text-gray__20 mb-0.5 3xl:text-xl 3xl:leading-15 3xl:mb-1.5">
                      {data.box2__tittle}
                    </h3>
                    <h4 className="text-sm leading-15 text-gray__35 3xl:text-lg 3xl:leading-15">
                      Lesson 02
                    </h4>
                  </div>
                  <div className="flex gap-1 items-center w-fit rounded-md bg-white__97 p-2.5 group-hover:bg-Orange__90 3xl:py-3 3xl:px-3.5 transition-all duration-300 ease-linear">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 5V10H13.75M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                          stroke="#4C4C4D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h5 className="text-sm leading-15 to-gray__35 3xl:text-lg 3xl:leading-15">
                      {data.box2__duration}
                    </h5>
                  </div>
                </div>
                <div className="p-6 border border-white__95  rounded-md hover:shadow-ss1 group  xll:mb-0 xll:flex xll:justify-between xll:items-center xll:py-5 3xl:py-6 3xl:px-7.5 3xl:rounded-lg transition-all ease-linear duration-300">
                  <div className="mb-6 xll:mb-0">
                    <h3 className="text-base leading-15 font-medium text-gray__20 mb-0.5 3xl:text-xl 3xl:leading-15 3xl:mb-1.5">
                      {data.box3__tittle}
                    </h3>
                    <h4 className="text-sm leading-15 text-gray__35 3xl:text-lg 3xl:leading-15">
                      Lesson 03
                    </h4>
                  </div>
                  <div className="flex gap-1 items-center w-fit rounded-md bg-white__97 p-2.5 group-hover:bg-Orange__90 3xl:py-3 3xl:px-3.5 transition-all duration-300 ease-linear">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 5V10H13.75M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                          stroke="#4C4C4D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h5 className="text-sm leading-15 to-gray__35 3xl:text-lg 3xl:leading-15">
                      {data.box3__duration}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default FrontEndDevelopment;
