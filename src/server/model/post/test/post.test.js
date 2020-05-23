const Post = require("../Post");

describe("Post model verification", () => {
  it("Create Post", async () => {});

  it("List all posts", async () => {
    const allPosts = Post.getAll();
    expect(allPosts.length).not.toBe(0);
  });

  it("Update post", async () => {});
});
