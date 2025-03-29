const NeuralNetwork = artifacts.require("NeuralNetwork");

module.exports = async function (deployer) {
  await deployer.deploy(NeuralNetwork);
};
