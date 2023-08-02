const TodoInput = ({ todo, setTodo, addTodo }) => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex justify-between items-center outline-none border border-purple-300 w-96 rounded-md">
				<input
					type="text"
					name="todo"
					value={todo}
					className="outline-none bg-transparent px-2 py-1 w-full"
					placeholder="Create a new todo"
					onChange={(e) => {
						setTodo(e.target.value);
					}}
				/>
				<button
					className="border-l-2 px-2 py-1 text-green-500 w-24"
					onClick={addTodo}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default TodoInput;
