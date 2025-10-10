# YieldPay

> Your subscriptions, paid forever.

Deposit once. Your crypto generates yield. The yield pays your subscriptions automatically.

## Project Status

🚧 **Phase 1 Development** - Following 12-week implementation roadmap

## Quick Start

```bash
# 0. Node version
# Requires Node 22 LTS. Use `nvm use` in repo root (see .nvmrc)

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

- Twitter: [@beatstobits](https://twitter.com/beatstobits)