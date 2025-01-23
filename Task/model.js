const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Task_model = new Schema({
  title: {
    type: String,
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date,
  },
  user: 
    {type: mongoose.Schema.Types.ObjectId,
    ref: "User"}

});
module.exports = mongoose.model("Task",Task_model)