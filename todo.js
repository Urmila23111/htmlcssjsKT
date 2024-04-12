    
    
    let localdata=[];
    const getlocaldata =() =>{
        return JSON.parse(localStorage.getItem("MYLIST")) || [];

    }
   
    const addlocaldata = (taskdata)=>{
        return localStorage.setItem("MYLIST" , JSON.stringify(taskdata));
    }
    const alreadyList = () =>{
        localdata =getlocaldata();
        localdata.forEach(currentdata => {
            console.log("currentitem" +currentdata);
            const list = document.getElementById("mytask");
            const manylist = document.createElement("li");
            manylist.innerHTML = currentdata +'' +'  <input type=checkbox onclick="done(this)">'   +' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>' +'<input type="datetime-local">DUEDATE' ;
            list.appendChild(manylist);
            
        });
        
    }
   
    const  addtodo=()=> {
        
        var taskname = document.getElementById("taskname");
        const task1 = taskname.value.trim();
       var  localdata =getlocaldata();
        

        if (task1 !== "") {
            localdata.push(task1);
            addlocaldata(localdata);
            var list = document.getElementById("mytask");
            const manylist = document.createElement("li");
            manylist.innerHTML = task1 +'' +'  <input type=checkbox onclick="done(this)">'   +' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>' +'<input type="datetime-local">DUEDATE' ;
            list.appendChild(manylist);
            taskname.value = "";
        } else {
            alert("Invalid task");
        }
    }
    alreadyList()

    
   
    function deleteTask(todo) {
        console.log(todo.parentNode);
        

   
    
        todo.parentNode.remove();

    
    

    
    addlocaldata(localdata);
    }

   
    

    


    const addCompletedTask = (taskText) => {
        const completedList = document.getElementById("completedTasks");
        const completedTaskItem = document.createElement("li");
        completedTaskItem.textContent = taskText;
        completedList.appendChild(completedTaskItem);
    }
    
    function done(done1) {
        done1.parentNode.style.textDecoration = "line-through";
    const taskText = done1.parentNode.textContent.split("Delete")[0].trim();
    
    done1.parentNode.remove();
    
    addCompletedTask(taskText);
    
    addlocaldata(localdata);
    }
    