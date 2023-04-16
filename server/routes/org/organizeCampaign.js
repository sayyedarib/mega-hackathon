const router = require("express").Router();
const Campaign = require("../../models/campaign");

router.post("/", async (req, res) => {
  const { title, purpose, email,time,date, location, phone, about } = req.body;
  try {
    console.log("server side of campaign req ", req.body);

    await new Campaign({
      title,
      purpose,
      email,
      time,
      date,
      location,
      phone,
      about,
    }).save();

    res.status(200).send("campaign added successfully");
  } catch (error) {
    res
      .status(500)
      .send({ message: "error while saving campaign data on database" });
  }
});

module.exports = router;
