// IMPORT DES DEPENDECES
const express = require("express");
const serverless = require("serverless-http");
const app = express();

// IMPORT LE GESTIONNAIRE DE ROUTE
const router = express.Router();
// INITIALISATION DU PORT POUR LE SERVEUR
const port = process.env.PORT || 3000;

// NOUS CREONS UNE ROUTE
router.get("/", (req, res) => {
  res.json({
    kevin: "armache",
  });
  // greeting = "<h1>Hello From Node on Fly!</h1>";
  // name = req.params["name"];
  // if (name) {
  //   res.send(greeting + "</br>and hello to " + name);
  // } else {
  //   res.send(greeting);
  // }
});
// L'APP DEVRA D'ABORD PASSER PAR /.netlify/functions/api ENSUITE IL IRA SUR NOTRE ROUTE DEFINI LA HAUT
app.use("/.netlify/functions/api", router);

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));

module.exports.handler = serverless(app);
