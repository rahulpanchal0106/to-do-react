import {useState} from 'react'
import { MdDeleteForever } from "react-icons/md";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import './Notes.css'
function TodoList(){
	
	var [task,setTask] = useState("No Task");
	const [task_list, setList] = useState([]);
	function handleTask(event){
		setTask(event.target.value);
	}
	function handleList(){
		if(task!=""){
			setList([...task_list, task]);
			document.querySelector("#input").value="";
			setTask("");
		}
		
	}

	function delete_task(index){
        // console.log('del ',index);
		const updatedList=task_list.filter((_,i)=>i!==index);
		setList(updatedList);
    }
    function sendUp(index){
		if(index!=task_list.length-1){
			const updatedList = [...task_list];
	
			[updatedList[index],updatedList[index+1]] = [updatedList[index+1],updatedList[index]]
			setList(updatedList);
		}
    }
    function sendDown(index){
        if(index!=0){
			const updatedList = [...task_list];
			[updatedList[index],updatedList[index-1]] = [updatedList[index-1],updatedList[index]];
			setList(updatedList)
		}
    }
	return (
		<>
			<div id="container">
				<div id="input_container">
					<input id="input" onChange={handleTask} type="text" placeholder="Enter Task Here!" />
					<button id="add" onClick={handleList} > Add</button>
				</div>
				<div id="tasks_list">
					{
						
						task_list.map((taskstr,index)=>(
							<div id="task" key={index}>
								<div id="text">
									{taskstr} 
								</div>
								<div id="buttons">
									<button onClick={()=>delete_task(index)} ><MdDeleteForever /></button>
									<button onClick={()=>sendUp(index)} ><GoArrowUp /></button>
									<button onClick={()=>sendDown(index)} ><GoArrowDown /></button>
								</div>
							</div>
						))	
					}
				</div>
			</div>
		</>
	)
	
}

export default TodoList

