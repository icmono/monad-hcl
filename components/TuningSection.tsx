'use client';

import { motion } from 'framer-motion';
import { Settings, Terminal, Zap, AlertCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const tuningSteps = [
  {
    id: 'ccd',
    title: 'CCDs (Core Complex Dies) Settings',
    description: 'Groups cores into chiplet units that share L3 cache for better performance',
    note: 'For systems with 9950X or 4584PX, CCD settings can be skipped',
    commands: [
      {
        label: 'Check CCDs',
        command: "lscpu -e | awk 'NR==1{print \"CPU L3\"} NR>1{split($5,a,\":\"); print $1, a[4]}'",
      },
      {
        label: 'Edit service config',
        command: 'sudo vi /usr/lib/systemd/system/monad-execution.service',
      },
      {
        label: 'Set CPU affinity',
        command: '--ro_sq_thread_cpu 6 --sq_thread_cpu 7',
      },
    ],
  },
  {
    id: 'frequency',
    title: 'CPU Frequency Settings (P-state)',
    description: 'Controls CPU frequency scaling policy for optimal performance',
    commands: [
      {
        label: 'Check current governor',
        command: 'cpupower frequency-info | grep -A2 "current policy"',
      },
      {
        label: 'Set performance mode',
        command: 'sudo cpupower frequency-set -g performance',
      },
    ],
  },
  {
    id: 'cstate',
    title: 'CPU Idle Settings (C-state)',
    description: 'Manages trade-off between low-latency wake-ups and power savings',
    commands: [
      {
        label: 'Check idle states',
        command: 'cpupower idle-info',
      },
      {
        label: 'Disable C2',
        command: 'sudo cpupower idle-set -d 2',
      },
      {
        label: 'Disable C1 (optional)',
        command: 'sudo cpupower idle-set -d 1',
      },
    ],
  },
];

interface CommandProps {
  command: string;
  label: string;
}

function CommandBlock({ command, label }: CommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-monad-bg rounded-lg p-3 border border-monad-purple/20">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <p className="text-xs text-monad-text-dim mb-1">{label}</p>
          <code className="text-sm font-mono text-monad-purple break-all">{command}</code>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 hover:bg-monad-purple/20 rounded transition-colors"
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="w-4 h-4 text-monad-success" />
          ) : (
            <Copy className="w-4 h-4 text-monad-text-dim" />
          )}
        </button>
      </div>
    </div>
  );
}

export default function TuningSection() {
  return (
    <section id="tuning" className="section-padding py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Settings className="w-8 h-8 text-monad-purple" />
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">CPU Tuning Guide</span>
          </h2>
        </div>
        <p className="text-center text-monad-text-dim mb-12 max-w-2xl mx-auto">
          Optimize your CPU settings for maximum validator performance
        </p>

        <div className="space-y-8">
          {tuningSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-monad-bg-light rounded-xl p-6 border border-monad-purple/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-monad-purple/20 rounded-lg">
                  <Terminal className="w-6 h-6 text-monad-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-monad-text-dim">{step.description}</p>
                  {step.note && (
                    <div className="mt-3 flex items-start gap-2 bg-yellow-900/20 rounded-lg p-3 border border-yellow-600/30">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      <p className="text-sm text-yellow-500">{step.note}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {step.commands.map((cmd, cmdIndex) => (
                  <CommandBlock key={cmdIndex} {...cmd} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-monad-purple/10 to-monad-purple-light/10 rounded-xl p-8 border border-monad-purple/20"
        >
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 text-monad-purple mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Performance Impact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-monad-success rounded-full" />
                  <span className="text-sm">
                    Performance mode keeps CPU at maximum frequency for lowest latency
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-monad-success rounded-full" />
                  <span className="text-sm">
                    Disabling deep C-states reduces wake-up latency for better responsiveness
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-monad-success rounded-full" />
                  <span className="text-sm">
                    Proper CCD configuration ensures optimal cache utilization
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}