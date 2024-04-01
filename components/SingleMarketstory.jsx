import React from "react";
import { storydata } from "@/app/api/postsdata";
import Image from "next/image";

const SingleMarketstory = () => {
  return (
    <div className="flex flex-col gap-10 mt-6">
      {storydata.map((data) => (
        <div className=" text-xs w-full flex flex-col shadow-md gap-2">
          <div className="w-full h-32 relative flex items-center justify-center -z-10">
            <Image
              className=""
              src={data.img}
              fill
              alt="image"
            />
          </div>
          <h1 className="ml-4  text-base font-medium text-blue-900">{data.heading}</h1>
          <p className="ml-4">{data.data}</p>
        </div>
      ))}
    </div>
  );
};

export default SingleMarketstory;
