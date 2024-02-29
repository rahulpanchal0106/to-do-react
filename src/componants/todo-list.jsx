import {useState} from 'react'
import { MdDeleteForever } from "react-icons/md";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { GoCircle } from 'react-icons/go';
import { GoCheckCircle } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';

import './Notes.css'
function TodoList(){
	
	var [task,setTask] = useState("");
	const [task_list, setList] = useState([]);
	// const [check_list, setCheckList] = useState([]);

	function handleTask(event){
		const newTask=event.target.value;
		setTask(newTask);
		// console.log(event.target.value);
	}
	function handleList(){
		if(task!=""){
			setList([...task_list, [task,false]]);
			// setCheckList([...check_list,task.check]);
			document.querySelector("#input").value="";
			// setTask([[],false]);
		}
		document.querySelector("#tasks_list").scrollTop;
		console.log(task_list);
		setTask("");
	}
	function handleTick(index,event){
		const updatedCList=[...task_list];
		updatedCList[index][1]=!updatedCList[index][1];
		setList(updatedCList);
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
							<div id="task" className=' relative p-6 w-1/2 shadow-lg mx-auto task-bgColor rounded-xl shadow-lg mb-4 mt-2 flex-column items-center space-x-4'  key={index}>

								<div id="todo" className='flex relative items-center'>
									<button id="tick" className="mr-4 relative " onClick={(event)=>handleTick(index,event)}>
										{task_list[index][1]?<GoCheckCircleFill  className='relative' />:<GoCircle className='relative ' />}
									</button>
									<div id="text" className='flex-2 text-xl font-light text-white'>
										{taskstr} 
									</div>
								</div>
								<div id="buttons" className='flex-1'>
									<button id='delete' onClick={()=>delete_task(index)} ><MdDeleteForever /></button>
									<button id='up' onClick={()=>sendUp(index)} ><GoArrowUp /></button>
									<button id='down' onClick={()=>sendDown(index)} ><GoArrowDown /></button>
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

