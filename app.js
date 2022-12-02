// var xhr = new XMLHttpRequest();
// xhr.open('POST', './', true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     alert(xhr.responseText);
//   }
// };
// xhr.send(JSON.stringify({ uniqueId : document.cookie, connect : true }));

const mongoose = require("mongoose");
const { DATABASE_URI } = require("./config.json");
const news = require("./models/news.model");

// database connection
//Le proxi du serveur de l'esia peut le bloquer, alors pour l'instant on laisse comme ça.
mongoose
  .connect(DATABASE_URI, {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  })
  .then(() => {
    console.log("Successfully connected to the database !");
  })
  .catch((err) => {
    console.log(err);
  });

const actus = async () => {
  const newsModel = await news.findOne({ id: 1 });

  if (!newsModel) {
    const newsM = new news({
      id: 1,
      date: "23 février 2022",
      title: "INFO SERVICE GUYANE",
      desc: "Sida Info Service ouvre ses services d'écoute en Guyane. La ligne est gratuite et accessible chaque lundi, mercredi et vendredi de 17 h à 23 h. Ces services sont disponibles en français, créole, créole haïtien, portugais et espagnol. Au cours du second semestre 2022, SIS Association élargira les créneaux horaires d’écoute et proposera de nouvelles langues.",
    });
    await newsM.save();
  } else {
    console.log(newsModel.date);
    newsModel.events.on('error', err => console.log(err.message));

    newsModel.find().sort({ id: 1 }).limit(3);   
  }
};
actus();
