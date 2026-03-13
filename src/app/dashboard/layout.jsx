import Link from "next/link";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen mt-10">
      <div className="col-span-3 border-r-2 border-gray-300">
        <Link href={"/"} className="text-2xl font-bold">
          🔥 Dev Story
        </Link>

        <div className="flex flex-col mt-10 gap-5 ">
          <Link
            className="py-2 px-4 bg-gray-600 w-full"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 bg-gray-600 w-full"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 bg-gray-600 w-full"
            href={"/dashboard/settings"}
          >
            Setting
          </Link>
        </div>
      </div>
      <div className="col-span-9 ">{children}</div>
    </div>
  );
};

export default Dashboard;
