'use client';

import { useState, useCallback, useEffect } from 'react';

interface HSL {
  h: number;
  s: number;
  l: number;
}

export default function ColorPicker() {
  const [hex, setHex] = useState('#3B82F6');
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState<HSL>({ h: 217, s: 91, l: 60 });

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + [r, g, b].map(x => {
      const hex = Math.max(0, Math.min(255, x)).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  const rgbToHsl = (r: number, g: number, b: number): HSL => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  const hslToRgb = (h: number, s: number, l: number) => {
    h /= 360;
    s /= 100;
    l /= 100;
    let r: number, g: number, b: number;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  };

  const handleHexChange = (value: string) => {
    const newHex = value.startsWith('#') ? value : '#' + value;
    setHex(newHex);
    const newRgb = hexToRgb(newHex);
    if (newRgb) {
      setRgb(newRgb);
      setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
    }
  };

  const handleRgbChange = (key: keyof typeof rgb, value: number) => {
    const newRgb = { ...rgb, [key]: Math.max(0, Math.min(255, value)) };
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
  };

  const handleHslChange = (key: keyof HSL, value: number) => {
    const newHsl = { ...hsl, [key]: value };
    setHsl(newHsl);
    const newRgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const generateShades = () => {
    const shades = [];
    for (let i = 0; i <= 100; i += 10) {
      shades.push(hslToRgb(hsl.h, hsl.s, i));
    }
    return shades;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Color Picker
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Pick colors and generate color palettes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Color Preview */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div
            className="w-full h-48 rounded-xl mb-4 border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: hex }}
          />
          <div className="flex gap-2">
            <input
              type="color"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              className="w-12 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono uppercase"
            />
            <button
              onClick={() => copyToClipboard(hex)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Color Values */}
        <div className="space-y-4">
          {/* RGB */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">RGB</h3>
            <div className="grid grid-cols-3 gap-3">
              {['r', 'g', 'b'].map((key) => (
                <div key={key}>
                  <label className="text-xs text-gray-500 uppercase">{key}</label>
                  <input
                    type="number"
                    min={0}
                    max={255}
                    value={rgb[key as keyof typeof rgb]}
                    onChange={(e) => handleRgbChange(key as keyof typeof rgb, parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              ))}
            </div>
            <code className="mt-3 block p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
              rgb({rgb.r}, {rgb.g}, {rgb.b})
            </code>
          </div>

          {/* HSL */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">HSL</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { key: 'h', label: 'H', max: 360 },
                { key: 's', label: 'S', max: 100 },
                { key: 'l', label: 'L', max: 100 },
              ].map(({ key, label, max }) => (
                <div key={key}>
                  <label className="text-xs text-gray-500 uppercase">{label}</label>
                  <input
                    type="number"
                    min={0}
                    max={max}
                    value={hsl[key as keyof HSL]}
                    onChange={(e) => handleHslChange(key as keyof HSL, parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              ))}
            </div>
            <code className="mt-3 block p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm font-mono">
              hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
            </code>
          </div>
        </div>
      </div>

      {/* Shades */}
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Shades</h3>
        <div className="grid grid-cols-11 gap-1">
          {generateShades().map((shade, i) => (
            <button
              key={i}
              onClick={() => {
                const newHex = rgbToHex(shade.r, shade.g, shade.b);
                handleHexChange(newHex);
              }}
              className="h-12 rounded-lg transition-transform hover:scale-110"
              style={{ backgroundColor: rgbToHex(shade.r, shade.g, shade.b) }}
              title={`${i * 10}% lightness`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
