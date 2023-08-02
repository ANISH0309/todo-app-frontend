import React from "react";
import { useState } from "react";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

// import "./App.css";

const TodoSection = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	const addTodo = () => {
		if (todo !== "") {
			setTodos([...todos, todo]);
			setTodo("");
		}
	};

	const deleteTodo = (text) => {
		const newTodos = todos.filter((todo) => {
			return todo !== text;
		});
		setTodos(newTodos);
	};

	return (
		<div className="container mx-auto px-4">
			<div>
				<h1 className="text-4xl text-center mt-12">React Todo App</h1>
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="mt-6">
					<div>
						<TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
					</div>
				</div>
				<div className="mt-6">
					<TodoList list={todos} remove={deleteTodo} />
				</div>
			</div>
		</div>
	);
};

export default TodoSection;
