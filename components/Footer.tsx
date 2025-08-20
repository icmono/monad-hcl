import Link from 'next/link';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-monad-bg-light border-t border-monad-purple/20">
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Monad HCL</h3>
            <p className="text-sm text-monad-text-dim">
              Community-driven hardware compatibility list for Monad validators.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-monad-text mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.monad.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-monad-text-dim hover:text-monad-purple transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://monad.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-monad-text-dim hover:text-monad-purple transition-colors"
                >
                  Official Website
                </a>
              </li>
              <li>
                <Link
                  href="#tuning"
                  className="text-sm text-monad-text-dim hover:text-monad-purple transition-colors"
                >
                  CPU Tuning Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-monad-text mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/monad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-monad-text-dim hover:text-monad-purple transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/monad_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-monad-text-dim hover:text-monad-purple transition-colors flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/monad-xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-monad-text-dim hover:text-monad-purple transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-monad-text mb-4">Contribute</h4>
            <p className="text-sm text-monad-text-dim mb-4">
              Help improve this list by contributing your hardware benchmarks and experiences.
            </p>
            <a
              href="https://github.com/monad-xyz/hardware-compatibility"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm btn-secondary"
            >
              <Github className="w-4 h-4" />
              Contribute on GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-monad-purple/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-monad-text-dim">
              © 2025 Monad HCL. Community maintained.
            </p>
            <p className="text-sm text-monad-text-dim">
              Built for the Monad ecosystem
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}