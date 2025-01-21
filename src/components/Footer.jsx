import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <sectio className="footer">
        <div className="container max-w-wrapper m-auto px-5 xll:px-20 3xl:px-40.2">
          <div className="pt-12.5 flex flex-col gap-6 pb-5 border-b border-white__95 xll:flex-row xll:justify-between xll:pt-14.5 xll:pb-7.5 3xl:pt-24.5 3xl:pb-12.5">
            <div>
              <div className="mb-7.5 3xl:mb-10">
                <Link to="/" className="logo ">
                  <svg
                    className="w-[44px] h-[44px] xll:h-10.6 xll:w-10.6 3xl:w-12.6 3xl:h-12.6"
                    viewBox="0 0 54 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="54"
                      height="54"
                      rx="8"
                      fill="#FF9500"
                    />
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
              </div>
              <div className="space-y-3 xll:space-y-3.5 3xl:space-y-5">
                <div className="gamil flex items-center gap-1.5 text-sm leading-15 text-gray__15 xll:gap-1 xll:text-base xll:leading-15 3xl:gap-1.5 3xl:text-lg 3xl:leading-15">
                  <div>
                    <svg
                      className="h-6 w-6 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 9.1691V17.75C1.5 19.4069 2.84315 20.75 4.5 20.75H19.5C21.1569 20.75 22.5 19.4069 22.5 17.75V9.1691L13.5723 14.6631C12.6081 15.2564 11.3919 15.2564 10.4277 14.6631L1.5 9.1691Z"
                        fill="#262626"
                      />
                      <path
                        d="M22.5 7.40783V7.25C22.5 5.59315 21.1569 4.25 19.5 4.25H4.5C2.84315 4.25 1.5 5.59315 1.5 7.25V7.40783L11.2139 13.3856C11.696 13.6823 12.304 13.6823 12.7861 13.3856L22.5 7.40783Z"
                        fill="#262626"
                      />
                    </svg>
                  </div>
                  <h5>hello@skillbridge.com</h5>
                </div>
                <div className="call flex items-center gap-1.5 text-sm leading-15 text-gray__15 xll:gap-1 xll:text-base xll:leading-15 3xl:gap-1.5 3xl:text-lg 3xl:leading-15">
                  <div>
                    <svg
                      className="h-6 w-6 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2H5.87163C6.732 2 7.48197 2.58556 7.69064 3.42025L8.79644 7.84343C8.97941 8.5753 8.70594 9.34555 8.10242 9.79818L6.8088 10.7684C6.67447 10.8691 6.64527 11.0167 6.683 11.1197C7.81851 14.2195 10.2805 16.6815 13.3803 17.817C13.4833 17.8547 13.6309 17.8255 13.7316 17.6912L14.7018 16.3976C15.1545 15.7941 15.9247 15.5206 16.6566 15.7036L21.0798 16.8094C21.9144 17.018 22.5 17.768 22.5 18.6284V20C22.5 21.6569 21.1569 23 19.5 23H17.25C8.55151 23 1.5 15.9485 1.5 7.25V5Z"
                        fill="#262626"
                      />
                    </svg>
                  </div>
                  <h5>+91 91813 23 2309</h5>
                </div>
                <div className="location flex items-center gap-1.5 text-sm leading-15 text-gray__15 xll:gap-1 xll:text-base xll:leading-15 3xl:gap-1.5 3xl:text-lg 3xl:leading-15">
                  <div>
                    <svg
                      className="h-6 w-6 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5397 22.851C11.57 22.8685 11.5937 22.8821 11.6105 22.8915L11.6384 22.9071C11.8613 23.0294 12.1378 23.0285 12.3608 22.9075L12.3895 22.8915C12.4063 22.8821 12.43 22.8685 12.4603 22.851C12.5207 22.816 12.607 22.765 12.7155 22.6982C12.9325 22.5646 13.2388 22.3676 13.6046 22.1091C14.3351 21.5931 15.3097 20.8274 16.2865 19.8273C18.2307 17.8368 20.25 14.8462 20.25 11C20.25 6.44365 16.5563 2.75 12 2.75C7.44365 2.75 3.75 6.44365 3.75 11C3.75 14.8462 5.76932 17.8368 7.71346 19.8273C8.69025 20.8274 9.66491 21.5931 10.3954 22.1091C10.7612 22.3676 11.0675 22.5646 11.2845 22.6982C11.393 22.765 11.4793 22.816 11.5397 22.851ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                        fill="#262626"
                      />
                    </svg>
                  </div>
                  <h5>Somewhere in the World</h5>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-wrap gap-6">
              <div className="xll:w-[249px] h-fit">
                <h4 className="text-lg font-semibold leading-15 mb-2.5 text-gray__15 3xl:text-xl 3xl:leading-15 3xl:mb-3.5">Home</h4>
                <ul className="space-y-1 xll:space-y-2">
                  <li className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray__15 w-fit after:transition-all after:ease-linear after:duration-300 after:rounded-full">
                    <Link>Benefits</Link>
                  </li>
                  <li className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray__15 w-fit after:transition-all after:ease-linear after:duration-300 after:rounded-full">
                    <Link to="/courses">Our Courses</Link>
                  </li>
                  <li className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray__15 w-fit after:transition-all after:ease-linear after:duration-300 after:rounded-full">
                    <Link>Our Testimonials</Link>
                  </li>
                  <li className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray__15 w-fit after:transition-all after:ease-linear after:duration-300 after:rounded-full">
                    <Link>Our FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="w-[200px] xll:w-[249px] h-fit">
                <h4 className="text-lg font-semibold leading-15 mb-2.5 text-gray__15 3xl:text-xl 3xl:leading-15 3xl:mb-3.5">About Us</h4>
                <ul className="space-y-1 xll:space-y-2">
                  <li className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray__15 w-fit after:transition-all after:ease-linear after:duration-300 after:rounded-full">
                    <Link>Company</Link>
                  </li>
                  <li className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray__15 w-fit after:transition-all after:ease-linear after:duration-300 after:rounded-full">
                    <Link>Achievements</Link>
                  </li>
                  <li className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gray__15 w-fit after:transition-all after:ease-linear after:duration-300 after:rounded-full">
                    <Link>Our Goals</Link>
                  </li>
                </ul>
              </div>
              <div className="xll:w-[249px] h-fit">
                <h4 className="text-lg font-semibold leading-15 mb-2.5 text-gray__15 3xl:text-xl 3xl:leading-15 3xl:mb-3.5">Social Profiles</h4>
                <div className="flex gap-3.5 items-center">
                  <a href="https://www.facebook.com/hamidulislam.maruf.5" target="_blank" className="p-3 bg-white__97 border border-white__95 rounded-md 3xl:p-3.5 3xl:rounded-lg hover:bg-transparent hover:border-transparent transition-all ease-in-out duration-500">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_29_867)">
                          <path
                            d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                            fill="#333333"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_29_867">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                  <a href="" className="p-3 bg-white__97 border border-white__95 rounded-md 3xl:p-3.5 3xl:rounded-lg hover:bg-transparent hover:border-transparent transition-all ease-in-out duration-500">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_29_870)">
                          <path
                            d="M7.55016 21.7497C16.6045 21.7497 21.5583 14.2465 21.5583 7.74162C21.5583 7.53068 21.5536 7.31505 21.5442 7.10412C22.5079 6.40722 23.3395 5.54401 24 4.55505C23.1025 4.95436 22.1496 5.21514 21.1739 5.32849C22.2013 4.71266 22.9705 3.74523 23.3391 2.60552C22.3726 3.17831 21.3156 3.58237 20.2134 3.80037C19.4708 3.01132 18.489 2.48887 17.4197 2.31381C16.3504 2.13874 15.2532 2.32081 14.2977 2.83185C13.3423 3.3429 12.5818 4.15446 12.1338 5.14107C11.6859 6.12767 11.5754 7.23437 11.8195 8.29005C9.86249 8.19185 7.94794 7.68346 6.19998 6.79785C4.45203 5.91225 2.90969 4.66919 1.67297 3.14927C1.0444 4.233 0.852057 5.5154 1.13503 6.73585C1.418 7.95629 2.15506 9.0232 3.19641 9.71974C2.41463 9.69492 1.64998 9.48444 0.965625 9.10568V9.16662C0.964925 10.3039 1.3581 11.4063 2.07831 12.2865C2.79852 13.1667 3.80132 13.7703 4.91625 13.9947C4.19206 14.1929 3.43198 14.2218 2.69484 14.0791C3.00945 15.0572 3.62157 15.9126 4.44577 16.5261C5.26997 17.1395 6.26512 17.4804 7.29234 17.501C5.54842 18.8709 3.39417 19.6139 1.17656 19.6104C0.783287 19.6098 0.390399 19.5857 0 19.5382C2.25286 20.9835 4.87353 21.7511 7.55016 21.7497Z"
                            fill="#333333"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_29_870">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                  <a href="" className="p-3 bg-white__97 border border-white__95 rounded-md 3xl:p-3.5 3xl:rounded-lg hover:bg-transparent hover:border-transparent transition-all ease-in-out duration-500">
                    <div>
                      <svg
                        className="h-5 w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_29_873)">
                          <path
                            d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                            fill="#333333"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_29_873">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 pb-6 xll:pt-7.5 xll:pb-5 3xl:pt-12.5 3xl:pb-7.5">
            <h5 className="text-center text-sm leading-15 text-gray__40 3xl:text-lg 3xl:leading-15">&copy; 2023 Skillbridge. All rights reserved.</h5>
          </div>
        </div>
      </sectio>
    </>
  );
}

export default Footer;
