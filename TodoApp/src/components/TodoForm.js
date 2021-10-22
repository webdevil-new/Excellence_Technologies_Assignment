import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');

const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    });

    setInput('');

}

return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add A todo" 
                value={input} 
                name="text" 
                className="todo_input"
                onChange={handleChange}
            />
            <button className="todo_button">Add Todo</button>
        </form>
    )
}

export default TodoForm;
