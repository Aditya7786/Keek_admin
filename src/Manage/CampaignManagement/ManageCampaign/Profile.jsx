import React from "react";
import I2 from "../../../Assets/I2.png";
import I1 from "../../../Assets/I1.jpg";
import I3 from "../../../Assets/I3.jpg";
import I4 from "../../../Assets/I4.jpg";
import I5 from "../../../Assets/I5.jpg";
import ProfileImg from "../../../Assets/Profile.jpg";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

const Profile = ({ isOpen, setIsOpen, selectData }) => {
    if (!selectData) return null;
    
  const socialSitesData = [
    { name: "Instgram", logo: I5, followers: "1M" },
    { name: "Facebook", logo: I3, followers: "1M" },
    { name: "Snapchat", logo: I4, followers: "1M" },
    { name: "Linkedin", logo: I1, followers: "1M" },
    { name: "Youtube", logo: I2, followers: "1M" },
  ];

  const testimonials = [
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      image: ProfileImg,
      name: "Jane Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 4,
    },
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
    {
      image: ProfileImg,
      name: "John Doe",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5,
    },
  ];

  const styles = {
    keyframesMove: `
      @keyframes moveTestimonials {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `,
    moveTestimonials: {
      display: "flex",
      animation: "moveTestimonials 30s linear infinite",
    },
    testimonial: {
      flexShrink: 0,
      width: "236px", // Adjust width as needed
      marginRight: "16px", // Space between testimonials
    },
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed  inset-0 z-50 h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[700px] h-[660px] bg-[#FFFFFF]  shadow-md rounded-lg p-4 relative">
            <button
              onClick={closeModal}
              className="absolute w-[24px] h-[24px] left-[656px] top-[22px] text-lg"
            >
              &times;
            </button>

            {/*  */}
            <div className="flex w-[603px] h-[126px] gap-[21px] ml-4 mt-4  items-center gap-5">
              <img
                src={ProfileImg}
                className="w-[110px] h-[110px] rounded-full"
                alt="Profile"
              />
              <div className=" w-[472px] h-[126px] gap=[10px] ">
                <div className="text-[20px] w-[175px] gap-[16px] font-semibold">
                  {selectData.name}
                </div>

                <p className="text-[10px] mt-2 text-[#818181]   ">
                  Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu Nunc vulputate libero et velit
                  interdum, ac aliq matent taciti sociosqu .
                </p>

                <div className="flex mt-3 gap-[8px] h-[19px] items-center">
                  <IoMdStar className="text-[#06F] w-[14.72px] h-[14px] " />
                  <IoMdStar className="text-[#06F] w-[14.72px] h-[14px] " />
                  <IoMdStar className="text-[#06F] w-[14.72px] h-[14px] " />
                  <IoMdStar className="text-[#06F] w-[14.72px] h-[14px] " />
                  <IoMdStarOutline className="text-[#06F] w-[14.72px] h-[14px] " />
                  <span className="text-[12px] font-semibold ml-2">4.0</span>
                  <span className="text-[10px] ml-1">(30 Reviews)</span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex ml-3  w-[634px] h-[56px] top-[12710px]  left-[2432px] gap-[16px] ">
              {socialSitesData.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#CAE8FF] w-[114px] h-[56px] rounded-md p-2"
                >
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-7 h-7 w-[28px] h-[28px] rounded mr-2"
                  />
                  <div>
                    <button className="flex items-center text-sm font-semibold">
                      <div className="text-[10px] ">{platform.name}</div>
                      <FiArrowUpRight className="text-[#0066FF] w-[10px] h-[10px] ml-1" />
                    </button>
                    <p className="text-[8px]">
                      Followers:
                      <div className="text-[10px] ">{platform.followers}</div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*  */}
            <div className="rounded-[10px] flex ml-3 mt-6 w-[634px] h-[60px] bg-[#F6F6F6] ">
              <div className="w-[578px]  flex h-[42px] top-[9px] left-[23px] justify-between ">
                <div className="flex   ml-4  w-[319px] h-[42px] flex-col gap-4px ">
                  <h1 className="text-[14px] mt-2  text-[#0066FF] font-semibold ">
                    Total Camapign
                  </h1>
                  <p className="text-[10px] mt-1 text-[#57595A] ">
                    This refers to total number of campaigns joined by this
                    influencer.
                  </p>
                </div>
              </div>
              <div className="w-[21px] h-[19px] text-[18px] mt-4 text-[#0066FF] ">
                {" "}
                31{" "}
              </div>
            </div>
            {/*  */}

            <div className="rounded-[10px] flex ml-3 mt-6 w-[634px] h-[129px] bg-[#F6F6F6] ">
              <div className="w-[578px]  flex h-[42px] top-[9px] left-[23px] justify-between ">
                <div className="flex   ml-4  w-[581px] h-[76px] flex-col gap-4px ">
                  <h1 className="text-[14px] mt-2  text-[#0066FF] font-semibold ">
                    Professional Summary
                  </h1>
                  <p className="text-[10px] mt-1 text-[#57595A] ">
                    This refers to total number of campaigns joined by this
                    influencer Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis. Class aptent taciti sociosqu . Nunc
                    vulputate libero et velit interdum, ac aliquet odio mattis.
                    Class aptent taciti sociosqu Nunc vulputate libero et velit
                    interdum, ac aliquet odio mattis. Class aptent taciti
                    sociosqu Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis. Class aptent taciti sociosqu
                  </p>
                </div>
              </div>
            
            </div>
            {/*  */}
            <div className="flex items-center pt-7 pl-[210px]">
            Checkout other Influencer Experience{" "}
          </div>
          <div className=" pt-5  ">
            <div className="relative w-[634px]  overflow-hidden">
              <style>{styles.keyframesMove}</style>
              <div style={styles.moveTestimonials}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    style={styles.testimonial}
                    className="flex items-center  w-[236px] h-[90px] border-[2px] shadow-lg bg-[#FFFFFF] gap-[10px] rounded-[14px] "
                  >
                    <img
                      className="w-12 h-12 rounded"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className=" ">
                      <div className="flex flex-row ">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} style={{ color: "#0066FF" }}>
                            <IoMdStar />
                          </span>
                        ))}
                      </div>
                      <div className="text-[7px] text-[#57595A] font-semibold pb-[4px]">
                        "{testimonial.text}"
                      </div>
                      <div className="text-[8px] mb-[4px] font-semibold">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

            
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
