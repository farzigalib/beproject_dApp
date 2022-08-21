const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const createStatUpContractFactory = await hre.ethers.getContractFactory(
    "CreateStartUp"
  );
  const createStatUpContract = await createStatUpContractFactory.deploy();
  await createStatUpContract.deployed();

  console.log("Contract deployed to:", createStatUpContract.address);
  console.log("Contract deployed by:", owner.address);

  let startupCount;
  startupCount = await createStatUpContract.getTotalStartUp();
  console.log(startupCount.toNumber());

  let createStartUp;
  createStartUp = await createStatUpContract.createstartup(
    "careerlabs",
    "careerlab@gmail.com",
    "edutech startup",
    "www.careerlab.com",
    5
  );
  await createStartUp.wait();

  createStartUp = await createStatUpContract.connect(randomPerson).createstartup(
    "careerlabs2",
    "careerlab2@gmail.com",
    "edutech startup 2",
    "www.careerlab2.com",
    52
  );
  await createStartUp.wait();

  startupCount = await createStatUpContract.getTotalStartUp();
  console.log(startupCount.toNumber());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
