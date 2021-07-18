import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from '../common/Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchTodos = async () => {
        try {
            const res = await axios.get("http://localhost:3030/api/todos")
            setTodos(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])


    return isLoading ? <h3>Loading Todos...</h3> : todos.length ? (
        <>
            <h3>Todos List</h3>
            <table className="table table-hover mt-3">
                <thead>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {todos.map(todo => (<Todo key={todo._id} todo={todo} />))}
                </tbody>
            </table>
        </>
    ) : (<div> There are no Todos yet!</div>)
}
