// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    //state variable permanently stored in contact storage
    uint totalWaves;
    address lastAdd;

    constructor() {
        console.log("ok this is actually dope!!!!");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
        lastAdd=msg.sender;
    }
     function getTotalWaves() public view returns (uint,address) {
        console.log("We have %d total waves!", totalWaves);
        console.log("last address :js",lastAdd);
        return (totalWaves,lastAdd);
    }
}
