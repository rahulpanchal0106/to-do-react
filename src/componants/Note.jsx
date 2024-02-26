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
            <div id="task" key={props.key}>
                <div id="text">
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