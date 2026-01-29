(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TextArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function TextArea({ value, onChange, placeholder, label, error, readOnly = false, rows = 10 }) {
    _s();
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleCopy = async ()=>{
        if (textareaRef.current) {
            await navigator.clipboard.writeText(value);
        }
    };
    const handleClear = ()=>{
        onChange('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/TextArea.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopy,
                                className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",
                                children: "Copy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TextArea.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClear,
                                className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TextArea.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TextArea.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TextArea.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: textareaRef,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                readOnly: readOnly,
                rows: rows,
                className: `w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'}`,
                spellCheck: false
            }, void 0, false, {
                fileName: "[project]/src/components/TextArea.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/TextArea.tsx",
                lineNumber: 75,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TextArea.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(TextArea, "gJtT2aPnbUb4WH8ANBrFCKASbhs=");
_c = TextArea;
var _c;
__turbopack_context__.k.register(_c, "TextArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/hash-generator/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HashGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextArea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Simple hash implementations for client-side use
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('');
}
async function sha1(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('');
}
// Simple MD5 implementation
function md5(message) {
    const K = [];
    for(let i = 0; i < 64; i++){
        K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
    }
    let h0 = 0x67452301;
    let h1 = 0xEFCDAB89;
    let h2 = 0x98BADCFE;
    let h3 = 0x10325476;
    const msg = message;
    const msgLen = msg.length;
    // Convert to bytes
    const bytes = [];
    for(let i = 0; i < msgLen; i++){
        bytes.push(msg.charCodeAt(i));
    }
    // Padding
    bytes.push(0x80);
    while(bytes.length % 64 !== 56){
        bytes.push(0);
    }
    // Append length
    const bitLen = msgLen * 8;
    for(let i = 0; i < 8; i++){
        bytes.push(bitLen >>> i * 8 & 0xFF);
    }
    // Process chunks
    for(let i = 0; i < bytes.length; i += 64){
        const w = [];
        for(let j = 0; j < 16; j++){
            w[j] = (bytes[i + j * 4] || 0) | (bytes[i + j * 4 + 1] || 0) << 8 | (bytes[i + j * 4 + 2] || 0) << 16 | (bytes[i + j * 4 + 3] || 0) << 24;
        }
        let a = h0;
        let b = h1;
        let c = h2;
        let d = h3;
        for(let j = 0; j < 64; j++){
            let f, g;
            if (j < 16) {
                f = b & c | ~b & d;
                g = j;
            } else if (j < 32) {
                f = d & b | ~d & c;
                g = (5 * j + 1) % 16;
            } else if (j < 48) {
                f = b ^ c ^ d;
                g = (3 * j + 5) % 16;
            } else {
                f = c ^ (b | ~d);
                g = 7 * j % 16;
            }
            const temp = d;
            d = c;
            c = b;
            b = b + leftRotate(a + f + K[j] + w[g] | 0, [
                7,
                12,
                17,
                22,
                5,
                9,
                14,
                20,
                4,
                11,
                16,
                23,
                6,
                10,
                15,
                21
            ][Math.floor(j / 16) * 4 + j % 4]);
            a = temp;
        }
        h0 = h0 + a | 0;
        h1 = h1 + b | 0;
        h2 = h2 + c | 0;
        h3 = h3 + d | 0;
    }
    function leftRotate(x, c) {
        return x << c | x >>> 32 - c | 0;
    }
    const toHex = (n)=>{
        return [
            n & 0xFF,
            n >> 8 & 0xFF,
            n >> 16 & 0xFF,
            n >> 24 & 0xFF
        ].map((b)=>(b >>> 0).toString(16).padStart(2, '0')).join('');
    };
    return toHex(h0) + toHex(h1) + toHex(h2) + toHex(h3);
}
function HashGenerator() {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hashes, setHashes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        md5: '',
        sha1: '',
        sha256: ''
    });
    const generateHashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HashGenerator.useCallback[generateHashes]": async ()=>{
            if (!input) {
                setHashes({
                    md5: '',
                    sha1: '',
                    sha256: ''
                });
                return;
            }
            const [md5Hash, sha1Hash, sha256Hash] = await Promise.all([
                Promise.resolve(md5(input)),
                sha1(input),
                sha256(input)
            ]);
            setHashes({
                md5: md5Hash,
                sha1: sha1Hash,
                sha256: sha256Hash
            });
        }
    }["HashGenerator.useCallback[generateHashes]"], [
        input
    ]);
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-white mb-2",
                        children: "Hash Generator"
                    }, void 0, false, {
                        fileName: "[project]/src/app/hash-generator/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "Generate MD5, SHA1, and SHA256 hashes from text."
                    }, void 0, false, {
                        fileName: "[project]/src/app/hash-generator/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/hash-generator/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Input Text",
                            value: input,
                            onChange: (val)=>{
                                setInput(val);
                                generateHashes();
                            },
                            placeholder: "Enter text to hash...",
                            rows: 6
                        }, void 0, false, {
                            fileName: "[project]/src/app/hash-generator/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/hash-generator/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: generateHashes,
                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                        children: "Generate Hashes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/hash-generator/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            {
                                name: 'MD5',
                                value: hashes.md5,
                                color: 'blue'
                            },
                            {
                                name: 'SHA1',
                                value: hashes.sha1,
                                color: 'green'
                            },
                            {
                                name: 'SHA256',
                                value: hashes.sha256,
                                color: 'purple'
                            }
                        ].map(({ name, value, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-medium text-${color}-600 dark:text-${color}-400`,
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/hash-generator/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(value),
                                                className: "text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",
                                                children: "Copy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/hash-generator/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/hash-generator/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "block p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-mono text-sm break-all text-gray-900 dark:text-gray-100",
                                        children: value || 'Hash will appear here...'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/hash-generator/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, name, true, {
                                fileName: "[project]/src/app/hash-generator/page.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/hash-generator/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/hash-generator/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/hash-generator/page.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(HashGenerator, "gcxFd1I00/HjQnBY1mN9vMWnI1U=");
_c = HashGenerator;
var _c;
__turbopack_context__.k.register(_c, "HashGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_999daab7._.js.map