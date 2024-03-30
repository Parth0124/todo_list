// Form.jsx
function Form(props) {
    const handleSubmit = (e) => {
      e.preventDefault();
      props.addItem();
    };
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={props.inputText} onChange={props.handleChange} className="input-box" />
        <select
          value={props.priority}
          onChange={(e) => props.setPriority(e.target.value)}
          className="priority-dropdown"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    );
  }
  
  export default Form;
  