import React from "react";

const Title = ({ children }) => {
  return (
    <div className="bg-linear-60 from-sky-200 to-sky-600 text-black">
      <h1 className="text-4xl">{children}</h1>
    </div>
  );
};

export default Title;
