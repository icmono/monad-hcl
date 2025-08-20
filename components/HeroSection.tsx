'use client';

import { Server, Cpu, HardDrive, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(131, 110, 249, 0.1), transparent)' }}
      />
      
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#836EF9' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#836EF9' }}
        />
      </div>

      <div className="section-padding relative z-10 text-center py-20">
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Server className="w-20 h-20" style={{ color: '#836EF9' }} />
              <div className="absolute -top-2 -right-2">
                <Zap className="w-6 h-6" style={{ color: '#00FF88' }} />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">Monad</span>{' '}
            <span style={{ color: '#FBFAF9' }}>HCL</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#A8A9B4' }}>
            Hardware Compatibility List for Monad Testnet Validators
          </p>

          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#A8A9B4' }}>
            Community-driven resource for optimal validator performance. 
            Find tested and verified hardware configurations for running Monad nodes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#requirements"
              className="btn-primary flex items-center gap-2"
            >
              <Cpu className="w-5 h-5" />
              View Requirements
            </a>
            <a
              href="#cpu"
              className="btn-secondary flex items-center gap-2"
            >
              <HardDrive className="w-5 h-5" />
              Browse Hardware
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div 
              className="p-6 rounded-lg"
              style={{ 
                backgroundColor: 'rgba(26, 28, 27, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(131, 110, 249, 0.2)'
              }}
            >
              <Cpu className="w-8 h-8 mb-3" style={{ color: '#836EF9' }} />
              <h3 className="text-lg font-semibold mb-2">High Performance</h3>
              <p className="text-sm" style={{ color: '#A8A9B4' }}>
                16+ cores, 4.5GHz+ base clock for optimal consensus performance
              </p>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ 
                backgroundColor: 'rgba(26, 28, 27, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(131, 110, 249, 0.2)'
              }}
            >
              <HardDrive className="w-8 h-8 mb-3" style={{ color: '#836EF9' }} />
              <h3 className="text-lg font-semibold mb-2">Fast Storage</h3>
              <p className="text-sm" style={{ color: '#A8A9B4' }}>
                PCIe Gen4+ NVMe SSDs with 1M+ IOPS for state management
              </p>
            </div>

            <div 
              className="p-6 rounded-lg"
              style={{ 
                backgroundColor: 'rgba(26, 28, 27, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(131, 110, 249, 0.2)'
              }}
            >
              <Zap className="w-8 h-8 mb-3" style={{ color: '#836EF9' }} />
              <h3 className="text-lg font-semibold mb-2">Optimized</h3>
              <p className="text-sm" style={{ color: '#A8A9B4' }}>
                CPU tuning guides for maximum validator efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}