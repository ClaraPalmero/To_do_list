const input = document.querySelector('.input')
const buttonList = document.querySelector('.list-button')
const list = document.querySelector('.list-task')
const empty = document.querySelector('.empty')

buttonList.addEventListener("click", (e) =>{
   e.preventDefault() // evitamos que se actualice al clicar
   const inputText = input.value // le da el valor que ingresa el usuario

   const liText = document.createElement("li"); // creamos una li en el html
   const p = document.createElement("p"); // creamos un p en el html
   p.textContent = inputText; // introducimos a la p el texto que crea el usuario en el input
   liText.appendChild(p); // añadimos p como hijo de liText para que el texto aparazca en la lista
   list.appendChild(liText) // añadimos la li a la ul
   console.log(liText)
})