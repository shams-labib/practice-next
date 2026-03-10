"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="bg-linear-60 from-sky-200 to-sky-600 text-black p-10 text-center space-y-5 ">
      <h1 className="text-2xl font-bold ">Banner page is cocking</h1>
      <button
        onClick={handleBtn}
        className="px-5 py-3 bg-blue-500 rounded-2xl font-semibold text-white hover:bg-black duration-300 cursor-pointer shadow shadow-pink-200"
      >
        Share stroy
      </button>
    </div>
  );
};

export default Banner;
