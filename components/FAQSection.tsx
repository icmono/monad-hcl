'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the absolute minimum requirements for running a Monad validator?',
    answer: 'The absolute minimum requirements are 16 CPU cores with 4.5GHz+ base clock (AMD Zen 4 or Intel Raptor Lake), 32GB RAM, and 4TB of NVMe SSD storage (2TB for TrieDB + 2TB for MonadBFT/OS). However, we strongly recommend exceeding these minimums for optimal performance.',
  },
  {
    question: 'Why is single-core performance so important for Monad?',
    answer: 'Monad\'s consensus mechanism and execution engine are optimized for high single-thread performance. A higher base clock speed (4.5GHz+) ensures faster block processing and lower latency, which is critical for validator performance and rewards.',
  },
  {
    question: 'Can I use consumer-grade hardware or do I need server equipment?',
    answer: 'Both consumer and server hardware can work well. High-end consumer CPUs like the AMD Ryzen 9 7950X or 9950X offer excellent performance. Server CPUs like EPYC 4584PX provide additional reliability features but aren\'t strictly necessary for testnet.',
  },
  {
    question: 'What happens if I use the affected kernel versions?',
    answer: 'Linux kernel versions v6.8.0.56 through v6.8.0.59 have a critical bug that causes Monad clients to hang in an uninterruptible sleep state. This will cause your validator to go offline and miss blocks. Always use v6.8.0.60 or newer.',
  },
  {
    question: 'How much bandwidth does running a validator require?',
    answer: 'A Monad validator typically requires 100-500 Mbps of sustained bandwidth with low latency (< 50ms to other validators). Ensure you have a reliable, unmetered connection with good peering to major cloud providers.',
  },
  {
    question: 'Should I disable CPU C-states for better performance?',
    answer: 'Disabling deeper C-states (C2 and beyond) can reduce wake-up latency and improve validator responsiveness. However, this increases power consumption. Start with disabling C2 and monitor your performance before disabling C1.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-monad-bg-light rounded-lg border border-monad-purple/20 overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-monad-purple/5 transition-colors"
      >
        <span className="font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-monad-purple flex-shrink-0" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4">
              <p className="text-monad-text-dim">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-monad-purple" />
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </div>
        <p className="text-center text-monad-text-dim mb-12">
          Common questions about running Monad validators
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}