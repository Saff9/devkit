'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, Menu, X, Zap, Github, Star, Command } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">
                DevKit
              </span>
              <span className="text-[10px] text-zinc-500 -mt-1">Developer Tools</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Home
            </Link>
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
              <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-white/10 rounded">
                <Command className="w-3 h-3" />
                <span>K</span>
              </kbd>
            </button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Saff9/devkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">Star on GitHub</span>
              <span className="flex items-center gap-1 px-2 py-0.5 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
                <Star className="w-3 h-3 fill-current" />
                <span>1.2k</span>
              </span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-zinc-400" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => {
                  setShowSearch(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
              >
                <Search className="w-4 h-4" />
                Search Tools
              </button>
              <a
                href="https://github.com/Saff9/devkit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {showSearch && (
        <SearchModal onClose={() => setShowSearch(false)} />
      )}
    </header>
  );
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl glass rounded-2xl overflow-hidden animate-slide-up">
        <div className="flex items-center gap-3 p-4 border-b border-white/5">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none"
            autoFocus
          />
          <kbd className="px-2 py-1 text-xs bg-white/10 rounded">ESC</kbd>
        </div>
        <div className="p-4 text-sm text-zinc-500">
          Type to search for tools...
        </div>
      </div>
    </div>
  );
}
