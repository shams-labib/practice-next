import Link from "next/link";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen mt-10">
      <div className="col-span-3">
        <Link href={"/"} className="text-2xl font-bold">
          🔥 Dev Story
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
