const main = async () => {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with account: ", deployer.address);

    const createStartUpContractFactory = await hre.ethers.getContractFactory("CreateStartUp");
    const createStartUpContract = await createStartUpContractFactory.deploy();
    await createStartUpContract.deployed();

    console.log("CreateStartUp address: ", createStartUpContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();