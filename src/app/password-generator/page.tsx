'use client';

import { useState, useCallback, useEffect } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState<'weak' | 'medium' | 'strong'>('medium');

  const generatePassword = useCallback(() => {
    const chars = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    };

    let validChars = '';
    if (options.uppercase) validChars += chars.uppercase;
    if (options.lowercase) validChars += chars.lowercase;
    if (options.numbers) validChars += chars.numbers;
    if (options.symbols) validChars += chars.symbols;

    if (validChars === '') {
      setPassword('');
      return;
    }

    let result = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      result += validChars[array[i] % validChars.length];
    }

    setPassword(result);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  useEffect(() => {
    let score = 0;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (options.uppercase) score++;
    if (options.lowercase) score++;
    if (options.numbers) score++;
    if (options.symbols) score++;

    if (score <= 3) setStrength('weak');
    else if (score <= 5) setStrength('medium');
    else setStrength('strong');
  }, [length, options]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const toggleOption = (key: keyof typeof options) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const strengthColors = {
    weak: 'bg-red-500',
    medium: 'bg-yellow-500',
    strong: 'bg-green-500',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Password Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Generate secure random passwords with customizable options.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-4 py-3 text-xl font-mono bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Copy
          </button>
          <button
            onClick={generatePassword}
            className="px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Refresh
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Strength:</span>
          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${strengthColors[strength]} transition-all duration-300`}
              style={{ width: strength === 'weak' ? '33%' : strength === 'medium' ? '66%' : '100%' }}
            />
          </div>
          <span className={`text-sm font-medium capitalize ${
            strength === 'weak' ? 'text-red-500' : 
            strength === 'medium' ? 'text-yellow-500' : 'text-green-500'
          }`}>
            {strength}
          </span>
        </div>
      </div>

      <div className="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Length: {length}
          </label>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>4</span>
            <span>64</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { key: 'uppercase', label: 'Uppercase (A-Z)' },
            { key: 'lowercase', label: 'Lowercase (a-z)' },
            { key: 'numbers', label: 'Numbers (0-9)' },
            { key: 'symbols', label: 'Symbols (!@#$%)' },
          ].map(({ key, label }) => (
            <label
              key={key}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <input
                type="checkbox"
                checked={options[key as keyof typeof options]}
                onChange={() => toggleOption(key as keyof typeof options)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700 dark:text-gray-300">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
