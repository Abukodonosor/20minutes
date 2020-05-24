const Post = require("../../model/Post");
const Comment = require("../../model/Comment");

class Blogpost {
  static getPostsOverview() {
    const allPosts = Post.getAll();
    const allComments = Comment.getAll();

    const result = mapCommentsToPost(allPosts, allComments);

    const postsWithCommentsResult = result.map((el) => {
      el.numberOfComments = el.comments.length;
      delete el.comments; // delete comments attribute
      return el;
    });

    return postsWithCommentsResult;
  }

  static getPostById(id) {
    const post = Post.getPostById(id);
    const allComments = Comment.getAll();

    const postsWithCommentsResult = mapCommentsToPost(post, allComments);

    if (postsWithCommentsResult.length) return postsWithCommentsResult[0];

    return postsWithCommentsResult;
  }
}

module.exports = Blogpost;

//private mapping function to find all comments who belong to specific post
//better solution is to use map so this could be O(n+m)
const mapCommentsToPost = (allPosts, allComments) => {
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
