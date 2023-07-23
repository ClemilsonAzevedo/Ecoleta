const express = require("express")
const server = express()

//* Configurar pasta pública
server.use(express.static("public"))

//* utilizando nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

//*Configurar caminhos da Aplicação
//*Página Inicial
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Um título" })
})

//*Página Create-point
server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

//*Página search-results
server.get("/search", (req, res) => {
  return res.render("search-results.html")
})

//* Ligar o Server
server.listen(3000)
