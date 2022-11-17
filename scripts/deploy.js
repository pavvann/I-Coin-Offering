const { ethers } = require("hardhat");
const {CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
  const cryptoDevContract = await ethers.getContractFactory("CryptoDevToken");
  const deployedContract = await cryptoDevContract.deploy(cryptoDevNFTContract);
  await deployedContract.deployed();
  console.log(`Contract Deployed at Address: ${deployedContract.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })