// Connect to Web3.js
const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// ABI and contract address
const contractABI = [/* ABI from Remix */];
const contractAddress = '0xYourContractAddress';
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Predict function that calls the contract
function predict() {
    const inputData = document.getElementById('inputData').value;
    const inputArray = JSON.parse(inputData);  // Parse input as JSON (28x28 matrix)

    contract.methods.predict(inputArray).call()
        .then(result => {
            document.getElementById('predictionResult').innerText = `Prediction: ${result}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
