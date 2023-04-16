const router = require("express").Router();
const { User, validate } = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  console.log("req.body ", req.body)
  const { type, name, email, password, confirmpassword, team, about } = req.body;
  try {
    console.log("insde server signUp file 1");
    // const { error } = validate(req.body);
    // console.log("insde server signUp file 2");
    // if (error)
      // return res.status(400).send({ message: error.details[0].message });
    console.log("insde server signUp file 3");
    // const user = await User.findOne({ email: req.body.email });
    console.log("insde server signUp file 4");
    // if (user)
    //   return res
    //     .status(409)
    //     .send({ message: "User with given email already Exist!" });
    //     console.log("insde server signUp file 5");
    // const salt = await bcrypt.genSalt(Number(process.env.SALT));
    // const hashPassword = await bcrypt.hash(req.body.password, salt);
    // const hashConfirmPassword = await bcrypt.hash(
    //   req.body.confirmPassword,
    //   salt
    // );
    console.log("insde server signUp file 6");
    await new User({
      type, name, email, password, confirmpassword, team, about
    }).save();
    console.log("insde server signUp file 7");
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log("insde server signUp file 3");
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
