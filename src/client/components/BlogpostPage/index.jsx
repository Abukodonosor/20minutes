import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogpostPage = () => {
  const [blogPost, setBlogPost] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`/blog/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("BlogPost detail");
        if (data.status === "Success") {
          setBlogPost(data.result);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log("error data", err);
      });
  }, []);

  return (
    <div className="blog">
      <BlogContent title={blogPost.title} text={blogPost.text} />
      <BlogComments comments={blogPost.comments} />
    </div>
  );
};

const BlogContent = ({ title, text }) => {
  return (
    <div className="blog-content">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const BlogComments = ({ comments = [] }) => {
  const CommentList = comments.map((el, key) => {
    return <Comment key={key} name={el.name} text={el.text} />;
  });

  return <div className="blog-comments">{CommentList}</div>;
};

const Comment = ({ name, text }) => {
  return (
    <div className="comment">
      <h5>{name}</h5>
      <p>{text}</p>
    </div>
  );
};
