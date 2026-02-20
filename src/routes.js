const router = require("express").Router()
const {createActivity,getActivity} = require("./controller")
const middleware = require("./middelware")


router.post("/",middleware,createActivity)

router.get("/",middleware,getActivity)

module.exports = router