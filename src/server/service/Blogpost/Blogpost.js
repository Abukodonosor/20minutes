const Post = require("../../model/Post");
const Comment = require("../../model/Comment");

class Blogpost {
  static getPostsOverview() {
    const allPosts = Post.getAll();
    const allComments = Comment.getAll();

    const result = mapCommentToPost(allPosts, allComments);

    const postsWithCommentsResult = result.map((el) => {
      el.numberOfComments = el.comments.length;
      delete el.comments; // delete list of comments
      return el;
    });

    return postsWithCommentsResult;
  }

  static getPostById(id) {
    const post = Post.getPostById();
    const allComments = Comment.getAll();

    const postsWithCommentsResult = mapCommentToPost(post, allComments);

    return postsWithCommentsResult;
  }
}

module.exports = Blogpost;

const mapCommentToPost = (allPosts, allComments) => {
  let postsWithCommentsResult = [];
  for (let post of allPosts) {
    let comments = [];
    let detailPost = post;
    for (let comment of allComments) {
      if (post.id === comment.post_id) {
        comments.push(comment);
      }
    }
    detailPost.comments = comments;
    postsWithCommentsResult.push(detailPost);
  }
  return postsWithCommentsResult;
};
