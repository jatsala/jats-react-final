import React, { useState } from 'react';

/**
 * Componente que gestiona la lista de tareas
 * 
 * @returns {React.Component}
 */
const TaskList = () => {

  const [newTask, setNewTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  /**
   * Añade una nueva tarea a la lista de Tareas.
   * v2: La nueva tarea se añade como un objeto {task: nombre de la tarea, completed: si esta completada o no}`
   */
  const addNewTask = () => {
    setTasklist([...tasklist, { task: newTask, completed: false }]);
    setNewTask("");
  };

  /**
   * Función para chequear si la lista de tareas está vacía
   * @returns true si tasklist.length === 0
   */
  const isTasksEmpty = () => tasklist.length === 0;

  /**
   * Editar el nombre de la nueva tarea
   * @param {*} e - Evento de onChange proveniente de React 
   * @returns 
   */
  const editNewItem = (e) => setNewTask(e.target.value)

  /**
   * Función para eliminar una tarea en concreto
   * @param {*} index - Índice de la tarea a eliminar
   */
  const removeItem = (index) => {
    const newTasklist = tasklist.filter((t, i) => i !== index);
    setTasklist(newTasklist);
  }

  /**
   * Cambia el item por completado <-> pendiente
   * @param {*} index 
   */
  const toggleCompletedItem = (index) => {
    let newTasklist = tasklist;
    newTasklist[index].completed = !newTasklist[index].completed;
    setTasklist([...newTasklist]);
  }

  /**
   * Añade una nueva tarea cuando se presiona la tecla Enter
   * @param {*} e - Evento onKeyDown que proviene por defecto de React
   */
  const insertNewItemOnEnterKey = (e) => e.key === 'Enter' && addNewTask();

  return <>
    <h1>Task List</h1>
    <div>
      <input className='input'
        onKeyDown={insertNewItemOnEnterKey}
        value={newTask} onChange={editNewItem} placeholder="New Task" type="text" />
      <button className='btn' onClick={addNewTask}>Create Task</button>
    </div>
    {isTasksEmpty()
      ? (<p>Task List is Empty</p>)
      : (
        <ul>
          {tasklist.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                // onClick={() => removeItem(index)}
                onClick={() => toggleCompletedItem(index)}
                checked={item.completed}
                onChange={() => { }}
              />
              {item.task}
            </li>
          ))}
        </ul>
      )}
  </>

}

export default TaskList;
