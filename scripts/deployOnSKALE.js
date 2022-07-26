const hre = require("hardhat");

async function main() {


  const HelloSkale = await hre.ethers.getContractFactory("HelloSKALE");
  const helloskale = await HelloSkale.deploy();

  await helloskale.deployed();

  console.log("HelloSKALE.sol deployed to:", helloskale.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
