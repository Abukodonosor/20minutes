import React from "react";
import { useParams } from "react-router-dom";

export const BlogpostPage = () => {
  let { id } = useParams();

  return <div>This is new blogpost page {id}</div>;
};
