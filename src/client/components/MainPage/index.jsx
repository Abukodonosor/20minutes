import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    fetch("/blog/posts", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("List blog posts");
        if (data.status === "Success") {
          setBlogposts(data.result);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log("error data", err);
      });
  }, []);

  const blogItemsList = blogposts.map((el, key) => (
    <BlogItemCard
      key={key}
      title={el.title}
      numberOfComments={el.numberOfComments}
      linkToPost={`/blogpost/${el.id}`}
    />
  ));

  return <div className="main-page">{blogItemsList}</div>;
};

export const BlogItemCard = ({ title, numberOfComments, linkToPost }) => {
  return (
    <div className="blog-item">
      <h4>{title}</h4>
      <span>comments per post:{numberOfComments}</span>
      <br />
      <Link to={linkToPost}>Go to blog post</Link>
    </div>
  );
};
