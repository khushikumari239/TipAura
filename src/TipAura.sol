// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TipAura {
    // Track number of tips per address
    mapping(address => uint256) public tipsReceived;

    // Send tip to another address
    function sendTip(address _to) public {
        tipsReceived[_to] += 1;
    }

    // Get tip count for a user
    function getTips(address _user) public view returns (uint256) {
        return tipsReceived[_user];
    }
}
