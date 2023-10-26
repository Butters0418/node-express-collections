const Post = require("../model/posts");
const User = require("../model/users");
const handlerError = require("../service/handleError");
const handlerSuccess = require("../service/handleSuccess");

const posts = {
  // 取得所有貼文
  async getPosts(req, res) {
    const timeSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt";
    // asc 遞增(由小到大，由舊到新) createdAt ;
    // desc 遞減(由大到小、由新到舊) "-createdAt"
    const q = req.query.q !== undefined ? { content: new RegExp(req.query.q) } : {};
    const allPosts = await Post.find(q)
      .populate({
        path: "user",
        select: "name email",
      })
      .sort(timeSort);
    handlerSuccess(res, allPosts);
  },

  // 新增貼文
  async createPosts(req, res) {
    try {
      const { body } = req;
      const newPost = await Post.create({
        content: body.content,
        image: body.image,
        user: body.user,
        likes: body.likes,
      });
      handlerSuccess(res, newPost);
    } catch (error) {
      handlerError(res, error);
    }
  },

  // 刪除所有貼文
  async deletePostsAll(req, res) {
    const posts = await Post.deleteMany({});
    handlerSuccess(res, posts);
  },

  // 刪除單一貼文
  async deletePosts(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);
      handlerSuccess(res, post);
    } catch (error) {
      handlerError(res, error);
    }
  },

  // 編輯單一貼文
  async patchPosts(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const users = await Post.findByIdAndUpdate(id, {
        content: body.content,
        image: body.image,
        name: body.name,
        likes: body.likes,
      });
      handlerSuccess(res, posts);
    } catch (error) {
      handlerError(res, error);
    }
  },
};

module.exports = posts;
