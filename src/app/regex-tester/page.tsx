'use client';

import { useState, useCallback, useEffect } from 'react';
import TextArea from '@/components/TextArea';

export default function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('');
  const [matches, setMatches] = useState<Array<{ match: string; index: number; groups?: string[] }>>([]);
  const [error, setError] = useState('');
  const [highlightedText, setHighlightedText] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    testRegex();
  }, [pattern, flags, text]);

  const testRegex = useCallback(() => {
    try {
      if (!pattern || !text) {
        setMatches([]);
        setError('');
        setHighlightedText([text]);
        return;
      }

      const regex = new RegExp(pattern, flags);
      const results: Array<{ match: string; index: number; groups?: string[] }> = [];
      
      if (flags.includes('g')) {
        let match;
        while ((match = regex.exec(text)) !== null) {
          results.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
          if (match[0] === '') regex.lastIndex++;
        }
      } else {
        const match = regex.exec(text);
        if (match) {
          results.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      }

      setMatches(results);
      setError('');

      // Build highlighted text
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      results.forEach((result, i) => {
        if (result.index > lastIndex) {
          parts.push(<span key={`text-${i}`}>{text.slice(lastIndex, result.index)}</span>);
        }
        parts.push(
          <mark key={`match-${i}`} className="bg-yellow-300 dark:bg-yellow-600 px-1 rounded">
            {result.match}
          </mark>
        );
        lastIndex = result.index + result.match.length;
      });
      if (lastIndex < text.length) {
        parts.push(<span key="text-end">{text.slice(lastIndex)}</span>);
      }
      setHighlightedText(parts.length > 0 ? parts : [text]);
    } catch (err) {
      setError(`Invalid regex: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setMatches([]);
      setHighlightedText([text]);
    }
  }, [pattern, flags, text]);

  const flagOptions = [
    { flag: 'g', label: 'g', desc: 'Global' },
    { flag: 'i', label: 'i', desc: 'Ignore case' },
    { flag: 'm', label: 'm', desc: 'Multiline' },
    { flag: 's', label: 's', desc: 'Dot all' },
    { flag: 'u', label: 'u', desc: 'Unicode' },
    { flag: 'y', label: 'y', desc: 'Sticky' },
  ];

  const toggleFlag = (flag: string) => {
    setFlags(prev => 
      prev.includes(flag) 
        ? prev.replace(flag, '') 
        : prev + flag
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Regex Tester
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Test regular expressions with live matching and capture groups.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Regular Expression
          </label>
          <div className="flex gap-2">
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-l-lg text-gray-500 font-mono">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Enter regex pattern..."
              className="flex-1 px-4 py-2 border-y border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
            />
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-500 font-mono">/</span>
            <input
              type="text"
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              placeholder="flags"
              className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
            />
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {flagOptions.map(({ flag, label, desc }) => (
              <button
                key={flag}
                onClick={() => toggleFlag(flag)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  flags.includes(flag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title={desc}
              >
                {label}
              </button>
            ))}
          </div>

          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
        </div>

        <TextArea
          label="Test Text"
          value={text}
          onChange={setText}
          placeholder="Enter text to test against the regex..."
          rows={10}
        />

        {text && (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Highlighted Matches
            </label>
            <pre className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm whitespace-pre-wrap break-all">
              {highlightedText}
            </pre>
          </div>
        )}

        {matches.length > 0 && (
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="text-sm font-medium text-green-800 dark:text-green-400 mb-3">
              Matches ({matches.length})
            </h3>
            <div className="space-y-2">
              {matches.map((match, i) => (
                <div key={i} className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-start">
                    <code className="text-blue-600 dark:text-blue-400 font-mono">{match.match}</code>
                    <span className="text-xs text-gray-500">index: {match.index}</span>
                  </div>
                  {match.groups && match.groups.length > 0 && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Groups: {match.groups.map((g, j) => (
                        <span key={j} className="mr-2">
                          <span className="text-gray-400">${j + 1}:</span> <code>{g || '(empty)'}</code>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {pattern && text && matches.length === 0 && !error && (
          <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-400">No matches found</p>
          </div>
        )}
      </div>
    </div>
  );
}
