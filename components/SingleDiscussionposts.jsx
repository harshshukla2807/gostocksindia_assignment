import Image from "next/image";
import React from "react";
import { postsdata } from "@/app/api/postsdata";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const SingleDiscussionposts = () => {
  return (
    <div className="flex flex-col mt-6 gap-10 m-2">
      {postsdata.map((data) => (
        <div className=" p-2  shadow-md shadow-slate-300 min-w-[18rem]">
          <div className="flex flex-col gap-2 text-[10px] lg:text-sm">
            <div className="flex justify-between">
              <div className="flex gap-2 h-8 flex-nowrap items-center justify-center">
              <span className="rounded-full h-10 w-10">
    <Image className="rounded-full object-contain" src={data.img} width={40} height={40} alt="image" />
</span>

                <span className="text-sm">{data.name}</span>

                <span className="flex items-center justify-center pl-2 pr-2 text-[8px] text-white rounded-xl bg-[#2555A0]">
                  <button>sector {data.sector}</button>
                </span>
              </div>
              <span className="text-blue-500">{data.lastseen} mins ago</span>
            </div>

            <p className="font-normal ml-12 text-wrap">{data.msg}</p>

            <div className="flex justify-around text-xs lg:text-lg font-medium">
              <div className="flex gap-1 items-center justify-center">
                <FaRegHeart />
                <p className="text-[8px] sm:text-xs">{data.likes}k</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <IoEyeOutline />
                <p className="text-[8px] sm:text-xs">{data.views}k</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <FaRegCommentAlt />
                <p className="text-[8px] sm:text-xs">{data.comments}k comments</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <IoShareSocialOutline />
                <p className="text-[8px] sm:text-xs">share</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleDiscussionposts;
