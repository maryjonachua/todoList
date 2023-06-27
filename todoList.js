let todoListArray = JSON.parse(localStorage.getItem("todoList")) || [];

JSON.parse(localStorage.getItem("todoList"));
showTodolist();

const getinputName = document.querySelector(".js-addtodo-name");
    
getinputName.onkeyup = () => {

let inputName  = getinputName.value;


const addButton =document.querySelector(".add-button");


if(inputName.trim() != 0){ //if the user value isn't only spaces
    addButton.classList.add("active"); //active the add button
  }else{
    addButton.classList.remove("active"); //unactive the add button
  }


}
 






//getting the input value when add button click 

const addButton =document.querySelector(".add-button");

addButton.onclick = () => {
   
   const getinputName = document.querySelector(".js-addtodo-name");
     
 let inputName  = getinputName.value;

 todoListArray.push(inputName);

localStorage.setItem("todoList",JSON.stringify(todoListArray));

showTodolist();

getinputName.value='';
addButton.classList.remove("active"); 

}

//show todolist from saved one

function showTodolist(){
   let newList ='';

   todoListArray.forEach((newlist,index) =>{
   newList += 
`<li>${newlist}<span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
});


document.querySelector(".todo-container").innerHTML = newList;

const ClearButton =document.querySelector(".jsClearbtn")

if(todoListArray.length > 0){
ClearButton.classList.add("active"); 
  }else{
    ClearButton.classList.remove("active"); 
  }
 

count();

}

//pending task/s count
function count(){
const taskNumber = document.querySelector(".count");

taskNumber.textContent = todoListArray.length; 

}

const ClearButton =document.querySelector(".jsClearbtn");

ClearButton.onclick = () => {
 todoListArray = [];

localStorage.setItem("todoList",JSON.stringify(todoListArray));

document.querySelector(".todo-container").innerHTML = '';

count();


if(todoListArray.length > 0){
ClearButton.classList.add("active"); 
  }else{
    ClearButton.classList.remove("active"); 
  }
};




function deleteTask(index){
todoListArray.splice(index,1);

showTodolist();

}










