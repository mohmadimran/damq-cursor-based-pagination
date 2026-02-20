const mongoose = require("mongoose");

const ActivityShcema = mongoose.Schema(
    {
        tenantId:{type:String,required:true,index:true},
        empoyeeId:String,
        actor:String,
        activity:String,
        createdAt:{type:Date,default:Date.now,index:true}
    })

    ActivityShcema.index({tenatId:1,createdAt:-1})

    module.exports = mongoose.model("Activity",ActivityShcema)