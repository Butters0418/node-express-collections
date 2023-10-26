const User = require("../model/users");
const handlerError = require("../service/handleError");
const handlerSuccess = require("../service/handleSuccess");

const users = {
  // 取得所有使用者
  async getUsers(req, res) {
    const allUsers = await User.find();
    handlerSuccess(res, allUsers);
  },

  // 新增使用者
  async createUsers(req, res) {
    try {
      const { body } = req;
      const newUser = await User.create({
        name: body.name,
        email: body.email,
      });
      handlerSuccess(res, newUser);
    } catch (error) {
      handlerError(res, error);
    }
  },

  // 刪除所有使用者
  async deleteUsersAll(req, res) {
    const users = await User.deleteMany({});
    handlerSuccess(res, users);
  },

  // 刪除單一使用者
  async deleteUsers(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      handlerSuccess(res, user);
    } catch (error) {
      handlerError(res, error);
    }
  },

  // 編輯單一使用者
  async patchUsers(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const users = await User.findByIdAndUpdate(id, {
        name: body.name,
        email: body.email,
      });
      handlerSuccess(res, users);
    } catch (error) {
      handlerError(res, error);
    }
  },
};

module.exports = users;
