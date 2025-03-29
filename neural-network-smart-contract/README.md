# Neural Network Smart Contract Integration

This project demonstrates the integration of a neural network model with a smart contract on the Ethereum blockchain using Web3.js.

## Project Structure:
- `/ai_model/`: Contains Python files for training the neural network.
- `/smart_contract/`: Contains the Solidity contract for storing the model weights and making predictions.
- `/web3_integration/`: Contains frontend files for interacting with the smart contract.

## Setup Instructions:

1. **Train the AI model**: 
    - Navigate to the `ai_model/` directory.
    - Install Python dependencies with `pip install -r requirements.txt`.
    - Train the model with `python model.py`.

2. **Deploy the smart contract**:
    - Install Truffle and deploy the contract using `truffle migrate`.

3. **Run the web interface**:
    - Open `index.html` in your browser.
    - Enter input data (28x28 matrix) and click "Predict" to get the result.

## Dependencies:
- **TensorFlow** for training the neural network.
- **Solidity** for the smart contract.
- **Web3.js** for interacting with Ethereum.
