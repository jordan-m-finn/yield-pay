// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// TODO: Define Gnosis Safe interface
// Sprint 2, Day 1-3

interface ISafe {
    enum Operation {
        Call,
        DelegateCall
    }
    
    function execTransactionFromModule(
        address to,
        uint256 value,
        bytes calldata data,
        Operation operation
    ) external returns (bool);
    
    function isModuleEnabled(address module) external view returns (bool);
    function getOwners() external view returns (address[] memory);
}
