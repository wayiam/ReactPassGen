import { useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("Your secure password here");
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  

  function generatePassword() {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charsetNumbers = "0123456789";
    let charsetSpecial = "!@#$%^&*()_+";
    let password = "";
    let charsetToUse = "";

    if (includeLetters) charsetToUse += charset;
    if (includeNumbers) charsetToUse += charsetNumbers;
    if (includeSpecial) charsetToUse += charsetSpecial;

    for (let i = 0; i < length; i++) {
      password += charsetToUse.charAt(
        Math.floor(Math.random() * charsetToUse.length)
      );
    }

    setPassword(password || "Select at least one option!");
  }

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Password Generator
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Generated Password
          </label>
          <div className="flex items-center">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-grow p-3 border rounded-l-lg bg-gray-100 text-gray-700 focus:outline-none"
            />
            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Copy
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
              generatePassword();
            }}
            className="w-full accent-purple-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Include Characters
          </label>
          <div className="grid grid-cols-3 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeLetters}
                onChange={(e) => {
                  setIncludeLetters(e.target.checked);
                  generatePassword();
                }}
                className="h-4 w-4 text-purple-500 focus:ring-purple-300"
              />
              <span className="text-gray-700">Letters</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => {
                  setIncludeNumbers(e.target.checked);
                  generatePassword();
                }}
                className="h-4 w-4 text-purple-500 focus:ring-purple-300"
              />
              <span className="text-gray-700">Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeSpecial}
                onChange={(e) => {
                  setIncludeSpecial(e.target.checked);
                  generatePassword();
                }}
                className="h-4 w-4 text-purple-500 focus:ring-purple-300"
              />
              <span className="text-gray-700">Special</span>
            </label>
          </div>
        </div>

        <button
          onClick={()=>generatePassword()}
		
          className="w-full bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
