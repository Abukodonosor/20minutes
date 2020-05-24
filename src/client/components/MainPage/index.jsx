import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const blogItemsList = mockBlogItems.map((el, key) => (
    <BlogItemCard {...el} />
  ));

  return <div className="main-page">{blogItemsList}</div>;
};

const BlogItemCard = ({ title, numberOfComments, linkToPost }) => {
  return (
    <div class="blog-item">
      <h4>{title}</h4>
      <span>comments per post:{numberOfComments}</span>
      <br />
      <Link to={linkToPost}>{linkToPost}</Link>
    </div>
  );
};

const mockBlogItems = [
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
  {
    title: "Some new post",
    numberOfComments: 32,
    linkToPost: "https://reacttraining.com/react-router/web/guides/quick-start",
  },
];
