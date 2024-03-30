import Todoitem from './Todoitem';
function Todolist(props) {
  return (
    <ul>
          {props.items.map((item, index) => (
            <Todoitem key={index} item={item} index={index} toggleCompletion={props.toggleCompletion}/> ))}
    </ul>
  )
}

export default Todolist
