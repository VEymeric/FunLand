var http = require('http');
var fs = require('fs');
 
//création d'un serveur web
var serv = http.createServer(
    //callback sur les requêtes HTTP
    function traiteRequete(req, res) { 
       //log de l'url demandée
       console.log(req.url);
       //construction d'une réponse HTTP
       fs.readFile(__dirname + req.url, "utf-8", 
          //code exécuté quand le fichier est effectivement ouvert
          function (err, fd) {
              if (err) { // une erreur est survenue
                  res.writeHead(500);
                  res.write(err.message);
                  res.end();
              } else { // sinon, on produit le fichier voulu
                  res.writeHead(200, { "Content-Type" : "text/plain" } );
                  res.write(fd);
                  res.end(); //envoi de la réponse
              }
          });
    });
 
serv.listen(8000); //commence à accepter les requêtes
 
console.log("Server running at http://localhost:8000");