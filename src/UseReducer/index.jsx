import React, { useReducer } from 'react'
import './useReducer.css'

const initial = [
    {
        id: 1,
        title: 'Todo 1',
        complete: false
    },
    {
        id: 2,
        title: 'Todo 2',
        complete: false
    },
    {
        id: 3,
        title: 'Todo 3',
        complete: false
    }
]


const reducer = (state, action) => {
    switch (action.type) {
        case 'SWITCH':
            let newState = state.map((todo) => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)
            localStorage.setItem('todos',JSON.stringify(newState))
            return newState

        default: return state;
    }
}


const UseReducer = () => {

    const [todos, dispatch] = useReducer(reducer, initial)

    const switchAction = (todo) => {
        dispatch({ type: 'SWITCH', id: todo.id })
    }

    return (

        <>
            <h3>Reducer</h3>

            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <label>
                            <input type="checkbox"
                                checked={todo.complete}
                                onChange={() => switchAction(todo)}
                            />

                            <h4>{todo.title}</h4>
                        </label>
                    </div>
                ))
            }

            <p>{JSON.stringify(todos, null, '\n')}</p>
            <hr />

        </>

    )
}

export default UseReducer

