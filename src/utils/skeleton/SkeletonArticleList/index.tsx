import React from "react";
import { SkeletonHeader, SkeletonText } from "../styles";

const SkeletonArticleDetail = () => {
  const style: React.CSSProperties = {
    width: "100%",
    border: "1px solid #f4f4f4",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "20px 20px 10px 20px",
    boxSizing: "border-box",
    marginBottom: "20px",
    cursor: "pointer",
  };
  return (
    <>
      <div style={style}>
        <SkeletonHeader />
        <SkeletonText />
        <SkeletonText />
      </div>
      <div style={style}>
        <SkeletonHeader />
        <SkeletonText />
        <SkeletonText />
      </div>
      <div style={style}>
        <SkeletonHeader />
        <SkeletonText />
        <SkeletonText />
      </div>
    </>
  );
};

export default SkeletonArticleDetail;
