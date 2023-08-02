const TodoList = ({ list, remove }) => {
	return (
		<>
			{list?.length > 0 ? (
				<ul className="todo-list">
					{list.map((entry, index) => (
						<div className="flex justify-between items-center border border-l-3 border-purple-300 w-96 mb-2 rounded-md">
							<div className="px-2 py-1">
								<li key={index}> {entry} </li>
							</div>
							<div>
								<button
									className="border-l-2 px-2 py-1 text-red-500 w-20"
									onClick={() => {
										remove(entry);
									}}
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</ul>
			) : (
				<div className="empty">
					<p>No task found</p>
				</div>
			)}
		</>
	);
};

export default TodoList;
