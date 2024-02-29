import Todolist from './componants/todo-list.jsx'
function App(){
	const body=document.querySelector('body');
	let count=0;
		body.onwheel=(event)=>{
			
			if(event.deltaY<=0 && count>=0){
				count-=0.8;
				body.style.backdropFilter=`blur(${count}px)`;
			}else if(count<=20){
				count+=0.8;
				body.style.backdropFilter=`blur(${count}px)`;
			}
		}
		body.onscroll=(event)=>{
			
			if(event.deltaY<=0 && count>=0){
				count-=0.8;
				body.style.backdropFilter=`blur(${count}px)`;
			}else if(count<=20){
				count+=0.8;
				body.style.backdropFilter=`blur(${count}px)`;
			}
		}
		var startY,endY,deltaY;
		body.ontouchmove=(event)=>{
			body.ontouchstart=()=>{
				startY=event.touches[0].clientY;
			}
			
			body.ontouchend=()=>{
				endY=event.touches[0].clientY
				deltaY=endY-startY;
			}
			if(deltaY<=0 && count>=0){
				count-=0.8;
				body.style.backdropFilter=`blur(${count}px)`;
			}else if(count<=20){
				count+=0.8;
				body.style.backdropFilter=`blur(${count}px)`;
			}
		}

	return (
		<Todolist />
	)
}
export default App
