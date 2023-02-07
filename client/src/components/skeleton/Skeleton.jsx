import React from "react";

const Skeleton = ({ type }) => {
  if (type === "movieCard") {
    return (
      <div className="h-[120px] text-transparent bg-gray-700 animate-pulse">
        Skeleton
      </div>
    );
  }
};

export default Skeleton;
