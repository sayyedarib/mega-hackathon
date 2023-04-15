const router = require("express").Router();

router.get("/", (req, res)=>{
    res.status.send("fine")
})

module.exports = router;