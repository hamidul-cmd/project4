import React from "react";
import img1 from "../assets/cird1.png";
import img2 from "../assets/cird2.png";
import img3 from "../assets/cird3.png";
import img4 from "../assets/cird4.png";
import img5 from "../assets/cird5.png";
import img7 from "../assets/cird7.png";
import img8 from "../assets/cird8.png";
import img9 from "../assets/cird9.png";
import img10 from "../assets/cird10.png";
import img11 from "../assets/cird11.png";
import img12 from "../assets/cird12.png";
import img13 from "../assets/cird13.png";
import img14 from "../assets/cird14.png";
import img16 from "../assets/cird16.png";
import img17 from "../assets/cird17.png";
import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      tittle: "Web Design Fundamentals",
      discribtion:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      img1: img1,
      img2: img7,
      img3: img8,
      duration: "4 Weeks",
      class: "Beginner",
      woner: "By John Smith",
      curriculum1: "Introduction to HTML",
      curriculum2: "Styling with CSS",
      curriculum3: "Introduction to Responsive Design",
      curriculum4: "Design Principles for Web",
      curriculum5: "Building a Basic Website",
    },
    {
      tittle: "UI/UX Design",
      discribtion:
        "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
      img1: img2,
      img2: img9,
      img3: img10,
      duration: "6 Weeks",
      class: "Intermediate",
      woner: "By Emily Johnson",
      curriculum1: "Introduction to UI/UX Design",
      curriculum2: "User Research and Personas",
      curriculum3: "Wireframing and Prototyping",
      curriculum4: "Visual Design and Branding",
      curriculum5: "Usability Testing and Iteration",
    },
    {
      tittle: "Mobile App Development",
      discribtion:
        "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
      img1: img3,
      img2: img11,
      img3: img12,
      duration: "8 Weeks",
      class: "Intermediate",
      woner: "By David Brown",
      curriculum1: "Introduction to Mobile App Development",
      curriculum2: "Fundamentals of Swift Programming (iOS)",
      curriculum3: "Fundamentals of Kotlin Programming (Android)",
      curriculum4: "Building User Interfaces",
      curriculum5: "App Deployment and Testing",
    },
    {
      tittle: "Graphic Design for Beginners",
      discribtion:
        "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
      img1: img4,
      img2: img13,
      img3: img14,
      duration: "10 Weeks",
      class: "Beginner",
      woner: "By Sarah Thompson",
      curriculum1: "Introduction to Graphic Design",
      curriculum2: "Typography and Color Theory",
      curriculum3: "Layout Design and Composition",
      curriculum4: "Image Editing and Manipulation",
      curriculum5: "Designing for Print and Digital Media",
    },
    {
      tittle: "Front-End Web Development",
      discribtion:
        "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
      img1: img5,
      img2: img16,
      img3: img17,
      duration: "10 Weeks",
      class: "Intermediate",
      woner: "By Michael Adams",
      curriculum1: "HTML Fundamentals",
      curriculum2: "CSS Styling and Layouts",
      curriculum3: "JavaScript Basics",
      curriculum4: "Building Responsive Websites",
      curriculum5: "Introduction to Bootstrap and React",
    },
  ];

  return (
    <>
      <section className="hero pt-12.5 pb-7.5 border-b border-white__90 xll:flex justify-between xll:pt-20 xll:pb-10 3xl:pb-12.5 3xl:pt-24.5">
        <h1 className="text-fs_28 font-semibold leading-15 text-gray__15 mb-4 xll:text-fs_38 xll:mb-0 3xl:text-5xl 3xl:leading-15">
          Online Courses on Design and Development
        </h1>
        <p className="text-sm leading-15 text-gray__35 xll:w-[680px] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading5 3xl:w-[748px]">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </section>
      <section className="py-12.5 space-y-5 xll:space-y-10 3xl:space-y-12.5">
        {courses.map((data) => {
          return (
            <div className="p-6 rounded-lg bg-white xll:p-10 xll:rounded-[10px] 3xl:p-12.5 3xl:rounded-xl">
              <div className="tittle flex flex-col gap-5 mb-6 xll:flex-row xll:justify-between xll:items-center 3xl:mb-7.5">
                <div>
                  <h3 className="text-lg leading-15 font-semibold text-gray__15 mb-1 xll:text-xl xll:leading-15 xll:mb-1.5 3xl:text-2xl 3xl:leading-15 3xl:mb-2.5">
                    {data.tittle}
                  </h3>
                  <p className="text-sm leading-15 text-gray__35 xll:w-[1031px] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                    {data.discribtion}
                  </p>
                </div>
                <Link
                  className="w-fit py-3.5 px-4 border border-white__95 rounded-md text-sm leading-15 font-medium text-gray__15 3xl:py-4.8 3xl:px-6 3xl:rounded-lg 3xl:text-lg 3xl:leading-15"
                  to="/frontenddevelopment"
                >
                  View Course
                </Link>
              </div>
              <div className="img flex gap-2.5 mb-6 xll:justify-between xll:gap-0 3xl:mb-7.5">
                <div>
                  <img
                    src={data.img1}
                    alt=""
                    className="block w-[96px] h-24.5 xll:w-[386px] xll:h-[326px] 3xl:w-[478px] 3xl:h-[422px] rounded xll:rounded-md 3xl:rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={data.img2}
                    alt=""
                    className="block w-[96px] h-24.5 xll:w-[386px] xll:h-[326px] 3xl:w-[478px] 3xl:h-[422px] rounded xll:rounded-md 3xl:rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={data.img3}
                    alt=""
                    className="block w-[96px] h-24.5 xll:w-[386px] xll:h-[326px] 3xl:w-[478px] 3xl:h-[422px] rounded xll:rounded-md 3xl:rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-10 xll:flex-row xll:gap-0 xll:justify-between xll:items-center xll:mb-7.5">
                <div className="flex gap-2 3xl:gap-2.5">
                  <div className="py-2 px-3 border border-white__95 rounded-md text-sm text-gray__35 xll:text-base 3xl:py-2.5 3xl:px-4 3xl:text-lg 3xl:leading-15 3xl:rounded-lg">
                    {data.duration}
                  </div>
                  <div className="py-2 px-3 border border-white__95 rounded-md text-sm text-gray__35 xll:text-base 3xl:py-2.5 3xl:px-4 3xl:text-lg 3xl:leading-15 3xl:rounded-lg">
                    {data.class}
                  </div>
                </div>
                <h3 className="text-base font-medium text-gray__15 xll:text-lg xll:leading-15 3xl:text-xl 3xl:leading-15">
                  {data.woner}
                </h3>
              </div>
              <div className="border border-white__95 rounded-[10px]">
                <h3 className="py-3.5 px-5 border-b border-white__95 text-base font-semibold leading-15 text-gray__15 xll:py-5 xll:px-6 xll:text-lg xll:leading-15 3xl:py-6 3xl:px-7.5 3xl:text-fs_22">
                  Curriculum
                </h3>
                <div className="p-6 space-y-5d xll:flex xll:p-0 xll:space-y-0 xll:py-6 3xl:py-7.5">
                  <div className="border-b border-white__95 pb-5 xll:flex-grow xll:px-10 xll:border-r xll:border-b-0 xll:pb-0">
                    <h3 className="text-3xl leading-none font-extrabold text-gray__15 pb-1 xll:pb-0 xll:text-fs_40 3xl:text-fs_50 3xl:pb-1.5">
                      01
                    </h3>
                    <h4 className="text-sm font-medium text-gray__20 leading-15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                      {data.curriculum1}
                    </h4>
                  </div>
                  <div className="border-b border-white__95 pb-5 xll:flex-grow xll:px-10 xll:border-r xll:border-b-0 xll:pb-0">
                    <div className="text-3xl leading-none font-extrabold text-gray__15 pb-1 xll:pb-0 xll:text-fs_40 3xl:text-fs_50 3xl:pb-1.5">
                      02
                    </div>
                    <h4 className="text-sm font-medium text-gray__20 leading-15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                      {data.curriculum2}
                    </h4>
                  </div>
                  <div className="border-b border-white__95 pb-5 xll:flex-grow xll:px-10 xll:border-r xll:border-b-0 xll:pb-0">
                    <div className="text-3xl leading-none font-extrabold text-gray__15 pb-1 xll:pb-0 xll:text-fs_40 3xl:text-fs_50 3xl:pb-1.5">
                      03
                    </div>
                    <h4 className="text-sm font-medium text-gray__20 leading-15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                      {data.curriculum3}
                    </h4>
                  </div>
                  <div className="border-b border-white__95 pb-5 xll:flex-grow xll:px-10 xll:border-r xll:border-b-0 xll:pb-0">
                    <div className="text-3xl leading-none font-extrabold text-gray__15 pb-1 xll:pb-0 xll:text-fs_40 3xl:text-fs_50 3xl:pb-1.5">
                      04
                    </div>
                    <h4 className="text-sm font-medium text-gray__20 leading-15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                      {data.curriculum4}
                    </h4>
                  </div>
                  <div className="xll:flex-grow xll:px-10">
                    <div className="text-3xl leading-none font-extrabold text-gray__15 pb-1 xll:pb-0 xll:text-fs_40 3xl:text-fs_50 3xl:pb-1.5">
                      05
                    </div>
                    <h4 className="text-sm font-medium text-gray__20 leading-15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                      {data.curriculum5}
                    </h4>
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

export default Courses;
