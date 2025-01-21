import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/shape-17.png"
function About() {
  return (
    <>
      <section className="hero pt-12.5 pb-7.5 border-b border-white__90 xll:flex justify-between xll:pt-20 xll:pb-10 3xl:pb-12.5 3xl:pt-24.5">
        <h1 className="text-fs_28 font-semibold leading-15 text-gray__15 mb-4 xll:text-fs_38 xll:mb-0 3xl:text-5xl 3xl:leading-15">
          About Skillbridge
        </h1>
        <p className="text-sm leading-15 text-gray__35 xll:w-[600px] xll:text-base xll:leading-15 3xl:text-lg 3xl:leading5 3xl:w-[748px]">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </section>
      <section className="py-12.5 xll:pt-20 xll:pb-24.5 3xl:pt-24.5 3xl:pb-[177px]">
        <div className="tittle mb-12.5 xll:mb-14.5 3xl:mb-20">
          <h2 className="text-2xl font-medium leading-15 text-gray__20 mb-1.5 xll:text-3xl xll:leading-15 3xl:text-5xl 3xl:leading-15">
            Achievements
          </h2>
          <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
            Our commitment to excellence has led us to achieve significant
            milestones along our journey. Here are some of our notable
            achievements
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 xll:grid-cols-2 3xl:gap-7.5">
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.67329 25.0954L6.07096 26.7043C6.57466 28.796 7.67486 29.8686 9.86199 29.8686H24.138C26.3384 29.8686 27.4253 28.8228 27.9423 26.7043L28.34 25.0954H5.67329ZM5.23587 23.2585H28.7906L31.2826 12.9345L30.1957 12.3043L24.085 16.8094C23.6343 17.1312 23.3294 17.0105 23.0775 16.6485L17.3247 7.85295L16.6885 7.82613L10.8826 16.6887C10.6573 17.0373 10.3922 17.1446 9.94151 16.8228L3.9501 12.3982L2.67759 12.7334L5.23587 23.2585ZM3.16803 15.616C4.91774 15.616 6.3228 14.1814 6.3228 12.3982C6.3228 10.6552 4.91774 9.20713 3.16803 9.20713C1.41833 9.20713 0 10.6418 0 12.3982C0 14.1814 1.43157 15.616 3.16803 15.616ZM17.0067 10.0384C18.7431 10.0384 20.1614 8.60379 20.1614 6.83395C20.1614 5.09092 18.7431 3.64288 17.0067 3.64288C15.2437 3.64288 13.8386 5.07753 13.8386 6.83395C13.8386 8.60379 15.2569 10.0384 17.0067 10.0384ZM30.8319 15.616C32.5685 15.616 34 14.1814 34 12.3982C34 10.6418 32.5817 9.20713 30.8319 9.20713C29.0956 9.20713 27.6772 10.6552 27.6772 12.3982C27.6772 14.1814 29.0956 15.616 30.8319 15.616Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Trusted by Thousands
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              We have successfully served thousands of students, helping them
              unlock their potential and achieve their career goals.
            </p>
          </div>
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1814 33.317C22.1903 33.317 26.2316 29.2757 26.2316 24.281C26.2316 19.2721 22.1903 15.2308 17.1814 15.2308C12.1867 15.2308 8.14537 19.2721 8.14537 24.281C8.14537 29.2757 12.1867 33.317 17.1814 33.317ZM14.6057 28.9341C14.065 29.3325 13.4958 28.9199 13.7093 28.2938L14.7338 25.2343L12.1155 23.3703C11.6175 23.0003 11.774 22.303 12.457 22.303L15.673 22.3315L16.6549 19.2579C16.854 18.6318 17.5371 18.6318 17.7363 19.2579L18.7182 22.3315L21.9341 22.303C22.6171 22.303 22.7595 23.0145 22.2757 23.3561L19.6573 25.2343L20.6819 28.2938C20.8954 28.9199 20.3261 29.3325 19.7854 28.9341L17.1956 27.0415L14.6057 28.9341ZM8.51535 17.5076C9.90988 15.743 11.8309 14.4054 14.0365 13.7508L7.5904 2.1677L3.84794 7.8739C3.5918 8.24387 3.57757 8.65654 3.80525 9.02651L8.51535 17.5076ZM13.9939 8.89844H20.3831L24.7232 1.21429H9.65374L13.9939 8.89844ZM20.3404 13.7508C22.5603 14.4054 24.4671 15.743 25.8616 17.5076L30.5859 9.02651C30.7994 8.65654 30.7852 8.24387 30.5291 7.8739L26.7865 2.1677L20.3404 13.7508Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Award-Winning Courses
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              Our courses have received recognition and accolades in the
              industry for their quality, depth of content, and effective
              teaching methodologies.
            </p>
          </div>
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7969 25.4617C17.6154 24.1356 19.6777 20.3267 18.3191 15.1918L16.4914 8.21223C15.9929 6.33772 14.781 5.65971 12.9142 6.15825L3.22841 8.78056C1.35184 9.29904 0.657907 10.4955 1.15637 12.4099L2.97429 19.3795C4.31329 24.5045 7.97846 26.7779 12.7969 25.4617ZM11.8782 21.8922C9.83545 22.4306 7.8514 21.7227 6.8056 20.0276C6.60036 19.7185 6.77629 19.4094 7.16724 19.4394C8.46715 19.549 10.0114 19.3196 11.1256 19.0106C12.2203 18.7214 13.6472 18.1431 14.7321 17.3754C15.0546 17.1361 15.3772 17.3055 15.3576 17.7144C15.2892 19.7086 13.9307 21.3138 11.8782 21.8922ZM6.95222 15.3414C6.21918 15.5507 6.12144 16.0493 5.80868 16.0991C5.66208 16.129 5.48615 15.9595 5.39818 15.6704C5.16361 14.8229 5.6914 13.9155 6.53194 13.7061C7.38226 13.4967 8.25213 14.0052 8.46715 14.8229C8.55511 15.1219 8.47692 15.3513 8.32054 15.4111C7.95892 15.5407 7.61683 15.1618 6.95222 15.3414ZM12.9142 13.6962C12.1812 13.9155 12.0834 14.4041 11.7706 14.444C11.6241 14.4739 11.4481 14.3044 11.3602 14.0252C11.1256 13.1877 11.6534 12.2703 12.4939 12.061C13.354 11.8316 14.2141 12.3501 14.4291 13.1777C14.5171 13.4868 14.439 13.7061 14.2826 13.766C13.9307 13.8956 13.5788 13.5067 12.9142 13.6962ZM31.758 11.363L22.082 8.72074C20.3618 8.25211 19.1499 8.77059 18.6514 10.326L18.5341 10.7548L19.6093 14.8428C20.6843 18.9209 19.8048 22.3708 17.3027 24.6042C18.2605 26.2195 19.9611 27.4259 22.2091 28.0341C27.008 29.3403 30.6536 27.067 32.0024 21.942L33.8496 14.9824C34.3383 13.0979 33.6346 11.8715 31.758 11.363ZM21.9061 17.4053C21.2317 17.2358 20.8309 16.5378 21.0167 15.8299C21.2023 15.1419 21.8866 14.7331 22.5609 14.9226C23.2353 15.112 23.636 15.82 23.4601 16.5079C23.2744 17.1959 22.5902 17.5947 21.9061 17.4053ZM27.6433 18.9707C26.9787 18.7912 26.578 18.0833 26.7636 17.3853C26.9395 16.6974 27.6238 16.2986 28.2982 16.488C28.9823 16.6575 29.3732 17.3654 29.1973 18.0634C29.0116 18.7514 28.3274 19.1601 27.6433 18.9707ZM23.5285 22.7995C22.5121 22.5103 21.5347 22.5003 20.2837 22.7795C19.8927 22.8693 19.6581 22.5402 19.8634 22.2112C20.7039 20.8651 22.4045 20.3068 24.0563 20.7754C25.7667 21.2141 26.9298 22.5502 26.9884 24.1455C27.008 24.5444 26.6464 24.7139 26.3531 24.4447C25.3856 23.5473 24.5548 23.0687 23.5285 22.7995Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Positive Student Feedback
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              We take pride in the positive feedback we receive from our
              students, who appreciate the practicality and relevance of our
              course materials.
            </p>
          </div>
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4955 31.1588C16.7232 31.1588 17.079 31.0733 17.4347 30.8884C25.5315 26.6479 28.1356 24.5276 28.1356 19.4191V8.68972C28.1356 7.22404 27.5094 6.75446 26.3142 6.2564C24.6493 5.57337 19.3273 3.63811 17.6766 3.06891C17.2924 2.94084 16.894 2.86969 16.4955 2.86969C16.0971 2.86969 15.6987 2.95507 15.3287 3.06891C13.6638 3.60965 8.34179 5.5876 6.6769 6.2564C5.49582 6.74022 4.85547 7.22404 4.85547 8.68972V19.4191C4.85547 24.5276 7.60184 26.406 15.5564 30.8884C15.9263 31.0876 16.2679 31.1588 16.4955 31.1588ZM10.0778 17.4838C10.0778 17.313 10.1632 17.0996 10.3198 16.9146L18.3597 6.8256C18.9715 6.05719 19.9962 6.56947 19.6262 7.52287L16.9794 14.6378H21.9456C22.3298 14.6378 22.6144 14.9081 22.6144 15.2925C22.6144 15.4632 22.529 15.6767 22.3725 15.8616L14.3326 25.9506C13.7207 26.719 12.7104 26.2067 13.0661 25.2676L15.7271 18.1384H10.7466C10.3767 18.1384 10.0778 17.868 10.0778 17.4838Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Industry Partnerships
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              We have established strong partnerships with industry leaders,
              enabling us to provide our students with access to the latest
              tools and technologies
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="tittle mb-12.5 xll:mb-14.5 3xl:mb-20">
          <h2 className="text-2xl font-medium leading-15 text-gray__20 mb-1.5 xll:text-3xl xll:leading-15 3xl:text-5xl 3xl:leading-15">
            Our Goals
          </h2>
          <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
            At SkillBridge, our goal is to empower individuals from all
            backgrounds to thrive in the world of design and development. We
            believe that education should be accessible and transformative,
            enabling learners to pursue their passions and make a meaningful
            impact. Through our carefully crafted courses, we aim to
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 xll:grid-cols-2 3xl:gap-7.5">
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9399 33.8251H21.0579C25.6816 33.8251 27.9669 31.4514 27.927 26.704C27.8738 21.2823 27.8473 17.3441 27.7144 14.3905C27.3292 5.70495 24.9243 3.15593 17.0056 3.15593C9.08685 3.15593 6.66871 5.70495 6.28341 14.3905C6.15054 17.3441 6.12397 21.2823 6.07082 26.704C6.03097 31.4514 8.31623 33.8251 12.9399 33.8251ZM12.5546 28.4708C11.412 28.4708 10.6812 27.7155 10.6812 26.5827V19.6234C10.6812 18.477 11.412 17.7217 12.5546 17.7217H21.4565C22.5859 17.7217 23.3166 18.477 23.3166 19.6234V26.5827C23.3166 27.7155 22.5859 28.4708 21.4565 28.4708H12.5546ZM10.6812 22.9143H23.3166V21.3092H10.6812V22.9143ZM17.0056 0C14.4546 0 12.6609 1.7533 12.6609 4.14048H14.5343C14.5343 2.83225 15.544 1.90165 17.0056 1.90165C18.4537 1.90165 19.4769 2.83225 19.4769 4.14048H21.3502C21.3502 1.7533 19.5433 0 17.0056 0Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Provide Practical Skills
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              We focus on delivering practical skills that are relevant to the
              current industry demands. Our courses are designed to equip
              learners with the knowledge and tools needed to excel in their
              chosen field.
            </p>
          </div>
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.72406 31.709H28.1517C28.7779 31.709 29.2901 31.2109 29.2901 30.5706C29.2901 30.0725 28.9487 29.6313 28.4933 29.4748C26.7003 28.7633 26.3303 26.4438 28.0949 24.6651C28.6356 24.1244 29.2901 23.4272 29.2901 22.0041V5.68243C29.2901 2.72261 27.8245 1.21423 24.8789 1.21423H9.76674C6.82115 1.21423 5.35547 2.70838 5.35547 5.68243V27.3119C5.35547 30.2432 6.83538 31.709 9.72406 31.709ZM9.85211 29.418C8.4149 29.418 7.64649 28.6496 7.64649 27.2977C7.64649 26.017 8.5572 25.1916 9.98019 25.1916H24.58C24.7651 25.1916 24.9358 25.1774 25.0781 25.1489C24.4093 26.6289 24.5232 28.1942 25.2773 29.418H9.85211ZM9.42522 23.0286C8.98409 23.0286 8.61411 22.6588 8.61411 22.2034V4.23098C8.61411 3.77562 8.98409 3.41987 9.42522 3.41987C9.86635 3.41987 10.2506 3.77562 10.2506 4.23098V22.2034C10.2506 22.6588 9.86635 23.0286 9.42522 23.0286Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Foster Creative Problem-Solving
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              We encourage creative thinking and problem-solving abilities,
              allowing our students to tackle real-world challenges with
              confidence and innovation.
            </p>
          </div>
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 17.5893C0 20.0292 1.69061 21.3688 3.59254 21.3688C4.39088 21.3688 4.98964 21.1415 5.7058 20.687C6.375 20.2684 6.85635 20.5195 6.85635 21.1056V25.5309C6.85635 27.8871 8.07735 29.0951 10.4136 29.0951H13.5483C14.1118 29.0951 14.3584 28.6166 13.9593 27.935C13.5014 27.2053 13.2783 26.5954 13.2783 25.7821C13.2783 23.8446 14.6049 22.1223 17 22.1223C19.3951 22.1223 20.71 23.8446 20.71 25.7821C20.71 26.5954 20.4869 27.2053 20.0407 27.935C19.6416 28.6166 19.8763 29.0951 20.4517 29.0951H23.5864C25.9227 29.0951 27.1437 27.8871 27.1437 25.5309V21.1056C27.1437 20.5195 27.625 20.2684 28.2825 20.687C29.0103 21.1415 29.6091 21.3688 30.3957 21.3688C32.3094 21.3688 34 20.0292 34 17.5893C34 15.1374 32.3094 13.7979 30.3957 13.7979C29.6091 13.7979 29.0103 14.0251 28.2825 14.4796C27.625 14.8982 27.1437 14.6471 27.1437 14.061V9.6357C27.1437 7.29148 25.9227 6.07153 23.5864 6.07153H20.4517C19.8763 6.07153 19.6416 6.56191 20.0407 7.24364C20.4869 7.97322 20.71 8.5832 20.71 9.39649C20.71 11.3341 19.3951 13.0563 17 13.0563C14.6049 13.0563 13.2783 11.3341 13.2783 9.39649C13.2783 8.5832 13.5014 7.97322 13.9593 7.24364C14.3584 6.56191 14.1118 6.07153 13.5483 6.07153H10.4136C8.07735 6.07153 6.85635 7.29148 6.85635 9.6357V14.061C6.85635 14.6471 6.375 14.8982 5.7058 14.4796C4.98964 14.0251 4.39088 13.7979 3.59254 13.7979C1.69061 13.7979 0 15.1374 0 17.5893Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Promote Collaboration and Community
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              We believe in the power of collaboration and peer learning. Our
              platform fosters a supportive and inclusive community where
              learners can connect, share insights, and grow together.
            </p>
          </div>
          <div className="p-7.5 bg-white rounded-[10px] xll:p-10 3xl:p-12.5 xll:rounded-xl">
            <div className="p-3.5 bg-Orange__97 border border-Orange__90 rounded-md w-fit mb-6 3xl:p-4 3xl:rounded-lg">
              <div>
                <svg
                  className="h-7 w-7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.2626 30.0014C28.9029 30.0014 29.4294 29.4892 29.4294 28.863C29.4294 28.2227 28.9029 27.6962 28.2626 27.6962H26.5265V18.2618C26.5265 13.0679 22.5279 9.05503 17.334 9.05503C12.1543 9.05503 8.15569 13.0679 8.15569 18.2618V27.6962H6.39118C5.76507 27.6962 5.26702 28.2227 5.26702 28.863C5.26702 29.4892 5.76507 30.0014 6.39118 30.0014H28.2626ZM18.5293 18.3045V27.6962H16.1671V18.3045C16.1671 17.65 16.6794 17.1091 17.334 17.1091C17.9885 17.1091 18.5293 17.65 18.5293 18.3045ZM4.44168 19.2863C5.1105 19.2863 5.69391 18.7314 5.69391 18.0768C5.69391 17.3937 5.1105 16.8388 4.44168 16.8388H1.70954C1.05497 16.8388 0.5 17.4079 0.5 18.0768C0.5 18.7172 1.05497 19.2863 1.70954 19.2863H4.44168ZM7.35882 9.82345C7.82841 10.293 8.61105 10.3073 9.08064 9.82345C9.56445 9.33964 9.55022 8.57121 9.08064 8.10164L7.1596 6.16636C6.70425 5.68255 5.90736 5.68255 5.42355 6.16636C4.95396 6.65018 4.95396 7.40437 5.42355 7.88818L7.35882 9.82345ZM16.1102 5.1845C16.1102 5.8533 16.6652 6.4225 17.334 6.4225C18.017 6.4225 18.572 5.8533 18.572 5.1845V2.45236C18.572 1.78355 18.0028 1.21436 17.334 1.21436C16.6652 1.21436 16.1102 1.78355 16.1102 2.45236V5.1845ZM25.5731 8.10164C25.1035 8.57121 25.0893 9.33964 25.5731 9.82345C26.0712 10.3073 26.8253 10.293 27.2949 9.82345L29.2444 7.88818C29.714 7.40437 29.714 6.65018 29.2444 6.16636C28.7463 5.68255 27.9922 5.68255 27.5226 6.16636L25.5731 8.10164ZM32.9443 19.2863C33.613 19.2863 34.1822 18.7172 34.1822 18.0768C34.1822 17.4079 33.613 16.8388 32.9443 16.8388H30.2121C29.5575 16.8388 28.9882 17.3937 28.9882 18.0768C28.9882 18.7314 29.5575 19.2863 30.2121 19.2863H32.9443Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium leading-15 text-gray__15 mb-1.5 xll:text-xl xll:leading-15 xll:mb-2.5 3xl:text-2xl 3xl:leading-15 3xl:mb-3.5">
              Stay Ahead of the Curve
            </h3>
            <p className="text-sm leading-15 text-gray__35 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">
              The digital landscape is constantly evolving, and we strive to
              stay at the forefront of industry trends. We regularly update our
              course content to ensure our students receive the latest knowledge
              and skills.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12.5 xll:pt-14.5 xll:pb-24.5 3xl:pt-20 3xl:pb-36.5">
      <div className="bg-white p-7.5 rounded-[10px] flex flex-wrap gap-10 relative overflow-hidden xll:justify-between xll:items-center xll:p-14.5 3xl:p-20 3xl:rounded-xl">
        <div className="xll:w-[757px] 3xl:w-[1008px]">
          <h2 className="text-fs_28 font-semibold leading-12 text-gray__15 mb-2.5 xll:text-fs_38 xll:mb-3.5 3xl:text-5xl 3xl:leading-15 3xl:mb-5 relative z-20"><span className="text-Orange__50">Together</span>, let's shape the future of digital innovation</h2>
          <p className="text-sm leading-15 text-gray__30 xll:text-base xll:leading-15 3xl:text-lg 3xl:leading-15">Join us on this exciting learning journey and unlock your potential in design and development.</p>
        </div>
        <div>
        <Link className="py-3.5 px-5 rounded-md bg-Orange__50 text-white text-sm font-semibold leading-15 block 3xl:py-4.8 3xl:px-6 3xl:text-lg 3xl:rounded-lg">Join Now</Link>
        </div>
        <div className="absolute right-[-14px] bottom-[-64px] xll:right-[184px] xll:bottom-[-76px] 3xl:right-[230px] 3xl:bottom-0">
          <img src={img} alt="" className="h-[190px] w-[190px] xll:h-[360px] xll:w-[360px]"/>
        </div>
      </div>
      </section>
    </>
  );
}

export default About;
