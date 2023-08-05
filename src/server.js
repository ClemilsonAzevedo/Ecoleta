const express = require("express")
const server = express()

//* Pegar o Banco de Dados
const db = require("./database/db")

//* Configurar pasta pública
server.use(express.static("public"))

// Habilitar o uso do req.body na APP
server.use(express.urlencoded({ extends: true }))

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

server.post("/savepoint", (req, res) => {
  // console.log(req.body)

  // Inserir dados no banco de dados
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", { saved: true })
  }

  db.run(query, values, afterInsertData)
})

//*Página search-results
server.get("/search", (req, res) => {
  //* Pegar os dados do banco de dados

  const search = req.query.search

  if(search == ""){
    return res.render("search-results.html", { total: 0 })
  }


  // consultar dados na tabela
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length

    // Mostrar a pagina html com o banco de dados
    return res.render("search-results.html", { places: rows, total: total })
  })
})

//* Ligar o Server
server.listen(3000)
