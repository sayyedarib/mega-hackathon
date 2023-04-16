const router = require("express").Router();
const campaign = require("../../models/campaign");

router.get("/", async (req, res) => {
  const campaignList = await campaign.find();
  console.log(campaignList);
  res.json(campaignList);
});

module.exports =router;