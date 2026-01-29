'use client';

import { useState, useCallback } from 'react';
import TextArea from '@/components/TextArea';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [indent, setIndent] = useState(2);

  const formatJson = useCallback(() => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError('');
        return;
      }
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setOutput(formatted);
      setError('');
    } catch (err) {
      setError(`Invalid JSON: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setOutput('');
    }
  }, [input, indent]);

  const minifyJson = useCallback(() => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError('');
        return;
      }
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError('');
    } catch (err) {
      setError(`Invalid JSON: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setOutput('');
    }
  }, [input]);

  const validateJson = useCallback(() => {
    try {
      if (!input.trim()) {
        setError('');
        setOutput('');
        return;
      }
      JSON.parse(input);
      setOutput('✓ Valid JSON');
      setError('');
    } catch (err) {
      setError(`Invalid JSON: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setOutput('');
    }
  }, [input]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          JSON Formatter
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Format, validate, and beautify your JSON data.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={formatJson}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Format
        </button>
        <button
          onClick={minifyJson}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Minify
        </button>
        <button
          onClick={validateJson}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Validate
        </button>
        <select
          value={indent}
          onChange={(e) => setIndent(Number(e.target.value))}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value={2}>2 spaces</option>
          <option value={4}>4 spaces</option>
          <option value={"\t"}>Tab</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TextArea
          label="Input JSON"
          value={input}
          onChange={setInput}
          placeholder="Paste your JSON here..."
          error={error}
          rows={20}
        />
        <TextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Formatted JSON will appear here..."
          readOnly
          rows={20}
        />
      </div>
    </div>
  );
}
