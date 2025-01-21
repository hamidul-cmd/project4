import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import mini1 from "../assets/mini1.png";
import mini2 from "../assets/mini2.png";
import mini3 from "../assets/mini3.png";
import mini4 from "../assets/mini4.png";

function Login() {
  const [show, setshow] = useState(false);
  const testimonials = [
    {
      comment:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
      img: mini1,
    },
    {
      comment:
        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      name: "Jason M",
      img: mini2,
    },
    {
      comment:
        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      name: "Emily R",
      img: mini3,
    },
    {
      comment:
        "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      name: "Michael K",
      img: mini4,
    },
  ];
  let [current, setcurent] = useState(0);
  let previse = () => {
    if (current === 0) setcurent(testimonials.length - 1);
    else setcurent(current - 1);
  };
  let next = () => {
    if (current === testimonials.length - 1) setcurent(0);
    else setcurent(current + 1);
  };
  return (
    <>
      <section className="py-12.5 xll:pt-20 xll:pb-36.5 3xl:pt-24.5 flex flex-wrap gap-12.5 xll:justify-between xll:items-center">
        <div className="from p-7.5 rounded-[10px] bg-white xll:w-fit xll:p-10 3xl:p-12.5 3xl:rounded-xl xll:order-3">
          <div className="text-center mb-7.5 xll:mb-10 3xl:mb-12.5">
            <h2 className="text-fs_28 font-semibold text-gray__15 mb-2 leading-tight xll:text-fs_38 3xl:text-5xl 3xl:leading-tight 3xl:mb-3">
              Login
            </h2>
            <p className=" text-sm text-gray__30 leading-tight xll:text-base xll:leading-tight 3xl:text-lg 3xl:leading-tight">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <form action="" className="mb-6 3xl:mb-7.5">
            <div>
              <div className="mb-2 3xl:mb-4">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-15 text-gray__15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15"
                >
                  Email
                </label>
              </div>
              <div className="p-5 py-4.8 bg-white__99 border border-white__95 rounded-lg mb-5 3xl:p-6 3xl:py-5 3xl:rounded-[10px]">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className=" w-full border-none outline-none placeholder:text-sm placeholder:leading-15 placeholder:text-gray__40 bg-transparent xll:placeholder:text-base xll:placeholder:leading-15 3xl:placeholder:text-lg 3xl:placeholder:leading-15"
                />
              </div>
            </div>
            <div>
              <div className="mb-2  3xl:mb-4">
                <label
                  htmlFor="Password"
                  className="text-sm font-medium leading-15 text-gray__15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15"
                >
                  Password
                </label>
              </div>
              <div className="p-5 py-4.8 bg-white__99 border border-white__95 rounded-lg mb-2.5 flex justify-between items-center 3xl:p-6 3xl:py-5 3xl:rounded-[10px] 3xl:mb-3.5">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your Password"
                  className=" w-full border-none outline-none placeholder:text-sm placeholder:leading-15 placeholder:text-gray__40 bg-transparent xll:placeholder:text-base xll:placeholder:leading-15 3xl:placeholder:text-lg 3xl:placeholder:leading-15"
                />
                <span
                  onClick={() => setshow(!show)}
                  className={`relative after:content-[''] after:w-full after:h-[2px] after:bg-gray__30 after:absolute after:rotate-[-45deg] after:left-0 after:top-1/2 after:translate-y-[-50%] after:rounded-full ${
                    show ? "after:opacity-100" : "after:opacity-0"
                  }`}
                >
                  <svg
                    className="h-5 w-5 xll:h-6 xll:w-6"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.001 15.5C13.6578 15.5 15.001 14.1569 15.001 12.5C15.001 10.8431 13.6578 9.5 12.001 9.5C10.3441 9.5 9.00098 10.8431 9.00098 12.5C9.00098 14.1569 10.3441 15.5 12.001 15.5Z"
                      fill="#4C4C4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.32439 11.9467C2.81164 7.47571 7.02889 4.25 12.0015 4.25C16.9718 4.25 21.1874 7.47271 22.6765 11.9405C22.7969 12.3015 22.797 12.6922 22.6769 13.0533C21.1896 17.5243 16.9723 20.75 11.9997 20.75C7.02945 20.75 2.81381 17.5273 1.32472 13.0595C1.20437 12.6985 1.20426 12.3078 1.32439 11.9467ZM17.251 12.5C17.251 15.3995 14.9005 17.75 12.001 17.75C9.10148 17.75 6.75098 15.3995 6.75098 12.5C6.75098 9.6005 9.10148 7.25 12.001 7.25C14.9005 7.25 17.251 9.6005 17.251 12.5Z"
                      fill="#4C4C4D"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-end mb-5 3xl:mb-6">
              <a
                href=""
                className="text-sm leading-15 text-gray__30 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center gap-2 mb-5 3xl:mb-6">
              <input type="checkbox" name="" id="" className="h-6 w-6" />
              <h4 className="text-sm leading-15 text-gray__40 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                Remember Me
              </h4>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-md bg-Orange__50 text-white text-sm 3xl:text-lg 3xl:leading-15 3xl:py-4.8 3xl:rounded-[10px]"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center relative before:content-[''] before:w-full before:h-[1px] before:bg-gray__60 before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:z-10 mb-6 3xl:mb-7.5">
            <h5 className="text-sm leading-15 text-gray__60 relative z-20 px-3 bg-white 3xl:text-lg 3xl:leading-15">
              OR
            </h5>
          </div>
          <div className="py-4 flex justify-center items-center gap-3.5 bg-white__97 border border-white__95 rounded-md mb-6 3xl:py-5 3xl:rounded-[10px] 3xl:mb-7.5">
            <div>
              <svg
                className="h-6 w-6 3xl:h-7.5 3xl:w-7.5"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_152_4778)">
                  <path
                    d="M24.2643 12.2764C24.2643 11.4607 24.1982 10.6406 24.0571 9.83807H12.7383V14.4591H19.22C18.951 15.9494 18.0868 17.2678 16.8213 18.1056V21.1039H20.6883C22.9591 19.0139 24.2643 15.9274 24.2643 12.2764Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.7391 24.0008C15.9756 24.0008 18.705 22.9382 20.6936 21.1039L16.8266 18.1055C15.7507 18.8375 14.3618 19.252 12.7435 19.252C9.61291 19.252 6.95849 17.1399 6.00607 14.3003H2.01562V17.3912C4.05274 21.4434 8.20192 24.0008 12.7391 24.0008Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.00082 14.3003C5.49816 12.8099 5.49816 11.1961 6.00082 9.70575V6.61481H2.01478C0.312781 10.0056 0.312781 14.0004 2.01478 17.3912L6.00082 14.3003Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.7391 4.74966C14.4499 4.7232 16.1034 5.36697 17.3425 6.54867L20.7685 3.12262C18.5991 1.0855 15.7198 -0.034466 12.7391 0.000808666C8.20192 0.000808666 4.05274 2.55822 2.01562 6.61481L6.00166 9.70575C6.94967 6.86173 9.6085 4.74966 12.7391 4.74966Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_152_4778">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-sm font-medium leading-15 text-gray__15 3xl:text-lg 3xl:leading-15">
              Login with Google
            </h3>
          </div>
          <p className="text-center flex justify-center text-sm leading-15 text-gray__15 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
            Don’t have an account?
            <Link to="/signup" className="font-medium underline">
              Sign Up
            </Link>
            <div className="ml-1.5">
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00004 16.3333L15.8334 5.49996M15.8334 5.49996V15.9M15.8334 5.49996H5.43337"
                  stroke="#262626"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </p>
        </div>
        <div>
          <div className="mb-10">
            <h1 className="text-fs_28 font-medium leading-15 text-gray__15 mb-1">
              Students Testimonials
            </h1>
            <p className="text-sm leading-15 text-gray__35 xll:w-[660px]">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <section>
            <div className=" w-[357px] xll:w-[659px] 3xl:w-[830px] overflow-hidden relative h-[255px] xll:h-[300px] mb-6">
              <div
                className={`absolute flex transition-all ease-out duration-200`}
                style={{
                  transform: `translatex(-${current * 830}px)`,
                }}
              >
                {testimonials.map((data) => {
                  return (
                    <div className="bg-white rounded-[10px] border border-white__95 3xl:rounded-xl w-[357px] xll:w-[659px] 3xl:w-[830px] ">
                      <div className="p-7.5 xll:p-10 3xl:p-12.5">
                        <p className="text-sm leading-15 text-gray__30 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
                          {data.comment}
                        </p>
                      </div>
                      <div className="bg-white__99 py-5 px-7.5 border-t border-white__95 flex items-center justify-between xll:py-6 xll:px-10 3xl:py-7.5 3xl:px-12.5">
                        <div className="flex items-center gap-2.5">
                          <div>
                            <img
                              src={data.img}
                              alt=""
                              className="h-12.5 w-12.5 3xl:h-14.5 3xl:w-14.5"
                            />
                          </div>
                          <h5 className="text-base font-semibold leading-15 text-gray__15 3xl:text-lg 3xl:leading-15">
                            {data.name}
                          </h5>
                        </div>
                        <Link className="py-3.5 px-4 border border-white__95 bg-white__97 rounded-md text-sm font-medium leading-15 text-gray__15 3xl:py-4.8 3xl:px-6 3xl:rounded-lg 3xl:text-lg 3xl:leading-15">
                          Read Full Story
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button className="p-3 rounded-md bg-white" onClick={previse}>
                <svg
                  className="h-7.5 w-7.5 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.5 17.5C25.5 18.2042 24.9292 18.775 24.225 18.775H12.9405L16.6087 22.106C17.1163 22.594 17.1321 23.4011 16.6441 23.9087C16.156 24.4163 15.3489 24.4321 14.8413 23.9441L8.89129 18.4191C8.64129 18.1787 8.5 17.8468 8.5 17.5C8.5 17.1532 8.64129 16.8213 8.89129 16.581L14.8413 11.056C15.3489 10.5679 16.156 10.5837 16.6441 11.0913C17.1321 11.5989 17.1163 12.406 16.6087 12.8941L12.9405 16.225H24.225C24.9292 16.225 25.5 16.7959 25.5 17.5Z"
                    fill="#262626"
                  />
                </svg>
              </button>
              <button className="p-3 rounded-md bg-white" onClick={next}>
                <svg
                  className="h-7.5 w-7.5 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.5 17.5C8.5 16.7958 9.07084 16.225 9.775 16.225H21.0595L17.3913 12.8941C16.8837 12.406 16.8679 11.5989 17.3559 11.0913C17.844 10.5837 18.6511 10.5679 19.1587 11.056L25.1087 16.581C25.3587 16.8213 25.5 17.1532 25.5 17.5C25.5 17.8468 25.3587 18.1787 25.1087 18.4191L19.1587 23.9441C18.6511 24.4321 17.844 24.4163 17.3559 23.9087C16.8679 23.4011 16.8837 22.594 17.3913 22.106L21.0595 18.775H9.775C9.07084 18.775 8.5 18.2042 8.5 17.5Z"
                    fill="#262626"
                  />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Login;
