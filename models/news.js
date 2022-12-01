import mongoose from "mongoose";
const { Schema } = mongoose;

const news = new Schema({
  id: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: "",
  },
  title: String,
  desc: String,
});


module.exports = mongoose.model('news', news);