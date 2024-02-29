import PropTypes from 'prop-types';
import './Notes.css'
function Note(props){
    function delete_task(event){
        console.log('del ',event)
    }
    function sendUp(event){
        console.log('up',event.target.className)
    }
    function sendDown(event){
        console.log('down',event.target.value)
    }
    
    return (
        <>
            <div id="task" className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'  key={props.key}>
                <div id="text" className='text-xl font-medium text-black'>
                    {props.taskValue} 
                </div>
                <div id="buttons">
                    <button onClick={delete_task} >🗑️</button>
                    <button onClick={sendUp} >⬆️</button>
                    <button onClick={sendDown} >⬇️</button>
                </div>
            </div>
        </>
    )
}

Note.propTypes={
    taskValue: PropTypes.string,
    key: PropTypes.number
}

export default Note;