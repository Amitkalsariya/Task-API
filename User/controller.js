const USER = require('./model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.all_user = async function (req, res, next) {
    try {
        const alluser = await USER.find()
        res.status(200).json({
            data: alluser,
            status: "Data Fetched Succesfully"
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

exports.add_user = async function (req, res, next) {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error("Please enter Valid Email and Password")
        }

        req.body.password = await bcrypt.hash(req.body.password, 10)
        console.log(req.body.password);
        
        const adduser = await USER.create(req.body)
        res.status(200).json({
            data: adduser,
            status: "Data Fetched Succesfully"
        })
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
} 
exports.check_user= async function(req, res, next) {
    try {
        if(!req.body.email || !req.body.password)
        {
            throw new Error("Please enter Valid Email And Password")
        }
        
        const checkuser=await USER.findOne({email:req.body.email})
        if(!checkuser)
        {
            throw new Error("Your are not Enter Valid Email")    
        }
        const checkpwd=bcrypt.compareSync(req.body.password,checkuser.password)
        if(!checkpwd)
        {
            throw new Error("Please Enter Valid Pwd")
        }
        const token=jwt.sign({user:checkuser._id},"RICK")
        res.status(200).json({
            status:"Login Succesfully",
            data:checkuser,token
        })
    } catch (error) {
     res.status(404).json({
        error:error.message
     })
    }
   }
