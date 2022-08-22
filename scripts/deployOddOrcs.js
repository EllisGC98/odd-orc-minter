const hre = require("hardhat");

async function main() {
 
  const OddOrcs = await hre.ethers.getContractFactory("OddOrcs");
  const oddOrcs= await OddOrcs.deploy(
    "Odd Orcs",
     "ORCS", 
     "ipfs://QmY1gknJBsqsoRRR6tm7LZXdUHPCKmU44gKDdnLne8kgjX/hidden.json"
     );

  await oddOrcs.deployed();
  console.log("OddOrcs deployed to:", oddOrcs.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
