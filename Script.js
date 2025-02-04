const table = document.querySelector('.table')
const planer = document.querySelector('.planner')
const btnErase = document.querySelector('.btn-erase')

const getLocalStorage = (id) => localStorage.getItem(id) ?? []
const setLocalStorage = (id, value) => localStorage.setItem(id, value)

let id = 0

let tableTitles =['seg','ter','quar','qui','sex','sab','dom','notas']
for (let title of tableTitles) {
    creatteCol(title)
}

function creatteCol(name){
   let col = document.createElement('div')
   col.setAttribute('class','col $(name)')
   let h3 = document.createElement('h3')
   h3.innerHTML = name
   let line = document.createElement('div')
   line.setAttribute('class', 'line')
   
   for (let i = 0; i < 13; i++) {
        let inp = document.createElement('input')
        inp.type = 'text'
        inp.setAttribute('class','input-planner')
        line.appendChild(inp)
   }
   col.appendChild(h3);
   col.appendChild(line);
   
   table.appendChild(col)
}

let allInputs = document.querySelectorAll('.input-planner')

for (let i = 0; i < 71; i++){
    allInputs[i].setAttribute('id',`$[i]`)
}

let notes = document.querySelector('.notas')
let inpNotes = document.querySelectorAll('.notas input')
notes.styke.backgroundColor = "pink"
inpNotes.forEach(iN => iN.style.borderBottom = "1px solid red")

  
