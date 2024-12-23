	import { useState } from "react";
	import reactLogo from "./assets/react.svg";
	import viteLogo from "/vite.svg";
	import "./App.css";

	function App() {
	const [length, setLength] = useState(16);
	const [password, setPassword] = useState("1234 (lmao)");
	const [includeLetters, setIncludeLetters] = useState(false);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSpecial, setIncludeSpecial] = useState(false);


	function generatePassword() {
		let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let charsetNumbers = "0123456789";
		let charsetSpecial = "!@#$%^&*()_+";
		let password = "";
		let charsetToUse = "";
		if (includeLetters) {
		charsetToUse += charset;
		}
		if (includeNumbers) {
			charsetToUse += charsetNumbers;
		}
		if(includeSpecial){
			charsetToUse += charsetSpecial;
		}
		for (let i = 0; i < length; i++) {
		password += charsetToUse.charAt(
			Math.floor(Math.random() * charsetToUse.length)
		);
		}
		setPassword(password);
	}

	return (
		<>
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-violet-400 to-blue-500 p-6">
			<h1 className="text-4xl font-semibold text-white mb-6">
			Password Generator
			</h1>

			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
			<div className="mb-4">
				<label
				htmlFor="password"
				className="block text-gray-700 font-medium mb-2"
				>
				Generated Password
				</label>
				<input
				id="password"
				type="text"
				value={password}
				className="w-full p-3 bg-gray-100 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				readOnly
				/>
			</div>

			<div className="mb-4">
				<label
				htmlFor="length"
				className="block text-gray-700 font-medium mb-2"
				>
				Password Length
				</label>
				<input
				type="range"
				id="length"
				min="8"
				max="32"
				value={length}
				className="w-full h-2 bg-indigo-500 rounded-full cursor-pointer"
				onChange={(e) => setLength(e.target.value)}
				/>
				<div className="flex justify-between text-gray-700">
				<span>Min: 8</span>
				<span>Current: {length}</span>
				<span>Max: 32</span>
				</div>
			</div>

			<div className="mb-6">
				<label className="block text-gray-700 font-medium mb-2">
				Include Characters
				</label>
				<div className="flex items-center space-x-4">
				<div className="flex items-center space-x-2">
					<input
					type="checkbox"
					id="alphabets"
					className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
					value={includeLetters}
					onChange={(e) => setIncludeLetters(e.target.checked)}
					/>
					<label htmlFor="alphabets" className="text-gray-700">
					Alphabets
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<input
					type="checkbox"
					id="numbers"
					className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
					value={includeNumbers}
					onChange={(e) => setIncludeNumbers(e.target.checked)}
					/>
					<label htmlFor="numbers" className="text-gray-700">
					Numbers
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<input
					type="checkbox"
					id="specialChars"
					className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
					value={includeSpecial}
					onChange={(e) => setIncludeSpecial(e.target.checked)}
					/>
					<label htmlFor="specialChars" className="text-gray-700">
					Special Characters
					</label>
				</div>
				</div>
			</div>
			<div className="flex justify-center">
				<button
				className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-600
				focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
				onClick={(e) => {
					generatePassword();
				}}
				>
				Generate Password
				</button>
			</div>
			</div>
		</div>
		</>
	);
	}

	export default App;
