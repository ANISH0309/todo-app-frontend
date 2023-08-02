import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import { toast, ToastContainer } from "react-toastify";

// import "./App.css";

const TodoSection = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies([]);
	useEffect(() => {
		const verifyUser = async () => {
			if (!cookies.jwt) {
				navigate("/login");
			}
			// else {
			// 	try {
			// 		const { data } = await axios
			// 			// const { data } = await axios
			// 			.get(
			// 				"http://localhost:9000",
			// 				{},
			// 				{
			// 					withCredentials: true,
			// 				}
			// 			)
			// 			.then((response) => {
			// 				console.log("from try");
			// 				console.log(response);
			// 			})
			// 			.catch(() => {
			// 				console.log("error from catch");
			// 			});
			// 	} catch {
			// 		if (!data.status) {
			// 			removeCookie("jwt");
			// 			navigate("/login");
			// 		}
			// 	}
			// }
		};

		verifyUser();
	}, [cookies, navigate, removeCookie]);

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
