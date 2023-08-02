import React from "react";

import Logout from "./Logout";

const Navbar = () => {
	return (
		<div className="container mx-auto px-4 mt-5">
			<div className="flex justify-end mr-8 mt-8">
				<div className="flex justify-center items-center border border-purple-300 px-4 rounded-md text-sm py-1">
					<Logout />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
