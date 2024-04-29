const input = document.querySelector('.input')
const buttonList = document.querySelector('.list-button')
const list = document.querySelector('.list-task')
const empty = document.querySelector('.empty')
const buttonFilter = document.getElementById('filter-button')
const inputFilter = document.getElementById('filter-input')

function createTask(inputText){
 
   const liText = document.createElement("li"); // creamos una li en el html
   // liText.id = inputText para generar id en html
   const p = document.createElement("p"); // creamos un p en el html
   p.textContent = inputText; // introducimos a la p el texto que crea el usuario en el input
   liText.appendChild(p); // añadimos p como hijo de liText para que el texto aparazca en la lista
   list.appendChild(liText) // añadimos la li a la ul      
   input.value = "";
   empty.style.display = "none"
   const buttonCancel = document.createElement("button")
   buttonCancel.innerHTML = `
   <i class="fa-solid fa-trash" style="color: #000000;"></i>
   `

   buttonCancel.onclick = () => {
      liText.remove()
     console.log(list.getElementsByTagName("li").length)
     if(list.getElementsByTagName("li").length == 0){
      empty.style.display = "block"
     }
   }
   liText.appendChild(buttonCancel)
   
   const buttonCheck = document.createElement("button")
   buttonCheck.innerHTML = `
   <i class="fa-solid fa-check" style="color: #000000;"></i>
   `

   buttonCheck.onclick = () => {
      liText.classList.add('check-task')
   }
   liText.appendChild(buttonCheck)

   localStorage.setItem("toDo", JSON.stringify(list.getElementsByTagName("li")))
}


// fetch('https://fakestoreapi.com/products').then((response1)=>{
//    console.log(response1)
//    return response1.json()
// }).then((response2)=>{
//    console.log(response2)
//    response2.forEach(element => {
//       createTask(element.title)
//       console.log(element.title)
//    });
// })

buttonList.addEventListener("click", (e) =>{
   e.preventDefault() // evitamos que se actualice al clicar
   const inputText = input.value // le da el valor que ingresa el usuario

   if (inputText !==""){ 
    createTask(inputText)
   }
})

function filter() {
   //1 colocar el input html
   //2 colocar todas las li del elemento list -> array
   //3 for para comprobar que lo que hayamos colocado dentro del input de filtro aparezca esos li
  
   console.log("ok")
}

 buttonFilter.addEventListener("click", (e) =>{
   e.preventDefault()
   const input = inputFilter.value
   const elements = list.getElementsByTagName("li")
   for(let i = 0; i < elements.length; i++){
      
   if(elements[i].innerText.startsWith(input)){
      console.log(elements[i].innerText)
  }
   }
})