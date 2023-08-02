import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Logout = () => {
	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies([]);

	const logOut = () => {
		removeCookie("jwt");
		navigate("/login");
	};

	return <button onClick={logOut}>Log out</button>;
};

export default Logout;
