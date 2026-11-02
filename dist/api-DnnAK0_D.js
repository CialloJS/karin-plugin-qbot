globalThis.__KTR_BUNDLED__ = true;
import { a as __require, i as __esmMin, r as __commonJSMin } from "./inputNotify-DdtuLbYF.js";
import P, { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import fs, { existsSync, readFileSync, writeSync } from "node:fs";
import Vt from "node:crypto";
import { MessageChannel } from "node:worker_threads";
import n from "node:os";
import $t from "fs";
import _t from "os";
import Dt from "path";
import Ft from "node:net";
import { inspect } from "node:util";
import { readFile } from "node:fs/promises";

// node_modules/.pnpm/tsx@4.23.15/node_modules/tsx/dist/temporary-directory-Du7LpLp9.mjs
var c$1 = Object.defineProperty;
var r$1 = (s, t) => c$1(s, "name", {
	value: t,
	configurable: !0
});
const i$2 = r$1((s, t) => {
	const e = s[0] - t[0];
	if (e === 0) {
		const o = s[1] - t[1];
		return o === 0 ? s[2] >= t[2] : o > 0;
	}
	return e > 0;
}, "isVersionGreaterOrEqual"), u$3 = process.versions.node.split(".").map(Number), p$1 = r$1((s, t = u$3) => {
	for (let e = 0; e < s.length; e += 1) {
		const o = s[e];
		if (e === s.length - 1 || t[0] === o[0]) return i$2(t, o);
	}
	return !1;
}, "isFeatureSupported"), d = [[
	18,
	19,
	0
], [
	20,
	6,
	0
]], f$1 = [
	[
		22,
		22,
		3
	],
	[
		24,
		11,
		1
	],
	[
		25,
		1,
		0
	],
	[
		26,
		0,
		0
	]
], l$1 = [
	[
		18,
		19,
		0
	],
	[
		20,
		10,
		0
	],
	[
		21,
		0,
		0
	]
], g$1 = [[
	21,
	0,
	0
]], R$2 = [[
	20,
	11,
	0
], [
	21,
	3,
	0
]], b$1 = [[
	20,
	11,
	0
], [
	21,
	2,
	0
]], h$1 = [
	[
		20,
		19,
		0
	],
	[
		22,
		12,
		0
	],
	[
		23,
		0,
		0
	]
], { geteuid: a } = process, j = a ? a() : n.userInfo().username, q$1 = path.join(n.tmpdir(), `tsx-${j}`);

// node_modules/.pnpm/tsdown@0.22.14_tsx@4.23.15_typescript@5.9.3/node_modules/tsdown/esm-shims.js
var getFilename, getDirname, __dirname, __filename;
var init_esm_shims = __esmMin((() => {
	getFilename = () => fileURLToPath(import.meta.url);
	getDirname = () => path.dirname(getFilename());
	__dirname = /* @__PURE__ */ getDirname();
	__filename = /* @__PURE__ */ getFilename();
}));

// node_modules/.pnpm/esbuild@0.28.2/node_modules/esbuild/lib/main.js
var require_main = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	init_esm_shims();
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var node_exports = {};
	__export(node_exports, {
		analyzeMetafile: () => analyzeMetafile,
		analyzeMetafileSync: () => analyzeMetafileSync,
		build: () => build,
		buildSync: () => buildSync,
		context: () => context,
		default: () => node_default,
		formatMessages: () => formatMessages,
		formatMessagesSync: () => formatMessagesSync,
		initialize: () => initialize,
		stop: () => stop,
		transform: () => transform,
		transformSync: () => transformSync,
		version: () => version
	});
	module.exports = __toCommonJS(node_exports);
	function encodePacket(packet) {
		let visit = (value) => {
			if (value === null) bb.write8(0);
			else if (typeof value === "boolean") {
				bb.write8(1);
				bb.write8(+value);
			} else if (typeof value === "number") {
				bb.write8(2);
				bb.write32(value | 0);
			} else if (typeof value === "string") {
				bb.write8(3);
				bb.write(encodeUTF8(value));
			} else if (value instanceof Uint8Array) {
				bb.write8(4);
				bb.write(value);
			} else if (value instanceof Array) {
				bb.write8(5);
				bb.write32(value.length);
				for (let item of value) visit(item);
			} else {
				let keys = Object.keys(value);
				bb.write8(6);
				bb.write32(keys.length);
				for (let key of keys) {
					bb.write(encodeUTF8(key));
					visit(value[key]);
				}
			}
		};
		let bb = new ByteBuffer();
		bb.write32(0);
		bb.write32(packet.id << 1 | +!packet.isRequest);
		visit(packet.value);
		writeUInt32LE(bb.buf, bb.len - 4, 0);
		return bb.buf.subarray(0, bb.len);
	}
	function decodePacket(bytes) {
		let visit = () => {
			switch (bb.read8()) {
				case 0: return null;
				case 1: return !!bb.read8();
				case 2: return bb.read32();
				case 3: return decodeUTF8(bb.read());
				case 4: return bb.read();
				case 5: {
					let count = bb.read32();
					let value2 = [];
					for (let i = 0; i < count; i++) value2.push(visit());
					return value2;
				}
				case 6: {
					let count = bb.read32();
					let value2 = {};
					for (let i = 0; i < count; i++) value2[decodeUTF8(bb.read())] = visit();
					return value2;
				}
				default: throw new Error("Invalid packet");
			}
		};
		let bb = new ByteBuffer(bytes);
		let id = bb.read32();
		let isRequest = (id & 1) === 0;
		id >>>= 1;
		let value = visit();
		if (bb.ptr !== bytes.length) throw new Error("Invalid packet");
		return {
			id,
			isRequest,
			value
		};
	}
	var ByteBuffer = class {
		constructor(buf = /* @__PURE__ */ new Uint8Array(1024)) {
			this.buf = buf;
			this.len = 0;
			this.ptr = 0;
		}
		_write(delta) {
			if (this.len + delta > this.buf.length) {
				let clone = new Uint8Array((this.len + delta) * 2);
				clone.set(this.buf);
				this.buf = clone;
			}
			this.len += delta;
			return this.len - delta;
		}
		write8(value) {
			let offset = this._write(1);
			this.buf[offset] = value;
		}
		write32(value) {
			let offset = this._write(4);
			writeUInt32LE(this.buf, value, offset);
		}
		write(bytes) {
			let offset = this._write(4 + bytes.length);
			writeUInt32LE(this.buf, bytes.length, offset);
			this.buf.set(bytes, offset + 4);
		}
		_read(delta) {
			if (this.ptr + delta > this.buf.length) throw new Error("Invalid packet");
			this.ptr += delta;
			return this.ptr - delta;
		}
		read8() {
			return this.buf[this._read(1)];
		}
		read32() {
			return readUInt32LE(this.buf, this._read(4));
		}
		read() {
			let length = this.read32();
			let bytes = new Uint8Array(length);
			let ptr = this._read(bytes.length);
			bytes.set(this.buf.subarray(ptr, ptr + length));
			return bytes;
		}
	};
	var encodeUTF8;
	var decodeUTF8;
	var encodeInvariant;
	if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
		let encoder = new TextEncoder();
		let decoder = new TextDecoder();
		encodeUTF8 = (text) => encoder.encode(text);
		decodeUTF8 = (bytes) => decoder.decode(bytes);
		encodeInvariant = "new TextEncoder().encode(\"\")";
	} else if (typeof Buffer !== "undefined") {
		encodeUTF8 = (text) => Buffer.from(text);
		decodeUTF8 = (bytes) => {
			let { buffer, byteOffset, byteLength } = bytes;
			return Buffer.from(buffer, byteOffset, byteLength).toString();
		};
		encodeInvariant = "Buffer.from(\"\")";
	} else throw new Error("No UTF-8 codec found");
	if (!(encodeUTF8("") instanceof Uint8Array)) throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
	function readUInt32LE(buffer, offset) {
		return (buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24) >>> 0;
	}
	function writeUInt32LE(buffer, value, offset) {
		buffer[offset++] = value;
		buffer[offset++] = value >> 8;
		buffer[offset++] = value >> 16;
		buffer[offset++] = value >> 24;
	}
	var fromCharCode = String.fromCharCode;
	function throwSyntaxError(bytes, index, message) {
		const c = bytes[index];
		let line = 1;
		let column = 0;
		for (let i = 0; i < index; i++) if (bytes[i] === 10) {
			line++;
			column = 0;
		} else column++;
		throw new SyntaxError(message ? message : index === bytes.length ? "Unexpected end of input while parsing JSON" : c >= 32 && c <= 126 ? `Unexpected character ${fromCharCode(c)} in JSON at position ${index} (line ${line}, column ${column})` : `Unexpected byte 0x${c.toString(16)} in JSON at position ${index} (line ${line}, column ${column})`);
	}
	function JSON_parse(bytes) {
		if (!(bytes instanceof Uint8Array)) throw new Error(`JSON input must be a Uint8Array`);
		const propertyStack = [];
		const objectStack = [];
		const stateStack = [];
		const length = bytes.length;
		let property = null;
		let state = 0;
		let object;
		let i = 0;
		while (i < length) {
			let c = bytes[i++];
			if (c <= 32) continue;
			let value;
			if (state === 2 && property === null && c !== 34 && c !== 125) throwSyntaxError(bytes, --i);
			switch (c) {
				case 116:
					if (bytes[i++] !== 114 || bytes[i++] !== 117 || bytes[i++] !== 101) throwSyntaxError(bytes, --i);
					value = true;
					break;
				case 102:
					if (bytes[i++] !== 97 || bytes[i++] !== 108 || bytes[i++] !== 115 || bytes[i++] !== 101) throwSyntaxError(bytes, --i);
					value = false;
					break;
				case 110:
					if (bytes[i++] !== 117 || bytes[i++] !== 108 || bytes[i++] !== 108) throwSyntaxError(bytes, --i);
					value = null;
					break;
				case 45:
				case 46:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57: {
					let index = i;
					value = fromCharCode(c);
					c = bytes[i];
					while (true) {
						switch (c) {
							case 43:
							case 45:
							case 46:
							case 48:
							case 49:
							case 50:
							case 51:
							case 52:
							case 53:
							case 54:
							case 55:
							case 56:
							case 57:
							case 101:
							case 69:
								value += fromCharCode(c);
								c = bytes[++i];
								continue;
						}
						break;
					}
					value = +value;
					if (isNaN(value)) throwSyntaxError(bytes, --index, "Invalid number");
					break;
				}
				case 34:
					value = "";
					while (true) {
						if (i >= length) throwSyntaxError(bytes, length);
						c = bytes[i++];
						if (c === 34) break;
						else if (c === 92) switch (bytes[i++]) {
							case 34:
								value += "\"";
								break;
							case 47:
								value += "/";
								break;
							case 92:
								value += "\\";
								break;
							case 98:
								value += "\b";
								break;
							case 102:
								value += "\f";
								break;
							case 110:
								value += "\n";
								break;
							case 114:
								value += "\r";
								break;
							case 116:
								value += "	";
								break;
							case 117: {
								let code = 0;
								for (let j = 0; j < 4; j++) {
									c = bytes[i++];
									code <<= 4;
									if (c >= 48 && c <= 57) code |= c - 48;
									else if (c >= 97 && c <= 102) code |= c + -87;
									else if (c >= 65 && c <= 70) code |= c + -55;
									else throwSyntaxError(bytes, --i);
								}
								value += fromCharCode(code);
								break;
							}
							default: throwSyntaxError(bytes, --i);
						}
						else if (c <= 127) value += fromCharCode(c);
						else if ((c & 224) === 192) value += fromCharCode((c & 31) << 6 | bytes[i++] & 63);
						else if ((c & 240) === 224) value += fromCharCode((c & 15) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63);
						else if ((c & 248) == 240) {
							let codePoint = (c & 7) << 18 | (bytes[i++] & 63) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
							if (codePoint > 65535) {
								codePoint -= 65536;
								value += fromCharCode(codePoint >> 10 & 1023 | 55296);
								codePoint = 56320 | codePoint & 1023;
							}
							value += fromCharCode(codePoint);
						}
					}
					value[0];
					break;
				case 91:
					value = [];
					propertyStack.push(property);
					objectStack.push(object);
					stateStack.push(state);
					property = null;
					object = value;
					state = 1;
					continue;
				case 123:
					value = {};
					propertyStack.push(property);
					objectStack.push(object);
					stateStack.push(state);
					property = null;
					object = value;
					state = 2;
					continue;
				case 93:
					if (state !== 1) throwSyntaxError(bytes, --i);
					value = object;
					property = propertyStack.pop();
					object = objectStack.pop();
					state = stateStack.pop();
					break;
				case 125:
					if (state !== 2) throwSyntaxError(bytes, --i);
					value = object;
					property = propertyStack.pop();
					object = objectStack.pop();
					state = stateStack.pop();
					break;
				default: throwSyntaxError(bytes, --i);
			}
			c = bytes[i];
			while (c <= 32) c = bytes[++i];
			switch (state) {
				case 0:
					if (i === length) return value;
					break;
				case 1:
					object.push(value);
					if (c === 44) {
						i++;
						continue;
					}
					if (c === 93) continue;
					break;
				case 2: if (property === null) {
					property = value;
					if (c === 58) {
						i++;
						continue;
					}
				} else {
					object[property] = value;
					property = null;
					if (c === 44) {
						i++;
						continue;
					}
					if (c === 125) continue;
				}
			}
			break;
		}
		throwSyntaxError(bytes, i);
	}
	var quote = JSON.stringify;
	var buildLogLevelDefault = "warning";
	var transformLogLevelDefault = "silent";
	function validateAndJoinStringArray(values, what) {
		const toJoin = [];
		for (const value of values) {
			validateStringValue(value, what);
			if (value.indexOf(",") >= 0) throw new Error(`Invalid ${what}: ${value}`);
			toJoin.push(value);
		}
		return toJoin.join(",");
	}
	var canBeAnything = () => null;
	var mustBeBoolean = (value) => typeof value === "boolean" ? null : "a boolean";
	var mustBeString = (value) => typeof value === "string" ? null : "a string";
	var mustBeRegExp = (value) => value instanceof RegExp ? null : "a RegExp object";
	var mustBeInteger = (value) => typeof value === "number" && value === (value | 0) ? null : "an integer";
	var mustBeValidPortNumber = (value) => typeof value === "number" && value === (value | 0) && value >= 0 && value <= 65535 ? null : "a valid port number";
	var mustBeFunction = (value) => typeof value === "function" ? null : "a function";
	var mustBeArray = (value) => Array.isArray(value) ? null : "an array";
	var mustBeArrayOfStrings = (value) => Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "an array of strings";
	var mustBeObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
	var mustBeEntryPoints = (value) => typeof value === "object" && value !== null ? null : "an array or an object";
	var mustBeWebAssemblyModule = (value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
	var mustBeObjectOrNull = (value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
	var mustBeStringOrBoolean = (value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
	var mustBeStringOrObject = (value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
	var mustBeStringOrArrayOfStrings = (value) => typeof value === "string" || Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "a string or an array of strings";
	var mustBeStringOrUint8Array = (value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
	var mustBeStringOrURL = (value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL";
	function getFlag(object, keys, key, mustBeFn) {
		let value = object[key];
		keys[key + ""] = true;
		if (value === void 0) return void 0;
		let mustBe = mustBeFn(value);
		if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
		return value;
	}
	function checkForInvalidFlags(object, keys, where) {
		for (let key in object) if (!(key in keys)) throw new Error(`Invalid option ${where}: ${quote(key)}`);
	}
	function validateInitializeOptions(options) {
		let keys = /* @__PURE__ */ Object.create(null);
		let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
		let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
		let worker = getFlag(options, keys, "worker", mustBeBoolean);
		checkForInvalidFlags(options, keys, "in initialize() call");
		return {
			wasmURL,
			wasmModule,
			worker
		};
	}
	function validateMangleCache(mangleCache) {
		let validated;
		if (mangleCache !== void 0) {
			validated = /* @__PURE__ */ Object.create(null);
			for (let key in mangleCache) {
				let value = mangleCache[key];
				if (typeof value === "string" || value === false) validated[key] = value;
				else throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
			}
		}
		return validated;
	}
	function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
		let color = getFlag(options, keys, "color", mustBeBoolean);
		let logLevel = getFlag(options, keys, "logLevel", mustBeString);
		let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
		let logStyle = getFlag(options, keys, "logStyle", mustBeString);
		if (color !== void 0) flags.push(`--color=${color}`);
		else if (isTTY2) flags.push(`--color=true`);
		flags.push(`--log-level=${logLevel || logLevelDefault}`);
		flags.push(`--log-limit=${logLimit || 0}`);
		if (logStyle) flags.push(`--log-style=${logStyle}`);
	}
	function validateStringValue(value, what, key) {
		if (typeof value !== "string") throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
		return value;
	}
	function pushCommonFlags(flags, options, keys) {
		let legalComments = getFlag(options, keys, "legalComments", mustBeString);
		let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
		let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
		let target = getFlag(options, keys, "target", mustBeStringOrArrayOfStrings);
		let format = getFlag(options, keys, "format", mustBeString);
		let globalName = getFlag(options, keys, "globalName", mustBeString);
		let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
		let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
		let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
		let minify = getFlag(options, keys, "minify", mustBeBoolean);
		let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
		let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
		let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
		let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
		let drop = getFlag(options, keys, "drop", mustBeArrayOfStrings);
		let dropLabels = getFlag(options, keys, "dropLabels", mustBeArrayOfStrings);
		let charset = getFlag(options, keys, "charset", mustBeString);
		let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
		let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
		let jsx = getFlag(options, keys, "jsx", mustBeString);
		let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
		let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
		let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
		let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
		let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
		let define = getFlag(options, keys, "define", mustBeObject);
		let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
		let supported = getFlag(options, keys, "supported", mustBeObject);
		let pure = getFlag(options, keys, "pure", mustBeArrayOfStrings);
		let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
		let platform = getFlag(options, keys, "platform", mustBeString);
		let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
		let absPaths = getFlag(options, keys, "absPaths", mustBeArrayOfStrings);
		if (legalComments) flags.push(`--legal-comments=${legalComments}`);
		if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
		if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
		if (target) flags.push(`--target=${validateAndJoinStringArray(Array.isArray(target) ? target : [target], "target")}`);
		if (format) flags.push(`--format=${format}`);
		if (globalName) flags.push(`--global-name=${globalName}`);
		if (platform) flags.push(`--platform=${platform}`);
		if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
		if (minify) flags.push("--minify");
		if (minifySyntax) flags.push("--minify-syntax");
		if (minifyWhitespace) flags.push("--minify-whitespace");
		if (minifyIdentifiers) flags.push("--minify-identifiers");
		if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
		if (charset) flags.push(`--charset=${charset}`);
		if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
		if (ignoreAnnotations) flags.push(`--ignore-annotations`);
		if (drop) for (let what of drop) flags.push(`--drop:${validateStringValue(what, "drop")}`);
		if (dropLabels) flags.push(`--drop-labels=${validateAndJoinStringArray(dropLabels, "drop label")}`);
		if (absPaths) flags.push(`--abs-paths=${validateAndJoinStringArray(absPaths, "abs paths")}`);
		if (mangleProps) flags.push(`--mangle-props=${jsRegExpToGoRegExp(mangleProps)}`);
		if (reserveProps) flags.push(`--reserve-props=${jsRegExpToGoRegExp(reserveProps)}`);
		if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
		if (jsx) flags.push(`--jsx=${jsx}`);
		if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
		if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
		if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
		if (jsxDev) flags.push(`--jsx-dev`);
		if (jsxSideEffects) flags.push(`--jsx-side-effects`);
		if (define) for (let key in define) {
			if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
			flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
		}
		if (logOverride) for (let key in logOverride) {
			if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
			flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
		}
		if (supported) for (let key in supported) {
			if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
			const value = supported[key];
			if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
			flags.push(`--supported:${key}=${value}`);
		}
		if (pure) for (let fn of pure) flags.push(`--pure:${validateStringValue(fn, "pure")}`);
		if (keepNames) flags.push(`--keep-names`);
	}
	function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
		var _a2;
		let flags = [];
		let entries = [];
		let keys = /* @__PURE__ */ Object.create(null);
		let stdinContents = null;
		let stdinResolveDir = null;
		pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
		pushCommonFlags(flags, options, keys);
		let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
		let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
		let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
		let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
		let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
		let outfile = getFlag(options, keys, "outfile", mustBeString);
		let outdir = getFlag(options, keys, "outdir", mustBeString);
		let outbase = getFlag(options, keys, "outbase", mustBeString);
		let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
		let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArrayOfStrings);
		let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArrayOfStrings);
		let mainFields = getFlag(options, keys, "mainFields", mustBeArrayOfStrings);
		let conditions = getFlag(options, keys, "conditions", mustBeArrayOfStrings);
		let external = getFlag(options, keys, "external", mustBeArrayOfStrings);
		let packages = getFlag(options, keys, "packages", mustBeString);
		let alias = getFlag(options, keys, "alias", mustBeObject);
		let loader = getFlag(options, keys, "loader", mustBeObject);
		let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
		let publicPath = getFlag(options, keys, "publicPath", mustBeString);
		let entryNames = getFlag(options, keys, "entryNames", mustBeString);
		let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
		let assetNames = getFlag(options, keys, "assetNames", mustBeString);
		let inject = getFlag(options, keys, "inject", mustBeArrayOfStrings);
		let banner = getFlag(options, keys, "banner", mustBeObject);
		let footer = getFlag(options, keys, "footer", mustBeObject);
		let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
		let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
		let stdin = getFlag(options, keys, "stdin", mustBeObject);
		let write = (_a2 = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a2 : writeDefault;
		let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
		let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
		keys.plugins = true;
		checkForInvalidFlags(options, keys, `in ${callName}() call`);
		if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
		if (bundle) flags.push("--bundle");
		if (allowOverwrite) flags.push("--allow-overwrite");
		if (splitting) flags.push("--splitting");
		if (preserveSymlinks) flags.push("--preserve-symlinks");
		if (metafile) flags.push(`--metafile`);
		if (outfile) flags.push(`--outfile=${outfile}`);
		if (outdir) flags.push(`--outdir=${outdir}`);
		if (outbase) flags.push(`--outbase=${outbase}`);
		if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
		if (packages) flags.push(`--packages=${packages}`);
		if (resolveExtensions) flags.push(`--resolve-extensions=${validateAndJoinStringArray(resolveExtensions, "resolve extension")}`);
		if (publicPath) flags.push(`--public-path=${publicPath}`);
		if (entryNames) flags.push(`--entry-names=${entryNames}`);
		if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
		if (assetNames) flags.push(`--asset-names=${assetNames}`);
		if (mainFields) flags.push(`--main-fields=${validateAndJoinStringArray(mainFields, "main field")}`);
		if (conditions) flags.push(`--conditions=${validateAndJoinStringArray(conditions, "condition")}`);
		if (external) for (let name of external) flags.push(`--external:${validateStringValue(name, "external")}`);
		if (alias) for (let old in alias) {
			if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
			flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
		}
		if (banner) for (let type in banner) {
			if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
			flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
		}
		if (footer) for (let type in footer) {
			if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
			flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
		}
		if (inject) for (let path3 of inject) flags.push(`--inject:${validateStringValue(path3, "inject")}`);
		if (loader) for (let ext in loader) {
			if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
			flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
		}
		if (outExtension) for (let ext in outExtension) {
			if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
			flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
		}
		if (entryPoints) {
			if (Array.isArray(entryPoints)) for (let i = 0, n = entryPoints.length; i < n; i++) {
				let entryPoint = entryPoints[i];
				if (typeof entryPoint === "object" && entryPoint !== null) {
					let entryPointKeys = /* @__PURE__ */ Object.create(null);
					let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
					let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
					checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
					if (input === void 0) throw new Error("Missing property \"in\" for entry point at index " + i);
					if (output === void 0) throw new Error("Missing property \"out\" for entry point at index " + i);
					entries.push([output, input]);
				} else entries.push(["", validateStringValue(entryPoint, "entry point at index " + i)]);
			}
			else for (let key in entryPoints) entries.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
		}
		if (stdin) {
			let stdinKeys = /* @__PURE__ */ Object.create(null);
			let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
			let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
			let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
			let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
			checkForInvalidFlags(stdin, stdinKeys, "in \"stdin\" object");
			if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
			if (loader2) flags.push(`--loader=${loader2}`);
			if (resolveDir) stdinResolveDir = resolveDir;
			if (typeof contents === "string") stdinContents = encodeUTF8(contents);
			else if (contents instanceof Uint8Array) stdinContents = contents;
		}
		let nodePaths = [];
		if (nodePathsInput) for (let value of nodePathsInput) {
			value += "";
			nodePaths.push(value);
		}
		return {
			entries,
			flags,
			write,
			stdinContents,
			stdinResolveDir,
			absWorkingDir,
			nodePaths,
			mangleCache: validateMangleCache(mangleCache)
		};
	}
	function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
		let flags = [];
		let keys = /* @__PURE__ */ Object.create(null);
		pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
		pushCommonFlags(flags, options, keys);
		let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
		let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
		let loader = getFlag(options, keys, "loader", mustBeString);
		let banner = getFlag(options, keys, "banner", mustBeString);
		let footer = getFlag(options, keys, "footer", mustBeString);
		let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
		checkForInvalidFlags(options, keys, `in ${callName}() call`);
		if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
		if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
		if (loader) flags.push(`--loader=${loader}`);
		if (banner) flags.push(`--banner=${banner}`);
		if (footer) flags.push(`--footer=${footer}`);
		return {
			flags,
			mangleCache: validateMangleCache(mangleCache)
		};
	}
	function createChannel(streamIn) {
		const requestCallbacksByKey = {};
		const closeData = {
			didClose: false,
			reason: ""
		};
		let responseCallbacks = {};
		let nextRequestID = 0;
		let nextBuildKey = 0;
		let stdout = /* @__PURE__ */ new Uint8Array(16384);
		let stdoutUsed = 0;
		let readFromStdout = (chunk) => {
			let limit = stdoutUsed + chunk.length;
			if (limit > stdout.length) {
				let swap = new Uint8Array(limit * 2);
				swap.set(stdout);
				stdout = swap;
			}
			stdout.set(chunk, stdoutUsed);
			stdoutUsed += chunk.length;
			let offset = 0;
			while (offset + 4 <= stdoutUsed) {
				let length = readUInt32LE(stdout, offset);
				if (offset + 4 + length > stdoutUsed) break;
				offset += 4;
				handleIncomingPacket(stdout.subarray(offset, offset + length));
				offset += length;
			}
			if (offset > 0) {
				stdout.copyWithin(0, offset, stdoutUsed);
				stdoutUsed -= offset;
			}
		};
		let afterClose = (error) => {
			closeData.didClose = true;
			if (error) closeData.reason = ": " + (error.message || error);
			const text = "The service was stopped" + closeData.reason;
			for (let id in responseCallbacks) responseCallbacks[id](text, null);
			responseCallbacks = {};
		};
		let sendRequest = (refs, value, callback) => {
			if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
			let id = nextRequestID++;
			responseCallbacks[id] = (error, response) => {
				try {
					callback(error, response);
				} finally {
					if (refs) refs.unref();
				}
			};
			if (refs) refs.ref();
			streamIn.writeToStdin(encodePacket({
				id,
				isRequest: true,
				value
			}));
		};
		let sendResponse = (id, value) => {
			if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
			streamIn.writeToStdin(encodePacket({
				id,
				isRequest: false,
				value
			}));
		};
		let handleRequest = async (id, request) => {
			try {
				if (request.command === "ping") {
					sendResponse(id, {});
					return;
				}
				if (typeof request.key === "number") {
					const requestCallbacks = requestCallbacksByKey[request.key];
					if (!requestCallbacks) return;
					const callback = requestCallbacks[request.command];
					if (callback) {
						await callback(id, request);
						return;
					}
				}
				throw new Error(`Invalid command: ` + request.command);
			} catch (e) {
				const errors = [extractErrorMessageV8(e, streamIn, null, void 0, "")];
				try {
					sendResponse(id, { errors });
				} catch {}
			}
		};
		let isFirstPacket = true;
		let handleIncomingPacket = (bytes) => {
			if (isFirstPacket) {
				isFirstPacket = false;
				let binaryVersion = String.fromCharCode(...bytes);
				if (binaryVersion !== "0.28.2") throw new Error(`Cannot start service: Host version "0.28.2" does not match binary version ${quote(binaryVersion)}`);
				return;
			}
			let packet = decodePacket(bytes);
			if (packet.isRequest) handleRequest(packet.id, packet.value);
			else {
				let callback = responseCallbacks[packet.id];
				delete responseCallbacks[packet.id];
				if (packet.value.error) callback(packet.value.error, {});
				else callback(null, packet.value);
			}
		};
		let buildOrContext = ({ callName, refs, options, isTTY: isTTY2, defaultWD: defaultWD2, callback }) => {
			let refCount = 0;
			const buildKey = nextBuildKey++;
			const requestCallbacks = {};
			const buildRefs = {
				ref() {
					if (++refCount === 1) {
						if (refs) refs.ref();
					}
				},
				unref() {
					if (--refCount === 0) {
						delete requestCallbacksByKey[buildKey];
						if (refs) refs.unref();
					}
				}
			};
			requestCallbacksByKey[buildKey] = requestCallbacks;
			buildRefs.ref();
			buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, buildRefs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, (err, res) => {
				try {
					callback(err, res);
				} finally {
					buildRefs.unref();
				}
			});
		};
		let transform2 = ({ callName, refs, input, options, isTTY: isTTY2, fs: fs3, callback }) => {
			const details = createObjectStash();
			let start = (inputPath) => {
				try {
					if (typeof input !== "string" && !(input instanceof Uint8Array)) throw new Error("The input to \"transform\" must be a string or a Uint8Array");
					let { flags, mangleCache } = flagsForTransformOptions(callName, options, isTTY2, transformLogLevelDefault);
					let request = {
						command: "transform",
						flags,
						inputFS: inputPath !== null,
						input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
					};
					if (mangleCache) request.mangleCache = mangleCache;
					sendRequest(refs, request, (error, response) => {
						if (error) return callback(new Error(error), null);
						let errors = replaceDetailsInMessages(response.errors, details);
						let warnings = replaceDetailsInMessages(response.warnings, details);
						let outstanding = 1;
						let next = () => {
							if (--outstanding === 0) {
								let result = {
									warnings,
									code: response.code,
									map: response.map,
									mangleCache: void 0,
									legalComments: void 0
								};
								if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
								if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
								callback(null, result);
							}
						};
						if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
						if (response.codeFS) {
							outstanding++;
							fs3.readFile(response.code, (err, contents) => {
								if (err !== null) callback(err, null);
								else {
									response.code = contents;
									next();
								}
							});
						}
						if (response.mapFS) {
							outstanding++;
							fs3.readFile(response.map, (err, contents) => {
								if (err !== null) callback(err, null);
								else {
									response.map = contents;
									next();
								}
							});
						}
						next();
					});
				} catch (e) {
					let flags = [];
					try {
						pushLogFlags(flags, options, {}, isTTY2, transformLogLevelDefault);
					} catch {}
					const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
					sendRequest(refs, {
						command: "error",
						flags,
						error
					}, () => {
						error.detail = details.load(error.detail);
						callback(failureErrorWithLog("Transform failed", [error], []), null);
					});
				}
			};
			if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1048576) {
				let next = start;
				start = () => fs3.writeFile(input, next);
			}
			start(null);
		};
		let formatMessages2 = ({ callName, refs, messages, options, callback }) => {
			if (!options) throw new Error(`Missing second argument in ${callName}() call`);
			let keys = {};
			let kind = getFlag(options, keys, "kind", mustBeString);
			let color = getFlag(options, keys, "color", mustBeBoolean);
			let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
			let logStyle = getFlag(options, keys, "logStyle", mustBeString);
			checkForInvalidFlags(options, keys, `in ${callName}() call`);
			if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
			if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
			let request = {
				command: "format-msgs",
				messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
				isWarning: kind === "warning"
			};
			if (color !== void 0) request.color = color;
			if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
			if (logStyle !== void 0) request.logStyle = logStyle;
			sendRequest(refs, request, (error, response) => {
				if (error) return callback(new Error(error), null);
				callback(null, response.messages);
			});
		};
		let analyzeMetafile2 = ({ callName, refs, metafile, options, callback }) => {
			if (options === void 0) options = {};
			let keys = {};
			let color = getFlag(options, keys, "color", mustBeBoolean);
			let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
			checkForInvalidFlags(options, keys, `in ${callName}() call`);
			let request = {
				command: "analyze-metafile",
				metafile
			};
			if (color !== void 0) request.color = color;
			if (verbose !== void 0) request.verbose = verbose;
			sendRequest(refs, request, (error, response) => {
				if (error) return callback(new Error(error), null);
				callback(null, response.result);
			});
		};
		return {
			readFromStdout,
			afterClose,
			service: {
				buildOrContext,
				transform: transform2,
				formatMessages: formatMessages2,
				analyzeMetafile: analyzeMetafile2
			}
		};
	}
	function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, callback) {
		const details = createObjectStash();
		const isContext = callName === "context";
		const handleError = (e, pluginName) => {
			const flags = [];
			try {
				pushLogFlags(flags, options, {}, isTTY2, buildLogLevelDefault);
			} catch {}
			const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
			sendRequest(refs, {
				command: "error",
				flags,
				error: message
			}, () => {
				message.detail = details.load(message.detail);
				callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [message], []), null);
			});
		};
		let plugins;
		if (typeof options === "object") {
			const value = options.plugins;
			if (value !== void 0) {
				if (!Array.isArray(value)) return handleError(/* @__PURE__ */ new Error(`"plugins" must be an array`), "");
				plugins = value;
			}
		}
		if (plugins && plugins.length > 0) {
			if (streamIn.isSync) return handleError(/* @__PURE__ */ new Error("Cannot use plugins in synchronous API calls"), "");
			handlePlugins(buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, plugins, details).then((result) => {
				if (!result.ok) return handleError(result.error, result.pluginName);
				try {
					buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
				} catch (e) {
					handleError(e, "");
				}
			}, (e) => handleError(e, ""));
			return;
		}
		try {
			buildOrContextContinue(null, (result, done) => done([], []), () => {});
		} catch (e) {
			handleError(e, "");
		}
		function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
			const writeDefault = streamIn.hasFS;
			const { entries, flags, write, stdinContents, stdinResolveDir, absWorkingDir, nodePaths, mangleCache } = flagsForBuildOptions(callName, options, isTTY2, buildLogLevelDefault, writeDefault);
			if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
			const request = {
				command: "build",
				key: buildKey,
				entries,
				flags,
				write,
				stdinContents,
				stdinResolveDir,
				absWorkingDir: absWorkingDir || defaultWD2,
				nodePaths,
				context: isContext
			};
			if (requestPlugins) request.plugins = requestPlugins;
			if (mangleCache) request.mangleCache = mangleCache;
			const buildResponseToResult = (response, callback2) => {
				const result = {
					errors: replaceDetailsInMessages(response.errors, details),
					warnings: replaceDetailsInMessages(response.warnings, details),
					outputFiles: void 0,
					metafile: void 0,
					mangleCache: void 0
				};
				const originalErrors = result.errors.slice();
				const originalWarnings = result.warnings.slice();
				if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
				if (response.metafile && response.metafile.length) result.metafile = parseJSON(response.metafile);
				if (response.mangleCache) result.mangleCache = response.mangleCache;
				if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
				runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
					if (originalErrors.length > 0 || onEndErrors.length > 0) return callback2(failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings)), null, onEndErrors, onEndWarnings);
					callback2(null, result, onEndErrors, onEndWarnings);
				});
			};
			let latestResultPromise;
			let provideLatestResult;
			if (isContext) requestCallbacks["on-end"] = (id, request2) => new Promise((resolve) => {
				buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
					const response = {
						errors: onEndErrors,
						warnings: onEndWarnings
					};
					if (provideLatestResult) provideLatestResult(err, result);
					latestResultPromise = void 0;
					provideLatestResult = void 0;
					sendResponse(id, response);
					resolve();
				});
			});
			sendRequest(refs, request, (error, response) => {
				if (error) return callback(new Error(error), null);
				if (!isContext) return buildResponseToResult(response, (err, res) => {
					scheduleOnDisposeCallbacks();
					return callback(err, res);
				});
				if (response.errors.length > 0) return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
				let didDispose = false;
				const result = {
					rebuild: () => {
						if (!latestResultPromise) latestResultPromise = new Promise((resolve, reject) => {
							let settlePromise;
							provideLatestResult = (err, result2) => {
								if (!settlePromise) settlePromise = () => err ? reject(err) : resolve(result2);
							};
							const triggerAnotherBuild = () => {
								sendRequest(refs, {
									command: "rebuild",
									key: buildKey
								}, (error2, response2) => {
									if (error2) reject(new Error(error2));
									else if (settlePromise) settlePromise();
									else triggerAnotherBuild();
								});
							};
							triggerAnotherBuild();
						});
						return latestResultPromise;
					},
					watch: (options2 = {}) => new Promise((resolve, reject) => {
						if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
						const keys = {};
						const delay = getFlag(options2, keys, "delay", mustBeInteger);
						checkForInvalidFlags(options2, keys, `in watch() call`);
						const request2 = {
							command: "watch",
							key: buildKey
						};
						if (delay) request2.delay = delay;
						sendRequest(refs, request2, (error2) => {
							if (error2) reject(new Error(error2));
							else resolve(void 0);
						});
					}),
					serve: (options2 = {}) => new Promise((resolve, reject) => {
						if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
						const keys = {};
						const port = getFlag(options2, keys, "port", mustBeValidPortNumber);
						const host = getFlag(options2, keys, "host", mustBeString);
						const servedir = getFlag(options2, keys, "servedir", mustBeString);
						const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
						const certfile = getFlag(options2, keys, "certfile", mustBeString);
						const fallback = getFlag(options2, keys, "fallback", mustBeString);
						const cors = getFlag(options2, keys, "cors", mustBeObject);
						const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
						checkForInvalidFlags(options2, keys, `in serve() call`);
						const request2 = {
							command: "serve",
							key: buildKey,
							onRequest: !!onRequest
						};
						if (port !== void 0) request2.port = port;
						if (host !== void 0) request2.host = host;
						if (servedir !== void 0) request2.servedir = servedir;
						if (keyfile !== void 0) request2.keyfile = keyfile;
						if (certfile !== void 0) request2.certfile = certfile;
						if (fallback !== void 0) request2.fallback = fallback;
						if (cors) {
							const corsKeys = {};
							const origin = getFlag(cors, corsKeys, "origin", mustBeStringOrArrayOfStrings);
							checkForInvalidFlags(cors, corsKeys, `on "cors" object`);
							if (Array.isArray(origin)) request2.corsOrigin = origin;
							else if (origin !== void 0) request2.corsOrigin = [origin];
						}
						sendRequest(refs, request2, (error2, response2) => {
							if (error2) return reject(new Error(error2));
							if (onRequest) requestCallbacks["serve-request"] = (id, request3) => {
								onRequest(request3.args);
								sendResponse(id, {});
							};
							resolve(response2);
						});
					}),
					cancel: () => new Promise((resolve) => {
						if (didDispose) return resolve();
						sendRequest(refs, {
							command: "cancel",
							key: buildKey
						}, () => {
							resolve();
						});
					}),
					dispose: () => new Promise((resolve) => {
						if (didDispose) return resolve();
						didDispose = true;
						sendRequest(refs, {
							command: "dispose",
							key: buildKey
						}, () => {
							resolve();
							scheduleOnDisposeCallbacks();
							refs.unref();
						});
					})
				};
				refs.ref();
				callback(null, result);
			});
		}
	}
	var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => {
		let onStartCallbacks = [];
		let onEndCallbacks = [];
		let onResolveCallbacks = {};
		let onLoadCallbacks = {};
		let onDisposeCallbacks = [];
		let nextCallbackID = 0;
		let i = 0;
		let requestPlugins = [];
		let isSetupDone = false;
		plugins = [...plugins];
		for (let item of plugins) {
			let keys = {};
			if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
			const name = getFlag(item, keys, "name", mustBeString);
			if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
			try {
				let setup = getFlag(item, keys, "setup", mustBeFunction);
				if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
				checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
				let plugin = {
					name,
					onStart: false,
					onEnd: false,
					onResolve: [],
					onLoad: []
				};
				i++;
				let resolve = (path3, options = {}) => {
					if (!isSetupDone) throw new Error("Cannot call \"resolve\" before plugin setup has completed");
					if (typeof path3 !== "string") throw new Error(`The path to resolve must be a string`);
					let keys2 = /* @__PURE__ */ Object.create(null);
					let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
					let importer = getFlag(options, keys2, "importer", mustBeString);
					let namespace = getFlag(options, keys2, "namespace", mustBeString);
					let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
					let kind = getFlag(options, keys2, "kind", mustBeString);
					let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
					let importAttributes = getFlag(options, keys2, "with", mustBeObject);
					checkForInvalidFlags(options, keys2, "in resolve() call");
					return new Promise((resolve2, reject) => {
						const request = {
							command: "resolve",
							path: path3,
							key: buildKey,
							pluginName: name
						};
						if (pluginName != null) request.pluginName = pluginName;
						if (importer != null) request.importer = importer;
						if (namespace != null) request.namespace = namespace;
						if (resolveDir != null) request.resolveDir = resolveDir;
						if (kind != null) request.kind = kind;
						else throw new Error(`Must specify "kind" when calling "resolve"`);
						if (pluginData != null) request.pluginData = details.store(pluginData);
						if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
						sendRequest(refs, request, (error, response) => {
							if (error !== null) reject(new Error(error));
							else resolve2({
								errors: replaceDetailsInMessages(response.errors, details),
								warnings: replaceDetailsInMessages(response.warnings, details),
								path: response.path,
								external: response.external,
								sideEffects: response.sideEffects,
								namespace: response.namespace,
								suffix: response.suffix,
								pluginData: details.load(response.pluginData)
							});
						});
					});
				};
				let promise = setup({
					initialOptions,
					resolve,
					onStart(callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onStart" callback registered here:`), streamIn, "onStart");
						onStartCallbacks.push({
							name,
							callback,
							note: registeredNote
						});
						plugin.onStart = true;
					},
					onEnd(callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onEnd" callback registered here:`), streamIn, "onEnd");
						onEndCallbacks.push({
							name,
							callback,
							note: registeredNote
						});
						plugin.onEnd = true;
					},
					onResolve(options, callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onResolve" callback registered here:`), streamIn, "onResolve");
						let keys2 = {};
						let filter = getFlag(options, keys2, "filter", mustBeRegExp);
						let namespace = getFlag(options, keys2, "namespace", mustBeString);
						checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
						if (filter == null) throw new Error(`onResolve() call is missing a filter`);
						let id = nextCallbackID++;
						onResolveCallbacks[id] = {
							name,
							callback,
							note: registeredNote
						};
						plugin.onResolve.push({
							id,
							filter: jsRegExpToGoRegExp(filter),
							namespace: namespace || ""
						});
					},
					onLoad(options, callback) {
						let registeredNote = extractCallerV8(/* @__PURE__ */ new Error(`This error came from the "onLoad" callback registered here:`), streamIn, "onLoad");
						let keys2 = {};
						let filter = getFlag(options, keys2, "filter", mustBeRegExp);
						let namespace = getFlag(options, keys2, "namespace", mustBeString);
						checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
						if (filter == null) throw new Error(`onLoad() call is missing a filter`);
						let id = nextCallbackID++;
						onLoadCallbacks[id] = {
							name,
							callback,
							note: registeredNote
						};
						plugin.onLoad.push({
							id,
							filter: jsRegExpToGoRegExp(filter),
							namespace: namespace || ""
						});
					},
					onDispose(callback) {
						onDisposeCallbacks.push(callback);
					},
					esbuild: streamIn.esbuild
				});
				if (promise) await promise;
				requestPlugins.push(plugin);
			} catch (e) {
				return {
					ok: false,
					error: e,
					pluginName: name
				};
			}
		}
		requestCallbacks["on-start"] = async (id, request) => {
			details.clear();
			let response = {
				errors: [],
				warnings: []
			};
			await Promise.all(onStartCallbacks.map(async ({ name, callback, note }) => {
				try {
					let result = await callback();
					if (result != null) {
						if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
						let keys = {};
						let errors = getFlag(result, keys, "errors", mustBeArray);
						let warnings = getFlag(result, keys, "warnings", mustBeArray);
						checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
						if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
						if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
					}
				} catch (e) {
					response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
				}
			}));
			sendResponse(id, response);
		};
		requestCallbacks["on-resolve"] = async (id, request) => {
			let response = {}, name = "", callback, note;
			for (let id2 of request.ids) try {
				({name, callback, note} = onResolveCallbacks[id2]);
				let result = await callback({
					path: request.path,
					importer: request.importer,
					namespace: request.namespace,
					resolveDir: request.resolveDir,
					kind: request.kind,
					pluginData: details.load(request.pluginData),
					with: request.with
				});
				if (result != null) {
					if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
					let keys = {};
					let pluginName = getFlag(result, keys, "pluginName", mustBeString);
					let path3 = getFlag(result, keys, "path", mustBeString);
					let namespace = getFlag(result, keys, "namespace", mustBeString);
					let suffix = getFlag(result, keys, "suffix", mustBeString);
					let external = getFlag(result, keys, "external", mustBeBoolean);
					let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
					let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
					let errors = getFlag(result, keys, "errors", mustBeArray);
					let warnings = getFlag(result, keys, "warnings", mustBeArray);
					let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
					let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
					checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
					response.id = id2;
					if (pluginName != null) response.pluginName = pluginName;
					if (path3 != null) response.path = path3;
					if (namespace != null) response.namespace = namespace;
					if (suffix != null) response.suffix = suffix;
					if (external != null) response.external = external;
					if (sideEffects != null) response.sideEffects = sideEffects;
					if (pluginData != null) response.pluginData = details.store(pluginData);
					if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
					if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
					if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
					if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
					break;
				}
			} catch (e) {
				response = {
					id: id2,
					errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)]
				};
				break;
			}
			sendResponse(id, response);
		};
		requestCallbacks["on-load"] = async (id, request) => {
			let response = {}, name = "", callback, note;
			for (let id2 of request.ids) try {
				({name, callback, note} = onLoadCallbacks[id2]);
				let result = await callback({
					path: request.path,
					namespace: request.namespace,
					suffix: request.suffix,
					pluginData: details.load(request.pluginData),
					with: request.with
				});
				if (result != null) {
					if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
					let keys = {};
					let pluginName = getFlag(result, keys, "pluginName", mustBeString);
					let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
					let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
					let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
					let loader = getFlag(result, keys, "loader", mustBeString);
					let errors = getFlag(result, keys, "errors", mustBeArray);
					let warnings = getFlag(result, keys, "warnings", mustBeArray);
					let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
					let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
					checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
					response.id = id2;
					if (pluginName != null) response.pluginName = pluginName;
					if (contents instanceof Uint8Array) response.contents = contents;
					else if (contents != null) response.contents = encodeUTF8(contents);
					if (resolveDir != null) response.resolveDir = resolveDir;
					if (pluginData != null) response.pluginData = details.store(pluginData);
					if (loader != null) response.loader = loader;
					if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
					if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
					if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
					if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
					break;
				}
			} catch (e) {
				response = {
					id: id2,
					errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)]
				};
				break;
			}
			sendResponse(id, response);
		};
		let runOnEndCallbacks = (result, done) => done([], []);
		if (onEndCallbacks.length > 0) runOnEndCallbacks = (result, done) => {
			(async () => {
				const onEndErrors = [];
				const onEndWarnings = [];
				for (const { name, callback, note } of onEndCallbacks) {
					let newErrors;
					let newWarnings;
					try {
						const value = await callback(result);
						if (value != null) {
							if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
							let keys = {};
							let errors = getFlag(value, keys, "errors", mustBeArray);
							let warnings = getFlag(value, keys, "warnings", mustBeArray);
							checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
							if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
							if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
						}
					} catch (e) {
						newErrors = [extractErrorMessageV8(e, streamIn, details, note && note(), name)];
					}
					if (newErrors) {
						onEndErrors.push(...newErrors);
						try {
							result.errors.push(...newErrors);
						} catch {}
					}
					if (newWarnings) {
						onEndWarnings.push(...newWarnings);
						try {
							result.warnings.push(...newWarnings);
						} catch {}
					}
				}
				done(onEndErrors, onEndWarnings);
			})();
		};
		let scheduleOnDisposeCallbacks = () => {
			for (const cb of onDisposeCallbacks) setTimeout(() => cb(), 0);
		};
		isSetupDone = true;
		return {
			ok: true,
			requestPlugins,
			runOnEndCallbacks,
			scheduleOnDisposeCallbacks
		};
	};
	function createObjectStash() {
		const map = /* @__PURE__ */ new Map();
		let nextID = 0;
		return {
			clear() {
				map.clear();
			},
			load(id) {
				return map.get(id);
			},
			store(value) {
				if (value === void 0) return -1;
				const id = nextID++;
				map.set(id, value);
				return id;
			}
		};
	}
	function extractCallerV8(e, streamIn, ident) {
		let note;
		let tried = false;
		return () => {
			if (tried) return note;
			tried = true;
			try {
				let lines = (e.stack + "").split("\n");
				lines.splice(1, 1);
				let location = parseStackLinesV8(streamIn, lines, ident);
				if (location) {
					note = {
						text: e.message,
						location
					};
					return note;
				}
			} catch {}
		};
	}
	function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
		let text = "Internal error";
		let location = null;
		try {
			text = (e && e.message || e) + "";
		} catch {}
		try {
			location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
		} catch {}
		return {
			id: "",
			pluginName,
			text,
			location,
			notes: note ? [note] : [],
			detail: stash ? stash.store(e) : -1
		};
	}
	function parseStackLinesV8(streamIn, lines, ident) {
		let at = "    at ";
		if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) for (let i = 1; i < lines.length; i++) {
			let line = lines[i];
			if (!line.startsWith(at)) continue;
			line = line.slice(7);
			while (true) {
				let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
				if (match) {
					line = match[1];
					continue;
				}
				match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
				if (match) {
					line = match[1];
					continue;
				}
				match = /^(\S+):(\d+):(\d+)$/.exec(line);
				if (match) {
					let contents;
					try {
						contents = streamIn.readFileSync(match[1], "utf8");
					} catch {
						break;
					}
					let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
					let column = +match[3] - 1;
					let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
					return {
						file: match[1],
						namespace: "file",
						line: +match[2],
						column: encodeUTF8(lineText.slice(0, column)).length,
						length: encodeUTF8(lineText.slice(column, column + length)).length,
						lineText: lineText + "\n" + lines.slice(1).join("\n"),
						suggestion: ""
					};
				}
				break;
			}
		}
		return null;
	}
	function failureErrorWithLog(text, errors, warnings) {
		let limit = 5;
		text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, 6).map((e, i) => {
			if (i === limit) return "\n...";
			if (!e.location) return `
error: ${e.text}`;
			let { file, line, column } = e.location;
			return `
${file}:${line}:${column}: ERROR: ${e.pluginName ? `[plugin: ${e.pluginName}] ` : ""}${e.text}`;
		}).join("");
		let error = new Error(text);
		for (const [key, value] of [["errors", errors], ["warnings", warnings]]) Object.defineProperty(error, key, {
			configurable: true,
			enumerable: true,
			get: () => value,
			set: (value2) => Object.defineProperty(error, key, {
				configurable: true,
				enumerable: true,
				value: value2
			})
		});
		return error;
	}
	function replaceDetailsInMessages(messages, stash) {
		for (const message of messages) message.detail = stash.load(message.detail);
		return messages;
	}
	function sanitizeLocation(location, where, terminalWidth) {
		if (location == null) return null;
		let keys = {};
		let file = getFlag(location, keys, "file", mustBeString);
		let namespace = getFlag(location, keys, "namespace", mustBeString);
		let line = getFlag(location, keys, "line", mustBeInteger);
		let column = getFlag(location, keys, "column", mustBeInteger);
		let length = getFlag(location, keys, "length", mustBeInteger);
		let lineText = getFlag(location, keys, "lineText", mustBeString);
		let suggestion = getFlag(location, keys, "suggestion", mustBeString);
		checkForInvalidFlags(location, keys, where);
		if (lineText) {
			const relevantASCII = lineText.slice(0, (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80));
			if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) lineText = relevantASCII;
		}
		return {
			file: file || "",
			namespace: namespace || "",
			line: line || 0,
			column: column || 0,
			length: length || 0,
			lineText: lineText || "",
			suggestion: suggestion || ""
		};
	}
	function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
		let messagesClone = [];
		let index = 0;
		for (const message of messages) {
			let keys = {};
			let id = getFlag(message, keys, "id", mustBeString);
			let pluginName = getFlag(message, keys, "pluginName", mustBeString);
			let text = getFlag(message, keys, "text", mustBeString);
			let location = getFlag(message, keys, "location", mustBeObjectOrNull);
			let notes = getFlag(message, keys, "notes", mustBeArray);
			let detail = getFlag(message, keys, "detail", canBeAnything);
			let where = `in element ${index} of "${property}"`;
			checkForInvalidFlags(message, keys, where);
			let notesClone = [];
			if (notes) for (const note of notes) {
				let noteKeys = {};
				let noteText = getFlag(note, noteKeys, "text", mustBeString);
				let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
				checkForInvalidFlags(note, noteKeys, where);
				notesClone.push({
					text: noteText || "",
					location: sanitizeLocation(noteLocation, where, terminalWidth)
				});
			}
			messagesClone.push({
				id: id || "",
				pluginName: pluginName || fallbackPluginName,
				text: text || "",
				location: sanitizeLocation(location, where, terminalWidth),
				notes: notesClone,
				detail: stash ? stash.store(detail) : -1
			});
			index++;
		}
		return messagesClone;
	}
	function sanitizeStringArray(values, property) {
		const result = [];
		for (const value of values) {
			if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
			result.push(value);
		}
		return result;
	}
	function sanitizeStringMap(map, property) {
		const result = /* @__PURE__ */ Object.create(null);
		for (const key in map) {
			const value = map[key];
			if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
			result[key] = value;
		}
		return result;
	}
	function convertOutputFiles({ path: path3, contents, hash }) {
		let text = null;
		return {
			path: path3,
			contents,
			hash,
			get text() {
				const binary = this.contents;
				if (text === null || binary !== contents) {
					contents = binary;
					text = decodeUTF8(binary);
				}
				return text;
			}
		};
	}
	function jsRegExpToGoRegExp(regexp) {
		let result = regexp.source;
		if (regexp.flags) result = `(?${regexp.flags})${result}`;
		return result;
	}
	function parseJSON(bytes) {
		let text;
		try {
			text = decodeUTF8(bytes);
		} catch {
			return JSON_parse(bytes);
		}
		return JSON.parse(text);
	}
	var fs = __require("fs");
	var os = __require("os");
	var path = __require("path");
	var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
	var isValidBinaryPath = (x) => !!x && x !== "/usr/bin/esbuild";
	var packageDarwin_arm64 = "@esbuild/darwin-arm64";
	var packageDarwin_x64 = "@esbuild/darwin-x64";
	var knownWindowsPackages = {
		"win32 arm64 LE": "@esbuild/win32-arm64",
		"win32 ia32 LE": "@esbuild/win32-ia32",
		"win32 x64 LE": "@esbuild/win32-x64"
	};
	var knownUnixlikePackages = {
		"aix ppc64 BE": "@esbuild/aix-ppc64",
		"android arm64 LE": "@esbuild/android-arm64",
		"darwin arm64 LE": "@esbuild/darwin-arm64",
		"darwin x64 LE": "@esbuild/darwin-x64",
		"freebsd arm64 LE": "@esbuild/freebsd-arm64",
		"freebsd x64 LE": "@esbuild/freebsd-x64",
		"linux arm LE": "@esbuild/linux-arm",
		"linux arm64 LE": "@esbuild/linux-arm64",
		"linux ia32 LE": "@esbuild/linux-ia32",
		"linux mips64el LE": "@esbuild/linux-mips64el",
		"linux ppc64 LE": "@esbuild/linux-ppc64",
		"linux riscv64 LE": "@esbuild/linux-riscv64",
		"linux s390x BE": "@esbuild/linux-s390x",
		"linux x64 LE": "@esbuild/linux-x64",
		"linux loong64 LE": "@esbuild/linux-loong64",
		"netbsd arm64 LE": "@esbuild/netbsd-arm64",
		"netbsd x64 LE": "@esbuild/netbsd-x64",
		"openbsd arm64 LE": "@esbuild/openbsd-arm64",
		"openbsd x64 LE": "@esbuild/openbsd-x64",
		"sunos x64 LE": "@esbuild/sunos-x64"
	};
	var knownWebAssemblyFallbackPackages = {
		"android arm LE": "@esbuild/android-arm",
		"android x64 LE": "@esbuild/android-x64",
		"openharmony arm64 LE": "@esbuild/openharmony-arm64"
	};
	function pkgAndSubpathForCurrentPlatform() {
		let pkg;
		let subpath;
		let isWASM = false;
		let platformKey = `${process.platform} ${os.arch()} ${os.endianness()}`;
		if (platformKey in knownWindowsPackages) {
			pkg = knownWindowsPackages[platformKey];
			subpath = "esbuild.exe";
		} else if (platformKey in knownUnixlikePackages) {
			pkg = knownUnixlikePackages[platformKey];
			subpath = "bin/esbuild";
		} else if (platformKey in knownWebAssemblyFallbackPackages) {
			pkg = knownWebAssemblyFallbackPackages[platformKey];
			subpath = "bin/esbuild";
			isWASM = true;
		} else throw new Error(`Unsupported platform: ${platformKey}`);
		return {
			pkg,
			subpath,
			isWASM
		};
	}
	function pkgForSomeOtherPlatform() {
		const libMainJS = __require.resolve("esbuild");
		const nodeModulesDirectory = path.dirname(path.dirname(path.dirname(libMainJS)));
		if (path.basename(nodeModulesDirectory) === "node_modules") {
			for (const unixKey in knownUnixlikePackages) try {
				const pkg = knownUnixlikePackages[unixKey];
				if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
			} catch {}
			for (const windowsKey in knownWindowsPackages) try {
				const pkg = knownWindowsPackages[windowsKey];
				if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
			} catch {}
		}
		return null;
	}
	function downloadedBinPath(pkg, subpath) {
		const esbuildLibDir = path.dirname(__require.resolve("esbuild"));
		return path.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path.basename(subpath)}`);
	}
	function generateBinPath() {
		if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
			if (!fs.existsSync(ESBUILD_BINARY_PATH)) console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
			else return {
				binPath: ESBUILD_BINARY_PATH,
				isWASM: false
			};
		}
		const { pkg, subpath, isWASM } = pkgAndSubpathForCurrentPlatform();
		let binPath;
		try {
			binPath = __require.resolve(`${pkg}/${subpath}`);
		} catch (e) {
			binPath = downloadedBinPath(pkg, subpath);
			if (!fs.existsSync(binPath)) {
				try {
					__require.resolve(pkg);
				} catch {
					const otherPkg = pkgForSomeOtherPlatform();
					if (otherPkg) {
						let suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild on Windows or macOS and copying "node_modules"
into a Docker image that runs Linux, or by copying "node_modules" between
Windows and WSL environments.

If you are installing with npm, you can try not copying the "node_modules"
directory when you copy the files over, and running "npm ci" or "npm install"
on the destination platform after the copy. Or you could consider using yarn
instead of npm which has built-in support for installing a package on multiple
platforms simultaneously.

If you are installing with yarn, you can try listing both this platform and the
other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
						if (pkg === packageDarwin_x64 && otherPkg === packageDarwin_arm64 || pkg === packageDarwin_arm64 && otherPkg === packageDarwin_x64) suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild with npm running inside of Rosetta 2 and then
trying to use it with node running outside of Rosetta 2, or vice versa (Rosetta
2 is Apple's on-the-fly x86_64-to-arm64 translation service).

If you are installing with npm, you can try ensuring that both npm and node are
not running under Rosetta 2 and then reinstalling esbuild. This likely involves
changing how you installed npm and/or node. For example, installing node with
the universal installer here should work: https://nodejs.org/en/download/. Or
you could consider using yarn instead of npm which has built-in support for
installing a package on multiple platforms simultaneously.

If you are installing with yarn, you can try listing both "arm64" and "x64"
in your ".yarnrc.yml" file using the "supportedArchitectures" feature:
https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
						throw new Error(`
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
${suggestions}
Another alternative is to use the "esbuild-wasm" package instead, which works
the same way on all platforms. But it comes with a heavy performance cost and
can sometimes be 10x slower than the "esbuild" package, so you may also not
want to do that.
`);
					}
					throw new Error(`The package "${pkg}" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" or "--omit=optional" flags. The "optionalDependencies" feature
of "package.json" is used by esbuild to install the correct binary executable
for your current platform.`);
				}
				throw e;
			}
		}
		if (/\.zip\//.test(binPath)) {
			let pnpapi;
			try {
				pnpapi = __require("pnpapi");
			} catch (e) {}
			if (pnpapi) {
				const root = pnpapi.getPackageInformation(pnpapi.topLevel).packageLocation;
				const binTargetPath = path.join(root, "node_modules", ".cache", "esbuild", `pnpapi-${pkg.replace("/", "-")}-0.28.2-${path.basename(subpath)}`);
				if (!fs.existsSync(binTargetPath)) {
					fs.mkdirSync(path.dirname(binTargetPath), { recursive: true });
					fs.copyFileSync(binPath, binTargetPath);
					fs.chmodSync(binTargetPath, 493);
				}
				return {
					binPath: binTargetPath,
					isWASM
				};
			}
		}
		return {
			binPath,
			isWASM
		};
	}
	var child_process = __require("child_process");
	var crypto = __require("crypto");
	var path2 = __require("path");
	var fs2 = __require("fs");
	var os2 = __require("os");
	var tty = __require("tty");
	var worker_threads;
	if (process.env.ESBUILD_WORKER_THREADS !== "0") {
		try {
			worker_threads = __require("worker_threads");
		} catch {}
		let [major, minor] = process.versions.node.split(".");
		if (+major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13) worker_threads = void 0;
	}
	var _a;
	var isInternalWorkerThread = ((_a = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a.esbuildVersion) === "0.28.2";
	var esbuildCommandAndArgs = () => {
		if ((!ESBUILD_BINARY_PATH || false) && (path2.basename(__filename) !== "main.js" || path2.basename(__dirname) !== "lib")) throw new Error(`The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${__filename}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`);
		{
			const { binPath, isWASM } = generateBinPath();
			if (isWASM) return ["node", [binPath]];
			else return [binPath, []];
		}
	};
	var isTTY = () => tty.isatty(2);
	var fsSync = {
		readFile(tempFile, callback) {
			try {
				let contents = fs2.readFileSync(tempFile, "utf8");
				try {
					fs2.unlinkSync(tempFile);
				} catch {}
				callback(null, contents);
			} catch (err) {
				callback(err, null);
			}
		},
		writeFile(contents, callback) {
			try {
				let tempFile = randomFileName();
				fs2.writeFileSync(tempFile, contents);
				callback(tempFile);
			} catch {
				callback(null);
			}
		}
	};
	var fsAsync = {
		readFile(tempFile, callback) {
			try {
				fs2.readFile(tempFile, "utf8", (err, contents) => {
					try {
						fs2.unlink(tempFile, () => callback(err, contents));
					} catch {
						callback(err, contents);
					}
				});
			} catch (err) {
				callback(err, null);
			}
		},
		writeFile(contents, callback) {
			try {
				let tempFile = randomFileName();
				fs2.writeFile(tempFile, contents, (err) => err !== null ? callback(null) : callback(tempFile));
			} catch {
				callback(null);
			}
		}
	};
	var version = "0.28.2";
	var build = (options) => ensureServiceIsRunning().build(options);
	var context = (buildOptions) => ensureServiceIsRunning().context(buildOptions);
	var transform = (input, options) => ensureServiceIsRunning().transform(input, options);
	var formatMessages = (messages, options) => ensureServiceIsRunning().formatMessages(messages, options);
	var analyzeMetafile = (messages, options) => ensureServiceIsRunning().analyzeMetafile(messages, options);
	var buildSync = (options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.buildSync(options);
		}
		let result;
		runServiceSync((service) => service.buildOrContext({
			callName: "buildSync",
			refs: null,
			options,
			isTTY: isTTY(),
			defaultWD,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var transformSync = (input, options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.transformSync(input, options);
		}
		let result;
		runServiceSync((service) => service.transform({
			callName: "transformSync",
			refs: null,
			input,
			options: options || {},
			isTTY: isTTY(),
			fs: fsSync,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var formatMessagesSync = (messages, options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.formatMessagesSync(messages, options);
		}
		let result;
		runServiceSync((service) => service.formatMessages({
			callName: "formatMessagesSync",
			refs: null,
			messages,
			options,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var analyzeMetafileSync = (metafile, options) => {
		if (worker_threads && !isInternalWorkerThread) {
			if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
			return workerThreadService.analyzeMetafileSync(metafile, options);
		}
		let result;
		runServiceSync((service) => service.analyzeMetafile({
			callName: "analyzeMetafileSync",
			refs: null,
			metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
			options,
			callback: (err, res) => {
				if (err) throw err;
				result = res;
			}
		}));
		return result;
	};
	var stop = () => {
		if (stopService) stopService();
		if (workerThreadService) workerThreadService.stop();
		return Promise.resolve();
	};
	var initializeWasCalled = false;
	var initialize = (options) => {
		options = validateInitializeOptions(options || {});
		if (options.wasmURL) throw new Error(`The "wasmURL" option only works in the browser`);
		if (options.wasmModule) throw new Error(`The "wasmModule" option only works in the browser`);
		if (options.worker) throw new Error(`The "worker" option only works in the browser`);
		if (initializeWasCalled) throw new Error("Cannot call \"initialize\" more than once");
		ensureServiceIsRunning();
		initializeWasCalled = true;
		return Promise.resolve();
	};
	var defaultWD = process.cwd();
	var longLivedService;
	var stopService;
	var ensureServiceIsRunning = () => {
		if (longLivedService) return longLivedService;
		let [command, args] = esbuildCommandAndArgs();
		let child = child_process.spawn(command, args.concat(`--service=0.28.2`, "--ping"), {
			windowsHide: true,
			stdio: [
				"pipe",
				"pipe",
				"inherit"
			],
			cwd: defaultWD
		});
		let { readFromStdout, afterClose, service } = createChannel({
			writeToStdin(bytes) {
				child.stdin.write(bytes, (err) => {
					if (err) afterClose(err);
				});
			},
			readFileSync: fs2.readFileSync,
			isSync: false,
			hasFS: true,
			esbuild: node_exports
		});
		child.stdin.on("error", afterClose);
		child.on("error", afterClose);
		const stdin = child.stdin;
		const stdout = child.stdout;
		stdout.on("data", readFromStdout);
		stdout.on("end", afterClose);
		stopService = () => {
			stdin.destroy();
			stdout.destroy();
			child.kill();
			initializeWasCalled = false;
			longLivedService = void 0;
			stopService = void 0;
		};
		let refCount = 0;
		child.unref();
		if (stdin.unref) stdin.unref();
		if (stdout.unref) stdout.unref();
		const refs = {
			ref() {
				if (++refCount === 1) child.ref();
			},
			unref() {
				if (--refCount === 0) child.unref();
			}
		};
		longLivedService = {
			build: (options) => new Promise((resolve, reject) => {
				service.buildOrContext({
					callName: "build",
					refs,
					options,
					isTTY: isTTY(),
					defaultWD,
					callback: (err, res) => err ? reject(err) : resolve(res)
				});
			}),
			context: (options) => new Promise((resolve, reject) => service.buildOrContext({
				callName: "context",
				refs,
				options,
				isTTY: isTTY(),
				defaultWD,
				callback: (err, res) => err ? reject(err) : resolve(res)
			})),
			transform: (input, options) => new Promise((resolve, reject) => service.transform({
				callName: "transform",
				refs,
				input,
				options: options || {},
				isTTY: isTTY(),
				fs: fsAsync,
				callback: (err, res) => err ? reject(err) : resolve(res)
			})),
			formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
				callName: "formatMessages",
				refs,
				messages,
				options,
				callback: (err, res) => err ? reject(err) : resolve(res)
			})),
			analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
				callName: "analyzeMetafile",
				refs,
				metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
				options,
				callback: (err, res) => err ? reject(err) : resolve(res)
			}))
		};
		return longLivedService;
	};
	var runServiceSync = (callback) => {
		let [command, args] = esbuildCommandAndArgs();
		let stdin = /* @__PURE__ */ new Uint8Array();
		let { readFromStdout, afterClose, service } = createChannel({
			writeToStdin(bytes) {
				if (stdin.length !== 0) throw new Error("Must run at most one command");
				stdin = bytes;
			},
			isSync: true,
			hasFS: true,
			esbuild: node_exports
		});
		callback(service);
		readFromStdout(child_process.execFileSync(command, args.concat(`--service=0.28.2`), {
			cwd: defaultWD,
			windowsHide: true,
			input: stdin,
			maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16777216
		}));
		afterClose(null);
	};
	var randomFileName = () => {
		return path2.join(os2.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
	};
	var workerThreadService = null;
	var startWorkerThreadService = (worker_threads2) => {
		let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
		let worker = new worker_threads2.Worker(__filename, {
			workerData: {
				workerPort,
				defaultWD,
				esbuildVersion: "0.28.2"
			},
			transferList: [workerPort],
			execArgv: []
		});
		let nextID = 0;
		let fakeBuildError = (text) => {
			let error = /* @__PURE__ */ new Error(`Build failed with 1 error:
error: ${text}`);
			error.errors = [{
				id: "",
				pluginName: "",
				text,
				location: null,
				notes: [],
				detail: void 0
			}];
			error.warnings = [];
			return error;
		};
		let validateBuildSyncOptions = (options) => {
			if (!options) return;
			let plugins = options.plugins;
			if (plugins && plugins.length > 0) throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
		};
		let applyProperties = (object, properties) => {
			for (let key in properties) object[key] = properties[key];
		};
		let runCallSync = (command, args) => {
			let id = nextID++;
			let sharedBuffer = new SharedArrayBuffer(8);
			let sharedBufferView = new Int32Array(sharedBuffer);
			let msg = {
				sharedBuffer,
				id,
				command,
				args
			};
			worker.postMessage(msg);
			let status = Atomics.wait(sharedBufferView, 0, 0);
			if (status !== "ok" && status !== "not-equal") throw new Error("Internal error: Atomics.wait() failed: " + status);
			let { message: { id: id2, resolve, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
			if (id !== id2) throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
			if (reject) {
				applyProperties(reject, properties);
				throw reject;
			}
			return resolve;
		};
		worker.unref();
		return {
			buildSync(options) {
				validateBuildSyncOptions(options);
				return runCallSync("build", [options]);
			},
			transformSync(input, options) {
				return runCallSync("transform", [input, options]);
			},
			formatMessagesSync(messages, options) {
				return runCallSync("formatMessages", [messages, options]);
			},
			analyzeMetafileSync(metafile, options) {
				return runCallSync("analyzeMetafile", [metafile, options]);
			},
			stop() {
				worker.terminate();
				workerThreadService = null;
			}
		};
	};
	var startSyncServiceWorker = () => {
		let workerPort = worker_threads.workerData.workerPort;
		let parentPort = worker_threads.parentPort;
		let extractProperties = (object) => {
			let properties = {};
			if (object && typeof object === "object") for (let key in object) properties[key] = object[key];
			return properties;
		};
		try {
			let service = ensureServiceIsRunning();
			defaultWD = worker_threads.workerData.defaultWD;
			parentPort.on("message", (msg) => {
				(async () => {
					let { sharedBuffer, id, command, args } = msg;
					let sharedBufferView = new Int32Array(sharedBuffer);
					try {
						switch (command) {
							case "build":
								workerPort.postMessage({
									id,
									resolve: await service.build(args[0])
								});
								break;
							case "transform":
								workerPort.postMessage({
									id,
									resolve: await service.transform(args[0], args[1])
								});
								break;
							case "formatMessages":
								workerPort.postMessage({
									id,
									resolve: await service.formatMessages(args[0], args[1])
								});
								break;
							case "analyzeMetafile":
								workerPort.postMessage({
									id,
									resolve: await service.analyzeMetafile(args[0], args[1])
								});
								break;
							default: throw new Error(`Invalid command: ${command}`);
						}
					} catch (reject) {
						workerPort.postMessage({
							id,
							reject,
							properties: extractProperties(reject)
						});
					}
					Atomics.add(sharedBufferView, 0, 1);
					Atomics.notify(sharedBufferView, 0, Infinity);
				})();
			});
		} catch (reject) {
			parentPort.on("message", (msg) => {
				let { sharedBuffer, id } = msg;
				let sharedBufferView = new Int32Array(sharedBuffer);
				workerPort.postMessage({
					id,
					reject,
					properties: extractProperties(reject)
				});
				Atomics.add(sharedBufferView, 0, 1);
				Atomics.notify(sharedBufferView, 0, Infinity);
			});
		}
	};
	if (isInternalWorkerThread) startSyncServiceWorker();
	var node_default = node_exports;
	0 && (module.exports = {
		analyzeMetafile,
		analyzeMetafileSync,
		build,
		buildSync,
		context,
		formatMessages,
		formatMessagesSync,
		initialize,
		stop,
		transform,
		transformSync,
		version
	});
}));

// node_modules/.pnpm/tsx@4.23.15/node_modules/tsx/dist/index-DE3OBZuV.mjs
var import_main = require_main();
var Xt$2 = Object.defineProperty;
var u$2 = (s, e) => Xt$2(s, "name", {
	value: e,
	configurable: !0
});
const ve$2 = u$2((s) => Vt.createHash("sha1").update(s).digest("hex"), "sha1");
let E$2;
let ie$1;
let xe$1;
let X$2 = 2 << 19;
const Pe$2 = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1 ? function(s, e) {
	const r = s.length;
	let i = 0;
	for (; i < r;) e[i] = s.charCodeAt(i++);
} : function(s, e) {
	const r = s.length;
	let i = 0;
	for (; i < r;) {
		const o = s.charCodeAt(i);
		e[i++] = (255 & o) << 8 | o >>> 8;
	}
};
const ir$1 = "xportmportlassforetaourceromsyncunctionssertvoyiedelecontininstantybreareturdebuggeawaithrwhileifcatcfinallels";
let L$3;
let We$2;
let y$1;
function sr$1(s, e = "@") {
	L$3 = s, We$2 = e;
	const r = 2 * L$3.length + (2 << 18);
	if (r > X$2 || !E$2) {
		for (; r > X$2;) X$2 *= 2;
		ie$1 = new ArrayBuffer(X$2), Pe$2(ir$1, new Uint16Array(ie$1, 16, 110)), E$2 = (function(l, p, g) {
			var b = new l.Int8Array(g), d = new l.Int16Array(g), n = new l.Int32Array(g), v = new l.Uint8Array(g), C = 1040;
			function I() {
				var t = 0, a = 0, h = 0, f = 0, m = 0, w = 0, S = 0;
				S = C, C = C + 10240 | 0, b[804] = 1, b[803] = 0, d[399] = 0, d[400] = 0, n[69] = n[2], b[805] = 0, n[68] = 0, b[802] = 0, n[70] = S + 2048, n[71] = S, b[806] = 0, t = (n[3] | 0) + -2 | 0, n[72] = t, a = t + (n[66] << 1) | 0, n[73] = a;
				e: for (;;) {
					if (h = t + 2 | 0, n[72] = h, t >>> 0 >= a >>> 0) {
						f = 18;
						break;
					}
					t: do
						switch (d[h >> 1] | 0) {
							case 9:
							case 10:
							case 11:
							case 12:
							case 13:
							case 32: break;
							case 101:
								if ((d[400] | 0) == 0 && G(h) | 0 && (A(t + 4 | 0, 16, 10) | 0) == 0 && (R(), (b[804] | 0) == 0)) {
									f = 9;
									break e;
								} else f = 17;
								break;
							case 105:
								G(h) | 0 && !(A(t + 4 | 0, 26, 10) | 0) && M(), f = 17;
								break;
							case 59:
								f = 17;
								break;
							case 47: switch (d[t + 4 >> 1] | 0) {
								case 47:
									pe();
									break t;
								case 42:
									ge(1);
									break t;
								default:
									f = 16;
									break e;
							}
							default:
								f = 16;
								break e;
						}
					while (!1);
					(f | 0) == 17 && (f = 0, n[69] = n[72]), t = n[72] | 0, a = n[73] | 0;
				}
				(f | 0) == 9 ? (t = n[72] | 0, n[69] = t, f = 19) : (f | 0) == 16 ? (b[804] = 0, n[72] = t, f = 19) : (f | 0) == 18 && (b[802] | 0 ? t = 0 : (t = h, f = 19));
				do
					if ((f | 0) == 19) {
						e: for (;;) {
							if (a = t + 2 | 0, n[72] = a, t >>> 0 >= (n[73] | 0) >>> 0) {
								f = 92;
								break;
							}
							t: do
								switch (d[a >> 1] | 0) {
									case 9:
									case 10:
									case 11:
									case 12:
									case 13:
									case 32: break;
									case 101:
										!(d[400] | 0) && G(a) | 0 && !(A(t + 4 | 0, 16, 10) | 0) && R(), f = 91;
										break;
									case 105:
										G(a) | 0 && !(A(t + 4 | 0, 26, 10) | 0) && M(), f = 91;
										break;
									case 99:
										G(a) | 0 && !(A(t + 4 | 0, 36, 8) | 0) && P(d[t + 12 >> 1] | 0) | 0 && (b[806] = 1), f = 91;
										break;
									case 40:
										h = n[70] | 0, t = d[400] | 0, f = t & 65535, n[h + (f << 3) >> 2] = 1, a = n[69] | 0, d[400] = t + 1 << 16 >> 16, n[h + (f << 3) + 4 >> 2] = a, f = 91;
										break;
									case 41:
										if (a = d[400] | 0, !(a << 16 >> 16)) {
											f = 36;
											break e;
										}
										h = a + -1 << 16 >> 16, d[400] = h, f = d[399] | 0, a = f & 65535, f << 16 >> 16 && (n[(n[70] | 0) + ((h & 65535) << 3) >> 2] | 0) == 5 && (a = n[(n[71] | 0) + (a + -1 << 2) >> 2] | 0, h = a + 4 | 0, n[h >> 2] | 0 || (n[h >> 2] = (n[69] | 0) + 2), n[a + 12 >> 2] = t + 4, d[399] = f + -1 << 16 >> 16), f = 91;
										break;
									case 123:
										f = n[69] | 0, h = n[63] | 0, t = f;
										do
											if ((d[f >> 1] | 0) == 41 & (h | 0) != 0 && (n[h + 4 >> 2] | 0) == (f | 0)) if (a = n[64] | 0, n[63] = a, a) {
												n[a + 32 >> 2] = 0;
												break;
											} else {
												n[59] = 0;
												break;
											}
										while (!1);
										h = n[70] | 0, a = d[400] | 0, f = a & 65535, n[h + (f << 3) >> 2] = (b[806] | 0) == 0 ? 2 : 6, d[400] = a + 1 << 16 >> 16, n[h + (f << 3) + 4 >> 2] = t, b[806] = 0, f = 91;
										break;
									case 125:
										if (t = d[400] | 0, !(t << 16 >> 16)) {
											f = 49;
											break e;
										}
										h = n[70] | 0, f = t + -1 << 16 >> 16, d[400] = f, (n[h + ((f & 65535) << 3) >> 2] | 0) == 4 && Te(), f = 91;
										break;
									case 39:
										N(39), f = 91;
										break;
									case 34:
										N(34), f = 91;
										break;
									case 47: switch (d[t + 4 >> 1] | 0) {
										case 47:
											pe();
											break t;
										case 42:
											ge(1);
											break t;
										default:
											t = n[69] | 0, a = d[t >> 1] | 0;
											r: do
												if (!(Et(a) | 0)) a << 16 >> 16 == 41 ? (h = d[400] | 0, Rt(n[(n[70] | 0) + ((h & 65535) << 3) + 4 >> 2] | 0) | 0 || (f = 65)) : f = 64;
												else switch (a << 16 >> 16) {
													case 46: if (((d[t + -2 >> 1] | 0) + -48 & 65535) < 10) {
														f = 64;
														break r;
													} else break r;
													case 43: if ((d[t + -2 >> 1] | 0) == 43) {
														f = 64;
														break r;
													} else break r;
													case 45: if ((d[t + -2 >> 1] | 0) == 45) {
														f = 64;
														break r;
													} else break r;
													default: break r;
												}
											while (!1);
											(f | 0) == 64 && (h = d[400] | 0, f = 65);
											r: do
												if ((f | 0) == 65) {
													if (f = 0, h << 16 >> 16 != 0 && (m = n[70] | 0, w = (h & 65535) + -1 | 0, a << 16 >> 16 == 102 ? (n[m + (w << 3) >> 2] | 0) == 1 : 0)) {
														if ((d[t + -2 >> 1] | 0) == 111 && O(n[m + (w << 3) + 4 >> 2] | 0, 44, 3) | 0) break;
													} else f = 69;
													if ((f | 0) == 69 && a << 16 >> 16 == 125 && (f = n[70] | 0, h = h & 65535, _t(n[f + (h << 3) + 4 >> 2] | 0) | 0 || (n[f + (h << 3) >> 2] | 0) == 6)) break;
													if (!(fe(t) | 0)) {
														switch (a << 16 >> 16) {
															case 0: break r;
															case 47: if (b[805] | 0) break r;
														}
														if (f = n[65] | 0, f | 0 && t >>> 0 >= (n[f >> 2] | 0) >>> 0 && t >>> 0 <= (n[f + 4 >> 2] | 0) >>> 0) {
															de(), b[805] = 0, f = 91;
															break t;
														}
														h = n[3] | 0;
														do {
															if (t >>> 0 <= h >>> 0) break;
															t = t + -2 | 0, n[69] = t, a = d[t >> 1] | 0;
														} while (!(be(a) | 0));
														if (ne(a) | 0) {
															do {
																if (t >>> 0 <= h >>> 0) break;
																t = t + -2 | 0, n[69] = t;
															} while (ne(d[t >> 1] | 0) | 0);
															if (Ot(t) | 0) {
																de(), b[805] = 0, f = 91;
																break t;
															}
														}
														b[805] = 1, f = 91;
														break t;
													}
												}
											while (!1);
											de(), b[805] = 0, f = 91;
											break t;
									}
									case 96:
										h = n[70] | 0, a = d[400] | 0, f = a & 65535, n[h + (f << 3) + 4 >> 2] = n[69], d[400] = a + 1 << 16 >> 16, n[h + (f << 3) >> 2] = 3, Te(), f = 91;
										break;
									default: f = 91;
								}
							while (!1);
							(f | 0) == 91 && (f = 0, n[69] = n[72]), t = n[72] | 0;
						}
						if ((f | 0) == 36) {
							$(), t = 0;
							break;
						} else if ((f | 0) == 49) {
							$(), t = 0;
							break;
						} else if ((f | 0) == 92) {
							t = (b[802] | 0) == 0 ? (d[399] | d[400]) << 16 >> 16 == 0 : 0;
							break;
						}
					}
				while (!1);
				return C = S, t | 0;
			}
			u$2(I, "b2");
			function R() {
				var t = 0, a = 0, h = 0, f = 0, m = 0, w = 0, S = 0, D = 0, we = 0, ke = 0, ye = 0, Ce = 0, x = 0, _ = 0;
				D = n[72] | 0, we = n[65] | 0, _ = D + 12 | 0, n[72] = _, h = k(1) | 0, t = n[72] | 0, (t | 0) == (_ | 0) && !(re(h) | 0) || (x = 3);
				e: do
					if ((x | 0) == 3) {
						t: do
							switch (h << 16 >> 16) {
								case 123:
									for (n[72] = t + 2, t = k(1) | 0, a = n[72] | 0;;) {
										if (K(t) | 0 ? (N(t), t = (n[72] | 0) + 2 | 0, n[72] = t) : (j(t) | 0, t = n[72] | 0), k(1) | 0, t = Ue(a, t) | 0, t << 16 >> 16 == 44 && (n[72] = (n[72] | 0) + 2, t = k(1) | 0), t << 16 >> 16 == 125) {
											x = 15;
											break;
										}
										if (_ = a, a = n[72] | 0, (a | 0) == (_ | 0)) {
											x = 12;
											break;
										}
										if (a >>> 0 > (n[73] | 0) >>> 0) {
											x = 14;
											break;
										}
									}
									if ((x | 0) == 12) {
										$();
										break e;
									} else if ((x | 0) == 14) {
										$();
										break e;
									} else if ((x | 0) == 15) {
										b[803] = 1, n[72] = (n[72] | 0) + 2;
										break t;
									}
									break;
								case 42:
									n[72] = t + 2, k(1) | 0, _ = n[72] | 0, Ue(_, _) | 0;
									break;
								default:
									switch (b[804] = 0, h << 16 >> 16) {
										case 100:
											switch (D = t + 14 | 0, n[72] = D, (k(1) | 0) << 16 >> 16) {
												case 97:
													a = n[72] | 0, !(A(a + 2 | 0, 72, 8) | 0) && (m = a + 10 | 0, ne(d[m >> 1] | 0) | 0) && (n[72] = m, k(0) | 0, x = 22);
													break;
												case 102:
													x = 22;
													break;
												case 99: a = n[72] | 0, !(A(a + 2 | 0, 36, 8) | 0) && (f = a + 10 | 0, _ = d[f >> 1] | 0, P(_) | 0 | _ << 16 >> 16 == 123) && (n[72] = f, w = k(1) | 0, w << 16 >> 16 != 123) && (Ce = w, x = 31);
											}
											r: do
												if ((x | 0) == 22 && (S = n[72] | 0, (A(S + 2 | 0, 80, 14) | 0) == 0)) {
													if (h = S + 16 | 0, a = d[h >> 1] | 0, !(P(a) | 0)) switch (a << 16 >> 16) {
														case 40:
														case 42: break;
														default: break r;
													}
													n[72] = h, a = k(1) | 0, a << 16 >> 16 == 42 && (n[72] = (n[72] | 0) + 2, a = k(1) | 0), a << 16 >> 16 != 40 && (Ce = a, x = 31);
												}
											while (!1);
											if ((x | 0) == 31 && (ke = n[72] | 0, j(Ce) | 0, ye = n[72] | 0, ye >>> 0 > ke >>> 0)) {
												F(t, D, ke, ye), n[72] = (n[72] | 0) + -2;
												break e;
											}
											F(t, D, 0, 0), n[72] = t + 12;
											break e;
										case 97:
											n[72] = t + 10, k(0) | 0, t = n[72] | 0, x = 35;
											break;
										case 102:
											x = 35;
											break;
										case 99:
											if ((A(t + 2 | 0, 36, 8) | 0) == 0 && (a = t + 10 | 0, be(d[a >> 1] | 0) | 0)) {
												n[72] = a, _ = k(1) | 0, x = n[72] | 0, j(_) | 0, _ = n[72] | 0, F(x, _, x, _), n[72] = (n[72] | 0) + -2;
												break e;
											}
											t = t + 4 | 0, n[72] = t;
											break;
										case 108:
										case 118: break;
										default: break e;
									}
									if ((x | 0) == 35) {
										n[72] = t + 16, t = k(1) | 0, t << 16 >> 16 == 42 && (n[72] = (n[72] | 0) + 2, t = k(1) | 0), x = n[72] | 0, j(t) | 0, _ = n[72] | 0, F(x, _, x, _), n[72] = (n[72] | 0) + -2;
										break e;
									}
									n[72] = t + 6, b[804] = 0, h = k(1) | 0, t = n[72] | 0, h = (j(h) | 32) << 16 >> 16 == 123, f = n[72] | 0, h && (n[72] = f + 2, _ = k(1) | 0, t = n[72] | 0, j(_) | 0);
									r: for (; a = n[72] | 0, (a | 0) != (t | 0);) {
										if (F(t, a, t, a), a = k(1) | 0, h) switch (a << 16 >> 16) {
											case 93:
											case 125: break e;
										}
										if (t = n[72] | 0, a << 16 >> 16 != 44) {
											x = 51;
											break;
										}
										switch (n[72] = t + 2, a = k(1) | 0, t = n[72] | 0, a << 16 >> 16) {
											case 91:
											case 123:
												x = 51;
												break r;
										}
										j(a) | 0;
									}
									if ((x | 0) == 51 && (n[72] = t + -2), !h) break e;
									n[72] = f + -2;
									break e;
							}
						while (!1);
						if (_ = (k(1) | 0) << 16 >> 16 == 102, t = n[72] | 0, _ && (A(t + 2 | 0, 66, 6) | 0) == 0) for (n[72] = t + 8, q(D, k(1) | 0, 0), t = (we | 0) == 0 ? 240 : we + 16 | 0;;) {
							if (t = n[t >> 2] | 0, !t) break e;
							n[t + 12 >> 2] = 0, n[t + 8 >> 2] = 0, t = t + 16 | 0;
						}
						n[72] = t + -2;
					}
				while (!1);
			}
			u$2(R, "k3");
			function M() {
				var t = 0, a = 0, h = 0, f = 0, m = 0, w = 0, S = 0;
				m = n[72] | 0, h = m + 12 | 0, n[72] = h, f = k(1) | 0, a = n[72] | 0;
				e: do
					if (f << 16 >> 16 != 46) f << 16 >> 16 == 115 & a >>> 0 > h >>> 0 ? (A(a + 2 | 0, 56, 10) | 0) == 0 && (t = a + 12 | 0, P(d[t >> 1] | 0) | 0) ? w = 14 : (a = 6, h = 0, w = 46) : (t = f, h = 0, w = 15);
					else switch (n[72] = a + 2, (k(1) | 0) << 16 >> 16) {
						case 109:
							if (t = n[72] | 0, A(t + 2 | 0, 50, 6) | 0 || (a = n[69] | 0, !(me(a) | 0) && (d[a >> 1] | 0) == 46)) break e;
							he(m, m, t + 8 | 0, 2);
							break e;
						case 115:
							if (t = n[72] | 0, A(t + 2 | 0, 56, 10) | 0 || (a = n[69] | 0, !(me(a) | 0) && (d[a >> 1] | 0) == 46)) break e;
							t = t + 12 | 0, w = 14;
							break e;
						default: break e;
					}
				while (!1);
				(w | 0) == 14 && (n[72] = t, t = k(1) | 0, h = 1, w = 15);
				e: do
					if ((w | 0) == 15) switch (t << 16 >> 16) {
						case 40:
							if (a = n[70] | 0, S = d[400] | 0, f = S & 65535, n[a + (f << 3) >> 2] = 5, t = n[72] | 0, d[400] = S + 1 << 16 >> 16, n[a + (f << 3) + 4 >> 2] = t, (d[n[69] >> 1] | 0) == 46) break e;
							switch (n[72] = t + 2, a = k(1) | 0, he(m, n[72] | 0, 0, t), h ? (t = n[63] | 0, n[t + 28 >> 2] = 5) : t = n[63] | 0, m = n[71] | 0, S = d[399] | 0, d[399] = S + 1 << 16 >> 16, n[m + ((S & 65535) << 2) >> 2] = t, a << 16 >> 16) {
								case 39:
									N(39);
									break;
								case 34:
									N(34);
									break;
								default:
									n[72] = (n[72] | 0) + -2;
									break e;
							}
							switch (t = (n[72] | 0) + 2 | 0, n[72] = t, (k(1) | 0) << 16 >> 16) {
								case 44:
									n[72] = (n[72] | 0) + 2, k(1) | 0, m = n[63] | 0, n[m + 4 >> 2] = t, S = n[72] | 0, n[m + 16 >> 2] = S, b[m + 24 >> 0] = 1, n[72] = S + -2;
									break e;
								case 41:
									d[400] = (d[400] | 0) + -1 << 16 >> 16, S = n[63] | 0, n[S + 4 >> 2] = t, n[S + 12 >> 2] = (n[72] | 0) + 2, b[S + 24 >> 0] = 1, d[399] = (d[399] | 0) + -1 << 16 >> 16;
									break e;
								default:
									n[72] = (n[72] | 0) + -2;
									break e;
							}
						case 123:
							if (h) {
								a = 12, h = 1, w = 46;
								break e;
							}
							if (t = n[72] | 0, d[400] | 0) {
								n[72] = t + -2;
								break e;
							}
							for (; !(t >>> 0 >= (n[73] | 0) >>> 0);) {
								if (t = k(1) | 0, K(t) | 0) N(t);
								else if (t << 16 >> 16 == 125) {
									w = 36;
									break;
								}
								t = (n[72] | 0) + 2 | 0, n[72] = t;
							}
							if ((w | 0) == 36 && (n[72] = (n[72] | 0) + 2), S = (k(1) | 0) << 16 >> 16 == 102, t = n[72] | 0, S && A(t + 2 | 0, 66, 6) | 0) {
								$();
								break e;
							}
							if (n[72] = t + 8, t = k(1) | 0, K(t) | 0) {
								q(m, t, 0);
								break e;
							} else {
								$();
								break e;
							}
						default:
							if (h) {
								a = 12, h = 1, w = 46;
								break e;
							}
							switch (t << 16 >> 16) {
								case 42:
								case 39:
								case 34:
									h = 0, w = 48;
									break e;
								default:
									a = 6, h = 0, w = 46;
									break e;
							}
					}
				while (!1);
				(w | 0) == 46 && (t = n[72] | 0, (t | 0) == (m + (a << 1) | 0) ? n[72] = t + -2 : w = 48);
				do
					if ((w | 0) == 48) {
						if (d[400] | 0) {
							n[72] = (n[72] | 0) + -2;
							break;
						}
						for (t = n[73] | 0, a = n[72] | 0;;) {
							if (a >>> 0 >= t >>> 0) {
								w = 55;
								break;
							}
							if (f = d[a >> 1] | 0, K(f) | 0) {
								w = 53;
								break;
							}
							S = a + 2 | 0, n[72] = S, a = S;
						}
						if ((w | 0) == 53) {
							q(m, f, h);
							break;
						} else if ((w | 0) == 55) {
							$();
							break;
						}
					}
				while (!1);
			}
			u$2(M, "l3");
			function q(t, a, h) {
				t = t | 0, a = a | 0, h = h | 0;
				var f = 0, m = 0;
				switch (f = (n[72] | 0) + 2 | 0, a << 16 >> 16) {
					case 39:
						N(39), m = 5;
						break;
					case 34:
						N(34), m = 5;
						break;
					default: $();
				}
				do
					if ((m | 0) == 5) {
						if (he(t, f, n[72] | 0, 1), h && (n[(n[63] | 0) + 28 >> 2] = 4), n[72] = (n[72] | 0) + 2, a = k(0) | 0, h = a << 16 >> 16 == 97, h ? (f = n[72] | 0, A(f + 2 | 0, 94, 10) | 0 && (m = 13)) : (f = n[72] | 0, a << 16 >> 16 == 119 && (d[f + 2 >> 1] | 0) == 105 && (d[f + 4 >> 1] | 0) == 116 && (d[f + 6 >> 1] | 0) == 104 || (m = 13)), (m | 0) == 13) {
							n[72] = f + -2;
							break;
						}
						if (n[72] = f + ((h ? 6 : 4) << 1), (k(1) | 0) << 16 >> 16 != 123) {
							n[72] = f;
							break;
						}
						h = n[72] | 0, a = h;
						e: for (;;) {
							switch (n[72] = a + 2, a = k(1) | 0, a << 16 >> 16) {
								case 39:
									N(39), n[72] = (n[72] | 0) + 2, a = k(1) | 0;
									break;
								case 34:
									N(34), n[72] = (n[72] | 0) + 2, a = k(1) | 0;
									break;
								default: a = j(a) | 0;
							}
							if (a << 16 >> 16 != 58) {
								m = 22;
								break;
							}
							switch (n[72] = (n[72] | 0) + 2, (k(1) | 0) << 16 >> 16) {
								case 39:
									N(39);
									break;
								case 34:
									N(34);
									break;
								default:
									m = 26;
									break e;
							}
							switch (n[72] = (n[72] | 0) + 2, (k(1) | 0) << 16 >> 16) {
								case 125:
									m = 31;
									break e;
								case 44: break;
								default:
									m = 30;
									break e;
							}
							if (n[72] = (n[72] | 0) + 2, (k(1) | 0) << 16 >> 16 == 125) {
								m = 31;
								break;
							}
							a = n[72] | 0;
						}
						if ((m | 0) == 22) {
							n[72] = f;
							break;
						} else if ((m | 0) == 26) {
							n[72] = f;
							break;
						} else if ((m | 0) == 30) {
							n[72] = f;
							break;
						} else if ((m | 0) == 31) {
							m = n[63] | 0, n[m + 16 >> 2] = h, n[m + 12 >> 2] = (n[72] | 0) + 2;
							break;
						}
					}
				while (!1);
			}
			u$2(q, "u3");
			function fe(t) {
				t = t | 0;
				e: do
					switch (d[t >> 1] | 0) {
						case 100: switch (d[t + -2 >> 1] | 0) {
							case 105:
								t = O(t + -4 | 0, 104, 2) | 0;
								break e;
							case 108:
								t = O(t + -4 | 0, 108, 3) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						case 101: switch (d[t + -2 >> 1] | 0) {
							case 115: switch (d[t + -4 >> 1] | 0) {
								case 108:
									t = H(t + -6 | 0, 101) | 0;
									break e;
								case 97:
									t = H(t + -6 | 0, 99) | 0;
									break e;
								default:
									t = 0;
									break e;
							}
							case 116:
								t = O(t + -4 | 0, 114, 4) | 0;
								break e;
							case 117:
								t = O(t + -4 | 0, 122, 6) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						case 102:
							if ((d[t + -2 >> 1] | 0) == 111 && (d[t + -4 >> 1] | 0) == 101) switch (d[t + -6 >> 1] | 0) {
								case 99:
									t = O(t + -8 | 0, 134, 6) | 0;
									break e;
								case 112:
									t = O(t + -8 | 0, 146, 2) | 0;
									break e;
								default:
									t = 0;
									break e;
							}
							else t = 0;
							break;
						case 107:
							t = O(t + -2 | 0, 150, 4) | 0;
							break;
						case 110:
							t = t + -2 | 0, H(t, 105) | 0 ? t = 1 : t = O(t, 158, 5) | 0;
							break;
						case 111:
							t = H(t + -2 | 0, 100) | 0;
							break;
						case 114:
							t = O(t + -2 | 0, 168, 7) | 0;
							break;
						case 116:
							t = O(t + -2 | 0, 182, 4) | 0;
							break;
						case 119: switch (d[t + -2 >> 1] | 0) {
							case 101:
								t = H(t + -4 | 0, 110) | 0;
								break e;
							case 111:
								t = O(t + -4 | 0, 190, 3) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						default: t = 0;
					}
				while (!1);
				return t | 0;
			}
			u$2(fe, "o2");
			function Te() {
				var t = 0, a = 0, h = 0, f = 0;
				a = n[73] | 0, h = n[72] | 0;
				e: for (;;) {
					if (t = h + 2 | 0, h >>> 0 >= a >>> 0) {
						a = 10;
						break;
					}
					switch (d[t >> 1] | 0) {
						case 96:
							a = 7;
							break e;
						case 36:
							if ((d[h + 4 >> 1] | 0) == 123) {
								a = 6;
								break e;
							}
							break;
						case 92: t = h + 4 | 0;
					}
					h = t;
				}
				(a | 0) == 6 ? (t = h + 4 | 0, n[72] = t, a = n[70] | 0, f = d[400] | 0, h = f & 65535, n[a + (h << 3) >> 2] = 4, d[400] = f + 1 << 16 >> 16, n[a + (h << 3) + 4 >> 2] = t) : (a | 0) == 7 ? (n[72] = t, h = n[70] | 0, f = (d[400] | 0) + -1 << 16 >> 16, d[400] = f, (n[h + ((f & 65535) << 3) >> 2] | 0) != 3 && $()) : (a | 0) == 10 && (n[72] = t, $());
			}
			u$2(Te, "h2");
			function k(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0;
				h = n[72] | 0;
				e: do {
					a = d[h >> 1] | 0;
					t: do
						if (a << 16 >> 16 != 47) if (t) {
							if (P(a) | 0) break;
							break e;
						} else {
							if (ne(a) | 0) break;
							break e;
						}
						else switch (d[h + 2 >> 1] | 0) {
							case 47:
								pe();
								break t;
							case 42:
								ge(t);
								break t;
							default:
								a = 47;
								break e;
						}
					while (!1);
					f = n[72] | 0, h = f + 2 | 0, n[72] = h;
				} while (f >>> 0 < (n[73] | 0) >>> 0);
				return a | 0;
			}
			u$2(k, "w2");
			function he(t, a, h, f) {
				t = t | 0, a = a | 0, h = h | 0, f = f | 0;
				var m = 0, w = 0;
				w = n[67] | 0, n[67] = w + 36, m = n[63] | 0, n[((m | 0) == 0 ? 236 : m + 32 | 0) >> 2] = w, n[64] = m, n[63] = w, n[w + 8 >> 2] = t, (f | 0) == 2 ? (t = 3, m = h) : (m = (f | 0) == 1, t = m ? 1 : 2, m = m ? h + 2 | 0 : 0), n[w + 12 >> 2] = m, n[w + 28 >> 2] = t, n[w >> 2] = a, n[w + 4 >> 2] = h, n[w + 16 >> 2] = 0, n[w + 20 >> 2] = f, a = (f | 0) == 1, b[w + 24 >> 0] = a & 1, n[w + 32 >> 2] = 0, a | (f | 0) == 2 && (b[803] = 1);
			}
			u$2(he, "d2");
			function N(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0, m = 0;
				for (m = n[73] | 0, a = n[72] | 0;;) {
					if (f = a + 2 | 0, a >>> 0 >= m >>> 0) {
						a = 9;
						break;
					}
					if (h = d[f >> 1] | 0, h << 16 >> 16 == t << 16 >> 16) {
						a = 10;
						break;
					}
					if (h << 16 >> 16 == 92) h = a + 4 | 0, (d[h >> 1] | 0) == 13 ? (a = a + 6 | 0, a = (d[a >> 1] | 0) == 10 ? a : h) : a = h;
					else if (Be(h) | 0) {
						a = 9;
						break;
					} else a = f;
				}
				(a | 0) == 9 ? (n[72] = f, $()) : (a | 0) == 10 && (n[72] = f);
			}
			u$2(N, "v");
			function Ue(t, a) {
				t = t | 0, a = a | 0;
				var h = 0, f = 0, m = 0, w = 0;
				return h = n[72] | 0, f = d[h >> 1] | 0, w = (t | 0) == (a | 0), m = w ? 0 : t, w = w ? 0 : a, f << 16 >> 16 == 97 && (n[72] = h + 4, h = k(1) | 0, t = n[72] | 0, K(h) | 0 ? (N(h), a = (n[72] | 0) + 2 | 0, n[72] = a) : (j(h) | 0, a = n[72] | 0), f = k(1) | 0, h = n[72] | 0), (h | 0) != (t | 0) && F(t, a, m, w), f | 0;
			}
			u$2(Ue, "A");
			function xt() {
				var t = 0, a = 0, h = 0;
				h = n[73] | 0, a = n[72] | 0;
				e: for (;;) {
					if (t = a + 2 | 0, a >>> 0 >= h >>> 0) {
						a = 6;
						break;
					}
					switch (d[t >> 1] | 0) {
						case 13:
						case 10:
							a = 6;
							break e;
						case 93:
							a = 7;
							break e;
						case 92: t = a + 4 | 0;
					}
					a = t;
				}
				return (a | 0) == 6 ? (n[72] = t, $(), t = 0) : (a | 0) == 7 && (n[72] = t, t = 93), t | 0;
			}
			u$2(xt, "C");
			function de() {
				var t = 0, a = 0, h = 0;
				e: for (;;) {
					if (t = n[72] | 0, a = t + 2 | 0, n[72] = a, t >>> 0 >= (n[73] | 0) >>> 0) {
						h = 7;
						break;
					}
					switch (d[a >> 1] | 0) {
						case 13:
						case 10:
							h = 7;
							break e;
						case 47: break e;
						case 91:
							xt() | 0;
							break;
						case 92: n[72] = t + 4;
					}
				}
				(h | 0) == 7 && $();
			}
			u$2(de, "g");
			function _t(t) {
				switch (t = t | 0, d[t >> 1] | 0) {
					case 62:
						t = (d[t + -2 >> 1] | 0) == 61;
						break;
					case 41:
					case 59:
						t = 1;
						break;
					case 104:
						t = O(t + -2 | 0, 210, 4) | 0;
						break;
					case 121:
						t = O(t + -2 | 0, 218, 6) | 0;
						break;
					case 101:
						t = O(t + -2 | 0, 230, 3) | 0;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$2(_t, "p");
			function ge(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0, m = 0, w = 0;
				for (m = (n[72] | 0) + 2 | 0, n[72] = m, h = n[73] | 0; a = m + 2 | 0, !(m >>> 0 >= h >>> 0 || (f = d[a >> 1] | 0, !t && Be(f) | 0));) {
					if (f << 16 >> 16 == 42 && (d[m + 4 >> 1] | 0) == 47) {
						w = 8;
						break;
					}
					m = a;
				}
				(w | 0) == 8 && (n[72] = a, a = m + 4 | 0), n[72] = a;
			}
			u$2(ge, "y");
			function A(t, a, h) {
				t = t | 0, a = a | 0, h = h | 0;
				var f = 0, m = 0;
				e: do
					if (!h) t = 0;
					else {
						for (; f = b[t >> 0] | 0, m = b[a >> 0] | 0, f << 24 >> 24 == m << 24 >> 24;) if (h = h + -1 | 0, h) t = t + 1 | 0, a = a + 1 | 0;
						else {
							t = 0;
							break e;
						}
						t = (f & 255) - (m & 255) | 0;
					}
				while (!1);
				return t | 0;
			}
			u$2(A, "m");
			function re(t) {
				t = t | 0;
				e: do
					switch (t << 16 >> 16) {
						case 38:
						case 37:
						case 33:
							t = 1;
							break;
						default: if ((t & -8) << 16 >> 16 == 40 | (t + -58 & 65535) < 6) t = 1;
						else {
							switch (t << 16 >> 16) {
								case 91:
								case 93:
								case 94:
									t = 1;
									break e;
							}
							t = (t + -123 & 65535) < 4;
						}
					}
				while (!1);
				return t | 0;
			}
			u$2(re, "I");
			function Et(t) {
				t = t | 0;
				e: do
					switch (t << 16 >> 16) {
						case 38:
						case 37:
						case 33: break;
						default: if (!((t + -58 & 65535) < 6 | (t + -40 & 65535) < 7 & t << 16 >> 16 != 41)) {
							switch (t << 16 >> 16) {
								case 91:
								case 94: break e;
							}
							return t << 16 >> 16 != 125 & (t + -123 & 65535) < 4 | 0;
						}
					}
				while (!1);
				return 1;
			}
			u$2(Et, "U");
			function De(t) {
				t = t | 0;
				var a = 0;
				a = d[t >> 1] | 0;
				e: do
					if ((a + -9 & 65535) >= 5) {
						switch (a << 16 >> 16) {
							case 160:
							case 32:
								a = 1;
								break e;
						}
						if (re(a) | 0) return a << 16 >> 16 != 46 | (me(t) | 0) | 0;
						a = 0;
					} else a = 1;
				while (!1);
				return a | 0;
			}
			u$2(De, "x");
			function Lt(t) {
				t = t | 0;
				var a = 0, h = 0, f = 0, m = 0;
				return h = C, C = C + 16 | 0, f = h, n[f >> 2] = 0, n[66] = t, a = n[3] | 0, m = a + (t << 1) | 0, t = m + 2 | 0, d[m >> 1] = 0, n[f >> 2] = t, n[67] = t, n[59] = 0, n[63] = 0, n[61] = 0, n[60] = 0, n[65] = 0, n[62] = 0, C = h, a | 0;
			}
			u$2(Lt, "S");
			function F(t, a, h, f) {
				t = t | 0, a = a | 0, h = h | 0, f = f | 0;
				var m = 0, w = 0;
				m = n[67] | 0, n[67] = m + 20, w = n[65] | 0, n[((w | 0) == 0 ? 240 : w + 16 | 0) >> 2] = m, n[65] = m, n[m >> 2] = t, n[m + 4 >> 2] = a, n[m + 8 >> 2] = h, n[m + 12 >> 2] = f, n[m + 16 >> 2] = 0, b[803] = 1;
			}
			u$2(F, "O");
			function O(t, a, h) {
				t = t | 0, a = a | 0, h = h | 0;
				var f = 0, m = 0;
				return f = t + (0 - h << 1) | 0, m = f + 2 | 0, t = n[3] | 0, m >>> 0 >= t >>> 0 && (A(m, a, h << 1) | 0) == 0 ? (m | 0) == (t | 0) ? t = 1 : t = De(f) | 0 : t = 0, t | 0;
			}
			u$2(O, "$");
			function Ot(t) {
				switch (t = t | 0, d[t >> 1] | 0) {
					case 107:
						t = O(t + -2 | 0, 150, 4) | 0;
						break;
					case 101:
						(d[t + -2 >> 1] | 0) == 117 ? t = O(t + -4 | 0, 122, 6) | 0 : t = 0;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$2(Ot, "j");
			function H(t, a) {
				t = t | 0, a = a | 0;
				var h = 0;
				return h = n[3] | 0, h >>> 0 <= t >>> 0 && (d[t >> 1] | 0) == a << 16 >> 16 ? (h | 0) == (t | 0) ? h = 1 : h = be(d[t + -2 >> 1] | 0) | 0 : h = 0, h | 0;
			}
			u$2(H, "B");
			function be(t) {
				t = t | 0;
				e: do
					if ((t + -9 & 65535) < 5) t = 1;
					else {
						switch (t << 16 >> 16) {
							case 32:
							case 160:
								t = 1;
								break e;
						}
						t = t << 16 >> 16 != 46 & (re(t) | 0);
					}
				while (!1);
				return t | 0;
			}
			u$2(be, "E");
			function pe() {
				var t = 0, a = 0, h = 0;
				t = n[73] | 0, h = n[72] | 0;
				e: for (; a = h + 2 | 0, !(h >>> 0 >= t >>> 0);) switch (d[a >> 1] | 0) {
					case 13:
					case 10: break e;
					default: h = a;
				}
				n[72] = a;
			}
			u$2(pe, "P");
			function j(t) {
				for (t = t | 0; !(P(t) | 0 || re(t) | 0);) if (t = (n[72] | 0) + 2 | 0, n[72] = t, t = d[t >> 1] | 0, !(t << 16 >> 16)) {
					t = 0;
					break;
				}
				return t | 0;
			}
			u$2(j, "q");
			function At() {
				var t = 0;
				switch (t = n[(n[61] | 0) + 20 >> 2] | 0, t | 0) {
					case 1:
						t = -1;
						break;
					case 2:
						t = -2;
						break;
					default: t = t - (n[3] | 0) >> 1;
				}
				return t | 0;
			}
			u$2(At, "z");
			function Rt(t) {
				return t = t | 0, !(O(t, 196, 5) | 0) && !(O(t, 44, 3) | 0) ? t = O(t, 206, 2) | 0 : t = 1, t | 0;
			}
			u$2(Rt, "D");
			function ne(t) {
				switch (t = t | 0, t << 16 >> 16) {
					case 160:
					case 32:
					case 12:
					case 11:
					case 9:
						t = 1;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$2(ne, "F");
			function me(t) {
				return t = t | 0, (d[t >> 1] | 0) == 46 && (d[t + -2 >> 1] | 0) == 46 ? t = (d[t + -4 >> 1] | 0) == 46 : t = 0, t | 0;
			}
			u$2(me, "G");
			function G(t) {
				return t = t | 0, (n[3] | 0) == (t | 0) ? t = 1 : t = De(t + -2 | 0) | 0, t | 0;
			}
			u$2(G, "H");
			function It() {
				var t = 0;
				return t = n[(n[62] | 0) + 12 >> 2] | 0, t ? t = t - (n[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$2(It, "J");
			function Nt() {
				var t = 0;
				return t = n[(n[61] | 0) + 12 >> 2] | 0, t ? t = t - (n[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$2(Nt, "K");
			function $t() {
				var t = 0;
				return t = n[(n[62] | 0) + 8 >> 2] | 0, t ? t = t - (n[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$2($t, "L");
			function Mt() {
				var t = 0;
				return t = n[(n[61] | 0) + 16 >> 2] | 0, t ? t = t - (n[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$2(Mt, "M");
			function jt() {
				var t = 0;
				return t = n[(n[61] | 0) + 4 >> 2] | 0, t ? t = t - (n[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$2(jt, "N");
			function Tt() {
				var t = 0;
				return t = n[61] | 0, t = n[((t | 0) == 0 ? 236 : t + 32 | 0) >> 2] | 0, n[61] = t, (t | 0) != 0 | 0;
			}
			u$2(Tt, "Q");
			function Ut() {
				var t = 0;
				return t = n[62] | 0, t = n[((t | 0) == 0 ? 240 : t + 16 | 0) >> 2] | 0, n[62] = t, (t | 0) != 0 | 0;
			}
			u$2(Ut, "R");
			function $() {
				b[802] = 1, n[68] = (n[72] | 0) - (n[3] | 0) >> 1, n[72] = (n[73] | 0) + 2;
			}
			u$2($, "T");
			function P(t) {
				return t = t | 0, (t | 128) << 16 >> 16 == 160 | (t + -9 & 65535) < 5 | 0;
			}
			u$2(P, "V");
			function K(t) {
				return t = t | 0, t << 16 >> 16 == 39 | t << 16 >> 16 == 34 | 0;
			}
			u$2(K, "W");
			function Dt() {
				return (n[(n[61] | 0) + 8 >> 2] | 0) - (n[3] | 0) >> 1 | 0;
			}
			u$2(Dt, "X");
			function Bt() {
				return (n[(n[62] | 0) + 4 >> 2] | 0) - (n[3] | 0) >> 1 | 0;
			}
			u$2(Bt, "Y");
			function Be(t) {
				return t = t | 0, t << 16 >> 16 == 13 | t << 16 >> 16 == 10 | 0;
			}
			u$2(Be, "Z");
			function Ft() {
				return (n[n[61] >> 2] | 0) - (n[3] | 0) >> 1 | 0;
			}
			u$2(Ft, "_");
			function Pt() {
				return (n[n[62] >> 2] | 0) - (n[3] | 0) >> 1 | 0;
			}
			u$2(Pt, "ee");
			function Wt() {
				return v[(n[61] | 0) + 24 >> 0] | 0;
			}
			u$2(Wt, "ae");
			function zt(t) {
				t = t | 0, n[3] = t;
			}
			u$2(zt, "re");
			function Jt() {
				return n[(n[61] | 0) + 28 >> 2] | 0;
			}
			u$2(Jt, "ie");
			function qt() {
				return (b[803] | 0) != 0 | 0;
			}
			u$2(qt, "se");
			function Ht() {
				return (b[804] | 0) != 0 | 0;
			}
			u$2(Ht, "fe");
			function Gt() {
				return n[68] | 0;
			}
			u$2(Gt, "te");
			function Kt(t) {
				return t = t | 0, C = t + 992 + 15 & -16, 992;
			}
			return u$2(Kt, "ce"), {
				su: Kt,
				ai: Mt,
				e: Gt,
				ee: Bt,
				ele: It,
				els: $t,
				es: Pt,
				f: Ht,
				id: At,
				ie: jt,
				ip: Wt,
				is: Ft,
				it: Jt,
				ms: qt,
				p: I,
				re: Ut,
				ri: Tt,
				sa: Lt,
				se: Nt,
				ses: zt,
				ss: Dt
			};
		})(typeof self < "u" ? self : global, {}, ie$1), xe$1 = E$2.su(X$2 - (2 << 17));
	}
	const i = L$3.length + 1;
	E$2.ses(xe$1), E$2.sa(i - 1), Pe$2(L$3, new Uint16Array(ie$1, xe$1, i)), E$2.p() || (y$1 = E$2.e(), U$2());
	const o = [], c = [];
	for (; E$2.ri();) {
		const l = E$2.is(), p = E$2.ie(), g = E$2.ai(), b = E$2.id(), d = E$2.ss(), n = E$2.se(), v = E$2.it();
		let C;
		E$2.ip() && (C = _e$2(b === -1 ? l : l + 1, L$3.charCodeAt(b === -1 ? l - 1 : l))), o.push({
			t: v,
			n: C,
			s: l,
			e: p,
			ss: d,
			se: n,
			d: b,
			a: g
		});
	}
	for (; E$2.re();) {
		const l = E$2.es(), p = E$2.ee(), g = E$2.els(), b = E$2.ele(), d = L$3.charCodeAt(l), n = g >= 0 ? L$3.charCodeAt(g) : -1;
		c.push({
			s: l,
			e: p,
			ls: g,
			le: b,
			n: d === 34 || d === 39 ? _e$2(l + 1, d) : L$3.slice(l, p),
			ln: g < 0 ? void 0 : n === 34 || n === 39 ? _e$2(g + 1, n) : L$3.slice(g, b)
		});
	}
	return [
		o,
		c,
		!!E$2.f(),
		!!E$2.ms()
	];
}
u$2(sr$1, "parse");
function _e$2(s, e) {
	y$1 = s;
	let r = "", i = y$1;
	for (;;) {
		y$1 >= L$3.length && U$2();
		const o = L$3.charCodeAt(y$1);
		if (o === e) break;
		o === 92 ? (r += L$3.slice(i, y$1), r += or$1(), i = y$1) : (o === 8232 || o === 8233 || ze$1(o) && U$2(), ++y$1);
	}
	return r += L$3.slice(i, y$1++), r;
}
u$2(_e$2, "b");
function or$1() {
	let s = L$3.charCodeAt(++y$1);
	switch (++y$1, s) {
		case 110: return `
`;
		case 114: return "\r";
		case 120: return String.fromCharCode(Ee$2(2));
		case 117: return (function() {
			const e = L$3.charCodeAt(y$1);
			let r;
			return e === 123 ? (++y$1, r = Ee$2(L$3.indexOf("}", y$1) - y$1), ++y$1, r > 1114111 && U$2()) : r = Ee$2(4), r <= 65535 ? String.fromCharCode(r) : (r -= 65536, String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r)));
		})();
		case 116: return "	";
		case 98: return "\b";
		case 118: return "\v";
		case 102: return "\f";
		case 13: L$3.charCodeAt(y$1) === 10 && ++y$1;
		case 10: return "";
		case 56:
		case 57: U$2();
		default:
			if (s >= 48 && s <= 55) {
				let e = L$3.substr(y$1 - 1, 3).match(/^[0-7]+/)[0], r = parseInt(e, 8);
				return r > 255 && (e = e.slice(0, -1), r = parseInt(e, 8)), y$1 += e.length - 1, s = L$3.charCodeAt(y$1), e === "0" && s !== 56 && s !== 57 || U$2(), String.fromCharCode(r);
			}
			return ze$1(s) ? "" : String.fromCharCode(s);
	}
}
u$2(or$1, "k");
function Ee$2(s) {
	const e = y$1;
	let r = 0, i = 0;
	for (let o = 0; o < s; ++o, ++y$1) {
		let c, l = L$3.charCodeAt(y$1);
		if (l !== 95) {
			if (l >= 97) c = l - 97 + 10;
			else if (l >= 65) c = l - 65 + 10;
			else {
				if (!(l >= 48 && l <= 57)) break;
				c = l - 48;
			}
			if (c >= 16) break;
			i = l, r = 16 * r + c;
		} else i !== 95 && o !== 0 || U$2(), i = l;
	}
	return i !== 95 && y$1 - e === s || U$2(), r;
}
u$2(Ee$2, "l");
function ze$1(s) {
	return s === 13 || s === 10;
}
u$2(ze$1, "u");
function U$2() {
	throw Object.assign(Error(`Parse error ${We$2}:${L$3.slice(0, y$1).split(`
`).length}:${y$1 - L$3.lastIndexOf(`
`, y$1 - 1)}`), { idx: y$1 });
}
u$2(U$2, "o");
let Le$1;
typeof WebAssembly < "u" && (async () => {
	const { parse: s, init: e } = await import("./lexer-CanA6ArK-D-HktPdy.js");
	await e, Le$1 = s;
})();
const se = u$2((s, e) => Le$1 ? Le$1(s, e) : sr$1(s, e), "parseEsm");
const ar$1 = u$2((s) => {
	if (!s.includes("import") && !s.includes("export")) return !1;
	try {
		return se(s)[3];
	} catch {
		return !0;
	}
}, "isESM");
var cr$1 = 44;
var lr$1 = 59;
var Je$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var qe$2 = /* @__PURE__ */ new Uint8Array(64);
var ur$1 = /* @__PURE__ */ new Uint8Array(128);
for (let s = 0; s < Je$2.length; s++) {
	const e = Je$2.charCodeAt(s);
	qe$2[s] = e, ur$1[e] = s;
}
function Y$2(s, e, r) {
	let i = e - r;
	i = i < 0 ? -i << 1 | 1 : i << 1;
	do {
		let o = i & 31;
		i >>>= 5, i > 0 && (o |= 32), s.write(qe$2[o]);
	} while (i > 0);
	return e;
}
u$2(Y$2, "encodeInteger$1");
var He$2 = 16384;
var Ge$1 = typeof TextDecoder < "u" ? new TextDecoder() : typeof Buffer < "u" ? { decode(s) {
	return Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString();
} } : { decode(s) {
	let e = "";
	for (let r = 0; r < s.length; r++) e += String.fromCharCode(s[r]);
	return e;
} };
var fr$1 = class {
	static {
		u$2(this, "StringWriter");
	}
	constructor() {
		this.pos = 0, this.out = "", this.buffer = new Uint8Array(He$2);
	}
	write(s) {
		const { buffer: e } = this;
		e[this.pos++] = s, this.pos === He$2 && (this.out += Ge$1.decode(e), this.pos = 0);
	}
	flush() {
		const { buffer: s, out: e, pos: r } = this;
		return r > 0 ? e + Ge$1.decode(s.subarray(0, r)) : e;
	}
};
function hr$1(s) {
	const e = new fr$1();
	let r = 0, i = 0, o = 0, c = 0;
	for (let l = 0; l < s.length; l++) {
		const p = s[l];
		if (l > 0 && e.write(lr$1), p.length === 0) continue;
		let g = 0;
		for (let b = 0; b < p.length; b++) {
			const d = p[b];
			b > 0 && e.write(cr$1), g = Y$2(e, d[0], g), d.length !== 1 && (r = Y$2(e, d[1], r), i = Y$2(e, d[2], i), o = Y$2(e, d[3], o), d.length !== 4 && (c = Y$2(e, d[4], c)));
		}
	}
	return e.flush();
}
u$2(hr$1, "encode$1");
var ue$2 = class ue$2 {
	static {
		u$2(this, "BitSet");
	}
	constructor(e) {
		this.bits = e instanceof ue$2 ? e.bits.slice() : [];
	}
	add(e) {
		this.bits[e >> 5] |= 1 << (e & 31);
	}
	has(e) {
		return !!(this.bits[e >> 5] & 1 << (e & 31));
	}
};
var te$1 = class te$1 {
	static {
		u$2(this, "Chunk");
	}
	constructor(e, r, i) {
		this.start = e, this.end = r, this.original = i, this.intro = "", this.outro = "", this.content = i, this.storeName = !1, this.edited = !1, this.previous = null, this.next = null;
	}
	appendLeft(e) {
		this.outro += e;
	}
	appendRight(e) {
		this.intro = this.intro + e;
	}
	clone() {
		const e = new te$1(this.start, this.end, this.original);
		return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
	}
	contains(e) {
		return this.start < e && e < this.end;
	}
	eachNext(e) {
		let r = this;
		for (; r;) e(r), r = r.next;
	}
	eachPrevious(e) {
		let r = this;
		for (; r;) e(r), r = r.previous;
	}
	edit(e, r, i) {
		return this.content = e, i || (this.intro = "", this.outro = ""), this.storeName = r, this.edited = !0, this;
	}
	prependLeft(e) {
		this.outro = e + this.outro;
	}
	prependRight(e) {
		this.intro = e + this.intro;
	}
	reset() {
		this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = !1, this.edited = !1);
	}
	split(e) {
		const r = e - this.start, i = this.original.slice(0, r), o = this.original.slice(r);
		this.original = i;
		const c = new te$1(e, this.end, o);
		return c.outro = this.outro, this.outro = "", this.end = e, this.edited ? (c.edit("", !1), this.content = "") : this.content = i, c.next = this.next, c.next && (c.next.previous = c), c.previous = this, this.next = c, c;
	}
	toString() {
		return this.intro + this.content + this.outro;
	}
	trimEnd(e) {
		if (this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
		const r = this.content.replace(e, "");
		if (r.length) return r !== this.content && (this.split(this.start + r.length).edit("", void 0, !0), this.edited && this.edit(r, this.storeName, !0)), !0;
		if (this.edit("", void 0, !0), this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
	}
	trimStart(e) {
		if (this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
		const r = this.content.replace(e, "");
		if (r.length) {
			if (r !== this.content) {
				const i = this.split(this.end - r.length);
				this.edited && i.edit(r, this.storeName, !0), this.edit("", void 0, !0);
			}
			return !0;
		} else if (this.edit("", void 0, !0), this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
	}
};
function dr$1() {
	return typeof globalThis < "u" && typeof globalThis.btoa == "function" ? (s) => globalThis.btoa(unescape(encodeURIComponent(s))) : typeof Buffer == "function" ? (s) => Buffer.from(s, "utf-8").toString("base64") : () => {
		throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
	};
}
u$2(dr$1, "getBtoa");
const gr = dr$1();
let br = class {
	static {
		u$2(this, "SourceMap");
	}
	constructor(e) {
		this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = hr$1(e.mappings), typeof e.x_google_ignoreList < "u" && (this.x_google_ignoreList = e.x_google_ignoreList), typeof e.debugId < "u" && (this.debugId = e.debugId);
	}
	toString() {
		return JSON.stringify(this);
	}
	toUrl() {
		return "data:application/json;charset=utf-8;base64," + gr(this.toString());
	}
};
function pr$1(s) {
	const e = s.split(`
`), r = e.filter((c) => /^\t+/.test(c)), i = e.filter((c) => /^ {2,}/.test(c));
	if (r.length === 0 && i.length === 0) return null;
	if (r.length >= i.length) return "	";
	const o = i.reduce((c, l) => {
		const p = /^ +/.exec(l)[0].length;
		return Math.min(p, c);
	}, 1 / 0);
	return new Array(o + 1).join(" ");
}
u$2(pr$1, "guessIndent");
function mr$1(s, e) {
	const r = s.split(/[/\\]/), i = e.split(/[/\\]/);
	for (r.pop(); r[0] === i[0];) r.shift(), i.shift();
	if (r.length) {
		let o = r.length;
		for (; o--;) r[o] = "..";
	}
	return r.concat(i).join("/");
}
u$2(mr$1, "getRelativePath");
const wr = Object.prototype.toString;
function kr(s) {
	return wr.call(s) === "[object Object]";
}
u$2(kr, "isObject");
function Ke$1(s) {
	const e = s.split(`
`), r = [];
	for (let i = 0, o = 0; i < e.length; i++) r.push(o), o += e[i].length + 1;
	return u$2(function(o) {
		let c = 0, l = r.length;
		for (; c < l;) {
			const b = c + l >> 1;
			o < r[b] ? l = b : c = b + 1;
		}
		const p = c - 1;
		return {
			line: p,
			column: o - r[p]
		};
	}, "locate");
}
u$2(Ke$1, "getLocator");
const yr = /\w/;
var Cr = class {
	static {
		u$2(this, "Mappings");
	}
	constructor(e) {
		this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
	}
	addEdit(e, r, i, o) {
		if (r.length) {
			const c = r.length - 1;
			let l = r.indexOf(`
`, 0), p = -1;
			for (; l >= 0 && c > l;) {
				const b = [
					this.generatedCodeColumn,
					e,
					i.line,
					i.column
				];
				o >= 0 && b.push(o), this.rawSegments.push(b), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, p = l, l = r.indexOf(`
`, l + 1);
			}
			const g = [
				this.generatedCodeColumn,
				e,
				i.line,
				i.column
			];
			o >= 0 && g.push(o), this.rawSegments.push(g), this.advance(r.slice(p + 1));
		} else this.pending && (this.rawSegments.push(this.pending), this.advance(r));
		this.pending = null;
	}
	addUneditedChunk(e, r, i, o, c) {
		let l = r.start, p = !0, g = !1;
		for (; l < r.end;) {
			if (i[l] === `
`) o.line += 1, o.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, p = !0, g = !1;
			else {
				if (this.hires || p || c.has(l)) {
					const b = [
						this.generatedCodeColumn,
						e,
						o.line,
						o.column
					];
					this.hires === "boundary" ? yr.test(i[l]) ? g || (this.rawSegments.push(b), g = !0) : (this.rawSegments.push(b), g = !1) : this.rawSegments.push(b);
				}
				o.column += 1, this.generatedCodeColumn += 1, p = !1;
			}
			l += 1;
		}
		this.pending = null;
	}
	advance(e) {
		if (!e) return;
		const r = e.split(`
`);
		if (r.length > 1) {
			for (let i = 0; i < r.length - 1; i++) this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
			this.generatedCodeColumn = 0;
		}
		this.generatedCodeColumn += r[r.length - 1].length;
	}
};
const Q$1 = `
`;
const z$2 = {
	insertLeft: !1,
	insertRight: !1,
	storeName: !1
};
var je$2 = class je$2 {
	static {
		u$2(this, "MagicString");
	}
	constructor(e, r = {}) {
		const i = new te$1(0, e.length, e);
		Object.defineProperties(this, {
			original: {
				writable: !0,
				value: e
			},
			outro: {
				writable: !0,
				value: ""
			},
			intro: {
				writable: !0,
				value: ""
			},
			firstChunk: {
				writable: !0,
				value: i
			},
			lastChunk: {
				writable: !0,
				value: i
			},
			lastSearchedChunk: {
				writable: !0,
				value: i
			},
			byStart: {
				writable: !0,
				value: {}
			},
			byEnd: {
				writable: !0,
				value: {}
			},
			filename: {
				writable: !0,
				value: r.filename
			},
			indentExclusionRanges: {
				writable: !0,
				value: r.indentExclusionRanges
			},
			sourcemapLocations: {
				writable: !0,
				value: new ue$2()
			},
			storedNames: {
				writable: !0,
				value: {}
			},
			indentStr: {
				writable: !0,
				value: void 0
			},
			ignoreList: {
				writable: !0,
				value: r.ignoreList
			},
			offset: {
				writable: !0,
				value: r.offset || 0
			}
		}), this.byStart[0] = i, this.byEnd[e.length] = i;
	}
	addSourcemapLocation(e) {
		this.sourcemapLocations.add(e);
	}
	append(e) {
		if (typeof e != "string") throw new TypeError("outro content must be a string");
		return this.outro += e, this;
	}
	appendLeft(e, r) {
		if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byEnd[e];
		return i ? i.appendLeft(r) : this.intro += r, this;
	}
	appendRight(e, r) {
		if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byStart[e];
		return i ? i.appendRight(r) : this.outro += r, this;
	}
	clone() {
		const e = new je$2(this.original, {
			filename: this.filename,
			offset: this.offset
		});
		let r = this.firstChunk, i = e.firstChunk = e.lastSearchedChunk = r.clone();
		for (; r;) {
			e.byStart[i.start] = i, e.byEnd[i.end] = i;
			const o = r.next, c = o && o.clone();
			c && (i.next = c, c.previous = i, i = c), r = o;
		}
		return e.lastChunk = i, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new ue$2(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
	}
	generateDecodedMap(e) {
		e = e || {};
		const r = 0, i = Object.keys(this.storedNames), o = new Cr(e.hires), c = Ke$1(this.original);
		return this.intro && o.advance(this.intro), this.firstChunk.eachNext((l) => {
			const p = c(l.start);
			l.intro.length && o.advance(l.intro), l.edited ? o.addEdit(r, l.content, p, l.storeName ? i.indexOf(l.original) : -1) : o.addUneditedChunk(r, l, this.original, p, this.sourcemapLocations), l.outro.length && o.advance(l.outro);
		}), {
			file: e.file ? e.file.split(/[/\\]/).pop() : void 0,
			sources: [e.source ? mr$1(e.file || "", e.source) : e.file || ""],
			sourcesContent: e.includeContent ? [this.original] : void 0,
			names: i,
			mappings: o.raw,
			x_google_ignoreList: this.ignoreList ? [r] : void 0
		};
	}
	generateMap(e) {
		return new br(this.generateDecodedMap(e));
	}
	_ensureindentStr() {
		this.indentStr === void 0 && (this.indentStr = pr$1(this.original));
	}
	_getRawIndentString() {
		return this._ensureindentStr(), this.indentStr;
	}
	getIndentString() {
		return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
	}
	indent(e, r) {
		const i = /^[^\r\n]/gm;
		if (kr(e) && (r = e, e = void 0), e === void 0 && (this._ensureindentStr(), e = this.indentStr || "	"), e === "") return this;
		r = r || {};
		const o = {};
		r.exclude && (typeof r.exclude[0] == "number" ? [r.exclude] : r.exclude).forEach((d) => {
			for (let n = d[0]; n < d[1]; n += 1) o[n] = !0;
		});
		let c = r.indentStart !== !1;
		const l = u$2((b) => c ? `${e}${b}` : (c = !0, b), "replacer");
		this.intro = this.intro.replace(i, l);
		let p = 0, g = this.firstChunk;
		for (; g;) {
			const b = g.end;
			if (g.edited) o[p] || (g.content = g.content.replace(i, l), g.content.length && (c = g.content[g.content.length - 1] === `
`));
			else for (p = g.start; p < b;) {
				if (!o[p]) {
					const d = this.original[p];
					d === `
` ? c = !0 : d !== "\r" && c && (c = !1, p === g.start || (this._splitChunk(g, p), g = g.next), g.prependRight(e));
				}
				p += 1;
			}
			p = g.end, g = g.next;
		}
		return this.outro = this.outro.replace(i, l), this;
	}
	insert() {
		throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
	}
	insertLeft(e, r) {
		return z$2.insertLeft || (console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"), z$2.insertLeft = !0), this.appendLeft(e, r);
	}
	insertRight(e, r) {
		return z$2.insertRight || (console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"), z$2.insertRight = !0), this.prependRight(e, r);
	}
	move(e, r, i) {
		if (e = e + this.offset, r = r + this.offset, i = i + this.offset, i >= e && i <= r) throw new Error("Cannot move a selection inside itself");
		this._split(e), this._split(r), this._split(i);
		const o = this.byStart[e], c = this.byEnd[r], l = o.previous, p = c.next, g = this.byStart[i];
		if (!g && c === this.lastChunk) return this;
		const b = g ? g.previous : this.lastChunk;
		return l && (l.next = p), p && (p.previous = l), b && (b.next = o), g && (g.previous = c), o.previous || (this.firstChunk = c.next), c.next || (this.lastChunk = o.previous, this.lastChunk.next = null), o.previous = b, c.next = g || null, b || (this.firstChunk = o), g || (this.lastChunk = c), this;
	}
	overwrite(e, r, i, o) {
		return o = o || {}, this.update(e, r, i, {
			...o,
			overwrite: !o.contentOnly
		});
	}
	update(e, r, i, o) {
		if (e = e + this.offset, r = r + this.offset, typeof i != "string") throw new TypeError("replacement content must be a string");
		if (this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; r < 0;) r += this.original.length;
		}
		if (r > this.original.length) throw new Error("end is out of bounds");
		if (e === r) throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");
		this._split(e), this._split(r), o === !0 && (z$2.storeName || (console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"), z$2.storeName = !0), o = { storeName: !0 });
		const c = o !== void 0 ? o.storeName : !1, l = o !== void 0 ? o.overwrite : !1;
		if (c) {
			const b = this.original.slice(e, r);
			Object.defineProperty(this.storedNames, b, {
				writable: !0,
				value: !0,
				enumerable: !0
			});
		}
		const p = this.byStart[e], g = this.byEnd[r];
		if (p) {
			let b = p;
			for (; b !== g;) {
				if (b.next !== this.byStart[b.end]) throw new Error("Cannot overwrite across a split point");
				b = b.next, b.edit("", !1);
			}
			p.edit(i, c, !l);
		} else {
			const b = new te$1(e, r, "").edit(i, c);
			g.next = b, b.previous = g;
		}
		return this;
	}
	prepend(e) {
		if (typeof e != "string") throw new TypeError("outro content must be a string");
		return this.intro = e + this.intro, this;
	}
	prependLeft(e, r) {
		if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byEnd[e];
		return i ? i.prependLeft(r) : this.intro = r + this.intro, this;
	}
	prependRight(e, r) {
		if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byStart[e];
		return i ? i.prependRight(r) : this.outro = r + this.outro, this;
	}
	remove(e, r) {
		if (e = e + this.offset, r = r + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; r < 0;) r += this.original.length;
		}
		if (e === r) return this;
		if (e < 0 || r > this.original.length) throw new Error("Character is out of bounds");
		if (e > r) throw new Error("end must be greater than start");
		this._split(e), this._split(r);
		let i = this.byStart[e];
		for (; i;) i.intro = "", i.outro = "", i.edit(""), i = r > i.end ? this.byStart[i.end] : null;
		return this;
	}
	reset(e, r) {
		if (e = e + this.offset, r = r + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; r < 0;) r += this.original.length;
		}
		if (e === r) return this;
		if (e < 0 || r > this.original.length) throw new Error("Character is out of bounds");
		if (e > r) throw new Error("end must be greater than start");
		this._split(e), this._split(r);
		let i = this.byStart[e];
		for (; i;) i.reset(), i = r > i.end ? this.byStart[i.end] : null;
		return this;
	}
	lastChar() {
		if (this.outro.length) return this.outro[this.outro.length - 1];
		let e = this.lastChunk;
		do {
			if (e.outro.length) return e.outro[e.outro.length - 1];
			if (e.content.length) return e.content[e.content.length - 1];
			if (e.intro.length) return e.intro[e.intro.length - 1];
		} while (e = e.previous);
		return this.intro.length ? this.intro[this.intro.length - 1] : "";
	}
	lastLine() {
		let e = this.outro.lastIndexOf(Q$1);
		if (e !== -1) return this.outro.substr(e + 1);
		let r = this.outro, i = this.lastChunk;
		do {
			if (i.outro.length > 0) {
				if (e = i.outro.lastIndexOf(Q$1), e !== -1) return i.outro.substr(e + 1) + r;
				r = i.outro + r;
			}
			if (i.content.length > 0) {
				if (e = i.content.lastIndexOf(Q$1), e !== -1) return i.content.substr(e + 1) + r;
				r = i.content + r;
			}
			if (i.intro.length > 0) {
				if (e = i.intro.lastIndexOf(Q$1), e !== -1) return i.intro.substr(e + 1) + r;
				r = i.intro + r;
			}
		} while (i = i.previous);
		return e = this.intro.lastIndexOf(Q$1), e !== -1 ? this.intro.substr(e + 1) + r : this.intro + r;
	}
	slice(e = 0, r = this.original.length - this.offset) {
		if (e = e + this.offset, r = r + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; r < 0;) r += this.original.length;
		}
		let i = "", o = this.firstChunk;
		for (; o && (o.start > e || o.end <= e);) {
			if (o.start < r && o.end >= r) return i;
			o = o.next;
		}
		if (o && o.edited && o.start !== e) throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);
		const c = o;
		for (; o;) {
			o.intro && (c !== o || o.start === e) && (i += o.intro);
			const l = o.start < r && o.end >= r;
			if (l && o.edited && o.end !== r) throw new Error(`Cannot use replaced character ${r} as slice end anchor.`);
			const p = c === o ? e - o.start : 0, g = l ? o.content.length + r - o.end : o.content.length;
			if (i += o.content.slice(p, g), o.outro && (!l || o.end === r) && (i += o.outro), l) break;
			o = o.next;
		}
		return i;
	}
	snip(e, r) {
		const i = this.clone();
		return i.remove(0, e), i.remove(r, i.original.length), i;
	}
	_split(e) {
		if (this.byStart[e] || this.byEnd[e]) return;
		let r = this.lastSearchedChunk, i = r;
		const o = e > r.end;
		for (; r;) {
			if (r.contains(e)) return this._splitChunk(r, e);
			if (r = o ? this.byStart[r.end] : this.byEnd[r.start], r === i) return;
			i = r;
		}
	}
	_splitChunk(e, r) {
		if (e.edited && e.content.length) {
			const o = Ke$1(this.original)(r);
			throw new Error(`Cannot split a chunk that has already been edited (${o.line}:${o.column} \u2013 "${e.original}")`);
		}
		const i = e.split(r);
		return this.byEnd[r] = e, this.byStart[r] = i, this.byEnd[i.end] = i, e === this.lastChunk && (this.lastChunk = i), this.lastSearchedChunk = e, !0;
	}
	toString() {
		let e = this.intro, r = this.firstChunk;
		for (; r;) e += r.toString(), r = r.next;
		return e + this.outro;
	}
	isEmpty() {
		let e = this.firstChunk;
		do
			if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim()) return !1;
		while (e = e.next);
		return !0;
	}
	length() {
		let e = this.firstChunk, r = 0;
		do
			r += e.intro.length + e.content.length + e.outro.length;
		while (e = e.next);
		return r;
	}
	trimLines() {
		return this.trim("[\\r\\n]");
	}
	trim(e) {
		return this.trimStart(e).trimEnd(e);
	}
	trimEndAborted(e) {
		const r = new RegExp((e || "\\s") + "+$");
		if (this.outro = this.outro.replace(r, ""), this.outro.length) return !0;
		let i = this.lastChunk;
		do {
			const o = i.end, c = i.trimEnd(r);
			if (i.end !== o && (this.lastChunk === i && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), c) return !0;
			i = i.previous;
		} while (i);
		return !1;
	}
	trimEnd(e) {
		return this.trimEndAborted(e), this;
	}
	trimStartAborted(e) {
		const r = new RegExp("^" + (e || "\\s") + "+");
		if (this.intro = this.intro.replace(r, ""), this.intro.length) return !0;
		let i = this.firstChunk;
		do {
			const o = i.end, c = i.trimStart(r);
			if (i.end !== o && (i === this.lastChunk && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), c) return !0;
			i = i.next;
		} while (i);
		return !1;
	}
	trimStart(e) {
		return this.trimStartAborted(e), this;
	}
	hasChanged() {
		return this.original !== this.toString();
	}
	_replaceRegexp(e, r) {
		function i(c, l) {
			return typeof r == "string" ? r.replace(/\$(\$|&|\d+)/g, (p, g) => g === "$" ? "$" : g === "&" ? c[0] : +g < c.length ? c[+g] : `$${g}`) : r(...c, c.index, l, c.groups);
		}
		u$2(i, "getReplacement");
		function o(c, l) {
			let p;
			const g = [];
			for (; p = c.exec(l);) g.push(p);
			return g;
		}
		if (u$2(o, "matchAll"), e.global) o(e, this.original).forEach((l) => {
			if (l.index != null) {
				const p = i(l, this.original);
				p !== l[0] && this.overwrite(l.index, l.index + l[0].length, p);
			}
		});
		else {
			const c = this.original.match(e);
			if (c && c.index != null) {
				const l = i(c, this.original);
				l !== c[0] && this.overwrite(c.index, c.index + c[0].length, l);
			}
		}
		return this;
	}
	_replaceString(e, r) {
		const { original: i } = this, o = i.indexOf(e);
		return o !== -1 && this.overwrite(o, o + e.length, r), this;
	}
	replace(e, r) {
		return typeof e == "string" ? this._replaceString(e, r) : this._replaceRegexp(e, r);
	}
	_replaceAllString(e, r) {
		const { original: i } = this, o = e.length;
		for (let c = i.indexOf(e); c !== -1; c = i.indexOf(e, c + o)) i.slice(c, c + o) !== r && this.overwrite(c, c + o, r);
		return this;
	}
	replaceAll(e, r) {
		if (typeof e == "string") return this._replaceAllString(e, r);
		if (!e.global) throw new TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");
		return this._replaceRegexp(e, r);
	}
};
const Oe$2 = "2";
const vr = `.then(${((s) => {
	const e = "default";
	return s[e] && typeof s[e] == "object" && "__esModule" in s[e] ? s[e] : s;
}).toString()})`;
const oe$1 = u$2((s, e, r) => {
	if (r) {
		if (!e.includes("import(")) return;
	} else if (!e.includes("import")) return;
	const o = se(e, s)[0].filter((g) => g.d > -1);
	if (o.length === 0) return;
	const c = new je$2(e);
	for (const g of o) c.appendRight(g.se, vr);
	return {
		code: c.toString(),
		map: c.generateMap({
			source: s,
			includeContent: !1,
			hires: "boundary"
		})
	};
}, "transformDynamicImport");
const Xe$1 = u$2((s) => {
	try {
		const e = fs.readFileSync(s, "utf8");
		return JSON.parse(e);
	} catch {}
}, "readJsonFile");
const ae$1 = u$2(() => {}, "noop");
const Ae$2 = u$2(() => Math.floor(Date.now() / 1e8), "getTime");
const xr = /^(\d+)-[^-]+$/;
const Ye$1 = 7;
const _r = 64;
var Er = class extends Map {
	static {
		u$2(this, "FileCache");
	}
	cacheDirectory;
	oldCacheDirectory;
	initialized = !1;
	constructor(e = q$1, r = path.join(n.tmpdir(), "tsx")) {
		super(), this.cacheDirectory = e, this.oldCacheDirectory = r;
	}
	initialize() {
		this.initialized || (fs.mkdirSync(this.cacheDirectory, { recursive: !0 }), this.initialized = !0, setImmediate(() => {
			this.expireDiskCache().catch(ae$1), this.removeOldCacheDirectory().catch(ae$1);
		}).unref());
	}
	get(e) {
		const r = super.get(e);
		if (r) return r;
		const i = Ae$2();
		for (let o = 0; o <= Ye$1; o += 1) {
			const c = Xe$1(path.join(this.cacheDirectory, `${i - o}-${e}`));
			if (c) return super.set(e, c), c;
		}
	}
	set(e, r) {
		if (super.set(e, r), r) {
			const o = `${Ae$2()}-${e}`;
			this.initialize(), fs.promises.writeFile(path.join(this.cacheDirectory, o), JSON.stringify(r)).catch(ae$1);
		}
		return this;
	}
	async expireDiskCache() {
		this.initialize();
		const e = Ae$2(), r = await fs.promises.opendir(this.cacheDirectory), i = [];
		let o = 0;
		for await (const c of r) {
			const l = xr.exec(c.name);
			if (l) {
				const p = Number(l[1]);
				Number.isSafeInteger(p) && e - p > Ye$1 && i.push(fs.promises.unlink(path.join(this.cacheDirectory, c.name)).catch(ae$1));
			}
			o += 1, o === _r && (await Promise.all(i), i.length = 0, o = 0);
		}
		await Promise.all(i);
	}
	async removeOldCacheDirectory() {
		try {
			await fs.promises.access(this.oldCacheDirectory).then(() => !0) && ("rm" in fs.promises ? await fs.promises.rm(this.oldCacheDirectory, {
				recursive: !0,
				force: !0
			}) : await fs.promises.rmdir(this.oldCacheDirectory, { recursive: !0 }));
		} catch {}
	}
};
var J$2 = process.env.TSX_DISABLE_CACHE ? /* @__PURE__ */ new Map() : new Er();
const Qe$2 = 44;
const Lr = 59;
const Ze$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const Ve$1 = /* @__PURE__ */ new Uint8Array(64);
const et$1 = /* @__PURE__ */ new Uint8Array(128);
for (let s = 0; s < 64; s++) {
	const e = Ze$1.charCodeAt(s);
	Ve$1[s] = e, et$1[e] = s;
}
const Re$2 = typeof TextDecoder < "u" ? new TextDecoder() : typeof Buffer < "u" ? { decode(s) {
	return Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString();
} } : { decode(s) {
	let e = "";
	for (let r = 0; r < s.length; r++) e += String.fromCharCode(s[r]);
	return e;
} };
function Or(s) {
	const e = /* @__PURE__ */ new Int32Array(5), r = [];
	let i = 0;
	do {
		const o = Ar(s, i), c = [];
		let l = !0, p = 0;
		e[0] = 0;
		for (let g = i; g < o; g++) {
			let b;
			g = Z$2(s, g, e, 0);
			const d = e[0];
			d < p && (l = !1), p = d, tt$1(s, g, o) ? (g = Z$2(s, g, e, 1), g = Z$2(s, g, e, 2), g = Z$2(s, g, e, 3), tt$1(s, g, o) ? (g = Z$2(s, g, e, 4), b = [
				d,
				e[1],
				e[2],
				e[3],
				e[4]
			]) : b = [
				d,
				e[1],
				e[2],
				e[3]
			]) : b = [d], c.push(b);
		}
		l || Rr(c), r.push(c), i = o + 1;
	} while (i <= s.length);
	return r;
}
u$2(Or, "decode");
function Ar(s, e) {
	const r = s.indexOf(";", e);
	return r === -1 ? s.length : r;
}
u$2(Ar, "indexOf");
function Z$2(s, e, r, i) {
	let o = 0, c = 0, l = 0;
	do {
		const g = s.charCodeAt(e++);
		l = et$1[g], o |= (l & 31) << c, c += 5;
	} while (l & 32);
	const p = o & 1;
	return o >>>= 1, p && (o = -2147483648 | -o), r[i] += o, e;
}
u$2(Z$2, "decodeInteger");
function tt$1(s, e, r) {
	return e >= r ? !1 : s.charCodeAt(e) !== Qe$2;
}
u$2(tt$1, "hasMoreVlq");
function Rr(s) {
	s.sort(Ir);
}
u$2(Rr, "sort");
function Ir(s, e) {
	return s[0] - e[0];
}
u$2(Ir, "sortComparator$1");
function Nr(s) {
	const e = /* @__PURE__ */ new Int32Array(5), r = 16384, i = 16348, o = new Uint8Array(r), c = o.subarray(0, i);
	let l = 0, p = "";
	for (let g = 0; g < s.length; g++) {
		const b = s[g];
		if (g > 0 && (l === r && (p += Re$2.decode(o), l = 0), o[l++] = Lr), b.length !== 0) {
			e[0] = 0;
			for (let d = 0; d < b.length; d++) {
				const n = b[d];
				l > i && (p += Re$2.decode(c), o.copyWithin(0, i, l), l -= i), d > 0 && (o[l++] = Qe$2), l = V$2(o, l, e, n, 0), n.length !== 1 && (l = V$2(o, l, e, n, 1), l = V$2(o, l, e, n, 2), l = V$2(o, l, e, n, 3), n.length !== 4 && (l = V$2(o, l, e, n, 4)));
			}
		}
	}
	return p + Re$2.decode(o.subarray(0, l));
}
u$2(Nr, "encode");
function V$2(s, e, r, i, o) {
	const c = i[o];
	let l = c - r[o];
	r[o] = c, l = l < 0 ? -l << 1 | 1 : l << 1;
	do {
		let p = l & 31;
		l >>>= 5, l > 0 && (p |= 32), s[e++] = Ve$1[p];
	} while (l > 0);
	return e;
}
u$2(V$2, "encodeInteger");
const $r = /^[\w+.-]+:\/\//;
const Mr = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
const jr = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
function Tr(s) {
	return $r.test(s);
}
u$2(Tr, "isAbsoluteUrl");
function Ur(s) {
	return s.startsWith("//");
}
u$2(Ur, "isSchemeRelativeUrl");
function rt$1(s) {
	return s.startsWith("/");
}
u$2(rt$1, "isAbsolutePath");
function Dr(s) {
	return s.startsWith("file:");
}
u$2(Dr, "isFileUrl");
function nt$2(s) {
	return /^[.?#]/.test(s);
}
u$2(nt$2, "isRelative");
function ce$1(s) {
	const e = Mr.exec(s);
	return it$2(e[1], e[2] || "", e[3], e[4] || "", e[5] || "/", e[6] || "", e[7] || "");
}
u$2(ce$1, "parseAbsoluteUrl");
function Br(s) {
	const e = jr.exec(s), r = e[2];
	return it$2("file:", "", e[1] || "", "", rt$1(r) ? r : "/" + r, e[3] || "", e[4] || "");
}
u$2(Br, "parseFileUrl");
function it$2(s, e, r, i, o, c, l) {
	return {
		scheme: s,
		user: e,
		host: r,
		port: i,
		path: o,
		query: c,
		hash: l,
		type: 7
	};
}
u$2(it$2, "makeUrl");
function st$2(s) {
	if (Ur(s)) {
		const r = ce$1("http:" + s);
		return r.scheme = "", r.type = 6, r;
	}
	if (rt$1(s)) {
		const r = ce$1("http://foo.com" + s);
		return r.scheme = "", r.host = "", r.type = 5, r;
	}
	if (Dr(s)) return Br(s);
	if (Tr(s)) return ce$1(s);
	const e = ce$1("http://foo.com/" + s);
	return e.scheme = "", e.host = "", e.type = s ? s.startsWith("?") ? 3 : s.startsWith("#") ? 2 : 4 : 1, e;
}
u$2(st$2, "parseUrl");
function Fr(s) {
	if (s.endsWith("/..")) return s;
	const e = s.lastIndexOf("/");
	return s.slice(0, e + 1);
}
u$2(Fr, "stripPathFilename");
function Pr(s, e) {
	ot$2(e, e.type), s.path === "/" ? s.path = e.path : s.path = Fr(e.path) + s.path;
}
u$2(Pr, "mergePaths");
function ot$2(s, e) {
	const r = e <= 4, i = s.path.split("/");
	let o = 1, c = 0, l = !1;
	for (let g = 1; g < i.length; g++) {
		const b = i[g];
		if (!b) {
			l = !0;
			continue;
		}
		if (l = !1, b !== ".") {
			if (b === "..") {
				c ? (l = !0, c--, o--) : r && (i[o++] = b);
				continue;
			}
			i[o++] = b, c++;
		}
	}
	let p = "";
	for (let g = 1; g < o; g++) p += "/" + i[g];
	(!p || l && !p.endsWith("/..")) && (p += "/"), s.path = p;
}
u$2(ot$2, "normalizePath");
function Wr(s, e) {
	if (!s && !e) return "";
	const r = st$2(s);
	let i = r.type;
	if (e && i !== 7) {
		const c = st$2(e), l = c.type;
		switch (i) {
			case 1: r.hash = c.hash;
			case 2: r.query = c.query;
			case 3:
			case 4: Pr(r, c);
			case 5: r.user = c.user, r.host = c.host, r.port = c.port;
			case 6: r.scheme = c.scheme;
		}
		l > i && (i = l);
	}
	ot$2(r, i);
	const o = r.query + r.hash;
	switch (i) {
		case 2:
		case 3: return o;
		case 4: {
			const c = r.path.slice(1);
			return c ? nt$2(e || s) && !nt$2(c) ? "./" + c + o : c + o : o || ".";
		}
		case 5: return r.path + o;
		default: return r.scheme + "//" + r.user + r.host + r.port + r.path + o;
	}
}
u$2(Wr, "resolve$1");
function at$2(s, e) {
	return e && !e.endsWith("/") && (e += "/"), Wr(s, e);
}
u$2(at$2, "resolve");
function zr(s) {
	if (!s) return "";
	const e = s.lastIndexOf("/");
	return s.slice(0, e + 1);
}
u$2(zr, "stripFilename");
const B = 0;
function Jr(s, e) {
	const r = ct$2(s, 0);
	if (r === s.length) return s;
	e || (s = s.slice());
	for (let i = r; i < s.length; i = ct$2(s, i + 1)) s[i] = Hr(s[i], e);
	return s;
}
u$2(Jr, "maybeSort");
function ct$2(s, e) {
	for (let r = e; r < s.length; r++) if (!qr(s[r])) return r;
	return s.length;
}
u$2(ct$2, "nextUnsortedSegmentLine");
function qr(s) {
	for (let e = 1; e < s.length; e++) if (s[e][B] < s[e - 1][B]) return !1;
	return !0;
}
u$2(qr, "isSorted");
function Hr(s, e) {
	return e || (s = s.slice()), s.sort(Gr);
}
u$2(Hr, "sortSegments");
function Gr(s, e) {
	return s[B] - e[B];
}
u$2(Gr, "sortComparator");
let le$2 = !1;
function Kr(s, e, r, i) {
	for (; r <= i;) {
		const o = r + (i - r >> 1), c = s[o][B] - e;
		if (c === 0) return le$2 = !0, o;
		c < 0 ? r = o + 1 : i = o - 1;
	}
	return le$2 = !1, r - 1;
}
u$2(Kr, "binarySearch");
function Xr(s, e, r) {
	for (let i = r - 1; i >= 0 && s[i][B] === e; r = i--);
	return r;
}
u$2(Xr, "lowerBound");
function Yr() {
	return {
		lastKey: -1,
		lastNeedle: -1,
		lastIndex: -1
	};
}
u$2(Yr, "memoizedState");
function Qr(s, e, r, i) {
	const { lastKey: o, lastNeedle: c, lastIndex: l } = r;
	let p = 0, g = s.length - 1;
	if (i === o) {
		if (e === c) return le$2 = l !== -1 && s[l][B] === e, l;
		e >= c ? p = l === -1 ? 0 : l : g = l;
	}
	return r.lastKey = i, r.lastNeedle = e, r.lastIndex = Kr(s, e, p, g);
}
u$2(Qr, "memoizedBinarySearch");
var lt$2 = class {
	static {
		u$2(this, "TraceMap");
	}
	constructor(e, r) {
		const i = typeof e == "string";
		if (!i && e._decodedMemo) return e;
		const o = i ? JSON.parse(e) : e, { version: c, file: l, names: p, sourceRoot: g, sources: b, sourcesContent: d } = o;
		this.version = c, this.file = l, this.names = p || [], this.sourceRoot = g, this.sources = b, this.sourcesContent = d, this.ignoreList = o.ignoreList || o.x_google_ignoreList || void 0;
		const n = at$2(g || "", zr(r));
		this.resolvedSources = b.map((C) => at$2(C || "", n));
		const { mappings: v } = o;
		typeof v == "string" ? (this._encoded = v, this._decoded = void 0) : (this._encoded = void 0, this._decoded = Jr(v, i)), this._decodedMemo = Yr(), this._bySources = void 0, this._bySourceMemos = void 0;
	}
};
function Hn$1(s) {
	return s;
}
u$2(Hn$1, "cast$2");
function ut$2(s) {
	var e;
	return (e = s)._decoded || (e._decoded = Or(s._encoded));
}
u$2(ut$2, "decodedMappings");
function Zr(s, e, r) {
	const i = ut$2(s);
	if (e >= i.length) return null;
	const o = i[e], c = Vr(o, s._decodedMemo, e, r);
	return c === -1 ? null : o[c];
}
u$2(Zr, "traceSegment");
function Vr(s, e, r, i, o) {
	let c = Qr(s, i, e, r);
	return le$2 && (c = Xr(s, i, c)), c === -1 || c === s.length ? -1 : c;
}
u$2(Vr, "traceSegmentInternal");
var Ie$2 = class {
	static {
		u$2(this, "SetArray");
	}
	constructor() {
		this._indexes = { __proto__: null }, this.array = [];
	}
};
function Gn$1(s) {
	return s;
}
u$2(Gn$1, "cast$1");
function ft$1(s, e) {
	return s._indexes[e];
}
u$2(ft$1, "get");
function ee$1(s, e) {
	const r = ft$1(s, e);
	if (r !== void 0) return r;
	const { array: i, _indexes: o } = s;
	return o[e] = i.push(e) - 1;
}
u$2(ee$1, "put");
function en$1(s, e) {
	const r = ft$1(s, e);
	if (r === void 0) return;
	const { array: i, _indexes: o } = s;
	for (let c = r + 1; c < i.length; c++) {
		const l = i[c];
		i[c - 1] = l, o[l]--;
	}
	o[e] = void 0, i.pop();
}
u$2(en$1, "remove");
const tn$1 = 0;
const rn$1 = 1;
const nn$1 = 2;
const sn$1 = 3;
const on$1 = 4;
const ht$1 = -1;
var an$1 = class {
	static {
		u$2(this, "GenMapping");
	}
	constructor({ file: e, sourceRoot: r } = {}) {
		this._names = new Ie$2(), this._sources = new Ie$2(), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = r, this._ignoreList = new Ie$2();
	}
};
function Kn(s) {
	return s;
}
u$2(Kn, "cast");
const cn$1 = u$2((s, e, r, i, o, c, l, p) => hn$1(!0, s, e, r, i, o, c, l), "maybeAddSegment");
function ln$1(s, e, r) {
	const { _sources: i, _sourcesContent: o } = s, c = ee$1(i, e);
	o[c] = r;
}
u$2(ln$1, "setSourceContent");
function un$1(s, e, r = !0) {
	const { _sources: i, _sourcesContent: o, _ignoreList: c } = s, l = ee$1(i, e);
	l === o.length && (o[l] = null), r ? ee$1(c, l) : en$1(c, l);
}
u$2(un$1, "setIgnore");
function dt$2(s) {
	const { _mappings: e, _sources: r, _sourcesContent: i, _names: o, _ignoreList: c } = s;
	return bn$1(e), {
		version: 3,
		file: s.file || void 0,
		names: o.array,
		sourceRoot: s.sourceRoot || void 0,
		sources: r.array,
		sourcesContent: i,
		mappings: e,
		ignoreList: c.array
	};
}
u$2(dt$2, "toDecodedMap");
function fn$1(s) {
	const e = dt$2(s);
	return Object.assign(Object.assign({}, e), { mappings: Nr(e.mappings) });
}
u$2(fn$1, "toEncodedMap");
function hn$1(s, e, r, i, o, c, l, p, g) {
	const { _mappings: b, _sources: d, _sourcesContent: n, _names: v } = e, C = dn$1(b, r), I = gn$1(C, i);
	if (!o) return pn$1(C, I) ? void 0 : gt$1(C, I, [i]);
	const R = ee$1(d, o), M = p ? ee$1(v, p) : ht$1;
	if (R === n.length && (n[R] = null), !mn$1(C, I, R, c, l, M)) return gt$1(C, I, p ? [
		i,
		R,
		c,
		l,
		M
	] : [
		i,
		R,
		c,
		l
	]);
}
u$2(hn$1, "addSegmentInternal");
function dn$1(s, e) {
	for (let r = s.length; r <= e; r++) s[r] = [];
	return s[e];
}
u$2(dn$1, "getLine");
function gn$1(s, e) {
	let r = s.length;
	for (let i = r - 1; i >= 0; r = i--) if (e >= s[i][tn$1]) break;
	return r;
}
u$2(gn$1, "getColumnIndex");
function gt$1(s, e, r) {
	for (let i = s.length; i > e; i--) s[i] = s[i - 1];
	s[e] = r;
}
u$2(gt$1, "insert");
function bn$1(s) {
	const { length: e } = s;
	let r = e;
	for (let i = r - 1; i >= 0 && !(s[i].length > 0); r = i, i--);
	r < e && (s.length = r);
}
u$2(bn$1, "removeEmptyFinalLines");
function pn$1(s, e) {
	return e === 0 ? !0 : s[e - 1].length === 1;
}
u$2(pn$1, "skipSourceless");
function mn$1(s, e, r, i, o, c) {
	if (e === 0) return !1;
	const l = s[e - 1];
	return l.length === 1 ? !1 : r === l[rn$1] && i === l[nn$1] && o === l[sn$1] && c === (l.length === 5 ? l[on$1] : ht$1);
}
u$2(mn$1, "skipSource");
const bt$2 = pt$1("", -1, -1, "", null, !1);
const wn$1 = [];
function pt$1(s, e, r, i, o, c) {
	return {
		source: s,
		line: e,
		column: r,
		name: i,
		content: o,
		ignore: c
	};
}
u$2(pt$1, "SegmentObject");
function mt$2(s, e, r, i, o) {
	return {
		map: s,
		sources: e,
		source: r,
		content: i,
		ignore: o
	};
}
u$2(mt$2, "Source");
function wt$1(s, e) {
	return mt$2(s, e, "", null, !1);
}
u$2(wt$1, "MapSource");
function kn$1(s, e, r) {
	return mt$2(null, wn$1, s, e, r);
}
u$2(kn$1, "OriginalSource");
function yn$1(s) {
	const e = new an$1({ file: s.map.file }), { sources: r, map: i } = s, o = i.names, c = ut$2(i);
	for (let l = 0; l < c.length; l++) {
		const p = c[l];
		for (let g = 0; g < p.length; g++) {
			const b = p[g], d = b[0];
			let n = bt$2;
			if (b.length !== 1) {
				const fe = r[b[1]];
				if (n = kt$1(fe, b[2], b[3], b.length === 5 ? o[b[4]] : ""), n == null) continue;
			}
			const { column: v, line: C, name: I, content: R, source: M, ignore: q } = n;
			cn$1(e, l, d, M, C, v, I), M && R != null && ln$1(e, M, R), q && un$1(e, M, !0);
		}
	}
	return e;
}
u$2(yn$1, "traceMappings");
function kt$1(s, e, r, i) {
	if (!s.map) return pt$1(s.source, e, r, i, s.content, s.ignore);
	const o = Zr(s.map, e, r);
	return o == null ? null : o.length === 1 ? bt$2 : kt$1(s.sources[o[1]], o[2], o[3], o.length === 5 ? s.map.names[o[4]] : i);
}
u$2(kt$1, "originalPositionFor");
function Cn$1(s) {
	return Array.isArray(s) ? s : [s];
}
u$2(Cn$1, "asArray");
function Sn$1(s, e) {
	const r = Cn$1(s).map((c) => new lt$2(c, "")), i = r.pop();
	for (let c = 0; c < r.length; c++) if (r[c].sources.length > 1) throw new Error(`Transformation map ${c} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
	let o = yt$1(i, e, "", 0);
	for (let c = r.length - 1; c >= 0; c--) o = wt$1(r[c], [o]);
	return o;
}
u$2(Sn$1, "buildSourceMapTree");
function yt$1(s, e, r, i) {
	const { resolvedSources: o, sourcesContent: c, ignoreList: l } = s, p = i + 1;
	return wt$1(s, o.map((b, d) => {
		const n = {
			importer: r,
			depth: p,
			source: b || "",
			content: void 0,
			ignore: void 0
		}, v = e(n.source, n), { source: C } = n;
		if (v) return yt$1(new lt$2(v, C), e, C, p);
		return kn$1(C, c ? c[d] : null, l ? l.includes(d) : !1);
	}));
}
u$2(yt$1, "build");
var vn$1 = class {
	static {
		u$2(this, "SourceMap");
	}
	constructor(e, r) {
		const i = r.decodedMappings ? dt$2(e) : fn$1(e);
		this.version = i.version, this.file = i.file, this.mappings = i.mappings, this.names = i.names, this.ignoreList = i.ignoreList, this.sourceRoot = i.sourceRoot, this.sources = i.sources, r.excludeContent || (this.sourcesContent = i.sourcesContent);
	}
	toString() {
		return JSON.stringify(this);
	}
};
function Ct$2(s, e, r) {
	const i = {
		excludeContent: !1,
		decodedMappings: !1
	}, o = Sn$1(s, e);
	return new vn$1(yn$1(o), i);
}
u$2(Ct$2, "remapping");
const St = u$2((s, e, r) => {
	const i = [], o = { code: e };
	for (const c of r) {
		const l = c(s, o.code);
		l && (Object.assign(o, l), i.unshift(l.map));
	}
	return {
		...o,
		map: Ct$2(i, () => null)
	};
}, "applyTransformersSync");
const xn$1 = u$2(async (s, e, r) => {
	const i = [], o = { code: e };
	for (const c of r) {
		const l = await c(s, o.code);
		l && (Object.assign(o, l), i.unshift(l.map));
	}
	return {
		...o,
		map: Ct$2(i, () => null)
	};
}, "applyTransformers");
const _n$1 = u$2((s) => {
	const e = [];
	let r = !1, i = !0;
	for (let o = 0; o < s.length; o += 1) {
		let c = s[o];
		if (c === "\\" && r) {
			if (o + 1 === s.length) return e;
			o += 1, c = s[o];
		} else if (c === " " && !r) {
			i = !0;
			continue;
		} else if (c === "\"") {
			r = !r;
			continue;
		}
		i ? (e.push(c), i = !1) : e[e.length - 1] += c;
	}
	return e;
}, "tokenizeNodeOptionsEnv");
const vt$1 = u$2((s, e, r) => {
	for (let i = 0; i < e.length; i += 1) {
		const o = e[i];
		if (o.length <= 1 || o[0] !== "-") continue;
		const c = o[1] === "-" ? o.indexOf("=") : -1;
		let l = c === -1 ? o : o.slice(0, c);
		l.includes("_", 2) && (l = l.slice(0, 2) + l.slice(2).replaceAll("_", "-"));
		for (const p of s.forms) {
			const [g, b] = p;
			if (l !== g || (b === 3 || b === 5) && c === -1) continue;
			const d = b === 4 || b === 5, n = b >= 3 ? 0 : b;
			let v = d ? p[2] : "";
			n === 0 && !d && (c === -1 ? (i += 1, v = e[i] ?? "", v[0] === "\\" && v[1] === "-" && (v = v.slice(1))) : v = o.slice(c + 1)), r = s.fold(v, r, n);
			break;
		}
	}
	return r;
}, "scanSource");
const En$1 = u$2((s) => {
	let e = s.init();
	const r = process.env.NODE_OPTIONS;
	return r && (e = vt$1(s, _n$1(r), e)), e = vt$1(s, process.execArgv, e), e;
}, "getOptionValue");
const Ln$1 = u$2((s, e, r) => r === 1, "setByEffect");
const An$1 = u$2((s, e) => ({
	forms: e,
	init: u$2(() => s, "init"),
	fold: Ln$1
}), "booleanFlag")(!1, [
	["--inspect-brk-node", 1],
	["--inspect-brk", 1],
	["--inspect-wait", 1],
	["--inspect", 1],
	["--no-inspect", 2]
]);
const Rn$1 = Object.freeze({
	target: `node${process.versions.node}`,
	loader: "default"
});
const In$1 = En$1(An$1);
const Ne$2 = {
	...Rn$1,
	sourcemap: !0,
	sourcesContent: !!process.env.NODE_V8_COVERAGE || In$1,
	minifyWhitespace: !0,
	keepNames: !0
};
const $e$2 = u$2((s) => {
	const e = s.sourcefile;
	if (e) {
		const r = path.extname(e.split("?")[0]);
		r ? r === ".cts" || r === ".mts" ? s.sourcefile = `${e.slice(0, -3)}ts` : r === ".mjs" && (s.sourcefile = `${e.slice(0, -3)}js`) : s.sourcefile += ".js";
	}
	return (r) => (r.map && (s.sourcefile !== e && (r.map = r.map.replace(JSON.stringify(s.sourcefile), JSON.stringify(e))), r.map = JSON.parse(r.map)), r);
}, "patchOptions");
const Me$2 = u$2((s) => {
	throw s.name = "TransformError", delete s.errors, delete s.warnings, s;
}, "formatEsbuildError");
const Nn$1 = u$2((s, e) => ({
	...p$1(b$1) ? {
		dirname: path.dirname(s),
		filename: s
	} : {},
	url: e
}), "getImportMeta");
const $n$1 = u$2((s, e) => {
	if (!s.includes("import")) return !1;
	try {
		return se(s, e)[0].some((r) => r.d === -2);
	} catch {
		return !0;
	}
}, "hasImportMeta");
const Mn$1 = u$2((s, e, r) => {
	let i, o, c;
	if (e.startsWith("file://")) {
		i = e;
		const n = new URL(e);
		o = fileURLToPath(n);
	} else [o, c] = e.split("?"), i = pathToFileURL(o) + (c ? `?${c}` : "");
	const { cjsBanner: l, ...p } = r ?? {}, g = {
		...Ne$2,
		format: "cjs",
		sourcefile: o,
		banner: `__filename=${JSON.stringify(o)};(()=>{${l ?? ""}`,
		footer: "})()",
		platform: "node",
		...p
	};
	g.format === "cjs" && !o.endsWith(".cjs") && !o.endsWith(".cts") && $n$1(s, o) && (g.define = {
		...g.define,
		"import.meta": JSON.stringify(Nn$1(o, i))
	});
	const b = ve$2([
		s,
		i,
		JSON.stringify(g),
		import_main.version,
		Oe$2
	].join("-"));
	let d = J$2.get(b);
	return d || (d = St(e, s, [(n, v) => {
		const C = $e$2(g);
		let I;
		try {
			I = (0, import_main.transformSync)(v, g);
		} catch (R) {
			throw Me$2(R);
		}
		return C(I);
	}, (n, v) => oe$1(n, v, !0)]), J$2.set(b, d)), d;
}, "transformSync");
const jn$1 = u$2(async (s, e, r) => {
	const i = {
		...Ne$2,
		format: "esm",
		sourcefile: e,
		...r
	}, o = ve$2([
		s,
		JSON.stringify(i),
		import_main.version,
		Oe$2
	].join("-"));
	let c = J$2.get(o);
	return c || (c = await xn$1(e, s, [async (l, p) => {
		const g = $e$2(i);
		let b;
		try {
			b = await (0, import_main.transform)(p, i);
		} catch (d) {
			throw Me$2(d);
		}
		return g(b);
	}, (l, p) => oe$1(l, p, !0)]), J$2.set(o, c)), c;
}, "transform");
const Tn$1 = u$2((s, e, r) => {
	const i = {
		...Ne$2,
		format: "esm",
		sourcefile: e,
		...r
	}, o = ve$2([
		s,
		JSON.stringify(i),
		import_main.version,
		Oe$2
	].join("-"));
	let c = J$2.get(o);
	return c || (c = St(e, s, [(l, p) => {
		const g = $e$2(i);
		let b;
		try {
			b = (0, import_main.transformSync)(p, i);
		} catch (d) {
			throw Me$2(d);
		}
		return g(b);
	}, (l, p) => oe$1(l, p, !0)]), J$2.set(o, c)), c;
}, "transformEsmSync");

// node_modules/.pnpm/tsx@4.23.15/node_modules/tsx/dist/index-Bqjv9TxC.mjs
var u$1 = Object.defineProperty;
var p = (e, s) => u$1(e, "name", {
	value: s,
	configurable: !0
});
const g = process.platform === "win32";
const m = p((e) => {
	const s = path.join(q$1, `${e}.pipe`);
	return g ? `\\\\?\\pipe\\${s}` : s;
}, "getPipePath");
let n$1 = !0;
const l = typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
let r = 0;
if (l.process && l.process.env && l.process.stdout) {
	const { FORCE_COLOR: e, NODE_DISABLE_COLORS: s, NO_COLOR: a, TERM: t, COLORTERM: i } = l.process.env;
	s || a || e === "0" ? n$1 = !1 : e === "1" || e === "2" || e === "3" ? n$1 = !0 : t === "dumb" ? n$1 = !1 : "CI" in l.process.env && [
		"TRAVIS",
		"CIRCLECI",
		"APPVEYOR",
		"GITLAB_CI",
		"GITHUB_ACTIONS",
		"BUILDKITE",
		"DRONE"
	].some((c) => c in l.process.env) ? n$1 = !0 : n$1 = process.stdout.isTTY, n$1 && (process.platform === "win32" || i && (i === "truecolor" || i === "24bit") ? r = 3 : t && (t.endsWith("-256color") || t.endsWith("256")) ? r = 2 : r = 1);
}
let f = {
	enabled: n$1,
	supportLevel: r
};
function o(e, s, a = 1) {
	const t = `\x1B[${e}m`, i = `\x1B[${s}m`, c = new RegExp(`\\x1b\\[${s}m`, "g");
	return (d) => f.enabled && f.supportLevel >= a ? t + ("" + d).replace(c, t) + i : "" + d;
}
p(o, "kolorist");
const C$1 = o(30, 39);
const R$1 = o(33, 39);
const I$2 = o(90, 39);
const L$2 = o(92, 39);
const w = o(95, 39);
const E$1 = o(96, 39);
const h = o(44, 49);
const T$1 = o(100, 49);
const y = o(103, 49);

// node_modules/.pnpm/tsx@4.23.15/node_modules/tsx/dist/require-CBjy4Foe.mjs
var Tt$1 = Object.defineProperty;
var u = (e, t) => Tt$1(e, "name", {
	value: t,
	configurable: !0
});
const K$1 = createRequire(import.meta.url);
const Ie$1 = u((e) => e !== null && typeof e == "object", "A");
const W = u((e, t) => Object.assign(/* @__PURE__ */ new Error(`[${e}]: ${t}`), { code: e }), "a");
const Ne$1 = "ERR_INVALID_PACKAGE_CONFIG";
const ge$1 = "ERR_INVALID_PACKAGE_TARGET";
const Gt$1 = "ERR_PACKAGE_PATH_NOT_EXPORTED";
const Kt$1 = /^\d+$/;
const zt$1 = /^(\.{1,2}|node_modules)$/i;
const Ht$1 = /\/|\\/;
var Be$1 = ((e) => (e.Export = "exports", e.Import = "imports", e))(Be$1 || {});
const ye$1 = u((e, t, r, n, s) => {
	if (t == null) return [];
	if (typeof t == "string") {
		const [o, ...a] = t.split(Ht$1);
		if (o === ".." || a.some((i) => zt$1.test(i))) throw W(ge$1, `Invalid "${e}" target "${t}" defined in the package config`);
		return [s ? t.replace(/\*/g, s) : t];
	}
	if (Array.isArray(t)) return t.flatMap((o) => ye$1(e, o, r, n, s));
	if (Ie$1(t)) {
		for (const o of Object.keys(t)) {
			if (Kt$1.test(o)) throw W(Ne$1, "Cannot contain numeric property keys");
			if (o === "default" || n.includes(o)) return ye$1(e, t[o], r, n, s);
		}
		return [];
	}
	throw W(ge$1, `Invalid "${e}" target "${t}"`);
}, "f");
const z$1 = "*";
const Xt$1 = u((e, t) => {
	const r = e.indexOf(z$1), n = t.indexOf(z$1);
	return r === n ? t.length > e.length : n > r;
}, "m");
function Yt(e, t) {
	if (!t.includes(z$1) && e.hasOwnProperty(t)) return [t];
	let r, n;
	for (const s of Object.keys(e)) if (s.includes(z$1)) {
		const [o, a, i] = s.split(z$1);
		if (i === void 0 && t.startsWith(o) && t.endsWith(a)) {
			const m = t.slice(o.length, -a.length || void 0);
			m && (!r || Xt$1(r, s)) && (r = s, n = m);
		}
	}
	return [r, n];
}
u(Yt, "d");
const Zt = u((e) => Object.keys(e).reduce((t, r) => {
	const n = r === "" || r[0] !== ".";
	if (t === void 0 || t === n) return n;
	throw W(Ne$1, "\"exports\" cannot contain some keys starting with \".\" and some not");
}, void 0), "p");
const qt$1 = /^\w+:/;
const en = u((e, t, r) => {
	if (!e) throw new Error("\"exports\" is required");
	t = t === "" ? "." : `./${t}`, (typeof e == "string" || Array.isArray(e) || Ie$1(e) && Zt(e)) && (e = { ".": e });
	const [n, s] = Yt(e, t), o = ye$1(Be$1.Export, e[n], t, r, s);
	if (o.length === 0) throw W(Gt$1, t === "." ? "No \"exports\" main defined" : `Package subpath '${t}' is not defined by "exports"`);
	for (const a of o) if (!a.startsWith("./") && !qt$1.test(a)) throw W(ge$1, `Invalid "exports" target "${a}" defined in the package config`);
	return o;
}, "v");
var tn = Object.defineProperty;
var c = u((e, t) => tn(e, "name", {
	value: t,
	configurable: !0
}), "i");
function A(e) {
	return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
u(A, "x"), c(A, "slash");
const nn = c((e, t) => {
	const r = `readFileSync:${t}`;
	let n = e?.get(r);
	return n === void 0 && (n = fs.readFileSync(t, "utf8"), e?.set(r, n)), n;
}, "readFile");
const _ = c((e, t) => {
	const r = `tryStat:${t}`;
	let n = e?.get(r);
	if (n === void 0) {
		try {
			n = fs.statSync(t);
		} catch {
			n = null;
		}
		e?.set(r, n);
	}
	return n ?? void 0;
}, "tryStat");
const H = c((e, t, r) => {
	for (;;) {
		const n = path.posix.join(e, t);
		if (_(r, n)) return n;
		const s = path.dirname(e);
		if (s === e) return;
		e = s;
	}
}, "findUp");
function We$1(e, t = !1) {
	const r = e.length;
	let n = 0, s = "", o = 0, a = 16, i = 0, m = 0, f = 0, y = 0, p = 0;
	function v(l, C) {
		let S = 0, x = 0;
		for (; S < l;) {
			let w = e.charCodeAt(n);
			if (w >= 48 && w <= 57) x = x * 16 + w - 48;
			else if (w >= 65 && w <= 70) x = x * 16 + w - 65 + 10;
			else if (w >= 97 && w <= 102) x = x * 16 + w - 97 + 10;
			else break;
			n++, S++;
		}
		return S < l && (x = -1), x;
	}
	u(v, "A"), c(v, "scanHexDigits");
	function b(l) {
		n = l, s = "", o = 0, a = 16, p = 0;
	}
	u(b, "O"), c(b, "setPosition");
	function k() {
		let l = n;
		if (e.charCodeAt(n) === 48) n++;
		else for (n++; n < e.length && I$1(e.charCodeAt(n));) n++;
		if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && I$1(e.charCodeAt(n))) for (n++; n < e.length && I$1(e.charCodeAt(n));) n++;
		else return p = 3, e.substring(l, n);
		let C = n;
		if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && I$1(e.charCodeAt(n))) {
			for (n++; n < e.length && I$1(e.charCodeAt(n));) n++;
			C = n;
		} else p = 3;
		return e.substring(l, C);
	}
	u(k, "h"), c(k, "scanNumber");
	function E() {
		let l = "", C = n;
		for (;;) {
			if (n >= r) {
				l += e.substring(C, n), p = 2;
				break;
			}
			const S = e.charCodeAt(n);
			if (S === 34) {
				l += e.substring(C, n), n++;
				break;
			}
			if (S === 92) {
				if (l += e.substring(C, n), n++, n >= r) {
					p = 2;
					break;
				}
				switch (e.charCodeAt(n++)) {
					case 34:
						l += "\"";
						break;
					case 92:
						l += "\\";
						break;
					case 47:
						l += "/";
						break;
					case 98:
						l += "\b";
						break;
					case 102:
						l += "\f";
						break;
					case 110:
						l += `
`;
						break;
					case 114:
						l += "\r";
						break;
					case 116:
						l += "	";
						break;
					case 117:
						const x = v(4);
						x >= 0 ? l += String.fromCharCode(x) : p = 4;
						break;
					default: p = 5;
				}
				C = n;
				continue;
			}
			if (S >= 0 && S <= 31) if (M(S)) {
				l += e.substring(C, n), p = 2;
				break;
			} else p = 6;
			n++;
		}
		return l;
	}
	u(E, "D"), c(E, "scanString");
	function d() {
		if (s = "", p = 0, o = n, m = i, y = f, n >= r) return o = r, a = 17;
		let l = e.charCodeAt(n);
		if (oe(l)) {
			do
				n++, s += String.fromCharCode(l), l = e.charCodeAt(n);
			while (oe(l));
			return a = 15;
		}
		if (M(l)) return n++, s += String.fromCharCode(l), l === 13 && e.charCodeAt(n) === 10 && (n++, s += `
`), i++, f = n, a = 14;
		switch (l) {
			case 123: return n++, a = 1;
			case 125: return n++, a = 2;
			case 91: return n++, a = 3;
			case 93: return n++, a = 4;
			case 58: return n++, a = 6;
			case 44: return n++, a = 5;
			case 34: return n++, s = E(), a = 10;
			case 47:
				const C = n - 1;
				if (e.charCodeAt(n + 1) === 47) {
					for (n += 2; n < r && !M(e.charCodeAt(n));) n++;
					return s = e.substring(C, n), a = 12;
				}
				if (e.charCodeAt(n + 1) === 42) {
					n += 2;
					const S = r - 1;
					let x = !1;
					for (; n < S;) {
						const w = e.charCodeAt(n);
						if (w === 42 && e.charCodeAt(n + 1) === 47) {
							n += 2, x = !0;
							break;
						}
						n++, M(w) && (w === 13 && e.charCodeAt(n) === 10 && n++, i++, f = n);
					}
					return x || (n++, p = 1), s = e.substring(C, n), a = 13;
				}
				return s += String.fromCharCode(l), n++, a = 16;
			case 45: if (s += String.fromCharCode(l), n++, n === r || !I$1(e.charCodeAt(n))) return a = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return s += k(), a = 11;
			default:
				for (; n < r && g(l);) n++, l = e.charCodeAt(n);
				if (o !== n) {
					switch (s = e.substring(o, n), s) {
						case "true": return a = 8;
						case "false": return a = 9;
						case "null": return a = 7;
					}
					return a = 16;
				}
				return s += String.fromCharCode(l), n++, a = 16;
		}
	}
	u(d, "c"), c(d, "scanNext");
	function g(l) {
		if (oe(l) || M(l)) return !1;
		switch (l) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return !1;
		}
		return !0;
	}
	u(g, "p"), c(g, "isUnknownContentCharacter");
	function T() {
		let l;
		do
			l = d();
		while (l >= 12 && l <= 15);
		return l;
	}
	return u(T, "b"), c(T, "scanNextNonTrivia"), {
		setPosition: b,
		getPosition: c(() => n, "getPosition"),
		scan: t ? T : d,
		getToken: c(() => a, "getToken"),
		getTokenValue: c(() => s, "getTokenValue"),
		getTokenOffset: c(() => o, "getTokenOffset"),
		getTokenLength: c(() => n - o, "getTokenLength"),
		getTokenStartLine: c(() => m, "getTokenStartLine"),
		getTokenStartCharacter: c(() => o - y, "getTokenStartCharacter"),
		getTokenError: c(() => p, "getTokenError")
	};
}
u(We$1, "Ne"), c(We$1, "createScanner");
function oe(e) {
	return e === 32 || e === 9;
}
u(oe, "X"), c(oe, "isWhiteSpace");
function M(e) {
	return e === 10 || e === 13;
}
u(M, "P"), c(M, "isLineBreak");
function I$1(e) {
	return e >= 48 && e <= 57;
}
u(I$1, "S"), c(I$1, "isDigit");
var Me$1;
(function(e) {
	e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(Me$1 || (Me$1 = {})), new Array(20).fill(0).map((e, t) => " ".repeat(t));
const J$1 = 200;
new Array(J$1).fill(0).map((e, t) => `
` + " ".repeat(t)), new Array(J$1).fill(0).map((e, t) => "\r" + " ".repeat(t)), new Array(J$1).fill(0).map((e, t) => `\r
` + " ".repeat(t)), new Array(J$1).fill(0).map((e, t) => `
` + "	".repeat(t)), new Array(J$1).fill(0).map((e, t) => "\r" + "	".repeat(t)), new Array(J$1).fill(0).map((e, t) => `\r
` + "	".repeat(t));
var ae;
(function(e) {
	e.DEFAULT = { allowTrailingComma: !1 };
})(ae || (ae = {}));
function Je$1(e, t = [], r = ae.DEFAULT) {
	let n = null, s = [];
	const o = [];
	function a(i) {
		Array.isArray(s) ? s.push(i) : n !== null && (s[n] = i);
	}
	return u(a, "l"), c(a, "onValue"), Ve(e, {
		onObjectBegin: c(() => {
			const i = {};
			a(i), o.push(s), s = i, n = null;
		}, "onObjectBegin"),
		onObjectProperty: c((i) => {
			n = i;
		}, "onObjectProperty"),
		onObjectEnd: c(() => {
			s = o.pop();
		}, "onObjectEnd"),
		onArrayBegin: c(() => {
			const i = [];
			a(i), o.push(s), s = i, n = null;
		}, "onArrayBegin"),
		onArrayEnd: c(() => {
			s = o.pop();
		}, "onArrayEnd"),
		onLiteralValue: a,
		onError: c((i, m, f) => {
			t.push({
				error: i,
				offset: m,
				length: f
			});
		}, "onError")
	}, r), s[0];
}
u(Je$1, "Re"), c(Je$1, "parse$1");
function Ve(e, t, r = ae.DEFAULT) {
	const n = We$1(e, !1), s = [];
	let o = 0;
	function a(j) {
		return j ? () => o === 0 && j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
	}
	u(a, "l"), c(a, "toNoArgVisit");
	function i(j) {
		return j ? (O) => o === 0 && j(O, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
	}
	u(i, "g"), c(i, "toOneArgVisit");
	function m(j) {
		return j ? (O) => o === 0 && j(O, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => s.slice()) : () => !0;
	}
	u(m, "m"), c(m, "toOneArgVisitWithPath");
	function f(j) {
		return j ? () => {
			o > 0 ? o++ : j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => s.slice()) === !1 && (o = 1);
		} : () => !0;
	}
	u(f, "k"), c(f, "toBeginVisit");
	function y(j) {
		return j ? () => {
			o > 0 && o--, o === 0 && j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter());
		} : () => !0;
	}
	u(y, "w"), c(y, "toEndVisit");
	const p = f(t.onObjectBegin), v = m(t.onObjectProperty), b = y(t.onObjectEnd), k = f(t.onArrayBegin), E = y(t.onArrayEnd), d = m(t.onLiteralValue), g = i(t.onSeparator), T = a(t.onComment), l = i(t.onError), C = r && r.disallowComments, S = r && r.allowTrailingComma;
	function x() {
		for (;;) {
			const j = n.scan();
			switch (n.getTokenError()) {
				case 4:
					w(14);
					break;
				case 5:
					w(15);
					break;
				case 3:
					w(13);
					break;
				case 1:
					C || w(11);
					break;
				case 2:
					w(12);
					break;
				case 6: w(16);
			}
			switch (j) {
				case 12:
				case 13:
					C ? w(10) : T();
					break;
				case 16:
					w(1);
					break;
				case 15:
				case 14: break;
				default: return j;
			}
		}
	}
	u(x, "v"), c(x, "scanNext");
	function w(j, O = [], Ue = []) {
		if (l(j), O.length + Ue.length > 0) {
			let re = n.getToken();
			for (; re !== 17;) {
				if (O.indexOf(re) !== -1) {
					x();
					break;
				} else if (Ue.indexOf(re) !== -1) break;
				re = x();
			}
		}
	}
	u(w, "d"), c(w, "handleError");
	function D(j) {
		const O = n.getTokenValue();
		return j ? d(O) : (v(O), s.push(O)), x(), !0;
	}
	u(D, "L"), c(D, "parseString");
	function R() {
		switch (n.getToken()) {
			case 11:
				const j = n.getTokenValue();
				let O = Number(j);
				isNaN(O) && (w(2), O = 0), d(O);
				break;
			case 7:
				d(null);
				break;
			case 8:
				d(!0);
				break;
			case 9:
				d(!1);
				break;
			default: return !1;
		}
		return x(), !0;
	}
	u(R, "B"), c(R, "parseLiteral");
	function $() {
		return n.getToken() !== 10 ? (w(3, [], [2, 5]), !1) : (D(!1), n.getToken() === 6 ? (g(":"), x(), ne() || w(4, [], [2, 5])) : w(5, [], [2, 5]), s.pop(), !0);
	}
	u($, "$"), c($, "parseProperty");
	function B() {
		p(), x();
		let j = !1;
		for (; n.getToken() !== 2 && n.getToken() !== 17;) {
			if (n.getToken() === 5) {
				if (j || w(4, [], []), g(","), x(), n.getToken() === 2 && S) break;
			} else j && w(6, [], []);
			$() || w(4, [], [2, 5]), j = !0;
		}
		return b(), n.getToken() !== 2 ? w(7, [2], []) : x(), !0;
	}
	u(B, "N"), c(B, "parseObject");
	function Le() {
		k(), x();
		let j = !0, O = !1;
		for (; n.getToken() !== 4 && n.getToken() !== 17;) {
			if (n.getToken() === 5) {
				if (O || w(4, [], []), g(","), x(), n.getToken() === 4 && S) break;
			} else O && w(6, [], []);
			j ? (s.push(0), j = !1) : s[s.length - 1]++, ne() || w(4, [], [4, 5]), O = !0;
		}
		return E(), j || s.pop(), n.getToken() !== 4 ? w(8, [4], []) : x(), !0;
	}
	u(Le, "$e"), c(Le, "parseArray");
	function ne() {
		switch (n.getToken()) {
			case 3: return Le();
			case 1: return B();
			case 10: return D(!0);
			default: return R();
		}
	}
	return u(ne, "H"), c(ne, "parseValue"), x(), n.getToken() === 17 ? r.allowEmptyContent ? !0 : (w(4, [], []), !1) : ne() ? (n.getToken() !== 17 && w(9, [], []), !0) : (w(4, [], []), !1);
}
u(Ve, "Pe"), c(Ve, "visit");
var Qe$1;
(function(e) {
	e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Qe$1 || (Qe$1 = {}));
var Ge;
(function(e) {
	e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(Ge || (Ge = {}));
const rn = Je$1;
var Ke;
(function(e) {
	e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(Ke || (Ke = {}));
const ke = c((e, t) => rn(nn(t, e)), "readJsonc");
const ze = c(() => {
	const { findPnpApi: e } = P;
	return e && e(process.cwd());
}, "getPnpApi");
const sn = "detectTypeScriptVersion:";
const on = c((e, t) => {
	const r = `${sn}${e}`, n = t?.get(r);
	if (n !== void 0) return n ?? void 0;
	let s;
	const o = ze();
	if (o) try {
		s = o.resolveRequest("typescript/package.json", e) ?? void 0;
	} catch {}
	s ??= H(path.resolve(e), path.join("node_modules", "typescript", "package.json"), t);
	let a;
	if (s) try {
		const i = ke(s, t);
		typeof i?.version == "string" && (a = i.version);
	} catch {}
	return t?.set(r, a ?? null), a;
}, "detectTypeScriptVersion");
const N = "package.json";
const ie = "tsconfig.json";
const an = c((e, t, r) => {
	const n = P.createRequire(path.join(r, "tsconfig.json"));
	if (e !== t) try {
		return n.resolve(e);
	} catch {}
	try {
		return n.resolve(t);
	} catch {}
	try {
		return n.resolve(`${t}/${N}`);
	} catch {}
}, "resolvePackageEntryWithNode");
const be$1 = c((e, t, r, n) => {
	const s = `resolveFromPackageJsonPath:${e}:${t}:${r}`;
	if (n?.has(s)) return n.get(s) || !1;
	const o = ke(e, n);
	if (!o) return;
	let a = t || ie;
	if (!r && o.exports) try {
		const [i] = en(o.exports, t, ["require", "types"]);
		a = i;
	} catch {
		return n?.set(s, ""), !1;
	}
	else !t && o.tsconfig && (a = o.tsconfig);
	return a = path.join(e, "..", a), n?.set(s, a), a;
}, "resolveFromPackageJsonPath");
const cn = c((e, t, r) => {
	const n = `resolveExtendsPath:${e}:${t}`;
	if (r?.has(n)) return r.get(n) || void 0;
	const s = ln(e, t, r);
	return r?.set(n, s || ""), s;
}, "resolveExtendsPath");
const ln = c((e, t, r) => {
	let n = e;
	if (e === ".." && (n = path.join(n, ie)), e[0] === "." && (n = path.resolve(t, n)), path.isAbsolute(n)) {
		const d = _(r, n);
		if (d) {
			if (d.isFile()) return n;
		} else if (!n.endsWith(".json")) {
			const g = `${n}.json`;
			if (_(r, g)) return g;
		}
		return;
	}
	const [s, ...o] = e.split("/"), a = s[0] === "@" ? `${s}/${o.shift()}` : s, i = o.join("/"), m = ze();
	if (m) {
		const { resolveRequest: d } = m;
		try {
			if (a === e) {
				const g = d(path.join(a, N), t);
				if (g) {
					const T = be$1(g, i, !1, r);
					if (T && _(r, T)) return T;
				}
			} else {
				let g;
				try {
					g = d(e, t, { extensions: [".json"] });
				} catch {
					g = d(path.join(e, ie), t);
				}
				if (g) return g;
			}
		} catch {}
	}
	const f = an(e, a, t);
	let y;
	if (f) {
		if (path.basename(f) !== N && f.endsWith(".json")) return f;
		y = path.basename(f) === N ? f : H(path.dirname(f), N, r);
	}
	const p = y && path.dirname(y) || H(path.resolve(t), path.join("node_modules", a), r);
	if (!p || !_(r, p)?.isDirectory()) return;
	const v = path.join(p, N);
	if (_(r, v)) {
		const d = be$1(v, i, !1, r);
		if (d === !1) return;
		if (d && _(r, d)?.isFile()) return d;
	}
	const b = path.join(p, i), k = b.endsWith(".json");
	if (!k) {
		const d = `${b}.json`;
		if (_(r, d)) return d;
	}
	const E = _(r, b);
	if (E) {
		if (E.isDirectory()) {
			const d = path.join(b, N);
			if (_(r, d)) {
				const T = be$1(d, "", !0, r);
				if (T && _(r, T)) return T;
			}
			const g = path.join(b, ie);
			if (_(r, g)) return g;
		} else if (k) return b;
	}
}, "resolveExtendsPathUncached");
const we$1 = Symbol("implicitBaseUrl");
const L$1 = "${configDir}";
const xe = /^\.{1,2}(\/.*)?$/;
const ce = c((e) => {
	const t = A(e);
	return xe.test(t) ? t : `./${t}`;
}, "normalizeRelativePath");
const un = c((e) => {
	const t = { ...e };
	if (t.strict) for (const n of [
		"noImplicitAny",
		"noImplicitThis",
		"strictNullChecks",
		"strictFunctionTypes",
		"strictBindCallApply",
		"strictPropertyInitialization",
		"strictBuiltinIteratorReturn",
		"alwaysStrict",
		"useUnknownInCatchVariables"
	]) t[n] === void 0 && (t[n] = !0);
	if (t.composite && (t.declaration ??= !0, t.incremental ??= !0), t.target) {
		let r = t.target.toLowerCase();
		r === "es2015" && (r = "es6"), t.target = r, r === "esnext" && (t.module ??= "es6", t.useDefineForClassFields ??= !0), (r === "es6" || r === "es2016" || r === "es2017" || r === "es2018" || r === "es2019" || r === "es2020" || r === "es2021" || r === "es2022" || r === "es2023" || r === "es2024" || r === "es2025") && (t.module ??= "es6"), (r === "es2022" || r === "es2023" || r === "es2024" || r === "es2025") && (t.useDefineForClassFields ??= !0);
	}
	if (t.module) {
		let r = t.module.toLowerCase();
		if (r === "es2015" && (r = "es6"), t.module = r, (r === "es6" || r === "es2020" || r === "es2022" || r === "esnext" || r === "none" || r === "system" || r === "umd" || r === "amd") && (t.moduleResolution ??= "classic"), r === "system" && (t.allowSyntheticDefaultImports ??= !0), (r === "node16" || r === "node18" || r === "node20" || r === "nodenext" || r === "preserve") && (t.esModuleInterop ??= !0, t.allowSyntheticDefaultImports ??= !0), (r === "node16" || r === "node18" || r === "node20" || r === "nodenext") && (t.moduleDetection ??= "force"), (r === "node16" || r === "node18") && (t.target ??= "es2022", t.moduleResolution ??= "node16"), r === "node20" && (t.target ??= "es2023", t.moduleResolution ??= "node16", t.resolveJsonModule ??= !0), r === "nodenext" && (t.target ??= "esnext", t.moduleResolution ??= "nodenext", t.resolveJsonModule ??= !0), r === "node16" || r === "node18" || r === "node20" || r === "nodenext") {
			const n = t.target;
			(n === "es3" || n === "es2022" || n === "es2023" || n === "es2024" || n === "esnext") && (t.useDefineForClassFields ??= !0);
		}
		r === "preserve" && (t.moduleResolution ??= "bundler");
	}
	if (t.moduleResolution) {
		let r = t.moduleResolution.toLowerCase();
		r === "node" && (r = "node10"), t.moduleResolution = r, (r === "node16" || r === "nodenext" || r === "bundler") && (t.resolvePackageJsonExports ??= !0, t.resolvePackageJsonImports ??= !0), r === "bundler" && (t.allowSyntheticDefaultImports ??= !0, t.resolveJsonModule ??= !0);
	}
	for (const r of [
		"jsx",
		"moduleDetection",
		"importsNotUsedAsValues",
		"newLine"
	]) t[r] && (t[r] = t[r].toLowerCase());
	return t.esModuleInterop && (t.allowSyntheticDefaultImports ??= !0), t.verbatimModuleSyntax && (t.isolatedModules ??= !0, t.preserveConstEnums ??= !0), t.isolatedModules && (t.preserveConstEnums ??= !0), t.rewriteRelativeImportExtensions && (t.allowImportingTsExtensions ??= !0), t.lib && (t.lib = t.lib.map((r) => r.toLowerCase())), t.checkJs && (t.allowJs ??= !0), t;
}, "normalizeCompilerOptions");
const fn = c((e, t) => {
	!t.has("target") && !pn(e.module) && (e.target = "es3");
}, "applyV4Defaults");
const pn = c((e) => e === "node16" || e === "node18" || e === "node20" || e === "nodenext", "moduleDictatesTarget$1");
const dn = c((e, t) => {
	!t.has("target") && !mn(e.module) && (e.target = "es5");
}, "applyV5Defaults");
const mn = c((e) => e === "node16" || e === "node18" || e === "node20" || e === "nodenext", "moduleDictatesTarget");
const hn = c((e, t) => {
	t.has("strict") || (e.strict = !0), t.has("target") || (e.target = "es2025"), t.has("module") || (e.module = "es2022"), t.has("moduleResolution") || (e.moduleResolution = "bundler"), t.has("rootDir") || (e.rootDir = "."), t.has("types") || (e.types = []), t.has("noUncheckedSideEffectImports") || (e.noUncheckedSideEffectImports = !0), t.has("libReplacement") || (e.libReplacement = !1);
}, "applyV6Defaults");
const gn = [
	[4, fn],
	[5, dn],
	[6, hn]
];
const yn = c((e) => {
	const t = /^v?(\d+)/.exec(e);
	return t ? Number(t[1]) : void 0;
}, "parseMajor");
const kn = c((e, t) => {
	const r = yn(t);
	if (r === void 0) return;
	const n = new Set(Object.keys(e));
	for (const [s, o] of gn) s <= r && o(e, n);
}, "applyVersionDefaults");
const ve$1 = c((e, t) => ce(path.relative(e, t)), "pathRelative");
const He$1 = [
	"files",
	"include",
	"exclude"
];
const Xe = c((e, t, r) => {
	const n = path.join(t, r);
	return A(path.relative(e, n)) || "./";
}, "resolveAndRelativize");
const bn = c((e, t, r) => {
	const n = path.relative(e, t);
	if (!n) return r;
	return A(`${n}/${r.startsWith("./") ? r.slice(2) : r}`);
}, "prefixPattern");
const Ye = ["outDir", "declarationDir"];
const le$1 = c((e, t) => {
	if (e.startsWith(L$1)) return A(path.join(t, e.slice(12)));
}, "interpolateConfigDir");
const wn = [
	"outDir",
	"declarationDir",
	"outFile",
	"rootDir",
	"baseUrl",
	"tsBuildInfoFile"
];
const xn = c((e, t = {}) => {
	if (e.length === 0) throw new Error("Chain must not be empty");
	const { typescriptVersion: r } = t, n = new Map(e.map((p) => [p.path, p])), s = /* @__PURE__ */ new Map(), o = c((p) => {
		const v = s.get(p);
		if (v) return v;
		const b = n.get(p);
		if (!b) throw new Error(`Config not found in chain: ${p}`);
		const k = b.config, E = path.dirname(p);
		let d = {
			...k,
			...k.compilerOptions && { compilerOptions: { ...k.compilerOptions } },
			...k.watchOptions && { watchOptions: { ...k.watchOptions } }
		};
		if (delete d.extends, d.compilerOptions?.paths && !d.compilerOptions.baseUrl && (d.compilerOptions[we$1] = E), k.extends) {
			const g = Array.isArray(k.extends) ? k.extends : [k.extends];
			for (const T of g.toReversed()) {
				const l = o(T), C = path.dirname(T), { references: S, ...x } = l;
				if (x.compilerOptions) {
					const D = { ...x.compilerOptions };
					for (const R of [
						"baseUrl",
						"outDir",
						"declarationDir",
						"rootDir"
					]) {
						const $ = D[R];
						$ && !$.startsWith(L$1) && (D[R] = Xe(E, C, $));
					}
					for (const R of ["rootDirs", "typeRoots"]) {
						const $ = D[R];
						$ && (D[R] = $.map((B) => B.startsWith(L$1) ? B : Xe(E, C, B)));
					}
					x.compilerOptions = D;
				}
				for (const D of He$1) {
					const R = x[D];
					R && (x[D] = R.map(($) => $.startsWith(L$1) ? $ : bn(E, C, $)));
				}
				const w = {
					...x,
					...d,
					compilerOptions: {
						...x.compilerOptions,
						...d.compilerOptions
					}
				};
				x.watchOptions && (w.watchOptions = {
					...x.watchOptions,
					...d.watchOptions
				}), d = w;
			}
		}
		if (d.compilerOptions) {
			const { compilerOptions: g } = d;
			for (const l of ["baseUrl", "rootDir"]) {
				const C = g[l];
				if (C && !C.startsWith(L$1)) {
					const S = path.resolve(E, C);
					g[l] = ve$1(E, S);
				}
			}
			for (const l of Ye) {
				let C = g[l];
				C && (Array.isArray(d.exclude) || (d.exclude = Ye.map((S) => g[S]).filter(Boolean)), C.startsWith(L$1) || (C = ce(C)), g[l] = C);
			}
		} else d.compilerOptions = {};
		if (d.include && (d.include = d.include.map(A)), d.files && (d.files = d.files.map((g) => g.startsWith(L$1) ? g : ce(g))), d.watchOptions) {
			const { watchOptions: g } = d;
			for (const T of ["excludeDirectories", "excludeFiles"]) g[T] && (g[T] = g[T].map((l) => A(path.resolve(E, l))));
			for (const T of [
				"watchFile",
				"watchDirectory",
				"fallbackPolling"
			]) if (g[T]) {
				const l = g;
				l[T] = g[T].toLowerCase();
			}
		}
		return s.set(p, d), d;
	}, "resolveEntry"), a = e[0], i = o(a.path), m = path.dirname(a.path), f = {
		...i,
		compilerOptions: i.compilerOptions ? { ...i.compilerOptions } : {}
	}, { compilerOptions: y } = f;
	if (y) {
		for (const p of wn) {
			const v = y[p];
			if (v) {
				const b = le$1(v, m);
				y[p] = b ? ve$1(m, b) : v;
			}
		}
		for (const p of ["rootDirs", "typeRoots"]) {
			const v = y[p];
			v && (y[p] = v.map((b) => {
				const k = le$1(b, m);
				return k ? ve$1(m, k) : ce(b);
			}));
		}
		if (y.paths) {
			const p = {};
			for (const [v, b] of Object.entries(y.paths)) p[v] = b.map((k) => le$1(k, m) ?? k);
			y.paths = p;
		}
		r && kn(y, r), f.compilerOptions = un(y);
	}
	for (const p of He$1) {
		const v = f[p];
		v && (f[p] = v.map((b) => le$1(b, m) ?? b));
	}
	return {
		path: a.path,
		config: f,
		sources: e.map((p) => p.path)
	};
}, "resolveExtendsChain");
const vn = c((e, t = {}) => {
	const { cache: r = /* @__PURE__ */ new Map() } = t, n = path.resolve(e), s = [], o = /* @__PURE__ */ new Set(), a = c((i, m) => {
		const f = A(i);
		if (o.has(f)) return;
		o.add(f);
		let y;
		try {
			y = ke(i, r) || {};
		} catch {
			throw new Error(`Cannot resolve tsconfig at path: ${i}`);
		}
		if (typeof y != "object") throw new SyntaxError(`Failed to parse tsconfig at: ${i}`);
		const p = path.dirname(i);
		if (y.extends) {
			const v = Array.isArray(y.extends), b = (v ? y.extends : [y.extends]).map((E) => {
				const d = cn(E, p, r);
				if (!d) throw new Error(`File '${E}' not found.`);
				const g = A(d);
				if (m.has(g) || g === f) throw new Error(`Circularity detected while resolving configuration: ${g}`);
				return g;
			});
			y.extends = v ? b : b[0], s.push({
				path: f,
				config: y
			});
			const k = new Set(m);
			k.add(f);
			for (const E of [...b].reverse()) a(E, k);
		} else s.push({
			path: f,
			config: y
		});
	}, "collect");
	return a(n, /* @__PURE__ */ new Set()), s;
}, "getExtendsChain");
const Ee$1 = c((e, t = {}) => {
	const { cache: r = /* @__PURE__ */ new Map(), typescriptVersion: n = "auto" } = t, s = vn(e, { cache: r });
	let o;
	return n === "auto" ? o = on(path.dirname(s[0].path), r) : n !== !1 && (o = n), xn(s, { typescriptVersion: o });
}, "readTsconfig");
var En = Object.defineProperty;
var ue$1 = c((e, t) => En(e, "name", {
	value: t,
	configurable: !0
}), "s");
const Ze = ue$1((e) => {
	let t = "";
	for (let r = 0; r < e.length; r += 1) {
		const n = e[r], s = n.toUpperCase();
		t += n === s ? n.toLowerCase() : s;
	}
	return t;
}, "invertCase"), Ce$1 = /* @__PURE__ */ new Map(), qe$1 = ue$1((e, t) => {
	const r = Dt.join(e, `.is-fs-case-sensitive-test-${process.pid}`);
	try {
		return t.writeFileSync(r, ""), !t.existsSync(Ze(r));
	} finally {
		try {
			t.unlinkSync(r);
		} catch {}
	}
}, "checkDirectoryCaseWithWrite"), Cn = ue$1((e, t, r) => {
	try {
		return qe$1(e, r);
	} catch (n) {
		if (t === void 0) return qe$1(_t.tmpdir(), r);
		throw n;
	}
}, "checkDirectoryCaseWithFallback"), jn = ue$1((e, t = $t, r = !0) => {
	const n = e ?? process.cwd();
	if (r && Ce$1.has(n)) return Ce$1.get(n);
	let s;
	const o = Ze(n);
	return o !== n && t.existsSync(n) ? s = !t.existsSync(o) : s = Cn(n, e, t), r && Ce$1.set(n, s), s;
}, "isFsCaseSensitive"), { join: et } = path.posix, je$1 = {
	ts: [
		".ts",
		".tsx",
		".d.ts"
	],
	cts: [".cts", ".d.cts"],
	mts: [".mts", ".d.mts"]
}, Tn = c((e) => {
	const t = [...je$1.ts], r = [...je$1.cts], n = [...je$1.mts];
	return e?.allowJs && (t.push(".js", ".jsx"), r.push(".cjs"), n.push(".mjs")), [
		...t,
		...r,
		...n
	];
}, "getSupportedExtensions"), Sn = c((e) => {
	const t = [];
	if (!e) return t;
	const { outDir: r, declarationDir: n } = e;
	return r && t.push(r), n && t.push(n), t;
}, "getDefaultExcludeSpec"), tt = c((e) => e.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`), "escapeForRegexp"), Te$1 = `(?!(${[
	"node_modules",
	"bower_components",
	"jspm_packages"
].join("|")})(/|$))`, An = /(?:^|\/)[^.*?]+$/, nt$1 = "**/*", fe$1 = "[^/]", Se$1 = "[^./]", rt = process.platform === "win32", Pn = c(({ config: e, path: t }, r) => {
	if ("extends" in e) throw new Error("tsconfig#extends must be resolved. Use getTsconfig or readTsconfig to resolve it.");
	if (!path.isAbsolute(t)) throw new Error("The tsconfig path must be absolute");
	rt && (t = A(t));
	const n = path.dirname(t), { files: s, include: o, exclude: a, compilerOptions: i } = e, m = c((E) => path.isAbsolute(E) ? E : et(n, E), "resolvePattern"), f = s ? new Set(s.map(m)) : void 0, y = Tn(i), p = r ? "" : "i", v = (a || Sn(i)).map((E) => {
		const d = m(E), g = tt(d).replaceAll(String.raw`\*\*/`, "(.+/)?").replaceAll(String.raw`\*`, `${fe$1}*`).replaceAll(String.raw`\?`, fe$1);
		return new RegExp(`^${g}($|/)`, p);
	}), b = s || o ? o : [nt$1];
	return {
		filesSet: f,
		extensions: y,
		excludePatterns: v,
		includePatterns: b ? b.map((E) => {
			let d = m(E);
			An.test(d) && (d = et(d, nt$1));
			const g = tt(d).replaceAll(String.raw`/\*\*`, `(/${Te$1}${Se$1}${fe$1}*)*?`).replaceAll(/(\/)?\\\*/g, (T, l) => {
				const C = String.raw`(${Se$1}|(\.(?!min\.js$))?)*`;
				return l ? `/${Te$1}${Se$1}${C}` : C;
			}).replaceAll(/(\/)?\\\?/g, (T, l) => {
				const C = fe$1;
				return l ? `/${Te$1}${C}` : C;
			});
			return new RegExp(`^${g}$`, p);
		}) : void 0
	};
}, "compilePatterns"), st$1 = /* @__PURE__ */ new WeakMap(), Oe$1 = c((e, t) => {
	if (!path.isAbsolute(t)) return !1;
	rt && (t = A(t));
	let r = st$1.get(e);
	r || (r = Pn(e, jn()), st$1.set(e, r));
	const { filesSet: n, extensions: s, excludePatterns: o, includePatterns: a } = r;
	return n?.has(t) ? !0 : !s.some((i) => t.endsWith(i)) || o.some((i) => i.test(t)) ? !1 : !!(a && a.some((i) => i.test(t)));
}, "isFileIncluded"), ot$1 = c((e, t, r, n) => {
	const s = path.resolve(e);
	let o = A(e);
	for (;;) {
		const a = H(o, t, r);
		if (!a) return;
		const i = path.resolve(a), m = Ee$1(i, {
			cache: r,
			typescriptVersion: n
		});
		if (Oe$1(m, s)) return m;
		const f = path.dirname(a), y = path.dirname(f);
		if (y === f) return;
		o = y;
	}
}, "findConfigApplicable"), $n = c((e = process.cwd(), t = {}) => {
	const { configName: r = "tsconfig.json", cache: n = /* @__PURE__ */ new Map(), includes: s = !1 } = t;
	if (!s) {
		const o = path.resolve(e);
		return path.basename(o) === r && _(n, o)?.isFile() ? A(o) : H(A(e), r, n);
	}
	return ot$1(e, r, n, !1)?.path;
}, "findTsconfig"), _n = c((e = process.cwd(), t = {}) => {
	const { configName: r = "tsconfig.json", cache: n = /* @__PURE__ */ new Map(), includes: s = !1, typescriptVersion: o = "auto" } = t;
	if (!s) {
		const a = $n(e, {
			configName: r,
			cache: n
		});
		return a ? Ee$1(a, {
			cache: n,
			typescriptVersion: o
		}) : void 0;
	}
	return ot$1(e, r, n, o);
}, "getTsconfig"), Dn = /\*/g, at$1 = c((e, t) => {
	const r = e.match(Dn);
	if (r && r.length > 1) throw new Error(t);
}, "assertStarCount"), Rn = c((e) => {
	if (e.includes("*")) {
		const [t, r] = e.split("*");
		return {
			prefix: t,
			suffix: r
		};
	}
	return e;
}, "parsePattern"), Ln = c(({ prefix: e, suffix: t }, r) => r.startsWith(e) && r.endsWith(t), "isPatternMatch"), Un = c((e, t, r) => Object.entries(e).map(([n, s]) => (at$1(n, `Pattern '${n}' can have at most one '*' character.`), {
	pattern: Rn(n),
	substitutions: s.map((o) => {
		if (at$1(o, `Substitution '${o}' in pattern '${n}' can have at most one '*' character.`), !t && !xe.test(o) && !path.isAbsolute(o)) throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");
		return path.resolve(r, o);
	})
})), "parsePaths"), Fn = c((e) => {
	const { compilerOptions: t } = e.config;
	if (!t) return null;
	const { baseUrl: r, paths: n } = t;
	if (!r && !n) return null;
	const s = we$1 in t && t[we$1], o = path.resolve(path.dirname(e.path), r || s || "."), a = n ? Un(n, r, o) : [], i = /* @__PURE__ */ new Map(), m = [];
	for (const f of a) typeof f.pattern == "string" ? i.set(f.pattern, f.substitutions) : m.push(f);
	return {
		exactEntries: i,
		patternEntries: m,
		resolvedBaseUrl: o,
		baseUrl: r
	};
}, "compilePaths"), it$1 = /* @__PURE__ */ new WeakMap(), ct$1 = c((e, t) => {
	let r = it$1.get(e);
	if (r === void 0 && (r = Fn(e), it$1.set(e, r)), !r) return [];
	if (xe.test(t)) return [];
	const { exactEntries: n, patternEntries: s, resolvedBaseUrl: o, baseUrl: a } = r, i = n.get(t);
	if (i) return i.map(A);
	let m, f = -1;
	for (const p of s) Ln(p.pattern, t) && p.pattern.prefix.length > f && (f = p.pattern.prefix.length, m = p);
	if (!m) return a ? [A(path.join(o, t))] : [];
	const y = t.slice(m.pattern.prefix.length, t.length - m.pattern.suffix.length);
	return m.substitutions.map((p) => A(p.replace("*", y)));
}, "resolvePathAlias"), lt$1 = u((e) => {
	if (e) return Ee$1(e);
	try {
		return _n() ?? void 0;
	} catch {}
}, "loadTsconfig"), Ae$1 = u((e) => Array.from(e).length > 0 ? `?${e.toString()}` : "", "urlSearchParamsStringify"), Pe$1 = u((e) => e[0] === "." && (e[1] === "/" || e[1] === "." || e[2] === "/"), "isRelativePath"), V$1 = u((e) => Pe$1(e) || path.isAbsolute(e), "isFilePath"), X$1 = "file://", In = [
	".ts",
	".tsx",
	".jsx",
	".mts",
	".cts"
], ut$1 = /\.([cm]?ts|[tj]sx)(?:$|[?#])/, Nn = /\.(?:ts|tsx|jsx)(?:$|[?#])/, Bn = /[/\\].+\.(?:cts|cjs)(?:$|[?#])/, Wn = /\.json(?:$|[?#])/, pe$1 = /\/(?:$|[?#])/, Mn = /^(?:@[^/]+\/)?[^/\\]+$/, ft = `${path.sep}node_modules${path.sep}`, $e$1 = u((e) => e?.split(path.sep).includes("node_modules") ?? !1, "isDependencyPath"), Y$1 = Symbol.for("tsx:global-cjs-loader-count"), Z$1 = globalThis, Jn = u(() => (Z$1[Y$1] ?? 0) > 0, "isGlobalCjsLoaderActive"), Vn = u(() => (Z$1[Y$1] = (Z$1[Y$1] ?? 0) + 1, () => {
	Z$1[Y$1] = Math.max((Z$1[Y$1] ?? 1) - 1, 0);
}), "activateGlobalCjsLoader"), Qn = `
//# sourceMappingURL=data:application/json;base64,`, pt = u(() => process.sourceMapsEnabled ?? !0, "shouldApplySourceMap"), _e$1 = u(({ code: e, map: t }) => e + Qn + Buffer.from(JSON.stringify(t), "utf8").toString("base64"), "inlineSourceMap");
let de$1 = [];
const Gn = u(() => new Promise((e) => {
	const t = m(process.ppid), r = Ft.createConnection(t, () => {
		e(u((s) => {
			const o = Buffer.from(JSON.stringify(s)), a = Buffer.alloc(4);
			a.writeInt32BE(o.length, 0), r.write(Buffer.concat([a, o]));
		}, "sendToParent"));
	});
	r.on("error", () => {
		e();
	}), r.unref();
}), "connectToServer");
const q = { send: u((e) => {
	de$1.push(e);
}, "send") };
Gn().then((e) => {
	if (e) for (const t of de$1) e(t);
	de$1 = [], q.send = e;
}, () => {
	de$1 = [], q.send = void 0;
});
const me = Number(process.env.TSX_DEBUG);
me && (f.enabled = !0, f.supportLevel = 3);
const dt$1 = u((e) => (t, ...r) => {
	if (!me || t > me) return;
	const n = `${T$1(` tsx P${process.pid} `)} ${e}`, s = r.map((o) => typeof o == "string" ? o : inspect(o, { colors: !0 })).join(" ");
	writeSync(1, `${n} ${s}
`);
}, "createLog");
const Q = dt$1(y(C$1(" CJS ")));
const zn = dt$1(h(" ESM "));
const U$1 = /* @__PURE__ */ new Map();
const Hn = u(async (e) => {
	if (U$1.has(e)) return U$1.get(e);
	if (!await fs.promises.access(e).then(() => !0, () => !1)) {
		U$1.set(e, void 0);
		return;
	}
	const r = await fs.promises.readFile(e, "utf8");
	try {
		const n = JSON.parse(r);
		return U$1.set(e, n), n;
	} catch {
		throw new Error(`Error parsing: ${e}`);
	}
}, "readPackageJson");
const Xn = u((e) => {
	if (U$1.has(e)) return U$1.get(e);
	if (!fs.existsSync(e)) {
		U$1.set(e, void 0);
		return;
	}
	const t = fs.readFileSync(e, "utf8");
	try {
		const r = JSON.parse(t);
		return U$1.set(e, r), r;
	} catch {
		throw new Error(`Error parsing: ${e}`);
	}
}, "readPackageJsonSync");
const Yn = u(async (e) => {
	let t = new URL("package.json", e);
	for (; !t.pathname.endsWith("/node_modules/package.json");) {
		const r = fileURLToPath(t), n = await Hn(r);
		if (n) return n;
		const s = t;
		if (t = new URL("../package.json", t), t.pathname === s.pathname) break;
	}
}, "findPackageJson");
const mt$1 = u((e) => {
	let t = new URL("package.json", e);
	for (; !t.pathname.endsWith("/node_modules/package.json");) {
		const r = fileURLToPath(t), n = Xn(r);
		if (n) return n;
		const s = t;
		if (t = new URL("../package.json", t), t.pathname === s.pathname) break;
	}
}, "findPackageJsonSync");
const Zn = u(async (e) => (await Yn(e))?.type ?? "commonjs", "getPackageType");
const qn = u((e) => mt$1(e)?.type ?? "commonjs", "getPackageTypeSync");
const er = u((e) => mt$1(e)?.type, "getNearestPackageTypeSync");
const tr = [
	".cts",
	".mts",
	".ts",
	".tsx",
	".jsx"
];
const nr = [
	".js",
	".cjs",
	".mjs"
];
const ht = [
	".ts",
	".tsx",
	".jsx"
];
const gt = "module.exports";
const rr = "Top-level await is currently not supported with the \"cjs\" output format";
const yt = u((e) => {
	const t = path.extname(e);
	return t === ".mjs" || t === ".mts" || (t === ".js" || t === ".ts") && er(pathToFileURL(e).toString()) !== "commonjs";
}, "isRequireEsmCandidate");
const De = u((e, t, r, n) => {
	const s = Object.getOwnPropertyDescriptor(e, t);
	s?.set ? e[t] = r : (!s || s.configurable) && Object.defineProperty(e, t, {
		value: r,
		enumerable: s?.enumerable || n?.enumerable,
		writable: n?.writable ?? (s ? s.writable : !0),
		configurable: n?.configurable ?? (s ? s.configurable : !0)
	});
}, "safeSet");
const sr = u((e, t, r, n) => {
	const s = t[".js"], o = process.features.require_module ?? p$1(h$1), a = u((i, m) => {
		if (e.enabled === !1) return s(i, m);
		const [f, y] = m.split("?");
		if ((new URLSearchParams(y).get("namespace") ?? void 0) !== n) return s(i, m);
		Q(2, "load", { filePath: m }), i.id?.startsWith("data:text/javascript,") && (i.path = path.dirname(f)), q?.send && q.send({
			type: "dependency",
			path: f
		});
		const v = tr.some((l) => f.endsWith(l)), b = nr.some((l) => f.endsWith(l));
		if (!v && !b) return s(i, f);
		let k = fs.readFileSync(f, "utf8");
		const E = b && !f.endsWith(".cjs") && !f.endsWith(".cts") && ar$1(k), d = (v || E) && r && Oe$1(r, f) ? r.config : void 0;
		if (f.endsWith(".cjs")) {
			const l = oe$1(m, k);
			l && (k = pt() ? _e$1(l) : l.code);
		} else if (v || E) try {
			const l = Mn$1(k, m, { tsconfigRaw: d });
			k = pt() ? _e$1(l) : l.code;
		} catch (l) {
			throw yt(f) && l instanceof Error && l.name === "TransformError" && l.message.includes(rr) && Object.assign(l, { code: o ? "ERR_REQUIRE_ASYNC_MODULE" : "ERR_REQUIRE_ESM" }), l;
		}
		Q(1, "loaded", { filePath: f }), i._compile(k, f), y && P._cache[f] === i && (P._cache[m] = i, delete P._cache[f]);
		const { exports: g } = i;
		(o && g && (typeof g == "object" || typeof g == "function") ? Object.getOwnPropertyDescriptor(g, gt) : void 0)?.get && yt(f) && (i.exports = g[gt]);
	}, "transformer");
	De(t, ".js", a);
	for (const i of ht) De(t, i, a, {
		enumerable: !n,
		writable: !0,
		configurable: !0
	});
	return De(t, ".mjs", a, {
		writable: !0,
		configurable: !0
	}), () => {
		t[".js"] === a && (t[".js"] = s);
		for (const i of [...ht, ".mjs"]) t[i] === a && delete t[i];
	};
}, "createExtensions");
const or = u((e) => (t) => {
	if ((t === "." || t === ".." || t.endsWith("/..")) && (t += "/"), pe$1.test(t)) {
		let r = path.join(t, "index");
		t.startsWith("./") && (r = `./${r}`);
		try {
			return e(r);
		} catch {}
	}
	try {
		return e(t);
	} catch (r) {
		const n = r;
		if (n.code === "MODULE_NOT_FOUND") try {
			return e(`${t}${path.sep}index`);
		} catch {}
		throw n;
	}
}, "createImplicitResolver");
const kt = u((e) => {
	if (!e.startsWith("data:text/javascript,")) return;
	const t = e.indexOf("?");
	if (t === -1) return;
	const n = new URLSearchParams(e.slice(t + 1)).get("filePath");
	if (n) return n;
}, "getOriginalFilePath");
const bt$1 = u((e) => {
	const t = kt(e);
	return t && (P._cache[t] = P._cache[e], delete P._cache[e], e = t), e;
}, "interopCjsExports");
const wt = [".js", ".json"];
const xt$1 = [
	".ts",
	".tsx",
	".jsx"
];
const ar = /* @__PURE__ */ new Set([".json", ".node"]);
const ir = [...xt$1, ...wt];
const cr = [...wt, ...xt$1];
const ee = Object.create(null);
ee[".js"] = [
	".ts",
	".tsx",
	".js",
	".jsx"
], ee[".jsx"] = [
	".tsx",
	".ts",
	".jsx",
	".js"
], ee[".cjs"] = [".cts"], ee[".mjs"] = [".mts"];
const lr = /* @__PURE__ */ new Set([
	".ts",
	".tsx",
	".mts",
	".cts"
]);
const vt = u((e, t = !1) => {
	const r = e.indexOf("?"), n = r === -1 ? e : e.slice(0, r), s = r === -1 ? "" : e.slice(r);
	if (!t && !V$1(n) && !n.startsWith("file://")) return;
	const o = path.extname(n);
	if (lr.has(o)) return;
	const a = ee[o];
	if (a) {
		const m = n.slice(0, -o.length);
		return a.map((f) => m + f + s);
	}
	return ar.has(o) ? void 0 : (!(e.startsWith("file://") || V$1(n)) || n.includes(ft) || n.includes("/node_modules/") ? cr : ir).map((m) => n + m + s);
}, "getExtensionResolution");
const ur = u((e, t) => {
	let r;
	return path.isAbsolute(e) ? r = e : Pe$1(e) && t && (r = path.resolve(t, e)), r !== void 0 && !existsSync(r);
}, "candidateDoesntExist");
const he$1 = u((e, t, r, n) => {
	if (Q(3, "resolveTsFilename", {
		request: t,
		isDirectory: pe$1.test(t)
	}), pe$1.test(t)) return;
	const s = vt(t, n);
	if (s) {
		for (const o of s) if (!ur(o, r)) try {
			return e(o);
		} catch (a) {
			const { code: i } = a;
			if (i !== "MODULE_NOT_FOUND" && i !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw a;
		}
	}
}, "resolveTsFilename");
const fr = u((e, t, r, n) => (s) => {
	if (Q(3, "resolveTsFilename", {
		request: s,
		resolveTsExtensions: r,
		isFilePath: V$1(s)
	}), r && V$1(s)) {
		const o = he$1(e, s, t, n);
		if (o) return o;
	}
	try {
		return e(s);
	} catch (o) {
		const a = o;
		if (r && a.code === "MODULE_NOT_FOUND") {
			if (a.path) {
				const m = a.message.match(/^Cannot find module '([^']+)'$/);
				if (m) {
					const y = m[1], p = he$1(e, y, t, n);
					if (p) return p;
				}
				const f = a.message.match(/^Cannot find module '([^']+)'. Please verify that the package.json has a valid "main" entry$/);
				if (f) {
					const y = f[1], p = he$1(e, y, t, n);
					if (p) return p;
				}
			}
			const i = he$1(e, s, t, n);
			if (i) return i;
		}
		throw a;
	}
}, "createTsExtensionResolver");
const Et$1 = "at cjsPreparseModuleExports (node:internal";
const pr = u((e) => {
	const t = e.stack.split(`
`).slice(1);
	return t[1].includes(Et$1) || t[2].includes(Et$1);
}, "isFromCjsLexer");
const dr = u((e, t) => {
	const r = e.split("?"), n = new URLSearchParams(r[1]);
	if (t?.filename) {
		const s = kt(t.filename);
		let o;
		if (s) {
			const m = s.split("?"), f = m[0];
			o = m[1];
			const p = new URLSearchParams(o).get("namespace");
			t.filename = f, t.path = path.dirname(f), t.paths = P._nodeModulePaths(t.path), p || (P._cache[f] = t);
		}
		o || (o = t.filename.split("?")[1]);
		const i = new URLSearchParams(o).get("namespace");
		i && n.append("namespace", i);
	}
	return [
		r[0],
		n,
		(s, o) => (path.isAbsolute(s) && !s.endsWith(".json") && !s.endsWith(".node") && !(o === 0 && pr(/* @__PURE__ */ new Error())) && (s += Ae$1(n)), s)
	];
}, "preserveQuery");
const mr = u((e, t, r, n) => {
	if (e.startsWith("file://") && (e = fileURLToPath(e)), n && !V$1(e) && !$e$1(t?.filename)) {
		const s = ct$1(n, e);
		for (const o of s) try {
			return r(o);
		} catch {}
	}
	return r(e);
}, "resolveTsPaths");
const hr = u((e, t, r, n) => (s, o, ...a) => {
	if (e.enabled === !1) return t(s, o, ...a);
	s = bt$1(s);
	const [i, m, f] = dr(s, o);
	if ((m.get("namespace") ?? void 0) !== n) return t(s, o, ...a);
	Q(2, "resolve", {
		request: s,
		parent: o?.filename ?? o,
		restOfArgs: a
	});
	let y = u((E) => t(E, o, ...a), "nextResolveSimple");
	const p = $e$1(o?.filename), v = !!(n || o?.filename && ut$1.test(o.filename)), b = !!(v || r?.config.compilerOptions?.allowJs && !p);
	y = fr(y, o?.path ?? void 0, b, v), y = or(y);
	const k = f(mr(i, o, y, r), a.length);
	return Q(1, "resolved", {
		request: s,
		parent: o?.filename ?? o,
		resolved: k
	}), k;
}, "createResolveFilename");
const Ct$1 = u((e, t) => {
	if (!t) throw new Error("The current file path (__filename or import.meta.url) must be provided in the second argument of tsx.require()");
	return e.startsWith(".") ? ((typeof t == "string" && t.startsWith("file://") || t instanceof URL) && (t = fileURLToPath(t)), path.resolve(path.dirname(t), e)) : e;
}, "resolveContext");
const Re$1 = u((e) => {
	const { sourceMapsEnabled: t } = process, r = { enabled: !0 }, n = lt$1(process.env.TSX_TSCONFIG_PATH);
	process.setSourceMapsEnabled(!0);
	const s = P._resolveFilename, o = hr(r, s, n, e?.namespace);
	P._resolveFilename = o;
	const a = sr(r, P._extensions, n, e?.namespace), i = e?.namespace ? void 0 : Vn(), m = u(() => {
		t === !1 && process.setSourceMapsEnabled(!1), r.enabled = !1, P._resolveFilename === o && (P._resolveFilename = s), a(), i?.();
	}, "unregister");
	if (e?.namespace) {
		m.require = u((p, v) => {
			const [k, E] = Ct$1(p, v).split("?"), d = new URLSearchParams(E);
			return e.namespace && !k.startsWith("node:") && d.set("namespace", e.namespace), K$1(k + Ae$1(d));
		}, "scopedRequire");
		m.resolve = u((p, v, b) => {
			const [E, d] = Ct$1(p, v).split("?"), g = new URLSearchParams(d);
			return e.namespace && !E.startsWith("node:") && g.set("namespace", e.namespace), o(E + Ae$1(g), module, !1, b);
		}, "scopedResolve"), m.unregister = m;
	}
	return m;
}, "register");
let G$1;
const te = u((e, t) => (G$1 || (G$1 = Re$1({ namespace: Date.now().toString() })), G$1.require(e, t)), "tsxRequire");
const jt$1 = u((e, t, r) => (G$1 || (G$1 = Re$1({ namespace: Date.now().toString() })), G$1.resolve(e, t, r)), "resolve");
jt$1.paths = K$1.resolve.paths, te.resolve = jt$1, te.main = K$1.main, te.extensions = K$1.extensions, te.cache = K$1.cache;

// node_modules/.pnpm/tsx@4.23.15/node_modules/tsx/dist/register-nyXW-TH3.mjs
var Kt = Object.defineProperty;
var i$1 = (t, r) => Kt(t, "name", {
	value: r,
	configurable: !0
});
const de = i$1(() => ({
	active: !0,
	parsedTsconfig: void 0
}), "createDefaultData");
const Tt = i$1((t) => {
	const r = {
		active: !0,
		namespace: t?.namespace,
		onImport: t?.onImport,
		parsedTsconfig: void 0,
		port: t?.port,
		tsconfig: t?.tsconfig
	};
	return t?.tsconfig !== !1 && (r.parsedTsconfig = lt$1(t?.tsconfig ?? process.env.TSX_TSCONFIG_PATH)), r;
}, "createData");
const le = i$1((t) => async (r) => {
	if (!r) throw new Error(`tsx must be loaded with --import instead of --loader
The --loader flag was deprecated in Node v20.6.0 and v18.19.0`);
	Object.assign(t, Tt(r)), r.port && r.port.on("message", (e) => {
		e === "deactivate" && (t.active = !1, r.port.postMessage({ type: "deactivated" }));
	});
}, "createInitialize");
const ue = i$1((t) => () => (t.parsedTsconfig = lt$1(process.env.TSX_TSCONFIG_PATH), "process.setSourceMapsEnabled(true);"), "createGlobalPreload");
const fe = i$1((t) => {
	const { pathname: r } = new URL(t), e = path.extname(r);
	if (e === ".mts" || e === ".mjs") return "module";
	if (e === ".cts" || e === ".cjs") return "commonjs";
	if (e === ".js" || In.includes(e)) return Zn(t);
}, "getFormatFromFileUrl");
const pe = i$1((t) => {
	const { pathname: r } = new URL(t), e = path.extname(r);
	if (e === ".mts" || e === ".mjs") return "module";
	if (e === ".cts" || e === ".cjs") return "commonjs";
	if (e === ".js" || In.includes(e)) return qn(t);
}, "getFormatFromFileUrlSync");
const st = "tsx-namespace";
const I = `${st}=`;
const O = "tsx-commonjs-export-preparse";
const he = `${O}=1`;
const E = "tsx-commonjs-virtual-query";
const $ = /* @__PURE__ */ new Map();
const ge = /^data:/i;
const T = i$1((t) => ge.test(t), "isDataUrl");
const nt = i$1((t, r) => t.slice(1).split("&").filter((e) => e && r.every((s) => !e.startsWith(s))).join("&"), "getQueryWithoutParameters");
const G = i$1((t, r) => {
	const e = nt(t, r);
	return e ? `?${e}` : "";
}, "getSearchWithoutParameters");
const ye = i$1((t) => t.replaceAll(/\/\*[\s\S]*?\*\/|\/\/[^\n\r]*/g, ""), "stripComments");
const Pe = i$1((t) => {
	const r = ye(t);
	if (/^\s*export\s*\*/.test(r)) return "named";
	if (/^\s*import\s*\*\s*as\s+[\w$]+/.test(r)) return "namespace";
	const e = r.match(/\{([^}]*)\}/)?.[1];
	if (e) return e.split(",").some((s) => {
		const n = s.trim().split(/\s+as\s+/)[0];
		return !!(n && n !== "default");
	}) ? "named" : void 0;
}, "getCommonJsImportBinding");
const Se = i$1((t, r, e) => {
	const s = $.get(t);
	if (!s) return !1;
	try {
		const [n] = se(s);
		return n.some((o) => {
			if (o.d !== -1 || o.n !== r) return !1;
			const c = Pe(s.slice(o.ss, o.s));
			return c === "named" || e && c === "namespace";
		});
	} catch {
		return !1;
	}
}, "parentImportsCommonJsExports");
const R = i$1((t) => {
	const r = t.indexOf("?"), e = t.indexOf("#");
	if (T(t)) {
		if (e === -1) return;
		const s = t.slice(e + 1), n = s.lastIndexOf("&"), o = s.slice(n + 1);
		return o.startsWith(I) ? o.slice(I.length) : void 0;
	}
	if (!(r === -1 || e !== -1 && e < r)) return new URLSearchParams(t.slice(r, e === -1 ? void 0 : e)).get(st) ?? void 0;
}, "getNamespace");
const Lt = p$1(l$1) ? "importAttributes" : "importAssertions";
const jt = i$1((t) => t === "commonjs" || t === "commonjs-typescript", "isCommonJsFormat");
const Et = i$1((t) => t === "module-typescript" || t === "typescript", "isModuleTypeScriptFormat");
const Ue = p$1(R$2);
const ve = [`${E}=`];
const x = [`${O}=`, `${E}=`];
const L = i$1((t, r) => r.parsedTsconfig && Oe$1(r.parsedTsconfig, t) ? r.parsedTsconfig.config : void 0, "getTsconfigRaw");
const ot = i$1((t, r) => {
	const e = r ? `${t}?namespace=${encodeURIComponent(r)}` : pathToFileURL(t).toString();
	return `require = require("node:module").createRequire(${JSON.stringify(e)});`;
}, "getCjsRequireBanner");
const Re = i$1((t) => {
	if (!t.searchParams.has(E)) return;
	const { pathname: r } = t, e = r.toLowerCase().lastIndexOf("%3f");
	if (e === -1) return;
	const s = new URL(t);
	return s.pathname = r.slice(0, e), s.search = "", fileURLToPath(s);
}, "getFilePathFromVirtualQuery");
const at = i$1((t) => {
	const r = t.startsWith("file://") ? new URL(t) : void 0, e = r ? fileURLToPath(r) : t, s = r && Re(r), n = s || e;
	return {
		fileUrl: r,
		filePath: n,
		loadUrl: r && s ? pathToFileURL(n).toString() + G(r.search, ve) : t
	};
}, "getFileLoadContext");
const Ft$1 = i$1((t, r) => {
	if (!r?.search) return t;
	const e = G(r.search, x);
	return e ? pathToFileURL(t).toString() + e : t;
}, "getTransformPath");
const Wt = i$1((t, r, e) => {
	const s = [...r ? nt(r.search, [I, ...x]).split("&").filter(Boolean) : [], ...e ? [`namespace=${encodeURIComponent(e)}`] : []].join("&");
	return s ? `${t}?${s}` : t;
}, "getFilePathWithQuery");
const we = new TextDecoder();
const Ot = i$1((t) => typeof t == "string" ? t : we.decode(t), "decodeSource");
const Ie = i$1((t, r) => {
	const e = new URL(r), s = r.startsWith("file://") ? at(r).filePath : void 0;
	if (T(r)) {
		if (t.namespace) {
			const o = `${I}${t.namespace}`;
			e.hash === `#${o}` ? e.hash = "" : e.hash.endsWith(`&${o}`) && (e.hash = e.hash.slice(0, -o.length - 1));
		}
	} else e.searchParams.delete("tsx-namespace"), e.searchParams.delete(O), e.searchParams.delete(E);
	s && (e.pathname = new URL(pathToFileURL(s)).pathname);
	const n = e.toString();
	return t.port && t.port.postMessage({
		type: "load",
		url: n
	}), t.onImport?.(n), n;
}, "notifyLoad");
const $t$1 = i$1((t, r) => {
	if (!t.active) return !1;
	const e = R(r);
	if (t.namespace !== e) return !1;
	const s = Ie(t, r);
	return q.send && q.send({
		type: "dependency",
		path: s
	}), !0;
}, "prepareLoad");
const Ct = i$1((t, r) => {
	if (!Wn.test(t)) return r;
	const e = r[Lt];
	return e?.type ? r : {
		...r,
		[Lt]: {
			...e,
			type: "json"
		}
	};
}, "prepareJsonAttributes");
const it = i$1(({ conditions: t }) => t?.includes("require") === !0 && !t.includes("import"), "isCommonJsRequireContext$1");
const Te = i$1((t) => {
	const r = i$1(async (e, s, n) => {
		if (!$t$1(t, e)) return n(e, s);
		const o = R(e), { fileUrl: c, filePath: a, loadUrl: l } = at(e), d = await n(l, Ct(l, s));
		zn(3, "loaded by next loader", {
			url: e,
			loadUrl: l,
			loaded: d
		});
		const h = c?.searchParams.has(O) === !0, m = d.format, g = c ? new URL(pathToFileURL(a)) : void 0;
		if (g && c && (g.search = G(c.search, x)), jt(m) && c && d.responseURL?.startsWith("file:") && !a.endsWith(".cjs")) {
			const P = await readFile(pathToFileURL(a), "utf8"), M = ar$1(P);
			if (m === "commonjs-typescript" || !a.endsWith(".js") || M) {
				if (!Ue) {
					if (h && M && Nn.test(a)) {
						const _ = await jn$1(P, a, {
							define: { "import.meta.url": JSON.stringify(g.toString()) },
							tsconfigRaw: L(a, t)
						});
						return $.set(e, _.code), {
							format: "module",
							source: _e$1(_)
						};
					}
					return d;
				}
				if (!o && !h && !a.endsWith(".cts")) return d;
				const ft = !!(o || h || G(c.search, x)), pt = Mn$1(P, Ft$1(a, c), {
					cjsBanner: ft ? ot(a, o) : void 0,
					tsconfigRaw: L(a, t)
				});
				if (d.format = "commonjs", d.source = _e$1(pt), ft) {
					const _ = Wt(a, c, o);
					d.responseURL = `data:text/javascript,${encodeURIComponent(pt.code)}?filePath=${encodeURIComponent(_)}`;
				}
				return zn(3, "returning CJS export annotation", d), d;
			}
		}
		if (!d.source) return d;
		const p = Ot(d.source), N = m === "json" && !it(s);
		if (m === "commonjs-typescript") {
			const P = Mn$1(p, a, { tsconfigRaw: L(a, t) });
			return {
				...d,
				format: "commonjs",
				source: _e$1(P)
			};
		}
		if (N || Et(m) || ut$1.test(e)) {
			const P = await jn$1(p, a, { tsconfigRaw: L(a, t) });
			return $.set(e, P.code), {
				format: "module",
				source: _e$1(P)
			};
		}
		if (d.format === "module") {
			const P = oe$1(a, p);
			P ? (d.source = _e$1(P), $.set(e, P.code)) : $.set(e, p);
		}
		return d;
	}, "load");
	return me ? async (e, s, n) => {
		zn(2, "load", {
			url: e,
			context: s
		});
		const o = await r(e, s, n);
		return zn(1, "loaded", {
			url: e,
			result: o
		}), o;
	} : r;
}, "createLoad");
const Le = i$1((t) => {
	const r = i$1((e, s, n) => {
		if (it(s) && Jn() || !$t$1(t, e)) return n(e, s);
		const o = R(e), { fileUrl: c, filePath: a, loadUrl: l } = at(e), d = n(l, Ct(l, s));
		zn(3, "loaded by next loader", {
			url: e,
			loadUrl: l,
			loaded: d
		});
		const h = d.format;
		if (jt(h) && p$1(R$2) && d.responseURL?.startsWith("file:") && !a.endsWith(".cjs")) {
			const p = readFileSync(pathToFileURL(a), "utf8");
			if (h === "commonjs-typescript" || !a.endsWith(".js") || ar$1(p)) {
				const N = !o && Jn(), P = Mn$1(p, Ft$1(a, c), {
					cjsBanner: o ? ot(a, o) : void 0,
					tsconfigRaw: L(a, t)
				}), M = Wt(a, c, o);
				return d.format = "commonjs", d.shouldBeReloadedByCJSLoader = N, d.source = _e$1(P), N || (d.responseURL = `data:text/javascript,${encodeURIComponent(P.code)}?filePath=${encodeURIComponent(M)}`), zn(3, "returning CJS export annotation", d), d;
			}
		}
		if (!d.source) return d;
		const m = Ot(d.source), g = h === "json" && !it(s);
		if (h === "commonjs-typescript") {
			const p = Mn$1(m, a, {
				cjsBanner: o ? ot(a, o) : void 0,
				tsconfigRaw: L(a, t)
			});
			return {
				...d,
				format: "commonjs",
				shouldBeReloadedByCJSLoader: !1,
				source: _e$1(p)
			};
		}
		if (g || Et(h) || ut$1.test(e)) {
			const p = Tn$1(m, a, { tsconfigRaw: L(a, t) });
			return {
				format: "module",
				source: _e$1(p)
			};
		}
		if (d.format === "module") {
			const p = oe$1(a, m);
			p && (d.source = _e$1(p));
		}
		return d;
	}, "load");
	return me ? (e, s, n) => {
		zn(2, "loadSync", {
			url: e,
			context: s
		});
		const o = r(e, s, n);
		return zn(1, "loadedSync", {
			url: e,
			result: o
		}), o;
	} : r;
}, "createLoadSync");
const je = i$1((t) => {
	if (V$1(t) || t.startsWith("#") || t.includes(":")) return !1;
	const r = t.split("/"), e = r[0]?.startsWith("@") ? 2 : 1;
	return r.length > e && r.slice(0, e).every(Boolean);
}, "isBarePackageSubpath");
const Ee = i$1((t) => {
	const r = t.lastIndexOf(ft);
	if (r === -1) return;
	const s = t.slice(r + ft.length).split(path.sep), n = s[0]?.startsWith("@") ? 2 : 1;
	if (!(s.length <= n || !s[n - 1])) return path.join(t.slice(0, r), "node_modules", ...s.slice(0, n));
}, "getPackageDirectory");
const bt = i$1((t, r) => {
	if (!je(t) || !r.startsWith("file://")) return;
	const e = fileURLToPath(r), s = Ee(e);
	if (!s) return;
	if (Xe$1(path.join(s, "package.json"))?.exports != null) return { kind: "root-exports" };
	const c = Xe$1(path.join(e, "package.json"));
	return typeof c?.main != "string" || !c.main ? { kind: "legacy-directory" } : {
		kind: "legacy-directory",
		mainUrl: pathToFileURL(path.resolve(e, c.main)).toString()
	};
}, "getPackageSubpathDirectoryInfo");
const Fe = p$1(R$2);
const Jt = /^(?:[a-z][\d+.a-z-]*:\/\/|data:|file:|node:)/i;
const Nt = i$1((t) => !V$1(t) && !Jt.test(t), "isTsconfigPathAliasSpecifier");
const z = i$1((t) => {
	if (t.url) return t.url;
	const r = t.message.match(/^Cannot find module '([^']+)'/);
	if (r) {
		const [, s] = r;
		return s;
	}
	const e = t.message.match(/^Cannot find package '([^']+)'/);
	if (e) {
		const [, s] = e;
		if (!path.isAbsolute(s)) return;
		const n = pathToFileURL(s);
		if (n.pathname.endsWith("/") && (n.pathname += "package.json"), n.pathname.endsWith("/package.json")) {
			const o = Xe$1(n);
			if (o?.main) return new URL(o.main, n).toString();
		} else return n.toString();
	}
}, "getMissingPathFromNotFound");
const C = i$1((t) => t === "ERR_MODULE_NOT_FOUND" || t === "MODULE_NOT_FOUND", "isModuleNotFound");
const X = i$1((t) => t instanceof Error && (C(t.code) || t.code === "ERR_UNSUPPORTED_DIR_IMPORT"), "isDirectoryEntryMiss");
const V = i$1((t) => t.conditions.includes("require") && !t.conditions.includes("import"), "isCommonJsRequireContext");
const ct = i$1((t) => {
	const r = t.indexOf("?"), e = t.indexOf("#");
	return r === -1 ? e : e === -1 ? r : Math.min(r, e);
}, "getUrlMetadataIndex");
const Mt = i$1((t, r) => r || !V$1(t) && !Jt.test(t) ? t.indexOf("?") : ct(t), "getSpecifierMetadataIndex");
const _t$1 = i$1((t) => {
	if (t?.startsWith("file://")) return fileURLToPath(new URL(t));
}, "getParentFilePath");
const We = i$1((t) => {
	if (!t) return !1;
	const r = _t$1(t);
	if (r) return ut$1.test(r);
	const e = ct(t);
	return ut$1.test(e === -1 ? t : t.slice(0, e));
}, "isTypeScriptParent");
const b = i$1((t) => {
	const r = _t$1(t);
	return r !== void 0 && $e$1(r);
}, "isParentDependency");
const Bt = i$1((t) => path.extname(new URL(t).pathname) === ".js" && $e$1(fileURLToPath(t)), "isImplicitJavaScriptDependency");
const At = i$1((t, r) => We(t) || r && !b(t), "resolvesTsExtensions");
const Oe = i$1((t, r) => {
	const e = ct(t), s = e === -1 ? t : t.slice(0, e);
	try {
		if (s.startsWith("file://")) return fileURLToPath(s);
		if (path.isAbsolute(s)) return s;
		if (Pe$1(s) && r?.startsWith("file://")) return fileURLToPath(new URL(s, r));
	} catch {}
}, "getProbeFilePath");
const qt = i$1((t, r) => {
	const e = Oe(t, r);
	return e !== void 0 && !existsSync(e);
}, "candidateDoesntExist");
const K = i$1(async (t, r, e, s) => {
	const n = vt(t);
	if (zn(3, "resolveExtensions", {
		url: t,
		context: r,
		throwError: s,
		tryPaths: n
	}), !n) return;
	let o;
	for (const c of n) if (!qt(c, r.parentURL)) try {
		return await e(c, r);
	} catch (a) {
		const { code: l } = a;
		if (!C(l) && l !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw a;
		o = a;
	}
	if (s) {
		if (o === void 0) return e(n[0], r);
		throw o;
	}
}, "resolveExtensions");
const J = i$1((t, r, e, s) => {
	const n = vt(t);
	if (zn(3, "resolveExtensionsSync", {
		url: t,
		context: r,
		throwError: s,
		tryPaths: n
	}), !n) return;
	let o;
	for (const c of n) if (!qt(c, r.parentURL)) try {
		return e(c, r);
	} catch (a) {
		const { code: l } = a;
		if (!C(l) && l !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw a;
		o = a;
	}
	if (s) {
		if (o === void 0) return e(n[0], r);
		throw o;
	}
}, "resolveExtensionsSync");
const $e = i$1(async (t, r, e, s) => {
	const n = s.parsedTsconfig?.config.compilerOptions?.allowJs ?? !1, o = At(r.parentURL, n);
	if (zn(3, "resolveBase", {
		specifier: t,
		context: r,
		specifierStartsWithFileUrl: t.startsWith("file://"),
		isRelativePath: Pe$1(t),
		resolveTsExtensions: o,
		allowJs: n
	}), (t.startsWith("file://") || Pe$1(t)) && o) {
		const c = await K(t, r, e, void 0);
		if (zn(3, "resolveBase resolved", {
			specifier: t,
			context: r,
			resolved: c
		}), c) return c;
	}
	try {
		return await e(t, r);
	} catch (c) {
		if (zn(3, "resolveBase error", {
			specifier: t,
			context: r,
			error: c
		}), c instanceof Error) {
			const a = c;
			if (C(a.code)) {
				const l = z(a);
				if (l) {
					const f = await K(l, r, e, void 0);
					if (f) return f;
				}
			}
		}
		throw c;
	}
}, "resolveBase");
const mt = i$1((t, r, e, s) => {
	const n = s.parsedTsconfig?.config.compilerOptions?.allowJs ?? !1, o = At(r.parentURL, n);
	if (zn(3, "resolveBaseSync", {
		specifier: t,
		context: r,
		specifierStartsWithFileUrl: t.startsWith("file://"),
		isRelativePath: Pe$1(t),
		resolveTsExtensions: o,
		allowJs: n
	}), (t.startsWith("file://") || Pe$1(t)) && o) {
		const c = J(t, r, e, void 0);
		if (zn(3, "resolveBaseSync resolved", {
			specifier: t,
			context: r,
			resolved: c
		}), c) return c;
	}
	try {
		return e(t, r);
	} catch (c) {
		if (zn(3, "resolveBaseSync error", {
			specifier: t,
			context: r,
			error: c
		}), c instanceof Error) {
			const a = c;
			if (C(a.code)) {
				const l = z(a);
				if (l) {
					const f = J(l, r, e, void 0);
					if (f) return f;
				}
			}
		}
		throw c;
	}
}, "resolveBaseSync");
const dt = i$1(async (t, r, e, s) => {
	if (zn(3, "resolveDirectory", {
		specifier: t,
		context: r,
		isDirectory: pe$1.test(t)
	}), (t === "." || t === ".." || t.endsWith("/..")) && (t += "/"), pe$1.test(t)) {
		const n = new URL(t, r.parentURL);
		return n.pathname = path.join(n.pathname, "index"), await K(n.toString(), r, e, !0);
	}
	try {
		return await $e(t, r, e, s);
	} catch (n) {
		if (n instanceof Error) {
			zn(3, "resolveDirectory error", {
				specifier: t,
				context: r,
				error: n
			});
			const o = n;
			if (o.code === "ERR_UNSUPPORTED_DIR_IMPORT") {
				const c = z(o);
				if (c) {
					if (t.startsWith("#")) throw n;
					const a = bt(t, c);
					if (a?.kind === "root-exports") throw n;
					if (a?.mainUrl) {
						try {
							return await e(a.mainUrl, r);
						} catch (d) {
							if (!X(d)) throw d;
						}
						try {
							return await dt(a.mainUrl, r, e, s);
						} catch (d) {
							if (!X(d)) throw d;
						}
					}
					const l = `${c}/index`, f = await K(l, r, e);
					if (f) return f;
				}
			}
		}
		throw n;
	}
}, "resolveDirectory");
const lt = i$1((t, r, e, s) => {
	if (zn(3, "resolveDirectorySync", {
		specifier: t,
		context: r,
		isDirectory: pe$1.test(t)
	}), (t === "." || t === ".." || t.endsWith("/..")) && (t += "/"), pe$1.test(t)) {
		const n = V(r);
		if (n && !V$1(t)) return mt(t, r, e, s);
		const o = new URL(t, r.parentURL);
		return o.pathname = path.join(o.pathname, "index"), n ? J(fileURLToPath(o), r, e, !1) ?? mt(t, r, e, s) : J(o.toString(), r, e, !0);
	}
	try {
		return mt(t, r, e, s);
	} catch (n) {
		if (n instanceof Error) {
			zn(3, "resolveDirectorySync error", {
				specifier: t,
				context: r,
				error: n
			});
			const o = n;
			if (o.code === "ERR_UNSUPPORTED_DIR_IMPORT") {
				const c = z(o);
				if (c) {
					if (t.startsWith("#")) throw n;
					const a = bt(t, c);
					if (a?.kind === "root-exports") throw n;
					if (a?.mainUrl) {
						try {
							return e(a.mainUrl, r);
						} catch (d) {
							if (!X(d)) throw d;
						}
						try {
							return lt(a.mainUrl, r, e, s);
						} catch (d) {
							if (!X(d)) throw d;
						}
					}
					const l = `${c}/index`, f = J(l, r, e);
					if (f) return f;
				}
			}
		}
		throw n;
	}
}, "resolveDirectorySync");
const Ce = i$1(async (t, r, e, s) => {
	const n = Nt(t);
	if (zn(3, "resolveTsPaths", {
		specifier: t,
		context: r,
		tsconfigPathAliasSpecifier: n,
		tsconfig: s.parsedTsconfig,
		fromNodeModules: b(r.parentURL)
	}), n && s.parsedTsconfig && !b(r.parentURL)) {
		const o = ct$1(s.parsedTsconfig, t);
		zn(3, "resolveTsPaths", { possiblePaths: o });
		for (const c of o) try {
			return await dt(pathToFileURL(c).toString(), r, e, s);
		} catch {}
	}
	return dt(t, r, e, s);
}, "resolveTsPaths");
const be = i$1((t, r, e, s) => {
	const n = Nt(t);
	if (zn(3, "resolveTsPathsSync", {
		specifier: t,
		context: r,
		tsconfigPathAliasSpecifier: n,
		tsconfig: s.parsedTsconfig,
		fromNodeModules: b(r.parentURL)
	}), n && s.parsedTsconfig && !b(r.parentURL)) {
		const o = ct$1(s.parsedTsconfig, t);
		zn(3, "resolveTsPathsSync", { possiblePaths: o });
		for (const c of o) try {
			return lt(pathToFileURL(c).toString(), r, e, s);
		} catch {}
	}
	return lt(t, r, e, s);
}, "resolveTsPathsSync");
const D = "tsx://";
const ut = i$1((t, r) => {
	const e = t.indexOf("#"), s = e === -1 ? t : t.slice(0, e), n = e === -1 ? "" : t.slice(e);
	return `${s}${s.includes("?") ? "&" : "?"}${r}${n}`;
}, "addQuery");
const Y = i$1((t, r) => T(t) ? `${t}${t.includes("#") ? "&" : "#"}${I}${r}` : ut(t, `${I}${r}`), "addNamespace");
const Qt = i$1((t, r) => {
	const e = r.indexOf("#"), s = r[0] === "?" ? r.slice(1, e === -1 ? void 0 : e) : "", n = e === -1 ? "" : r.slice(e), o = t.indexOf("#"), c = o === -1 ? t : t.slice(0, o), a = o === -1 ? "" : t.slice(o), l = s ? ut(c, s) : c;
	return new URL(`${l}${n || a}`).toString();
}, "mergeUrlMetadata");
const Z = i$1((t, r) => {
	if (r === void 0) return t;
	const e = new URL(t);
	if (e.searchParams.has(E)) return t;
	const s = e.pathname.toLowerCase().lastIndexOf("%3f");
	if (s === -1) return t;
	const n = e.pathname.slice(s + 3);
	if (n.includes("/")) return t;
	const o = new URLSearchParams(n.replaceAll("%25", "%"));
	return o.get("namespace") !== r ? t : (o.delete("namespace"), o.set(st, r), e.pathname = e.pathname.slice(0, s), e.search = o.toString(), e.toString());
}, "restoreCjsBridgeNamespace");
const Ht = i$1((t, r, e) => {
	if (r !== "commonjs" || !t.startsWith("file://") || !Nn.test(t)) return t;
	const s = new URL(t), n = [nt(s.search, [I]), ...e ? [`namespace=${encodeURIComponent(e)}`] : []].filter(Boolean).join("&");
	return n ? (s.pathname += `%3F${n}`, s.searchParams.set(E, "1"), s.toString()) : t;
}, "preserveCommonJsQueryIdentity");
const Je = i$1((t) => {
	const r = i$1(async (e, s, n) => {
		if (!t.active || e.startsWith("node:")) return n(e, s);
		e.startsWith("file://") && (e = Z(e, t.namespace));
		const { parentURL: o } = s;
		o?.startsWith("file://") && (s.parentURL = Z(o, t.namespace));
		const c = s.parentURL && R(s.parentURL);
		let a = T(e) ? c : R(e) ?? c;
		if (t.namespace) {
			let p;
			if (e.startsWith(D)) {
				try {
					p = JSON.parse(e.slice(6));
				} catch {}
				p?.namespace && (a = p.namespace);
			}
			if (t.namespace !== a) return n(e, s);
			p && (e = p.specifier, s.parentURL = p.parentURL);
		}
		if (T(e)) {
			const p = await n(e, s);
			return t.namespace ? {
				...p,
				url: Y(p.url, t.namespace)
			} : p;
		}
		const l = Mt(e, V(s)), f = l === -1 ? e : e.slice(0, l), d = l === -1 ? "" : e.slice(l), h = await Ce(f, s, n, t);
		if (zn(2, "nextResolve", { resolved: h }), h.format === "builtin" || h.url.startsWith("node:")) return h;
		const m = { ...h };
		m.url.startsWith("file://") && (m.format === "module-typescript" ? m.format = "module" : m.format === "commonjs-typescript" ? m.format = "commonjs" : !m.format && !Bt(m.url) && (m.format = await fe(m.url), zn(2, "getFormatFromFileUrl", {
			resolved: m,
			format: m.format
		}))), d && (m.url = Qt(m.url, d));
		const g = s.parentURL && m.format === "commonjs" && Nn.test(m.url) && (new URL(s.parentURL).searchParams.has(O) || Se(s.parentURL, e, Fe));
		return a && R(m.url) === void 0 && (m.url = Y(m.url, a)), g && (m.url = ut(m.url, he)), (a || g) && (m.url = Ht(m.url, m.format, a)), m;
	}, "resolve");
	return me ? async (e, s, n) => {
		zn(2, "resolve", {
			specifier: e,
			context: s
		});
		const o = await r(e, s, n);
		return zn(1, "resolved", {
			specifier: e,
			context: s,
			result: o
		}), o;
	} : r;
}, "createResolve");
const Ne = i$1((t) => {
	const r = i$1((e, s, n) => {
		if (!t.active || e.startsWith("node:") || V(s) && Jn()) return n(e, s);
		e.startsWith("file://") && (e = Z(e, t.namespace));
		const { parentURL: o } = s;
		o?.startsWith("file://") && (s.parentURL = Z(o, t.namespace));
		const c = s.parentURL && R(s.parentURL);
		let a = T(e) ? c : R(e) ?? c;
		if (t.namespace) {
			let g;
			if (e.startsWith(D)) {
				try {
					g = JSON.parse(e.slice(6));
				} catch {}
				g?.namespace && (a = g.namespace);
			}
			if (t.namespace !== a) return n(e, s);
			g && (e = g.specifier, s.parentURL = g.parentURL);
		}
		if (T(e)) {
			const g = n(e, s);
			return t.namespace ? {
				...g,
				url: Y(g.url, t.namespace)
			} : g;
		}
		const l = Mt(e, V(s)), f = l === -1 ? e : e.slice(0, l), d = l === -1 ? "" : e.slice(l), h = be(f, s, n, t);
		if (zn(2, "nextResolve", { resolved: h }), h.format === "builtin" || h.url.startsWith("node:")) return h;
		const m = { ...h };
		return m.url.startsWith("file://") && (m.format === "module-typescript" ? m.format = "module" : m.format === "commonjs-typescript" ? m.format = "commonjs" : !m.format && !Bt(m.url) && (m.format = pe(m.url), zn(2, "getFormatFromFileUrlSync", {
			resolved: m,
			format: m.format
		}))), d && (m.url = Qt(m.url, d)), a && R(m.url) === void 0 && (m.url = Y(m.url, a)), m.url = Ht(m.url, m.format, a), m;
	}, "resolve");
	return me ? (e, s, n) => {
		zn(2, "resolveSync", {
			specifier: e,
			context: s
		});
		const o = r(e, s, n);
		return zn(1, "resolvedSync", {
			specifier: e,
			context: s,
			result: o
		}), o;
	} : r;
}, "createResolveSync");
const Gt = i$1((t) => (r, e) => {
	if (!e) throw new Error("The current file path (import.meta.url) must be provided in the second argument of tsImport()");
	const s = e.startsWith("file://") ? e : pathToFileURL(e).toString();
	return import(`tsx://${JSON.stringify({
		specifier: r,
		parentURL: s,
		namespace: t
	})}`);
}, "createScopedImport");
let xt = !1;
const Me = i$1((t) => {
	const r = [];
	for (let e = 0; e < t.length; e += 1) {
		const s = t[e];
		if (s === "--import") {
			const n = t[e + 1];
			n && r.push(n), e += 1;
		} else s.startsWith("--import=") && r.push(s.slice(9));
	}
	return r;
}, "collectImportSpecifiers");
const _e = i$1(() => [...(process.env.NODE_OPTIONS ?? "").matchAll(/(?:^|\s)--import(?:=|\s+)(\S+)/g)].map(([, t]) => t), "collectNodeOptionsImportSpecifiers");
const zt = [new URL("loader.mjs", import.meta.url).toString(), new URL("esm/index.mjs", import.meta.url).toString()];
const Be = /* @__PURE__ */ new Set([
	"tsx",
	"tsx/esm",
	...zt,
	...zt.map((t) => decodeURI(new URL(t).pathname))
]);
const Ae = i$1((t) => Be.has(t), "isTsxImport");
const Xt = i$1((t) => /\.(?:[cm]?ts|tsx)(?:[?#].*)?$/.test(t), "isTypeScriptImport");
const qe = i$1(() => {
	const t = Me(process.execArgv), r = t.findIndex(Ae);
	return r > 0 && t.slice(0, r).some(Xt);
}, "hasCliTypeScriptPreload");
const Qe = _e().some(Xt) || qe();
const Vt$1 = typeof P.registerHooks == "function" && p$1(f$1) && !Qe;
const He = i$1((t) => {
	if (!P.register && !Vt$1) throw new Error(`This version of Node.js (${process.version}) does not support module.register(). Please upgrade to Node v18.19 or v20.6 and above.`);
	if (!xt) {
		const { _resolveFilename: a } = P;
		P._resolveFilename = (l, ...f) => a(bt$1(l), ...f), xt = !0;
	}
	const { sourceMapsEnabled: r } = process;
	if (process.setSourceMapsEnabled(!0), Vt$1) {
		const a = Tt({
			namespace: t?.namespace,
			onImport: t?.onImport,
			tsconfig: t?.tsconfig
		}), l = P.registerHooks({
			load: Le(a),
			resolve: Ne(a)
		}), f = i$1((async () => {
			a.active = !1, l.deregister(), r === !1 && process.setSourceMapsEnabled(!1);
		}), "unregister2");
		return t?.namespace && (f.import = Gt(t.namespace), f.unregister = f), f;
	}
	const { port1: e, port2: s } = new MessageChannel();
	P.register(`./esm/index.mjs?${Vt.randomUUID()}`, {
		parentURL: import.meta.url,
		data: {
			port: s,
			namespace: t?.namespace,
			tsconfig: t?.tsconfig
		},
		transferList: [s]
	});
	const n = t?.onImport, o = n && ((a) => {
		a.type === "load" && n(a.url);
	});
	o && (e.on("message", o), e.unref());
	const c = i$1(() => (r === !1 && process.setSourceMapsEnabled(!1), o && e.off("message", o), e.postMessage("deactivate"), new Promise((a) => {
		const l = i$1((f) => {
			f.type === "deactivated" && (a(), e.off("message", l));
		}, "onDeactivated");
		e.on("message", l);
	})), "unregister");
	return t?.namespace && (c.import = Gt(t.namespace), c.unregister = c), c;
}, "register");

// node_modules/.pnpm/tsx@4.23.15/node_modules/tsx/dist/esm/api/index.mjs
var s = Object.defineProperty;
var i = (t, r) => s(t, "name", {
	value: r,
	configurable: !0
});
const U = i((t, r) => {
	if (!r || typeof r == "object" && !r.parentURL) throw new Error("The current file path (import.meta.url) must be provided in the second argument of tsImport()");
	const e = typeof r == "string", o = e ? r : r.parentURL, m = Vt.randomUUID(), a = Re$1({ namespace: m });
	return !p$1(R$2) && !Mn.test(t) && Bn.test(t) ? Promise.resolve(a.require(t, o)) : He({
		namespace: m,
		...e ? {} : r
	}).import(t, o);
}, "tsImport");

export { He as register };