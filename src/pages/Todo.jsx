import { useState } from "react";

const Todo = () => {

    const [newTask,setNewTask]=useState('');
    let [tasks,setTasks]=useState([]);
    let [bt_text,setBtText]=useState('Add');
    let [btn_class,setBtClass]=useState('btn-add');
    let [taskId,setTaskId]=useState('');

    const handleAddTask = (task_id) => {
        if(newTask===""){
            alert("Please add a task");
            return false;
        }

        if(task_id===''){
        let ind=tasks.length;
        let newTaskItem={"id":ind,"name":newTask};
        setTasks(prevTasks => [...prevTasks,newTaskItem]);
        setNewTask('');
        }
        else if(task_id>=0){
            setBtText('Add');
            setNewTask('');
            setBtClass('btn-add');
            let tasksNew=[...tasks];
            tasksNew[task_id].name=newTask;
            setTasks(tasksNew);
            setTaskId('');

        }
    };

    const handleRemoveTask = (index) =>{
        const tasksUpdated=tasks.filter( task => task.id!==index);
        setTasks(tasksUpdated);
    }

    const editTask = (id) => {
        setBtText('Update');
        setBtClass('btn-edit');
        setNewTask(tasks[id].name);
        setTaskId(id);
    }


    return (

        <section className="section contact light-background">

<div className="container section-title" data-aos="fade-up">
        <h2>To do</h2>
        <p>*****</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4">
      <div className="col-lg-5">

<div className="info-wrap">
  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
  {
            tasks.length === 0 ? (<p>No Tasks</p>) :
            <>                 <i className="bi bi-list flex-shrink-0"></i>
                <ul>
                    {
                        tasks.map((item)=> (
                            <li className='item' style={{listStyle:"none"}} key={item.id} onDoubleClick={()=>editTask(item.id)} >
     {item.name} 
                            <button type="button" className="btn btn-danger" onClick={ () => handleRemoveTask(item.id) } >Remove</button>
                            </li>
                        ))
                    }
                </ul>
                </>            
        }
  </div>
</div>
</div>
      <div className="col-lg-7">
      
              <div className="row gy-4">
              <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
            
                <div className="col-md-6">
                  <label for="name-field" className="pb-2">Task Name</label>
                  <input id="new_task" value={newTask} className="form-control" onChange={(e)=>setNewTask(e.target.value)} /> 
                </div>
                <div className="col-md-12 text-center">
                <button onClick={ () => handleAddTask(taskId)} type="button" className="btn btn-primary" data-ref={taskId} >{bt_text}</button>
                </div>
                </form>
                </div>
          </div>
     </div> 
     
       </div>
    </section>);
};

export default Todo;