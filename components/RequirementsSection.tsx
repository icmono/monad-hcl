'use client';

import { Cpu, HardDrive, MemoryStick, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { baselineRequirements } from '@/lib/data';

export default function RequirementsSection() {
  return (
    <section id="requirements" className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Baseline Requirements</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: '#A8A9B4' }}>
          Minimum hardware specifications for running a Monad Testnet validator
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="p-6 rounded-xl card-hover"
            style={{ 
              backgroundColor: '#1A1C1B',
              border: '1px solid rgba(131, 110, 249, 0.2)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-8 h-8" style={{ color: '#836EF9' }} />
              <h3 className="text-xl font-semibold">CPU Requirements</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Cores</p>
                <p className="font-medium">{baselineRequirements.cpu.cores}</p>
              </div>
              
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Clock Speed</p>
                <p className="font-medium">{baselineRequirements.cpu.clockSpeed}</p>
              </div>
              
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Architecture</p>
                <ul className="space-y-1">
                  {baselineRequirements.cpu.architecture.map((arch, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#00FF88' }} />
                      <span className="text-sm">{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Examples</p>
                <p 
                  className="text-sm font-mono p-2 rounded"
                  style={{ backgroundColor: 'rgba(14, 16, 15, 0.5)' }}
                >
                  {baselineRequirements.cpu.examples.join(', ')}
                </p>
              </div>
            </div>
          </div>

          <div 
            className="p-6 rounded-xl card-hover"
            style={{ 
              backgroundColor: '#1A1C1B',
              border: '1px solid rgba(131, 110, 249, 0.2)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MemoryStick className="w-8 h-8" style={{ color: '#836EF9' }} />
              <h3 className="text-xl font-semibold">RAM Requirements</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Minimum</p>
                <p className="text-2xl font-bold" style={{ color: '#FFB84D' }}>
                  {baselineRequirements.ram.minimum}
                </p>
              </div>
              
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Recommended</p>
                <p className="text-2xl font-bold" style={{ color: '#00FF88' }}>
                  {baselineRequirements.ram.recommended}
                </p>
              </div>
              
              <div 
                className="p-4 rounded-lg"
                style={{ 
                  backgroundColor: 'rgba(14, 16, 15, 0.5)',
                  border: '1px solid rgba(131, 110, 249, 0.1)'
                }}
              >
                <p className="text-sm" style={{ color: '#A8A9B4' }}>
                  More RAM allows for better caching and improved validator performance under load
                </p>
              </div>
            </div>
          </div>

          <div 
            className="p-6 rounded-xl card-hover"
            style={{ 
              backgroundColor: '#1A1C1B',
              border: '1px solid rgba(131, 110, 249, 0.2)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <HardDrive className="w-8 h-8" style={{ color: '#836EF9' }} />
              <h3 className="text-xl font-semibold">Storage Requirements</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Execution Disk</p>
                <p className="font-medium">{baselineRequirements.storage.executionDisk}</p>
              </div>
              
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>MonadBFT/OS Disk</p>
                <p className="font-medium">{baselineRequirements.storage.monadBftDisk}</p>
              </div>
              
              <div>
                <p className="text-sm mb-1" style={{ color: '#A8A9B4' }}>Type</p>
                <p className="font-medium" style={{ color: '#836EF9' }}>
                  {baselineRequirements.storage.type}
                </p>
              </div>
              
              <div 
                className="p-3 rounded-lg"
                style={{ 
                  backgroundColor: 'rgba(139, 69, 19, 0.2)',
                  border: '1px solid rgba(202, 138, 4, 0.3)'
                }}
              >
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5" style={{ color: '#FFC107' }} />
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: '#FFC107' }}>Unreliable</p>
                    <p className="text-xs" style={{ color: '#A8A9B4' }}>
                      {baselineRequirements.storage.unreliable[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 p-8 rounded-xl"
          style={{ 
            background: 'linear-gradient(to right, rgba(131, 110, 249, 0.1), rgba(157, 139, 250, 0.1))',
            border: '1px solid rgba(131, 110, 249, 0.2)'
          }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Performance Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {baselineRequirements.storage.performance.map((perf, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: '#00FF88' }} />
                <p className="text-sm">{perf}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}