"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();
  if (pathName.startsWith("/dashboard")) return <></>;
  return (
    <header className="px-5 py-4 border-b-4 flex justify-between items-center">
      <Link href={"/"}>Dev Story 🔥</Link>

      <nav className="space-x-5">
        <Link href={"/my-story"}>My Story</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/stories"}>Stories</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/tutorials"}>Tutorials</Link>
      </nav>
    </header>
  );
};

export default Header;
