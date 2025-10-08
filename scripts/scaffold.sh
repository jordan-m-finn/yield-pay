#!/bin/bash

# YieldPay Project Scaffold Script
# This script creates the entire project structure with placeholder files
# Run once at project start: ./scripts/scaffold.sh

set -e  # Exit on error

echo "🚀 YieldPay Project Scaffold"
echo "============================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -f "README.md" ]; then
    echo "⚠️  Warning: This doesn't look like the project root"
    echo "Creating project structure anyway..."
fi

echo "${BLUE}Creating directory structure...${NC}"

# Create all directories
mkdir -p frontend/app/{onboarding/{connect,subscriptions,deposit},dashboard/components,subscriptions,transactions,settings,api/webhooks/alchemy}
mkdir -p frontend/components/{ui,wallet,layout}
mkdir -p frontend/lib
mkdir -p frontend/hooks
mkdir -p frontend/public/logos
mkdir -p frontend/styles

mkdir -p convex

mkdir -p contracts/{src/interfaces,test/mocks,script,lib}

mkdir -p docs

mkdir -p scripts

mkdir -p .github/workflows
mkdir -p .github/ISSUE_TEMPLATE

mkdir -p .vscode

echo "${GREEN}✓ Directories created${NC}"
echo ""

echo "${BLUE}Creating frontend files...${NC}"

# Frontend - Root files
cat > frontend/package.json << 'EOF'
{
  "name": "yieldpay-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "convex": "^1.6.0",
    "@rainbow-me/rainbowkit": "^2.0.0",
    "wagmi": "^2.0.0",
    "viem": "^2.0.0",
    "recharts": "^2.10.0",
    "lucide-react": "^0.294.0",
    "framer-motion": "^10.16.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
EOF

cat > frontend/next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
EOF

cat > frontend/tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // YieldPay brand colors
        primary: {
          DEFAULT: '#4F46E5', // indigo-600
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
    },
  },
  plugins: [],
}
export default config
EOF

cat > frontend/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/hooks/*": ["./hooks/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

cat > frontend/.env.local.example << 'EOF'
# Convex
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Blockchain
NEXT_PUBLIC_ALCHEMY_ID=your-alchemy-key
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-wc-project-id

# Contract Addresses (update after deployment)
NEXT_PUBLIC_HARVEST_MODULE_ADDRESS=0x...

# Network
NEXT_PUBLIC_CHAIN_ID=8453
NEXT_PUBLIC_NETWORK_NAME=base

# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Blend API
NEXT_PUBLIC_BLEND_API_URL=https://api.blend.money
EOF

# Frontend - App files
cat > frontend/app/layout.tsx << 'EOF'
// TODO: Implement root layout with Convex and wagmi providers
// Sprint 1, Day 1-2
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YieldPay - Your Subscriptions, Paid Forever',
  description: 'Deposit once. Your crypto generates yield. The yield pays your subscriptions automatically.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: Add ConvexProvider */}
        {/* TODO: Add WagmiConfig */}
        {/* TODO: Add RainbowKitProvider */}
        {children}
      </body>
    </html>
  )
}
EOF

cat > frontend/app/page.tsx << 'EOF'
// TODO: Implement landing page
// Sprint 1, Day 8-9
export default function Home() {
  return (
    <main>
      <h1>YieldPay Landing Page</h1>
      {/* TODO: Hero section */}
      {/* TODO: How it works */}
      {/* TODO: Social proof */}
    </main>
  )
}
EOF

cat > frontend/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* TODO: Add custom global styles */
/* Sprint 1, Day 6-7 */
EOF

# Component placeholders
cat > frontend/components/ui/Button.tsx << 'EOF'
// TODO: Implement Button component
// Sprint 1, Day 5
// See Design System for variants: primary, secondary, ghost

export function Button() {
  return <button>TODO: Implement Button</button>
}
EOF

cat > frontend/components/ui/Card.tsx << 'EOF'
// TODO: Implement Card component
// Sprint 1, Day 5

export function Card() {
  return <div>TODO: Implement Card</div>
}
EOF

cat > frontend/lib/wagmi.ts << 'EOF'
// TODO: Configure wagmi with Base network
// Sprint 1, Day 3-4
// import { createConfig, configureChains } from 'wagmi'
// import { base, baseSepolia } from 'wagmi/chains'

export const wagmiConfig = {} // TODO: Implement
EOF

cat > frontend/lib/contracts.ts << 'EOF'
// TODO: Add contract ABIs and addresses
// Sprint 2, Day 10 (after deployment)

export const HARVEST_MODULE_ADDRESS = process.env.NEXT_PUBLIC_HARVEST_MODULE_ADDRESS || ''

export const HarvestModuleABI = [] // TODO: Add ABI after compilation
EOF

echo "${GREEN}✓ Frontend files created${NC}"
echo ""

echo "${BLUE}Creating Convex files...${NC}"

cat > convex/package.json << 'EOF'
{
  "name": "yieldpay-convex",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "convex dev",
    "deploy": "convex deploy"
  },
  "dependencies": {
    "convex": "^1.6.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
EOF

cat > convex/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ES2021"],
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["./**/*"],
  "exclude": ["node_modules", "_generated"]
}
EOF

cat > convex/schema.ts << 'EOF'
// TODO: Implement complete database schema
// Sprint 3, Day 1-2
// See DATABASE.md for full schema

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    walletAddress: v.string(),
    safeAddress: v.optional(v.string()),
    isActive: v.boolean(),
    automationEnabled: v.boolean(),
    hasCompletedOnboarding: v.boolean(),
    hasAcknowledgedRisks: v.boolean(),
    createdAt: v.number(),
    lastLoginAt: v.number(),
    lastActivityAt: v.number(),
  })
    .index("by_wallet", ["walletAddress"])
    .index("by_safe", ["safeAddress"])
    .index("by_active", ["isActive"]),

  // TODO: Add remaining tables
  // - userConfigs
  // - subscriptions
  // - userSubscriptions
  // - transactions
  // - yieldSnapshots
  // - notifications
  // - priceHistory
});
EOF

cat > convex/users.ts << 'EOF'
// TODO: Implement user queries and mutations
// Sprint 3, Day 3-5
// See API.md for complete list

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    // TODO: Implement
    return null;
  },
});

export const createUser = mutation({
  args: {
    walletAddress: v.string(),
  },
  handler: async (ctx, args) => {
    // TODO: Implement
    return "user_id";
  },
});

// TODO: Add all other user queries and mutations
EOF

cat > convex/crons.ts << 'EOF'
// TODO: Implement background workers
// Sprint 3, Day 8-9

import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// TODO: Add cron jobs
// - Yield snapshot creation (every 5 min)
// - Price checking (daily at 6 AM)
// - Harvest execution check (every 15 min)
// - Old data cleanup (weekly)

export default crons;
EOF

echo "${GREEN}✓ Convex files created${NC}"
echo ""

echo "${BLUE}Creating smart contract files...${NC}"

cat > contracts/foundry.toml << 'EOF'
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc_version = "0.8.24"
optimizer = true
optimizer_runs = 200

[profile.default.fuzz]
runs = 256

[rpc_endpoints]
base = "${BASE_RPC_URL}"
base_sepolia = "${BASE_SEPOLIA_RPC_URL}"

[etherscan]
base = { key = "${BASESCAN_API_KEY}" }
EOF

cat > contracts/.env.example << 'EOF'
# Deployment
PRIVATE_KEY=your-private-key-here
BASE_RPC_URL=https://mainnet.base.org
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
BASESCAN_API_KEY=your-basescan-api-key

# Contract Addresses
BLEND_PROTOCOL_ADDRESS=0x...
YIELDPAY_EXECUTOR_ADDRESS=0x...
EOF

cat > contracts/src/HarvestAutomatorModule.sol << 'EOF'
// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// TODO: Implement HarvestAutomatorModule (Gnosis Safe Module)
// Sprint 2, Day 1-3
// See SMART_CONTRACTS.md for complete specification

// This is a Gnosis Safe Module, not a standalone contract
// It works with existing Blend Safes

contract HarvestAutomatorModule {
    string public constant VERSION = "1.0.0";
    
    // TODO: Implement module logic
    // - Implement Module interface from Gnosis Safe
    // - Add executeHarvest() function
    // - Add single owner verification
    // - Add authorized executor pattern
    // - Add rate limiting
}
EOF

cat > contracts/src/interfaces/IBlendProtocol.sol << 'EOF'
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
EOF

cat > contracts/src/interfaces/ISafe.sol << 'EOF'
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
EOF

cat > contracts/test/HarvestAutomatorModule.t.sol << 'EOF'
// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "forge-std/Test.sol";
import "../src/HarvestAutomatorModule.sol";

// TODO: Implement comprehensive tests
// Sprint 2, Day 6-7
// Target 95%+ coverage

contract HarvestAutomatorModuleTest is Test {
    HarvestAutomatorModule module;
    
    function setUp() public {
        // TODO: Setup test environment
    }
    
    function testExecuteHarvest() public {
        // TODO: Implement test
        assertTrue(false, "TODO: Implement");
    }
    
    // TODO: Add all test cases from SMART_CONTRACTS.md
}
EOF

cat > contracts/script/Deploy.s.sol << 'EOF'
// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "forge-std/Script.sol";
import "../src/HarvestAutomatorModule.sol";

// TODO: Implement deployment script
// Sprint 2, Day 8

contract DeployModule is Script {
    function run() external {
        // TODO: Implement deployment
    }
}
EOF

echo "${GREEN}✓ Smart contract files created${NC}"
echo ""

echo "${BLUE}Creating documentation files...${NC}"

cat > docs/README.md << 'EOF'
# YieldPay Documentation

This directory contains all technical documentation for YieldPay.

## Documents

- [SRS.md](./SRS.md) - Software Requirements Specification
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical Architecture
- [SMART_CONTRACTS.md](./SMART_CONTRACTS.md) - Smart Contract Specifications
- [DATABASE.md](./DATABASE.md) - Database Schema
- [API.md](./API.md) - API Documentation
- [UI_UX.md](./UI_UX.md) - Design System
- [ROADMAP.md](./ROADMAP.md) - Implementation Roadmap
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Developer Onboarding

## Quick Links

- Frontend: `../frontend/`
- Backend (Convex): `../convex/`
- Smart Contracts: `../contracts/`
EOF

cat > docs/DEVELOPER_GUIDE.md << 'EOF'
# Developer Onboarding Guide

TODO: Complete developer guide (coming next!)

This guide will cover:
- Environment setup
- Running the project locally
- Development workflow
- Testing procedures
- Deployment process
- Contributing guidelines
EOF

echo "${GREEN}✓ Documentation files created${NC}"
echo ""

echo "${BLUE}Creating script files...${NC}"

cat > scripts/setup.sh << 'EOF'
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
EOF

chmod +x scripts/setup.sh

cat > scripts/deploy-contracts.sh << 'EOF'
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
EOF

chmod +x scripts/deploy-contracts.sh

echo "${GREEN}✓ Script files created${NC}"
echo ""

echo "${BLUE}Creating GitHub workflow files...${NC}"

cat > .github/workflows/test-contracts.yml << 'EOF'
name: Test Smart Contracts

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: recursive

      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@v1

      - name: Run tests
        working-directory: ./contracts
        run: |
          forge test -vvv
          forge coverage
EOF

cat > .github/workflows/test-frontend.yml << 'EOF'
name: Test Frontend

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        working-directory: ./frontend
        run: npm install

      - name: Run lint
        working-directory: ./frontend
        run: npm run lint

      - name: Run tests
        working-directory: ./frontend
        run: npm run test
EOF

echo "${GREEN}✓ GitHub workflow files created${NC}"
echo ""

echo "${BLUE}Creating VS Code configuration...${NC}"

cat > .vscode/settings.json << 'EOF'
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[solidity]": {
    "editor.defaultFormatter": "JuanBlanco.solidity"
  },
  "solidity.compileUsingRemoteVersion": "v0.8.24",
  "solidity.formatter": "forge",
  "files.associations": {
    "*.sol": "solidity"
  }
}
EOF

cat > .vscode/extensions.json << 'EOF'
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "JuanBlanco.solidity",
    "bradlc.vscode-tailwindcss",
    "unifiedjs.vscode-mdx"
  ]
}
EOF

echo "${GREEN}✓ VS Code configuration created${NC}"
echo ""

echo "${BLUE}Creating root configuration files...${NC}"

cat > package.json << 'EOF'
{
  "name": "yieldpay",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "frontend",
    "convex"
  ],
  "scripts": {
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:convex\"",
    "dev:frontend": "cd frontend && npm run dev",
    "dev:convex": "cd convex && npx convex dev",
    "build": "npm run build:frontend",
    "build:frontend": "cd frontend && npm run build",
    "test": "npm run test:contracts && npm run test:frontend",
    "test:contracts": "cd contracts && forge test",
    "test:frontend": "cd frontend && npm test",
    "deploy:contracts": "./scripts/deploy-contracts.sh",
    "setup": "./scripts/setup.sh"
  },
  "devDependencies": {
    "concurrently": "^8.2.0"
  }
}
EOF

cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
*.lcov

# Next.js
.next/
out/
build/
dist/

# Convex
convex/_generated/
.convex/

# Foundry
cache/
out/
broadcast/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/*
!.vscode/settings.json
!.vscode/extensions.json
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Misc
.turbo
EOF

cat > README.md << 'EOF'
# YieldPay

> Your subscriptions, paid forever.

Deposit once. Your crypto generates yield. The yield pays your subscriptions automatically.

## Project Status

🚧 **Phase 1 Development** - Following 12-week implementation roadmap

## Quick Start

```bash
# 1. Install dependencies
npm run setup

# 2. Configure environment variables
cp frontend/.env.local.example frontend/.env.local
cp contracts/.env.example contracts/.env
# Edit the .env files with your keys

# 3. Start development
npm run dev
```

## Project Structure

- `frontend/` - Next.js 14 application
- `convex/` - Convex backend (database + API)
- `contracts/` - Foundry smart contracts
- `docs/` - Technical documentation
- `scripts/` - Automation scripts

## Documentation

See [docs/](./docs/) for complete technical documentation:

- [Software Requirements](./docs/SRS.md)
- [Technical Architecture](./docs/ARCHITECTURE.md)
- [Smart Contracts](./docs/SMART_CONTRACTS.md)
- [Database Schema](./docs/DATABASE.md)
- [API Documentation](./docs/API.md)
- [Design System](./docs/UI_UX.md)
- [Implementation Roadmap](./docs/ROADMAP.md)
- [Developer Guide](./docs/DEVELOPER_GUIDE.md)

## Development

```bash
# Run tests
npm test

# Deploy contracts (testnet)
npm run deploy:contracts

# Build for production
npm run build
```

## Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS, wagmi, RainbowKit
- **Backend:** Convex (serverless database + API)
- **Smart Contracts:** Solidity 0.8.24, Foundry
- **Blockchain:** Base L2
- **External:** Blend Money, Gnosis Safe

## License

MIT

## Contact

- Twitter: [@yieldpay](https://twitter.com/yieldpay)
- Discord: [Join our community](https://discord.gg/yieldpay)
EOF

echo "${GREEN}✓ Root configuration files created${NC}"
echo ""

echo "${GREEN}========================================${NC}"
echo "${GREEN}✓ Scaffold Complete!${NC}"
echo "${GREEN}========================================${NC}"
echo ""
echo "📁 Project structure created successfully"
echo ""
echo "${YELLOW}Next steps:${NC}"
echo "1. Run: ${BLUE}npm run setup${NC} (installs dependencies)"
echo "2. Configure environment variables (.env files)"
echo "3. Run: ${BLUE}cd convex && npx convex dev${NC} (set up Convex)"
echo "4. Run: ${BLUE}npm run dev${NC} (start development)"
echo "5. Follow the Implementation Roadmap in docs/ROADMAP.md"
echo ""
echo "${YELLOW}Important files to configure:${NC}"
echo "  - frontend/.env.local (copy from .env.local.example)"
echo "  - contracts/.env (copy from .env.example)"
echo ""
echo "${GREEN}Happy coding! 🚀${NC}"
