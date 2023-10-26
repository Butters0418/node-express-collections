var express = require("express");
var router = express.Router();
const UsersController = require("../controllers/users");

router.get("/", UsersController.getUsers);

router.post("/", UsersController.createUsers);

router.delete("/", UsersController.deleteUsersAll);

router.delete("/:id", UsersController.deleteUsers);

router.patch("/:id", UsersController.patchUsers);

module.exports = router;
