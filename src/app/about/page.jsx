import Title from "@/Components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>About page is cocking</Title>

      <nav className="space-x-5">
        <Link className="text-2xl font-bold" href={"/about/contact"}>
          Contact
        </Link>

        <Link className="text-2xl font-bold" href={"/about/teams"}>
          Teams
        </Link>
      </nav>
    </div>
  );
};

export default About;
