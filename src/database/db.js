//*Importar dependencia
const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

db.serialize( function() {
  db.run(`
  CREATE TABLE IF NOT EXISTS places (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    name TEXT,
    address TEXT,
    address2 TEXT,
    state TEXT,
    city TEXT,
    items TEXT
  ); 
`)

  const query =`
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
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "Colectoria",
    "Guilherme Gemballa, Jardim America",
    "Numero 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletronicos, lampadas"
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }
    else{
      console.log("Cadastrado com sucesso")
      console.log(this)
    }
    
  }

  db.run(query, values, afterInsertData)
})
