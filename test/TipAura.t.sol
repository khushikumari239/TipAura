// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "forge-std/Test.sol";
import "../src/TipAura.sol";

contract TipAuraTest is Test {
    TipAura tipAura;

    function setUp() public {
        tipAura = new TipAura();
    }

    function testSendTip() public {
        address to = address(0x123);
        tipAura.sendTip(to);
        assertEq(tipAura.getTips(to), 1);
    }
}
