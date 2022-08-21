// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract CreateStartUp {
    uint256 totalCount;

    event createNewStartUp(
        address indexed from,
        uint256 timestamp,
        string startUpName,
        string email,
        string discription,
        string fileURL,
        uint totalETH
    );

    struct StartUp {
        address creater; // The address of the user who create.
        string startUpName; // name of the startUp.
        string email; // email of the creater who create startup.
        string discription; // discription of startup.
        string fileURL; // url of the startup file.
        uint totalETH; // target ammount of startUp.
    }

    StartUp[] startups;

    constructor() {
        console.log("burgirr");
    }

    function createstartup(
        string memory _startUpName,
        string memory _email,
        string memory _discription,
        string memory _fileURL,
        uint _totalETH
    ) public {
        totalCount += 1;
        console.log("%s startUpName %s email %s discription %d fileURL %s totalETH %d ETH", msg.sender, _startUpName, _email);
        console.log("discription %d fileURL %s totalETH %d ETH", _discription, _fileURL, _totalETH);
        
        startups.push(StartUp(msg.sender, _startUpName, _email, _discription, _fileURL, _totalETH));

        emit createNewStartUp(msg.sender, block.timestamp, _startUpName, _email, _discription, _fileURL, _totalETH);
    }

    function getAllStartUp() public view returns (StartUp[] memory) {
        return startups;        
    }

    function getTotalStartUp() public view returns (uint256) {
        console.log("We have %d total StartUp!", totalCount);
        return totalCount;
    }
}