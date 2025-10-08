#!/bin/bash

# YieldPay Initial Setup Script
# Run after scaffolding to install dependencies and configure environment

echo "🔧 YieldPay Setup"
echo "================="

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend && npm install && cd ..

# Install Convex
echo "Setting up Convex..."
cd convex && npm install && cd ..

# Install Foundry dependencies
echo "Installing smart contract dependencies..."
cd contracts && forge install && cd ..

echo "✓ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy .env.example files and fill in your keys"
echo "2. Run 'npx convex dev' to set up Convex backend"
echo "3. Follow the Implementation Roadmap to start building"
