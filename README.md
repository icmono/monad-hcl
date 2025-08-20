# 🚀 Monad Hardware Compatibility List (HCL)

A comprehensive, community-maintained hardware compatibility list for Monad validators. This resource helps validators choose optimal hardware configurations for running Monad nodes on testnet and mainnet.

[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)

## 🎯 Overview

The Monad HCL provides:
- ✅ Tested and verified hardware configurations
- 📊 Performance benchmarks from real validators
- 🔧 CPU tuning guides for optimal performance
- 🔥 Firewall PPS policy configuration for UDP flood protection
- ⚠️ Known issues and compatibility warnings
- 💡 Best practices from the community

## ✨ Features

- **Hardware Requirements**: Baseline and recommended specifications
- **CPU Database**: Community-tested CPU models with performance metrics
- **Storage Benchmarks**: NVMe SSD performance comparisons
- **Enterprise Solutions**: Pre-built server configurations
- **Custom Builds**: Community-tested custom server builds
- **CPU Tuning Guide**: Optimize for handling skipped blocks and high Tx load
- **Firewall Configuration**: PPS limits for UDP flood protection
- **Software Requirements**: OS and kernel version requirements

## 💻 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/b-harvest/monad-hcl.git
cd monad-hcl

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Project Structure
```
monad-hcl/
├── app/              # Next.js app directory
│   ├── page.tsx      # Main page component
│   ├── layout.tsx    # Layout component
│   ├── globals.css   # Global styles
│   └── favicon.ico   # Monad favicon
├── lib/             
│   └── data.ts      # Hardware data and configurations
├── public/          # Static assets
│   └── favicon.ico  # Public favicon
├── components/      # React components (if any)
└── README.md        # This file
```

## 🏗️ Building for Production

### Build the project

```bash
# Build for production
npm run build

# The build output will be in the .next folder
```

### Test the production build locally

```bash
# Start the production server
npm run start

# Open http://localhost:3000
```



## 🤝 Contributing

### Adding Hardware Data

Edit `lib/data.ts` to add new hardware:

#### Add a CPU
```typescript
{
  id: 'amd-ryzen-9-7950x',
  manufacturer: 'AMD',
  model: 'Ryzen 9 7950X',
  baseClock: '4.5 GHz',
  maxBoostClock: '5.7 GHz',
  cores: 16,
  threads: 32,
  tdp: '170W',
  numaNodes: 1,
  avgTemp: '75°C',
  recommended: true,
  category: 'desktop'
}
```

#### Add Storage
```typescript
{
  id: 'samsung-990-pro',
  manufacturer: 'Samsung',
  model: '990 PRO',
  interface: 'PCIe 4.0 x4',
  capacity: '2TB',
  sequentialRead: '7,450 MB/s',
  sequentialWrite: '6,900 MB/s',
  randomRead: '1,200K IOPS',
  randomWrite: '1,550K IOPS',
  recommended: true,
  category: 'consumer',
  generation: 'gen4'
}
```

#### Add Enterprise Server
```typescript
{
  id: 'supermicro-as-1015a-mt',
  manufacturer: 'Supermicro',
  model: 'AS-1015A-MT',
  cpu: '1x AMD EPYC 4584PX\n16C/32T 120W',
  memory: '2x DDR5-4800\n32GB ECC UDIMM',
  storage: 'Samsung PM9A3\nSSD 1.9TB',
  network: '10GbE NIC',
  notes: '+ 990 PRO 4TB\n10GbE NIC',
  recommended: true,
  category: 'enterprise'
}
```

#### Add Custom Server Build
```typescript
{
  id: 'custom-ryzen-9950x',
  cpu: 'AMD Ryzen 9 9950X',
  motherboard: 'ASRock B650M\nPro X3D',
  memory: 'SK Hynix DDR5-5600\n32GB × 2',
  storage: 'Samsung 990 PRO\n2TB × 2',
  network: 'Intel X540-T2\n10GbE NIC',
  notes: 'High-end desktop\nbuild',
  recommended: true,
  category: 'desktop'
}
```

### Submitting Changes

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request


---

**Questions?** Open an issue or reach out on [Discord](https://discord.gg/monaddev).

Built with ❤️ by the Monad Community