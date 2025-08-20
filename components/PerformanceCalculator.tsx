'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Cpu, HardDrive, MemoryStick, Gauge } from 'lucide-react';

export default function PerformanceCalculator() {
  const [cpuCores, setCpuCores] = useState(16);
  const [cpuClock, setCpuClock] = useState(4.5);
  const [ram, setRam] = useState(32);
  const [storageIOPS, setStorageIOPS] = useState(1000);
  
  const calculateScore = () => {
    const cpuScore = (cpuCores / 16) * 25 + (cpuClock / 4.5) * 25;
    const ramScore = Math.min((ram / 32) * 25, 25);
    const storageScore = Math.min((storageIOPS / 1000) * 25, 25);
    return Math.round(cpuScore + ramScore + storageScore);
  };

  const score = calculateScore();
  const getScoreColor = () => {
    if (score >= 90) return 'text-monad-success';
    if (score >= 70) return 'text-monad-purple';
    if (score >= 50) return 'text-monad-warning';
    return 'text-red-500';
  };

  const getScoreLabel = () => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Adequate';
    return 'Below Minimum';
  };

  return (
    <section className="section-padding py-20 bg-gradient-to-b from-monad-bg-light to-monad-bg">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-monad-purple" />
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Performance Calculator</span>
          </h2>
        </div>
        <p className="text-center text-monad-text-dim mb-12">
          Estimate your hardware&apos;s validator performance score
        </p>

        <div className="bg-monad-bg-light rounded-xl p-8 border border-monad-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Cpu className="w-4 h-4 text-monad-purple" />
                CPU Cores
              </label>
              <input
                type="range"
                min="8"
                max="64"
                value={cpuCores}
                onChange={(e) => setCpuCores(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-monad-text-dim mt-1">
                <span>8</span>
                <span className="font-mono text-monad-purple">{cpuCores} cores</span>
                <span>64</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Gauge className="w-4 h-4 text-monad-purple" />
                Base Clock (GHz)
              </label>
              <input
                type="range"
                min="3.0"
                max="6.0"
                step="0.1"
                value={cpuClock}
                onChange={(e) => setCpuClock(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-monad-text-dim mt-1">
                <span>3.0</span>
                <span className="font-mono text-monad-purple">{cpuClock} GHz</span>
                <span>6.0</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <MemoryStick className="w-4 h-4 text-monad-purple" />
                RAM (GB)
              </label>
              <input
                type="range"
                min="16"
                max="256"
                step="16"
                value={ram}
                onChange={(e) => setRam(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-monad-text-dim mt-1">
                <span>16</span>
                <span className="font-mono text-monad-purple">{ram} GB</span>
                <span>256</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <HardDrive className="w-4 h-4 text-monad-purple" />
                Storage IOPS (K)
              </label>
              <input
                type="range"
                min="100"
                max="3000"
                step="100"
                value={storageIOPS}
                onChange={(e) => setStorageIOPS(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-monad-text-dim mt-1">
                <span>100K</span>
                <span className="font-mono text-monad-purple">{storageIOPS}K IOPS</span>
                <span>3M</span>
              </div>
            </div>
          </div>

          <div className="bg-monad-bg rounded-xl p-6 text-center">
            <p className="text-sm text-monad-text-dim mb-2">Performance Score</p>
            <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
              {score}%
            </div>
            <p className={`text-lg font-medium ${getScoreColor()}`}>
              {getScoreLabel()}
            </p>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-monad-text-dim mb-1">CPU Score</p>
                <p className="font-mono text-monad-purple">
                  {Math.round((cpuCores / 16) * 25 + (cpuClock / 4.5) * 25)}%
                </p>
              </div>
              <div>
                <p className="text-monad-text-dim mb-1">RAM Score</p>
                <p className="font-mono text-monad-purple">
                  {Math.round(Math.min((ram / 32) * 25, 25))}%
                </p>
              </div>
              <div>
                <p className="text-monad-text-dim mb-1">Storage Score</p>
                <p className="font-mono text-monad-purple">
                  {Math.round(Math.min((storageIOPS / 1000) * 25, 25))}%
                </p>
              </div>
              <div>
                <p className="text-monad-text-dim mb-1">Status</p>
                <p className={`font-medium ${score >= 50 ? 'text-monad-success' : 'text-red-500'}`}>
                  {score >= 50 ? 'Ready' : 'Upgrade'}
                </p>
              </div>
            </div>
          </div>

          {score < 70 && (
            <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
              <p className="text-sm text-yellow-500">
                <span className="font-semibold">Recommendation:</span> Your hardware may experience performance issues. Consider upgrading 
                {cpuClock < 4.5 && ' CPU clock speed'}
                {cpuCores < 16 && ' CPU cores'}
                {ram < 32 && ' RAM'}
                {storageIOPS < 1000 && ' storage to PCIe Gen4 NVMe'}.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}