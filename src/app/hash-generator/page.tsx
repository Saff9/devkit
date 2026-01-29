'use client';

import { useState, useCallback } from 'react';
import TextArea from '@/components/TextArea';

// Simple hash implementations for client-side use
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sha1(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Simple MD5 implementation
function md5(message: string): string {
  const K: number[] = [];
  for (let i = 0; i < 64; i++) {
    K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
  }

  let h0 = 0x67452301;
  let h1 = 0xEFCDAB89;
  let h2 = 0x98BADCFE;
  let h3 = 0x10325476;

  const msg = message;
  const msgLen = msg.length;
  
  // Convert to bytes
  const bytes: number[] = [];
  for (let i = 0; i < msgLen; i++) {
    bytes.push(msg.charCodeAt(i));
  }
  
  // Padding
  bytes.push(0x80);
  while ((bytes.length % 64) !== 56) {
    bytes.push(0);
  }
  
  // Append length
  const bitLen = msgLen * 8;
  for (let i = 0; i < 8; i++) {
    bytes.push((bitLen >>> (i * 8)) & 0xFF);
  }

  // Process chunks
  for (let i = 0; i < bytes.length; i += 64) {
    const w: number[] = [];
    for (let j = 0; j < 16; j++) {
      w[j] = (bytes[i + j * 4] || 0) | 
             ((bytes[i + j * 4 + 1] || 0) << 8) | 
             ((bytes[i + j * 4 + 2] || 0) << 16) | 
             ((bytes[i + j * 4 + 3] || 0) << 24);
    }

    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;

    for (let j = 0; j < 64; j++) {
      let f: number, g: number;
      if (j < 16) {
        f = (b & c) | ((~b) & d);
        g = j;
      } else if (j < 32) {
        f = (d & b) | ((~d) & c);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = b ^ c ^ d;
        g = (3 * j + 5) % 16;
      } else {
        f = c ^ (b | (~d));
        g = (7 * j) % 16;
      }

      const temp = d;
      d = c;
      c = b;
      b = b + leftRotate((a + f + K[j] + w[g]) | 0, [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][Math.floor(j / 16) * 4 + j % 4]);
      a = temp;
    }

    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
  }

  function leftRotate(x: number, c: number): number {
    return ((x << c) | (x >>> (32 - c))) | 0;
  }

  const toHex = (n: number) => {
    return [(n & 0xFF), (n >> 8) & 0xFF, (n >> 16) & 0xFF, (n >> 24) & 0xFF]
      .map(b => (b >>> 0).toString(16).padStart(2, '0'))
      .join('');
  };

  return toHex(h0) + toHex(h1) + toHex(h2) + toHex(h3);
}

export default function HashGenerator() {
  const [input, setInput] = useState('');
  const [hashes, setHashes] = useState({
    md5: '',
    sha1: '',
    sha256: '',
  });

  const generateHashes = useCallback(async () => {
    if (!input) {
      setHashes({ md5: '', sha1: '', sha256: '' });
      return;
    }

    const [md5Hash, sha1Hash, sha256Hash] = await Promise.all([
      Promise.resolve(md5(input)),
      sha1(input),
      sha256(input),
    ]);

    setHashes({
      md5: md5Hash,
      sha1: sha1Hash,
      sha256: sha256Hash,
    });
  }, [input]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Hash Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Generate MD5, SHA1, and SHA256 hashes from text.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <TextArea
            label="Input Text"
            value={input}
            onChange={(val) => { setInput(val); generateHashes(); }}
            placeholder="Enter text to hash..."
            rows={6}
          />
        </div>

        <button
          onClick={generateHashes}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate Hashes
        </button>

        <div className="space-y-4">
          {[
            { name: 'MD5', value: hashes.md5, color: 'blue' },
            { name: 'SHA1', value: hashes.sha1, color: 'green' },
            { name: 'SHA256', value: hashes.sha256, color: 'purple' },
          ].map(({ name, value, color }) => (
            <div
              key={name}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium text-${color}-600 dark:text-${color}-400`}>
                  {name}
                </span>
                {value && (
                  <button
                    onClick={() => copyToClipboard(value)}
                    className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Copy
                  </button>
                )}
              </div>
              <code className="block p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm break-all text-gray-900 dark:text-gray-100">
                {value || 'Hash will appear here...'}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
