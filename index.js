// alert('connected');

let todos = [];

function display()
{


  let allTodos = localStorage.getItem('todos');
  
  
  let arr = JSON.parse(allTodos)


  console.log(arr);

  console.log(allTodos);
  let elem = document.getElementById('ans');
  
  if(arr)
  {
    todos = arr;  
    arr.map((todo)=>{
    
    elem.innerHTML = elem.innerHTML +  `<div class="card mt-2 container-fluid">
        <div class="card-body ">
          ${todo}
         </div>
        </div>`
        

  })
 }
}

display();

document.getElementById('btn').addEventListener('click',(e)=>{

     e.preventDefault(); //prevents from reoading

    let todo = document.getElementById('todo').value;
  
    if(todo=='')
    {
      alert("Enter Data");
      return;
    }
   todos.push(todo)
     
    localStorage.setItem('todos',JSON.stringify(todos));
   

   let elem =  document.getElementById('ans');
   elem.innerHTML = elem.innerHTML +  `<div class="card mt-2 container-fluid">
          <div class="card-body">
           ${todo}
          </div>
        </div>` 
 

})