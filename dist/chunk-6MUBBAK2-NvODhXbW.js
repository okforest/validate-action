import { R as sanitizeDirective, h as directiveRegex, p as detectType, r as assignWithDepth_default, s as common_default } from "./chunk-BG4553SI-BdAazpNh.js";
import { n as log, t as select } from "./d3-selection-ulZxE20F.js";
import { n as __name } from "./chunk-Y2CYZVJY-CLQWvZ2c.js";
import { C as stepAfter, S as step, _ as linearClosed, a as basisOpen, b as natural, c as bundle, d as cardinalOpen, f as catmullRom, h as curveLinear, i as basisClosed, l as cardinal, m as catmullRomOpen, o as bumpX, p as catmullRomClosed, r as basis, s as bumpY, t as require_dist, u as cardinalClosed, v as monotoneX, w as stepBefore, y as monotoneY } from "./dist-Cyfirx4i.js";
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/predicate/isPlainObject.mjs
/**
* Checks if a given value is a plain object.
*
* A plain object is an object created by the `{}` literal, `new Object()`, or
* `Object.create(null)`.
*
* This function also handles objects with custom
* `Symbol.toStringTag` properties.
*
* `Symbol.toStringTag` is a built-in symbol that a constructor can use to customize the
* default string description of objects.
*
* @param [object] - The value to check.
* @returns True if the value is a plain object, otherwise false.
*
* @example
* console.log(isPlainObject({})); // true
* console.log(isPlainObject([])); // false
* console.log(isPlainObject(null)); // false
* console.log(isPlainObject(Object.create(null))); // true
* console.log(isPlainObject(new Map())); // false
*/
function isPlainObject(object) {
	if (typeof object !== "object") return false;
	if (object == null) return false;
	if (Object.getPrototypeOf(object) === null) return true;
	if (Object.prototype.toString.call(object) !== "[object Object]") {
		var _Object$getOwnPropert;
		const tag = object[Symbol.toStringTag];
		if (tag == null) return false;
		if (!((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(object, Symbol.toStringTag)) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.writable)) return false;
		return object.toString() === `[object ${tag}]`;
	}
	let proto = object;
	while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(object) === proto;
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/predicate/isLength.mjs
/**
* Checks if a given value is a valid length.
*
* A valid length is of type `number`, is a non-negative integer, and is less than or equal to
* JavaScript's maximum safe integer (`Number.MAX_SAFE_INTEGER`).
* It returns `true` if the value is a valid length, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the
* argument to a valid length (`number`).
*
* @param value The value to check.
* @returns Returns `true` if `value` is a valid length, else `false`.
*
* @example
* isLength(0); // true
* isLength(42); // true
* isLength(-1); // false
* isLength(1.5); // false
* isLength(Number.MAX_SAFE_INTEGER); // true
* isLength(Number.MAX_SAFE_INTEGER + 1); // false
*/
function isLength(value) {
	return Number.isSafeInteger(value) && value >= 0;
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
/**
* Checks if `value` is array-like.
*
* @param value The value to check.
* @returns Returns `true` if `value` is array-like, else `false`.
*
* @example
* isArrayLike([1, 2, 3]); // true
* isArrayLike('abc'); // true
* isArrayLike({ 0: 'a', length: 1 }); // true
* isArrayLike({}); // false
* isArrayLike(null); // false
* isArrayLike(undefined); // false
*/
function isArrayLike(value) {
	return value != null && typeof value !== "function" && isLength(value.length);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
/**
* Checks if a property key is unsafe to access or copy directly.
*
* This function is used in functions like `get` and `merge` to prevent
* prototype pollution attacks by identifying `__proto__`, which modifies the object's
* prototype chain. `constructor` and `prototype` stay accessible here because lodash
* keeps reads of them unrestricted; write paths use `isUnsafeToWriteProperty` instead,
* which also blocks those keys.
*
* @param key - The property key to check
* @returns `true` if the property is unsafe to access directly, `false` otherwise
* @internal
*/
function isUnsafeProperty(key) {
	return key === "__proto__";
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/_internal/hasOwn.mjs
const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
* Checks if `key` is an own property of `object`, like `Object.hasOwn`, which is not available on ES2015 engines.
*
* @param object - The object to inspect.
* @param key - The key to check.
* @returns `true` if `key` is an own property of `object`, otherwise `false`.
*/
function hasOwn(object, key) {
	return hasOwnProperty.call(object, key);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
/**
* Checks whether a value is a JavaScript primitive.
* JavaScript primitives include null, undefined, strings, numbers, booleans, symbols, and bigints.
*
* @param value The value to check.
* @returns Returns true if `value` is a primitive, false otherwise.
*
* @example
* isPrimitive(null); // true
* isPrimitive(undefined); // true
* isPrimitive('123'); // true
* isPrimitive(false); // true
* isPrimitive(true); // true
* isPrimitive(Symbol('a')); // true
* isPrimitive(123n); // true
* isPrimitive({}); // false
* isPrimitive(new Date()); // false
* isPrimitive(new Map()); // false
* isPrimitive(new Set()); // false
* isPrimitive([1, 2, 3]); // false
*/
function isPrimitive(value) {
	return value == null || typeof value !== "object" && typeof value !== "function";
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {T} value The value to query.
* @returns {string} Returns the `Object.prototype.toString.call` result.
*/
function getTag(value) {
	if (value == null) return value === void 0 ? "[object Undefined]" : "[object Null]";
	return Object.prototype.toString.call(value);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/_internal/tags.mjs
const regexpTag = "[object RegExp]";
const stringTag = "[object String]";
const numberTag = "[object Number]";
const booleanTag = "[object Boolean]";
const argumentsTag = "[object Arguments]";
const symbolTag = "[object Symbol]";
const dateTag = "[object Date]";
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const arrayBufferTag = "[object ArrayBuffer]";
const objectTag = "[object Object]";
const dataViewTag = "[object DataView]";
const uint8ArrayTag = "[object Uint8Array]";
const uint8ClampedArrayTag = "[object Uint8ClampedArray]";
const uint16ArrayTag = "[object Uint16Array]";
const uint32ArrayTag = "[object Uint32Array]";
const int8ArrayTag = "[object Int8Array]";
const int16ArrayTag = "[object Int16Array]";
const int32ArrayTag = "[object Int32Array]";
const float32ArrayTag = "[object Float32Array]";
const float64ArrayTag = "[object Float64Array]";
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/_internal/globalThis.mjs
const globalThis_ = typeof globalThis === "object" && globalThis || typeof window === "object" && window || typeof self === "object" && self || typeof global === "object" && global || (function() {
	return this;
})();
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/predicate/isBuffer.mjs
/**
* Checks if the given value is a Buffer instance.
*
* This function tests whether the provided value is an instance of Buffer.
* It returns `true` if the value is a Buffer, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `Buffer`.
*
* @param x - The value to check if it is a Buffer.
* @returns Returns `true` if `x` is a Buffer, else `false`.
*
* @example
* const buffer = Buffer.from("test");
* console.log(isBuffer(buffer)); // true
*
* const notBuffer = "not a buffer";
* console.log(isBuffer(notBuffer)); // false
*/
function isBuffer$1(x) {
	return typeof globalThis_.Buffer !== "undefined" && globalThis_.Buffer.isBuffer(x);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/predicate/isBuffer.mjs
/**
* Checks if the given value is a Buffer instance.
*
* This function tests whether the provided value is an instance of Buffer.
* It returns `true` if the value is a Buffer, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `Buffer`.
*
* @param x - The value to check if it is a Buffer.
* @returns Returns `true` if `x` is a Buffer, else `false`.
*
* @example
* const buffer = Buffer.from("test");
* console.log(isBuffer(buffer)); // true
*
* const notBuffer = "not a buffer";
* console.log(isBuffer(notBuffer)); // false
*/
function isBuffer(x) {
	return isBuffer$1(x);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
/**
* Checks if a value is a TypedArray.
* @param x The value to check.
* @returns Returns true if `x` is a TypedArray, false otherwise.
*
* @example
* const arr = new Uint8Array([1, 2, 3]);
* isTypedArray(arr); // true
*
* const regularArray = [1, 2, 3];
* isTypedArray(regularArray); // false
*
* const buffer = new ArrayBuffer(16);
* isTypedArray(buffer); // false
*/
function isTypedArray$1(x) {
	return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/predicate/isTypedArray.mjs
/**
* Checks if a value is a TypedArray.
* @param x The value to check.
* @returns Returns true if `x` is a TypedArray, false otherwise.
*
* @example
* const arr = new Uint8Array([1, 2, 3]);
* isTypedArray(arr); // true
*
* const regularArray = [1, 2, 3];
* isTypedArray(regularArray); // false
*
* const buffer = new ArrayBuffer(16);
* isTypedArray(buffer); // false
*/
function isTypedArray(x) {
	return isTypedArray$1(x);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function getSymbols(object) {
	return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
/**
* Creates a deep clone of the given object using a customizer function.
*
* @template T - The type of the object.
* @param obj - The object to clone.
* @param [cloneValue] - A function to customize the cloning process.
* @returns A deep clone of the given object.
*
* @example
* // Clone a primitive value
* const num = 29;
* const clonedNum = cloneDeepWith(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an object with a customizer
* const obj = { a: 1, b: 2 };
* const clonedObj = cloneDeepWith(obj, (value) => {
*   if (typeof value === 'number') {
*     return value * 2; // Double the number
*   }
* });
* console.log(clonedObj); // { a: 2, b: 4 }
* console.log(clonedObj === obj); // false
*
* @example
* // Clone an array with a customizer
* const arr = [1, 2, 3];
* const clonedArr = cloneDeepWith(arr, (value) => {
*   if (typeof value === 'number') {
*     return value + 1; // Increment each number
*   }
* });
* console.log(clonedArr); // [2, 3, 4]
* console.log(clonedArr === arr); // false
*/
function cloneDeepWith(obj, customizer) {
	return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), customizer);
}
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack, customizer) {
	if (customizer != null) {
		const cloned = customizer(valueToClone, keyToClone, objectToClone, stack);
		if (cloned !== void 0) return cloned;
	}
	if (isPrimitive(valueToClone)) return valueToClone;
	if (stack.has(valueToClone)) return stack.get(valueToClone);
	if (Array.isArray(valueToClone)) {
		const result = new Array(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, customizer);
		if (hasOwn(valueToClone, "index")) result.index = valueToClone.index;
		if (hasOwn(valueToClone, "input")) result.input = valueToClone.input;
		return result;
	}
	if (valueToClone instanceof Date) return new Date(valueToClone.getTime());
	if (valueToClone instanceof RegExp) {
		const result = new RegExp(valueToClone.source, valueToClone.flags);
		result.lastIndex = valueToClone.lastIndex;
		return result;
	}
	if (valueToClone instanceof Map) {
		const result = /* @__PURE__ */ new Map();
		stack.set(valueToClone, result);
		valueToClone.forEach((value, key) => {
			result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, customizer));
		});
		return result;
	}
	if (valueToClone instanceof Set) {
		const result = /* @__PURE__ */ new Set();
		stack.set(valueToClone, result);
		valueToClone.forEach((value) => {
			result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, customizer));
		});
		return result;
	}
	if (isBuffer(valueToClone)) return valueToClone.subarray();
	if (isTypedArray(valueToClone)) {
		const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, customizer);
		return result;
	}
	if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) return valueToClone.slice(0);
	if (valueToClone instanceof DataView) {
		const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, customizer);
		return result;
	}
	if (typeof File !== "undefined" && valueToClone instanceof File) {
		const result = new File([valueToClone], valueToClone.name, { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, customizer);
		return result;
	}
	if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
		const result = new Blob([valueToClone], { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, customizer);
		return result;
	}
	const tag = getTag(valueToClone);
	if (tag === "[object Error]") {
		if (valueToClone === objectToClone) return {};
		return valueToClone;
	}
	switch (tag) {
		case numberTag:
		case stringTag:
		case booleanTag: {
			const result = new valueToClone.constructor(valueToClone.valueOf());
			stack.set(valueToClone, result);
			copyProperties(result, valueToClone, objectToClone, stack, customizer);
			return result;
		}
		case argumentsTag: {
			const result = {};
			stack.set(valueToClone, result);
			copyProperties(result, valueToClone, objectToClone, stack, customizer);
			result.length = valueToClone.length;
			result[Symbol.iterator] = valueToClone[Symbol.iterator];
			return result;
		}
	}
	if (typeof valueToClone === "object" && isCloneableObject(tag)) {
		const result = tag === "[object Object]" && typeof valueToClone.constructor !== "function" ? {} : Object.create(Object.getPrototypeOf(valueToClone));
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, customizer);
		return result;
	}
	return valueToClone;
}
function copyProperties(target, source, objectToClone, stack, customizer) {
	const keys = [...Object.keys(source), ...getSymbols(source)];
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const descriptor = Object.getOwnPropertyDescriptor(target, key);
		if (descriptor == null || descriptor.writable) target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, customizer);
	}
}
function isCloneableObject(tag) {
	switch (tag) {
		case argumentsTag:
		case arrayTag:
		case arrayBufferTag:
		case dataViewTag:
		case booleanTag:
		case dateTag:
		case float32ArrayTag:
		case float64ArrayTag:
		case int8ArrayTag:
		case int16ArrayTag:
		case int32ArrayTag:
		case mapTag:
		case numberTag:
		case objectTag:
		case regexpTag:
		case setTag:
		case stringTag:
		case symbolTag:
		case uint8ArrayTag:
		case uint8ClampedArrayTag:
		case uint16ArrayTag:
		case uint32ArrayTag: return true;
		default: return false;
	}
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
/**
* Creates a deep clone of the given object.
*
* @template T - The type of the object.
* @param obj - The object to clone.
* @returns A deep clone of the given object.
*
* @example
* // Clone a primitive value
* const num = 29;
* const clonedNum = clone(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an array
* const arr = [1, 2, 3];
* const clonedArr = cloneDeep(arr);
* console.log(clonedArr); // [1, 2, 3]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an array with nested objects
* const arr = [1, { a: 1 }, [1, 2, 3]];
* const clonedArr = cloneDeep(arr);
* arr[1].a = 2;
* console.log(arr); // [1, { a: 2 }, [1, 2, 3]]
* console.log(clonedArr); // [1, { a: 1 }, [1, 2, 3]]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an object
* const obj = { a: 1, b: 'es-toolkit', c: [1, 2, 3] };
* const clonedObj = cloneDeep(obj);
* console.log(clonedObj); // { a: 1, b: 'es-toolkit', c: [1, 2, 3] }
* console.log(clonedObj === obj); // false
*
* @example
* // Clone an object with nested objects
* const obj = { a: 1, b: { c: 1 } };
* const clonedObj = cloneDeep(obj);
* obj.b.c = 2;
* console.log(obj); // { a: 1, b: { c: 2 } }
* console.log(clonedObj); // { a: 1, b: { c: 1 } }
* console.log(clonedObj === obj); // false
*/
function cloneDeep(obj) {
	return cloneDeepWith(obj);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
/**
* Checks if the given value is an arguments object.
*
* This function tests whether the provided value is an arguments object or not.
* It returns `true` if the value is an arguments object, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to an arguments object.
*
* @param value - The value to test if it is an arguments object.
* @returns `true` if the value is an arguments, `false` otherwise.
*
* @example
* const args = (function() { return arguments; })();
* const strictArgs = (function() { 'use strict'; return arguments; })();
* const value = [1, 2, 3];
*
* console.log(isArguments(args)); // true
* console.log(isArguments(strictArgs)); // true
* console.log(isArguments(value)); // false
*/
function isArguments(value) {
	return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/predicate/isObjectLike.mjs
/**
* Checks if the given value is object-like.
*
* A value is object-like if its type is object and it is not null.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to an object-like value.
*
* @param value - The value to test if it is an object-like.
* @returns `true` if the value is an object-like, `false` otherwise.
*
* @example
* const value1 = { a: 1 };
* const value2 = [1, 2, 3];
* const value3 = 'abc';
* const value4 = () => {};
* const value5 = null;
*
* console.log(isObjectLike(value1)); // true
* console.log(isObjectLike(value2)); // true
* console.log(isObjectLike(value3)); // false
* console.log(isObjectLike(value4)); // false
* console.log(isObjectLike(value5)); // false
*/
function isObjectLike(value) {
	return typeof value === "object" && value !== null;
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/predicate/isArrayLikeObject.mjs
/**
* Checks if the given value is a non-primitive, array-like object.
*
* @param value The value to check.
* @returns `true` if the value is a non-primitive, array-like object, `false` otherwise.
*
* @example
* isArrayLikeObject([1, 2, 3]); // true
* isArrayLikeObject({ 0: 'a', length: 1 }); // true
* isArrayLikeObject('abc'); // false
* isArrayLikeObject(()=>{}); // false
*/
function isArrayLikeObject(value) {
	return isObjectLike(value) && isArrayLike(value);
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/function/memoize.mjs
/**
* Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
* storing the result based on the arguments provided to the memoized function. By default, the first argument
* provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
* the this binding of the memoized function.
*
* @template T - The type of the original function being memoized
* @param func The function to have its output memoized.
* @param [resolver] The function to resolve the cache key.
* @return {MemoizedFunction<T>} Returns the new memoizing function.
*
* @example
* const object = { a: 1, b: 2 };
* const other = { c: 3, d: 4 };
*
* const keys = memoize(Object.keys);
* keys(object); // => ['a', 'b']
* keys(other); // => ['c', 'd']
*
* object.e = 5;
* keys(object); // => ['a', 'b']
*
* // Modify the result cache.
* keys.cache.set(object, ['x']);
* keys(object); // => ['x']
*
* // memoize.Cache is the constructor used for the cache. It defaults to Map.
* const cache = new memoize.Cache();
* cache.set('a', 1);
* cache.get('a'); // => 1
* cache.has('b'); // => false
*/
function memoize(func, resolver) {
	if (typeof func !== "function" || resolver != null && typeof resolver !== "function") throw new TypeError("Expected a function");
	const memoized = function(...args) {
		const key = resolver ? resolver.apply(this, args) : args[0];
		const cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		const result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || Map)();
	return memoized;
}
memoize.Cache = Map;
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/_internal/baseClone.mjs
/**
* A copy of `clone` from `es-toolkit/object` that does not rely on `AggregateError`,
* which is not available on ES2015 engines, so that `es-toolkit/compat` runs on Node.js 6
* without changing the main library.
*
* @template T - The type of the value.
* @param obj - The value to clone.
* @returns A shallow clone of the given value.
*/
function baseClone(obj) {
	if (isPrimitive(obj)) return obj;
	if (Array.isArray(obj) || isTypedArray$1(obj) || obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && obj instanceof SharedArrayBuffer) return obj.slice(0);
	const prototype = Object.getPrototypeOf(obj);
	if (prototype == null) return Object.assign(Object.create(prototype), obj);
	const Constructor = prototype.constructor;
	if (obj instanceof Date || obj instanceof Map || obj instanceof Set) return new Constructor(obj);
	if (obj instanceof RegExp) {
		const newRegExp = new Constructor(obj);
		newRegExp.lastIndex = obj.lastIndex;
		return newRegExp;
	}
	if (obj instanceof DataView) return new Constructor(obj.buffer.slice(0));
	if (obj instanceof Error) {
		let newError;
		if (typeof AggregateError !== "undefined" && obj instanceof AggregateError) newError = new Constructor(obj.errors, obj.message, { cause: obj.cause });
		else newError = new Constructor(obj.message, { cause: obj.cause });
		newError.stack = obj.stack;
		Object.assign(newError, obj);
		return newError;
	}
	if (typeof File !== "undefined" && obj instanceof File) return new Constructor([obj], obj.name, {
		type: obj.type,
		lastModified: obj.lastModified
	});
	if (typeof obj === "object") {
		const newObject = Object.create(prototype);
		return Object.assign(newObject, obj);
	}
	return obj;
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/object/mergeWith.mjs
/**
* Merges the properties of one or more source objects into the target object using a customizer function.
*
* This function performs a deep merge, recursively merging nested objects and arrays.
* If a property in the source object is an array or object and the corresponding property in the target object is also an array or object, they will be merged.
* If a property in the source object is `undefined`, it will not overwrite a defined property in the target object.
*
* You can provide a custom `merge` function to control how properties are merged. The `merge` function is called for each property that is being merged and receives the following arguments:
*
* - `targetValue`: The current value of the property in the target object.
* - `sourceValue`: The value of the property in the source object.
* - `key`: The key of the property being merged.
* - `target`: The target object.
* - `source`: The source object.
* - `stack`: A `Map` used to keep track of objects that have already been processed to handle circular references.
*
* The `merge` function should return the value to be set in the target object. If it returns `undefined`, a default deep merge will be applied for arrays and objects.
*
* The function can handle multiple source objects and will merge them all into the target object.
*
* @param object - The target object into which the source object properties will be merged. This object is modified in place.
* @param otherArgs - Additional source objects to merge into the target object, including the custom `merge` function.
* @returns The updated target object with properties from the source object(s) merged in.
*
* @example
* const target = { a: 1, b: 2 };
* const source = { b: 3, c: 4 };
*
* mergeWith(target, source, (targetValue, sourceValue) => {
*   if (typeof targetValue === 'number' && typeof sourceValue === 'number') {
*     return targetValue + sourceValue;
*   }
* });
* // Returns { a: 1, b: 5, c: 4 }
* @example
* const target = { a: [1], b: [2] };
* const source = { a: [3], b: [4] };
*
* const result = mergeWith(target, source, (objValue, srcValue) => {
*   if (Array.isArray(objValue)) {
*     return objValue.concat(srcValue);
*   }
* });
*
* expect(result).toEqual({ a: [1, 3], b: [2, 4] });
*/
function mergeWith(object, ...otherArgs) {
	const sources = otherArgs.slice(0, -1);
	const merge = otherArgs[otherArgs.length - 1];
	let result = object;
	for (let i = 0; i < sources.length; i++) {
		const source = sources[i];
		result = mergeWithDeep(result, source, merge, /* @__PURE__ */ new Map());
	}
	return result;
}
function mergeWithDeep(target, source, merge, stack) {
	if (isPrimitive(target)) target = Object(target);
	if (source == null || typeof source !== "object") return target;
	if (stack.has(source)) return baseClone(stack.get(source));
	stack.set(source, target);
	if (Array.isArray(source)) {
		source = source.slice();
		for (let i = 0; i < source.length; i++) if (!(i in source)) source[i] = void 0;
	}
	const sourceKeys = [...Object.keys(source), ...getSymbols(source)];
	for (let i = 0; i < sourceKeys.length; i++) {
		const key = sourceKeys[i];
		if (isUnsafeProperty(key)) continue;
		let sourceValue = source[key];
		let targetValue = target[key];
		if (isArguments(sourceValue)) sourceValue = Object.assign({}, sourceValue);
		if (isArguments(targetValue)) targetValue = Object.assign({}, targetValue);
		if (isBuffer$1(sourceValue)) sourceValue = cloneDeep(sourceValue);
		if (Array.isArray(sourceValue)) {
			if (Array.isArray(targetValue)) {
				const cloned = [];
				const targetKeys = Reflect.ownKeys(targetValue);
				for (let i = 0; i < targetKeys.length; i++) {
					const targetKey = targetKeys[i];
					cloned[targetKey] = targetValue[targetKey];
				}
				targetValue = cloned;
			} else if (isArrayLikeObject(targetValue)) {
				const cloned = [];
				for (let i = 0; i < targetValue.length; i++) cloned[i] = targetValue[i];
				targetValue = cloned;
			} else targetValue = [];
		}
		const merged = merge(targetValue, sourceValue, key, target, source, stack);
		if (merged !== void 0) target[key] = merged;
		else if (Array.isArray(sourceValue)) target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
		else if (isObjectLike(targetValue) && isObjectLike(sourceValue) && (isPlainObject(targetValue) || isPlainObject(sourceValue) || isTypedArray(targetValue) || isTypedArray(sourceValue))) target[key] = mergeWithDeep(targetValue, sourceValue, merge, stack);
		else if (targetValue == null && isPlainObject(sourceValue)) target[key] = mergeWithDeep({}, sourceValue, merge, stack);
		else if (targetValue == null && isTypedArray(sourceValue)) target[key] = cloneDeep(sourceValue);
		else if (targetValue === void 0 || sourceValue !== void 0) target[key] = sourceValue;
	}
	return target;
}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/function/noop.mjs
/**
* A no-operation function that does nothing.
* This can be used as a placeholder or default function.
*
* @example
* noop(); // Does nothing
*
* @returns This function does not return anything.
*/
function noop() {}
// node_modules/.pnpm/es-toolkit@1.53.2/node_modules/es-toolkit/dist/compat/object/merge.mjs
/**
* Merges the properties of one or more source objects into the target object.
*
* This function performs a deep merge, recursively merging nested objects and arrays.
* If a property in the source object is an array or object and the corresponding property in the target object is also an array or object, they will be merged.
* If a property in the source object is `undefined`, it will not overwrite a defined property in the target object.
*
* The function can handle multiple source objects and will merge them all into the target object.
*
* @param object - The target object into which the source object properties will be merged. This object is modified in place.
* @param sources - The source objects whose properties will be merged into the target object.
* @returns The updated target object with properties from the source object(s) merged in.
*
* @example
* const target = { a: 1, b: { x: 1, y: 2 } };
* const source = { b: { y: 3, z: 4 }, c: 5 };
*
* const result = merge(target, source);
* console.log(result);
* // Output: { a: 1, b: { x: 1, y: 3, z: 4 }, c: 5 }
*
* @example
* const target = { a: [1, 2], b: { x: 1 } };
* const source = { a: [3], b: { y: 2 } };
*
* const result = merge(target, source);
* console.log(result);
* // Output: { a: [3], b: { x: 1, y: 2 } }
*
* @example
* const target = { a: null };
* const source = { a: [1, 2, 3] };
*
* const result = merge(target, source);
* console.log(result);
* // Output: { a: [1, 2, 3] }
*/
function merge(object, ...sources) {
	return mergeWith(object, ...sources, noop);
}
// node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-6MUBBAK2.mjs
var import_dist = require_dist();
var d3CurveTypes = {
	curveBasis: basis,
	curveBasisClosed: basisClosed,
	curveBasisOpen: basisOpen,
	curveBumpX: bumpX,
	curveBumpY: bumpY,
	curveBundle: bundle,
	curveCardinalClosed: cardinalClosed,
	curveCardinalOpen: cardinalOpen,
	curveCardinal: cardinal,
	curveCatmullRomClosed: catmullRomClosed,
	curveCatmullRomOpen: catmullRomOpen,
	curveCatmullRom: catmullRom,
	curveLinear,
	curveLinearClosed: linearClosed,
	curveMonotoneX: monotoneX,
	curveMonotoneY: monotoneY,
	curveNatural: natural,
	curveStep: step,
	curveStepAfter: stepAfter,
	curveStepBefore: stepBefore
};
var directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var detectInit = /* @__PURE__ */ __name(function(text, config) {
	const inits = detectDirective(text, /(?:init\b)|(?:initialize\b)/);
	let results = {};
	if (Array.isArray(inits)) {
		const args = inits.map((init) => init.args);
		sanitizeDirective(args);
		results = assignWithDepth_default(results, [...args]);
	} else results = inits.args;
	if (!results) return;
	let type = detectType(text, config);
	const prop = "config";
	if (results[prop] !== void 0) {
		if (type === "flowchart-v2") type = "flowchart";
		results[type] = results[prop];
		delete results[prop];
	}
	return results;
}, "detectInit");
var detectDirective = /* @__PURE__ */ __name(function(text, type = null) {
	try {
		const commentWithoutDirectives = new RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
		text = text.trim().replace(commentWithoutDirectives, "").replace(/'/gm, "\"");
		log.debug(`Detecting diagram directive${type !== null ? " type:" + type : ""} based on the text:${text}`);
		let match;
		const result = [];
		while ((match = directiveRegex.exec(text)) !== null) {
			if (match.index === directiveRegex.lastIndex) directiveRegex.lastIndex++;
			if (match && !type || type && match[1]?.match(type) || type && match[2]?.match(type)) {
				const type2 = match[1] ? match[1] : match[2];
				const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
				result.push({
					type: type2,
					args
				});
			}
		}
		if (result.length === 0) return {
			type: text,
			args: null
		};
		return result.length === 1 ? result[0] : result;
	} catch (error) {
		log.error(`ERROR: ${error.message} - Unable to parse directive type: '${type}' based on the text: '${text}'`);
		return {
			type: void 0,
			args: null
		};
	}
}, "detectDirective");
var removeDirectives = /* @__PURE__ */ __name(function(text) {
	return text.replace(directiveRegex, "");
}, "removeDirectives");
var isSubstringInArray = /* @__PURE__ */ __name(function(str, arr) {
	for (const [i, element] of arr.entries()) if (element.match(str)) return i;
	return -1;
}, "isSubstringInArray");
function interpolateToCurve(interpolate, defaultCurve) {
	if (!interpolate) return defaultCurve;
	return d3CurveTypes[`curve${interpolate.charAt(0).toUpperCase() + interpolate.slice(1)}`] ?? defaultCurve;
}
__name(interpolateToCurve, "interpolateToCurve");
function formatUrl(linkStr, config) {
	const url = linkStr.trim();
	if (!url) return;
	if (config.securityLevel !== "loose") return (0, import_dist.sanitizeUrl)(url);
	return url;
}
__name(formatUrl, "formatUrl");
var runFunc = /* @__PURE__ */ __name((functionName, ...params) => {
	const arrPaths = functionName.split(".");
	const len = arrPaths.length - 1;
	const fnName = arrPaths[len];
	let obj = window;
	for (let i = 0; i < len; i++) {
		obj = obj[arrPaths[i]];
		if (!obj) {
			log.error(`Function name: ${functionName} not found in window`);
			return;
		}
	}
	obj[fnName](...params);
}, "runFunc");
function distance(p1, p2) {
	if (!p1 || !p2) return 0;
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
__name(distance, "distance");
function traverseEdge(points) {
	let prevPoint;
	let totalDistance = 0;
	points.forEach((point) => {
		totalDistance += distance(point, prevPoint);
		prevPoint = point;
	});
	return calculatePoint(points, totalDistance / 2);
}
__name(traverseEdge, "traverseEdge");
function calcLabelPosition(points) {
	if (points.length === 1) return points[0];
	return traverseEdge(points);
}
__name(calcLabelPosition, "calcLabelPosition");
var roundNumber = /* @__PURE__ */ __name((num, precision = 2) => {
	const factor = Math.pow(10, precision);
	return Math.round(num * factor) / factor;
}, "roundNumber");
var calculatePoint = /* @__PURE__ */ __name((points, distanceToTraverse) => {
	let prevPoint = void 0;
	let remainingDistance = distanceToTraverse;
	for (const point of points) {
		if (prevPoint) {
			const vectorDistance = distance(point, prevPoint);
			if (vectorDistance === 0) return prevPoint;
			if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
			else {
				const distanceRatio = remainingDistance / vectorDistance;
				if (distanceRatio <= 0) return prevPoint;
				if (distanceRatio >= 1) return {
					x: point.x,
					y: point.y
				};
				if (distanceRatio > 0 && distanceRatio < 1) return {
					x: roundNumber((1 - distanceRatio) * prevPoint.x + distanceRatio * point.x, 5),
					y: roundNumber((1 - distanceRatio) * prevPoint.y + distanceRatio * point.y, 5)
				};
			}
		}
		prevPoint = point;
	}
	throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint");
var calcCardinalityPosition = /* @__PURE__ */ __name((isRelationTypePresent, points, initialPosition) => {
	log.info(`our points ${JSON.stringify(points)}`);
	if (points[0] !== initialPosition) points = points.reverse();
	const center = calculatePoint(points, 25);
	const d = isRelationTypePresent ? 10 : 5;
	const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
	const cardinalityPosition = {
		x: 0,
		y: 0
	};
	cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
	cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	return cardinalityPosition;
}, "calcCardinalityPosition");
function calcTerminalLabelPosition(terminalMarkerSize, position, _points) {
	const points = structuredClone(_points);
	log.info("our points", points);
	if (position !== "start_left" && position !== "start_right") points.reverse();
	const center = calculatePoint(points, 25 + terminalMarkerSize);
	const d = 10 + terminalMarkerSize * .5;
	const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
	const cardinalityPosition = {
		x: 0,
		y: 0
	};
	if (position === "start_left") {
		cardinalityPosition.x = Math.sin(angle + Math.PI) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle + Math.PI) * d + (points[0].y + center.y) / 2;
	} else if (position === "end_right") {
		cardinalityPosition.x = Math.sin(angle - Math.PI) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle - Math.PI) * d + (points[0].y + center.y) / 2;
	} else if (position === "end_left") {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	} else {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	}
	return cardinalityPosition;
}
__name(calcTerminalLabelPosition, "calcTerminalLabelPosition");
function getStylesFromArray(arr) {
	let style = "";
	let labelStyle = "";
	for (const element of arr) if (element !== void 0) {
		if (element.startsWith("color:") || element.startsWith("text-align:")) labelStyle = labelStyle + element + ";";
		else style = style + element + ";";
	}
	return {
		style,
		labelStyle
	};
}
__name(getStylesFromArray, "getStylesFromArray");
var cnt = 0;
var generateId = /* @__PURE__ */ __name(() => {
	cnt++;
	return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
}, "generateId");
function makeRandomHex(length) {
	let result = "";
	const characters = "0123456789abcdef";
	const charactersLength = 16;
	for (let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}
__name(makeRandomHex, "makeRandomHex");
var random = /* @__PURE__ */ __name((options) => {
	return makeRandomHex(options.length);
}, "random");
var getTextObj = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: "start",
		style: "#666",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0,
		valign: void 0,
		text: ""
	};
}, "getTextObj");
var drawSimpleText = /* @__PURE__ */ __name(function(elem, textData) {
	const nText = textData.text.replace(common_default.lineBreakRegex, " ");
	const [, _fontSizePx] = parseFontSize(textData.fontSize);
	const textElem = elem.append("text");
	textElem.attr("x", textData.x);
	textElem.attr("y", textData.y);
	textElem.style("text-anchor", textData.anchor);
	textElem.style("font-family", textData.fontFamily);
	textElem.style("font-size", _fontSizePx);
	textElem.style("font-weight", textData.fontWeight);
	textElem.attr("fill", textData.fill);
	if (textData.class !== void 0) textElem.attr("class", textData.class);
	const span = textElem.append("tspan");
	span.attr("x", textData.x + textData.textMargin * 2);
	span.attr("fill", textData.fill);
	span.text(nText);
	return textElem;
}, "drawSimpleText");
var wrapLabel = memoize((label, maxWidth, config) => {
	if (!label) return label;
	config = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		joinWith: "<br/>"
	}, config);
	if (common_default.hasBreaks(label)) return label;
	const words = label.split(" ").filter(Boolean);
	const completedLines = [];
	let nextLine = "";
	words.forEach((word, index) => {
		const wordLength = calculateTextWidth(`${word} `, config);
		const nextLineLength = calculateTextWidth(nextLine, config);
		if (wordLength > maxWidth) {
			const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth, "-", config);
			completedLines.push(nextLine, ...hyphenatedStrings);
			nextLine = remainingWord;
		} else if (nextLineLength + wordLength >= maxWidth) {
			completedLines.push(nextLine);
			nextLine = word;
		} else nextLine = [nextLine, word].filter(Boolean).join(" ");
		if (index + 1 === words.length) completedLines.push(nextLine);
	});
	return completedLines.filter((line) => line !== "").join(config.joinWith);
}, (label, maxWidth, config) => `${label}${maxWidth}${config.fontSize}${config.fontWeight}${config.fontFamily}${config.joinWith}`);
var breakString = memoize((word, maxWidth, hyphenCharacter = "-", config) => {
	config = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		margin: 0
	}, config);
	const characters = [...word];
	const lines = [];
	let currentLine = "";
	characters.forEach((character, index) => {
		const nextLine = `${currentLine}${character}`;
		if (calculateTextWidth(nextLine, config) >= maxWidth) {
			const currentCharacter = index + 1;
			const isLastLine = characters.length === currentCharacter;
			const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
			lines.push(isLastLine ? nextLine : hyphenatedNextLine);
			currentLine = "";
		} else currentLine = nextLine;
	});
	return {
		hyphenatedStrings: lines,
		remainingWord: currentLine
	};
}, (word, maxWidth, hyphenCharacter = "-", config) => `${word}${maxWidth}${hyphenCharacter}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
function calculateTextHeight(text, config) {
	return calculateTextDimensions(text, config).height;
}
__name(calculateTextHeight, "calculateTextHeight");
function calculateTextWidth(text, config) {
	return calculateTextDimensions(text, config).width;
}
__name(calculateTextWidth, "calculateTextWidth");
var calculateTextDimensions = memoize((text, config) => {
	const { fontSize = 12, fontFamily = "Arial", fontWeight = 400 } = config;
	if (!text) return {
		width: 0,
		height: 0
	};
	const [, _fontSizePx] = parseFontSize(fontSize);
	const fontFamilies = ["sans-serif", fontFamily];
	const lines = text.split(common_default.lineBreakRegex);
	const dims = [];
	const body = select("body");
	if (!body.remove) return {
		width: 0,
		height: 0,
		lineHeight: 0
	};
	const g = body.append("svg");
	for (const fontFamily2 of fontFamilies) {
		let cHeight = 0;
		const dim = {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		for (const line of lines) {
			const textObj = getTextObj();
			textObj.text = line || "​";
			const textElem = drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
			const bBox = (textElem._groups || textElem)[0][0].getBBox();
			if (bBox.width === 0 && bBox.height === 0) throw new Error("svg element not in render tree");
			dim.width = Math.round(Math.max(dim.width, bBox.width));
			cHeight = Math.round(bBox.height);
			dim.height += cHeight;
			dim.lineHeight = Math.round(Math.max(dim.lineHeight, cHeight));
		}
		dims.push(dim);
	}
	g.remove();
	return dims[isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1];
}, (text, config) => `${text}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
var InitIDGenerator = class {
	constructor(deterministic = false, seed) {
		this.count = 0;
		this.count = seed ? seed.length : 0;
		this.next = deterministic ? () => this.count++ : () => Date.now();
	}
	static {
		__name(this, "InitIDGenerator");
	}
};
var decoder;
var entityDecode = /* @__PURE__ */ __name(function(html) {
	decoder = decoder || document.createElement("div");
	html = escape(html).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
	decoder.innerHTML = html;
	return unescape(decoder.textContent);
}, "entityDecode");
function isDetailedError(error) {
	return "str" in error;
}
__name(isDetailedError, "isDetailedError");
function getErrorMessage(error) {
	if (error instanceof Error) return error.message;
	return String(error);
}
__name(getErrorMessage, "getErrorMessage");
var insertTitle = /* @__PURE__ */ __name((parent, cssClass, titleTopMargin, title) => {
	if (!title) return;
	const bounds = parent.node()?.getBBox();
	if (!bounds) return;
	parent.append("text").text(title).attr("text-anchor", "middle").attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
}, "insertTitle");
var parseFontSize = /* @__PURE__ */ __name((fontSize) => {
	if (typeof fontSize === "number") return [fontSize, fontSize + "px"];
	const fontSizeNumber = parseInt(fontSize ?? "", 10);
	if (Number.isNaN(fontSizeNumber)) return [void 0, void 0];
	else if (fontSize === String(fontSizeNumber)) return [fontSizeNumber, fontSize + "px"];
	else return [fontSizeNumber, fontSize];
}, "parseFontSize");
function cleanAndMerge(defaultData, data) {
	return merge({}, defaultData, data);
}
__name(cleanAndMerge, "cleanAndMerge");
var utils_default = {
	assignWithDepth: assignWithDepth_default,
	wrapLabel,
	calculateTextHeight,
	calculateTextWidth,
	calculateTextDimensions,
	cleanAndMerge,
	detectInit,
	detectDirective,
	isSubstringInArray,
	interpolateToCurve,
	calcLabelPosition,
	calcCardinalityPosition,
	calcTerminalLabelPosition,
	formatUrl,
	getStylesFromArray,
	generateId,
	random,
	runFunc,
	entityDecode,
	insertTitle,
	isLabelCoordinateInPath,
	parseFontSize,
	InitIDGenerator
};
var encodeEntities = /* @__PURE__ */ __name(function(text) {
	let txt = text;
	txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
		return s.substring(0, s.length - 1);
	});
	txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
		return s.substring(0, s.length - 1);
	});
	txt = txt.replace(/#\w+;/g, function(s) {
		const innerTxt = s.substring(1, s.length - 1);
		if (/^\+?\d+$/.test(innerTxt)) return "ﬂ°°" + innerTxt + "¶ß";
		else return "ﬂ°" + innerTxt + "¶ß";
	});
	return txt;
}, "encodeEntities");
var decodeEntities = /* @__PURE__ */ __name(function(text) {
	return text.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities");
var getEdgeId = /* @__PURE__ */ __name((from, to, { counter = 0, prefix, suffix }, id) => {
	if (id) return id;
	return `${prefix ? `${prefix}_` : ""}${from}_${to}_${counter}${suffix ? `_${suffix}` : ""}`;
}, "getEdgeId");
function handleUndefinedAttr(attrValue) {
	return attrValue ?? null;
}
__name(handleUndefinedAttr, "handleUndefinedAttr");
function isLabelCoordinateInPath(point, dAttr) {
	const roundedX = Math.round(point.x);
	const roundedY = Math.round(point.y);
	const sanitizedD = dAttr.replace(/(\d+\.\d+)/g, (match) => Math.round(parseFloat(match)).toString());
	return sanitizedD.includes(roundedX.toString()) || sanitizedD.includes(roundedY.toString());
}
__name(isLabelCoordinateInPath, "isLabelCoordinateInPath");
export { int16ArrayTag as A, uint16ArrayTag as B, arrayBufferTag as C, dateTag as D, dataViewTag as E, objectTag as F, isPrimitive as G, uint8ArrayTag as H, regexpTag as I, hasOwn as K, setTag as L, int8ArrayTag as M, mapTag as N, float32ArrayTag as O, numberTag as P, stringTag as R, argumentsTag as S, booleanTag as T, uint8ClampedArrayTag as U, uint32ArrayTag as V, getTag as W, utils_default as _, decodeEntities as a, isTypedArray as b, getEdgeId as c, handleUndefinedAttr as d, interpolateToCurve as f, removeDirectives as g, random as h, cleanAndMerge as i, int32ArrayTag as j, float64ArrayTag as k, getErrorMessage as l, parseFontSize as m, calculateTextHeight as n, encodeEntities as o, isDetailedError as p, isArrayLike as q, calculateTextWidth as r, generateId as s, calculateTextDimensions as t, getStylesFromArray as u, wrapLabel as v, arrayTag as w, isBuffer$1 as x, isArguments as y, symbolTag as z };
