'use client';

import { useState, useCallback } from 'react';
import TextArea from '@/components/TextArea';

export default function Base64Tool() {
  const [text, setText] = useState('');
  const [base64, setBase64] = useState('');
  const [error, setError] = useState('');

  const encode = useCallback(() => {
    try {
      if (!text) {
        setBase64('');
        setError('');
        return;
      }
      const encoded = btoa(text);
      setBase64(encoded);
      setError('');
    } catch (err) {
      setError('Encoding failed: Input contains non-ASCII characters. Use TextEncoder for Unicode.');
    }
  }, [text]);

  const decode = useCallback(() => {
    try {
      if (!base64) {
        setText('');
        setError('');
        return;
      }
      const decoded = atob(base64);
      setText(decoded);
      setError('');
    } catch (err) {
      setError('Decoding failed: Invalid Base64 string');
    }
  }, [base64]);

  const encodeUnicode = useCallback(() => {
    try {
      if (!text) {
        setBase64('');
        setError('');
        return;
      }
      const encoded = btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
      setBase64(encoded);
      setError('');
    } catch (err) {
      setError('Encoding failed');
    }
  }, [text]);

  const decodeUnicode = useCallback(() => {
    try {
      if (!base64) {
        setText('');
        setError('');
        return;
      }
      const decoded = decodeURIComponent(atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
      setText(decoded);
      setError('');
    } catch (err) {
      setError('Decoding failed: Invalid Base64 string');
    }
  }, [base64]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Base64 Encoder/Decoder
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Encode and decode Base64 strings. Supports both ASCII and Unicode text.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={encode}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Encode ASCII →
        </button>
        <button
          onClick={decode}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Decode ASCII
        </button>
        <button
          onClick={encodeUnicode}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Encode Unicode →
        </button>
        <button
          onClick={decodeUnicode}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          ← Decode Unicode
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TextArea
          label="Text"
          value={text}
          onChange={setText}
          placeholder="Enter text to encode..."
          rows={15}
        />
        <TextArea
          label="Base64"
          value={base64}
          onChange={setBase64}
          placeholder="Enter Base64 to decode..."
          rows={15}
        />
      </div>
    </div>
  );
}
