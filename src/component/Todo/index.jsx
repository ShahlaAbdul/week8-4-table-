import React, { useState } from 'react';
import './style.css'



function Todo() {
    const [todo, setTodo] = useState([])
    const [newTodo, setNewTodo] = useState("")
    
    //ad buton funksiay
    const handleAddTodo = () => {
        //trim methodu 
        if (newTodo.trim() !== "") {
            setTodo([...todo, { text: newTodo.trim(),checked: false}]);
            setNewTodo("");
            
        }
    };
    //delete buttonu funksiya
    const handleDeleteTodo = (index) => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);

    };
    //toggle funksiya
    const handleToggleTodo = (index) => {
        const newTodo = [...todo];
        newTodo[index].checked = !newTodo[index].checked;
        setTodo(newTodo);
    };
    return (
        <div className='Todo'>
            <h1>Todo</h1>
            {/* list elemeneti elave etme */}
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
            />
            {/* add buttonu */}
            <button onClick={handleAddTodo}>Add</button>
            {/* list elementleryi */}
            <ul>
                {todo.map(
                    (todo, index) => (
                        <li key={index}>
                            <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)}
                            /> 
                            <span > {todo.text}</span>
                            {/* deleteye tiklayanda silinsn(amma silmir bu arada vudihusjxk) */}
                            <button onClick={()=>handleDeleteTodo(index)}>Delete</button>
                        </li>)
                )}
            </ul>
      </div>

  );
}

export default Todo;
