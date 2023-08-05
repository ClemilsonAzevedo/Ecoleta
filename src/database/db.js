const sqlite3 = require("sqlite3").verbose()

// Criar o objeto do Banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// Criar a tabela
db.serialize(() => {
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `)

  // // Inserir dados na tabela
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `

  // const values = [
  //   "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  //   "Papersider",
  //   "Guilherme Gemballa, Jardim América",
  //   "Nº 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Papéis e Papelão",
  // ]

  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Cadastrado com sucesso")
  //   console.log(this)
  // }

  // db.run(query, values, afterInsertData)

  // // consultar dados na tabela
  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Aqui estão seus registros")
  //   console.log(rows)
  // })

  // // Deletar registro

  // db.run(`DELETE FROM places WHERE id=?`, [1], function (err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Registro deletado com sucesso!")
  // })
})
