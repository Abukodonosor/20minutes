const Blogpost = require("./Blogpost");

describe("Blogpost service verification", () => {
  it("Get blog posts overview", async () => {
    const postOverviews = Blogpost.getPostsOverview();
    expect(postOverviews.length).not.toBe(0);
  });

  it("Get blog post by specific id: 10001", async () => {
    const postOverviews = Blogpost.getPostById(10001);
    expect(postOverviews).not.toBe(undefined);
  });

  it("Get invalid post id: 9812312893721398", async () => {
    const postOverviews = Blogpost.getPostById(9812312893721398);
    expect(postOverviews.length).toBe(0);
  });

  //testing can be more defined but in this formulation is usless
  it("Create new blog post", async () => {});
  it("Update blog post", async () => {});
});
