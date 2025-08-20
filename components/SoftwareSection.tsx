'use client';

import { motion } from 'framer-motion';
import { Monitor, AlertTriangle, CheckCircle2, XCircle, Info } from 'lucide-react';
import { softwareRequirements } from '@/lib/data';

export default function SoftwareSection() {
  return (
    <section id="software" className="section-padding py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Monitor className="w-8 h-8 text-monad-purple" />
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Software Requirements</span>
          </h2>
        </div>
        <p className="text-center text-monad-text-dim mb-12 max-w-2xl mx-auto">
          Operating system and kernel requirements for running Monad validators
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-monad-bg-light rounded-xl p-6 border border-monad-purple/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-monad-success" />
              <h3 className="text-xl font-semibold">Operating System</h3>
            </div>
            <p className="text-lg font-mono text-monad-purple mb-2">{softwareRequirements.os}</p>
            <p className="text-sm text-monad-text-dim">
              Ubuntu 24.04 LTS or newer is required for proper compatibility with Monad client software
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-monad-bg-light rounded-xl p-6 border border-monad-purple/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-monad-success" />
              <h3 className="text-xl font-semibold">Kernel Version</h3>
            </div>
            <p className="text-lg font-mono text-monad-purple mb-2">{softwareRequirements.kernel}</p>
            <p className="text-sm text-monad-text-dim">
              Ensure your kernel is updated to the latest stable version for optimal performance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-red-900/20 rounded-xl p-6 border border-red-600/30"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-red-500 mb-3">Critical Warning</h3>
                <p className="text-monad-text mb-4">{softwareRequirements.warning}</p>
                
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-600/20">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Affected Versions (DO NOT USE)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {['v6.8.0.56-generic', 'v6.8.0.57-generic', 'v6.8.0.58-generic', 'v6.8.0.59-generic'].map((version) => (
                      <span key={version} className="text-sm font-mono text-red-400 bg-red-900/20 px-2 py-1 rounded">
                        {version}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-monad-purple/10 rounded-xl p-6 border border-monad-purple/20"
          >
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-monad-purple mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Additional Recommendations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-monad-purple rounded-full mt-1.5" />
                    <span className="text-sm">
                      Keep your system updated with the latest security patches
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-monad-purple rounded-full mt-1.5" />
                    <span className="text-sm">
                      Disable unnecessary services to reduce resource consumption
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-monad-purple rounded-full mt-1.5" />
                    <span className="text-sm">
                      Configure proper firewall rules for validator security
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-monad-purple rounded-full mt-1.5" />
                    <span className="text-sm">
                      Set up monitoring and alerting for system health
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-monad-text-dim mb-4">
              Need help with setup? Join the community for support
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://discord.gg/monad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Join Discord
              </a>
              <a
                href="https://docs.monad.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}