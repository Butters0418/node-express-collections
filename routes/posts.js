var express = require("express");
var router = express.Router();
const PostsController = require("../controllers/posts");

router.get("/", PostsController.getPosts);

router.post("/", PostsController.createPosts);

router.delete("/", PostsController.deletePostsAll);

router.delete("/:id", PostsController.deletePosts);

router.patch("/:id", PostsController.patchPosts);

module.exports = router;
