import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from './api/apiRequest';

function App() {
    let todos = useSelector(state => state.todo.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTodo({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="App">
            <h1>Todo list</h1>
            <button>Get</button>
            <ul>
                {todos.map(todo => (
                    <li key = {todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
