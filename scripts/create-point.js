
function populateUFs(){
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then( res => res.jso() ).then( states => {
    ufSelect.innerHTML = ufSelect.innerHTML + '<option value="1">Valor</option>'
  })
}

populateUFs()

document.querySelector("select[name=uf]").addEventListener("change", () => {
  console.log("mudei")
})