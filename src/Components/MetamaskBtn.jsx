import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ethers } from "ethers";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Metamask = () => {
	// const [walletAddress, setWalletAddress] = useState("");
	// const [walletAddress, setWalletAddress] = useState({ maskAcc: "" });
	const [cookies] = useCookies([]);
	const navigate = useNavigate();

	async function requestAccount() {
		console.log("Requesting account...");
		const generateError = (error) =>
			toast.error(error, {
				position: "bottom-right",
			});

		if (window.ethereum) {
			console.log("detected");

			try {
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				const header = accounts[0];
				console.log(typeof accounts[0]);
				console.log(header);
				// axios
				// 	.post(
				// 		"http://localhost:9000/mask",
				// 		{
				// 			header,
				// 		},
				// 		{ withCredentials: true }
				// 	)
				// 	.then((response) => {
				// 		navigate("/");
				// 	});
			} catch (error) {
				console.log(error);
			}
		} else {
			alert("Meta Mask not detected");
		}
	}

	async function connectWallet() {
		if (typeof window.ethereum !== "undefined") {
			await requestAccount();

			const provider = new ethers.providers.Web3Provider(window.ethereum);
		}
	}
	return (
		<div>
			<div>
				<button onClick={requestAccount}>Login with metamask</button>
			</div>
		</div>
	);
};

export default Metamask;
