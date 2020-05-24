import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [blogposts, setBlogposts] = useState(null);

  // useEffect(async () => {
  //   //   fetch("/blog/posts", {
  //   //     method: "POST",
  //   //     body: JSON.stringify({}),
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //   })
  //   //     .then((response) => response.json())
  //   //     .then((data) => {
  //   //       console.log("DONE REQUEST");
  //   //       //test of basic redirection
  //   //       // window.location.href = "/";
  //   //     })
  //   //     .catch((err) => {
  //   //       console.log("!error data");
  //   //     })
  //   //     .finally(() => {
  //   //       console.log("logout block");
  //   //     });
  // }, [blogposts]);

  const blogItemsList = mockBlogItems.map((el, key) => (
    <BlogItemCard key={key} {...el} />
  ));

  return <div className="main-page">{blogItemsList}</div>;
};

const BlogItemCard = ({ title, numberOfComments, linkToPost }) => {
  return (
    <div className="blog-item">
      <h4>{title}</h4>
      <span>comments per post:{numberOfComments}</span>
      <br />
      <Link to={linkToPost}>Go to blog post</Link>
    </div>
  );
};

const mockBlogItems = [
  {
    title: "Some new post",
    numberOfComments: 32,
    linkToPost: "/blogpost/501",
  },
  {
    title: "Some new post",
    numberOfComments: 32,
    linkToPost: "https://reacttraining.com/react-router/web/guides/quick-start",
  },
  {
    title: "Some new post",
    numberOfComments: 32,
    linkToPost: "https://reacttraining.com/react-router/web/guides/quick-start",
  },
  {
    title: "Some new post",
    numberOfComments: 32,
    linkToPost: "https://reacttraining.com/react-router/web/guides/quick-start",
  },
  {
    title: "Some new post",
    numberOfComments: 32,
    linkToPost: "https://reacttraining.com/react-router/web/guides/quick-start",
  },
  {
    title: "Some new post",
    numberOfComments: 32,
    linkToPost: "https://reacttraining.com/react-router/web/guides/quick-start",
  },
];
