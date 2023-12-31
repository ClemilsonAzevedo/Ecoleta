// * Itens de coleta Starts
function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    })
}

populateUFs()

function getCities(event) {
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufValue = event.target.value

  stateInput.value = event.target.options[event.target.selectedIndex].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`

  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.disabled = true

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }
      citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)

// * Itens de coleta Ends

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []
const collectedItems = document.querySelector("input[name=items]")

function handleSelectedItem(event) {
  const itemLi = event.target

  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id
  

  const alreadySelected = selectedItems.findIndex((item) => item === itemId)

  if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter((item) => item != itemId)
    selectedItems = filteredItems
  } else {
    selectedItems.push(itemId)
  }

  collectedItems.value = selectedItems
}
