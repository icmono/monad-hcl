'use client';

import { motion } from 'framer-motion';
import { Users, GitPullRequest, Database, TestTube } from 'lucide-react';

const contributionWays = [
  {
    icon: TestTube,
    title: 'Submit Benchmarks',
    description: 'Share your hardware benchmarks and real-world performance data',
    action: 'Submit Results',
  },
  {
    icon: Database,
    title: 'Add Hardware',
    description: 'Contribute new compatible hardware to our growing database',
    action: 'Add Hardware',
  },
  {
    icon: GitPullRequest,
    title: 'Improve Docs',
    description: 'Help improve our documentation and tuning guides',
    action: 'Contribute',
  },
  {
    icon: Users,
    title: 'Join Community',
    description: 'Connect with other validators and share experiences',
    action: 'Join Discord',
  },
];

export default function ContributeSection() {
  return (
    <section className="section-padding py-20 bg-gradient-to-b from-monad-bg to-monad-bg-light">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Contribute to Monad HCL</span>
        </h2>
        <p className="text-center text-monad-text-dim mb-12 max-w-2xl mx-auto">
          Help the Monad community by sharing your hardware experiences and benchmarks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributionWays.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-monad-bg rounded-xl p-6 border border-monad-purple/20 hover:border-monad-purple/40 transition-all group"
            >
              <item.icon className="w-10 h-10 text-monad-purple mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-monad-text-dim mb-4">{item.description}</p>
              <button className="text-sm text-monad-purple hover:text-monad-purple-light transition-colors font-medium">
                {item.action} →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-monad-purple/10 rounded-full border border-monad-purple/20">
            <div className="w-2 h-2 bg-monad-success rounded-full animate-pulse" />
            <span className="text-sm text-monad-text-dim">
              Currently tracking <span className="text-monad-purple font-semibold">12</span> hardware configurations from{' '}
              <span className="text-monad-purple font-semibold">47</span> validators
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}