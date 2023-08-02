import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Logout from "./Logout";
import Metamask from "./MetamaskBtn";

const Navbar = () => {
	const navigate = useNavigate();
	const [display, setDisplay] = useState(0);

	const [cookies, setCookie, removeCookie] = useCookies([]);

	useEffect(() => {
		if (cookies.jwt) {
			setDisplay(1);
		}
	}, [cookies, navigate]);

	return (
		<div className="container mx-auto px-4 mt-5">
			<div className="flex justify-end mr-8 mt-8">
				<div
					className={
						display !== 0
							? "flex justify-center items-center border border-purple-300 px-4 rounded-md text-sm py-1"
							: "hidden"
					}
				>
					<Logout />
				</div>
				<div
					className={
						display === 0
							? "flex justify-center items-center border border-purple-300 px-4 rounded-md text-sm py-1"
							: "hidden"
					}
				>
					<Metamask />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
