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
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ message: "error retrieving user with id " + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "error while retrieving user info" });
      });
  }
};

//update user by id

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(500).send({ message: "Data to update is empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `cannot update user not found maybe` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error update user info" });
    });
};

//delete a user with id
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete` });
      } else {
        res.send({
          message: `user deleted`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `couldnt delete id`,
      });
    });
};
