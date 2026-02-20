const {createActivityService,getActivityService} = require("./service");

const createActivity = async (req, res) => {
    const { actor, activity } = req.body
    try {
        const result = await createActivityService({
            "tenantId": req.tenantId,
            actor,
            activity
        });
        res.status(201).json(result)
        console.log("data creaed succefully")
    } catch (error) {
        console.error("the activity does not create", error)
        res.status(500).json({ message: "does not create data" })
    }
}

const getActivity = async(req,res) => {

const {cursor,limit=20} = req.query;
const tenantId = req.tenantId
try {
 const result =   await getActivityService({
        tenantId,
        cursor,
        limit
    })
    res.status(200).json(result)
} catch (error) {
    console.error(`did not get the data ${error}`)
    res.status(400).json({message:"bad request"})

}
}

module.exports = { createActivity, getActivity }