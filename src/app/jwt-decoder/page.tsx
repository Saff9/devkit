'use client';

import { useState, useCallback } from 'react';
import TextArea from '@/components/TextArea';

interface DecodedJWT {
  header: Record<string, unknown> | null;
  payload: Record<string, unknown> | null;
  signature: string | null;
  error?: string;
}

export default function JwtDecoder() {
  const [input, setInput] = useState('');
  const [decoded, setDecoded] = useState<DecodedJWT>({ header: null, payload: null, signature: null });

  const decodeJWT = useCallback((token: string) => {
    try {
      if (!token.trim()) {
        setDecoded({ header: null, payload: null, signature: null });
        return;
      }

      const parts = token.split('.');
      if (parts.length !== 3) {
        setDecoded({ header: null, payload: null, signature: null, error: 'Invalid JWT format. Expected 3 parts separated by dots.' });
        return;
      }

      const decodeBase64 = (str: string) => {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        const json = atob(base64);
        return JSON.parse(json);
      };

      const header = decodeBase64(parts[0]);
      const payload = decodeBase64(parts[1]);
      const signature = parts[2];

      setDecoded({ header, payload, signature, error: undefined });
    } catch (err) {
      setDecoded({ 
        header: null, 
        payload: null, 
        signature: null, 
        error: `Failed to decode JWT: ${err instanceof Error ? err.message : 'Unknown error'}` 
      });
    }
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);
    decodeJWT(value);
  };

  const formatJSON = (obj: Record<string, unknown> | null) => {
    if (!obj) return '';
    return JSON.stringify(obj, null, 2);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          JWT Decoder
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Decode and inspect JWT tokens. Paste your token to see the header and payload.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TextArea
          label="JWT Token"
          value={input}
          onChange={handleInputChange}
          placeholder="Paste your JWT token here (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)"
          error={decoded.error}
          rows={10}
        />

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Header (Algorithm & Type)
            </label>
            <pre className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm overflow-auto max-h-40">
              {formatJSON(decoded.header) || 'No header decoded'}
            </pre>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Payload (Data)
            </label>
            <pre className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm overflow-auto max-h-60">
              {formatJSON(decoded.payload) || 'No payload decoded'}
            </pre>
          </div>

          {decoded.signature && (
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Signature
              </label>
              <div className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-mono text-sm break-all">
                {decoded.signature}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
