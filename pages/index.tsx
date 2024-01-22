import { BiEnvelope, BiHash, BiHome, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsTwitter } from "react-icons/bs";

import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SideMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BiEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="grid grid-cols-12 h-screen w-screen px-32 ">
        <div className="col-span-4 pt-8 ml-28 ">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full cursor-pointer p-4 transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl  pr-4">
            <ul>
              {SideMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="text-white flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-2"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3 ">
              <button className="bg-[#1d9bf0] rounded-full w-full text-lg py-2 px-4 text-white font-semibold">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 h-screen no-scrollbar overflow-scroll  border border-r-[1px]  border-l-[1px] border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
