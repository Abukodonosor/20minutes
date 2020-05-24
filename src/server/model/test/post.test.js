const Post = require("../Post");

describe("Post model verification", () => {
  it("Create Post", async () => {});

  it("List all posts", async () => {
    const allPosts = Post.getAll();
    expect(allPosts.length).not.toBe(0);
  });

  it("Find specific post", async () => {
    const allPosts = Post.getPostById("123123123123231");
    expect(allPosts.length).toBe(0);
  });
  it("Update post", async () => {});
});
