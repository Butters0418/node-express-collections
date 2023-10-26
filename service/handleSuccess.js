const handlerSuccess = (res, data) => {
  // 請求成功預設就是 default 200，所以不用加 res.status(200).send()
  res
    .send({
      status: "success",
      data,
    })
    .end();
};

module.exports = handlerSuccess;
