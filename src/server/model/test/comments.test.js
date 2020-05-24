const Comment = require("../Comment");
describe("Comments model verification", () => {
  it("Get all comments", async () => {
    const allComments = Comment.getAll();
    expect(allComments.length).not.toBe(0);
  });

  it("Find comments for specific post id: 10001", async () => {
    const commentsForPost = Comment.getCommentsByPostId("10001");
    expect(commentsForPost.length).not.toBe(0);
  });
});
