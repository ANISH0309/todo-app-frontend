import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";

const Register = () => {
	const [cookies] = useCookies(["cookie-name"]);
	const navigate = useNavigate();
	useEffect(() => {
		if (cookies.jwt) {
			navigate("/");
		}
	}, [cookies, navigate]);

	const [values, setValues] = useState({ email: "", password: "" });
	const generateError = (error) =>
		toast.error(error, {
			position: "bottom-right",
		});

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await axios.post(
				"http://localhost:9000/register",
				{
					...values,
				},
				{ withCredentials: true }
			);
			console.log(data);

			if (data) {
				if (data.errors) {
					const { email, password } = data.errors;
					console.log("error from register.jsx");
					if (email) generateError(email);
					else if (password) generateError(password);
				} else {
					navigate("/");
					console.log("no error");
				}
			}
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<div className="container mx-auto px-4">
			<Navbar />
			<div className="flex items-center justify-center mt-36">
				<div className="flex flex-col p-5 border border-purple-300 rounded-md">
					<div>
						<h2 className="text-3xl mb-7 text-center">Register Account</h2>
					</div>
					<div>
						<form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
							<div className="text-sm mb-4">
								<label htmlFor="email">Email</label>

								<input
									type="email"
									name="email"
									placeholder="Email"
									className="ml-3 border border-purple-300 rounded-md outline-none text-purple-700 w-auto p-1"
									onChange={(e) =>
										setValues({
											...values,
											[e.target.name]: e.target.value,
										})
									}
								/>
							</div>
							<div className="text-sm mb-2">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									placeholder="Password"
									name="password"
									className="ml-3 border border-purple-300 rounded-md outline-none text-purple-700 w-auto p-1"
									onChange={(e) =>
										setValues({ ...values, [e.target.name]: e.target.value })
									}
								/>
							</div>
							<button
								className="flex justify-center p-1 mx-auto w-24 my-6 h-auto border border-purple-300 bg-purple-200 rounded-md"
								type="submit"
							>
								Submit
							</button>
							<div className="text-center">
								Already have an account?
								<Link className="text-purple-700 ml-3" to="/login">
									Login
								</Link>
							</div>
						</form>
					</div>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Register;
