import Instagram from "../../Assets/instagram.png";
import Facebook from "../../Assets/Facebook.png";
import Snapchat from "../../Assets/Snapchat.png";
import X from "../../Assets/X.png";
import Youtube from "../../Assets/yt.png";

const BrandsData = [
  {
    name: "About me",
    description: "Tell everyone about yourself",
    data: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  Nunc vulputate libero et velit interdum, ac aliq matent taciti sociosqu Worem ipsum dolor sit.odio mattis. Class aptent taciti sociosqu  Nunc vulputate libero et velit interdum, ac aliq matent taciti sociosqu Worem ipsum dolor sit .Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  Nunc vulputate libero et velit interdum, ac aliq matent taciti sociosqu Worem ipsum dolor sit.odio mattis. Class aptent taciti sociosqu  Nunc vulputate libero et velit interdum, ac aliq matent taciti sociosqu Worem ipsum dolosit.",
  },
  {
    name: "Niche",
    description: "Add or manage your speciality",
    data: [
      { name: "Travel" },
      { name: "Fashion" },
      { name: "Lifestyle" },
      { name: "Blogs" },
      { name: "Beauty" },
    ],
  },
  {
    name: "Social profiles",
    description: "Connect with your social accounts here",
    data: [
      { platform: "twitter.com/", name: "Gautam_sachdeva" },
      { platform: "Facebook.com/", name: "Gautam_sachdeva" },
      { platform: "Instagram.com/", name: "Gautam_sachdeva" },
    ],
  },
  // {
  //   name: "Professional summary",
  //   description:
  //     "Write something about your profession like your past work and experience",
  //   data: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  Nunc vulputate libero et velit interdum, ac aliq matent taciti sociosqu Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  // },
];

const nicheItems = ["Travel", "Fashion", "Blogs", "Lifestyle", "Food"];

const platforms = [
  {
    id: 1,
    platform: "Instagram.com/",
    name: "gautam sachdeva",
    icon: Instagram,
    label: "Connect to Instagram",
  },
  {
    id: 2,
    platform: "Facebook.com/",
    name: "gautam sachdeva",
    icon: Facebook,
    label: "Connect to Facebook",
  },
  {
    id: 3,
    platform: "LinkedIn.com/",
    name: "gautam sachdeva",
    icon: Youtube,
    label: "Connect to LinkedIn",
  },
  {
    id: 4,
    platform: "Snapchat.com/",
    name: "gautam sachdeva",
    icon: Snapchat,
    label: "Connect to Snapchat",
  },
  {
    id: 5,
    platform: "X.com/",
    name: "gautam sachdeva",
    icon: X,
    label: "Connect to X",
  },
  {
    id: 6,
    platform: "Youtube.com/",
    name: "gautam sachdeva",
    icon: Youtube,
    label: "Connect to YouTube",
  },
];

export { BrandsData, nicheItems, platforms };
