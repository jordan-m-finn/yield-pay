// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// TODO: Define Blend Protocol interface
// Sprint 2, Day 1-3

interface IBlendProtocol {
    function getAccruedYield(address safe) external view returns (uint256);
    function harvest(uint256 amount) external returns (bool);
    function yieldToken() external view returns (address);
    function getCurrentAPR() external view returns (uint256);
}
