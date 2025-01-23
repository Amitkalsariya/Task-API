const TASK = require('./model')
exports.all_task = async function (req, res, next) {
    try {
        const alltasks = await TASK.find().populate("user")
        res.status(200).json({
            status: "Data Fetched Succesfully",
            data: alltasks
        })
    } catch (error) {
        res.status(404).json({
            status: "Error Raised",
            error: error.message
        })
    }
}

exports.add_task = async function (req, res, next) {
    try {
        if (!req.body.title || !req.body.desc || !req.body.start_date || !req.body.start_date || !req.body.user) {
            throw new Error("Please Add all The Feilds")
        }
        const addition = await TASK.create(req.body)
        res.status(201).json({
            data: addition,
            status: "Data Fetched Succesfully"
        })
    } catch (error) {
        res.status(404).json({
            status: "Error Raised",
            error: error.message
        })
    }
}
