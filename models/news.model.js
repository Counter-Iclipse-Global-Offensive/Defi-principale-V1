const mongoose = require('mongoose');


const news = mongoose.Schema({
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