'use client';

import { useRef } from 'react';
import { Copy, Trash2 } from 'lucide-react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  readOnly?: boolean;
  rows?: number;
  className?: string;
}

export default function TextArea({
  value,
  onChange,
  placeholder,
  label,
  error,
  readOnly = false,
  rows = 10,
  className = '',
}: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = async () => {
    if (textareaRef.current) {
      await navigator.clipboard.writeText(value);
    }
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-zinc-300">
            {label}
          </label>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-all"
              title="Copy to clipboard"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy
            </button>
            {!readOnly && (
              <button
                onClick={handleClear}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 bg-white/5 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-all"
                title="Clear content"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>
        </div>
      )}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          rows={rows}
          className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-zinc-100 font-mono text-sm resize-y focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-600 ${
            error
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
              : 'border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20 hover:border-white/20'
          }`}
          spellCheck={false}
        />
        {readOnly && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-medium text-zinc-500 bg-zinc-800 rounded">
              Read-only
            </span>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          {error}
        </p>
      )}
    </div>
  );
}
