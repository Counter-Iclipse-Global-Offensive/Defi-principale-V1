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

  var tracerPos = ['zero', 'one', 'two', 'three']
  var formElements = ['firstFormPart', 'secondFormPart', 'thirdFormPart', 'fourthFormPart'];
  let nbTracer = 0;
  var emplacement


  
  var flagThemeLight = true;
  if(flagThemeLight){
      document.body.setAttribute("data-themeLight","")
  } else{
      document.body.removeAttribute("data-themeLight")
      document.getElementById('logo').style = "height: 50px;";
  }

  
window.onkeydown = function (k) {
    if(k.code === "Enter"){
        nextStep();
    }
  }
  

  function nextStep() {
    if (nbTracer < 3) {
        document.getElementById("tracer").classList.add(tracerPos[++nbTracer])
        document.getElementById(formElements[nbTracer]).classList.add('show')

    }

    if(nbTracer == 3){
        document.getElementById('next').innerHTML = "envoyer"
    } else{
        document.getElementById('next').innerHTML = "suivant"
    }
}

function previousStep() {
    if (nbTracer > 0) {
        document.getElementById("tracer").classList.remove(tracerPos[nbTracer])
        document.getElementById(formElements[nbTracer--]).classList.remove('show')
        document.getElementById('next').innerHTML = "suivant"
    }
}

document.body.onscroll = () => {
    if(flagThemeLight){
        var posY = window.scrollY;
        if (posY > 20) {
            document.getElementById('logo').style = "height: 50px;";
        } else {
            document.getElementById('logo').style = "height: 65px;";
        }
    }
    

}

// actus
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
  }
};
actus();

