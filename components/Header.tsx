'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, ExternalLink, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#requirements', label: 'Requirements' },
  { href: '#cpu', label: 'CPUs' },
  { href: '#storage', label: 'Storage' },
  { href: '#tuning', label: 'Tuning' },
  { href: '#software', label: 'Software' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-monad-bg/80 backdrop-blur-lg border-b border-monad-purple/20'
          : 'bg-transparent'
      )}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <Server className="w-6 h-6 text-monad-purple group-hover:rotate-12 transition-transform" />
            <div>
              <h1 className="text-xl font-bold gradient-text">
                Monad HCL
              </h1>
              <p className="text-xs text-monad-text-dim">
                Hardware Compatibility List
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-monad-text-dim hover:text-monad-purple transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://docs.monad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-monad-text-dim hover:text-monad-purple transition-colors"
              aria-label="Monad Docs"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/monad-xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-monad-text-dim hover:text-monad-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-monad-text-dim hover:text-monad-purple transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-monad-bg-light border-t border-monad-purple/20">
          <nav className="section-padding py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-monad-text-dim hover:text-monad-purple transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-monad-purple/10">
              <a
                href="https://docs.monad.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-monad-text-dim hover:text-monad-purple transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/monad-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-monad-text-dim hover:text-monad-purple transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}