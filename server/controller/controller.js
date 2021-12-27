var Userdb = require("../model/model");
//create user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content empty" });
    return;
  }

  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in db
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500),
        send({
          message: err.message || "some error occured",
        });
    });
};

//return users
exports.find = (req, res) => {};

//update user by id

exports.update = (req, res) => {};

//delete a user with id
exports.delete = (req, res) => {};
