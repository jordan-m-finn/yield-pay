#!/bin/bash

# Deploy smart contracts to testnet/mainnet

echo "📜 Deploying Smart Contracts"
echo "============================"

cd contracts

# Check environment
if [ -z "$BASE_RPC_URL" ]; then
    echo "Error: BASE_RPC_URL not set"
    exit 1
fi

# Deploy
forge script script/Deploy.s.sol:DeployModule \
    --rpc-url $BASE_RPC_URL \
    --broadcast \
    --verify \
    -vvvv

echo "✓ Deployment complete!"
