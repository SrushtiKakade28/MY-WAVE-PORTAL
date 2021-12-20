
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    //compile our contract
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    //deploy the contract
    const waveContract = await waveContractFactory.deploy();
    //wait for the contract to be mined
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    //to see who is deploying our contract
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    
    
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
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