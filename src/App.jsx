import { useState, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  function addTodo() {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    if (text.trim() !== '') {

      setTodos([...todos, newItem]);
      // console.log(newItem);
      inputRef.current.value = '';
    }
  };
  function deletTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    console.log(newTodos);
  }
  return (
    <div className="bg-slate-300 h-[100vh] flex items-center justify-center ">

      <div className="bg-white p-5 rounded-xl shadow-lg max-w-md lg:max-w-lg w-full">
        <h1 className="font-bold text-2xl text-slate-800  border-b border-gray-200 text-center capitalize pb-3" >To do list</h1>
        <div>
          <ul className={todos.length > 0 ? "p-4 border-slate-200 border-b flex flex-col gap-3" : "hidden"}>
            {todos.map((newItem, index) => {
              return (
                <label key={index} className="flex items-center gap-3">
                  <input type="checkbox" onChange={() => { deletTodo(index) }} checked={newItem.completed} className="hidden" />
                  <div className=" border border-gray-300 rounded-full h-8 w-8 flex items-center justify-center">
                    {newItem.completed && <FaCheckCircle className="text-green-500 rounded-full h-8 w-8" />}
                  </div>

                    <span className={newItem.completed ? "line-through break-all" : ""}>
                      {newItem.text}
                    </span>
                    

                </label>
              );
            })}

          </ul>
          <div className="py-4 flex justify-between gap-2">
            <input className="h-10 p-2 border w-full  border-slate-300 rounded-md focus:outline-none" type="text" placeholder="enter your mission " ref={inputRef} />
            <button className="bg-blue-600 py-1 px-5 rounded-md text-white hover:bg-blue-700 cursor-pointer" onClick={addTodo}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}