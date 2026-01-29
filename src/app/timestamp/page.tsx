'use client';

import { useState, useCallback, useEffect } from 'react';

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState('');
  const [dateString, setDateString] = useState('');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timestampToDate = useCallback(() => {
    try {
      if (!timestamp) return;
      let ts = parseInt(timestamp);
      // Handle both seconds and milliseconds
      if (ts < 10000000000) {
        ts = ts * 1000;
      }
      const date = new Date(ts);
      setDateString(date.toISOString());
    } catch {
      setDateString('Invalid timestamp');
    }
  }, [timestamp]);

  const dateToTimestamp = useCallback(() => {
    try {
      if (!dateString) return;
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        setTimestamp('Invalid date');
        return;
      }
      setTimestamp(Math.floor(date.getTime() / 1000).toString());
    } catch {
      setTimestamp('Invalid date');
    }
  }, [dateString]);

  const setCurrentTimestamp = useCallback(() => {
    const now = new Date();
    setTimestamp(Math.floor(now.getTime() / 1000).toString());
    setDateString(now.toISOString());
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Timestamp Converter
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Convert between Unix timestamps and human-readable dates.
        </p>
      </div>

      <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">Current Time</div>
        <div className="text-2xl font-mono text-blue-900 dark:text-blue-100">
          {now.toISOString()}
        </div>
        <div className="mt-2 text-lg font-mono text-blue-800 dark:text-blue-200">
          Unix: {Math.floor(now.getTime() / 1000)}
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Unix Timestamp (seconds)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              placeholder="1704067200"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
            />
            <button
              onClick={timestampToDate}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Convert →
            </button>
            <button
              onClick={setCurrentTimestamp}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Now
            </button>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Date (ISO 8601)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={dateString}
              onChange={(e) => setDateString(e.target.value)}
              placeholder="2024-01-01T00:00:00.000Z"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
            />
            <button
              onClick={dateToTimestamp}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Convert
            </button>
          </div>
        </div>

        {timestamp && dateString && !timestamp.includes('Invalid') && !dateString.includes('Invalid') && (
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="text-sm font-medium text-green-800 dark:text-green-400 mb-3">Converted Result</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Local:</span>
                <span className="text-gray-900 dark:text-white">{new Date(parseInt(timestamp) * (timestamp.length > 10 ? 1 : 1000)).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">UTC:</span>
                <span className="text-gray-900 dark:text-white">{new Date(parseInt(timestamp) * (timestamp.length > 10 ? 1 : 1000)).toUTCString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Relative:</span>
                <span className="text-gray-900 dark:text-white">{getRelativeTime(parseInt(timestamp) * (timestamp.length > 10 ? 1 : 1000))}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function getRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'Just now';
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
  return new Date(timestamp).toLocaleDateString();
}
