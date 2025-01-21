const TASK=require('./model')
exports.all_user= async function(req, res, next) {
    try {
        const alluser=await TASK.find()
        res.status(200).json({
            data:alluser,
            status:"Data Fetched Succesfully"
        })
    } catch (error) {
     res.status(404).json({
        error:error.message
     })
    }
   }

   exports.add_user= async function(req, res, next) {
    try {
        const adduser=await TASK.create(req.body)
        res.status(200).json({
            data:adduser,
            status:"Data Fetched Succesfully"
        })
    } catch (error) {
     res.status(404).json({
        error:error.message
     })
    }
   }
  