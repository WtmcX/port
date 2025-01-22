"use strict";
(function(root, module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(root, exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(global, exports);
    } else {
        module(root, root);
    }
}(typeof self !== 'undefined' ? self : this, function($rt_globals, $rt_exports) {
    var $rt_seed = 2463534242;
    function $rt_nextId() {
        var x = $rt_seed;
        x ^= x << 13;
        x ^= x >>> 17;
        x ^= x << 5;
        $rt_seed = x;
        return x;
    }
    function $rt_compare(a, b) {
        return a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1;
    }
    function $rt_isInstance(obj, cls) {
        return obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls);
    }
    function $rt_isAssignable(from, to) {
        if (from === to) {
            return true;
        }
        if (to.$meta.item !== null) {
            return from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        }
        var supertypes = from.$meta.supertypes;
        for (var i = 0;i < supertypes.length;i = i + 1 | 0) {
            if ($rt_isAssignable(supertypes[i], to)) {
                return true;
            }
        }
        return false;
    }
    function $rt_castToInterface(obj, cls) {
        if (obj !== null && !$rt_isInstance(obj, cls)) {
            $rt_throwCCE();
        }
        return obj;
    }
    function $rt_castToClass(obj, cls) {
        if (obj !== null && !(obj instanceof cls)) {
            $rt_throwCCE();
        }
        return obj;
    }
    $rt_globals.Array.prototype.fill = $rt_globals.Array.prototype.fill || function(value, start, end) {
        var len = this.length;
        if (!len) return this;
        start = start | 0;
        var i = start < 0 ? $rt_globals.Math.max(len + start, 0) : $rt_globals.Math.min(start, len);
        end = end === $rt_globals.undefined ? len : end | 0;
        end = end < 0 ? $rt_globals.Math.max(len + end, 0) : $rt_globals.Math.min(end, len);
        for (;i < end;i++) {
            this[i] = value;
        }
        return this;
    };
    function $rt_createArray(cls, sz) {
        var data = new $rt_globals.Array(sz);
        data.fill(null);
        return new $rt_array(cls, data);
    }
    function $rt_createArrayFromData(cls, init) {
        return $rt_wrapArray(cls, init);
    }
    function $rt_wrapArray(cls, data) {
        return new $rt_array(cls, data);
    }
    function $rt_createUnfilledArray(cls, sz) {
        return new $rt_array(cls, new $rt_globals.Array(sz));
    }
    function $rt_createNumericArray(cls, nativeArray) {
        return new $rt_array(cls, nativeArray);
    }
    var $rt_createLongArray;
    var $rt_createLongArrayFromData;
    if (typeof $rt_globals.BigInt64Array !== 'function') {
        $rt_createLongArray = function(sz) {
            var data = new $rt_globals.Array(sz);
            var arr = new $rt_array($rt_longcls(), data);
            data.fill(Long_ZERO);
            return arr;
        };
        $rt_createLongArrayFromData = function(init) {
            return new $rt_array($rt_longcls(), init);
        };
    } else {
        $rt_createLongArray = function(sz) {
            return $rt_createNumericArray($rt_longcls(), new $rt_globals.BigInt64Array(sz));
        };
        $rt_createLongArrayFromData = function(data) {
            var buffer = new $rt_globals.BigInt64Array(data.length);
            buffer.set(data);
            return $rt_createNumericArray($rt_longcls(), buffer);
        };
    }
    function $rt_createCharArray(sz) {
        return $rt_createNumericArray($rt_charcls(), new $rt_globals.Uint16Array(sz));
    }
    function $rt_createCharArrayFromData(data) {
        var buffer = new $rt_globals.Uint16Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_charcls(), buffer);
    }
    function $rt_createByteArray(sz) {
        return $rt_createNumericArray($rt_bytecls(), new $rt_globals.Int8Array(sz));
    }
    function $rt_createByteArrayFromData(data) {
        var buffer = new $rt_globals.Int8Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_bytecls(), buffer);
    }
    function $rt_createShortArray(sz) {
        return $rt_createNumericArray($rt_shortcls(), new $rt_globals.Int16Array(sz));
    }
    function $rt_createShortArrayFromData(data) {
        var buffer = new $rt_globals.Int16Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_shortcls(), buffer);
    }
    function $rt_createIntArray(sz) {
        return $rt_createNumericArray($rt_intcls(), new $rt_globals.Int32Array(sz));
    }
    function $rt_createIntArrayFromData(data) {
        var buffer = new $rt_globals.Int32Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_intcls(), buffer);
    }
    function $rt_createBooleanArray(sz) {
        return $rt_createNumericArray($rt_booleancls(), new $rt_globals.Int8Array(sz));
    }
    function $rt_createBooleanArrayFromData(data) {
        var buffer = new $rt_globals.Int8Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_booleancls(), buffer);
    }
    function $rt_createFloatArray(sz) {
        return $rt_createNumericArray($rt_floatcls(), new $rt_globals.Float32Array(sz));
    }
    function $rt_createFloatArrayFromData(data) {
        var buffer = new $rt_globals.Float32Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_floatcls(), buffer);
    }
    function $rt_createDoubleArray(sz) {
        return $rt_createNumericArray($rt_doublecls(), new $rt_globals.Float64Array(sz));
    }
    function $rt_createDoubleArrayFromData(data) {
        var buffer = new $rt_globals.Float64Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_doublecls(), buffer);
    }
    function $rt_arraycls(cls) {
        var result = cls.$array;
        if (result === null) {
            var arraycls = {  };
            var name = "[" + cls.$meta.binaryName;
            arraycls.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
            arraycls.classObject = null;
            arraycls.$array = null;
            result = arraycls;
            cls.$array = arraycls;
        }
        return result;
    }
    function $rt_createcls() {
        return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
    }
    function $rt_createPrimitiveCls(name, binaryName) {
        var cls = $rt_createcls();
        cls.$meta.primitive = true;
        cls.$meta.name = name;
        cls.$meta.binaryName = binaryName;
        cls.$meta.enum = false;
        cls.$meta.item = null;
        cls.$meta.simpleName = null;
        cls.$meta.declaringClass = null;
        cls.$meta.enclosingClass = null;
        return cls;
    }
    var $rt_booleanclsCache = null;
    function $rt_booleancls() {
        if ($rt_booleanclsCache === null) {
            $rt_booleanclsCache = $rt_createPrimitiveCls("boolean", "Z");
        }
        return $rt_booleanclsCache;
    }
    var $rt_charclsCache = null;
    function $rt_charcls() {
        if ($rt_charclsCache === null) {
            $rt_charclsCache = $rt_createPrimitiveCls("char", "C");
        }
        return $rt_charclsCache;
    }
    var $rt_byteclsCache = null;
    function $rt_bytecls() {
        if ($rt_byteclsCache === null) {
            $rt_byteclsCache = $rt_createPrimitiveCls("byte", "B");
        }
        return $rt_byteclsCache;
    }
    var $rt_shortclsCache = null;
    function $rt_shortcls() {
        if ($rt_shortclsCache === null) {
            $rt_shortclsCache = $rt_createPrimitiveCls("short", "S");
        }
        return $rt_shortclsCache;
    }
    var $rt_intclsCache = null;
    function $rt_intcls() {
        if ($rt_intclsCache === null) {
            $rt_intclsCache = $rt_createPrimitiveCls("int", "I");
        }
        return $rt_intclsCache;
    }
    var $rt_longclsCache = null;
    function $rt_longcls() {
        if ($rt_longclsCache === null) {
            $rt_longclsCache = $rt_createPrimitiveCls("long", "J");
        }
        return $rt_longclsCache;
    }
    var $rt_floatclsCache = null;
    function $rt_floatcls() {
        if ($rt_floatclsCache === null) {
            $rt_floatclsCache = $rt_createPrimitiveCls("float", "F");
        }
        return $rt_floatclsCache;
    }
    var $rt_doubleclsCache = null;
    function $rt_doublecls() {
        if ($rt_doubleclsCache === null) {
            $rt_doubleclsCache = $rt_createPrimitiveCls("double", "D");
        }
        return $rt_doubleclsCache;
    }
    var $rt_voidclsCache = null;
    function $rt_voidcls() {
        if ($rt_voidclsCache === null) {
            $rt_voidclsCache = $rt_createPrimitiveCls("void", "V");
        }
        return $rt_voidclsCache;
    }
    function $rt_throw(ex) {
        throw $rt_exception(ex);
    }
    var $rt_javaExceptionProp = $rt_globals.Symbol("javaException");
    function $rt_exception(ex) {
        var err = ex.$jsException;
        if (!err) {
            var javaCause = $rt_throwableCause(ex);
            var jsCause = javaCause !== null ? javaCause.$jsException : $rt_globals.undefined;
            var cause = typeof jsCause === "object" ? { cause : jsCause } : $rt_globals.undefined;
            err = new JavaError("Java exception thrown", cause);
            if (typeof $rt_globals.Error.captureStackTrace === "function") {
                $rt_globals.Error.captureStackTrace(err);
            }
            err[$rt_javaExceptionProp] = ex;
            ex.$jsException = err;
            $rt_fillStack(err, ex);
        }
        return err;
    }
    function $rt_fillStack(err, ex) {
        if (typeof $rt_decodeStack === "function" && err.stack) {
            var stack = $rt_decodeStack(err.stack);
            var javaStack = $rt_createArray($rt_stecls(), stack.length);
            var elem;
            var noStack = false;
            for (var i = 0;i < stack.length;++i) {
                var element = stack[i];
                elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
                if (elem == null) {
                    noStack = true;
                    break;
                }
                javaStack.data[i] = elem;
            }
            if (!noStack) {
                $rt_setStack(ex, javaStack);
            }
        }
    }
    function $rt_createMultiArray(cls, dimensions) {
        var first = 0;
        for (var i = dimensions.length - 1;i >= 0;i = i - 1 | 0) {
            if (dimensions[i] === 0) {
                first = i;
                break;
            }
        }
        if (first > 0) {
            for (i = 0;i < first;i = i + 1 | 0) {
                cls = $rt_arraycls(cls);
            }
            if (first === dimensions.length - 1) {
                return $rt_createArray(cls, dimensions[first]);
            }
        }
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, first));
        var firstDim = dimensions[first] | 0;
        for (i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createArray(cls, firstDim);
        }
        return $rt_createMultiArrayImpl(cls, arrays, dimensions, first);
    }
    function $rt_createByteMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_bytecls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createByteArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_bytecls(), arrays, dimensions);
    }
    function $rt_createCharMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_charcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createCharArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_charcls(), arrays, dimensions, 0);
    }
    function $rt_createBooleanMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_booleancls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createBooleanArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_booleancls(), arrays, dimensions, 0);
    }
    function $rt_createShortMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_shortcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createShortArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_shortcls(), arrays, dimensions, 0);
    }
    function $rt_createIntMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_intcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createIntArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_intcls(), arrays, dimensions, 0);
    }
    function $rt_createLongMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_longcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createLongArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_longcls(), arrays, dimensions, 0);
    }
    function $rt_createFloatMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_floatcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createFloatArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_floatcls(), arrays, dimensions, 0);
    }
    function $rt_createDoubleMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_doublecls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createDoubleArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_doublecls(), arrays, dimensions, 0);
    }
    function $rt_primitiveArrayCount(dimensions, start) {
        var val = dimensions[start + 1] | 0;
        for (var i = start + 2;i < dimensions.length;i = i + 1 | 0) {
            val = val * (dimensions[i] | 0) | 0;
            if (val === 0) {
                break;
            }
        }
        return val;
    }
    function $rt_createMultiArrayImpl(cls, arrays, dimensions, start) {
        var limit = arrays.length;
        for (var i = start + 1 | 0;i < dimensions.length;i = i + 1 | 0) {
            cls = $rt_arraycls(cls);
            var dim = dimensions[i];
            var index = 0;
            var packedIndex = 0;
            while (index < limit) {
                var arr = $rt_createUnfilledArray(cls, dim);
                for (var j = 0;j < dim;j = j + 1 | 0) {
                    arr.data[j] = arrays[index];
                    index = index + 1 | 0;
                }
                arrays[packedIndex] = arr;
                packedIndex = packedIndex + 1 | 0;
            }
            limit = packedIndex;
        }
        return arrays[0];
    }
    function $rt_assertNotNaN(value) {
        if (typeof value === 'number' && $rt_globals.isNaN(value)) {
            throw "NaN";
        }
        return value;
    }
    function $rt_createOutputFunction(printFunction) {
        var buffer = "";
        var utf8Buffer = 0;
        var utf8Remaining = 0;
        function putCodePoint(ch) {
            if (ch === 0xA) {
                printFunction(buffer);
                buffer = "";
            } else if (ch < 0x10000) {
                buffer += $rt_globals.String.fromCharCode(ch);
            } else {
                ch = ch - 0x10000 | 0;
                var hi = (ch >> 10) + 0xD800;
                var lo = (ch & 0x3FF) + 0xDC00;
                buffer += $rt_globals.String.fromCharCode(hi, lo);
            }
        }
        return function(ch) {
            if ((ch & 0x80) === 0) {
                putCodePoint(ch);
            } else if ((ch & 0xC0) === 0x80) {
                if (utf8Buffer > 0) {
                    utf8Remaining <<= 6;
                    utf8Remaining |= ch & 0x3F;
                    if ( --utf8Buffer === 0) {
                        putCodePoint(utf8Remaining);
                    }
                }
            } else if ((ch & 0xE0) === 0xC0) {
                utf8Remaining = ch & 0x1F;
                utf8Buffer = 1;
            } else if ((ch & 0xF0) === 0xE0) {
                utf8Remaining = ch & 0x0F;
                utf8Buffer = 2;
            } else if ((ch & 0xF8) === 0xF0) {
                utf8Remaining = ch & 0x07;
                utf8Buffer = 3;
            }
        };
    }
    var $rt_putStdout = typeof $rt_putStdoutCustom === "function" ? $rt_putStdoutCustom : typeof $rt_globals.console === "object" ? $rt_createOutputFunction(function(msg) {
        $rt_globals.console.info(msg);
    }) : function() {
    };
    var $rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : typeof $rt_globals.console === "object" ? $rt_createOutputFunction(function(msg) {
        $rt_globals.console.error(msg);
    }) : function() {
    };
    var $rt_packageData = null;
    function $rt_packages(data) {
        var i = 0;
        var packages = new $rt_globals.Array(data.length);
        for (var j = 0;j < data.length;++j) {
            var prefixIndex = data[i++];
            var prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
            packages[j] = prefix + data[i++] + ".";
        }
        $rt_packageData = packages;
    }
    function $rt_metadata(data) {
        var packages = $rt_packageData;
        var i = 0;
        while (i < data.length) {
            var cls = data[i++];
            cls.$meta = {  };
            var m = cls.$meta;
            var className = data[i++];
            m.name = className !== 0 ? className : null;
            if (m.name !== null) {
                var packageIndex = data[i++];
                if (packageIndex >= 0) {
                    m.name = packages[packageIndex] + m.name;
                }
            }
            m.binaryName = "L" + m.name + ";";
            var superclass = data[i++];
            m.superclass = superclass !== 0 ? superclass : null;
            m.supertypes = data[i++];
            if (m.superclass) {
                m.supertypes.push(m.superclass);
                cls.prototype = $rt_globals.Object.create(m.superclass.prototype);
            } else {
                cls.prototype = {  };
            }
            var flags = data[i++];
            m.enum = (flags & 8) !== 0;
            m.flags = flags;
            m.primitive = false;
            m.item = null;
            cls.prototype.constructor = cls;
            cls.classObject = null;
            m.accessLevel = data[i++];
            var innerClassInfo = data[i++];
            if (innerClassInfo === 0) {
                m.simpleName = null;
                m.declaringClass = null;
                m.enclosingClass = null;
            } else {
                var enclosingClass = innerClassInfo[0];
                m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
                var declaringClass = innerClassInfo[1];
                m.declaringClass = declaringClass !== 0 ? declaringClass : null;
                var simpleName = innerClassInfo[2];
                m.simpleName = simpleName !== 0 ? simpleName : null;
            }
            var clinit = data[i++];
            cls.$clinit = clinit !== 0 ? clinit : function() {
            };
            var virtualMethods = data[i++];
            if (virtualMethods !== 0) {
                for (var j = 0;j < virtualMethods.length;j += 2) {
                    var name = virtualMethods[j];
                    var func = virtualMethods[j + 1];
                    if (typeof name === 'string') {
                        name = [name];
                    }
                    for (var k = 0;k < name.length;++k) {
                        cls.prototype[name[k]] = func;
                    }
                }
            }
            cls.$array = null;
        }
    }
    function $rt_wrapFunction0(f) {
        return function() {
            return f(this);
        };
    }
    function $rt_wrapFunction1(f) {
        return function(p1) {
            return f(this, p1);
        };
    }
    function $rt_wrapFunction2(f) {
        return function(p1, p2) {
            return f(this, p1, p2);
        };
    }
    function $rt_wrapFunction3(f) {
        return function(p1, p2, p3) {
            return f(this, p1, p2, p3, p3);
        };
    }
    function $rt_wrapFunction4(f) {
        return function(p1, p2, p3, p4) {
            return f(this, p1, p2, p3, p4);
        };
    }
    function $rt_threadStarter(f) {
        return function() {
            var args = $rt_globals.Array.prototype.slice.apply(arguments);
            $rt_startThread(function() {
                f.apply(this, args);
            });
        };
    }
    function $rt_mainStarter(f) {
        return function(args, callback) {
            if (!args) {
                args = [];
            }
            var javaArgs = $rt_createArray($rt_objcls(), args.length);
            for (var i = 0;i < args.length;++i) {
                javaArgs.data[i] = $rt_str(args[i]);
            }
            $rt_startThread(function() {
                f.call(null, javaArgs);
            }, callback);
        };
    }
    var $rt_stringPool_instance;
    function $rt_stringPool(strings) {
        $rt_stringPool_instance = new $rt_globals.Array(strings.length);
        for (var i = 0;i < strings.length;++i) {
            $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
        }
    }
    function $rt_s(index) {
        return $rt_stringPool_instance[index];
    }
    function $rt_eraseClinit(target) {
        return target.$clinit = function() {
        };
    }
    var $rt_numberConversionBuffer = new $rt_globals.ArrayBuffer(16);
    var $rt_numberConversionView = new $rt_globals.DataView($rt_numberConversionBuffer);
    var $rt_numberConversionFloatArray = new $rt_globals.Float32Array($rt_numberConversionBuffer);
    var $rt_numberConversionDoubleArray = new $rt_globals.Float64Array($rt_numberConversionBuffer);
    var $rt_numberConversionIntArray = new $rt_globals.Int32Array($rt_numberConversionBuffer);
    var $rt_doubleToRawLongBits;
    var $rt_longBitsToDouble;
    if (typeof $rt_globals.BigInt !== 'function') {
        $rt_doubleToRawLongBits = function(n) {
            $rt_numberConversionView.setFloat64(0, n, true);
            return new Long($rt_numberConversionView.getInt32(0, true), $rt_numberConversionView.getInt32(4, true));
        };
        $rt_longBitsToDouble = function(n) {
            $rt_numberConversionView.setInt32(0, n.lo, true);
            $rt_numberConversionView.setInt32(4, n.hi, true);
            return $rt_numberConversionView.getFloat64(0, true);
        };
    } else if (typeof $rt_globals.BigInt64Array !== 'function') {
        $rt_doubleToRawLongBits = function(n) {
            $rt_numberConversionView.setFloat64(0, n, true);
            var lo = $rt_numberConversionView.getInt32(0, true);
            var hi = $rt_numberConversionView.getInt32(4, true);
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(32, $rt_globals.BigInt(lo)) | $rt_globals.BigInt(hi) << $rt_globals.BigInt(32));
        };
        $rt_longBitsToDouble = function(n) {
            $rt_numberConversionView.setFloat64(0, n, true);
            var lo = $rt_numberConversionView.getInt32(0, true);
            var hi = $rt_numberConversionView.getInt32(4, true);
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(32, $rt_globals.BigInt(lo)) | $rt_globals.BigInt(hi) << $rt_globals.BigInt(32));
        };
    } else {
        var $rt_numberConversionLongArray = new $rt_globals.BigInt64Array($rt_numberConversionBuffer);
        $rt_doubleToRawLongBits = function(n) {
            $rt_numberConversionDoubleArray[0] = n;
            return $rt_numberConversionLongArray[0];
        };
        $rt_longBitsToDouble = function(n) {
            $rt_numberConversionLongArray[0] = n;
            return $rt_numberConversionDoubleArray[0];
        };
    }
    function $rt_floatToRawIntBits(n) {
        $rt_numberConversionFloatArray[0] = n;
        return $rt_numberConversionIntArray[0];
    }
    function $rt_intBitsToFloat(n) {
        $rt_numberConversionIntArray[0] = n;
        return $rt_numberConversionFloatArray[0];
    }
    function $rt_equalDoubles(a, b) {
        if (a !== a) {
            return b !== b;
        }
        $rt_numberConversionDoubleArray[0] = a;
        $rt_numberConversionDoubleArray[1] = b;
        return $rt_numberConversionIntArray[0] === $rt_numberConversionIntArray[2] && $rt_numberConversionIntArray[1] === $rt_numberConversionIntArray[3];
    }
    var JavaError;
    if (typeof $rt_globals.Reflect === 'object') {
        var defaultMessage = $rt_globals.Symbol("defaultMessage");
        JavaError = function JavaError(message, cause) {
            var self = $rt_globals.Reflect.construct($rt_globals.Error, [$rt_globals.undefined, cause], JavaError);
            $rt_globals.Object.setPrototypeOf(self, JavaError.prototype);
            self[defaultMessage] = message;
            return self;
        };
        JavaError.prototype = $rt_globals.Object.create($rt_globals.Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get : function() {
            try {
                var javaException = this[$rt_javaExceptionProp];
                if (typeof javaException === 'object') {
                    var javaMessage = $rt_throwableMessage(javaException);
                    if (typeof javaMessage === "object") {
                        return javaMessage !== null ? javaMessage.toString() : null;
                    }
                }
                return this[defaultMessage];
            } catch (e){
                return "Exception occurred trying to extract Java exception message: " + e;
            }
        } } });
    } else {
        JavaError = $rt_globals.Error;
    }
    function $rt_javaException(e) {
        return e instanceof $rt_globals.Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null;
    }
    function $rt_jsException(e) {
        return typeof e.$jsException === 'object' ? e.$jsException : null;
    }
    function $rt_wrapException(err) {
        var ex = err[$rt_javaExceptionProp];
        if (!ex) {
            ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
            err[$rt_javaExceptionProp] = ex;
            ex.$jsException = err;
            $rt_fillStack(err, ex);
        }
        return ex;
    }
    function $dbg_class(obj) {
        var cls = obj.constructor;
        var arrayDegree = 0;
        while (cls.$meta && cls.$meta.item) {
            ++arrayDegree;
            cls = cls.$meta.item;
        }
        var clsName = "";
        if (cls === $rt_booleancls()) {
            clsName = "boolean";
        } else if (cls === $rt_bytecls()) {
            clsName = "byte";
        } else if (cls === $rt_shortcls()) {
            clsName = "short";
        } else if (cls === $rt_charcls()) {
            clsName = "char";
        } else if (cls === $rt_intcls()) {
            clsName = "int";
        } else if (cls === $rt_longcls()) {
            clsName = "long";
        } else if (cls === $rt_floatcls()) {
            clsName = "float";
        } else if (cls === $rt_doublecls()) {
            clsName = "double";
        } else {
            clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
        }
        while (arrayDegree-- > 0) {
            clsName += "[]";
        }
        return clsName;
    }
    function Long(lo, hi) {
        this.lo = lo | 0;
        this.hi = hi | 0;
    }
    Long.prototype.__teavm_class__ = function() {
        return "long";
    };
    function Long_isPositive(a) {
        return (a.hi & 0x80000000) === 0;
    }
    function Long_isNegative(a) {
        return (a.hi & 0x80000000) !== 0;
    }
    var Long_MAX_NORMAL = 1 << 18;
    var Long_ZERO;
    var Long_create;
    var Long_fromInt;
    var Long_fromNumber;
    var Long_toNumber;
    var Long_hi;
    var Long_lo;
    if (typeof $rt_globals.BigInt !== "function") {
        Long.prototype.toString = function() {
            var result = [];
            var n = this;
            var positive = Long_isPositive(n);
            if (!positive) {
                n = Long_neg(n);
            }
            var radix = new Long(10, 0);
            do  {
                var divRem = Long_divRem(n, radix);
                result.push($rt_globals.String.fromCharCode(48 + divRem[1].lo));
                n = divRem[0];
            }while (n.lo !== 0 || n.hi !== 0);
            result = (result.reverse()).join('');
            return positive ? result : "-" + result;
        };
        Long.prototype.valueOf = function() {
            return Long_toNumber(this);
        };
        Long_ZERO = new Long(0, 0);
        Long_fromInt = function(val) {
            return new Long(val,  -(val < 0) | 0);
        };
        Long_fromNumber = function(val) {
            if (val >= 0) {
                return new Long(val | 0, val / 0x100000000 | 0);
            } else {
                return Long_neg(new Long( -val | 0,  -val / 0x100000000 | 0));
            }
        };
        Long_create = function(lo, hi) {
            return new Long(lo, hi);
        };
        Long_toNumber = function(val) {
            return 0x100000000 * val.hi + (val.lo >>> 0);
        };
        Long_hi = function(val) {
            return val.hi;
        };
        Long_lo = function(val) {
            return val.lo;
        };
    } else {
        Long_ZERO = $rt_globals.BigInt(0);
        Long_create = function(lo, hi) {
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(64, $rt_globals.BigInt(lo)) | $rt_globals.BigInt.asUintN(64, $rt_globals.BigInt(hi) << $rt_globals.BigInt(32)));
        };
        Long_fromInt = function(val) {
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt(val | 0));
        };
        Long_fromNumber = function(val) {
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt(val >= 0 ? $rt_globals.Math.floor(val) : $rt_globals.Math.ceil(val)));
        };
        Long_toNumber = function(val) {
            return $rt_globals.Number(val);
        };
        Long_hi = function(val) {
            return $rt_globals.Number($rt_globals.BigInt.asIntN(64, val >> $rt_globals.BigInt(32))) | 0;
        };
        Long_lo = function(val) {
            return $rt_globals.Number($rt_globals.BigInt.asIntN(32, val)) | 0;
        };
    }
    var $rt_imul = $rt_globals.Math.imul || function(a, b) {
        var ah = a >>> 16 & 0xFFFF;
        var al = a & 0xFFFF;
        var bh = b >>> 16 & 0xFFFF;
        var bl = b & 0xFFFF;
        return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
    };
    var $rt_udiv = function(a, b) {
        return (a >>> 0) / (b >>> 0) >>> 0;
    };
    var $rt_umod = function(a, b) {
        return (a >>> 0) % (b >>> 0) >>> 0;
    };
    var $rt_ucmp = function(a, b) {
        a >>>= 0;
        b >>>= 0;
        return a < b ?  -1 : a > b ? 1 : 0;
    };
    function $rt_checkBounds(index, array) {
        if (index < 0 || index >= array.length) {
            $rt_throwAIOOBE();
        }
        return index;
    }
    function $rt_checkUpperBound(index, array) {
        if (index >= array.length) {
            $rt_throwAIOOBE();
        }
        return index;
    }
    function $rt_checkLowerBound(index) {
        if (index < 0) {
            $rt_throwAIOOBE();
        }
        return index;
    }
    function $rt_classWithoutFields(superclass) {
        if (superclass === 0) {
            return function() {
            };
        }
        if (superclass === void 0) {
            superclass = $rt_objcls();
        }
        return function() {
            superclass.call(this);
        };
    }
    function $rt_setCloneMethod(target, f) {
        target.$clone = f;
    }
    function $rt_cls(cls) {
        return jl_Class_getClass(cls);
    }
    function $rt_str(str) {
        if (str === null) {
            return null;
        }
        var characters = $rt_createCharArray(str.length);
        var charsBuffer = characters.data;
        for (var i = 0; i < str.length; i = (i + 1) | 0) {
            charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;
        }
        return jl_String__init_(characters);
    }
    function $rt_ustr(str) {
        if (str === null) {
            return null;
        }
        var data = str.$characters.data;
        var result = "";
        for (var i = 0; i < data.length; i = (i + 1) | 0) {
            result += String.fromCharCode(data[i]);
        }
        return result;
    }
    function $rt_objcls() { return jl_Object; }
    function $rt_stecls() {
        return jl_Object;
    }
    function $rt_throwableMessage(t) {
        return jl_Throwable_getMessage(t);
    }
    function $rt_throwableCause(t) {
        return jl_Throwable_getCause(t);
    }
    function $rt_nullCheck(val) {
        if (val === null) {
            $rt_throw(jl_NullPointerException__init_());
        }
        return val;
    }
    function $rt_intern(str) {
        return str;
    }
    function $rt_getThread() {
        return jl_Thread_currentThread();
    }
    function $rt_setThread(t) {
        return jl_Thread_setCurrentThread(t);
    }
    function $rt_createException(message) {
        return jl_RuntimeException__init_(message);
    }
    function $rt_createStackElement(className, methodName, fileName, lineNumber) {
        return null;
    }
    function $rt_setStack(e, stack) {
    }
    function $rt_throwAIOOBE() {
        $rt_throw(jl_ArrayIndexOutOfBoundsException__init_());
    }
    function $rt_throwCCE() {
    }
    var $java = Object.create(null);
    function jl_Object() {
        this.$id$ = 0;
    }
    function jl_Object_getClass($this) {
        return jl_Class_getClass($this.constructor);
    }
    function jl_Object_toString($this) {
        var var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
        var$1 = jl_Class_getName(jl_Object_getClass($this));
        var$2 = $this;
        if (!var$2.$id$) {
            var$3 = $rt_nextId();
            var$2.$id$ = var$3;
        }
        var$4 = $this.$id$;
        if (!var$4)
            var$3 = $rt_s(0);
        else {
            if (!var$4)
                var$5 = 32;
            else {
                var$6 = 0;
                var$5 = var$4 >>> 16 | 0;
                if (var$5)
                    var$6 = 16;
                else
                    var$5 = var$4;
                var$7 = var$5 >>> 8 | 0;
                if (!var$7)
                    var$7 = var$5;
                else
                    var$6 = var$6 | 8;
                var$5 = var$7 >>> 4 | 0;
                if (!var$5)
                    var$5 = var$7;
                else
                    var$6 = var$6 | 4;
                var$7 = var$5 >>> 2 | 0;
                if (!var$7)
                    var$7 = var$5;
                else
                    var$6 = var$6 | 2;
                if (var$7 >>> 1 | 0)
                    var$6 = var$6 | 1;
                var$5 = (32 - var$6 | 0) - 1 | 0;
            }
            var$5 = (((32 - var$5 | 0) + 4 | 0) - 1 | 0) / 4 | 0;
            var$8 = $rt_createCharArray(var$5);
            var$9 = var$8.data;
            var$6 = (var$5 - 1 | 0) * 4 | 0;
            var$7 = 0;
            while (var$6 >= 0) {
                var$10 = var$7 + 1 | 0;
                var$9[var$7] = jl_Character_forDigit((var$4 >>> var$6 | 0) & 15, 16);
                var$6 = var$6 - 4 | 0;
                var$7 = var$10;
            }
            var$3 = jl_String__init_(var$8);
        }
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$2, var$1), 64), var$3);
        return jl_StringBuilder_toString(var$2);
    }
    function jl_Object_clone($this) {
        var $result, var$2, var$3;
        if (!$rt_isInstance($this, jl_Cloneable) && $this.constructor.$meta.item === null) {
            $result = new jl_CloneNotSupportedException;
            jl_Exception__init_($result);
            $rt_throw($result);
        }
        $result = otp_Platform_clone($this);
        var$2 = $result;
        var$3 = $rt_nextId();
        var$2.$id$ = var$3;
        return $result;
    }
    var cdmC_Client = $rt_classWithoutFields();
    function cdmC_Client_main($args) {
        var $rubyDung, var$3, var$4, $$je, $ptr, $tmp;
        $ptr = 0;
        if ($rt_resuming()) {
            var $thread = $rt_nativeThread();
            $ptr = $thread.pop();var$4 = $thread.pop();var$3 = $thread.pop();$rubyDung = $thread.pop();$args = $thread.pop();
        }
        main: while (true) { switch ($ptr) {
        case 0:
            jl_Integer__clinit_();
            cmr_RubyDung__clinit_();
            jl_Character__clinit_();
            cmrl_Chunk__clinit_();
            otcic_StderrOutputStream__clinit_();
            cmr_Textures__clinit_();
            mr_lwjglkeys__clinit_();
            ji_FileInputStream__clinit_();
            cjj_CRC32__clinit_();
            cjj_Inflate__clinit_();
            jnc_CoderResult__clinit_();
            cjj_InfBlocks__clinit_();
            cjj_InfTree__clinit_();
            cjj_InfCodes__clinit_();
            $rubyDung = cmr_RubyDung_instance;
            a: {
                try {
                    cmr_RubyDung_init($rubyDung);
                    if ($rubyDung.$isCloseRequested)
                        break a;
                    cmr_RubyDung_tick($rubyDung);
                    cmr_RubyDung_render($rubyDung);
                    var$3 = Long_fromInt(16);
                    $ptr = 1;
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_Exception) {
                        $rubyDung = $$je;
                    } else {
                        throw $$e;
                    }
                }
                jl_Throwable_printStackTrace($rubyDung);
                var$4 = $rubyDung.$message;
                $rubyDung = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append($rubyDung, $rt_s(1)), var$4);
                $rt_globals.alert($rt_ustr(jl_StringBuilder_toString($rubyDung)));
            }
            return;
        case 1:
            a: {
                try {
                    jl_Thread_sleep(var$3);
                    if ($rt_suspending()) {
                        break main;
                    }
                    if ($rubyDung.$isCloseRequested)
                        break a;
                    cmr_RubyDung_tick($rubyDung);
                    cmr_RubyDung_render($rubyDung);
                    var$3 = Long_fromInt(16);
                    continue main;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_Exception) {
                        $rubyDung = $$je;
                    } else {
                        throw $$e;
                    }
                }
                jl_Throwable_printStackTrace($rubyDung);
                var$4 = $rubyDung.$message;
                $rubyDung = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append($rubyDung, $rt_s(1)), var$4);
                $rt_globals.alert($rt_ustr(jl_StringBuilder_toString($rubyDung)));
            }
            return;
        default: $rt_invalidPointer();
        }}
        $rt_nativeThread().push($args, $rubyDung, var$3, var$4, $ptr);
    }
    var jlr_AnnotatedElement = $rt_classWithoutFields(0);
    var jlr_Type = $rt_classWithoutFields(0);
    function jl_Class() {
        var a = this; jl_Object.call(a);
        a.$name = null;
        a.$platformClass = null;
    }
    function jl_Class_getClass($cls) {
        var $result, var$3;
        if ($cls === null)
            return null;
        $result = $cls.classObject;
        if ($result === null) {
            $result = new jl_Class;
            $result.$platformClass = $cls;
            var$3 = $result;
            $cls.classObject = var$3;
        }
        return $result;
    }
    function jl_Class_getName($this) {
        if ($this.$name === null)
            $this.$name = $rt_str($this.$platformClass.$meta.name);
        return $this.$name;
    }
    function jl_Class_isPrimitive($this) {
        return $this.$platformClass.$meta.primitive ? 1 : 0;
    }
    function jl_Class_getComponentType($this) {
        return jl_Class_getClass($this.$platformClass.$meta.item);
    }
    var otji_JS = $rt_classWithoutFields();
    function otji_JS_function(var$1, var$2) {
        var name = 'jso$functor$' + var$2;
        if (!var$1[name]) {
            var fn = function() {
                return var$1[var$2].apply(var$1, arguments);
            };
            var$1[name] = function() {
                return fn;
            };
        }
        return var$1[name]();
    }
    function otji_JS_functionAsObject(var$1, var$2) {
        if (typeof var$1 !== "function") return var$1;
        var result = {};
        result[var$2] = var$1;
        return result;
    }
    var otp_Platform = $rt_classWithoutFields();
    function otp_Platform_clone(var$1) {
        var copy = new var$1.constructor();
        for (var field in var$1) {
            if (!var$1.hasOwnProperty(field)) {
                continue;
            }
            copy[field] = var$1[field];
        }
        return copy;
    }
    function otp_Platform_isAssignable($from, $to) {
        var $supertypes, $i;
        if ($from === $to)
            return 1;
        $supertypes = $from.$meta.supertypes;
        $i = 0;
        while ($i < $supertypes.length) {
            if (otp_Platform_isAssignable($supertypes[$i], $to))
                return 1;
            $i = $i + 1 | 0;
        }
        return 0;
    }
    function otp_Platform_launchThread($runnable) {
        var var$2;
        if (!$runnable.$isInterrupted) {
            var$2 = $runnable.$thread;
            var$2.$interruptHandler = null;
            jl_Thread_setCurrentThread(var$2);
            otpp_AsyncCallbackWrapper_complete($runnable.$callback, null);
        }
    }
    function otp_Platform_schedule(var$1, var$2) {
        return setTimeout(function() {
            otp_Platform_launchThread(var$1);
        }, var$2);
    }
    function jl_Throwable() {
        var a = this; jl_Object.call(a);
        a.$message = null;
        a.$cause = null;
        a.$suppressionEnabled = 0;
        a.$writableStackTrace = 0;
        a.$stackTrace = null;
    }
    function jl_Throwable__init_(var_0) {
        var var_1 = new jl_Throwable();
        jl_Throwable__init_0(var_1, var_0);
        return var_1;
    }
    function jl_Throwable__init_1(var_0) {
        var var_1 = new jl_Throwable();
        jl_Throwable__init_2(var_1, var_0);
        return var_1;
    }
    function jl_Throwable__init_0($this, $message) {
        $this.$suppressionEnabled = 1;
        $this.$writableStackTrace = 1;
        $this.$message = $message;
    }
    function jl_Throwable__init_2($this, $cause) {
        $this.$suppressionEnabled = 1;
        $this.$writableStackTrace = 1;
        $this.$cause = $cause;
    }
    function jl_Throwable_fillInStackTrace($this) {
        return $this;
    }
    function jl_Throwable_getMessage($this) {
        return $this.$message;
    }
    function jl_Throwable_getLocalizedMessage($this) {
        return $this.$message;
    }
    function jl_Throwable_getCause($this) {
        var var$1;
        var$1 = $this.$cause;
        if (var$1 === $this)
            var$1 = null;
        return var$1;
    }
    function jl_Throwable_printStackTrace($this) {
        var var$1;
        if (jl_System_errCache === null) {
            var$1 = new ji_PrintStream;
            var$1.$out = otcic_StderrOutputStream_INSTANCE;
            var$1.$sb = jl_StringBuilder__init_();
            var$1.$buffer = $rt_createCharArray(32);
            var$1.$autoFlush = 0;
            jnci_UTF8Charset_$callClinit();
            var$1.$charset = jnci_UTF8Charset_INSTANCE;
            jl_System_errCache = var$1;
        }
        jl_Throwable_printStackTrace0($this, jl_System_errCache);
    }
    function jl_Throwable_printStackTrace0($this, $stream) {
        var var$2, var$3, var$4, var$5, var$6, $element;
        ji_PrintStream_print($stream, jl_Class_getName(jl_Object_getClass($this)));
        var$2 = $this.$message;
        if (var$2 !== null) {
            var$3 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(2)), var$2);
            ji_PrintStream_print($stream, jl_StringBuilder_toString(var$3));
        }
        a: {
            var$4 = $stream.$buffer;
            var$4.data[0] = 10;
            ji_PrintStream_print0($stream, var$4, 0, 1);
            var$4 = $this.$stackTrace;
            if (var$4 !== null) {
                var$4 = var$4.data;
                var$5 = var$4.length;
                var$6 = 0;
                while (true) {
                    if (var$6 >= var$5)
                        break a;
                    $element = var$4[var$6];
                    ji_PrintStream_print($stream, $rt_s(3));
                    jl_StringBuilder_append0(jl_StringBuilder_append($stream.$sb, $element), 10);
                    ji_PrintStream_printSB($stream);
                    var$6 = var$6 + 1 | 0;
                }
            }
        }
        var$3 = $this.$cause;
        if (var$3 !== null && var$3 !== $this) {
            ji_PrintStream_print($stream, $rt_s(4));
            jl_Throwable_printStackTrace0($this.$cause, $stream);
        }
    }
    var jl_Exception = $rt_classWithoutFields(jl_Throwable);
    function jl_Exception__init_0() {
        var var_0 = new jl_Exception();
        jl_Exception__init_(var_0);
        return var_0;
    }
    function jl_Exception__init_1(var_0) {
        var var_1 = new jl_Exception();
        jl_Exception__init_2(var_1, var_0);
        return var_1;
    }
    function jl_Exception__init_($this) {
        $this.$suppressionEnabled = 1;
        $this.$writableStackTrace = 1;
    }
    function jl_Exception__init_2($this, $message) {
        jl_Throwable__init_0($this, $message);
    }
    var jl_RuntimeException = $rt_classWithoutFields(jl_Exception);
    function jl_RuntimeException__init_(var_0) {
        var var_1 = new jl_RuntimeException();
        jl_RuntimeException__init_0(var_1, var_0);
        return var_1;
    }
    function jl_RuntimeException__init_0($this, $message) {
        jl_Throwable__init_0($this, $message);
    }
    var jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException);
    var ji_Serializable = $rt_classWithoutFields(0);
    var jl_Comparable = $rt_classWithoutFields(0);
    var jl_CharSequence = $rt_classWithoutFields(0);
    function jl_String() {
        var a = this; jl_Object.call(a);
        a.$characters = null;
        a.$hashCode = 0;
    }
    var jl_String_EMPTY_CHARS = null;
    var jl_String_EMPTY = null;
    var jl_String_CASE_INSENSITIVE_ORDER = null;
    function jl_String_$callClinit() {
        jl_String_$callClinit = $rt_eraseClinit(jl_String);
        jl_String__clinit_();
    }
    function jl_String__init_(var_0) {
        var var_1 = new jl_String();
        jl_String__init_0(var_1, var_0);
        return var_1;
    }
    function jl_String__init_1(var_0, var_1, var_2) {
        var var_3 = new jl_String();
        jl_String__init_2(var_3, var_0, var_1, var_2);
        return var_3;
    }
    function jl_String__init_0($this, $characters) {
        jl_String_$callClinit();
        jl_String__init_2($this, $characters, 0, $characters.data.length);
    }
    function jl_String__init_2($this, $value, $offset, $count) {
        var var$4;
        jl_String_$callClinit();
        var$4 = $rt_createCharArray($count);
        $this.$characters = var$4;
        jl_System_fastArraycopy($value, $offset, var$4, 0, $count);
    }
    function jl_String_charAt($this, $index) {
        var var$2, var$3;
        if ($index >= 0) {
            var$2 = $this.$characters.data;
            if ($index < var$2.length)
                return var$2[$index];
        }
        var$3 = new jl_StringIndexOutOfBoundsException;
        jl_Exception__init_(var$3);
        $rt_throw(var$3);
    }
    function jl_String_length($this) {
        return $this.$characters.data.length;
    }
    function jl_String_isEmpty($this) {
        return $this.$characters.data.length ? 0 : 1;
    }
    function jl_String_substring($this, $beginIndex, $endIndex) {
        var var$3, var$4;
        var$3 = $rt_compare($beginIndex, $endIndex);
        if (var$3 > 0) {
            var$4 = new jl_IndexOutOfBoundsException;
            jl_Exception__init_(var$4);
            $rt_throw(var$4);
        }
        if (!var$3) {
            jl_String_$callClinit();
            return jl_String_EMPTY;
        }
        if (!$beginIndex && $endIndex == jl_String_length($this))
            return $this;
        return jl_String__init_1($this.$characters, $beginIndex, $endIndex - $beginIndex | 0);
    }
    function jl_String_valueOf($c) {
        var var$2, var$3;
        jl_String_$callClinit();
        var$2 = new jl_String;
        var$3 = $rt_createCharArray(1);
        var$3.data[0] = $c;
        jl_String__init_0(var$2, var$3);
        return var$2;
    }
    function jl_String_equals($this, $str) {
        var $i;
        if ($this === $str)
            return 1;
        if (!($str instanceof jl_String))
            return 0;
        if (jl_String_length($str) != jl_String_length($this))
            return 0;
        $i = 0;
        while ($i < jl_String_length($str)) {
            if (jl_String_charAt($this, $i) != jl_String_charAt($str, $i))
                return 0;
            $i = $i + 1 | 0;
        }
        return 1;
    }
    function jl_String_hashCode($this) {
        var var$1, var$2, var$3, $c;
        a: {
            if (!$this.$hashCode) {
                var$1 = $this.$characters.data;
                var$2 = var$1.length;
                var$3 = 0;
                while (true) {
                    if (var$3 >= var$2)
                        break a;
                    $c = var$1[var$3];
                    $this.$hashCode = (31 * $this.$hashCode | 0) + $c | 0;
                    var$3 = var$3 + 1 | 0;
                }
            }
        }
        return $this.$hashCode;
    }
    function jl_String__clinit_() {
        var var$1, var$2;
        var$1 = $rt_createCharArray(0);
        jl_String_EMPTY_CHARS = var$1;
        var$2 = new jl_String;
        jl_String_$callClinit();
        var$2.$characters = var$1;
        jl_String_EMPTY = var$2;
        jl_String_CASE_INSENSITIVE_ORDER = new jl_String$_clinit_$lambda$_93_0;
    }
    var jl_Error = $rt_classWithoutFields(jl_Throwable);
    var jl_LinkageError = $rt_classWithoutFields(jl_Error);
    var jl_NoClassDefFoundError = $rt_classWithoutFields(jl_LinkageError);
    var jl_Number = $rt_classWithoutFields();
    var jl_Integer = $rt_classWithoutFields(jl_Number);
    var jl_Integer_TYPE = null;
    function jl_Integer__clinit_() {
        jl_Integer_TYPE = $rt_cls($rt_intcls());
    }
    function jl_AbstractStringBuilder() {
        var a = this; jl_Object.call(a);
        a.$buffer0 = null;
        a.$length0 = 0;
    }
    function jl_AbstractStringBuilder_insertSpace($this, $start, $end) {
        var var$3, $sz, $i, var$6;
        var$3 = $this.$length0;
        $sz = var$3 - $start | 0;
        jl_StringBuilder_ensureCapacity($this, (var$3 + $end | 0) - $start | 0);
        $i = $sz - 1 | 0;
        while ($i >= 0) {
            var$6 = $this.$buffer0.data;
            var$6[$end + $i | 0] = var$6[$start + $i | 0];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
    }
    var jl_Appendable = $rt_classWithoutFields(0);
    var jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder);
    function jl_StringBuilder__init_() {
        var var_0 = new jl_StringBuilder();
        jl_StringBuilder__init_0(var_0);
        return var_0;
    }
    function jl_StringBuilder__init_0($this) {
        $this.$buffer0 = $rt_createCharArray(16);
    }
    function jl_StringBuilder_append($this, $obj) {
        var var$2;
        var$2 = $this.$length0;
        if ($obj === null)
            $obj = $rt_s(5);
        jl_StringBuilder_insert($this, var$2, $obj);
        return $this;
    }
    function jl_StringBuilder_append1($this, $string) {
        jl_StringBuilder_insert($this, $this.$length0, $string);
        return $this;
    }
    function jl_StringBuilder_append2($this, $value) {
        var var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9;
        var$2 = $this.$length0;
        var$3 = 1;
        if ($value < 0) {
            var$3 = 0;
            $value =  -$value | 0;
        }
        a: {
            if ($rt_ucmp($value, 10) < 0) {
                if (var$3)
                    jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + 1 | 0);
                else {
                    jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + 2 | 0);
                    var$4 = $this.$buffer0.data;
                    var$5 = var$2 + 1 | 0;
                    var$4[var$2] = 45;
                    var$2 = var$5;
                }
                $this.$buffer0.data[var$2] = jl_Character_forDigit($value, 10);
            } else {
                var$6 = 1;
                var$7 = 1;
                var$5 = $rt_udiv((-1), 10);
                b: {
                    while (true) {
                        var$8 = var$6 * 10 | 0;
                        if ($rt_ucmp(var$8, $value) > 0) {
                            var$8 = var$6;
                            break b;
                        }
                        var$7 = var$7 + 1 | 0;
                        if ($rt_ucmp(var$8, var$5) > 0)
                            break;
                        var$6 = var$8;
                    }
                }
                if (!var$3)
                    var$7 = var$7 + 1 | 0;
                jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + var$7 | 0);
                if (var$3)
                    var$5 = var$2;
                else {
                    var$4 = $this.$buffer0.data;
                    var$5 = var$2 + 1 | 0;
                    var$4[var$2] = 45;
                }
                while (true) {
                    if (!var$8)
                        break a;
                    var$4 = $this.$buffer0.data;
                    var$9 = var$5 + 1 | 0;
                    var$4[var$5] = jl_Character_forDigit($rt_udiv($value, var$8), 10);
                    $value = $rt_umod($value, var$8);
                    var$8 = $rt_udiv(var$8, 10);
                    var$5 = var$9;
                }
            }
        }
        return $this;
    }
    function jl_StringBuilder_append0($this, $c) {
        var var$2;
        var$2 = $this.$length0;
        jl_AbstractStringBuilder_insertSpace($this, var$2, var$2 + 1 | 0);
        $this.$buffer0.data[var$2] = $c;
        return $this;
    }
    function jl_StringBuilder_toString($this) {
        return jl_String__init_1($this.$buffer0, 0, $this.$length0);
    }
    function jl_StringBuilder_ensureCapacity($this, var$1) {
        var var$2, var$3, var$4, var$5;
        var$2 = $this.$buffer0.data.length;
        if (var$2 < var$1) {
            var$1 = var$2 >= 1073741823 ? 2147483647 : jl_Math_max(var$1, jl_Math_max(var$2 * 2 | 0, 5));
            var$3 = $this.$buffer0.data;
            var$4 = $rt_createCharArray(var$1);
            var$5 = var$4.data;
            var$1 = jl_Math_min(var$1, var$3.length);
            var$2 = 0;
            while (var$2 < var$1) {
                var$5[var$2] = var$3[var$2];
                var$2 = var$2 + 1 | 0;
            }
            $this.$buffer0 = var$4;
        }
    }
    function jl_StringBuilder_insert($this, var$1, var$2) {
        var var$3, var$4, var$5;
        if (var$1 >= 0 && var$1 <= $this.$length0) {
            a: {
                if (var$2 === null)
                    var$2 = $rt_s(5);
                else if (jl_String_isEmpty(var$2))
                    break a;
                jl_StringBuilder_ensureCapacity($this, $this.$length0 + jl_String_length(var$2) | 0);
                var$3 = $this.$length0 - 1 | 0;
                while (var$3 >= var$1) {
                    $this.$buffer0.data[var$3 + jl_String_length(var$2) | 0] = $this.$buffer0.data[var$3];
                    var$3 = var$3 + (-1) | 0;
                }
                $this.$length0 = $this.$length0 + jl_String_length(var$2) | 0;
                var$3 = 0;
                while (var$3 < jl_String_length(var$2)) {
                    var$4 = $this.$buffer0.data;
                    var$5 = var$1 + 1 | 0;
                    var$4[var$1] = jl_String_charAt(var$2, var$3);
                    var$3 = var$3 + 1 | 0;
                    var$1 = var$5;
                }
            }
            return $this;
        }
        var$2 = new jl_StringIndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    var jl_IncompatibleClassChangeError = $rt_classWithoutFields(jl_LinkageError);
    var jl_NoSuchFieldError = $rt_classWithoutFields(jl_IncompatibleClassChangeError);
    function jl_NoSuchFieldError__init_(var_0) {
        var var_1 = new jl_NoSuchFieldError();
        jl_NoSuchFieldError__init_0(var_1, var_0);
        return var_1;
    }
    function jl_NoSuchFieldError__init_0($this, $message) {
        jl_Throwable__init_0($this, $message);
    }
    var jl_NoSuchMethodError = $rt_classWithoutFields(jl_IncompatibleClassChangeError);
    function jl_NoSuchMethodError__init_(var_0) {
        var var_1 = new jl_NoSuchMethodError();
        jl_NoSuchMethodError__init_0(var_1, var_0);
        return var_1;
    }
    function jl_NoSuchMethodError__init_0($this, $message) {
        jl_Throwable__init_0($this, $message);
    }
    var jl_Runnable = $rt_classWithoutFields(0);
    function cmr_RubyDung() {
        var a = this; jl_Object.call(a);
        a.$width = 0;
        a.$height = 0;
        a.$level = null;
        a.$levelRenderer = null;
        a.$player = null;
        a.$isCloseRequested = 0;
        a.$gl = null;
        a.$program = null;
    }
    var cmr_RubyDung_instance = null;
    function cmr_RubyDung_init($this) {
        var var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15, $$je;
        $rt_globals.console.log("Starting Minecraft RD-132211");
        var$1 = (otjdh_HTMLDocument_current()).createElement("canvas");
        var$2 = 800;
        var$1.width = var$2;
        var$2 = 600;
        var$1.height = var$2;
        (otjdh_HTMLDocument_current()).body.appendChild(var$1);
        $this.$gl = var$1.getContext("webgl");
        if (otjdh_HTMLDocument_current() === null)
            $rt_globals.console.log("HTMLDocument.current() is null!");
        if (var$1.getContext("webgl") === null)
            $rt_globals.console.log("WebGL context could not be initialized!");
        $this.$width = var$1.width;
        $this.$height = var$1.height;
        $this.$gl.clearColor(0.5, 0.800000011920929, 1.0, 1.0);
        $this.$gl.enable(2929);
        $this.$gl.depthFunc(515);
        var$2 = new cmrl_Level;
        var$2.$levelListeners = ju_ArrayList__init_();
        var$2.$width0 = 256;
        var$2.$height0 = 256;
        var$2.$depth = 64;
        var$3 = $rt_createByteArray(4194304);
        var$4 = var$3.data;
        var$2.$blocks = var$3;
        var$2.$lightDepths = $rt_createIntArray(65536);
        var$5 = 0;
        while (var$5 < 256) {
            var$6 = 0;
            while (var$6 < 64) {
                var$7 = 0;
                while (var$7 < 256) {
                    var$4[(((var$6 * 256 | 0) + var$7 | 0) * 256 | 0) + var$5 | 0] = (var$6 > 42 ? 0 : 1) << 24 >> 24;
                    var$7 = var$7 + 1 | 0;
                }
                var$6 = var$6 + 1 | 0;
            }
            var$5 = var$5 + 1 | 0;
        }
        cmrl_Level_calcLightDepths(var$2, 0, 0, 256, 256);
        a: {
            try {
                var$1 = ji_DataInputStream__init_(juz_GZIPInputStream__init_(ji_FileInputStream__init_(ji_File__init_($rt_s(6)))));
                ji_DataInputStream_readFully(var$1, var$2.$blocks);
                cmrl_Level_calcLightDepths(var$2, 0, 0, var$2.$width0, var$2.$height0);
                var$8 = 0;
                while (var$8 < ju_ArrayList_size(var$2.$levelListeners)) {
                    cmrl_LevelRenderer_allChanged(ju_ArrayList_get(var$2.$levelListeners, var$8));
                    var$8 = var$8 + 1 | 0;
                }
                ji_FilterInputStream_close(var$1);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_Exception) {
                    var$1 = $$je;
                } else {
                    throw $$e;
                }
            }
            jl_Throwable_printStackTrace(var$1);
        }
        $this.$level = var$2;
        var$1 = new cmrl_LevelRenderer;
        var$9 = $this.$gl;
        var$1.$gl0 = var$9;
        var$1.$t = cmrl_Tesselator__init_(var$9);
        var$1.$level0 = var$2;
        ju_ArrayList_add(var$2.$levelListeners, var$1);
        var$8 = var$2.$width0 / 16 | 0;
        var$1.$xChunks = var$8;
        var$10 = var$2.$depth / 16 | 0;
        var$1.$yChunks = var$10;
        var$11 = var$2.$height0 / 16 | 0;
        var$1.$zChunks = var$11;
        var$1.$chunks = $rt_createArray(cmrl_Chunk, $rt_imul($rt_imul(var$8, var$10), var$11));
        var$8 = 0;
        while (var$8 < var$1.$xChunks) {
            var$10 = 0;
            while (var$10 < var$1.$yChunks) {
                var$11 = 0;
                while (var$11 < var$1.$zChunks) {
                    var$12 = var$8 * 16 | 0;
                    var$5 = var$10 * 16 | 0;
                    var$6 = var$11 * 16 | 0;
                    var$7 = jl_Math_min((var$8 + 1 | 0) * 16 | 0, var$2.$width0);
                    var$13 = jl_Math_min((var$10 + 1 | 0) * 16 | 0, var$2.$depth);
                    var$14 = var$11 + 1 | 0;
                    var$15 = jl_Math_min(var$14 * 16 | 0, var$2.$height0);
                    var$1.$chunks.data[$rt_imul(var$8 + $rt_imul(var$10, var$1.$xChunks) | 0, var$1.$zChunks) + var$11 | 0] = cmrl_Chunk__init_(var$9, var$2, var$12, var$5, var$6, var$7, var$13, var$15);
                    var$11 = var$14;
                }
                var$10 = var$10 + 1 | 0;
            }
            var$8 = var$8 + 1 | 0;
        }
        $this.$levelRenderer = var$1;
        var$2 = new cmr_Player;
        var$1 = $this.$level;
        var$2.$onGround = 0;
        var$2.$height1 = 1.7999999523162842;
        var$2.$level1 = var$1;
        cmr_Player_resetPos(var$2);
        $this.$player = var$2;
        if ($this.$level === null)
            $rt_globals.console.log("Level initialization failed!");
        if ($this.$levelRenderer === null)
            $rt_globals.console.log("LevelRenderer initialization failed!");
        $rt_globals.console.log("Initialization complete");
    }
    function cmr_RubyDung_tick($this) {
        cmr_Player_tick($this.$player);
    }
    function cmr_RubyDung_setupShaders($this) {
        var $vertexShader, $vertexShaderSource, $fragmentShader, $fragmentShaderSource;
        $vertexShader = $this.$gl.createShader(35633);
        $this.$gl.shaderSource($vertexShader, "attribute vec3 a_position;void main() {    gl_Position = vec4(a_position, 1.0);}");
        $this.$gl.compileShader($vertexShader);
        if (!($this.$gl.getShaderParameter($vertexShader, 35713) ? 1 : 0)) {
            $vertexShaderSource = $rt_str($this.$gl.getShaderInfoLog($vertexShader));
            $fragmentShader = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append($fragmentShader, $rt_s(7)), $vertexShaderSource);
            $rt_globals.console.log($rt_ustr(jl_StringBuilder_toString($fragmentShader)));
        }
        $fragmentShader = $this.$gl.createShader(35632);
        $this.$gl.shaderSource($fragmentShader, "void main() {    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);}");
        $this.$gl.compileShader($fragmentShader);
        if (!($this.$gl.getShaderParameter($fragmentShader, 35713) ? 1 : 0)) {
            $vertexShaderSource = $rt_str($this.$gl.getShaderInfoLog($fragmentShader));
            $fragmentShaderSource = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append($fragmentShaderSource, $rt_s(8)), $vertexShaderSource);
            $rt_globals.console.log($rt_ustr(jl_StringBuilder_toString($fragmentShaderSource)));
        }
        $fragmentShaderSource = $this.$gl.createProgram();
        $this.$program = $fragmentShaderSource;
        $this.$gl.attachShader($fragmentShaderSource, $vertexShader);
        $vertexShaderSource = $this.$gl;
        $fragmentShaderSource = $this.$program;
        $vertexShaderSource.attachShader($fragmentShaderSource, $fragmentShader);
        $vertexShaderSource = $this.$gl;
        $fragmentShaderSource = $this.$program;
        $vertexShaderSource.linkProgram($fragmentShaderSource);
        $vertexShaderSource = $this.$gl;
        $fragmentShaderSource = $this.$program;
        if (!($vertexShaderSource.getProgramParameter($fragmentShaderSource, 35714) ? 1 : 0)) {
            $vertexShaderSource = $this.$gl;
            $fragmentShaderSource = $this.$program;
            $vertexShaderSource = $rt_str($vertexShaderSource.getProgramInfoLog($fragmentShaderSource));
            $fragmentShaderSource = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append($fragmentShaderSource, $rt_s(9)), $vertexShaderSource);
            $rt_globals.console.log($rt_ustr(jl_StringBuilder_toString($fragmentShaderSource)));
        }
    }
    function cmr_RubyDung_render($this) {
        var var$1, $vertexData, $vertices, $indices, $vertexBuffer, $i, $i_0, var$8, $indexBuffer, var$10, $indexData, $positionLocation;
        if ($this.$program === null)
            cmr_RubyDung_setupShaders($this);
        var$1 = $this.$gl;
        $vertexData = $this.$program;
        var$1.useProgram($vertexData);
        $vertices = $rt_createFloatArray(12).data;
        $vertices[0] = (-0.5);
        $vertices[1] = (-0.5);
        $vertices[2] = 0.0;
        $vertices[3] = 0.5;
        $vertices[4] = (-0.5);
        $vertices[5] = 0.0;
        $vertices[6] = 0.5;
        $vertices[7] = 0.5;
        $vertices[8] = 0.0;
        $vertices[9] = (-0.5);
        $vertices[10] = 0.5;
        $vertices[11] = 0.0;
        $indices = $rt_createShortArray(6).data;
        $indices[0] = 0;
        $indices[1] = 1;
        $indices[2] = 2;
        $indices[3] = 2;
        $indices[4] = 3;
        $indices[5] = 0;
        $vertexBuffer = $this.$gl.createBuffer();
        $this.$gl.bindBuffer(34962, $vertexBuffer);
        $i = $vertices.length;
        $vertexData = new $rt_globals.Float32Array($i);
        $i_0 = 0;
        while ($i_0 < $i) {
            var$8 = $vertices[$i_0];
            $i_0;
            $vertexData[$i_0] = var$8;
            $i_0 = $i_0 + 1 | 0;
        }
        $this.$gl.bufferData(34962, $vertexData, 35044);
        $indexBuffer = $this.$gl.createBuffer();
        $this.$gl.bindBuffer(34963, $indexBuffer);
        var$10 = $indices.length;
        $indexData = new $rt_globals.Int16Array(var$10);
        $i = 0;
        while ($i < var$10) {
            $i_0 = $indices[$i];
            $i;
            $indexData[$i] = $i_0;
            $i = $i + 1 | 0;
        }
        $this.$gl.bufferData(34963, $indexData, 35044);
        var$1 = $this.$gl;
        $vertexData = $this.$program;
        $positionLocation = var$1.getAttribLocation($vertexData, "a_position");
        $this.$gl.enableVertexAttribArray($positionLocation);
        $this.$gl.vertexAttribPointer($positionLocation, 3, 5126, !!0, 0, 0);
        $this.$gl.clear(16640);
        $this.$gl.drawElements(4, var$10, 5123, 0);
    }
    function cmr_RubyDung__clinit_() {
        var var$1;
        var$1 = new cmr_RubyDung;
        var$1.$isCloseRequested = 0;
        cmr_RubyDung_instance = var$1;
    }
    var jl_System = $rt_classWithoutFields();
    var jl_System_errCache = null;
    function jl_System_arraycopy($src, $srcPos, $dest, $destPos, $length) {
        var $srcType, $targetType, $srcArray, $i, var$10, var$11, var$12, $elem, var$14;
        if ($src !== null && $dest !== null) {
            if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
                a: {
                    b: {
                        if ($src !== $dest) {
                            $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                            $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                            if ($srcType !== null && $targetType !== null) {
                                if ($srcType === $targetType)
                                    break b;
                                if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                    $srcArray = $src;
                                    $i = 0;
                                    var$10 = $srcPos;
                                    while ($i < $length) {
                                        var$11 = $srcArray.data;
                                        var$12 = var$10 + 1 | 0;
                                        $elem = var$11[var$10];
                                        var$14 = $targetType.$platformClass;
                                        if (!($elem !== null && !(typeof $elem.constructor.$meta === 'undefined' ? 1 : 0) && otp_Platform_isAssignable($elem.constructor, var$14) ? 1 : 0)) {
                                            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                            $src = new jl_ArrayStoreException;
                                            jl_Exception__init_($src);
                                            $rt_throw($src);
                                        }
                                        $i = $i + 1 | 0;
                                        var$10 = var$12;
                                    }
                                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                    return;
                                }
                                if (!jl_Class_isPrimitive($srcType))
                                    break a;
                                if (jl_Class_isPrimitive($targetType))
                                    break b;
                                else
                                    break a;
                            }
                            $src = new jl_ArrayStoreException;
                            jl_Exception__init_($src);
                            $rt_throw($src);
                        }
                    }
                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                    return;
                }
                $src = new jl_ArrayStoreException;
                jl_Exception__init_($src);
                $rt_throw($src);
            }
            $src = new jl_IndexOutOfBoundsException;
            jl_Exception__init_($src);
            $rt_throw($src);
        }
        $dest = new jl_NullPointerException;
        jl_Throwable__init_0($dest, $rt_s(10));
        $rt_throw($dest);
    }
    function jl_System_fastArraycopy($src, $srcPos, $dest, $destPos, $length) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
            return;
        }
        $src = new jl_IndexOutOfBoundsException;
        jl_Exception__init_($src);
        $rt_throw($src);
    }
    function jl_System_doArrayCopy(var$1, var$2, var$3, var$4, var$5) {
        if (var$5 === 0) {
            return; 
        } else if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (var i = 0; i < var$5; i = (i + 1) | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = (var$2 + var$5) | 0;
            var$4 = (var$4 + var$5) | 0;
            for (var i = 0; i < var$5; i = (i + 1) | 0) {
                var$3.data[--var$4] = var$1.data[--var$2];
            }
        }
    }
    function jl_System_currentTimeMillis() {
        return Long_fromNumber(new Date().getTime());
    }
    var otci_IntegerUtil = $rt_classWithoutFields();
    var ju_Comparator = $rt_classWithoutFields(0);
    var jl_String$_clinit_$lambda$_93_0 = $rt_classWithoutFields();
    var jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException);
    var jlr_Array = $rt_classWithoutFields();
    function jlr_Array_getLength(var$1) {
        if (var$1 === null || var$1.constructor.$meta.item === undefined) {
            $rt_throw(jl_IllegalArgumentException__init_());
        }
        return var$1.data.length;
    }
    function jlr_Array_newInstanceImpl(var$1, var$2) {
        if (var$1.$meta.primitive) {
            if (var$1 == $rt_bytecls()) {
                return $rt_createByteArray(var$2);
            }
            if (var$1 == $rt_shortcls()) {
                return $rt_createShortArray(var$2);
            }
            if (var$1 == $rt_charcls()) {
                return $rt_createCharArray(var$2);
            }
            if (var$1 == $rt_ıntcls()) {
                return $rt_createIntArray(var$2);
            }
            if (var$1 == $rt_longcls()) {
                return $rt_createLongArray(var$2);
            }
            if (var$1 == $rt_floatcls()) {
                return $rt_createFloatArray(var$2);
            }
            if (var$1 == $rt_doublecls()) {
                return $rt_createDoubleArray(var$2);
            }
            if (var$1 == $rt_booleancls()) {
                return $rt_createBooleanArray(var$2);
            }
        } else {
            return $rt_createArray(var$1, var$2)
        }
    }
    var jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException);
    var jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException);
    var jl_Character = $rt_classWithoutFields();
    var jl_Character_TYPE = null;
    var jl_Character_characterCache = null;
    function jl_Character_isHighSurrogate($ch) {
        return ($ch & 64512) != 55296 ? 0 : 1;
    }
    function jl_Character_isLowSurrogate($ch) {
        return ($ch & 64512) != 56320 ? 0 : 1;
    }
    function jl_Character_forDigit($digit, $radix) {
        if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
            return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
        return 0;
    }
    function jl_Character__clinit_() {
        jl_Character_TYPE = $rt_cls($rt_charcls());
        jl_Character_characterCache = $rt_createArray(jl_Character, 128);
    }
    function jl_Thread() {
        var a = this; jl_Object.call(a);
        a.$id = Long_ZERO;
        a.$timeSliceStart = Long_ZERO;
        a.$finishedLock = null;
        a.$interruptHandler = null;
        a.$name0 = null;
        a.$alive = 0;
        a.$target = null;
    }
    var jl_Thread_mainThread = null;
    var jl_Thread_currentThread0 = null;
    var jl_Thread_nextId = 0;
    var jl_Thread_activeCount = 0;
    var jl_Thread_defaultUncaughtExceptionHandler = null;
    function jl_Thread_$callClinit() {
        jl_Thread_$callClinit = $rt_eraseClinit(jl_Thread);
        jl_Thread__clinit_();
    }
    function jl_Thread_setCurrentThread($thread_0) {
        jl_Thread_$callClinit();
        if (jl_Thread_currentThread0 !== $thread_0)
            jl_Thread_currentThread0 = $thread_0;
        jl_Thread_currentThread0.$timeSliceStart = jl_System_currentTimeMillis();
    }
    function jl_Thread_currentThread() {
        jl_Thread_$callClinit();
        return jl_Thread_currentThread0;
    }
    function jl_Thread_sleep(var$1) {
        var $ptr, $tmp;
        $ptr = 0;
        if ($rt_resuming()) {
            var $thread = $rt_nativeThread();
            $ptr = $thread.pop();var$1 = $thread.pop();
        }
        main: while (true) { switch ($ptr) {
        case 0:
            jl_Thread_$callClinit();
            $ptr = 1;
        case 1:
            jl_Thread_sleep$_asyncCall_$(var$1);
            if ($rt_suspending()) {
                break main;
            }
            return;
        default: $rt_invalidPointer();
        }}
        $rt_nativeThread().push(var$1, $ptr);
    }
    function jl_Thread_sleep0($millis, $callback) {
        var $current, $handler;
        jl_Thread_$callClinit();
        $current = jl_Thread_currentThread();
        $handler = new jl_Thread$SleepHandler;
        $handler.$thread = $current;
        $handler.$callback = $callback;
        $handler.$scheduleId = otp_Platform_schedule($handler, Long_ge($millis, Long_fromInt(2147483647)) ? 2147483647 : Long_lo($millis));
        $current.$interruptHandler = $handler;
    }
    function jl_Thread__clinit_() {
        var var$1, var$2, var$3;
        var$1 = new jl_Thread;
        jl_Thread_$callClinit();
        var$2 = null;
        var$1.$finishedLock = new jl_Object;
        var$1.$alive = 1;
        var$1.$name0 = $rt_s(11);
        var$1.$target = var$2;
        var$3 = jl_Thread_nextId;
        jl_Thread_nextId = var$3 + 1 | 0;
        var$1.$id = Long_fromInt(var$3);
        jl_Thread_mainThread = var$1;
        jl_Thread_currentThread0 = var$1;
        jl_Thread_nextId = 1;
        jl_Thread_activeCount = 1;
        jl_Thread_defaultUncaughtExceptionHandler = new jl_DefaultUncaughtExceptionHandler;
    }
    function jl_Thread_sleep$_asyncCall_$(var$1) {
        var thread = $rt_nativeThread();
        var javaThread = $rt_getThread();
        if (thread.isResuming()) {
            thread.status = 0;
            var result = thread.attribute;
            if (result instanceof Error) {
                throw result;
            }
            return result;
        }
        var callback = function() {};
        callback.$complete = function(val) {
            thread.attribute = val;
            $rt_setThread(javaThread);
            thread.resume();
        };
        callback.$error = function(e) {
            thread.attribute = $rt_exception(e);
            $rt_setThread(javaThread);
            thread.resume();
        };
        callback = otpp_AsyncCallbackWrapper_create(callback);
        thread.suspend(function() {
            try {
                jl_Thread_sleep0(var$1, callback);
            } catch($e) {
                callback.$error($rt_exception($e));
            }
        });
        return null;
    }
    var jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException);
    var otj_JSObject = $rt_classWithoutFields(0);
    var otjt_ArrayBufferView = $rt_classWithoutFields();
    var otjt_Float32Array = $rt_classWithoutFields(otjt_ArrayBufferView);
    var otjt_Int16Array = $rt_classWithoutFields(otjt_ArrayBufferView);
    function cmr_Player() {
        var a = this; jl_Object.call(a);
        a.$level1 = null;
        a.$xo = 0.0;
        a.$yo = 0.0;
        a.$zo = 0.0;
        a.$x = 0.0;
        a.$y = 0.0;
        a.$z = 0.0;
        a.$xd = 0.0;
        a.$yd = 0.0;
        a.$zd = 0.0;
        a.$yRot = 0.0;
        a.$bb = null;
        a.$onGround = 0;
        a.$height1 = 0.0;
    }
    function cmr_Player_resetPos($this) {
        var $x, var$2, $y, $z;
        $x = jl_Math_random();
        var$2 = $this.$level1;
        $x = $x * var$2.$width0;
        $y = var$2.$depth + 10 | 0;
        $z = jl_Math_random() * $this.$level1.$height0;
        $this.$x = $x;
        $this.$y = $y;
        $this.$z = $z;
        $this.$bb = cmrp_AABB__init_($x - 0.30000001192092896, $y - 0.8999999761581421, $z - 0.30000001192092896, $x + 0.30000001192092896, $y + 0.8999999761581421, $z + 0.30000001192092896);
    }
    function cmr_Player_tick($this) {
        var $xa, $ya, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14, var$15, var$16;
        $this.$xo = $this.$x;
        $this.$yo = $this.$y;
        $this.$zo = $this.$z;
        $xa = 0.0;
        $ya = 0.0;
        if (oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_R))
            cmr_Player_resetPos($this);
        if (!(!oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_UP) && !oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_W)))
            $ya = (-1.0);
        if (!(!oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_DOWN) && !oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_S)))
            $ya = $ya + 1.0;
        if (!(!oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_LEFT) && !oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_A)))
            $xa = (-1.0);
        if (!(!oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_RIGHT) && !oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_D)))
            $xa = $xa + 1.0;
        if (!(!oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_SPACE) && !oli_Keyboard_isKeyDown(mr_lwjglkeys_KEY_LMETA)) && $this.$onGround)
            $this.$yd = 0.11999999731779099;
        var$3 = !$this.$onGround ? 0.004999999888241291 : 0.019999999552965164;
        var$4 = $xa * $xa + $ya * $ya;
        if (var$4 >= 0.009999999776482582) {
            var$3 = var$3 / jl_Math_sqrt(var$4);
            $xa = $xa * var$3;
            $ya = $ya * var$3;
            var$3 = jl_Math_sin($this.$yRot * 3.141592653589793 / 180.0);
            var$4 = jl_Math_cos($this.$yRot * 3.141592653589793 / 180.0);
            $this.$xd = $this.$xd + $xa * var$4 - $ya * var$3;
            $this.$zd = $this.$zd + $ya * var$4 + $xa * var$3;
        }
        $xa = $this.$yd - 0.005;
        $this.$yd = $xa;
        $ya = $this.$xd;
        var$3 = $this.$zd;
        var$5 = $this.$level1;
        var$6 = $this.$bb;
        var$7 = var$6.$x0;
        var$8 = var$6.$y0;
        var$9 = var$6.$z0;
        var$10 = var$6.$x1;
        var$11 = var$6.$y1;
        var$12 = var$6.$z1;
        var$13 = $rt_compare($ya, 0.0);
        if (var$13 < 0)
            var$7 = var$7 + $ya;
        if (var$13 > 0)
            var$10 = var$10 + $ya;
        var$14 = $rt_compare($xa, 0.0);
        if (var$14 < 0)
            var$8 = var$8 + $xa;
        if (var$14 > 0)
            var$11 = var$11 + $xa;
        var$13 = $rt_compare(var$3, 0.0);
        if (var$13 < 0)
            var$9 = var$9 + var$3;
        if (var$13 > 0)
            var$12 = var$12 + var$3;
        var$15 = cmrl_Level_getCubes(var$5, cmrp_AABB__init_(var$7, var$8, var$9, var$10, var$11, var$12));
        var$16 = 0;
        var$9 = $xa;
        while (var$16 < var$15.$size0) {
            var$9 = cmrp_AABB_clipYCollide(ju_ArrayList_get(var$15, var$16), $this.$bb, var$9);
            var$16 = var$16 + 1 | 0;
        }
        cmrp_AABB_move($this.$bb, 0.0, var$9, 0.0);
        var$16 = 0;
        var$10 = $ya;
        while (var$16 < var$15.$size0) {
            var$10 = cmrp_AABB_clipXCollide(ju_ArrayList_get(var$15, var$16), $this.$bb, var$10);
            var$16 = var$16 + 1 | 0;
        }
        cmrp_AABB_move($this.$bb, var$10, 0.0, 0.0);
        var$13 = 0;
        var$4 = var$3;
        while (var$13 < var$15.$size0) {
            var$4 = cmrp_AABB_clipZCollide(ju_ArrayList_get(var$15, var$13), $this.$bb, var$4);
            var$13 = var$13 + 1 | 0;
        }
        cmrp_AABB_move($this.$bb, 0.0, 0.0, var$4);
        var$13 = $rt_compare($xa, var$9);
        var$16 = var$13 && var$14 < 0 ? 1 : 0;
        $this.$onGround = var$16;
        if ($ya !== var$10)
            $this.$xd = 0.0;
        if (var$13)
            $this.$yd = 0.0;
        if (var$3 !== var$4)
            $this.$zd = 0.0;
        var$6 = $this.$bb;
        $this.$x = (var$6.$x0 + var$6.$x1) / 2.0;
        $this.$y = var$6.$y0 + 1.6200000047683716;
        $this.$z = (var$6.$z0 + var$6.$z1) / 2.0;
        $xa = $this.$xd * 0.9100000262260437;
        $this.$xd = $xa;
        $this.$yd = $this.$yd * 0.9800000190734863;
        $ya = $this.$zd * 0.9100000262260437;
        $this.$zd = $ya;
        if (var$16) {
            $this.$xd = $xa * 0.800000011920929;
            $this.$zd = $ya * 0.800000011920929;
        }
    }
    var jl_Thread$UncaughtExceptionHandler = $rt_classWithoutFields(0);
    var jl_DefaultUncaughtExceptionHandler = $rt_classWithoutFields();
    var oti_AsyncCallback = $rt_classWithoutFields(0);
    function otpp_AsyncCallbackWrapper() {
        jl_Object.call(this);
        this.$realAsyncCallback = null;
    }
    function otpp_AsyncCallbackWrapper_create($realAsyncCallback) {
        var var$2;
        var$2 = new otpp_AsyncCallbackWrapper;
        var$2.$realAsyncCallback = $realAsyncCallback;
        return var$2;
    }
    function otpp_AsyncCallbackWrapper_complete($this, $result) {
        $this.$realAsyncCallback.$complete($result);
    }
    function otpp_AsyncCallbackWrapper_error($this, $e) {
        $this.$realAsyncCallback.$error($e);
    }
    var otp_PlatformRunnable = $rt_classWithoutFields(0);
    var otr_EventQueue$Event = $rt_classWithoutFields(0);
    var jl_ThreadInterruptHandler = $rt_classWithoutFields(0);
    function jl_Thread$SleepHandler() {
        var a = this; jl_Object.call(a);
        a.$thread = null;
        a.$callback = null;
        a.$isInterrupted = 0;
        a.$scheduleId = 0;
    }
    var otjdx_Node = $rt_classWithoutFields(0);
    var otjdx_Document = $rt_classWithoutFields(0);
    var otjde_EventTarget = $rt_classWithoutFields(0);
    var otjdh_HTMLDocument = $rt_classWithoutFields(0);
    function otjdh_HTMLDocument_current() {
        return $rt_globals.window.document;
    }
    function cmrl_Level() {
        var a = this; jl_Object.call(a);
        a.$width0 = 0;
        a.$height0 = 0;
        a.$depth = 0;
        a.$blocks = null;
        a.$lightDepths = null;
        a.$levelListeners = null;
    }
    function cmrl_Level_calcLightDepths($this, $x, $y0, $x1, $y1) {
        var var$5, $z, $yl1, $yl1_0, $yl0, $i, var$11;
        var$5 = $x + $x1 | 0;
        $x1 = $y0 + $y1 | 0;
        while ($x < var$5) {
            $z = $y0;
            while ($z < $x1) {
                $yl1 = $this.$lightDepths.data[$x + $rt_imul($z, $this.$width0) | 0];
                $yl1_0 = $this.$depth - 1 | 0;
                while ($yl1_0 > 0 && !cmrl_Level_isSolidTile($this, $x, $yl1_0, $z)) {
                    $yl1_0 = $yl1_0 + (-1) | 0;
                }
                a: {
                    $this.$lightDepths.data[$x + $rt_imul($z, $this.$width0) | 0] = $yl1_0;
                    $y1 = $rt_compare($yl1, $yl1_0);
                    if ($y1) {
                        $yl0 = $y1 >= 0 ? $yl1_0 : $yl1;
                        if ($y1 > 0)
                            $yl1_0 = $yl1;
                        $i = 0;
                        while (true) {
                            var$11 = $this.$levelListeners;
                            if ($i >= var$11.$size0)
                                break a;
                            cmrl_LevelRenderer_setDirty(ju_ArrayList_get(var$11, $i), $x - 1 | 0, $yl0 - 1 | 0, $z - 1 | 0, $x + 1 | 0, $yl1_0 + 1 | 0, $z + 1 | 0);
                            $i = $i + 1 | 0;
                        }
                    }
                }
                $z = $z + 1 | 0;
            }
            $x = $x + 1 | 0;
        }
    }
    function cmrl_Level_isSolidTile($this, $x, $y, $z) {
        var var$4, var$5;
        a: {
            if ($x >= 0 && $y >= 0 && $z >= 0) {
                var$4 = $this.$width0;
                if ($x < var$4 && $y < $this.$depth) {
                    var$5 = $this.$height0;
                    if ($z < var$5) {
                        if ($this.$blocks.data[$rt_imul($rt_imul($y, var$5) + $z | 0, var$4) + $x | 0] != 1) {
                            $x = 0;
                            break a;
                        }
                        $x = 1;
                        break a;
                    }
                }
            }
            $x = 0;
        }
        return $x;
    }
    function cmrl_Level_getCubes($this, $aABB) {
        var $aABBs, $x, $x1, $y0, $y1, $z0, $z1, var$9, var$10, $y, $z;
        $aABBs = ju_ArrayList__init_();
        $x = $aABB.$x0 | 0;
        $x1 = $aABB.$x1 + 1.0 | 0;
        $y0 = $aABB.$y0 | 0;
        $y1 = $aABB.$y1 + 1.0 | 0;
        $z0 = $aABB.$z0 | 0;
        $z1 = $aABB.$z1 + 1.0 | 0;
        if ($x < 0)
            $x = 0;
        if ($y0 < 0)
            $y0 = 0;
        if ($z0 < 0)
            $z0 = 0;
        var$9 = $this.$width0;
        if ($x1 <= var$9)
            var$9 = $x1;
        $x1 = $this.$depth;
        if ($y1 <= $x1)
            $x1 = $y1;
        var$10 = $this.$height0;
        if ($z1 <= var$10)
            var$10 = $z1;
        while ($x < var$9) {
            $y = $y0;
            while ($y < $x1) {
                $z = $z0;
                while ($z < var$10) {
                    if (cmrl_Level_isSolidTile($this, $x, $y, $z))
                        ju_ArrayList_add($aABBs, cmrp_AABB__init_($x, $y, $z, $x + 1 | 0, $y + 1 | 0, $z + 1 | 0));
                    $z = $z + 1 | 0;
                }
                $y = $y + 1 | 0;
            }
            $x = $x + 1 | 0;
        }
        return $aABBs;
    }
    var cmrl_LevelListener = $rt_classWithoutFields(0);
    function cmrl_LevelRenderer() {
        var a = this; jl_Object.call(a);
        a.$level0 = null;
        a.$chunks = null;
        a.$xChunks = 0;
        a.$yChunks = 0;
        a.$zChunks = 0;
        a.$t = null;
        a.$gl0 = null;
    }
    function cmrl_LevelRenderer_setDirty($this, $x0, $y0, $z0, $x1, $y1, $z1) {
        var $y, $z, $x;
        $x0 = $x0 / 16 | 0;
        $x1 = $x1 / 16 | 0;
        $y = $y0 / 16 | 0;
        $z = $y1 / 16 | 0;
        $y0 = $z0 / 16 | 0;
        $z0 = $z1 / 16 | 0;
        $x = jl_Math_max(0, $x0);
        $x0 = jl_Math_max(0, $y);
        $y0 = jl_Math_max(0, $y0);
        $x1 = jl_Math_min($this.$xChunks - 1 | 0, $x1);
        $y1 = jl_Math_min($this.$yChunks - 1 | 0, $z);
        $z0 = jl_Math_min($this.$zChunks - 1 | 0, $z0);
        while ($x <= $x1) {
            $y = $x0;
            while ($y <= $y1) {
                $z = $y0;
                while ($z <= $z0) {
                    $this.$chunks.data[$rt_imul($x + $rt_imul($y, $this.$xChunks) | 0, $this.$zChunks) + $z | 0].$dirty = 1;
                    $z = $z + 1 | 0;
                }
                $y = $y + 1 | 0;
            }
            $x = $x + 1 | 0;
        }
    }
    function cmrl_LevelRenderer_allChanged($this) {
        var var$1;
        var$1 = $this.$level0;
        cmrl_LevelRenderer_setDirty($this, 0, 0, 0, var$1.$width0, var$1.$depth, var$1.$height0);
    }
    var otjde_FocusEventTarget = $rt_classWithoutFields(0);
    var otjde_MouseEventTarget = $rt_classWithoutFields(0);
    var otjde_KeyboardEventTarget = $rt_classWithoutFields(0);
    var otjde_LoadEventTarget = $rt_classWithoutFields(0);
    var otjde_GamepadEventTarget = $rt_classWithoutFields(0);
    var otjb_WindowEventTarget = $rt_classWithoutFields(0);
    var otjb_StorageProvider = $rt_classWithoutFields(0);
    var otjc_JSArrayReader = $rt_classWithoutFields(0);
    var otjb_Window = $rt_classWithoutFields();
    function otjb_Window_get$exported$0(var$0, var$1) {
        var$1 = var$0.$get(var$1);
        otji_JSWrapper_$callClinit();
        return var$1 === null ? null : var$1 instanceof $rt_objcls() && var$1 instanceof otji_JSWrapper ? otji_JSWrapper_unwrap(var$1) : var$1;
    }
    function otjb_Window_addEventListener$exported$1(var$0, var$1, var$2) {
        var$0.$addEventListener($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"));
    }
    function otjb_Window_removeEventListener$exported$2(var$0, var$1, var$2) {
        var$0.$removeEventListener($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"));
    }
    function otjb_Window_removeEventListener$exported$3(var$0, var$1, var$2, var$3) {
        var$0.$removeEventListener0($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"), var$3 ? 1 : 0);
    }
    function otjb_Window_dispatchEvent$exported$4(var$0, var$1) {
        return !!var$0.$dispatchEvent(var$1);
    }
    function otjb_Window_getLength$exported$5(var$0) {
        return var$0.$getLength0();
    }
    function otjb_Window_addEventListener$exported$6(var$0, var$1, var$2, var$3) {
        var$0.$addEventListener0($rt_str(var$1), otji_JS_functionAsObject(var$2, "handleEvent"), var$3 ? 1 : 0);
    }
    var jl_Iterable = $rt_classWithoutFields(0);
    var ju_Collection = $rt_classWithoutFields(0);
    var ju_AbstractCollection = $rt_classWithoutFields();
    var ju_SequencedCollection = $rt_classWithoutFields(0);
    var ju_List = $rt_classWithoutFields(0);
    function ju_AbstractList() {
        ju_AbstractCollection.call(this);
        this.$modCount = 0;
    }
    var jl_Cloneable = $rt_classWithoutFields(0);
    var ju_RandomAccess = $rt_classWithoutFields(0);
    function ju_ArrayList() {
        var a = this; ju_AbstractList.call(a);
        a.$array = null;
        a.$size0 = 0;
    }
    function ju_ArrayList__init_() {
        var var_0 = new ju_ArrayList();
        ju_ArrayList__init_0(var_0);
        return var_0;
    }
    function ju_ArrayList__init_0($this) {
        $this.$array = $rt_createArray(jl_Object, 10);
    }
    function ju_ArrayList_get($this, $index) {
        var var$2;
        if ($index >= 0 && $index < $this.$size0)
            return $this.$array.data[$index];
        var$2 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$2);
        $rt_throw(var$2);
    }
    function ju_ArrayList_size($this) {
        return $this.$size0;
    }
    function ju_ArrayList_add($this, $element) {
        var var$2, var$3, var$4, var$5, var$6;
        var$2 = $this.$size0 + 1 | 0;
        var$3 = $this.$array.data.length;
        if (var$3 < var$2) {
            var$2 = var$3 >= 1073741823 ? 2147483647 : jl_Math_max(var$2, jl_Math_max(var$3 * 2 | 0, 5));
            var$4 = $this.$array;
            var$5 = jl_Class_getComponentType(jl_Object_getClass(var$4));
            if (var$5 === null) {
                $element = new jl_NullPointerException;
                jl_Exception__init_($element);
                $rt_throw($element);
            }
            if (var$5 === $rt_cls($rt_voidcls())) {
                $element = new jl_IllegalArgumentException;
                jl_Exception__init_($element);
                $rt_throw($element);
            }
            if (var$2 < 0) {
                $element = new jl_NegativeArraySizeException;
                jl_Exception__init_($element);
                $rt_throw($element);
            }
            var$4 = var$4.data;
            var$5 = jlr_Array_newInstanceImpl(var$5.$platformClass, var$2);
            var$6 = jl_Math_min(var$2, var$4.length);
            var$3 = 0;
            while (var$3 < var$6) {
                var$5.data[var$3] = var$4[var$3];
                var$3 = var$3 + 1 | 0;
            }
            $this.$array = var$5;
        }
        var$4 = $this.$array.data;
        var$6 = $this.$size0;
        $this.$size0 = var$6 + 1 | 0;
        var$4[var$6] = $element;
        $this.$modCount = $this.$modCount + 1 | 0;
        return 1;
    }
    function cmrl_Tesselator() {
        var a = this; jl_Object.call(a);
        a.$gl1 = null;
        a.$vertexData = null;
        a.$texCoordData = null;
        a.$colorData = null;
        a.$vertices = 0;
        a.$hasColor = 0;
        a.$hasTexture = 0;
        a.$vertexBuffer = null;
        a.$texCoordBuffer = null;
        a.$colorBuffer = null;
    }
    function cmrl_Tesselator__init_(var_0) {
        var var_1 = new cmrl_Tesselator();
        cmrl_Tesselator__init_0(var_1, var_0);
        return var_1;
    }
    function cmrl_Tesselator__init_0($this, $gl) {
        $this.$vertexData = $rt_createFloatArray(300000);
        $this.$texCoordData = $rt_createFloatArray(200000);
        $this.$colorData = $rt_createFloatArray(300000);
        $this.$vertices = 0;
        $this.$hasColor = 0;
        $this.$hasTexture = 0;
        $this.$gl1 = $gl;
        $this.$vertexBuffer = $gl.createBuffer();
        $this.$texCoordBuffer = $gl.createBuffer();
        $this.$colorBuffer = $gl.createBuffer();
    }
    function cmrl_Chunk() {
        var a = this; jl_Object.call(a);
        a.$aabb = null;
        a.$level2 = null;
        a.$x00 = 0;
        a.$y00 = 0;
        a.$z00 = 0;
        a.$x10 = 0;
        a.$y10 = 0;
        a.$z10 = 0;
        a.$dirty = 0;
        a.$buffers = null;
        a.$texture = null;
        a.$gl2 = null;
    }
    var cmrl_Chunk_rebuiltThisFrame = 0;
    var cmrl_Chunk_updates = 0;
    function cmrl_Chunk__init_(var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7) {
        var var_8 = new cmrl_Chunk();
        cmrl_Chunk__init_0(var_8, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7);
        return var_8;
    }
    function cmrl_Chunk__init_0($this, $gl, $level, $x0, $y0, $z0, $x1, $y1, $z1) {
        var var$9, var$10, var$11, var$12;
        $this.$dirty = 1;
        $this.$buffers = $rt_createArray(otji_JSWrapper, 2);
        $this.$gl2 = $gl;
        $this.$level2 = $level;
        $this.$x00 = $x0;
        $this.$y00 = $y0;
        $this.$z00 = $z0;
        $this.$x10 = $x1;
        $this.$y10 = $y1;
        $this.$z10 = $z1;
        $this.$aabb = cmrp_AABB__init_($x0, $y0, $z0, $x1, $y1, $z1);
        $this.$buffers.data[0] = otji_JSWrapper_wrap($gl.createBuffer());
        $this.$buffers.data[1] = otji_JSWrapper_wrap($gl.createBuffer());
        var$9 = new cmrl_Chunk$_init_$lambda$_0_0;
        var$9.$_0 = $this;
        var$10 = (otjdh_HTMLDocument_current()).createElement("img");
        var$11 = "anonymous";
        var$10.crossOrigin = var$11;
        var$11 = "http://localhost:8000/terrain.png";
        var$10.src = var$11;
        if (var$10 === null) {
            $gl = new jl_RuntimeException;
            jl_Throwable__init_0($gl, $rt_s(12));
            $rt_throw($gl);
        }
        var$12 = new cmr_Textures$loadTexture$lambda$_1_0;
        var$12.$_00 = var$10;
        var$12.$_1 = $gl;
        var$12.$_2 = 9729;
        var$12.$_3 = $rt_s(13);
        var$12.$_4 = var$9;
        var$10.addEventListener("load", otji_JS_function(var$12, "handleEvent"));
        var$12 = new cmr_Textures$loadTexture$lambda$_1_1;
        var$12.$_01 = $rt_s(13);
        var$10.addEventListener("load", otji_JS_function(var$12, "handleEvent"));
        var$9 = new cmr_Textures$loadTexture$lambda$_1_2;
        var$9.$_02 = $rt_s(13);
        var$10.addEventListener("error", otji_JS_function(var$9, "handleEvent"));
    }
    function cmrl_Chunk__clinit_() {
        cmrl_Chunk_rebuiltThisFrame = 0;
        cmrl_Chunk_updates = 0;
    }
    var jl_Math = $rt_classWithoutFields();
    function jl_Math_sin(var$1) {
        return Math.sin(var$1);
    }
    function jl_Math_cos(var$1) {
        return Math.cos(var$1);
    }
    function jl_Math_sqrt(var$1) {
        return Math.sqrt(var$1);
    }
    function jl_Math_random() {
        return jl_Math_randomImpl();
    }
    function jl_Math_randomImpl() {
        return Math.random();
    }
    function jl_Math_min($a, $b) {
        if ($a < $b)
            $b = $a;
        return $b;
    }
    function jl_Math_max($a, $b) {
        if ($a > $b)
            $b = $a;
        return $b;
    }
    var jl_AutoCloseable = $rt_classWithoutFields(0);
    var ji_Closeable = $rt_classWithoutFields(0);
    var ji_Flushable = $rt_classWithoutFields(0);
    var ji_OutputStream = $rt_classWithoutFields();
    function ji_FilterOutputStream() {
        ji_OutputStream.call(this);
        this.$out = null;
    }
    function ji_PrintStream() {
        var a = this; ji_FilterOutputStream.call(a);
        a.$autoFlush = 0;
        a.$errorState = 0;
        a.$sb = null;
        a.$buffer = null;
        a.$charset = null;
    }
    function ji_PrintStream_write($this, $b, $off, $len) {
        var var$4, $$je;
        var$4 = $this.$out;
        if (var$4 === null)
            $this.$errorState = 1;
        if (!($this.$errorState ? 0 : 1))
            return;
        a: {
            try {
                otcic_StderrOutputStream_write(var$4, $b, $off, $len);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof ji_IOException) {
                } else {
                    throw $$e;
                }
            }
            $this.$errorState = 1;
        }
    }
    function ji_PrintStream_print0($this, $s, $begin, $end) {
        var $destBytes, $src, var$6, var$7, var$8, var$9, var$10, var$11, var$12, $overflow, $$je;
        $destBytes = $s.data;
        $end = $end - $begin | 0;
        $src = new jn_CharBufferOverArray;
        var$6 = $destBytes.length;
        var$7 = $begin + $end | 0;
        jn_Buffer__init_($src, var$6);
        $src.$position = $begin;
        $src.$limit = var$7;
        $src.$start = 0;
        $src.$readOnly = 0;
        $src.$array0 = $s;
        $destBytes = $rt_createByteArray(jl_Math_max(16, jl_Math_min($end, 1024)));
        $end = $destBytes.data.length;
        var$8 = new jn_ByteBufferImpl;
        var$7 = 0 + $end | 0;
        jn_Buffer__init_(var$8, $end);
        jn_ByteOrder_$callClinit();
        var$8.$order = jn_ByteOrder_BIG_ENDIAN;
        var$8.$start0 = 0;
        var$8.$array1 = $destBytes;
        var$8.$position = 0;
        var$8.$limit = var$7;
        var$8.$direct = 0;
        var$8.$readOnly0 = 0;
        var$9 = $this.$charset;
        var$10 = new jnci_UTF8Encoder;
        $s = $rt_createByteArray(1);
        var$11 = $s.data;
        var$11[0] = 63;
        jnc_CodingErrorAction_$callClinit();
        var$12 = jnc_CodingErrorAction_REPORT;
        var$10.$malformedAction = var$12;
        var$10.$unmappableAction = var$12;
        $begin = var$11.length;
        if ($begin && $begin >= var$10.$maxBytesPerChar) {
            var$10.$charset0 = var$9;
            var$10.$replacement = $s.$clone();
            var$10.$averageBytesPerChar = 2.0;
            var$10.$maxBytesPerChar = 4.0;
            var$10.$inArray = $rt_createCharArray(512);
            var$10.$outArray = $rt_createByteArray(512);
            var$9 = jnc_CodingErrorAction_REPLACE;
            if (var$9 === null) {
                var$8 = new jl_IllegalArgumentException;
                jl_Throwable__init_0(var$8, $rt_s(14));
                $rt_throw(var$8);
            }
            var$10.$malformedAction = var$9;
            var$10.$unmappableAction = var$9;
            while (var$10.$status != 3) {
                var$10.$status = 2;
                a: {
                    while (true) {
                        try {
                            var$9 = jnci_BufferedEncoder_encodeLoop(var$10, $src, var$8);
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof jl_RuntimeException) {
                                var$9 = $$je;
                                var$8 = new jnc_CoderMalfunctionError;
                                jl_Throwable__init_2(var$8, var$9);
                                $rt_throw(var$8);
                            } else {
                                throw $$e;
                            }
                        }
                        if (var$9.$kind ? 0 : 1) {
                            $end = jn_Buffer_remaining($src);
                            if ($end <= 0)
                                break a;
                            var$9 = jnc_CoderResult_malformedForLength($end);
                        } else if (jnc_CoderResult_isOverflow(var$9))
                            break;
                        var$12 = !jnc_CoderResult_isUnmappable(var$9) ? var$10.$malformedAction : var$10.$unmappableAction;
                        b: {
                            if (var$12 !== jnc_CodingErrorAction_REPLACE) {
                                if (var$12 === jnc_CodingErrorAction_IGNORE)
                                    break b;
                                else
                                    break a;
                            }
                            $end = jn_Buffer_remaining(var$8);
                            $s = var$10.$replacement;
                            $overflow = $s.data.length;
                            if ($end < $overflow) {
                                var$9 = jnc_CoderResult_OVERFLOW;
                                break a;
                            }
                            jn_ByteBuffer_put(var$8, $s, 0, $overflow);
                        }
                        var$6 = $src.$position;
                        $end = var$9.$kind != 2 ? 0 : 1;
                        if (!(!$end && !jnc_CoderResult_isUnmappable(var$9) ? 0 : 1)) {
                            var$9 = new jl_UnsupportedOperationException;
                            jl_Exception__init_(var$9);
                            $rt_throw(var$9);
                        }
                        jn_CharBuffer_position($src, var$6 + var$9.$length1 | 0);
                    }
                }
                $overflow = jnc_CoderResult_isOverflow(var$9);
                ji_PrintStream_write($this, $destBytes, 0, var$8.$position);
                jn_ByteBuffer_clear(var$8);
                if (!$overflow) {
                    while (true) {
                        $end = var$10.$status;
                        if ($end != 2 && $end != 4) {
                            var$9 = new jl_IllegalStateException;
                            jl_Exception__init_(var$9);
                            $rt_throw(var$9);
                        }
                        var$9 = jnc_CoderResult_UNDERFLOW;
                        if (var$9 === var$9)
                            var$10.$status = 3;
                        $overflow = jnc_CoderResult_isOverflow(var$9);
                        ji_PrintStream_write($this, $destBytes, 0, var$8.$position);
                        jn_ByteBuffer_clear(var$8);
                        if (!$overflow)
                            break;
                    }
                    return;
                }
            }
            var$9 = new jl_IllegalStateException;
            jl_Exception__init_(var$9);
            $rt_throw(var$9);
        }
        var$8 = new jl_IllegalArgumentException;
        jl_Exception__init_2(var$8, $rt_s(15));
        $rt_throw(var$8);
    }
    function ji_PrintStream_print($this, $s) {
        jl_StringBuilder_append1($this.$sb, $s);
        ji_PrintStream_printSB($this);
    }
    function ji_PrintStream_printSB($this) {
        var var$1, var$2, $buffer, var$4, var$5, var$6, var$7, var$8, var$9;
        var$1 = $this.$sb;
        var$2 = var$1.$length0;
        $buffer = $this.$buffer;
        if (var$2 > $buffer.data.length)
            $buffer = $rt_createCharArray(var$2);
        var$4 = 0;
        var$5 = 0;
        if (var$4 > var$2) {
            var$1 = new jl_IndexOutOfBoundsException;
            jl_Throwable__init_0(var$1, $rt_s(16));
            $rt_throw(var$1);
        }
        while (var$4 < var$2) {
            var$6 = $buffer.data;
            var$7 = var$5 + 1 | 0;
            var$8 = var$1.$buffer0.data;
            var$9 = var$4 + 1 | 0;
            var$6[var$5] = var$8[var$4];
            var$5 = var$7;
            var$4 = var$9;
        }
        ji_PrintStream_print0($this, $buffer, 0, var$2);
        $this.$sb.$length0 = 0;
    }
    function otcic_ConsoleOutputStream() {
        ji_OutputStream.call(this);
        this.$buffer1 = null;
    }
    var otcic_StderrOutputStream = $rt_classWithoutFields(otcic_ConsoleOutputStream);
    var otcic_StderrOutputStream_INSTANCE = null;
    function otcic_StderrOutputStream_write($this, $b, $off, $len) {
        var var$4;
        var$4 = 0;
        while (var$4 < $len) {
            $rt_putStderr($b.data[var$4 + $off | 0] & 255);
            var$4 = var$4 + 1 | 0;
        }
    }
    function otcic_StderrOutputStream__clinit_() {
        var var$1;
        var$1 = new otcic_StderrOutputStream;
        var$1.$buffer1 = $rt_createByteArray(1);
        otcic_StderrOutputStream_INSTANCE = var$1;
    }
    function otji_JSWrapper() {
        jl_Object.call(this);
        this.$js = null;
    }
    var otji_JSWrapper_hashCodes = null;
    var otji_JSWrapper_wrappers = null;
    var otji_JSWrapper_stringWrappers = null;
    var otji_JSWrapper_numberWrappers = null;
    var otji_JSWrapper_undefinedWrapper = null;
    var otji_JSWrapper_stringFinalizationRegistry = null;
    var otji_JSWrapper_numberFinalizationRegistry = null;
    function otji_JSWrapper_$callClinit() {
        otji_JSWrapper_$callClinit = $rt_eraseClinit(otji_JSWrapper);
        otji_JSWrapper__clinit_();
    }
    function otji_JSWrapper__init_(var_0) {
        var var_1 = new otji_JSWrapper();
        otji_JSWrapper__init_0(var_1, var_0);
        return var_1;
    }
    function otji_JSWrapper__init_0($this, $js) {
        otji_JSWrapper_$callClinit();
        $this.$js = $js;
    }
    function otji_JSWrapper_wrap($o) {
        var $jsNumber, $type, $isObject, $existingRef, $existing, $wrapper, $wrapperAsJs;
        otji_JSWrapper_$callClinit();
        if ($o === null)
            return null;
        $jsNumber = $o;
        $type = $rt_str(typeof $jsNumber);
        $isObject = !jl_String_equals($type, $rt_s(17)) && !jl_String_equals($type, $rt_s(18)) ? 0 : 1;
        if ($isObject && $o[$rt_jso_marker] === true)
            return $o;
        $o = otji_JSWrapper_wrappers;
        if ($o !== null) {
            if ($isObject) {
                $existingRef = $o.get($jsNumber);
                $existing = (typeof $existingRef === 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
                if (!(typeof $existing === 'undefined' ? 1 : 0))
                    return $existing;
                $wrapper = otji_JSWrapper__init_($jsNumber);
                otji_JSWrapper_wrappers.set($jsNumber, new $rt_globals.WeakRef($wrapper));
                return $wrapper;
            }
            if (jl_String_equals($type, $rt_s(19))) {
                $existingRef = otji_JSWrapper_stringWrappers.get($jsNumber);
                $existing = (typeof $existingRef === 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
                if (!(typeof $existing === 'undefined' ? 1 : 0))
                    return $existing;
                $wrapper = otji_JSWrapper__init_($jsNumber);
                $wrapperAsJs = $wrapper;
                otji_JSWrapper_stringWrappers.set($jsNumber, new $rt_globals.WeakRef($wrapperAsJs));
                otji_JSWrapper_register$js_body$_4(otji_JSWrapper_stringFinalizationRegistry, $wrapperAsJs, $jsNumber);
                return $wrapper;
            }
            if (jl_String_equals($type, $rt_s(20))) {
                $existingRef = otji_JSWrapper_numberWrappers.get($jsNumber);
                $existing = (typeof $existingRef === 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
                if (!(typeof $existing === 'undefined' ? 1 : 0))
                    return $existing;
                $wrapper = otji_JSWrapper__init_($jsNumber);
                $wrapperAsJs = $wrapper;
                otji_JSWrapper_numberWrappers.set($jsNumber, new $rt_globals.WeakRef($wrapperAsJs));
                otji_JSWrapper_register$js_body$_4(otji_JSWrapper_numberFinalizationRegistry, $wrapperAsJs, $jsNumber);
                return $wrapper;
            }
            if (jl_String_equals($type, $rt_s(21))) {
                $existingRef = otji_JSWrapper_undefinedWrapper;
                $existing = $existingRef === null ? void 0 : $existingRef.deref();
                if (!(typeof $existing === 'undefined' ? 1 : 0))
                    return $existing;
                $wrapper = otji_JSWrapper__init_($jsNumber);
                otji_JSWrapper_undefinedWrapper = new $rt_globals.WeakRef($wrapper);
                return $wrapper;
            }
        }
        return otji_JSWrapper__init_($jsNumber);
    }
    function otji_JSWrapper_unwrap($o) {
        otji_JSWrapper_$callClinit();
        if ($o === null)
            return null;
        return !($o[$rt_jso_marker] === true) ? $o.$js : $o;
    }
    function otji_JSWrapper_jsToJava($o) {
        otji_JSWrapper_$callClinit();
        if ($o === null)
            return null;
        return $o instanceof $rt_objcls() ? $o : otji_JSWrapper_wrap($o);
    }
    function otji_JSWrapper__clinit_() {
        otji_JSWrapper_hashCodes = new $rt_globals.WeakMap();
        otji_JSWrapper_wrappers = !(typeof $rt_globals.WeakRef !== 'undefined' ? 1 : 0) ? null : new $rt_globals.WeakMap();
        otji_JSWrapper_stringWrappers = !(typeof $rt_globals.WeakRef !== 'undefined' ? 1 : 0) ? null : new $rt_globals.Map();
        otji_JSWrapper_numberWrappers = !(typeof $rt_globals.WeakRef !== 'undefined' ? 1 : 0) ? null : new $rt_globals.Map();
        otji_JSWrapper_stringFinalizationRegistry = otji_JSWrapper_stringWrappers === null ? null : new $rt_globals.FinalizationRegistry(otji_JS_function(new otji_JSWrapper$_clinit_$lambda$_30_0, "accept"));
        otji_JSWrapper_numberFinalizationRegistry = otji_JSWrapper_numberWrappers === null ? null : new $rt_globals.FinalizationRegistry(otji_JS_function(new otji_JSWrapper$_clinit_$lambda$_30_1, "accept"));
    }
    function otji_JSWrapper_register$js_body$_4(var$1, var$2, var$3) {
        return var$1.register(var$2, var$3);
    }
    function cmrp_AABB() {
        var a = this; jl_Object.call(a);
        a.$epsilon = 0.0;
        a.$x0 = 0.0;
        a.$y0 = 0.0;
        a.$z0 = 0.0;
        a.$x1 = 0.0;
        a.$y1 = 0.0;
        a.$z1 = 0.0;
    }
    function cmrp_AABB__init_(var_0, var_1, var_2, var_3, var_4, var_5) {
        var var_6 = new cmrp_AABB();
        cmrp_AABB__init_0(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
        return var_6;
    }
    function cmrp_AABB__init_0($this, $x0, $y0, $z0, $x1, $y1, $z1) {
        $this.$epsilon = 0.0;
        $this.$x0 = $x0;
        $this.$y0 = $y0;
        $this.$z0 = $z0;
        $this.$x1 = $x1;
        $this.$y1 = $y1;
        $this.$z1 = $z1;
    }
    function cmrp_AABB_clipXCollide($this, $c, $xa) {
        var $max, $max_0;
        if ($c.$y1 > $this.$y0 && $c.$y0 < $this.$y1) {
            if ($c.$z1 > $this.$z0 && $c.$z0 < $this.$z1) {
                if ($xa <= 0.0)
                    $max = $xa;
                else {
                    $max = $c.$x1;
                    $max_0 = $this.$x0;
                    if ($max > $max_0)
                        $max = $xa;
                    else {
                        $max = $max_0 - $max - $this.$epsilon;
                        if ($max >= $xa)
                            $max = $xa;
                    }
                }
                if ($max >= 0.0)
                    $max_0 = $max;
                else {
                    $xa = $c.$x0;
                    $max_0 = $this.$x1;
                    if ($xa < $max_0)
                        $max_0 = $max;
                    else {
                        $max_0 = $max_0 - $xa + $this.$epsilon;
                        if ($max_0 <= $max)
                            $max_0 = $max;
                    }
                }
                return $max_0;
            }
            return $xa;
        }
        return $xa;
    }
    function cmrp_AABB_clipYCollide($this, $c, $ya) {
        var $max, $max_0;
        if ($c.$x1 > $this.$x0 && $c.$x0 < $this.$x1) {
            if ($c.$z1 > $this.$z0 && $c.$z0 < $this.$z1) {
                if ($ya <= 0.0)
                    $max = $ya;
                else {
                    $max = $c.$y1;
                    $max_0 = $this.$y0;
                    if ($max > $max_0)
                        $max = $ya;
                    else {
                        $max = $max_0 - $max - $this.$epsilon;
                        if ($max >= $ya)
                            $max = $ya;
                    }
                }
                if ($max >= 0.0)
                    $max_0 = $max;
                else {
                    $ya = $c.$y0;
                    $max_0 = $this.$y1;
                    if ($ya < $max_0)
                        $max_0 = $max;
                    else {
                        $max_0 = $max_0 - $ya + $this.$epsilon;
                        if ($max_0 <= $max)
                            $max_0 = $max;
                    }
                }
                return $max_0;
            }
            return $ya;
        }
        return $ya;
    }
    function cmrp_AABB_clipZCollide($this, $c, $za) {
        var $max, $max_0;
        if ($c.$x1 > $this.$x0 && $c.$x0 < $this.$x1) {
            if ($c.$y1 > $this.$y0 && $c.$y0 < $this.$y1) {
                if ($za <= 0.0)
                    $max = $za;
                else {
                    $max = $c.$z1;
                    $max_0 = $this.$z0;
                    if ($max > $max_0)
                        $max = $za;
                    else {
                        $max = $max_0 - $max - $this.$epsilon;
                        if ($max >= $za)
                            $max = $za;
                    }
                }
                if ($max >= 0.0)
                    $max_0 = $max;
                else {
                    $za = $c.$z0;
                    $max_0 = $this.$z1;
                    if ($za < $max_0)
                        $max_0 = $max;
                    else {
                        $max_0 = $max_0 - $za + $this.$epsilon;
                        if ($max_0 <= $max)
                            $max_0 = $max;
                    }
                }
                return $max_0;
            }
            return $za;
        }
        return $za;
    }
    function cmrp_AABB_move($this, $xa, $ya, $za) {
        $this.$x0 = $this.$x0 + $xa;
        $this.$y0 = $this.$y0 + $ya;
        $this.$z0 = $this.$z0 + $za;
        $this.$x1 = $this.$x1 + $xa;
        $this.$y1 = $this.$y1 + $ya;
        $this.$z1 = $this.$z1 + $za;
    }
    var cmr_Textures$TextureCallback = $rt_classWithoutFields(0);
    function cmrl_Chunk$_init_$lambda$_0_0() {
        jl_Object.call(this);
        this.$_0 = null;
    }
    var cmr_Textures = $rt_classWithoutFields();
    var cmr_Textures_idMap = null;
    function cmr_Textures_lambda$loadTexture$0($img, $gl, $mode, $imageUrl, $callback, $evt) {
        var $pixelData, var$8, var$9, $texture, var$11, var$12, var$13;
        $pixelData = (otjdh_HTMLDocument_current()).createElement("canvas");
        $evt = $img.width;
        $pixelData.width = $evt;
        $evt = $img.height;
        $pixelData.height = $evt;
        $evt = $pixelData.getContext("2d");
        if ($evt === null) {
            $img = new jl_RuntimeException;
            jl_Throwable__init_0($img, $rt_s(22));
            $rt_throw($img);
        }
        $evt.drawImage($img, 0.0, 0.0);
        var$8 = $img.width;
        var$9 = $img.height;
        $pixelData = new $rt_globals.Uint8Array($evt.getImageData(0.0, 0.0, var$8, var$9).data);
        if ($pixelData === null) {
            $img = new jl_RuntimeException;
            jl_Throwable__init_0($img, $rt_s(23));
            $rt_throw($img);
        }
        $texture = $gl.createTexture();
        $gl.bindTexture(3553, $texture);
        var$11 = $img.width;
        var$12 = $img.height;
        $gl.texImage2D(3553, 0, 6408, var$11, var$12, 0, 6408, 5121, $pixelData);
        $gl.texParameteri(3553, 10241, $mode);
        $gl.texParameteri(3553, 10240, $mode);
        $gl.generateMipmap(3553);
        if ($gl === null) {
            $img = new jl_RuntimeException;
            jl_Throwable__init_0($img, $rt_s(24));
            $rt_throw($img);
        }
        $img = cmr_Textures_idMap;
        $gl = otji_JSWrapper_wrap($texture);
        if ($imageUrl === null) {
            $evt = ju_HashMap_findNullKeyEntry($img);
            if ($evt === null) {
                $img.$modCount0 = $img.$modCount0 + 1 | 0;
                $evt = ju_HashMap_createHashedEntry($img, null, 0, 0);
                $mode = $img.$elementCount + 1 | 0;
                $img.$elementCount = $mode;
                if ($mode > $img.$threshold)
                    ju_HashMap_rehash($img);
            }
        } else {
            var$13 = jl_String_hashCode($imageUrl);
            $mode = var$13 & ($img.$elementData.data.length - 1 | 0);
            $evt = ju_HashMap_findNonNullKeyEntry($img, $imageUrl, $mode, var$13);
            if ($evt === null) {
                $img.$modCount0 = $img.$modCount0 + 1 | 0;
                $evt = ju_HashMap_createHashedEntry($img, $imageUrl, $mode, var$13);
                $mode = $img.$elementCount + 1 | 0;
                $img.$elementCount = $mode;
                if ($mode > $img.$threshold)
                    ju_HashMap_rehash($img);
            }
        }
        $evt.$value = $gl;
        $callback.$_0.$texture = $texture;
    }
    function cmr_Textures__clinit_() {
        cmr_Textures_idMap = ju_HashMap__init_();
    }
    function jnc_Charset() {
        var a = this; jl_Object.call(a);
        a.$canonicalName = null;
        a.$aliases = null;
    }
    function jnc_Charset_checkCanonicalName($name) {
        var $i, $c;
        if (jl_String_isEmpty($name))
            $rt_throw(jnc_IllegalCharsetNameException__init_($name));
        if (!jnc_Charset_isValidCharsetStart(jl_String_charAt($name, 0)))
            $rt_throw(jnc_IllegalCharsetNameException__init_($name));
        $i = 1;
        while ($i < jl_String_length($name)) {
            a: {
                $c = jl_String_charAt($name, $i);
                switch ($c) {
                    case 43:
                    case 45:
                    case 46:
                    case 58:
                    case 95:
                        break;
                    default:
                        if (jnc_Charset_isValidCharsetStart($c))
                            break a;
                        else
                            $rt_throw(jnc_IllegalCharsetNameException__init_($name));
                }
            }
            $i = $i + 1 | 0;
        }
    }
    function jnc_Charset_isValidCharsetStart($c) {
        a: {
            b: {
                if (!($c >= 48 && $c <= 57) && !($c >= 97 && $c <= 122)) {
                    if ($c < 65)
                        break b;
                    if ($c > 90)
                        break b;
                }
                $c = 1;
                break a;
            }
            $c = 0;
        }
        return $c;
    }
    var jnci_UTF8Charset = $rt_classWithoutFields(jnc_Charset);
    var jnci_UTF8Charset_INSTANCE = null;
    function jnci_UTF8Charset_$callClinit() {
        jnci_UTF8Charset_$callClinit = $rt_eraseClinit(jnci_UTF8Charset);
        jnci_UTF8Charset__clinit_();
    }
    function jnci_UTF8Charset__clinit_() {
        var var$1, var$2, var$3, var$4, var$5;
        var$1 = new jnci_UTF8Charset;
        jnci_UTF8Charset_$callClinit();
        var$2 = $rt_createArray(jl_String, 0);
        var$3 = var$2.data;
        jnc_Charset_checkCanonicalName($rt_s(25));
        var$4 = var$3.length;
        var$5 = 0;
        while (var$5 < var$4) {
            jnc_Charset_checkCanonicalName(var$3[var$5]);
            var$5 = var$5 + 1 | 0;
        }
        var$1.$canonicalName = $rt_s(25);
        var$1.$aliases = var$2.$clone();
        jnci_UTF8Charset_INSTANCE = var$1;
    }
    var jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException);
    var otjc_JSObjects = $rt_classWithoutFields();
    var otjde_EventListener = $rt_classWithoutFields(0);
    function cmr_Textures$loadTexture$lambda$_1_0() {
        var a = this; jl_Object.call(a);
        a.$_00 = null;
        a.$_1 = null;
        a.$_2 = 0;
        a.$_3 = null;
        a.$_4 = null;
    }
    function cmr_Textures$loadTexture$lambda$_1_0_handleEvent$exported$0(var$0, var$1) {
        cmr_Textures_lambda$loadTexture$0(var$0.$_00, var$0.$_1, var$0.$_2, var$0.$_3, var$0.$_4, var$1);
    }
    function cmr_Textures$loadTexture$lambda$_1_1() {
        jl_Object.call(this);
        this.$_01 = null;
    }
    function cmr_Textures$loadTexture$lambda$_1_1_handleEvent$exported$0(var$0, var$1) {
        var var$2;
        var$1 = var$0.$_01;
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(26)), var$1);
        $rt_globals.console.log($rt_ustr(jl_StringBuilder_toString(var$2)));
    }
    function cmr_Textures$loadTexture$lambda$_1_2() {
        jl_Object.call(this);
        this.$_02 = null;
    }
    function cmr_Textures$loadTexture$lambda$_1_2_handleEvent$exported$0(var$0, var$1) {
        var var$2, var$3;
        var$1 = var$0.$_02;
        var$2 = new jl_RuntimeException;
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(27)), var$1);
        jl_Throwable__init_0(var$2, jl_StringBuilder_toString(var$3));
        $rt_throw(var$2);
    }
    var otjc_JSWeakMap = $rt_classWithoutFields();
    var otjc_JSWeakRef = $rt_classWithoutFields();
    var otjc_JSMap = $rt_classWithoutFields();
    var otjc_JSFinalizationRegistryConsumer = $rt_classWithoutFields(0);
    var otji_JSWrapper$_clinit_$lambda$_30_0 = $rt_classWithoutFields();
    function otji_JSWrapper$_clinit_$lambda$_30_0_accept$exported$0(var$0, var$1) {
        var var$2;
        var$1 = otji_JSWrapper_jsToJava(var$1);
        var$2 = otji_JSWrapper_stringWrappers;
        var$1 = otji_JSWrapper_unwrap(var$1);
        var$2.delete(var$1);
    }
    var otjc_JSFinalizationRegistry = $rt_classWithoutFields();
    var otji_JSWrapper$_clinit_$lambda$_30_1 = $rt_classWithoutFields();
    function otji_JSWrapper$_clinit_$lambda$_30_1_accept$exported$0(var$0, var$1) {
        var var$2;
        var$1 = otji_JSWrapper_jsToJava(var$1);
        var$2 = otji_JSWrapper_numberWrappers;
        var$1 = otji_JSWrapper_unwrap(var$1);
        var$2.delete(var$1);
    }
    var ju_Map = $rt_classWithoutFields(0);
    var ju_AbstractMap = $rt_classWithoutFields();
    function ju_HashMap() {
        var a = this; ju_AbstractMap.call(a);
        a.$elementCount = 0;
        a.$elementData = null;
        a.$modCount0 = 0;
        a.$loadFactor = 0.0;
        a.$threshold = 0;
    }
    function ju_HashMap__init_() {
        var var_0 = new ju_HashMap();
        ju_HashMap__init_0(var_0);
        return var_0;
    }
    function ju_HashMap_newElementArray($this, $s) {
        return $rt_createArray(ju_HashMap$HashEntry, $s);
    }
    function ju_HashMap__init_0($this) {
        var var$1;
        var$1 = ju_HashMap_calculateCapacity(16);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray(var$1);
        $this.$loadFactor = 0.75;
        ju_HashMap_computeThreshold($this);
    }
    function ju_HashMap_calculateCapacity($x) {
        var var$2;
        if ($x >= 1073741824)
            return 1073741824;
        if (!$x)
            return 16;
        var$2 = $x - 1 | 0;
        $x = var$2 | var$2 >> 1;
        $x = $x | $x >> 2;
        $x = $x | $x >> 4;
        $x = $x | $x >> 8;
        return ($x | $x >> 16) + 1 | 0;
    }
    function ju_HashMap_computeThreshold($this) {
        $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
    }
    function ju_HashMap_findNonNullKeyEntry($this, $key, $index, $keyHash) {
        var $m, var$5;
        $m = $this.$elementData.data[$index];
        while ($m !== null) {
            if ($m.$origKeyHash == $keyHash) {
                var$5 = $m.$key;
                if ($key !== var$5 && !jl_String_equals($key, var$5) ? 0 : 1)
                    break;
            }
            $m = $m.$next;
        }
        return $m;
    }
    function ju_HashMap_findNullKeyEntry($this) {
        var $m;
        $m = $this.$elementData.data[0];
        while ($m !== null && $m.$key !== null) {
            $m = $m.$next;
        }
        return $m;
    }
    function ju_HashMap_createHashedEntry($this, $key, $index, $hash) {
        var $entry, var$5, var$6;
        $entry = new ju_HashMap$HashEntry;
        var$5 = null;
        $entry.$key = $key;
        $entry.$value = var$5;
        $entry.$origKeyHash = $hash;
        var$6 = $this.$elementData.data;
        $entry.$next = var$6[$index];
        var$6[$index] = $entry;
        return $entry;
    }
    function ju_HashMap_rehash($this) {
        var var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8;
        var$1 = $this.$elementData.data.length;
        var$1 = ju_HashMap_calculateCapacity(!var$1 ? 1 : var$1 << 1);
        var$2 = $rt_createArray(ju_HashMap$HashEntry, var$1);
        var$3 = var$2.data;
        var$4 = 0;
        var$5 = var$1 - 1 | 0;
        while (true) {
            var$6 = $this.$elementData.data;
            if (var$4 >= var$6.length)
                break;
            var$7 = var$6[var$4];
            var$6[var$4] = null;
            while (var$7 !== null) {
                var$1 = var$7.$origKeyHash & var$5;
                var$8 = var$7.$next;
                var$7.$next = var$3[var$1];
                var$3[var$1] = var$7;
                var$7 = var$8;
            }
            var$4 = var$4 + 1 | 0;
        }
        $this.$elementData = var$2;
        ju_HashMap_computeThreshold($this);
    }
    function jnc_IllegalCharsetNameException() {
        jl_IllegalArgumentException.call(this);
        this.$charsetName = null;
    }
    function jnc_IllegalCharsetNameException__init_(var_0) {
        var var_1 = new jnc_IllegalCharsetNameException();
        jnc_IllegalCharsetNameException__init_0(var_1, var_0);
        return var_1;
    }
    function jnc_IllegalCharsetNameException__init_0($this, $charsetName) {
        jl_Exception__init_($this);
        $this.$charsetName = $charsetName;
    }
    var jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception);
    var mr_lwjglkeys = $rt_classWithoutFields();
    var mr_lwjglkeys_KEY_NONE = 0;
    var mr_lwjglkeys_KEY_ESCAPE = 0;
    var mr_lwjglkeys_KEY_1 = 0;
    var mr_lwjglkeys_KEY_2 = 0;
    var mr_lwjglkeys_KEY_3 = 0;
    var mr_lwjglkeys_KEY_4 = 0;
    var mr_lwjglkeys_KEY_5 = 0;
    var mr_lwjglkeys_KEY_6 = 0;
    var mr_lwjglkeys_KEY_7 = 0;
    var mr_lwjglkeys_KEY_8 = 0;
    var mr_lwjglkeys_KEY_9 = 0;
    var mr_lwjglkeys_KEY_0 = 0;
    var mr_lwjglkeys_KEY_MINUS = 0;
    var mr_lwjglkeys_KEY_EQUALS = 0;
    var mr_lwjglkeys_KEY_BACK = 0;
    var mr_lwjglkeys_KEY_TAB = 0;
    var mr_lwjglkeys_KEY_Q = 0;
    var mr_lwjglkeys_KEY_W = 0;
    var mr_lwjglkeys_KEY_E = 0;
    var mr_lwjglkeys_KEY_R = 0;
    var mr_lwjglkeys_KEY_T = 0;
    var mr_lwjglkeys_KEY_Y = 0;
    var mr_lwjglkeys_KEY_U = 0;
    var mr_lwjglkeys_KEY_I = 0;
    var mr_lwjglkeys_KEY_O = 0;
    var mr_lwjglkeys_KEY_P = 0;
    var mr_lwjglkeys_KEY_LBRACKET = 0;
    var mr_lwjglkeys_KEY_RBRACKET = 0;
    var mr_lwjglkeys_KEY_RETURN = 0;
    var mr_lwjglkeys_KEY_LCONTROL = 0;
    var mr_lwjglkeys_KEY_A = 0;
    var mr_lwjglkeys_KEY_S = 0;
    var mr_lwjglkeys_KEY_D = 0;
    var mr_lwjglkeys_KEY_F = 0;
    var mr_lwjglkeys_KEY_G = 0;
    var mr_lwjglkeys_KEY_H = 0;
    var mr_lwjglkeys_KEY_J = 0;
    var mr_lwjglkeys_KEY_K = 0;
    var mr_lwjglkeys_KEY_L = 0;
    var mr_lwjglkeys_KEY_SEMICOLON = 0;
    var mr_lwjglkeys_KEY_APOSTROPHE = 0;
    var mr_lwjglkeys_KEY_GRAVE = 0;
    var mr_lwjglkeys_KEY_LSHIFT = 0;
    var mr_lwjglkeys_KEY_BACKSLASH = 0;
    var mr_lwjglkeys_KEY_Z = 0;
    var mr_lwjglkeys_KEY_X = 0;
    var mr_lwjglkeys_KEY_C = 0;
    var mr_lwjglkeys_KEY_V = 0;
    var mr_lwjglkeys_KEY_B = 0;
    var mr_lwjglkeys_KEY_N = 0;
    var mr_lwjglkeys_KEY_M = 0;
    var mr_lwjglkeys_KEY_COMMA = 0;
    var mr_lwjglkeys_KEY_PERIOD = 0;
    var mr_lwjglkeys_KEY_SLASH = 0;
    var mr_lwjglkeys_KEY_RSHIFT = 0;
    var mr_lwjglkeys_KEY_MULTIPLY = 0;
    var mr_lwjglkeys_KEY_LMENU = 0;
    var mr_lwjglkeys_KEY_SPACE = 0;
    var mr_lwjglkeys_KEY_CAPITAL = 0;
    var mr_lwjglkeys_KEY_F1 = 0;
    var mr_lwjglkeys_KEY_F2 = 0;
    var mr_lwjglkeys_KEY_F3 = 0;
    var mr_lwjglkeys_KEY_F4 = 0;
    var mr_lwjglkeys_KEY_F5 = 0;
    var mr_lwjglkeys_KEY_F6 = 0;
    var mr_lwjglkeys_KEY_F7 = 0;
    var mr_lwjglkeys_KEY_F8 = 0;
    var mr_lwjglkeys_KEY_F9 = 0;
    var mr_lwjglkeys_KEY_F10 = 0;
    var mr_lwjglkeys_KEY_NUMLOCK = 0;
    var mr_lwjglkeys_KEY_SCROLL = 0;
    var mr_lwjglkeys_KEY_NUMPAD7 = 0;
    var mr_lwjglkeys_KEY_NUMPAD8 = 0;
    var mr_lwjglkeys_KEY_NUMPAD9 = 0;
    var mr_lwjglkeys_KEY_SUBTRACT = 0;
    var mr_lwjglkeys_KEY_NUMPAD4 = 0;
    var mr_lwjglkeys_KEY_NUMPAD5 = 0;
    var mr_lwjglkeys_KEY_NUMPAD6 = 0;
    var mr_lwjglkeys_KEY_ADD = 0;
    var mr_lwjglkeys_KEY_NUMPAD1 = 0;
    var mr_lwjglkeys_KEY_NUMPAD2 = 0;
    var mr_lwjglkeys_KEY_NUMPAD3 = 0;
    var mr_lwjglkeys_KEY_NUMPAD0 = 0;
    var mr_lwjglkeys_KEY_DECIMAL = 0;
    var mr_lwjglkeys_KEY_F11 = 0;
    var mr_lwjglkeys_KEY_F12 = 0;
    var mr_lwjglkeys_KEY_F13 = 0;
    var mr_lwjglkeys_KEY_F14 = 0;
    var mr_lwjglkeys_KEY_F15 = 0;
    var mr_lwjglkeys_KEY_F16 = 0;
    var mr_lwjglkeys_KEY_F17 = 0;
    var mr_lwjglkeys_KEY_F18 = 0;
    var mr_lwjglkeys_KEY_KANA = 0;
    var mr_lwjglkeys_KEY_F19 = 0;
    var mr_lwjglkeys_KEY_CONVERT = 0;
    var mr_lwjglkeys_KEY_NOCONVERT = 0;
    var mr_lwjglkeys_KEY_YEN = 0;
    var mr_lwjglkeys_KEY_NUMPADEQUALS = 0;
    var mr_lwjglkeys_KEY_CIRCUMFLEX = 0;
    var mr_lwjglkeys_KEY_AT = 0;
    var mr_lwjglkeys_KEY_COLON = 0;
    var mr_lwjglkeys_KEY_UNDERLINE = 0;
    var mr_lwjglkeys_KEY_KANJI = 0;
    var mr_lwjglkeys_KEY_STOP = 0;
    var mr_lwjglkeys_KEY_AX = 0;
    var mr_lwjglkeys_KEY_UNLABELED = 0;
    var mr_lwjglkeys_KEY_NUMPADENTER = 0;
    var mr_lwjglkeys_KEY_RCONTROL = 0;
    var mr_lwjglkeys_KEY_SECTION = 0;
    var mr_lwjglkeys_KEY_NUMPADCOMMA = 0;
    var mr_lwjglkeys_KEY_DIVIDE = 0;
    var mr_lwjglkeys_KEY_SYSRQ = 0;
    var mr_lwjglkeys_KEY_RMENU = 0;
    var mr_lwjglkeys_KEY_FUNCTION = 0;
    var mr_lwjglkeys_KEY_PAUSE = 0;
    var mr_lwjglkeys_KEY_HOME = 0;
    var mr_lwjglkeys_KEY_UP = 0;
    var mr_lwjglkeys_KEY_PRIOR = 0;
    var mr_lwjglkeys_KEY_LEFT = 0;
    var mr_lwjglkeys_KEY_RIGHT = 0;
    var mr_lwjglkeys_KEY_END = 0;
    var mr_lwjglkeys_KEY_DOWN = 0;
    var mr_lwjglkeys_KEY_NEXT = 0;
    var mr_lwjglkeys_KEY_INSERT = 0;
    var mr_lwjglkeys_KEY_DELETE = 0;
    var mr_lwjglkeys_KEY_CLEAR = 0;
    var mr_lwjglkeys_KEY_LMETA = 0;
    var mr_lwjglkeys_KEY_RMETA = 0;
    var mr_lwjglkeys_KEY_APPS = 0;
    var mr_lwjglkeys_KEY_POWER = 0;
    var mr_lwjglkeys_KEY_SLEEP = 0;
    function mr_lwjglkeys__clinit_() {
        mr_lwjglkeys_KEY_NONE = 0;
        mr_lwjglkeys_KEY_ESCAPE = 1;
        mr_lwjglkeys_KEY_1 = 2;
        mr_lwjglkeys_KEY_2 = 3;
        mr_lwjglkeys_KEY_3 = 4;
        mr_lwjglkeys_KEY_4 = 5;
        mr_lwjglkeys_KEY_5 = 6;
        mr_lwjglkeys_KEY_6 = 7;
        mr_lwjglkeys_KEY_7 = 8;
        mr_lwjglkeys_KEY_8 = 9;
        mr_lwjglkeys_KEY_9 = 10;
        mr_lwjglkeys_KEY_0 = 11;
        mr_lwjglkeys_KEY_MINUS = 12;
        mr_lwjglkeys_KEY_EQUALS = 13;
        mr_lwjglkeys_KEY_BACK = 14;
        mr_lwjglkeys_KEY_TAB = 15;
        mr_lwjglkeys_KEY_Q = 16;
        mr_lwjglkeys_KEY_W = 17;
        mr_lwjglkeys_KEY_E = 18;
        mr_lwjglkeys_KEY_R = 19;
        mr_lwjglkeys_KEY_T = 20;
        mr_lwjglkeys_KEY_Y = 21;
        mr_lwjglkeys_KEY_U = 22;
        mr_lwjglkeys_KEY_I = 23;
        mr_lwjglkeys_KEY_O = 24;
        mr_lwjglkeys_KEY_P = 25;
        mr_lwjglkeys_KEY_LBRACKET = 26;
        mr_lwjglkeys_KEY_RBRACKET = 27;
        mr_lwjglkeys_KEY_RETURN = 28;
        mr_lwjglkeys_KEY_LCONTROL = 29;
        mr_lwjglkeys_KEY_A = 30;
        mr_lwjglkeys_KEY_S = 31;
        mr_lwjglkeys_KEY_D = 32;
        mr_lwjglkeys_KEY_F = 33;
        mr_lwjglkeys_KEY_G = 34;
        mr_lwjglkeys_KEY_H = 35;
        mr_lwjglkeys_KEY_J = 36;
        mr_lwjglkeys_KEY_K = 37;
        mr_lwjglkeys_KEY_L = 38;
        mr_lwjglkeys_KEY_SEMICOLON = 39;
        mr_lwjglkeys_KEY_APOSTROPHE = 40;
        mr_lwjglkeys_KEY_GRAVE = 41;
        mr_lwjglkeys_KEY_LSHIFT = 42;
        mr_lwjglkeys_KEY_BACKSLASH = 43;
        mr_lwjglkeys_KEY_Z = 44;
        mr_lwjglkeys_KEY_X = 45;
        mr_lwjglkeys_KEY_C = 46;
        mr_lwjglkeys_KEY_V = 47;
        mr_lwjglkeys_KEY_B = 48;
        mr_lwjglkeys_KEY_N = 49;
        mr_lwjglkeys_KEY_M = 50;
        mr_lwjglkeys_KEY_COMMA = 51;
        mr_lwjglkeys_KEY_PERIOD = 52;
        mr_lwjglkeys_KEY_SLASH = 53;
        mr_lwjglkeys_KEY_RSHIFT = 54;
        mr_lwjglkeys_KEY_MULTIPLY = 55;
        mr_lwjglkeys_KEY_LMENU = 56;
        mr_lwjglkeys_KEY_SPACE = 57;
        mr_lwjglkeys_KEY_CAPITAL = 58;
        mr_lwjglkeys_KEY_F1 = 59;
        mr_lwjglkeys_KEY_F2 = 60;
        mr_lwjglkeys_KEY_F3 = 61;
        mr_lwjglkeys_KEY_F4 = 62;
        mr_lwjglkeys_KEY_F5 = 63;
        mr_lwjglkeys_KEY_F6 = 64;
        mr_lwjglkeys_KEY_F7 = 65;
        mr_lwjglkeys_KEY_F8 = 66;
        mr_lwjglkeys_KEY_F9 = 67;
        mr_lwjglkeys_KEY_F10 = 68;
        mr_lwjglkeys_KEY_NUMLOCK = 69;
        mr_lwjglkeys_KEY_SCROLL = 70;
        mr_lwjglkeys_KEY_NUMPAD7 = 71;
        mr_lwjglkeys_KEY_NUMPAD8 = 72;
        mr_lwjglkeys_KEY_NUMPAD9 = 73;
        mr_lwjglkeys_KEY_SUBTRACT = 74;
        mr_lwjglkeys_KEY_NUMPAD4 = 75;
        mr_lwjglkeys_KEY_NUMPAD5 = 76;
        mr_lwjglkeys_KEY_NUMPAD6 = 77;
        mr_lwjglkeys_KEY_ADD = 78;
        mr_lwjglkeys_KEY_NUMPAD1 = 79;
        mr_lwjglkeys_KEY_NUMPAD2 = 80;
        mr_lwjglkeys_KEY_NUMPAD3 = 81;
        mr_lwjglkeys_KEY_NUMPAD0 = 82;
        mr_lwjglkeys_KEY_DECIMAL = 83;
        mr_lwjglkeys_KEY_F11 = 87;
        mr_lwjglkeys_KEY_F12 = 88;
        mr_lwjglkeys_KEY_F13 = 100;
        mr_lwjglkeys_KEY_F14 = 101;
        mr_lwjglkeys_KEY_F15 = 102;
        mr_lwjglkeys_KEY_F16 = 103;
        mr_lwjglkeys_KEY_F17 = 104;
        mr_lwjglkeys_KEY_F18 = 105;
        mr_lwjglkeys_KEY_KANA = 112;
        mr_lwjglkeys_KEY_F19 = 113;
        mr_lwjglkeys_KEY_CONVERT = 121;
        mr_lwjglkeys_KEY_NOCONVERT = 123;
        mr_lwjglkeys_KEY_YEN = 125;
        mr_lwjglkeys_KEY_NUMPADEQUALS = 141;
        mr_lwjglkeys_KEY_CIRCUMFLEX = 144;
        mr_lwjglkeys_KEY_AT = 145;
        mr_lwjglkeys_KEY_COLON = 146;
        mr_lwjglkeys_KEY_UNDERLINE = 147;
        mr_lwjglkeys_KEY_KANJI = 148;
        mr_lwjglkeys_KEY_STOP = 149;
        mr_lwjglkeys_KEY_AX = 150;
        mr_lwjglkeys_KEY_UNLABELED = 151;
        mr_lwjglkeys_KEY_NUMPADENTER = 156;
        mr_lwjglkeys_KEY_RCONTROL = 157;
        mr_lwjglkeys_KEY_SECTION = 167;
        mr_lwjglkeys_KEY_NUMPADCOMMA = 179;
        mr_lwjglkeys_KEY_DIVIDE = 181;
        mr_lwjglkeys_KEY_SYSRQ = 183;
        mr_lwjglkeys_KEY_RMENU = 184;
        mr_lwjglkeys_KEY_FUNCTION = 196;
        mr_lwjglkeys_KEY_PAUSE = 197;
        mr_lwjglkeys_KEY_HOME = 199;
        mr_lwjglkeys_KEY_UP = 200;
        mr_lwjglkeys_KEY_PRIOR = 201;
        mr_lwjglkeys_KEY_LEFT = 203;
        mr_lwjglkeys_KEY_RIGHT = 205;
        mr_lwjglkeys_KEY_END = 207;
        mr_lwjglkeys_KEY_DOWN = 208;
        mr_lwjglkeys_KEY_NEXT = 209;
        mr_lwjglkeys_KEY_INSERT = 210;
        mr_lwjglkeys_KEY_DELETE = 211;
        mr_lwjglkeys_KEY_CLEAR = 218;
        mr_lwjglkeys_KEY_LMETA = 219;
        mr_lwjglkeys_KEY_RMETA = 220;
        mr_lwjglkeys_KEY_APPS = 221;
        mr_lwjglkeys_KEY_POWER = 222;
        mr_lwjglkeys_KEY_SLEEP = 223;
    }
    var oli_Keyboard = $rt_classWithoutFields();
    function oli_Keyboard_isKeyDown($i) {
        var var$2;
        nPo_LWJGLMain_$callClinit();
        if (nPo_LWJGLMain_unpressCTRL) {
            var$2 = nPo_LWJGLMain_keyStates.data;
            var$2[28] = 0;
            var$2[29] = 0;
            var$2[157] = 0;
            var$2[219] = 0;
            var$2[220] = 0;
        }
        return nPo_LWJGLMain_keyStates.data[$i];
    }
    var ji_InputStream = $rt_classWithoutFields();
    function ji_InputStream_read($this, $b) {
        return $this.$read($b, 0, $b.data.length);
    }
    function ji_FilterInputStream() {
        ji_InputStream.call(this);
        this.$in = null;
    }
    function ji_FilterInputStream__init_(var_0) {
        var var_1 = new ji_FilterInputStream();
        ji_FilterInputStream__init_0(var_1, var_0);
        return var_1;
    }
    function ji_FilterInputStream__init_0($this, $in) {
        $this.$in = $in;
    }
    function ji_FilterInputStream_close($this) {
        $this.$in.$close();
    }
    function ji_FilterInputStream_read($this, $buffer) {
        return juz_GZIPInputStream_read($this, $buffer, 0, $buffer.data.length);
    }
    var ji_DataInput = $rt_classWithoutFields(0);
    function ji_DataInputStream() {
        ji_FilterInputStream.call(this);
        this.$buff = null;
    }
    function ji_DataInputStream__init_(var_0) {
        var var_1 = new ji_DataInputStream();
        ji_DataInputStream__init_0(var_1, var_0);
        return var_1;
    }
    function ji_DataInputStream__init_0($this, $in) {
        ji_FilterInputStream__init_0($this, $in);
        $this.$buff = $rt_createByteArray(8);
    }
    function ji_DataInputStream_readFully($this, $buffer) {
        var var$2, var$3, var$4, var$5, var$6;
        var$2 = $buffer.data;
        var$3 = 0;
        var$4 = var$2.length;
        if (var$4 < 0) {
            var$5 = new jl_IndexOutOfBoundsException;
            jl_Exception__init_(var$5);
            $rt_throw(var$5);
        }
        if (var$4) {
            if ($this.$in === null) {
                var$5 = new jl_NullPointerException;
                jl_Exception__init_(var$5);
                $rt_throw(var$5);
            }
            if (var$3 > (var$4 - var$4 | 0)) {
                var$5 = new jl_IndexOutOfBoundsException;
                jl_Exception__init_(var$5);
                $rt_throw(var$5);
            }
            while (var$4 > 0) {
                var$6 = $this.$in.$read($buffer, var$3, var$4);
                if (var$6 < 0) {
                    var$5 = new ji_EOFException;
                    jl_Exception__init_(var$5);
                    $rt_throw(var$5);
                }
                var$3 = var$3 + var$6 | 0;
                var$4 = var$4 - var$6 | 0;
            }
        }
    }
    function juz_InflaterInputStream() {
        var a = this; ji_FilterInputStream.call(a);
        a.$inf = null;
        a.$buf = null;
        a.$len = 0;
        a.$closed = 0;
        a.$eof = 0;
    }
    function juz_InflaterInputStream_read($this) {
        var $b;
        $b = $rt_createByteArray(1);
        if (juz_GZIPInputStream_read($this, $b, 0, 1) == (-1))
            return (-1);
        return $b.data[0] & 255;
    }
    function juz_InflaterInputStream_read0($this, $buffer, $off, $nbytes) {
        var $e, var$5, $result, var$7, var$8, var$9, $$je;
        if ($this.$closed) {
            $e = new ji_IOException;
            jl_Throwable__init_0($e, $rt_s(28));
            $rt_throw($e);
        }
        if (null === $buffer) {
            $e = new jl_NullPointerException;
            jl_Exception__init_($e);
            $rt_throw($e);
        }
        if ($off >= 0 && $nbytes >= 0) {
            var$5 = $buffer.data;
            $result = $off + $nbytes | 0;
            var$7 = var$5.length;
            if ($result <= var$7) {
                if (!$nbytes)
                    return 0;
                if ($this.$eof)
                    return (-1);
                if ($off <= var$7 && (var$7 - $off | 0) >= $nbytes) {
                    a: {
                        b: {
                            c: {
                                d: {
                                    e: {
                                        f: {
                                            while (true) {
                                                if (juz_Inflater_needsInput($this.$inf)) {
                                                    if ($this.$closed)
                                                        break;
                                                    $result = $this.$in.$read0($this.$buf);
                                                    $this.$len = $result;
                                                    if ($result > 0) {
                                                        $e = $this.$inf;
                                                        var$5 = $this.$buf;
                                                        var$8 = $e.$impl;
                                                        if (var$8 === null) {
                                                            $e = new jl_IllegalStateException;
                                                            jl_Exception__init_($e);
                                                            $rt_throw($e);
                                                        }
                                                        var$9 = var$5.data.length;
                                                        if (0 > var$9)
                                                            break f;
                                                        if ($result < 0)
                                                            break f;
                                                        if ((var$9 - 0 | 0) < $result)
                                                            break f;
                                                        $e.$inRead = 0;
                                                        $e.$inLength = $result;
                                                        var$8.$next_in = var$5;
                                                        var$8.$next_in_index = 0;
                                                        var$8.$avail_in = $result;
                                                    }
                                                }
                                                try {
                                                    $result = juz_Inflater_inflate($this.$inf, $buffer, $off, $nbytes);
                                                    var$7 = juz_Inflater_finished($this.$inf);
                                                    $this.$eof = var$7;
                                                    if ($result > 0)
                                                        break e;
                                                    if (var$7)
                                                        break d;
                                                    if (juz_Inflater_needsDictionary($this.$inf))
                                                        break b;
                                                    if ($this.$len == (-1))
                                                        break c;
                                                    continue;
                                                } catch ($$e) {
                                                    $$je = $rt_wrapException($$e);
                                                    if ($$je instanceof juz_DataFormatException) {
                                                        $e = $$je;
                                                        break a;
                                                    } else {
                                                        throw $$e;
                                                    }
                                                }
                                            }
                                            $e = new ji_IOException;
                                            jl_Exception__init_($e);
                                            $rt_throw($e);
                                        }
                                        $e = new jl_ArrayIndexOutOfBoundsException;
                                        jl_Exception__init_($e);
                                        $rt_throw($e);
                                    }
                                    return $result;
                                }
                                try {
                                } catch ($$e) {
                                    $$je = $rt_wrapException($$e);
                                    if ($$je instanceof juz_DataFormatException) {
                                        $e = $$je;
                                        break a;
                                    } else {
                                        throw $$e;
                                    }
                                }
                                return (-1);
                            }
                            try {
                                $this.$eof = 1;
                                $rt_throw(ji_EOFException__init_());
                            } catch ($$e) {
                                $$je = $rt_wrapException($$e);
                                if ($$je instanceof juz_DataFormatException) {
                                    $e = $$je;
                                    break a;
                                } else {
                                    throw $$e;
                                }
                            }
                        }
                        try {
                            $this.$eof = 1;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof juz_DataFormatException) {
                                $e = $$je;
                                break a;
                            } else {
                                throw $$e;
                            }
                        }
                        return (-1);
                    }
                    $this.$eof = 1;
                    if ($this.$len != (-1)) {
                        var$8 = new ji_IOException;
                        jl_Throwable__init_2(var$8, $e);
                        $rt_throw(var$8);
                    }
                    $e = new ji_EOFException;
                    jl_Exception__init_($e);
                    $rt_throw($e);
                }
                $e = new jl_ArrayIndexOutOfBoundsException;
                jl_Exception__init_($e);
                $rt_throw($e);
            }
        }
        $e = new jl_IndexOutOfBoundsException;
        jl_Exception__init_($e);
        $rt_throw($e);
    }
    function juz_GZIPInputStream() {
        var a = this; juz_InflaterInputStream.call(a);
        a.$crc = null;
        a.$eos = 0;
    }
    function juz_GZIPInputStream__init_(var_0) {
        var var_1 = new juz_GZIPInputStream();
        juz_GZIPInputStream__init_0(var_1, var_0);
        return var_1;
    }
    function juz_GZIPInputStream__init_1(var_0, var_1) {
        var var_2 = new juz_GZIPInputStream();
        juz_GZIPInputStream__init_2(var_2, var_0, var_1);
        return var_2;
    }
    function juz_GZIPInputStream__init_0($this, $is) {
        juz_GZIPInputStream__init_2($this, $is, 512);
    }
    function juz_GZIPInputStream__init_2($this, $is, $size) {
        var var$3, $header, var$5, $length, $flags, $hcrc, $max, $result, $crc16, $$je;
        var$3 = new juz_Inflater;
        var$3.$nowrap = 1;
        a: {
            try {
                var$3.$impl = cjj_Inflater__init_(1);
                break a;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof cjj_GZIPException) {
                } else {
                    throw $$e;
                }
            }
        }
        ji_FilterInputStream__init_0($this, $is);
        if ($is === null) {
            $is = new jl_NullPointerException;
            jl_Exception__init_($is);
            $rt_throw($is);
        }
        if ($size <= 0) {
            $is = new jl_IllegalArgumentException;
            jl_Exception__init_($is);
            $rt_throw($is);
        }
        $this.$inf = var$3;
        $this.$buf = $rt_createByteArray($size);
        $is = new juz_CRC32;
        $is.$impl0 = cjj_CRC32__init_();
        $this.$crc = $is;
        $header = $rt_createByteArray(10);
        var$5 = $header.data;
        $length = var$5.length;
        juz_GZIPInputStream_readFully($this, $header, 0, $length);
        if (juz_GZIPInputStream_getShort($this, $header, 0) != 35615) {
            $is = new ji_IOException;
            jl_Exception__init_($is);
            $rt_throw($is);
        }
        $flags = var$5[3];
        $hcrc = !($flags & 2) ? 0 : 1;
        if ($hcrc)
            juz_CRC32_update($this.$crc, $header, 0, $length);
        b: {
            if ($flags & 4) {
                juz_GZIPInputStream_readFully($this, $header, 0, 2);
                if ($hcrc)
                    juz_CRC32_update($this.$crc, $header, 0, 2);
                $length = juz_GZIPInputStream_getShort($this, $header, 0);
                while (true) {
                    if ($length <= 0)
                        break b;
                    var$5 = $this.$buf;
                    $max = var$5.data.length;
                    if ($length <= $max)
                        $max = $length;
                    $result = $this.$in.$read(var$5, 0, $max);
                    if ($result == (-1))
                        break;
                    if ($hcrc)
                        juz_CRC32_update($this.$crc, $this.$buf, 0, $result);
                    $length = $length - $result | 0;
                }
                $is = new ji_EOFException;
                jl_Exception__init_($is);
                $rt_throw($is);
            }
        }
        if ($flags & 8)
            juz_GZIPInputStream_readZeroTerminated($this, $hcrc);
        if ($flags & 16)
            juz_GZIPInputStream_readZeroTerminated($this, $hcrc);
        if ($hcrc) {
            juz_GZIPInputStream_readFully($this, $header, 0, 2);
            $crc16 = juz_GZIPInputStream_getShort($this, $header, 0);
            if (Long_ne(Long_and(juz_CRC32_getValue($this.$crc), Long_fromInt(65535)), Long_fromInt($crc16))) {
                $is = new ji_IOException;
                jl_Exception__init_($is);
                $rt_throw($is);
            }
            $is = $this.$crc;
            cjj_CRC32_reset($is.$impl0);
            $is.$tbytes = Long_ZERO;
        }
    }
    function juz_GZIPInputStream_close($this) {
        var var$1;
        $this.$eos = 1;
        if (!$this.$closed) {
            var$1 = $this.$inf;
            var$1.$inRead = 0;
            var$1.$inLength = 0;
            var$1.$impl = null;
            $this.$closed = 1;
            $this.$eof = 1;
            ji_FilterInputStream_close($this);
        }
    }
    function juz_GZIPInputStream_getLong($this, $buffer, $off) {
        $buffer = $buffer.data;
        return Long_or(Long_or(Long_or(Long_or(Long_ZERO, Long_fromInt($buffer[$off] & 255)), Long_fromInt(($buffer[$off + 1 | 0] & 255) << 8)), Long_fromInt(($buffer[$off + 2 | 0] & 255) << 16)), Long_shl(Long_fromInt($buffer[$off + 3 | 0] & 255), 24));
    }
    function juz_GZIPInputStream_getShort($this, $buffer, $off) {
        $buffer = $buffer.data;
        return $buffer[$off] & 255 | ($buffer[$off + 1 | 0] & 255) << 8;
    }
    function juz_GZIPInputStream_read($this, $buffer, $off, $nbytes) {
        var var$4, $bytesRead, var$6, $$je;
        if ($this.$closed) {
            var$4 = new ji_IOException;
            jl_Exception__init_(var$4);
            $rt_throw(var$4);
        }
        if ($this.$eos)
            return (-1);
        $bytesRead = $buffer.data.length;
        if ($off <= $bytesRead && $nbytes >= 0 && $off >= 0 && ($bytesRead - $off | 0) >= $nbytes) {
            a: {
                try {
                    $bytesRead = juz_InflaterInputStream_read0($this, $buffer, $off, $nbytes);
                    break a;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$4 = $$je;

                }
                $this.$eos = $this.$eof;
                $rt_throw(var$4);
            }
            $this.$eos = $this.$eof;
            if ($bytesRead != (-1))
                juz_CRC32_update($this.$crc, $buffer, $off, $bytesRead);
            if ($this.$eos) {
                var$4 = $this.$inf;
                $nbytes = var$4.$inLength - var$4.$inRead | 0;
                $buffer = $rt_createByteArray(8);
                var$6 = $nbytes <= 8 ? $nbytes : 8;
                jl_System_fastArraycopy($this.$buf, $this.$len - $nbytes | 0, $buffer, 0, var$6);
                juz_GZIPInputStream_readFully($this, $buffer, var$6, 8 - var$6 | 0);
                if (Long_ne(juz_GZIPInputStream_getLong($this, $buffer, 0), juz_CRC32_getValue($this.$crc))) {
                    var$4 = new ji_IOException;
                    jl_Exception__init_(var$4);
                    $rt_throw(var$4);
                }
                $off = Long_lo((juz_GZIPInputStream_getLong($this, $buffer, 4)));
                var$4 = $this.$inf.$impl;
                if (var$4 === null) {
                    var$4 = new jl_IllegalStateException;
                    jl_Exception__init_(var$4);
                    $rt_throw(var$4);
                }
                if ($off != Long_lo(var$4.$total_out)) {
                    var$4 = new ji_IOException;
                    jl_Exception__init_(var$4);
                    $rt_throw(var$4);
                }
            }
            return $bytesRead;
        }
        var$4 = new jl_ArrayIndexOutOfBoundsException;
        jl_Exception__init_(var$4);
        $rt_throw(var$4);
    }
    function juz_GZIPInputStream_readFully($this, $buffer, $offset, $length) {
        var $result, var$5;
        while ($length > 0) {
            $result = $this.$in.$read($buffer, $offset, $length);
            if ($result == (-1)) {
                var$5 = new ji_EOFException;
                jl_Exception__init_(var$5);
                $rt_throw(var$5);
            }
            $offset = $offset + $result | 0;
            $length = $length - $result | 0;
        }
    }
    function juz_GZIPInputStream_readZeroTerminated($this, $hcrc) {
        var var$2, var$3;
        while (true) {
            var$2 = $this.$in.$read1();
            if (var$2 <= 0)
                break;
            if (!$hcrc)
                continue;
            juz_CRC32_update0($this.$crc, var$2);
        }
        if (var$2 == (-1)) {
            var$3 = new ji_EOFException;
            jl_Exception__init_(var$3);
            $rt_throw(var$3);
        }
        if ($hcrc)
            juz_CRC32_update0($this.$crc, var$2);
    }
    function ji_FileInputStream() {
        ji_InputStream.call(this);
        this.$accessor = null;
    }
    var ji_FileInputStream_ONE_BYTE_BUFFER = null;
    function ji_FileInputStream__init_(var_0) {
        var var_1 = new ji_FileInputStream();
        ji_FileInputStream__init_0(var_1, var_0);
        return var_1;
    }
    function ji_FileInputStream__init_0($this, $file) {
        var var$2, var$3;
        var$2 = ji_File_fs();
        $file = ji_File_getCanonicalPathImpl($file);
        var$3 = new otrfm_VirtualFileImpl;
        var$3.$fs0 = var$2;
        var$3.$path = $file;
        otrfm_VirtualFileImpl_findInMemory(var$3);
        $file = new ji_FileNotFoundException;
        jl_Exception__init_($file);
        $rt_throw($file);
    }
    function ji_FileInputStream_read($this, $b, $off, $len) {
        var $result, var$5;
        ju_Objects_requireNonNull($b);
        if ($off >= 0 && $len >= 0 && $off <= ($b.data.length - $len | 0)) {
            if (!$len)
                return 0;
            ji_FileInputStream_ensureOpened($this);
            $result = $this.$accessor.$read($b, $off, $len);
            if ($result <= 0)
                $result = (-1);
            return $result;
        }
        var$5 = new jl_IndexOutOfBoundsException;
        jl_Exception__init_(var$5);
        $rt_throw(var$5);
    }
    function ji_FileInputStream_close($this) {
        var var$1;
        var$1 = $this.$accessor;
        if (var$1 !== null)
            var$1.$close();
        $this.$accessor = null;
    }
    function ji_FileInputStream_read0($this) {
        var $buffer;
        ji_FileInputStream_ensureOpened($this);
        $buffer = ji_FileInputStream_ONE_BYTE_BUFFER;
        return !$this.$accessor.$read($buffer, 0, 1) ? (-1) : $buffer.data[0];
    }
    function ji_FileInputStream_ensureOpened($this) {
        var var$1;
        if ($this.$accessor !== null)
            return;
        var$1 = new ji_IOException;
        jl_Throwable__init_0(var$1, $rt_s(29));
        $rt_throw(var$1);
    }
    function ji_FileInputStream__clinit_() {
        ji_FileInputStream_ONE_BYTE_BUFFER = $rt_createByteArray(1);
    }
    function ji_File() {
        jl_Object.call(this);
        this.$path0 = null;
    }
    var ji_File_separatorChar = 0;
    var ji_File_separator = null;
    var ji_File_pathSeparatorChar = 0;
    var ji_File_pathSeparator = null;
    function ji_File_$callClinit() {
        ji_File_$callClinit = $rt_eraseClinit(ji_File);
        ji_File__clinit_();
    }
    function ji_File__init_(var_0) {
        var var_1 = new ji_File();
        ji_File__init_0(var_1, var_0);
        return var_1;
    }
    function ji_File__init_0($this, $path) {
        var var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
        ji_File_$callClinit();
        ju_Objects_requireNonNull($path);
        var$2 = jl_String_length($path);
        var$3 = 0;
        ji_File_fs();
        var$4 = 0;
        var$5 = $path.$characters.data;
        var$6 = $rt_createCharArray(var$5.length);
        var$7 = var$6.data;
        var$8 = 0;
        var$9 = var$7.length;
        while (var$8 < var$9) {
            var$7[var$8] = var$5[var$8];
            var$8 = var$8 + 1 | 0;
        }
        var$8 = 0;
        while (var$8 < var$2) {
            var$9 = var$7[var$8];
            if (var$9 != 47 && var$9 != ji_File_separatorChar) {
                var$10 = var$3 + 1 | 0;
                var$7[var$3] = var$9;
                var$4 = 0;
            } else if (var$4 && var$8)
                var$10 = var$3;
            else {
                var$10 = var$3 + 1 | 0;
                var$7[var$3] = ji_File_separatorChar;
                var$4 = 1;
            }
            var$8 = var$8 + 1 | 0;
            var$3 = var$10;
        }
        if (var$4 && !(var$3 <= 1 && var$7[0] == 47))
            var$3 = var$3 + (-1) | 0;
        $this.$path0 = jl_String__init_1(var$6, 0, var$3);
    }
    function ji_File_fs() {
        var var$1, var$2, var$3;
        ji_File_$callClinit();
        if (otrf_VirtualFileSystemProvider_instance === null) {
            var$1 = new otrfm_InMemoryVirtualFileSystem;
            var$2 = new otrfm_InMemoryVirtualDirectory;
            var$2.$lastModified = jl_System_currentTimeMillis();
            var$2.$name1 = $rt_s(30);
            var$3 = new ju_LinkedHashMap;
            ju_HashMap__init_0(var$3);
            var$3.$accessOrder = 0;
            var$3.$head = null;
            var$2.$children = var$3;
            var$1.$root = var$2;
            var$1.$userDir = $rt_s(31);
            otrf_VirtualFileSystemProvider_instance = var$1;
        }
        return otrf_VirtualFileSystemProvider_instance;
    }
    function ji_File_isDriveLetter($c) {
        ji_File_$callClinit();
        a: {
            b: {
                if (!($c >= 97 && $c <= 122)) {
                    if ($c < 65)
                        break b;
                    if ($c > 90)
                        break b;
                }
                $c = 1;
                break a;
            }
            $c = 0;
        }
        return $c;
    }
    function ji_File_getCanonicalPathImpl($this) {
        var $result, $numSeparators, var$3, $i, $sepLocations, var$6, $newResult, $newLength, $lastSlash, $foundDots, $i_0, $j;
        $result = $this.$path0;
        ji_File_fs();
        if (!jl_String_isEmpty($result) && jl_String_charAt($result, 0) == ji_File_separatorChar ? 1 : 0)
            $result = $this.$path0;
        else {
            $result = (ji_File_fs()).$userDir;
            if (!jl_String_isEmpty($this.$path0)) {
                $numSeparators = jl_String_length($result);
                var$3 = new jl_StringBuilder;
                var$3.$buffer0 = $rt_createCharArray(jl_String_length($result));
                $i = 0;
                while (true) {
                    $sepLocations = var$3.$buffer0.data;
                    if ($i >= $sepLocations.length)
                        break;
                    $sepLocations[$i] = jl_String_charAt($result, $i);
                    $i = $i + 1 | 0;
                }
                var$3.$length0 = jl_String_length($result);
                if (jl_String_charAt($result, $numSeparators - 1 | 0) == ji_File_separatorChar)
                    ji_File_fs();
                else if (jl_String_charAt($this.$path0, 0) != ji_File_separatorChar)
                    jl_StringBuilder_append1(var$3, ji_File_separator);
                jl_StringBuilder_append1(var$3, $this.$path0);
                $result = jl_StringBuilder_toString(var$3);
            }
        }
        $numSeparators = 1;
        $i = 0;
        while ($i < jl_String_length($result)) {
            if (jl_String_charAt($result, $i) == ji_File_separatorChar)
                $numSeparators = $numSeparators + 1 | 0;
            $i = $i + 1 | 0;
        }
        var$6 = $rt_createIntArray($numSeparators).data;
        ji_File_fs();
        $newResult = $rt_createCharArray(jl_String_length($result) + 1 | 0);
        $sepLocations = $newResult.data;
        $newLength = 0;
        $lastSlash = 0;
        $foundDots = 0;
        var$6[$lastSlash] = 0;
        $i_0 = 0;
        a: {
            while (true) {
                if ($i_0 > jl_String_length($result))
                    break a;
                if ($i_0 < 0) {
                    $i = $newLength + 1 | 0;
                    $sepLocations[$newLength] = jl_String_charAt($result, $i_0);
                } else if ($i_0 != jl_String_length($result) && jl_String_charAt($result, $i_0) != ji_File_separatorChar) {
                    if (jl_String_charAt($result, $i_0) == 46) {
                        $foundDots = $foundDots + 1 | 0;
                        $i = $newLength;
                    } else {
                        if ($foundDots > 0) {
                            $j = 0;
                            while ($j < $foundDots) {
                                $numSeparators = $newLength + 1 | 0;
                                $sepLocations[$newLength] = 46;
                                $j = $j + 1 | 0;
                                $newLength = $numSeparators;
                            }
                        }
                        $i = $newLength + 1 | 0;
                        $sepLocations[$newLength] = jl_String_charAt($result, $i_0);
                        $foundDots = 0;
                    }
                } else {
                    if ($i_0 == jl_String_length($result) && !$foundDots)
                        break;
                    $numSeparators = $rt_compare($foundDots, 1);
                    if (!$numSeparators) {
                        $foundDots = 0;
                        $i = $newLength;
                    } else if ($numSeparators <= 0) {
                        $lastSlash = $lastSlash + 1 | 0;
                        var$6[$lastSlash] = $newLength;
                        $i = $newLength + 1 | 0;
                        $sepLocations[$newLength] = ji_File_separatorChar;
                    } else {
                        $i = $foundDots - 1 | 0;
                        $lastSlash = $lastSlash <= $i ? 0 : $lastSlash - $i | 0;
                        $i = var$6[$lastSlash] + 1 | 0;
                        $foundDots = 0;
                    }
                }
                $i_0 = $i_0 + 1 | 0;
                $newLength = $i;
            }
        }
        if ($newLength > 1 && $sepLocations[$newLength - 1 | 0] == ji_File_separatorChar)
            $newLength = $newLength + (-1) | 0;
        return jl_String__init_1($newResult, 0, $newLength);
    }
    function ji_File__clinit_() {
        ji_File_fs();
        ji_File_separatorChar = 47;
        ji_File_separator = jl_String_valueOf(47);
        ji_File_fs();
        ji_File_pathSeparatorChar = 58;
        ji_File_pathSeparator = jl_String_valueOf(58);
    }
    var ju_Map$Entry = $rt_classWithoutFields(0);
    function ju_MapEntry() {
        var a = this; jl_Object.call(a);
        a.$key = null;
        a.$value = null;
    }
    function ju_HashMap$HashEntry() {
        var a = this; ju_MapEntry.call(a);
        a.$origKeyHash = 0;
        a.$next = null;
    }
    var nPo_LWJGLMain = $rt_classWithoutFields();
    var nPo_LWJGLMain_isAnisotropicPatched = 0;
    var nPo_LWJGLMain_doc = null;
    var nPo_LWJGLMain_parent = null;
    var nPo_LWJGLMain_canvas = null;
    var nPo_LWJGLMain_canvasContext = null;
    var nPo_LWJGLMain_canvasBack = null;
    var nPo_LWJGLMain_webgl = null;
    var nPo_LWJGLMain_win = null;
    var nPo_LWJGLMain_loadedPackage = null;
    var nPo_LWJGLMain_contextmenu = null;
    var nPo_LWJGLMain_mousedown = null;
    var nPo_LWJGLMain_mouseup = null;
    var nPo_LWJGLMain_mousemove = null;
    var nPo_LWJGLMain_keydown = null;
    var nPo_LWJGLMain_keyup = null;
    var nPo_LWJGLMain_keypress = null;
    var nPo_LWJGLMain_wheel = null;
    var nPo_LWJGLMain_identifier = null;
    var nPo_LWJGLMain_mouseEvents = null;
    var nPo_LWJGLMain_keyEvents = null;
    var nPo_LWJGLMain_mouseX = 0;
    var nPo_LWJGLMain_mouseY = 0;
    var nPo_LWJGLMain_mouseDX = 0.0;
    var nPo_LWJGLMain_mouseDY = 0.0;
    var nPo_LWJGLMain_width = 0;
    var nPo_LWJGLMain_height = 0;
    var nPo_LWJGLMain_enableRepeatEvents = 0;
    var nPo_LWJGLMain_isWindowFocused = 0;
    var nPo_LWJGLMain_progId = 0;
    var nPo_LWJGLMain_viewportCache = null;
    var nPo_LWJGLMain_uploadBuffer = null;
    var nPo_LWJGLMain_mat2 = null;
    var nPo_LWJGLMain_mat3 = null;
    var nPo_LWJGLMain_mat4 = null;
    var nPo_LWJGLMain_currentProgram = 0;
    var nPo_LWJGLMain_imageLoadCanvas = null;
    var nPo_LWJGLMain_imageLoadContext = null;
    var nPo_LWJGLMain_currentEvent = null;
    var nPo_LWJGLMain_currentEventK = null;
    var nPo_LWJGLMain_buttonStates = null;
    var nPo_LWJGLMain_keyStates = null;
    var nPo_LWJGLMain_mouseUngrabTimer = Long_ZERO;
    var nPo_LWJGLMain_mouseUngrabTimeout = 0;
    var nPo_LWJGLMain_needsPointerLock = 0;
    var nPo_LWJGLMain_pointerLockFlag = 0;
    var nPo_LWJGLMain_rateLimitedAddresses = null;
    var nPo_LWJGLMain_blockedAddresses = null;
    var nPo_LWJGLMain_sock = null;
    var nPo_LWJGLMain_sockIsConnecting = 0;
    var nPo_LWJGLMain_sockIsConnected = 0;
    var nPo_LWJGLMain_sockIsAlive = 0;
    var nPo_LWJGLMain_readPackets = null;
    var nPo_LWJGLMain_rateLimitStatus = null;
    var nPo_LWJGLMain_currentSockURI = null;
    var nPo_LWJGLMain_playbackId = 0;
    var nPo_LWJGLMain_loadedSoundFiles = null;
    var nPo_LWJGLMain_audioctx = null;
    var nPo_LWJGLMain_playbackOffsetDelay = 0.0;
    var nPo_LWJGLMain_activeSoundEffects = null;
    var nPo_LWJGLMain_connected = 0;
    var nPo_LWJGLMain_LWJGLKeyNames = null;
    var nPo_LWJGLMain_LWJGLKeyCodes = null;
    var nPo_LWJGLMain_appendbufferindex = 0;
    var nPo_LWJGLMain_appendbuffer = null;
    var nPo_LWJGLMain_unpressCTRL = 0;
    function nPo_LWJGLMain_$callClinit() {
        nPo_LWJGLMain_$callClinit = $rt_eraseClinit(nPo_LWJGLMain);
        nPo_LWJGLMain__clinit_();
    }
    function nPo_LWJGLMain__clinit_() {
        nPo_LWJGLMain_isAnisotropicPatched = 0;
        nPo_LWJGLMain_doc = null;
        nPo_LWJGLMain_parent = null;
        nPo_LWJGLMain_canvas = null;
        nPo_LWJGLMain_canvasContext = null;
        nPo_LWJGLMain_canvasBack = null;
        nPo_LWJGLMain_webgl = null;
        nPo_LWJGLMain_win = null;
        nPo_LWJGLMain_loadedPackage = null;
        nPo_LWJGLMain_contextmenu = null;
        nPo_LWJGLMain_mousedown = null;
        nPo_LWJGLMain_mouseup = null;
        nPo_LWJGLMain_mousemove = null;
        nPo_LWJGLMain_keydown = null;
        nPo_LWJGLMain_keyup = null;
        nPo_LWJGLMain_keypress = null;
        nPo_LWJGLMain_wheel = null;
        nPo_LWJGLMain_identifier = $rt_createArray(jl_String, 0);
        nPo_LWJGLMain_mouseEvents = ju_LinkedList__init_();
        nPo_LWJGLMain_keyEvents = ju_LinkedList__init_();
        nPo_LWJGLMain_mouseX = 0;
        nPo_LWJGLMain_mouseY = 0;
        nPo_LWJGLMain_mouseDX = 0.0;
        nPo_LWJGLMain_mouseDY = 0.0;
        nPo_LWJGLMain_width = 0;
        nPo_LWJGLMain_height = 0;
        nPo_LWJGLMain_enableRepeatEvents = 0;
        nPo_LWJGLMain_isWindowFocused = 1;
        nPo_LWJGLMain_progId = 0;
        nPo_LWJGLMain_viewportCache = $rt_createIntArray(4);
        nPo_LWJGLMain_uploadBuffer = new $rt_globals.Uint8Array(new $rt_globals.ArrayBuffer(4194304));
        nPo_LWJGLMain_mat2 = new $rt_globals.Float32Array(4);
        nPo_LWJGLMain_mat3 = new $rt_globals.Float32Array(9);
        nPo_LWJGLMain_mat4 = new $rt_globals.Float32Array(16);
        nPo_LWJGLMain_currentProgram = (-1);
        nPo_LWJGLMain_imageLoadCanvas = null;
        nPo_LWJGLMain_imageLoadContext = null;
        nPo_LWJGLMain_currentEvent = null;
        nPo_LWJGLMain_currentEventK = null;
        nPo_LWJGLMain_buttonStates = $rt_createBooleanArray(8);
        nPo_LWJGLMain_keyStates = $rt_createBooleanArray(256);
        nPo_LWJGLMain_mouseUngrabTimer = Long_ZERO;
        nPo_LWJGLMain_mouseUngrabTimeout = 0;
        nPo_LWJGLMain_needsPointerLock = 0;
        nPo_LWJGLMain_pointerLockFlag = 0;
        nPo_LWJGLMain_rateLimitedAddresses = ju_HashSet__init_();
        nPo_LWJGLMain_blockedAddresses = ju_HashSet__init_();
        nPo_LWJGLMain_sock = null;
        nPo_LWJGLMain_sockIsConnecting = 0;
        nPo_LWJGLMain_sockIsConnected = 0;
        nPo_LWJGLMain_sockIsAlive = 0;
        nPo_LWJGLMain_readPackets = ju_LinkedList__init_();
        nPo_LWJGLMain_rateLimitStatus = null;
        nPo_LWJGLMain_currentSockURI = null;
        nPo_LWJGLMain_playbackId = 0;
        nPo_LWJGLMain_loadedSoundFiles = ju_HashMap__init_();
        nPo_LWJGLMain_audioctx = null;
        nPo_LWJGLMain_playbackOffsetDelay = 0.029999999329447746;
        nPo_LWJGLMain_activeSoundEffects = ju_HashMap__init_();
        nPo_LWJGLMain_connected = 0;
        nPo_LWJGLMain_LWJGLKeyNames = $rt_createArrayFromData(jl_String, [$rt_s(32), $rt_s(33), $rt_s(34), $rt_s(35), $rt_s(36), $rt_s(37), $rt_s(38), $rt_s(39), $rt_s(40), $rt_s(41), $rt_s(42), $rt_s(0), $rt_s(43), $rt_s(44), $rt_s(45), $rt_s(46), $rt_s(47), $rt_s(48), $rt_s(49), $rt_s(50), $rt_s(51), $rt_s(52), $rt_s(53), $rt_s(54), $rt_s(55), $rt_s(56), $rt_s(57), $rt_s(58), $rt_s(59), $rt_s(60), $rt_s(61), $rt_s(62), $rt_s(63), $rt_s(64), $rt_s(65), $rt_s(66), $rt_s(67), $rt_s(68), $rt_s(69), $rt_s(70),
        $rt_s(71), $rt_s(72), $rt_s(73), $rt_s(74), $rt_s(75), $rt_s(76), $rt_s(77), $rt_s(78), $rt_s(79), $rt_s(80), $rt_s(81), $rt_s(82), $rt_s(83), $rt_s(84), $rt_s(85), $rt_s(86), $rt_s(87), $rt_s(88), $rt_s(89), $rt_s(90), $rt_s(91), $rt_s(92), $rt_s(93), $rt_s(94), $rt_s(95), $rt_s(96), $rt_s(97), $rt_s(98), $rt_s(99), $rt_s(100), $rt_s(101), $rt_s(102), $rt_s(103), $rt_s(104), $rt_s(105), $rt_s(106), $rt_s(107), $rt_s(108), $rt_s(109), $rt_s(110), $rt_s(111), $rt_s(112), $rt_s(113), $rt_s(114), $rt_s(5),
        $rt_s(5), $rt_s(5), $rt_s(115), $rt_s(116), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(117), $rt_s(118), $rt_s(119), $rt_s(120), $rt_s(121), $rt_s(122), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(123), $rt_s(124), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(125), $rt_s(5), $rt_s(126), $rt_s(5), $rt_s(127), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5),
        $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(128), $rt_s(5), $rt_s(5), $rt_s(129), $rt_s(130), $rt_s(131), $rt_s(132), $rt_s(133), $rt_s(134), $rt_s(135), $rt_s(136), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(137), $rt_s(138), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(139), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(140), $rt_s(5),
        $rt_s(141), $rt_s(5), $rt_s(142), $rt_s(143), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(144), $rt_s(145), $rt_s(5), $rt_s(146), $rt_s(147), $rt_s(148), $rt_s(5), $rt_s(149), $rt_s(5), $rt_s(150), $rt_s(5), $rt_s(151), $rt_s(152), $rt_s(153), $rt_s(154), $rt_s(155), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(156), $rt_s(157), $rt_s(158), $rt_s(159), $rt_s(160), $rt_s(161), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5),
        $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5), $rt_s(5)]);
        nPo_LWJGLMain_LWJGLKeyCodes = $rt_createIntArrayFromData([(-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 14, 15, (-1), (-1), (-1), 28, (-1), (-1), 42, 29, 56, (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 1, (-1), (-1), (-1), (-1), 57, 210, 201, 207, 199, 203, 200, 205, 208, 205, 208, (-1), (-1), 210, 211, 211, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 30, 48, 46, 32, 18, 33, 34, 35, 23, 36, 37, 38, 50, 49, 24, 25, 16, 19, 31, 20, 22, 47, 17, 45, 21, 44, (-1), (-1),
        (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 12, 52, 53, (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1),
        (-1), (-1), (-1), (-1), (-1), (-1), (-1), 39, 13, 51, 12, 52, 53, (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 26, 43, 27, 40]);
        nPo_LWJGLMain_appendbufferindex = 0;
        nPo_LWJGLMain_appendbuffer = new $rt_globals.Int32Array(new $rt_globals.ArrayBuffer(2100000));
        nPo_LWJGLMain_unpressCTRL = 0;
    }
    var ju_Objects = $rt_classWithoutFields();
    function ju_Objects_requireNonNull($obj) {
        if ($obj !== null)
            return $obj;
        $obj = new jl_NullPointerException;
        jl_Throwable__init_0($obj, $rt_s(30));
        $rt_throw($obj);
    }
    var ji_IOException = $rt_classWithoutFields(jl_Exception);
    var ji_FileNotFoundException = $rt_classWithoutFields(ji_IOException);
    var ju_Arrays = $rt_classWithoutFields();
    function ju_Arrays_copyOf($array, $length) {
        var $result, var$4, $sz, $i;
        $array = $array.data;
        $result = $rt_createByteArray($length);
        var$4 = $result.data;
        $sz = jl_Math_min($length, $array.length);
        $i = 0;
        while ($i < $sz) {
            var$4[$i] = $array[$i];
            $i = $i + 1 | 0;
        }
        return $result;
    }
    var otjt_Uint8Array = $rt_classWithoutFields(otjt_ArrayBufferView);
    function juz_Inflater() {
        var a = this; jl_Object.call(a);
        a.$finished0 = 0;
        a.$nowrap = 0;
        a.$inLength = 0;
        a.$inRead = 0;
        a.$needsDictionary0 = 0;
        a.$impl = null;
    }
    function juz_Inflater_finished($this) {
        return $this.$finished0;
    }
    function juz_Inflater_inflate($this, $buf, $off, $nbytes) {
        var $neededDict, var$5, $lastInSize, $lastOutSize, var$8, $errCode, var$10;
        $neededDict = $buf.data.length;
        if ($off <= $neededDict && $nbytes >= 0 && $off >= 0 && ($neededDict - $off | 0) >= $nbytes) {
            if ($this.$impl === null) {
                var$5 = new jl_IllegalStateException;
                jl_Exception__init_(var$5);
                $rt_throw(var$5);
            }
            if (juz_Inflater_needsInput($this))
                return 0;
            var$5 = $this.$impl;
            $lastInSize = var$5.$total_in;
            $lastOutSize = var$5.$total_out;
            $neededDict = $this.$needsDictionary0;
            $this.$needsDictionary0 = 0;
            var$5.$next_out = $buf;
            var$5.$next_out_index = $off;
            var$5.$avail_out = $nbytes;
            var$8 = var$5.$istate;
            if (var$8 === null)
                $errCode = (-2);
            else {
                $errCode = cjj_Inflate_inflate(var$8, 0);
                if ($errCode == 1)
                    var$5.$finished1 = 1;
            }
            a: {
                switch ($errCode) {
                    case 0:
                        break a;
                    case 1:
                        $this.$finished0 = 1;
                        break a;
                    case 2:
                        $this.$needsDictionary0 = 1;
                        break a;
                    default:
                }
                var$5 = new juz_DataFormatException;
                var$8 = jl_StringBuilder__init_();
                jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(162)), $errCode);
                jl_Throwable__init_0(var$5, jl_StringBuilder_toString(var$8));
                $rt_throw(var$5);
            }
            if ($this.$needsDictionary0 && $neededDict) {
                var$5 = new juz_DataFormatException;
                jl_Exception__init_(var$5);
                $rt_throw(var$5);
            }
            var$10 = Long_fromInt($this.$inRead);
            var$5 = $this.$impl;
            $this.$inRead = Long_lo(Long_add(var$10, Long_sub(var$5.$total_in, $lastInSize)));
            return Long_lo(Long_sub(var$5.$total_out, $lastOutSize));
        }
        var$5 = new jl_ArrayIndexOutOfBoundsException;
        jl_Exception__init_(var$5);
        $rt_throw(var$5);
    }
    function juz_Inflater_needsDictionary($this) {
        return $this.$needsDictionary0;
    }
    function juz_Inflater_needsInput($this) {
        return $this.$inRead != $this.$inLength ? 0 : 1;
    }
    var juz_Checksum = $rt_classWithoutFields(0);
    function juz_CRC32() {
        var a = this; jl_Object.call(a);
        a.$impl0 = null;
        a.$tbytes = Long_ZERO;
    }
    function juz_CRC32_getValue($this) {
        return cjj_CRC32_getValue($this.$impl0);
    }
    function juz_CRC32_update0($this, $val) {
        var var$2, var$3;
        var$2 = $this.$impl0;
        var$3 = $rt_createByteArray(1);
        var$3.data[0] = $val << 24 >> 24;
        cjj_CRC32_update(var$2, var$3, 0, 1);
    }
    function juz_CRC32_update($this, $buf, $off, $nbytes) {
        var var$4, var$5;
        var$4 = $buf.data.length;
        if ($off <= var$4 && $nbytes >= 0 && $off >= 0 && (var$4 - $off | 0) >= $nbytes) {
            cjj_CRC32_update($this.$impl0, $buf, $off, $nbytes);
            $this.$tbytes = Long_add($this.$tbytes, Long_fromInt($nbytes));
            return;
        }
        var$5 = new jl_ArrayIndexOutOfBoundsException;
        jl_Exception__init_(var$5);
        $rt_throw(var$5);
    }
    var ji_EOFException = $rt_classWithoutFields(ji_IOException);
    function ji_EOFException__init_() {
        var var_0 = new ji_EOFException();
        ji_EOFException__init_0(var_0);
        return var_0;
    }
    function ji_EOFException__init_0($this) {
        jl_Exception__init_($this);
    }
    var ju_AbstractSequentialList = $rt_classWithoutFields(ju_AbstractList);
    var ju_Queue = $rt_classWithoutFields(0);
    var ju_Deque = $rt_classWithoutFields(0);
    var ju_LinkedList = $rt_classWithoutFields(ju_AbstractSequentialList);
    function ju_LinkedList__init_() {
        var var_0 = new ju_LinkedList();
        ju_LinkedList__init_0(var_0);
        return var_0;
    }
    function ju_LinkedList__init_0($this) {}
    var otjt_ArrayBuffer = $rt_classWithoutFields();
    var ju_Set = $rt_classWithoutFields(0);
    var ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection);
    function ju_HashSet() {
        ju_AbstractSet.call(this);
        this.$backingMap = null;
    }
    function ju_HashSet__init_() {
        var var_0 = new ju_HashSet();
        ju_HashSet__init_0(var_0);
        return var_0;
    }
    function ju_HashSet__init_0($this) {
        $this.$backingMap = ju_HashMap__init_();
    }
    var otjt_Int32Array = $rt_classWithoutFields(otjt_ArrayBufferView);
    var otrf_VirtualFileSystemProvider = $rt_classWithoutFields();
    var otrf_VirtualFileSystemProvider_instance = null;
    function cjj_ZStream() {
        var a = this; jl_Object.call(a);
        a.$next_in = null;
        a.$next_in_index = 0;
        a.$avail_in = 0;
        a.$total_in = Long_ZERO;
        a.$next_out = null;
        a.$next_out_index = 0;
        a.$avail_out = 0;
        a.$total_out = Long_ZERO;
        a.$msg = null;
        a.$istate = null;
        a.$adler = null;
    }
    function cjj_Inflater() {
        cjj_ZStream.call(this);
        this.$finished1 = 0;
    }
    function cjj_Inflater__init_(var_0) {
        var var_1 = new cjj_Inflater();
        cjj_Inflater__init_0(var_1, var_0);
        return var_1;
    }
    function cjj_Inflater__init_0($this, $nowrap) {
        var var$2, var$3, var$4, var$5;
        var$2 = 15;
        $this.$adler = cjj_Adler32__init_();
        $this.$finished1 = 0;
        $this.$finished1 = 0;
        var$3 = new cjj_Inflate;
        var$3.$was = Long_fromInt(-1);
        var$3.$need_bytes = (-1);
        var$3.$crcbuf = $rt_createByteArray(4);
        var$3.$gheader = null;
        var$3.$tmp_string = null;
        var$3.$z2 = $this;
        $this.$istate = var$3;
        if ($nowrap)
            var$2 = (-15);
        $this.$msg = null;
        var$3.$blocks0 = null;
        var$3.$wrap0 = 0;
        if (var$2 < 0)
            var$2 =  -var$2 | 0;
        else if (var$2 & 1073741824) {
            var$3.$wrap0 = 4;
            var$2 = var$2 & (-1073741825);
            if (var$2 < 48)
                var$2 = var$2 & 15;
        } else if (var$2 & (-32)) {
            var$3.$wrap0 = 4;
            var$2 = var$2 & 15;
        } else {
            var$3.$wrap0 = (var$2 >> 4) + 1 | 0;
            if (var$2 < 48)
                var$2 = var$2 & 15;
        }
        if (var$2 >= 8 && var$2 <= 15) {
            var$3.$wbits = var$2;
            var$4 = new cjj_InfBlocks;
            var$2 = 1 << var$2;
            var$4.$bb0 = $rt_createIntArray(1);
            var$4.$tb = $rt_createIntArray(1);
            var$4.$bl = $rt_createIntArray(1);
            var$4.$bd = $rt_createIntArray(1);
            var$4.$tl = $rt_createArray($rt_arraycls($rt_intcls()), 1);
            var$4.$td = $rt_createArray($rt_arraycls($rt_intcls()), 1);
            var$4.$tli = $rt_createIntArray(1);
            var$4.$tdi = $rt_createIntArray(1);
            var$5 = new cjj_InfTree;
            var$5.$hn = null;
            var$5.$v = null;
            var$5.$c = null;
            var$5.$r = null;
            var$5.$u = null;
            var$5.$x2 = null;
            var$4.$inftree = var$5;
            var$4.$z3 = $this;
            var$5 = new cjj_InfCodes;
            var$5.$tree_index = 0;
            var$5.$z4 = $this;
            var$5.$s = var$4;
            var$4.$codes = var$5;
            var$4.$hufts = $rt_createIntArray(4320);
            var$4.$window = $rt_createByteArray(var$2);
            var$4.$end = var$2;
            var$4.$check = var$3.$wrap0 ? 1 : 0;
            var$4.$mode = 0;
            cjj_InfBlocks_reset(var$4);
            var$3.$blocks0 = var$4;
            var$5 = var$3.$z2;
            if (var$5 !== null) {
                var$5.$total_out = Long_ZERO;
                var$5.$total_in = Long_ZERO;
                var$5.$msg = null;
                var$3.$mode0 = 14;
                var$3.$need_bytes = (-1);
                cjj_InfBlocks_reset(var$4);
            }
            $nowrap = 0;
        } else
            $nowrap = (-2);
        if (!$nowrap)
            return;
        var$3 = new cjj_GZIPException;
        jl_Throwable__init_0(var$3, jl_StringBuilder_toString(jl_StringBuilder_append1(jl_StringBuilder_append1(jl_StringBuilder_append2(jl_StringBuilder__init_(), $nowrap), $rt_s(2)), $this.$msg)));
        $rt_throw(var$3);
    }
    var cjj_GZIPException = $rt_classWithoutFields(ji_IOException);
    var cjj_Checksum = $rt_classWithoutFields(0);
    function cjj_CRC32() {
        jl_Object.call(this);
        this.$v0 = 0;
    }
    var cjj_CRC32_crc_table = null;
    function cjj_CRC32__init_() {
        var var_0 = new cjj_CRC32();
        cjj_CRC32__init_0(var_0);
        return var_0;
    }
    function cjj_CRC32__init_0($this) {
        $this.$v0 = 0;
    }
    function cjj_CRC32_update($this, $buf, $index, $len) {
        var $c, var$5, var$6, var$7;
        $c = $this.$v0 ^ (-1);
        while (true) {
            $len = $len + (-1) | 0;
            if ($len < 0)
                break;
            var$5 = $buf.data;
            var$6 = cjj_CRC32_crc_table.data;
            var$7 = $index + 1 | 0;
            $c = var$6[($c ^ var$5[$index]) & 255] ^ ($c >>> 8 | 0);
            $index = var$7;
        }
        $this.$v0 = $c ^ (-1);
    }
    function cjj_CRC32_reset($this) {
        $this.$v0 = 0;
    }
    function cjj_CRC32_reset0($this, $vv) {
        $this.$v0 = Long_lo(Long_and($vv, Long_create(4294967295, 0)));
    }
    function cjj_CRC32_getValue($this) {
        return Long_and(Long_fromInt($this.$v0), Long_create(4294967295, 0));
    }
    function cjj_CRC32__clinit_() {
        var var$1, var$2, $n, $k, var$5;
        cjj_CRC32_crc_table = null;
        var$1 = $rt_createIntArray(256);
        var$2 = var$1.data;
        cjj_CRC32_crc_table = var$1;
        $n = 0;
        while ($n < 256) {
            $k = 8;
            var$5 = $n;
            while (true) {
                $k = $k + (-1) | 0;
                if ($k < 0)
                    break;
                if (!(var$5 & 1)) {
                    var$5 = var$5 >>> 1 | 0;
                    continue;
                }
                var$5 = (-306674912) ^ (var$5 >>> 1 | 0);
            }
            var$2[$n] = var$5;
            $n = $n + 1 | 0;
        }
    }
    var otrf_VirtualFileSystem = $rt_classWithoutFields(0);
    function otrfm_InMemoryVirtualFileSystem() {
        var a = this; jl_Object.call(a);
        a.$root = null;
        a.$userDir = null;
    }
    function otrfm_AbstractInMemoryVirtualFile() {
        var a = this; jl_Object.call(a);
        a.$name1 = null;
        a.$lastModified = Long_ZERO;
    }
    function otrfm_InMemoryVirtualDirectory() {
        otrfm_AbstractInMemoryVirtualFile.call(this);
        this.$children = null;
    }
    function cjj_Adler32() {
        var a = this; jl_Object.call(a);
        a.$s1 = Long_ZERO;
        a.$s2 = Long_ZERO;
    }
    function cjj_Adler32__init_() {
        var var_0 = new cjj_Adler32();
        cjj_Adler32__init_0(var_0);
        return var_0;
    }
    function cjj_Adler32__init_0($this) {
        $this.$s1 = Long_fromInt(1);
        $this.$s2 = Long_ZERO;
    }
    function cjj_Adler32_reset($this, $init) {
        $this.$s1 = Long_and($init, Long_fromInt(65535));
        $this.$s2 = Long_and(Long_shr($init, 16), Long_fromInt(65535));
    }
    function cjj_Adler32_reset0($this) {
        $this.$s1 = Long_fromInt(1);
        $this.$s2 = Long_ZERO;
    }
    function cjj_Adler32_getValue($this) {
        return Long_or(Long_shl($this.$s2, 16), $this.$s1);
    }
    function cjj_Adler32_update($this, $buf, $index, $len) {
        var var$4, var$5, $len1, $len2, var$8, $k, var$10;
        if ($len == 1) {
            $buf = $buf.data;
            var$4 = Long_add($this.$s1, Long_fromInt($buf[$index] & 255));
            $this.$s1 = var$4;
            var$5 = Long_add($this.$s2, var$4);
            $this.$s2 = var$5;
            $this.$s1 = Long_rem(var$4, Long_fromInt(65521));
            $this.$s2 = Long_rem(var$5, Long_fromInt(65521));
            return;
        }
        $len1 = $len / 5552 | 0;
        $len2 = $len % 5552 | 0;
        while (true) {
            var$8 = $len1 + (-1) | 0;
            if ($len1 <= 0)
                break;
            $k = 5552;
            while (true) {
                $len1 = $k + (-1) | 0;
                if ($k <= 0)
                    break;
                var$10 = $buf.data;
                var$4 = $this.$s1;
                $len = $index + 1 | 0;
                var$4 = Long_add(var$4, Long_fromInt(var$10[$index] & 255));
                $this.$s1 = var$4;
                $this.$s2 = Long_add($this.$s2, var$4);
                $k = $len1;
                $index = $len;
            }
            $this.$s1 = Long_rem($this.$s1, Long_fromInt(65521));
            $this.$s2 = Long_rem($this.$s2, Long_fromInt(65521));
            $len1 = var$8;
        }
        while (true) {
            $len = $len2 + (-1) | 0;
            if ($len2 <= 0)
                break;
            var$10 = $buf.data;
            var$4 = $this.$s1;
            var$8 = $index + 1 | 0;
            var$4 = Long_add(var$4, Long_fromInt(var$10[$index] & 255));
            $this.$s1 = var$4;
            $this.$s2 = Long_add($this.$s2, var$4);
            $len2 = $len;
            $index = var$8;
        }
        $this.$s1 = Long_rem($this.$s1, Long_fromInt(65521));
        $this.$s2 = Long_rem($this.$s2, Long_fromInt(65521));
    }
    var ju_SequencedMap = $rt_classWithoutFields(0);
    function ju_LinkedHashMap() {
        var a = this; ju_HashMap.call(a);
        a.$accessOrder = 0;
        a.$head = null;
        a.$tail = null;
    }
    function ju_LinkedHashMap_newElementArray($this, $s) {
        return $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry, $s);
    }
    var jl_ArrayIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException);
    function ju_LinkedHashMap$LinkedHashMapEntry() {
        var a = this; ju_HashMap$HashEntry.call(a);
        a.$chainForward = null;
        a.$chainBackward = null;
    }
    function cjj_Inflate() {
        var a = this; jl_Object.call(a);
        a.$mode0 = 0;
        a.$method = 0;
        a.$was = Long_ZERO;
        a.$need = Long_ZERO;
        a.$marker = 0;
        a.$wrap0 = 0;
        a.$wbits = 0;
        a.$blocks0 = null;
        a.$z2 = null;
        a.$flags = 0;
        a.$need_bytes = 0;
        a.$crcbuf = null;
        a.$gheader = null;
        a.$tmp_string = null;
    }
    var cjj_Inflate_mark = null;
    function cjj_Inflate_inflate($this, $f) {
        var $e, var$3, $r, var$5, $foo, var$7, var$8, $b, var$10, $$je;
        $e = $this.$z2;
        if ($e !== null && $e.$next_in !== null) {
            var$3 = $f != 4 ? 0 : (-5);
            $r = (-5);
            a: {
                b: {
                    c: {
                        d: {
                            e: {
                                f: {
                                    g: {
                                        h: {
                                            i: while (true) {
                                                j: {
                                                    k: {
                                                        l: {
                                                            m: {
                                                                n: {
                                                                    o: {
                                                                        p: {
                                                                            q: {
                                                                                r: {
                                                                                    s: {
                                                                                        t: {
                                                                                            u: {
                                                                                                v: {
                                                                                                    w: {
                                                                                                        switch ($this.$mode0) {
                                                                                                            case 6:
                                                                                                                $this.$mode0 = 13;
                                                                                                                $this.$z2.$msg = $rt_s(163);
                                                                                                                $this.$marker = 0;
                                                                                                                return (-2);
                                                                                                            case 7:
                                                                                                                $r = cjj_InfBlocks_proc($this.$blocks0, $r);
                                                                                                                if ($r == (-3)) {
                                                                                                                    $this.$mode0 = 13;
                                                                                                                    $this.$marker = 0;
                                                                                                                    continue i;
                                                                                                                }
                                                                                                                if (!$r)
                                                                                                                    $r = var$3;
                                                                                                                if ($r != 1)
                                                                                                                    break i;
                                                                                                                $this.$was = $this.$z2.$adler.$getValue();
                                                                                                                cjj_InfBlocks_reset($this.$blocks0);
                                                                                                                if (!$this.$wrap0) {
                                                                                                                    $this.$mode0 = 12;
                                                                                                                    $r = var$3;
                                                                                                                    continue i;
                                                                                                                }
                                                                                                                $this.$mode0 = 8;
                                                                                                                $r = var$3;
                                                                                                                break w;
                                                                                                            case 12:
                                                                                                                break e;
                                                                                                            case 13:
                                                                                                                return (-3);
                                                                                                            case 14:
                                                                                                                break r;
                                                                                                            case 23:
                                                                                                                try {
                                                                                                                    $r = cjj_Inflate_readBytes($this, 2, $r, var$3);
                                                                                                                } catch ($$e) {
                                                                                                                    $$je = $rt_wrapException($$e);
                                                                                                                    if ($$je instanceof cjj_Inflate$Return) {
                                                                                                                        $e = $$je;
                                                                                                                        return $e.$r0;
                                                                                                                    } else {
                                                                                                                        throw $$e;
                                                                                                                    }
                                                                                                                }
                                                                                                                var$5 = $this.$need;
                                                                                                                $f = Long_lo(var$5) & 65535;
                                                                                                                $this.$flags = $f;
                                                                                                                if (($f & 255) != 8) {
                                                                                                                    $this.$z2.$msg = $rt_s(164);
                                                                                                                    $this.$mode0 = 13;
                                                                                                                    continue i;
                                                                                                                }
                                                                                                                if ($f & 57344) {
                                                                                                                    $this.$z2.$msg = $rt_s(165);
                                                                                                                    $this.$mode0 = 13;
                                                                                                                    continue i;
                                                                                                                }
                                                                                                                if ($f & 512)
                                                                                                                    cjj_Inflate_checksum($this, 2, var$5);
                                                                                                                $this.$mode0 = 16;
                                                                                                                break p;
                                                                                                            case 2:
                                                                                                                break d;
                                                                                                            case 3:
                                                                                                                break c;
                                                                                                            case 4:
                                                                                                                break b;
                                                                                                            case 5:
                                                                                                                var$3 = $r;
                                                                                                                break a;
                                                                                                            case 8:
                                                                                                                break w;
                                                                                                            case 9:
                                                                                                                break v;
                                                                                                            case 10:
                                                                                                                break u;
                                                                                                            case 11:
                                                                                                                break t;
                                                                                                            case 15:
                                                                                                                break s;
                                                                                                            case 16:
                                                                                                                break p;
                                                                                                            case 17:
                                                                                                                break o;
                                                                                                            case 18:
                                                                                                                break n;
                                                                                                            case 19:
                                                                                                                break q;
                                                                                                            case 20:
                                                                                                                break l;
                                                                                                            case 21:
                                                                                                                break k;
                                                                                                            case 22:
                                                                                                                break;
                                                                                                            default:
                                                                                                                return (-2);
                                                                                                        }
                                                                                                        break j;
                                                                                                    }
                                                                                                    $e = $this.$z2;
                                                                                                    $f = $e.$avail_in;
                                                                                                    if (!$f)
                                                                                                        return $r;
                                                                                                    $e.$avail_in = $f - 1 | 0;
                                                                                                    $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
                                                                                                    $foo = $e.$next_in.data;
                                                                                                    $f = $e.$next_in_index;
                                                                                                    $e.$next_in_index = $f + 1 | 0;
                                                                                                    $this.$need = Long_and(Long_fromInt(($foo[$f] & 255) << 24), Long_create(4278190080, 0));
                                                                                                    $this.$mode0 = 9;
                                                                                                    $r = var$3;
                                                                                                }
                                                                                                $e = $this.$z2;
                                                                                                $f = $e.$avail_in;
                                                                                                if (!$f)
                                                                                                    return $r;
                                                                                                $e.$avail_in = $f - 1 | 0;
                                                                                                $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
                                                                                                var$5 = $this.$need;
                                                                                                $foo = $e.$next_in.data;
                                                                                                $f = $e.$next_in_index;
                                                                                                $e.$next_in_index = $f + 1 | 0;
                                                                                                $this.$need = Long_add(var$5, Long_and(Long_fromInt(($foo[$f] & 255) << 16), Long_fromInt(16711680)));
                                                                                                $this.$mode0 = 10;
                                                                                                $r = var$3;
                                                                                            }
                                                                                            $e = $this.$z2;
                                                                                            $f = $e.$avail_in;
                                                                                            if (!$f)
                                                                                                return $r;
                                                                                            $e.$avail_in = $f - 1 | 0;
                                                                                            $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
                                                                                            var$5 = $this.$need;
                                                                                            $foo = $e.$next_in.data;
                                                                                            $f = $e.$next_in_index;
                                                                                            $e.$next_in_index = $f + 1 | 0;
                                                                                            $this.$need = Long_add(var$5, Long_and(Long_fromInt(($foo[$f] & 255) << 8), Long_fromInt(65280)));
                                                                                            $this.$mode0 = 11;
                                                                                            $r = var$3;
                                                                                        }
                                                                                        $e = $this.$z2;
                                                                                        $f = $e.$avail_in;
                                                                                        if (!$f)
                                                                                            return $r;
                                                                                        $e.$avail_in = $f - 1 | 0;
                                                                                        $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
                                                                                        var$5 = $this.$need;
                                                                                        $foo = $e.$next_in.data;
                                                                                        $f = $e.$next_in_index;
                                                                                        $e.$next_in_index = $f + 1 | 0;
                                                                                        var$5 = Long_add(var$5, Long_and(Long_fromInt($foo[$f]), Long_fromInt(255)));
                                                                                        $this.$need = var$5;
                                                                                        $f = $this.$flags;
                                                                                        if ($f)
                                                                                            $this.$need = Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(var$5, Long_fromInt(-16777216)), 24), Long_shr(Long_and(var$5, Long_fromInt(16711680)), 8)), Long_shl(Long_and(var$5, Long_fromInt(65280)), 8)), Long_shl(Long_and(var$5, Long_fromInt(65535)), 24)), Long_create(4294967295, 0));
                                                                                        $r = Long_lo($this.$was);
                                                                                        var$5 = $this.$need;
                                                                                        if ($r != Long_lo(var$5))
                                                                                            $e.$msg = $rt_s(166);
                                                                                        else if ($f) {
                                                                                            $e = $this.$gheader;
                                                                                            if ($e !== null)
                                                                                                $e.$crc0 = var$5;
                                                                                        }
                                                                                        $this.$mode0 = 15;
                                                                                        $r = var$3;
                                                                                    }
                                                                                    if (!($this.$wrap0 && $this.$flags)) {
                                                                                        $e = $this.$z2.$msg;
                                                                                        if ($e === null)
                                                                                            break f;
                                                                                        if (!jl_String_equals($e, $rt_s(166)))
                                                                                            break f;
                                                                                        $this.$mode0 = 13;
                                                                                        $this.$marker = 5;
                                                                                        continue i;
                                                                                    }
                                                                                    try {
                                                                                        $r = cjj_Inflate_readBytes($this, 4, $r, var$3);
                                                                                    } catch ($$e) {
                                                                                        $$je = $rt_wrapException($$e);
                                                                                        if ($$je instanceof cjj_Inflate$Return) {
                                                                                            $e = $$je;
                                                                                            return $e.$r0;
                                                                                        } else {
                                                                                            throw $$e;
                                                                                        }
                                                                                    }
                                                                                    $e = $this.$z2.$msg;
                                                                                    if ($e !== null && jl_String_equals($e, $rt_s(166))) {
                                                                                        $this.$mode0 = 13;
                                                                                        $this.$marker = 5;
                                                                                        continue i;
                                                                                    }
                                                                                    var$5 = $this.$need;
                                                                                    $e = $this.$z2;
                                                                                    if (Long_eq(var$5, Long_and($e.$total_out, Long_create(4294967295, 0)))) {
                                                                                        $e.$msg = null;
                                                                                        break f;
                                                                                    }
                                                                                    $e.$msg = $rt_s(167);
                                                                                    $this.$mode0 = 13;
                                                                                    continue i;
                                                                                }
                                                                                if (!$this.$wrap0) {
                                                                                    $this.$mode0 = 7;
                                                                                    continue i;
                                                                                }
                                                                                try {
                                                                                    $r = cjj_Inflate_readBytes($this, 2, $r, var$3);
                                                                                } catch ($$e) {
                                                                                    $$je = $rt_wrapException($$e);
                                                                                    if ($$je instanceof cjj_Inflate$Return) {
                                                                                        $e = $$je;
                                                                                        return $e.$r0;
                                                                                    } else {
                                                                                        throw $$e;
                                                                                    }
                                                                                }
                                                                                $f = $this.$wrap0;
                                                                                var$7 = $rt_compare($f, 4);
                                                                                if (!(var$7 && !($f & 2)) && Long_eq($this.$need, Long_fromInt(35615))) {
                                                                                    if (!var$7)
                                                                                        $this.$wrap0 = 2;
                                                                                    $this.$z2.$adler = cjj_CRC32__init_();
                                                                                    cjj_Inflate_checksum($this, 2, $this.$need);
                                                                                    if ($this.$gheader === null)
                                                                                        $this.$gheader = cjj_GZIPHeader__init_();
                                                                                    $this.$mode0 = 23;
                                                                                    continue i;
                                                                                }
                                                                                if ($f & 2) {
                                                                                    $this.$mode0 = 13;
                                                                                    $this.$z2.$msg = $rt_s(168);
                                                                                    continue i;
                                                                                }
                                                                                $this.$flags = 0;
                                                                                var$5 = $this.$need;
                                                                                var$8 = Long_lo(var$5) & 255;
                                                                                $this.$method = var$8;
                                                                                $b = Long_lo(Long_shr(var$5, 8)) & 255;
                                                                                if (!($f & 1 && !(((var$8 << 8) + $b | 0) % 31 | 0)) && (var$8 & 15) != 8) {
                                                                                    if (var$7) {
                                                                                        $this.$mode0 = 13;
                                                                                        $this.$z2.$msg = $rt_s(168);
                                                                                        continue i;
                                                                                    }
                                                                                    $e = $this.$z2;
                                                                                    $e.$next_in_index = $e.$next_in_index - 2 | 0;
                                                                                    $e.$avail_in = $e.$avail_in + 2 | 0;
                                                                                    $e.$total_in = Long_sub($e.$total_in, Long_fromInt(2));
                                                                                    $this.$wrap0 = 0;
                                                                                    $this.$mode0 = 7;
                                                                                    continue i;
                                                                                }
                                                                                if ((var$8 & 15) != 8) {
                                                                                    $this.$mode0 = 13;
                                                                                    $this.$z2.$msg = $rt_s(164);
                                                                                    continue i;
                                                                                }
                                                                                if (!var$7)
                                                                                    $this.$wrap0 = 1;
                                                                                if (((var$8 >> 4) + 8 | 0) > $this.$wbits) {
                                                                                    $this.$mode0 = 13;
                                                                                    $this.$z2.$msg = $rt_s(169);
                                                                                    continue i;
                                                                                }
                                                                                $this.$z2.$adler = cjj_Adler32__init_();
                                                                                if ($b & 32) {
                                                                                    $this.$mode0 = 2;
                                                                                    break d;
                                                                                }
                                                                                $this.$mode0 = 7;
                                                                                continue i;
                                                                            }
                                                                            break m;
                                                                        }
                                                                        try {
                                                                            $r = cjj_Inflate_readBytes($this, 4, $r, var$3);
                                                                        } catch ($$e) {
                                                                            $$je = $rt_wrapException($$e);
                                                                            if ($$je instanceof cjj_Inflate$Return) {
                                                                                $e = $$je;
                                                                                return $e.$r0;
                                                                            } else {
                                                                                throw $$e;
                                                                            }
                                                                        }
                                                                        $e = $this.$gheader;
                                                                        if ($e !== null)
                                                                            $e.$time = $this.$need;
                                                                        if ($this.$flags & 512)
                                                                            cjj_Inflate_checksum($this, 4, $this.$need);
                                                                        $this.$mode0 = 17;
                                                                    }
                                                                    try {
                                                                        $r = cjj_Inflate_readBytes($this, 2, $r, var$3);
                                                                    } catch ($$e) {
                                                                        $$je = $rt_wrapException($$e);
                                                                        if ($$je instanceof cjj_Inflate$Return) {
                                                                            $e = $$je;
                                                                            return $e.$r0;
                                                                        } else {
                                                                            throw $$e;
                                                                        }
                                                                    }
                                                                    $e = $this.$gheader;
                                                                    if ($e !== null) {
                                                                        $f = Long_lo($this.$need);
                                                                        $e.$xflags = $f & 255;
                                                                        $e.$os = $f >> 8 & 255;
                                                                    }
                                                                    if ($this.$flags & 512)
                                                                        cjj_Inflate_checksum($this, 2, $this.$need);
                                                                    $this.$mode0 = 18;
                                                                }
                                                                if (!($this.$flags & 1024)) {
                                                                    $e = $this.$gheader;
                                                                    if ($e !== null)
                                                                        $e.$extra = null;
                                                                } else {
                                                                    try {
                                                                        $r = cjj_Inflate_readBytes($this, 2, $r, var$3);
                                                                    } catch ($$e) {
                                                                        $$je = $rt_wrapException($$e);
                                                                        if ($$je instanceof cjj_Inflate$Return) {
                                                                            $e = $$je;
                                                                            return $e.$r0;
                                                                        } else {
                                                                            throw $$e;
                                                                        }
                                                                    }
                                                                    $e = $this.$gheader;
                                                                    if ($e !== null)
                                                                        $e.$extra = $rt_createByteArray(Long_lo($this.$need) & 65535);
                                                                    if ($this.$flags & 512)
                                                                        cjj_Inflate_checksum($this, 2, $this.$need);
                                                                }
                                                                $this.$mode0 = 19;
                                                            }
                                                            if (!($this.$flags & 1024)) {
                                                                $e = $this.$gheader;
                                                                if ($e !== null)
                                                                    $e.$extra = null;
                                                            } else
                                                                x: {
                                                                    try {
                                                                        $r = cjj_Inflate_readBytes0($this, $r, var$3);
                                                                        if ($this.$gheader === null)
                                                                            break x;
                                                                        $foo = ji_ByteArrayOutputStream_toByteArray($this.$tmp_string);
                                                                        var$10 = $foo.data;
                                                                        $this.$tmp_string = null;
                                                                        $f = var$10.length;
                                                                        var$10 = $this.$gheader.$extra;
                                                                        if ($f != var$10.data.length) {
                                                                            $this.$z2.$msg = $rt_s(170);
                                                                            $this.$mode0 = 13;
                                                                            continue i;
                                                                        }
                                                                        jl_System_fastArraycopy($foo, 0, var$10, 0, $f);
                                                                        break x;
                                                                    } catch ($$e) {
                                                                        $$je = $rt_wrapException($$e);
                                                                        if ($$je instanceof cjj_Inflate$Return) {
                                                                            $e = $$je;
                                                                            return $e.$r0;
                                                                        } else {
                                                                            throw $$e;
                                                                        }
                                                                    }
                                                                }
                                                            $this.$mode0 = 20;
                                                        }
                                                        y: {
                                                            if (!($this.$flags & 2048)) {
                                                                $e = $this.$gheader;
                                                                if ($e !== null)
                                                                    $e.$name2 = null;
                                                            } else {
                                                                z: {
                                                                    try {
                                                                        $r = cjj_Inflate_readString($this, $r, var$3);
                                                                        $e = $this.$gheader;
                                                                        if ($e === null)
                                                                            break z;
                                                                        $e.$name2 = ji_ByteArrayOutputStream_toByteArray($this.$tmp_string);
                                                                        break z;
                                                                    } catch ($$e) {
                                                                        $$je = $rt_wrapException($$e);
                                                                        if ($$je instanceof cjj_Inflate$Return) {
                                                                            $e = $$je;
                                                                            break h;
                                                                        } else {
                                                                            throw $$e;
                                                                        }
                                                                    }
                                                                }
                                                                try {
                                                                    $this.$tmp_string = null;
                                                                    break y;
                                                                } catch ($$e) {
                                                                    $$je = $rt_wrapException($$e);
                                                                    if ($$je instanceof cjj_Inflate$Return) {
                                                                        $e = $$je;
                                                                        break h;
                                                                    } else {
                                                                        throw $$e;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        $this.$mode0 = 21;
                                                    }
                                                    ba: {
                                                        if (!($this.$flags & 4096)) {
                                                            $e = $this.$gheader;
                                                            if ($e !== null)
                                                                $e.$comment = null;
                                                        } else {
                                                            bb: {
                                                                try {
                                                                    $r = cjj_Inflate_readString($this, $r, var$3);
                                                                    $e = $this.$gheader;
                                                                    if ($e === null)
                                                                        break bb;
                                                                    $e.$comment = ji_ByteArrayOutputStream_toByteArray($this.$tmp_string);
                                                                    break bb;
                                                                } catch ($$e) {
                                                                    $$je = $rt_wrapException($$e);
                                                                    if ($$je instanceof cjj_Inflate$Return) {
                                                                        $e = $$je;
                                                                        break g;
                                                                    } else {
                                                                        throw $$e;
                                                                    }
                                                                }
                                                            }
                                                            try {
                                                                $this.$tmp_string = null;
                                                                break ba;
                                                            } catch ($$e) {
                                                                $$je = $rt_wrapException($$e);
                                                                if ($$je instanceof cjj_Inflate$Return) {
                                                                    $e = $$je;
                                                                    break g;
                                                                } else {
                                                                    throw $$e;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    $this.$mode0 = 22;
                                                }
                                                if ($this.$flags & 512) {
                                                    try {
                                                        $r = cjj_Inflate_readBytes($this, 2, $r, var$3);
                                                    } catch ($$e) {
                                                        $$je = $rt_wrapException($$e);
                                                        if ($$je instanceof cjj_Inflate$Return) {
                                                            $e = $$je;
                                                            return $e.$r0;
                                                        } else {
                                                            throw $$e;
                                                        }
                                                    }
                                                    $e = $this.$gheader;
                                                    if ($e !== null)
                                                        $e.$hcrc = Long_lo(Long_and($this.$need, Long_fromInt(65535)));
                                                    if (Long_ne($this.$need, Long_and($this.$z2.$adler.$getValue(), Long_fromInt(65535)))) {
                                                        $this.$mode0 = 13;
                                                        $this.$z2.$msg = $rt_s(171);
                                                        $this.$marker = 5;
                                                        continue;
                                                    }
                                                }
                                                $this.$z2.$adler = cjj_CRC32__init_();
                                                $this.$mode0 = 7;
                                            }
                                            return $r;
                                        }
                                        return $e.$r0;
                                    }
                                    return $e.$r0;
                                }
                                $this.$mode0 = 12;
                            }
                            return 1;
                        }
                        $e = $this.$z2;
                        var$8 = $e.$avail_in;
                        if (!var$8)
                            return $r;
                        $e.$avail_in = var$8 - 1 | 0;
                        $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
                        $foo = $e.$next_in.data;
                        $r = $e.$next_in_index;
                        $e.$next_in_index = $r + 1 | 0;
                        $this.$need = Long_and(Long_fromInt(($foo[$r] & 255) << 24), Long_create(4278190080, 0));
                        $this.$mode0 = 3;
                        $r = var$3;
                    }
                    $e = $this.$z2;
                    $f = $e.$avail_in;
                    if (!$f)
                        return $r;
                    $e.$avail_in = $f - 1 | 0;
                    $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
                    var$5 = $this.$need;
                    $foo = $e.$next_in.data;
                    $r = $e.$next_in_index;
                    $e.$next_in_index = $r + 1 | 0;
                    $this.$need = Long_add(var$5, Long_and(Long_fromInt(($foo[$r] & 255) << 16), Long_fromInt(16711680)));
                    $this.$mode0 = 4;
                    $r = var$3;
                }
                $e = $this.$z2;
                $f = $e.$avail_in;
                if (!$f)
                    return $r;
                $e.$avail_in = $f - 1 | 0;
                $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
                var$5 = $this.$need;
                $foo = $e.$next_in.data;
                $f = $e.$next_in_index;
                $e.$next_in_index = $f + 1 | 0;
                $this.$need = Long_add(var$5, Long_and(Long_fromInt(($foo[$f] & 255) << 8), Long_fromInt(65280)));
                $this.$mode0 = 5;
            }
            $e = $this.$z2;
            $f = $e.$avail_in;
            if (!$f)
                return var$3;
            $e.$avail_in = $f - 1 | 0;
            $e.$total_in = Long_add($e.$total_in, Long_fromInt(1));
            var$5 = $this.$need;
            $foo = $e.$next_in.data;
            $f = $e.$next_in_index;
            $e.$next_in_index = $f + 1 | 0;
            var$5 = Long_add(var$5, Long_and(Long_fromInt($foo[$f]), Long_fromInt(255)));
            $this.$need = var$5;
            $e.$adler.$reset0(var$5);
            $this.$mode0 = 6;
            return 2;
        }
        if ($f == 4 && $this.$mode0 == 14)
            return 0;
        return (-2);
    }
    function cjj_Inflate_readBytes($this, $n, $r, $f) {
        var var$4, var$5, var$6, var$7, var$8;
        if ($this.$need_bytes == (-1)) {
            $this.$need_bytes = $n;
            $this.$need = Long_ZERO;
        }
        while (true) {
            var$4 = $this.$need_bytes;
            if (var$4 <= 0) {
                if ($n == 2)
                    $this.$need = Long_and($this.$need, Long_fromInt(65535));
                else if ($n == 4)
                    $this.$need = Long_and($this.$need, Long_create(4294967295, 0));
                $this.$need_bytes = (-1);
                return $r;
            }
            var$5 = $this.$z2;
            var$6 = var$5.$avail_in;
            if (!var$6)
                break;
            var$5.$avail_in = var$6 - 1 | 0;
            var$5.$total_in = Long_add(var$5.$total_in, Long_fromInt(1));
            var$7 = $this.$need;
            var$8 = var$5.$next_in.data;
            var$6 = var$5.$next_in_index;
            var$5.$next_in_index = var$6 + 1 | 0;
            $this.$need = Long_or(var$7, Long_fromInt((var$8[var$6] & 255) << (($n - var$4 | 0) * 8 | 0)));
            $this.$need_bytes = var$4 - 1 | 0;
            $r = $f;
        }
        $rt_throw(cjj_Inflate$Return__init_($this, $r));
    }
    function cjj_Inflate_readString($this, $r, $f) {
        var var$3, var$4, var$5, var$6, var$7;
        if ($this.$tmp_string === null)
            $this.$tmp_string = ji_ByteArrayOutputStream__init_();
        while (true) {
            var$3 = $this.$z2;
            var$4 = var$3.$avail_in;
            if (!var$4)
                $rt_throw(cjj_Inflate$Return__init_($this, $r));
            var$3.$avail_in = var$4 - 1 | 0;
            var$3.$total_in = Long_add(var$3.$total_in, Long_fromInt(1));
            var$5 = var$3.$next_in;
            var$6 = var$5.data;
            var$4 = var$3.$next_in_index;
            var$7 = var$6[var$4];
            if (var$7)
                ji_ByteArrayOutputStream_write($this.$tmp_string, var$5, var$4, 1);
            var$3 = $this.$z2;
            var$3.$adler.$update(var$3.$next_in, var$3.$next_in_index, 1);
            var$3 = $this.$z2;
            var$3.$next_in_index = var$3.$next_in_index + 1 | 0;
            if (!var$7)
                break;
            $r = $f;
        }
        return $f;
    }
    function cjj_Inflate_readBytes0($this, $r, $f) {
        var var$3, var$4;
        if ($this.$tmp_string === null)
            $this.$tmp_string = ji_ByteArrayOutputStream__init_();
        while (Long_gt($this.$need, Long_ZERO)) {
            var$3 = $this.$z2;
            var$4 = var$3.$avail_in;
            if (!var$4)
                $rt_throw(cjj_Inflate$Return__init_($this, $r));
            var$3.$avail_in = var$4 - 1 | 0;
            var$3.$total_in = Long_add(var$3.$total_in, Long_fromInt(1));
            ji_ByteArrayOutputStream_write($this.$tmp_string, var$3.$next_in, var$3.$next_in_index, 1);
            var$3 = $this.$z2;
            var$3.$adler.$update(var$3.$next_in, var$3.$next_in_index, 1);
            var$3 = $this.$z2;
            var$3.$next_in_index = var$3.$next_in_index + 1 | 0;
            $this.$need = Long_sub($this.$need, Long_fromInt(1));
            $r = $f;
        }
        return $r;
    }
    function cjj_Inflate_checksum($this, $n, $v) {
        var $i;
        $i = 0;
        while ($i < $n) {
            $this.$crcbuf.data[$i] = Long_lo(Long_and($v, Long_fromInt(255))) << 24 >> 24;
            $v = Long_shr($v, 8);
            $i = $i + 1 | 0;
        }
        $this.$z2.$adler.$update($this.$crcbuf, 0, $n);
    }
    function cjj_Inflate__clinit_() {
        cjj_Inflate_mark = $rt_createByteArrayFromData([0, 0, (-1), (-1)]);
    }
    var juz_DataFormatException = $rt_classWithoutFields(jl_Exception);
    function jn_Buffer() {
        var a = this; jl_Object.call(a);
        a.$capacity = 0;
        a.$position = 0;
        a.$limit = 0;
        a.$mark = 0;
    }
    function jn_Buffer__init_($this, $capacity) {
        $this.$mark = (-1);
        $this.$capacity = $capacity;
        $this.$limit = $capacity;
    }
    function jn_Buffer_remaining($this) {
        return $this.$limit - $this.$position | 0;
    }
    function jn_Buffer_hasRemaining($this) {
        return $this.$position >= $this.$limit ? 0 : 1;
    }
    var jl_Readable = $rt_classWithoutFields(0);
    var jn_CharBuffer = $rt_classWithoutFields(jn_Buffer);
    function jn_CharBuffer_position($this, $newPosition) {
        var var$2, var$3, var$4;
        if ($newPosition >= 0 && $newPosition <= $this.$limit) {
            $this.$position = $newPosition;
            if ($newPosition < $this.$mark)
                $this.$mark = 0;
            return $this;
        }
        var$2 = new jl_IllegalArgumentException;
        var$3 = $this.$limit;
        var$4 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append(var$4, $rt_s(172)), $newPosition), $rt_s(173)), var$3), 93);
        jl_Throwable__init_0(var$2, jl_StringBuilder_toString(var$4));
        $rt_throw(var$2);
    }
    function jn_ByteBuffer() {
        var a = this; jn_Buffer.call(a);
        a.$start0 = 0;
        a.$array1 = null;
        a.$order = null;
    }
    function jn_ByteBuffer_put($this, $src, $offset, $length) {
        var var$4, var$5, var$6, var$7, var$8, var$9, $pos, $i, var$12;
        if (!$length)
            return $this;
        if ($this.$readOnly0) {
            var$4 = new jn_ReadOnlyBufferException;
            jl_Exception__init_(var$4);
            $rt_throw(var$4);
        }
        if (jn_Buffer_remaining($this) < $length) {
            var$4 = new jn_BufferOverflowException;
            jl_Exception__init_(var$4);
            $rt_throw(var$4);
        }
        if ($offset >= 0) {
            var$5 = $src.data;
            var$6 = var$5.length;
            if ($offset <= var$6) {
                var$7 = $offset + $length | 0;
                if (var$7 > var$6) {
                    var$8 = new jl_IndexOutOfBoundsException;
                    var$9 = jl_StringBuilder__init_();
                    jl_StringBuilder_append2(jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append(var$9, $rt_s(174)), var$7), $rt_s(175)), var$6);
                    jl_Throwable__init_0(var$8, jl_StringBuilder_toString(var$9));
                    $rt_throw(var$8);
                }
                if ($length < 0) {
                    var$4 = new jl_IndexOutOfBoundsException;
                    var$8 = jl_StringBuilder__init_();
                    jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(176)), $length), $rt_s(177));
                    jl_Throwable__init_0(var$4, jl_StringBuilder_toString(var$8));
                    $rt_throw(var$4);
                }
                var$7 = $this.$position;
                $pos = var$7 + $this.$start0 | 0;
                $i = 0;
                while ($i < $length) {
                    $src = $this.$array1.data;
                    var$12 = $pos + 1 | 0;
                    var$6 = $offset + 1 | 0;
                    $src[$pos] = var$5[$offset];
                    $i = $i + 1 | 0;
                    $pos = var$12;
                    $offset = var$6;
                }
                $this.$position = var$7 + $length | 0;
                return $this;
            }
        }
        $src = $src.data;
        var$4 = new jl_IndexOutOfBoundsException;
        $length = $src.length;
        var$8 = jl_StringBuilder__init_();
        jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append(var$8, $rt_s(178)), $offset), $rt_s(173)), $length), 41);
        jl_Throwable__init_0(var$4, jl_StringBuilder_toString(var$8));
        $rt_throw(var$4);
    }
    function jn_ByteBuffer_clear($this) {
        $this.$position = 0;
        $this.$limit = $this.$capacity;
        $this.$mark = (-1);
        return $this;
    }
    function jnc_CodingErrorAction() {
        jl_Object.call(this);
        this.$name3 = null;
    }
    var jnc_CodingErrorAction_IGNORE = null;
    var jnc_CodingErrorAction_REPLACE = null;
    var jnc_CodingErrorAction_REPORT = null;
    function jnc_CodingErrorAction_$callClinit() {
        jnc_CodingErrorAction_$callClinit = $rt_eraseClinit(jnc_CodingErrorAction);
        jnc_CodingErrorAction__clinit_();
    }
    function jnc_CodingErrorAction__init_(var_0) {
        var var_1 = new jnc_CodingErrorAction();
        jnc_CodingErrorAction__init_0(var_1, var_0);
        return var_1;
    }
    function jnc_CodingErrorAction__init_0($this, $name) {
        jnc_CodingErrorAction_$callClinit();
        $this.$name3 = $name;
    }
    function jnc_CodingErrorAction__clinit_() {
        jnc_CodingErrorAction_IGNORE = jnc_CodingErrorAction__init_($rt_s(179));
        jnc_CodingErrorAction_REPLACE = jnc_CodingErrorAction__init_($rt_s(180));
        jnc_CodingErrorAction_REPORT = jnc_CodingErrorAction__init_($rt_s(181));
    }
    var jn_CharBufferImpl = $rt_classWithoutFields(jn_CharBuffer);
    function jn_CharBufferOverArray() {
        var a = this; jn_CharBufferImpl.call(a);
        a.$readOnly = 0;
        a.$start = 0;
        a.$array0 = null;
    }
    function jnc_CharsetEncoder() {
        var a = this; jl_Object.call(a);
        a.$charset0 = null;
        a.$replacement = null;
        a.$averageBytesPerChar = 0.0;
        a.$maxBytesPerChar = 0.0;
        a.$malformedAction = null;
        a.$unmappableAction = null;
        a.$status = 0;
    }
    function jnc_CoderResult() {
        var a = this; jl_Object.call(a);
        a.$kind = 0;
        a.$length1 = 0;
    }
    var jnc_CoderResult_UNDERFLOW = null;
    var jnc_CoderResult_OVERFLOW = null;
    function jnc_CoderResult__init_(var_0, var_1) {
        var var_2 = new jnc_CoderResult();
        jnc_CoderResult__init_0(var_2, var_0, var_1);
        return var_2;
    }
    function jnc_CoderResult__init_0($this, $kind, $length) {
        $this.$kind = $kind;
        $this.$length1 = $length;
    }
    function jnc_CoderResult_isOverflow($this) {
        return $this.$kind != 1 ? 0 : 1;
    }
    function jnc_CoderResult_isUnmappable($this) {
        return $this.$kind != 3 ? 0 : 1;
    }
    function jnc_CoderResult_malformedForLength($length) {
        return jnc_CoderResult__init_(2, $length);
    }
    function jnc_CoderResult__clinit_() {
        jnc_CoderResult_UNDERFLOW = jnc_CoderResult__init_(0, 0);
        jnc_CoderResult_OVERFLOW = jnc_CoderResult__init_(1, 0);
    }
    function jn_ByteBufferImpl() {
        var a = this; jn_ByteBuffer.call(a);
        a.$direct = 0;
        a.$readOnly0 = 0;
    }
    function jn_ByteOrder() {
        jl_Object.call(this);
        this.$name4 = null;
    }
    var jn_ByteOrder_BIG_ENDIAN = null;
    var jn_ByteOrder_LITTLE_ENDIAN = null;
    function jn_ByteOrder_$callClinit() {
        jn_ByteOrder_$callClinit = $rt_eraseClinit(jn_ByteOrder);
        jn_ByteOrder__clinit_();
    }
    function jn_ByteOrder__init_(var_0) {
        var var_1 = new jn_ByteOrder();
        jn_ByteOrder__init_0(var_1, var_0);
        return var_1;
    }
    function jn_ByteOrder__init_0($this, $name) {
        jn_ByteOrder_$callClinit();
        $this.$name4 = $name;
    }
    function jn_ByteOrder__clinit_() {
        jn_ByteOrder_BIG_ENDIAN = jn_ByteOrder__init_($rt_s(182));
        jn_ByteOrder_LITTLE_ENDIAN = jn_ByteOrder__init_($rt_s(183));
    }
    var otrf_VirtualFile = $rt_classWithoutFields(0);
    function otrfm_VirtualFileImpl() {
        var a = this; jl_Object.call(a);
        a.$fs0 = null;
        a.$path = null;
    }
    function otrfm_VirtualFileImpl_findInMemory($this) {
        var $file, $i, var$3, var$4, $next, var$6, var$7, var$8, var$9, var$10;
        $file = $this.$fs0.$root;
        $i = 0;
        var$3 = $this.$path;
        if (var$3 === $rt_s(31))
            var$4 = 1;
        else
            a: {
                var$4 = 0;
                if ((var$4 + jl_String_length($rt_s(31)) | 0) > jl_String_length(var$3))
                    var$4 = 0;
                else {
                    $next = 0;
                    while ($next < jl_String_length($rt_s(31))) {
                        var$6 = jl_String_charAt($rt_s(31), $next);
                        var$7 = var$4 + 1 | 0;
                        if (var$6 != jl_String_charAt(var$3, var$4)) {
                            var$4 = 0;
                            break a;
                        }
                        $next = $next + 1 | 0;
                        var$4 = var$7;
                    }
                    var$4 = 1;
                }
            }
        if (var$4)
            $i = 1;
        b: {
            while ($i < jl_String_length($this.$path)) {
                var$8 = $this.$path;
                $next = jl_Math_max(0, $i);
                c: {
                    while (true) {
                        var$9 = var$8.$characters.data;
                        if ($next >= var$9.length) {
                            $next = (-1);
                            break c;
                        }
                        if (var$9[$next] == 47)
                            break;
                        $next = $next + 1 | 0;
                    }
                }
                if ($next < 0)
                    $next = jl_String_length($this.$path);
                var$8 = jl_String_substring($this.$path, $i, $next);
                $file = $file.$children;
                var$3 = null;
                if (var$8 === null)
                    var$8 = ju_HashMap_findNullKeyEntry($file);
                else {
                    var$6 = jl_String_hashCode(var$8);
                    var$8 = ju_HashMap_findNonNullKeyEntry($file, var$8, (var$6 & 2147483647) % $file.$elementData.data.length | 0, var$6);
                }
                if (var$8 !== null) {
                    if ($file.$accessOrder) {
                        var$3 = var$8.$chainForward;
                        if (var$3 !== null) {
                            var$10 = var$8.$chainBackward;
                            if (var$10 === null)
                                $file.$head = var$3;
                            else
                                var$10.$chainForward = var$3;
                            var$3.$chainBackward = var$10;
                            var$3 = $file.$tail;
                            if (var$3 !== null)
                                var$3.$chainForward = var$8;
                            var$8.$chainBackward = var$3;
                            var$8.$chainForward = null;
                            $file.$tail = var$8;
                        }
                    }
                    var$3 = var$8.$value;
                }
                $file = var$3;
                if ($file === null)
                    break b;
                $i = $next + 1 | 0;
            }
        }
        return $file;
    }
    function cjj_InfBlocks() {
        var a = this; jl_Object.call(a);
        a.$mode = 0;
        a.$left = 0;
        a.$table = 0;
        a.$index = 0;
        a.$blens = null;
        a.$bb0 = null;
        a.$tb = null;
        a.$bl = null;
        a.$bd = null;
        a.$tl = null;
        a.$td = null;
        a.$tli = null;
        a.$tdi = null;
        a.$codes = null;
        a.$last = 0;
        a.$bitk = 0;
        a.$bitb = 0;
        a.$hufts = null;
        a.$window = null;
        a.$end = 0;
        a.$read2 = 0;
        a.$write0 = 0;
        a.$check = 0;
        a.$inftree = null;
        a.$z3 = null;
    }
    var cjj_InfBlocks_inflate_mask = null;
    var cjj_InfBlocks_border = null;
    function cjj_InfBlocks_reset($this) {
        var var$1;
        var$1 = $this.$mode;
        var$1 != 4 && var$1 != 5;
        $this.$mode = 0;
        $this.$bitk = 0;
        $this.$bitb = 0;
        $this.$write0 = 0;
        $this.$read2 = 0;
        if ($this.$check)
            $this.$z3.$adler.$reset();
    }
    function cjj_InfBlocks_proc($this, $r) {
        var var$2, $p, $n, $b, $k, $q, var$8, $m, var$10, $i, $t, $c, var$14, var$15, var$16, $i_0, $j;
        var$2 = $this.$z3;
        $p = var$2.$next_in_index;
        $n = var$2.$avail_in;
        $b = $this.$bitb;
        $k = $this.$bitk;
        $q = $this.$write0;
        var$8 = $this.$read2;
        $m = $q >= var$8 ? $this.$end - $q | 0 : (var$8 - $q | 0) - 1 | 0;
        a: {
            b: {
                c: {
                    d: {
                        e: while (true) {
                            f: {
                                g: {
                                    h: {
                                        i: {
                                            j: {
                                                switch ($this.$mode) {
                                                    case 2:
                                                        break f;
                                                    case 9:
                                                        $this.$bitb = $b;
                                                        $this.$bitk = $k;
                                                        var$2 = $this.$z3;
                                                        var$2.$avail_in = $n;
                                                        var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                        var$2.$next_in_index = $p;
                                                        $this.$write0 = $q;
                                                        return cjj_InfBlocks_inflate_flush($this, (-3));
                                                    case 0:
                                                        break j;
                                                    case 1:
                                                        break;
                                                    case 3:
                                                        while ($k < 14) {
                                                            if (!$n) {
                                                                $this.$bitb = $b;
                                                                $this.$bitk = $k;
                                                                var$2 = $this.$z3;
                                                                var$2.$avail_in = $n;
                                                                var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                                var$2.$next_in_index = $p;
                                                                $this.$write0 = $q;
                                                                return cjj_InfBlocks_inflate_flush($this, $r);
                                                            }
                                                            $r = 0;
                                                            $n = $n + (-1) | 0;
                                                            var$10 = $this.$z3.$next_in.data;
                                                            var$8 = $p + 1 | 0;
                                                            $b = $b | (var$10[$p] & 255) << $k;
                                                            $k = $k + 8 | 0;
                                                            $p = var$8;
                                                        }
                                                        var$8 = $b & 16383;
                                                        $this.$table = var$8;
                                                        $i = var$8 & 31;
                                                        if ($i > 29)
                                                            break d;
                                                        var$8 = var$8 >> 5 & 31;
                                                        if (var$8 > 29)
                                                            break d;
                                                        k: {
                                                            l: {
                                                                var$8 = (258 + $i | 0) + var$8 | 0;
                                                                var$10 = $this.$blens;
                                                                if (var$10 !== null) {
                                                                    var$10 = var$10.data;
                                                                    if (var$10.length >= var$8)
                                                                        break l;
                                                                }
                                                                $this.$blens = $rt_createIntArray(var$8);
                                                                break k;
                                                            }
                                                            $i = 0;
                                                            while (true) {
                                                                if ($i >= var$8)
                                                                    break k;
                                                                var$10[$i] = 0;
                                                                $i = $i + 1 | 0;
                                                            }
                                                        }
                                                        $b = $b >>> 14 | 0;
                                                        $k = $k + (-14) | 0;
                                                        $this.$index = 0;
                                                        $this.$mode = 4;
                                                        break i;
                                                    case 4:
                                                        break i;
                                                    case 5:
                                                        break h;
                                                    case 6:
                                                        break g;
                                                    case 7:
                                                        break b;
                                                    case 8:
                                                        break a;
                                                    default:
                                                        $this.$bitb = $b;
                                                        $this.$bitk = $k;
                                                        var$2 = $this.$z3;
                                                        var$2.$avail_in = $n;
                                                        var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                        var$2.$next_in_index = $p;
                                                        $this.$write0 = $q;
                                                        return cjj_InfBlocks_inflate_flush($this, (-2));
                                                }
                                                while ($k < 32) {
                                                    if (!$n) {
                                                        $this.$bitb = $b;
                                                        $this.$bitk = $k;
                                                        var$2 = $this.$z3;
                                                        var$2.$avail_in = $n;
                                                        var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                        var$2.$next_in_index = $p;
                                                        $this.$write0 = $q;
                                                        return cjj_InfBlocks_inflate_flush($this, $r);
                                                    }
                                                    $r = 0;
                                                    $n = $n + (-1) | 0;
                                                    var$10 = $this.$z3.$next_in.data;
                                                    var$8 = $p + 1 | 0;
                                                    $b = $b | (var$10[$p] & 255) << $k;
                                                    $k = $k + 8 | 0;
                                                    $p = var$8;
                                                }
                                                var$8 = (($b ^ (-1)) >>> 16 | 0) & 65535;
                                                $i = $b & 65535;
                                                if (var$8 != $i) {
                                                    $this.$mode = 9;
                                                    var$2 = $this.$z3;
                                                    var$2.$msg = $rt_s(184);
                                                    $this.$bitb = $b;
                                                    $this.$bitk = $k;
                                                    var$2.$avail_in = $n;
                                                    var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                    var$2.$next_in_index = $p;
                                                    $this.$write0 = $q;
                                                    return cjj_InfBlocks_inflate_flush($this, (-3));
                                                }
                                                $this.$left = $i;
                                                $k = 0;
                                                $this.$mode = $i ? 2 : !$this.$last ? 0 : 7;
                                                $b = $k;
                                                continue e;
                                            }
                                            while ($k < 3) {
                                                if (!$n) {
                                                    $this.$bitb = $b;
                                                    $this.$bitk = $k;
                                                    var$2 = $this.$z3;
                                                    var$2.$avail_in = $n;
                                                    var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                    var$2.$next_in_index = $p;
                                                    $this.$write0 = $q;
                                                    return cjj_InfBlocks_inflate_flush($this, $r);
                                                }
                                                $r = 0;
                                                $n = $n + (-1) | 0;
                                                var$10 = $this.$z3.$next_in.data;
                                                var$8 = $p + 1 | 0;
                                                $b = $b | (var$10[$p] & 255) << $k;
                                                $k = $k + 8 | 0;
                                                $p = var$8;
                                            }
                                            m: {
                                                $t = $b & 7;
                                                $this.$last = $t & 1;
                                                switch ($t >>> 1 | 0) {
                                                    case 0:
                                                        var$8 = $b >>> 3 | 0;
                                                        $i = $k + (-3) | 0;
                                                        $c = $i & 7;
                                                        $b = var$8 >>> $c | 0;
                                                        $k = $i - $c | 0;
                                                        $this.$mode = 1;
                                                        break m;
                                                    case 1:
                                                        cjj_InfTree_inflate_trees_fixed($this.$bl, $this.$bd, $this.$tl, $this.$td, $this.$z3);
                                                        cjj_InfCodes_init($this.$codes, $this.$bl.data[0], $this.$bd.data[0], $this.$tl.data[0], 0, $this.$td.data[0], 0);
                                                        $b = $b >>> 3 | 0;
                                                        $k = $k + (-3) | 0;
                                                        $this.$mode = 6;
                                                        break m;
                                                    case 2:
                                                        $b = $b >>> 3 | 0;
                                                        $k = $k + (-3) | 0;
                                                        $this.$mode = 3;
                                                        break m;
                                                    case 3:
                                                        $r = $b >>> 3 | 0;
                                                        var$8 = $k + (-3) | 0;
                                                        $this.$mode = 9;
                                                        var$2 = $this.$z3;
                                                        var$2.$msg = $rt_s(185);
                                                        $this.$bitb = $r;
                                                        $this.$bitk = var$8;
                                                        var$2.$avail_in = $n;
                                                        var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                        var$2.$next_in_index = $p;
                                                        $this.$write0 = $q;
                                                        return cjj_InfBlocks_inflate_flush($this, (-3));
                                                    default:
                                                }
                                            }
                                            continue e;
                                        }
                                        while (true) {
                                            var$8 = $this.$index;
                                            if (var$8 >= (4 + ($this.$table >>> 10 | 0) | 0))
                                                break;
                                            while ($k < 3) {
                                                if (!$n) {
                                                    $this.$bitb = $b;
                                                    $this.$bitk = $k;
                                                    var$2 = $this.$z3;
                                                    var$2.$avail_in = $n;
                                                    var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                    var$2.$next_in_index = $p;
                                                    $this.$write0 = $q;
                                                    return cjj_InfBlocks_inflate_flush($this, $r);
                                                }
                                                $r = 0;
                                                $n = $n + (-1) | 0;
                                                var$10 = $this.$z3.$next_in.data;
                                                $i = $p + 1 | 0;
                                                $b = $b | (var$10[$p] & 255) << $k;
                                                $k = $k + 8 | 0;
                                                $p = $i;
                                            }
                                            var$14 = $this.$blens.data;
                                            var$10 = cjj_InfBlocks_border.data;
                                            $this.$index = var$8 + 1 | 0;
                                            var$14[var$10[var$8]] = $b & 7;
                                            $b = $b >>> 3 | 0;
                                            $k = $k + (-3) | 0;
                                        }
                                        while (true) {
                                            var$8 = $this.$index;
                                            if (var$8 >= 19)
                                                break;
                                            var$14 = $this.$blens.data;
                                            var$10 = cjj_InfBlocks_border.data;
                                            $this.$index = var$8 + 1 | 0;
                                            var$14[var$10[var$8]] = 0;
                                        }
                                        var$10 = $this.$bb0;
                                        var$10.data[0] = 7;
                                        var$8 = cjj_InfTree_inflate_trees_bits($this.$inftree, $this.$blens, var$10, $this.$tb, $this.$hufts, $this.$z3);
                                        if (var$8) {
                                            if (var$8 == (-3)) {
                                                $this.$blens = null;
                                                $this.$mode = 9;
                                            }
                                            $this.$bitb = $b;
                                            $this.$bitk = $k;
                                            var$2 = $this.$z3;
                                            var$2.$avail_in = $n;
                                            var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                            var$2.$next_in_index = $p;
                                            $this.$write0 = $q;
                                            return cjj_InfBlocks_inflate_flush($this, var$8);
                                        }
                                        $this.$index = 0;
                                        $this.$mode = 5;
                                    }
                                    while (true) {
                                        var$8 = $this.$table;
                                        $i = $this.$index;
                                        $c = var$8 & 31;
                                        $m = 258 + $c | 0;
                                        var$8 = var$8 >> 5 & 31;
                                        $m = $m + var$8 | 0;
                                        if ($i >= $m)
                                            break;
                                        $t = $this.$bb0.data[0];
                                        while ($k < $t) {
                                            if (!$n) {
                                                $this.$bitb = $b;
                                                $this.$bitk = $k;
                                                var$2 = $this.$z3;
                                                var$2.$avail_in = $n;
                                                var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                var$2.$next_in_index = $p;
                                                $this.$write0 = $q;
                                                return cjj_InfBlocks_inflate_flush($this, $r);
                                            }
                                            $r = 0;
                                            $n = $n + (-1) | 0;
                                            var$10 = $this.$z3.$next_in.data;
                                            var$8 = $p + 1 | 0;
                                            $b = $b | (var$10[$p] & 255) << $k;
                                            $k = $k + 8 | 0;
                                            $p = var$8;
                                        }
                                        var$10 = $this.$tb.data;
                                        var$15 = $this.$hufts.data;
                                        var$8 = var$10[0];
                                        var$14 = cjj_InfBlocks_inflate_mask.data;
                                        var$16 = var$15[((var$8 + ($b & var$14[$t]) | 0) * 3 | 0) + 1 | 0];
                                        $c = var$15[((var$10[0] + ($b & var$14[var$16]) | 0) * 3 | 0) + 2 | 0];
                                        $t = $rt_compare($c, 16);
                                        if ($t < 0) {
                                            $b = $b >>> var$16 | 0;
                                            $k = $k - var$16 | 0;
                                            var$10 = $this.$blens.data;
                                            $this.$index = $i + 1 | 0;
                                            var$10[$i] = $c;
                                        } else {
                                            var$8 = $rt_compare($c, 18);
                                            $i_0 = !var$8 ? 7 : $c - 14 | 0;
                                            $j = var$8 ? 3 : 11;
                                            while ($k < (var$16 + $i_0 | 0)) {
                                                if (!$n) {
                                                    $this.$bitb = $b;
                                                    $this.$bitk = $k;
                                                    var$2 = $this.$z3;
                                                    var$2.$avail_in = $n;
                                                    var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                                    var$2.$next_in_index = $p;
                                                    $this.$write0 = $q;
                                                    return cjj_InfBlocks_inflate_flush($this, $r);
                                                }
                                                $r = 0;
                                                $n = $n + (-1) | 0;
                                                var$10 = $this.$z3.$next_in.data;
                                                var$8 = $p + 1 | 0;
                                                $b = $b | (var$10[$p] & 255) << $k;
                                                $k = $k + 8 | 0;
                                                $p = var$8;
                                            }
                                            $c = $b >>> var$16 | 0;
                                            $k = $k - var$16 | 0;
                                            var$8 = $j + ($c & var$14[$i_0]) | 0;
                                            $b = $c >>> $i_0 | 0;
                                            $k = $k - $i_0 | 0;
                                            if (($i + var$8 | 0) > $m)
                                                break c;
                                            if (!$t && $i < 1)
                                                break c;
                                            $m = $t ? 0 : $this.$blens.data[$i - 1 | 0];
                                            while (true) {
                                                var$10 = $this.$blens.data;
                                                $c = $i + 1 | 0;
                                                var$10[$i] = $m;
                                                var$8 = var$8 + (-1) | 0;
                                                if (!var$8)
                                                    break;
                                                $i = $c;
                                            }
                                            $this.$index = $c;
                                        }
                                    }
                                    $this.$tb.data[0] = (-1);
                                    var$10 = $this.$bl;
                                    var$10.data[0] = 9;
                                    var$14 = $this.$bd;
                                    var$14.data[0] = 6;
                                    var$8 = cjj_InfTree_inflate_trees_dynamic($this.$inftree, 257 + $c | 0, 1 + var$8 | 0, $this.$blens, var$10, var$14, $this.$tli, $this.$tdi, $this.$hufts, $this.$z3);
                                    if (var$8) {
                                        if (var$8 == (-3)) {
                                            $this.$blens = null;
                                            $this.$mode = 9;
                                        }
                                        $this.$bitb = $b;
                                        $this.$bitk = $k;
                                        var$2 = $this.$z3;
                                        var$2.$avail_in = $n;
                                        var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                        var$2.$next_in_index = $p;
                                        $this.$write0 = $q;
                                        return cjj_InfBlocks_inflate_flush($this, var$8);
                                    }
                                    var$2 = $this.$codes;
                                    var$8 = $this.$bl.data[0];
                                    $i = $this.$bd.data[0];
                                    var$10 = $this.$hufts;
                                    cjj_InfCodes_init(var$2, var$8, $i, var$10, $this.$tli.data[0], var$10, $this.$tdi.data[0]);
                                    $this.$mode = 6;
                                }
                                $this.$bitb = $b;
                                $this.$bitk = $k;
                                var$2 = $this.$z3;
                                var$2.$avail_in = $n;
                                var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                var$2.$next_in_index = $p;
                                $this.$write0 = $q;
                                $r = cjj_InfCodes_proc($this.$codes, $r);
                                if ($r != 1)
                                    break e;
                                $r = 0;
                                cjj_InfCodes_free($this.$codes, $this.$z3);
                                var$2 = $this.$z3;
                                $p = var$2.$next_in_index;
                                $n = var$2.$avail_in;
                                $b = $this.$bitb;
                                $k = $this.$bitk;
                                $q = $this.$write0;
                                var$8 = $this.$read2;
                                $m = $q >= var$8 ? $this.$end - $q | 0 : (var$8 - $q | 0) - 1 | 0;
                                if ($this.$last) {
                                    $this.$mode = 7;
                                    break b;
                                }
                                $this.$mode = 0;
                                continue e;
                            }
                            if (!$n) {
                                $this.$bitb = $b;
                                $this.$bitk = $k;
                                var$2 = $this.$z3;
                                var$2.$avail_in = $n;
                                var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                var$2.$next_in_index = $p;
                                $this.$write0 = $q;
                                return cjj_InfBlocks_inflate_flush($this, $r);
                            }
                            if (!$m) {
                                $c = $this.$end;
                                if ($q == $c) {
                                    var$8 = $this.$read2;
                                    if (var$8) {
                                        $q = 0;
                                        $m = $q >= var$8 ? $c - $q | 0 : (var$8 - $q | 0) - 1 | 0;
                                    }
                                }
                                if (!$m) {
                                    $this.$write0 = $q;
                                    $i = cjj_InfBlocks_inflate_flush($this, $r);
                                    $q = $this.$write0;
                                    var$8 = $this.$read2;
                                    $m = $q >= var$8 ? $this.$end - $q | 0 : (var$8 - $q | 0) - 1 | 0;
                                    $c = $this.$end;
                                    if ($q == $c && var$8) {
                                        $q = 0;
                                        $m = $q >= var$8 ? $c - $q | 0 : (var$8 - $q | 0) - 1 | 0;
                                    }
                                    if (!$m) {
                                        $this.$bitb = $b;
                                        $this.$bitk = $k;
                                        var$2 = $this.$z3;
                                        var$2.$avail_in = $n;
                                        var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                                        var$2.$next_in_index = $p;
                                        $this.$write0 = $q;
                                        return cjj_InfBlocks_inflate_flush($this, $i);
                                    }
                                }
                            }
                            $r = 0;
                            var$8 = $this.$left;
                            if (var$8 > $n)
                                var$8 = $n;
                            if (var$8 > $m)
                                var$8 = $m;
                            jl_System_fastArraycopy($this.$z3.$next_in, $p, $this.$window, $q, var$8);
                            $p = $p + var$8 | 0;
                            $n = $n - var$8 | 0;
                            $q = $q + var$8 | 0;
                            $m = $m - var$8 | 0;
                            var$8 = $this.$left - var$8 | 0;
                            $this.$left = var$8;
                            if (var$8)
                                continue;
                            $this.$mode = !$this.$last ? 0 : 7;
                        }
                        return cjj_InfBlocks_inflate_flush($this, $r);
                    }
                    $this.$mode = 9;
                    var$2 = $this.$z3;
                    var$2.$msg = $rt_s(186);
                    $this.$bitb = $b;
                    $this.$bitk = $k;
                    var$2.$avail_in = $n;
                    var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                    var$2.$next_in_index = $p;
                    $this.$write0 = $q;
                    return cjj_InfBlocks_inflate_flush($this, (-3));
                }
                $this.$blens = null;
                $this.$mode = 9;
                var$2 = $this.$z3;
                var$2.$msg = $rt_s(187);
                $this.$bitb = $b;
                $this.$bitk = $k;
                var$2.$avail_in = $n;
                var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                var$2.$next_in_index = $p;
                $this.$write0 = $q;
                return cjj_InfBlocks_inflate_flush($this, (-3));
            }
            $this.$write0 = $q;
            $r = cjj_InfBlocks_inflate_flush($this, $r);
            $q = $this.$write0;
            var$8 = $this.$read2;
            if (var$8 != $q) {
                $this.$bitb = $b;
                $this.$bitk = $k;
                var$2 = $this.$z3;
                var$2.$avail_in = $n;
                var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
                var$2.$next_in_index = $p;
                $this.$write0 = $q;
                return cjj_InfBlocks_inflate_flush($this, $r);
            }
            $this.$mode = 8;
        }
        $this.$bitb = $b;
        $this.$bitk = $k;
        var$2 = $this.$z3;
        var$2.$avail_in = $n;
        var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt($p - var$2.$next_in_index | 0));
        var$2.$next_in_index = $p;
        $this.$write0 = $q;
        return cjj_InfBlocks_inflate_flush($this, 1);
    }
    function cjj_InfBlocks_free($this) {
        cjj_InfBlocks_reset($this);
        $this.$window = null;
        $this.$hufts = null;
    }
    function cjj_InfBlocks_inflate_flush($this, $r) {
        var var$2, $p, $q, var$5, $n, var$7;
        var$2 = $this.$z3;
        $p = var$2.$next_out_index;
        $q = $this.$read2;
        var$5 = $this.$write0;
        if ($q > var$5)
            var$5 = $this.$end;
        $n = var$5 - $q | 0;
        var$5 = var$2.$avail_out;
        if ($n > var$5)
            $n = var$5;
        if ($n && $r == (-5))
            $r = 0;
        var$2.$avail_out = var$5 - $n | 0;
        var$2.$total_out = Long_add(var$2.$total_out, Long_fromInt($n));
        if ($this.$check && $n > 0)
            var$2.$adler.$update($this.$window, $q, $n);
        jl_System_fastArraycopy($this.$window, $q, $this.$z3.$next_out, $p, $n);
        var$5 = $p + $n | 0;
        var$7 = $q + $n | 0;
        $p = $this.$end;
        if (var$7 == $p) {
            if ($this.$write0 == $p)
                $this.$write0 = 0;
            $p = $this.$write0 - 0 | 0;
            var$2 = $this.$z3;
            $q = var$2.$avail_out;
            if ($p > $q)
                $p = $q;
            if ($p && $r == (-5))
                $r = 0;
            var$2.$avail_out = $q - $p | 0;
            var$2.$total_out = Long_add(var$2.$total_out, Long_fromInt($p));
            if ($this.$check && $p > 0)
                var$2.$adler.$update($this.$window, 0, $p);
            jl_System_fastArraycopy($this.$window, 0, $this.$z3.$next_out, var$5, $p);
            var$5 = var$5 + $p | 0;
            var$7 = 0 + $p | 0;
        }
        $this.$z3.$next_out_index = var$5;
        $this.$read2 = var$7;
        return $r;
    }
    function cjj_InfBlocks__clinit_() {
        cjj_InfBlocks_inflate_mask = $rt_createIntArrayFromData([0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
        cjj_InfBlocks_border = $rt_createIntArrayFromData([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    }
    var jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException);
    function jnci_BufferedEncoder() {
        var a = this; jnc_CharsetEncoder.call(a);
        a.$inArray = null;
        a.$outArray = null;
    }
    function jnci_BufferedEncoder_encodeLoop($this, $in, $out) {
        var $inArray, $inPos, $inSize, $outArray, $i, var$8, $outPos, $outSize, $result, var$12, var$13, var$14, $controller;
        $inArray = $this.$inArray;
        $inPos = 0;
        $inSize = 0;
        $outArray = $this.$outArray;
        a: {
            b: {
                while (true) {
                    if (($inPos + 32 | 0) > $inSize && jn_Buffer_hasRemaining($in)) {
                        $i = $inPos;
                        while ($i < $inSize) {
                            var$8 = $inArray.data;
                            var$8[$i - $inPos | 0] = var$8[$i];
                            $i = $i + 1 | 0;
                        }
                        var$8 = $inArray.data;
                        $outPos = $inSize - $inPos | 0;
                        $outSize = jn_Buffer_remaining($in) + $outPos | 0;
                        $i = var$8.length;
                        $inSize = jl_Math_min($outSize, $i);
                        $inPos = $inSize - $outPos | 0;
                        if ($outPos < 0)
                            break b;
                        if ($outPos > $i)
                            break b;
                        $outSize = $outPos + $inPos | 0;
                        if ($outSize > $i) {
                            $result = new jl_IndexOutOfBoundsException;
                            $in = jl_StringBuilder__init_();
                            jl_StringBuilder_append2(jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append($in, $rt_s(188)), $outSize), $rt_s(175)), $i);
                            jl_Throwable__init_0($result, jl_StringBuilder_toString($in));
                            $rt_throw($result);
                        }
                        if (jn_Buffer_remaining($in) < $inPos)
                            break;
                        if ($inPos < 0) {
                            $in = new jl_IndexOutOfBoundsException;
                            $out = jl_StringBuilder__init_();
                            jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append($out, $rt_s(176)), $inPos), $rt_s(177));
                            jl_Throwable__init_0($in, jl_StringBuilder_toString($out));
                            $rt_throw($in);
                        }
                        $i = $in.$position;
                        var$12 = 0;
                        var$13 = $i;
                        while (var$12 < $inPos) {
                            var$14 = $outPos + 1 | 0;
                            $outSize = var$13 + 1 | 0;
                            var$8[$outPos] = $in.$array0.data[var$13 + $in.$start | 0];
                            var$12 = var$12 + 1 | 0;
                            $outPos = var$14;
                            var$13 = $outSize;
                        }
                        $in.$position = $i + $inPos | 0;
                        $inPos = 0;
                    }
                    if (!jn_Buffer_hasRemaining($out)) {
                        $result = !jn_Buffer_hasRemaining($in) && $inPos >= $inSize ? jnc_CoderResult_UNDERFLOW : jnc_CoderResult_OVERFLOW;
                        break a;
                    }
                    var$8 = $outArray.data;
                    $outSize = jl_Math_min(jn_Buffer_remaining($out), var$8.length);
                    $controller = new jnci_BufferedEncoder$Controller;
                    $controller.$in0 = $in;
                    $controller.$out0 = $out;
                    $result = jnci_UTF8Encoder_arrayEncode($this, $inArray, $inPos, $inSize, $outArray, 0, $outSize, $controller);
                    $inPos = $controller.$inPosition;
                    $outPos = $controller.$outPosition;
                    if ($result === null) {
                        if (!jn_Buffer_hasRemaining($in) && $inPos >= $inSize)
                            $result = jnc_CoderResult_UNDERFLOW;
                        else if (!jn_Buffer_hasRemaining($out) && $inPos >= $inSize)
                            $result = jnc_CoderResult_OVERFLOW;
                    }
                    jn_ByteBuffer_put($out, $outArray, 0, $outPos);
                    if ($result !== null)
                        break a;
                }
                $in = new jn_BufferUnderflowException;
                jl_Exception__init_($in);
                $rt_throw($in);
            }
            $controller = new jl_IndexOutOfBoundsException;
            $result = jl_StringBuilder__init_();
            jl_StringBuilder_append0(jl_StringBuilder_append2(jl_StringBuilder_append(jl_StringBuilder_append2(jl_StringBuilder_append($result, $rt_s(178)), $outPos), $rt_s(173)), $i), 41);
            jl_Throwable__init_0($controller, jl_StringBuilder_toString($result));
            $rt_throw($controller);
        }
        jn_CharBuffer_position($in, $in.$position - ($inSize - $inPos | 0) | 0);
        return $result;
    }
    var jnci_UTF8Encoder = $rt_classWithoutFields(jnci_BufferedEncoder);
    function jnci_UTF8Encoder_arrayEncode($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) {
        var $result, var$9, var$10, $ch, var$12, $low, $codePoint;
        $result = null;
        a: {
            while ($inPos < $inSize) {
                if ($outPos >= $outSize) {
                    var$9 = $inPos;
                    break a;
                }
                var$10 = $inArray.data;
                var$9 = $inPos + 1 | 0;
                $ch = var$10[$inPos];
                if ($ch < 128) {
                    var$10 = $outArray.data;
                    var$12 = $outPos + 1 | 0;
                    var$10[$outPos] = $ch << 24 >> 24;
                } else if ($ch < 2048) {
                    if (($outPos + 2 | 0) > $outSize) {
                        var$9 = var$9 + (-1) | 0;
                        if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 2))
                            break a;
                        $result = jnc_CoderResult_OVERFLOW;
                        break a;
                    }
                    var$10 = $outArray.data;
                    $inPos = $outPos + 1 | 0;
                    var$10[$outPos] = (192 | $ch >> 6) << 24 >> 24;
                    var$12 = $inPos + 1 | 0;
                    var$10[$inPos] = (128 | $ch & 63) << 24 >> 24;
                } else if (!(!jl_Character_isHighSurrogate($ch) && !jl_Character_isLowSurrogate($ch) ? 0 : 1)) {
                    if (($outPos + 3 | 0) > $outSize) {
                        var$9 = var$9 + (-1) | 0;
                        if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 3))
                            break a;
                        $result = jnc_CoderResult_OVERFLOW;
                        break a;
                    }
                    var$10 = $outArray.data;
                    $low = $outPos + 1 | 0;
                    var$10[$outPos] = (224 | $ch >> 12) << 24 >> 24;
                    $inPos = $low + 1 | 0;
                    var$10[$low] = (128 | $ch >> 6 & 63) << 24 >> 24;
                    var$12 = $inPos + 1 | 0;
                    var$10[$inPos] = (128 | $ch & 63) << 24 >> 24;
                } else {
                    if (!jl_Character_isHighSurrogate($ch)) {
                        $result = jnc_CoderResult_malformedForLength(1);
                        break a;
                    }
                    if (var$9 >= $inSize) {
                        if (jn_Buffer_hasRemaining($controller.$in0))
                            break a;
                        $result = jnc_CoderResult_UNDERFLOW;
                        break a;
                    }
                    $inPos = var$9 + 1 | 0;
                    $low = var$10[var$9];
                    if (!jl_Character_isLowSurrogate($low)) {
                        var$9 = $inPos + (-2) | 0;
                        $result = jnc_CoderResult_malformedForLength(1);
                        break a;
                    }
                    if (($outPos + 4 | 0) > $outSize) {
                        var$9 = $inPos + (-2) | 0;
                        if (jnci_BufferedEncoder$Controller_hasMoreOutput($controller, 4))
                            break a;
                        $result = jnc_CoderResult_OVERFLOW;
                        break a;
                    }
                    var$10 = $outArray.data;
                    $codePoint = (($ch & 1023) << 10 | $low & 1023) + 65536 | 0;
                    $low = $outPos + 1 | 0;
                    var$10[$outPos] = (240 | $codePoint >> 18) << 24 >> 24;
                    $outPos = $low + 1 | 0;
                    var$10[$low] = (128 | $codePoint >> 12 & 63) << 24 >> 24;
                    $low = $outPos + 1 | 0;
                    var$10[$outPos] = (128 | $codePoint >> 6 & 63) << 24 >> 24;
                    var$12 = $low + 1 | 0;
                    var$10[$low] = (128 | $codePoint & 63) << 24 >> 24;
                    var$9 = $inPos;
                }
                $inPos = var$9;
                $outPos = var$12;
            }
            var$9 = $inPos;
        }
        $controller.$inPosition = var$9;
        $controller.$outPosition = $outPos;
        return $result;
    }
    function cjj_InfTree() {
        var a = this; jl_Object.call(a);
        a.$hn = null;
        a.$v = null;
        a.$c = null;
        a.$r = null;
        a.$u = null;
        a.$x2 = null;
    }
    var cjj_InfTree_fixed_tl = null;
    var cjj_InfTree_fixed_td = null;
    var cjj_InfTree_cplens = null;
    var cjj_InfTree_cplext = null;
    var cjj_InfTree_cpdist = null;
    var cjj_InfTree_cpdext = null;
    function cjj_InfTree_huft_build($this, $b, $bindex, $n, $s, $d, $e, $t, $m, $hp, $hn, $v) {
        var $p, $i, var$14, var$15, $a, $l, $j, $y, $xp, $mask, $w, $f, var$24, var$25, $h, $q, $z, $a_0;
        $p = 0;
        $i = $n;
        while (true) {
            var$14 = $b.data;
            var$15 = $this.$c.data;
            $a = var$14[$bindex + $p | 0];
            var$15[$a] = var$15[$a] + 1 | 0;
            $p = $p + 1 | 0;
            $i = $i + (-1) | 0;
            if (!$i)
                break;
        }
        if (var$15[0] == $n) {
            $b = $t.data;
            $d = $m.data;
            $b[0] = (-1);
            $d[0] = 0;
            return 0;
        }
        $b = $m.data;
        $l = $b[0];
        $j = 1;
        a: {
            while (true) {
                if ($j > 15)
                    break a;
                if (var$15[$j])
                    break;
                $j = $j + 1 | 0;
            }
        }
        if ($l < $j)
            $l = $j;
        $p = 15;
        b: {
            while (true) {
                if (!$p)
                    break b;
                if (var$15[$p])
                    break;
                $p = $p + (-1) | 0;
            }
        }
        if ($l > $p)
            $l = $p;
        $b[0] = $l;
        $y = 1 << $j;
        $xp = $j;
        while (true) {
            if ($xp >= $p) {
                $i = $y - var$15[$p] | 0;
                if ($i < 0)
                    return (-3);
                var$15[$p] = var$15[$p] + $i | 0;
                $b = $this.$x2.data;
                $mask = 0;
                $b[1] = $mask;
                $w = 1;
                $xp = 2;
                $f = $p;
                while (true) {
                    $f = $f + (-1) | 0;
                    if (!$f)
                        break;
                    $mask = $mask + var$15[$w] | 0;
                    $b[$xp] = $mask;
                    $xp = $xp + 1 | 0;
                    $w = $w + 1 | 0;
                }
                $a = 0;
                $xp = 0;
                while (true) {
                    $f = var$14[$bindex + $xp | 0];
                    if ($f) {
                        $m = $v.data;
                        $w = $b[$f];
                        $b[$f] = $w + 1 | 0;
                        $m[$w] = $a;
                    }
                    $xp = $xp + 1 | 0;
                    $a = $a + 1 | 0;
                    if ($a >= $n)
                        break;
                }
                $xp = $b[$p];
                var$24 = 0;
                $b[0] = var$24;
                var$25 = 0;
                $h = (-1);
                $w =  -$l | 0;
                $this.$u.data[0] = 0;
                $q = 0;
                $z = 0;
                c: while (true) {
                    if ($j > $p)
                        return $i && $p != 1 ? (-5) : 0;
                    $a = $this.$c.data[$j];
                    while (true) {
                        $a_0 = $a + (-1) | 0;
                        if (!$a)
                            break;
                        $y = $a_0 + 1 | 0;
                        while (true) {
                            $f = $w + $l | 0;
                            if ($j <= $f)
                                break;
                            $h = $h + 1 | 0;
                            $mask = $p - $f | 0;
                            if ($mask > $l)
                                $mask = $l;
                            d: {
                                $w = $j - $f | 0;
                                $bindex = 1 << $w;
                                if ($bindex > $y) {
                                    $bindex = $bindex - $y | 0;
                                    if ($w < $mask) {
                                        $n = $j;
                                        while (true) {
                                            $w = $w + 1 | 0;
                                            if ($w >= $mask)
                                                break;
                                            $bindex = $bindex << 1;
                                            $b = $this.$c.data;
                                            $n = $n + 1 | 0;
                                            if ($bindex <= $b[$n])
                                                break d;
                                            $bindex = $bindex - $b[$n] | 0;
                                        }
                                    }
                                }
                            }
                            $m = $hn.data;
                            $z = 1 << $w;
                            if (($m[0] + $z | 0) > 1440)
                                break c;
                            $b = $this.$u.data;
                            $q = $m[0];
                            $b[$h] = $q;
                            $m[0] = $m[0] + $z | 0;
                            if (!$h) {
                                $t.data[0] = $q;
                                $w = $f;
                                continue;
                            }
                            $this.$x2.data[$h] = var$24;
                            $m = $this.$r;
                            var$15 = $m.data;
                            var$15[0] = $w << 24 >> 24;
                            var$15[1] = $l << 24 >> 24;
                            $mask = var$24 >>> ($f - $l | 0) | 0;
                            $n = $h - 1 | 0;
                            var$15[2] = ($q - $b[$n] | 0) - $mask | 0;
                            jl_System_fastArraycopy($m, 0, $hp, ($b[$n] + $mask | 0) * 3 | 0, 3);
                            $w = $f;
                        }
                        var$15 = $this.$r.data;
                        $f = $j - $w | 0;
                        var$15[1] = $f << 24 >> 24;
                        if (var$25 >= $xp)
                            var$15[0] = 192;
                        else {
                            var$14 = $v.data;
                            if (var$14[var$25] >= $s) {
                                $b = $e.data;
                                $m = $d.data;
                                var$15[0] = (($b[var$14[var$25] - $s | 0] + 16 | 0) + 64 | 0) << 24 >> 24;
                                $n = var$25 + 1 | 0;
                                var$15[2] = $m[var$14[var$25] - $s | 0];
                                var$25 = $n;
                            } else {
                                var$15[0] = (var$14[var$25] >= 256 ? 96 : 0) << 24 >> 24;
                                $n = var$25 + 1 | 0;
                                var$15[2] = var$14[var$25];
                                var$25 = $n;
                            }
                        }
                        $f = 1 << $f;
                        $bindex = var$24 >>> $w | 0;
                        while ($bindex < $z) {
                            jl_System_fastArraycopy($this.$r, 0, $hp, ($q + $bindex | 0) * 3 | 0, 3);
                            $bindex = $bindex + $f | 0;
                        }
                        $bindex = 1 << ($j - 1 | 0);
                        while (var$24 & $bindex) {
                            var$24 = var$24 ^ $bindex;
                            $bindex = $bindex >>> 1 | 0;
                        }
                        var$24 = var$24 ^ $bindex;
                        $mask = (1 << $w) - 1 | 0;
                        while ((var$24 & $mask) != $this.$x2.data[$h]) {
                            $h = $h + (-1) | 0;
                            $w = $w - $l | 0;
                            $mask = (1 << $w) - 1 | 0;
                        }
                        $a = $a_0;
                    }
                    $j = $j + 1 | 0;
                }
                return (-3);
            }
            $a = $y - var$15[$xp] | 0;
            if ($a < 0)
                break;
            $xp = $xp + 1 | 0;
            $y = $a << 1;
        }
        return (-3);
    }
    function cjj_InfTree_inflate_trees_bits($this, $c, $bb, $tb, $hp, $z) {
        var var$6, $result;
        cjj_InfTree_initWorkArea($this, 19);
        var$6 = $this.$hn;
        var$6.data[0] = 0;
        $result = cjj_InfTree_huft_build($this, $c, 0, 19, 19, null, null, $tb, $bb, $hp, var$6, $this.$v);
        if ($result == (-3))
            $z.$msg = $rt_s(189);
        else if (!($result != (-5) && $bb.data[0])) {
            $z.$msg = $rt_s(190);
            $result = (-3);
        }
        return $result;
    }
    function cjj_InfTree_inflate_trees_dynamic($this, $nl, $nd, $c, $bl, $bd, $tl, $td, $hp, $z) {
        var var$10, $result;
        cjj_InfTree_initWorkArea($this, 288);
        var$10 = $this.$hn;
        var$10.data[0] = 0;
        $result = cjj_InfTree_huft_build($this, $c, 0, $nl, 257, cjj_InfTree_cplens, cjj_InfTree_cplext, $tl, $bl, $hp, var$10, $this.$v);
        if (!$result && $bl.data[0]) {
            cjj_InfTree_initWorkArea($this, 288);
            $nd = cjj_InfTree_huft_build($this, $c, $nl, $nd, 0, cjj_InfTree_cpdist, cjj_InfTree_cpdext, $td, $bd, $hp, $this.$hn, $this.$v);
            if (!$nd && !(!$bd.data[0] && $nl > 257))
                return 0;
            if ($nd == (-3))
                $z.$msg = $rt_s(191);
            else if ($nd == (-5)) {
                $z.$msg = $rt_s(192);
                $nd = (-3);
            } else if ($nd != (-4)) {
                $z.$msg = $rt_s(193);
                $nd = (-3);
            }
            return $nd;
        }
        if ($result == (-3))
            $z.$msg = $rt_s(194);
        else if ($result != (-4)) {
            $z.$msg = $rt_s(195);
            $result = (-3);
        }
        return $result;
    }
    function cjj_InfTree_inflate_trees_fixed($bl, $bd, $tl, $td, $z) {
        $td = $td.data;
        $tl = $tl.data;
        $bd = $bd.data;
        $bl.data[0] = 9;
        $bd[0] = 5;
        $tl[0] = cjj_InfTree_fixed_tl;
        $td[0] = cjj_InfTree_fixed_td;
        return 0;
    }
    function cjj_InfTree_initWorkArea($this, $vsize) {
        var $i;
        if ($this.$hn === null) {
            $this.$hn = $rt_createIntArray(1);
            $this.$v = $rt_createIntArray($vsize);
            $this.$c = $rt_createIntArray(16);
            $this.$r = $rt_createIntArray(3);
            $this.$u = $rt_createIntArray(15);
            $this.$x2 = $rt_createIntArray(16);
        }
        if ($this.$v.data.length < $vsize)
            $this.$v = $rt_createIntArray($vsize);
        $i = 0;
        while ($i < $vsize) {
            $this.$v.data[$i] = 0;
            $i = $i + 1 | 0;
        }
        $i = 0;
        while ($i < 16) {
            $this.$c.data[$i] = 0;
            $i = $i + 1 | 0;
        }
        $i = 0;
        while ($i < 3) {
            $this.$r.data[$i] = 0;
            $i = $i + 1 | 0;
        }
        jl_System_fastArraycopy($this.$c, 0, $this.$u, 0, 15);
        jl_System_fastArraycopy($this.$c, 0, $this.$x2, 0, 16);
    }
    function cjj_InfTree__clinit_() {
        cjj_InfTree_fixed_tl = $rt_createIntArrayFromData([96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36,
        0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42,
        0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33,
        0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45,
        0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39,
        0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40,
        0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34,
        0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46,
        0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37,
        0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43,
        0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255]);
        cjj_InfTree_fixed_td = $rt_createIntArrayFromData([80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577]);
        cjj_InfTree_cplens = $rt_createIntArrayFromData([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
        cjj_InfTree_cplext = $rt_createIntArrayFromData([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112]);
        cjj_InfTree_cpdist = $rt_createIntArrayFromData([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]);
        cjj_InfTree_cpdext = $rt_createIntArrayFromData([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    }
    function cjj_InfCodes() {
        var a = this; jl_Object.call(a);
        a.$mode1 = 0;
        a.$len0 = 0;
        a.$tree = null;
        a.$tree_index = 0;
        a.$need0 = 0;
        a.$lit = 0;
        a.$get0 = 0;
        a.$dist = 0;
        a.$lbits = 0;
        a.$dbits = 0;
        a.$ltree = null;
        a.$ltree_index = 0;
        a.$dtree = null;
        a.$dtree_index = 0;
        a.$z4 = null;
        a.$s = null;
    }
    var cjj_InfCodes_inflate_mask = null;
    function cjj_InfCodes_init($this, $bl, $bd, $tl, $tl_index, $td, $td_index) {
        $this.$mode1 = 0;
        $this.$lbits = $bl << 24 >> 24;
        $this.$dbits = $bd << 24 >> 24;
        $this.$ltree = $tl;
        $this.$ltree_index = $tl_index;
        $this.$dtree = $td;
        $this.$dtree_index = $td_index;
        $this.$tree = null;
    }
    function cjj_InfCodes_proc($this, $r) {
        var var$2, var$3, $n, var$5, var$6, $q, $f, $m, var$10, var$11, $j, $tindex, $e;
        var$2 = $this.$z4;
        var$3 = var$2.$next_in_index;
        $n = var$2.$avail_in;
        var$2 = $this.$s;
        var$5 = var$2.$bitb;
        var$6 = var$2.$bitk;
        $q = var$2.$write0;
        $f = var$2.$read2;
        $m = $q >= $f ? var$2.$end - $q | 0 : ($f - $q | 0) - 1 | 0;
        a: {
            b: while (true) {
                c: {
                    d: {
                        e: {
                            f: {
                                g: {
                                    switch ($this.$mode1) {
                                        case 0:
                                            break f;
                                        case 2:
                                            $f = $this.$get0;
                                            while (var$6 < $f) {
                                                if (!$n) {
                                                    var$2 = $this.$s;
                                                    var$2.$bitb = var$5;
                                                    var$2.$bitk = var$6;
                                                    var$10 = $this.$z4;
                                                    var$10.$avail_in = $n;
                                                    var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                                    var$10.$next_in_index = var$3;
                                                    var$2.$write0 = $q;
                                                    return cjj_InfBlocks_inflate_flush(var$2, $r);
                                                }
                                                $r = 0;
                                                $n = $n + (-1) | 0;
                                                var$11 = $this.$z4.$next_in.data;
                                                $j = var$3 + 1 | 0;
                                                var$5 = var$5 | (var$11[var$3] & 255) << var$6;
                                                var$6 = var$6 + 8 | 0;
                                                var$3 = $j;
                                            }
                                            $this.$len0 = $this.$len0 + (var$5 & cjj_InfCodes_inflate_mask.data[$f]) | 0;
                                            var$5 = var$5 >> $f;
                                            var$6 = var$6 - $f | 0;
                                            $this.$need0 = $this.$dbits;
                                            $this.$tree = $this.$dtree;
                                            $this.$tree_index = $this.$dtree_index;
                                            $this.$mode1 = 3;
                                            break g;
                                        case 4:
                                            $j = $this.$get0;
                                            while (var$6 < $j) {
                                                if (!$n) {
                                                    var$2 = $this.$s;
                                                    var$2.$bitb = var$5;
                                                    var$2.$bitk = var$6;
                                                    var$10 = $this.$z4;
                                                    var$10.$avail_in = $n;
                                                    var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                                    var$10.$next_in_index = var$3;
                                                    var$2.$write0 = $q;
                                                    return cjj_InfBlocks_inflate_flush(var$2, $r);
                                                }
                                                $r = 0;
                                                $n = $n + (-1) | 0;
                                                var$11 = $this.$z4.$next_in.data;
                                                $f = var$3 + 1 | 0;
                                                var$5 = var$5 | (var$11[var$3] & 255) << var$6;
                                                var$6 = var$6 + 8 | 0;
                                                var$3 = $f;
                                            }
                                            $this.$dist = $this.$dist + (var$5 & cjj_InfCodes_inflate_mask.data[$j]) | 0;
                                            var$5 = var$5 >> $j;
                                            var$6 = var$6 - $j | 0;
                                            $this.$mode1 = 5;
                                            break c;
                                        case 6:
                                            break d;
                                        case 7:
                                            if (var$6 > 7) {
                                                var$6 = var$6 + (-8) | 0;
                                                $n = $n + 1 | 0;
                                                var$3 = var$3 + (-1) | 0;
                                            }
                                            var$2 = $this.$s;
                                            var$2.$write0 = $q;
                                            $r = cjj_InfBlocks_inflate_flush(var$2, $r);
                                            var$2 = $this.$s;
                                            $q = var$2.$write0;
                                            $f = var$2.$read2;
                                            if ($f != $q) {
                                                var$2.$bitb = var$5;
                                                var$2.$bitk = var$6;
                                                var$10 = $this.$z4;
                                                var$10.$avail_in = $n;
                                                var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                                var$10.$next_in_index = var$3;
                                                var$2.$write0 = $q;
                                                return cjj_InfBlocks_inflate_flush(var$2, $r);
                                            }
                                            $this.$mode1 = 8;
                                            break a;
                                        case 9:
                                            var$2 = $this.$s;
                                            var$2.$bitb = var$5;
                                            var$2.$bitk = var$6;
                                            var$10 = $this.$z4;
                                            var$10.$avail_in = $n;
                                            var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                            var$10.$next_in_index = var$3;
                                            var$2.$write0 = $q;
                                            return cjj_InfBlocks_inflate_flush(var$2, (-3));
                                        case 1:
                                            break e;
                                        case 3:
                                            break;
                                        case 5:
                                            break c;
                                        case 8:
                                            break a;
                                        default:
                                            var$2 = $this.$s;
                                            var$2.$bitb = var$5;
                                            var$2.$bitk = var$6;
                                            var$10 = $this.$z4;
                                            var$10.$avail_in = $n;
                                            var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                            var$10.$next_in_index = var$3;
                                            var$2.$write0 = $q;
                                            return cjj_InfBlocks_inflate_flush(var$2, (-2));
                                    }
                                }
                                $f = $this.$need0;
                                while (var$6 < $f) {
                                    if (!$n) {
                                        var$2 = $this.$s;
                                        var$2.$bitb = var$5;
                                        var$2.$bitk = var$6;
                                        var$10 = $this.$z4;
                                        var$10.$avail_in = $n;
                                        var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                        var$10.$next_in_index = var$3;
                                        var$2.$write0 = $q;
                                        return cjj_InfBlocks_inflate_flush(var$2, $r);
                                    }
                                    $r = 0;
                                    $n = $n + (-1) | 0;
                                    var$11 = $this.$z4.$next_in.data;
                                    $j = var$3 + 1 | 0;
                                    var$5 = var$5 | (var$11[var$3] & 255) << var$6;
                                    var$6 = var$6 + 8 | 0;
                                    var$3 = $j;
                                }
                                $f = ($this.$tree_index + (var$5 & cjj_InfCodes_inflate_mask.data[$f]) | 0) * 3 | 0;
                                var$11 = $this.$tree.data;
                                $j = $f + 1 | 0;
                                var$5 = var$5 >> var$11[$j];
                                var$6 = var$6 - var$11[$j] | 0;
                                $j = var$11[$f];
                                if ($j & 16) {
                                    $this.$get0 = $j & 15;
                                    $this.$dist = var$11[$f + 2 | 0];
                                    $this.$mode1 = 4;
                                    continue b;
                                }
                                if ($j & 64) {
                                    $this.$mode1 = 9;
                                    var$2 = $this.$z4;
                                    var$2.$msg = $rt_s(196);
                                    var$10 = $this.$s;
                                    var$10.$bitb = var$5;
                                    var$10.$bitk = var$6;
                                    var$2.$avail_in = $n;
                                    var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt(var$3 - var$2.$next_in_index | 0));
                                    var$2.$next_in_index = var$3;
                                    var$10.$write0 = $q;
                                    return cjj_InfBlocks_inflate_flush(var$10, (-3));
                                }
                                $this.$need0 = $j;
                                $this.$tree_index = ($f / 3 | 0) + var$11[$f + 2 | 0] | 0;
                                continue b;
                            }
                            if ($m >= 258 && $n >= 10) {
                                var$2 = $this.$s;
                                var$2.$bitb = var$5;
                                var$2.$bitk = var$6;
                                var$10 = $this.$z4;
                                var$10.$avail_in = $n;
                                var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                var$10.$next_in_index = var$3;
                                var$2.$write0 = $q;
                                $r = cjj_InfCodes_inflate_fast($this, $this.$lbits, $this.$dbits, $this.$ltree, $this.$ltree_index, $this.$dtree, $this.$dtree_index, var$2, var$10);
                                var$2 = $this.$z4;
                                var$3 = var$2.$next_in_index;
                                $n = var$2.$avail_in;
                                var$2 = $this.$s;
                                var$5 = var$2.$bitb;
                                var$6 = var$2.$bitk;
                                $q = var$2.$write0;
                                $f = var$2.$read2;
                                $m = $q >= $f ? var$2.$end - $q | 0 : ($f - $q | 0) - 1 | 0;
                                if ($r) {
                                    $this.$mode1 = $r != 1 ? 9 : 7;
                                    continue b;
                                }
                            }
                            $this.$need0 = $this.$lbits;
                            $this.$tree = $this.$ltree;
                            $this.$tree_index = $this.$ltree_index;
                            $this.$mode1 = 1;
                        }
                        $j = $this.$need0;
                        while (var$6 < $j) {
                            if (!$n) {
                                var$2 = $this.$s;
                                var$2.$bitb = var$5;
                                var$2.$bitk = var$6;
                                var$10 = $this.$z4;
                                var$10.$avail_in = $n;
                                var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                var$10.$next_in_index = var$3;
                                var$2.$write0 = $q;
                                return cjj_InfBlocks_inflate_flush(var$2, $r);
                            }
                            $r = 0;
                            $n = $n + (-1) | 0;
                            var$11 = $this.$z4.$next_in.data;
                            $f = var$3 + 1 | 0;
                            var$5 = var$5 | (var$11[var$3] & 255) << var$6;
                            var$6 = var$6 + 8 | 0;
                            var$3 = $f;
                        }
                        $tindex = ($this.$tree_index + (var$5 & cjj_InfCodes_inflate_mask.data[$j]) | 0) * 3 | 0;
                        var$11 = $this.$tree.data;
                        $f = $tindex + 1 | 0;
                        var$5 = var$5 >>> var$11[$f] | 0;
                        var$6 = var$6 - var$11[$f] | 0;
                        $e = var$11[$tindex];
                        if (!$e) {
                            $this.$lit = var$11[$tindex + 2 | 0];
                            $this.$mode1 = 6;
                            continue b;
                        }
                        if ($e & 16) {
                            $this.$get0 = $e & 15;
                            $this.$len0 = var$11[$tindex + 2 | 0];
                            $this.$mode1 = 2;
                            continue b;
                        }
                        if (!($e & 64)) {
                            $this.$need0 = $e;
                            $this.$tree_index = ($tindex / 3 | 0) + var$11[$tindex + 2 | 0] | 0;
                            continue b;
                        }
                        if (!($e & 32)) {
                            $this.$mode1 = 9;
                            var$2 = $this.$z4;
                            var$2.$msg = $rt_s(197);
                            var$10 = $this.$s;
                            var$10.$bitb = var$5;
                            var$10.$bitk = var$6;
                            var$2.$avail_in = $n;
                            var$2.$total_in = Long_add(var$2.$total_in, Long_fromInt(var$3 - var$2.$next_in_index | 0));
                            var$2.$next_in_index = var$3;
                            var$10.$write0 = $q;
                            return cjj_InfBlocks_inflate_flush(var$10, (-3));
                        }
                        $this.$mode1 = 7;
                        continue b;
                    }
                    if ($m)
                        $f = $q;
                    else {
                        var$2 = $this.$s;
                        $j = var$2.$end;
                        if ($q != $j)
                            $f = $q;
                        else {
                            $tindex = var$2.$read2;
                            if (!$tindex)
                                $f = $q;
                            else {
                                $f = 0;
                                $m = $f >= $tindex ? $j - $f | 0 : ($tindex - $f | 0) - 1 | 0;
                            }
                        }
                        if (!$m) {
                            var$2.$write0 = $f;
                            $r = cjj_InfBlocks_inflate_flush(var$2, $r);
                            var$2 = $this.$s;
                            $f = var$2.$write0;
                            $j = var$2.$read2;
                            $m = $f >= $j ? var$2.$end - $f | 0 : ($j - $f | 0) - 1 | 0;
                            $tindex = var$2.$end;
                            if ($f == $tindex && $j) {
                                $f = 0;
                                $m = $f >= $j ? $tindex - $f | 0 : ($j - $f | 0) - 1 | 0;
                            }
                            if (!$m) {
                                var$2.$bitb = var$5;
                                var$2.$bitk = var$6;
                                var$10 = $this.$z4;
                                var$10.$avail_in = $n;
                                var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
                                var$10.$next_in_index = var$3;
                                var$2.$write0 = $f;
                                return cjj_InfBlocks_inflate_flush(var$2, $r);
                            }
                        }
                    }
                    $r = 0;
                    var$11 = $this.$s.$window.data;
                    $q = $f + 1 | 0;
                    var$11[$f] = $this.$lit << 24 >> 24;
                    $m = $m + (-1) | 0;
                    $this.$mode1 = 0;
                    continue b;
                }
                $f = $q - $this.$dist | 0;
                while ($f < 0) {
                    $f = $f + $this.$s.$end | 0;
                }
                while ($this.$len0) {
                    if ($m)
                        $j = $q;
                    else {
                        var$2 = $this.$s;
                        $tindex = var$2.$end;
                        if ($q != $tindex)
                            $j = $q;
                        else {
                            $e = var$2.$read2;
                            if (!$e)
                                $j = $q;
                            else {
                                $j = 0;
                                $m = $j >= $e ? $tindex - $j | 0 : ($e - $j | 0) - 1 | 0;
                            }
                        }
                        if (!$m) {
                            var$2.$write0 = $j;
                            $r = cjj_InfBlocks_inflate_flush(var$2, $r);
                            var$2 = $this.$s;
                            $j = var$2.$write0;
                            $tindex = var$2.$read2;
                            $m = $j >= $tindex ? var$2.$end - $j | 0 : ($tindex - $j | 0) - 1 | 0;
                            $e = var$2.$end;
                            if ($j == $e && $tindex) {
                                $j = 0;
                                $m = $j >= $tindex ? $e - $j | 0 : ($tindex - $j | 0) - 1 | 0;
                            }
                            if (!$m)
                                break b;
                        }
                    }
                    var$2 = $this.$s;
                    var$11 = var$2.$window.data;
                    $q = $j + 1 | 0;
                    $tindex = $f + 1 | 0;
                    var$11[$j] = var$11[$f];
                    $m = $m + (-1) | 0;
                    $f = $tindex == var$2.$end ? 0 : $tindex;
                    $this.$len0 = $this.$len0 - 1 | 0;
                }
                $this.$mode1 = 0;
            }
            var$2.$bitb = var$5;
            var$2.$bitk = var$6;
            var$10 = $this.$z4;
            var$10.$avail_in = $n;
            var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
            var$10.$next_in_index = var$3;
            var$2.$write0 = $j;
            return cjj_InfBlocks_inflate_flush(var$2, $r);
        }
        var$2 = $this.$s;
        var$2.$bitb = var$5;
        var$2.$bitk = var$6;
        var$10 = $this.$z4;
        var$10.$avail_in = $n;
        var$10.$total_in = Long_add(var$10.$total_in, Long_fromInt(var$3 - var$10.$next_in_index | 0));
        var$10.$next_in_index = var$3;
        var$2.$write0 = $q;
        return cjj_InfBlocks_inflate_flush(var$2, 1);
    }
    function cjj_InfCodes_free($this, $z) {}
    function cjj_InfCodes_inflate_fast($this, $bl, $bd, $tl, $tl_index, $td, $td_index, $s, $z) {
        var $p, $n, $b, $k, $q, $r, $m, var$16, $ml, $md, var$19, $t, $tp_index_t_3, $d, var$23, $c;
        $p = $z.$next_in_index;
        $n = $z.$avail_in;
        $b = $s.$bitb;
        $k = $s.$bitk;
        $q = $s.$write0;
        $r = $s.$read2;
        $m = $q >= $r ? $s.$end - $q | 0 : ($r - $q | 0) - 1 | 0;
        var$16 = cjj_InfCodes_inflate_mask.data;
        $ml = var$16[$bl];
        $md = var$16[$bd];
        while (true) {
            if ($k < 20) {
                $n = $n + (-1) | 0;
                var$16 = $z.$next_in.data;
                $bl = $p + 1 | 0;
                $b = $b | (var$16[$p] & 255) << $k;
                $k = $k + 8 | 0;
                $p = $bl;
                continue;
            }
            a: {
                var$19 = $tl.data;
                $t = $b & $ml;
                $tp_index_t_3 = ($tl_index + $t | 0) * 3 | 0;
                $bd = var$19[$tp_index_t_3];
                if (!$bd) {
                    $bl = $tp_index_t_3 + 1 | 0;
                    $b = $b >> var$19[$bl];
                    $k = $k - var$19[$bl] | 0;
                    var$16 = $s.$window.data;
                    $d = $q + 1 | 0;
                    var$16[$q] = var$19[$tp_index_t_3 + 2 | 0] << 24 >> 24;
                    $m = $m + (-1) | 0;
                } else {
                    while (true) {
                        $bl = $tp_index_t_3 + 1 | 0;
                        $b = $b >> var$19[$bl];
                        $k = $k - var$19[$bl] | 0;
                        if ($bd & 16) {
                            $bd = $bd & 15;
                            $bl = var$19[$tp_index_t_3 + 2 | 0];
                            var$23 = cjj_InfCodes_inflate_mask.data;
                            $c = $bl + ($b & var$23[$bd]) | 0;
                            $bl = $b >> $bd;
                            $bd = $k - $bd | 0;
                            while ($bd < 15) {
                                $n = $n + (-1) | 0;
                                var$16 = $z.$next_in.data;
                                $r = $p + 1 | 0;
                                $bl = $bl | (var$16[$p] & 255) << $bd;
                                $bd = $bd + 8 | 0;
                                $p = $r;
                            }
                            var$16 = $td.data;
                            $r = $bl & $md;
                            $d = ($td_index + $r | 0) * 3 | 0;
                            $b = var$16[$d];
                            while (true) {
                                $k = $d + 1 | 0;
                                $bl = $bl >> var$16[$k];
                                $bd = $bd - var$16[$k] | 0;
                                if ($b & 16)
                                    break;
                                if ($b & 64) {
                                    $z.$msg = $rt_s(196);
                                    $tl_index = $z.$avail_in - $n | 0;
                                    $td_index = $bd >> 3;
                                    if ($td_index < $tl_index)
                                        $tl_index = $td_index;
                                    $td_index = $n + $tl_index | 0;
                                    $r = $p - $tl_index | 0;
                                    $bd = $bd - ($tl_index << 3) | 0;
                                    $s.$bitb = $bl;
                                    $s.$bitk = $bd;
                                    $z.$avail_in = $td_index;
                                    $z.$total_in = Long_add($z.$total_in, Long_fromInt($r - $z.$next_in_index | 0));
                                    $z.$next_in_index = $r;
                                    $s.$write0 = $q;
                                    return (-3);
                                }
                                $r = ($r + var$16[$d + 2 | 0] | 0) + ($bl & var$23[$b]) | 0;
                                $d = ($td_index + $r | 0) * 3 | 0;
                                $b = var$16[$d];
                            }
                            $r = $b & 15;
                            while ($bd < $r) {
                                $n = $n + (-1) | 0;
                                var$19 = $z.$next_in.data;
                                $b = $p + 1 | 0;
                                $bl = $bl | (var$19[$p] & 255) << $bd;
                                $bd = $bd + 8 | 0;
                                $p = $b;
                            }
                            $d = var$16[$d + 2 | 0] + ($bl & var$23[$r]) | 0;
                            $b = $bl >> $r;
                            $k = $bd - $r | 0;
                            $m = $m - $c | 0;
                            if ($q >= $d) {
                                $r = $q - $d | 0;
                                $bl = $q - $r | 0;
                                if ($bl > 0 && 2 > $bl) {
                                    var$16 = $s.$window.data;
                                    $bl = $q + 1 | 0;
                                    $bd = $r + 1 | 0;
                                    var$16[$q] = var$16[$r];
                                    $q = $bl + 1 | 0;
                                    $r = $bd + 1 | 0;
                                    var$16[$bl] = var$16[$bd];
                                    $c = $c + (-2) | 0;
                                } else {
                                    var$16 = $s.$window;
                                    jl_System_fastArraycopy(var$16, $r, var$16, $q, 2);
                                    $q = $q + 2 | 0;
                                    $r = $r + 2 | 0;
                                    $c = $c + (-2) | 0;
                                }
                            } else {
                                $r = $q - $d | 0;
                                while (true) {
                                    $bl = $s.$end;
                                    $r = $r + $bl | 0;
                                    if ($r >= 0)
                                        break;
                                }
                                $bl = $bl - $r | 0;
                                if ($c > $bl) {
                                    $c = $c - $bl | 0;
                                    $bd = $q - $r | 0;
                                    if ($bd > 0 && $bl > $bd) {
                                        $bd = $q;
                                        while (true) {
                                            var$16 = $s.$window.data;
                                            $q = $bd + 1 | 0;
                                            $d = $r + 1 | 0;
                                            var$16[$bd] = var$16[$r];
                                            $bl = $bl + (-1) | 0;
                                            if (!$bl)
                                                break;
                                            $bd = $q;
                                            $r = $d;
                                        }
                                    } else {
                                        var$16 = $s.$window;
                                        jl_System_fastArraycopy(var$16, $r, var$16, $q, $bl);
                                        $q = $q + $bl | 0;
                                    }
                                    $r = 0;
                                }
                            }
                            $bl = $q - $r | 0;
                            if ($bl > 0 && $c > $bl) {
                                while (true) {
                                    var$16 = $s.$window.data;
                                    $d = $q + 1 | 0;
                                    $bl = $r + 1 | 0;
                                    var$16[$q] = var$16[$r];
                                    $c = $c + (-1) | 0;
                                    if (!$c)
                                        break;
                                    $q = $d;
                                    $r = $bl;
                                }
                                break a;
                            }
                            var$16 = $s.$window;
                            jl_System_fastArraycopy(var$16, $r, var$16, $q, $c);
                            $d = $q + $c | 0;
                            break a;
                        }
                        if ($bd & 64) {
                            if ($bd & 32) {
                                $c = $z.$avail_in - $n | 0;
                                $bl = $k >> 3;
                                if ($bl < $c)
                                    $c = $bl;
                                $bl = $n + $c | 0;
                                $bd = $p - $c | 0;
                                $tl_index = $k - ($c << 3) | 0;
                                $s.$bitb = $b;
                                $s.$bitk = $tl_index;
                                $z.$avail_in = $bl;
                                $z.$total_in = Long_add($z.$total_in, Long_fromInt($bd - $z.$next_in_index | 0));
                                $z.$next_in_index = $bd;
                                $s.$write0 = $q;
                                return 1;
                            }
                            $z.$msg = $rt_s(197);
                            $c = $z.$avail_in - $n | 0;
                            $bl = $k >> 3;
                            if ($bl < $c)
                                $c = $bl;
                            $bl = $n + $c | 0;
                            $bd = $p - $c | 0;
                            $tl_index = $k - ($c << 3) | 0;
                            $s.$bitb = $b;
                            $s.$bitk = $tl_index;
                            $z.$avail_in = $bl;
                            $z.$total_in = Long_add($z.$total_in, Long_fromInt($bd - $z.$next_in_index | 0));
                            $z.$next_in_index = $bd;
                            $s.$write0 = $q;
                            return (-3);
                        }
                        $t = ($t + var$19[$tp_index_t_3 + 2 | 0] | 0) + ($b & cjj_InfCodes_inflate_mask.data[$bd]) | 0;
                        $tp_index_t_3 = ($tl_index + $t | 0) * 3 | 0;
                        $bd = var$19[$tp_index_t_3];
                        if (!$bd)
                            break;
                    }
                    $bl = $tp_index_t_3 + 1 | 0;
                    $b = $b >> var$19[$bl];
                    $k = $k - var$19[$bl] | 0;
                    var$16 = $s.$window.data;
                    $d = $q + 1 | 0;
                    var$16[$q] = var$19[$tp_index_t_3 + 2 | 0] << 24 >> 24;
                    $m = $m + (-1) | 0;
                }
            }
            if ($m < 258)
                break;
            if ($n < 10)
                break;
            $q = $d;
        }
        $c = $z.$avail_in - $n | 0;
        $bl = $k >> 3;
        if ($bl < $c)
            $c = $bl;
        $bl = $n + $c | 0;
        $bd = $p - $c | 0;
        $tl_index = $k - ($c << 3) | 0;
        $s.$bitb = $b;
        $s.$bitk = $tl_index;
        $z.$avail_in = $bl;
        $z.$total_in = Long_add($z.$total_in, Long_fromInt($bd - $z.$next_in_index | 0));
        $z.$next_in_index = $bd;
        $s.$write0 = $d;
        return 0;
    }
    function cjj_InfCodes__clinit_() {
        cjj_InfCodes_inflate_mask = $rt_createIntArrayFromData([0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
    }
    var jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException);
    var otcic_Console = $rt_classWithoutFields();
    function cjj_Inflate$Return() {
        var a = this; jl_Exception.call(a);
        a.$r0 = 0;
        a.$this$0 = null;
    }
    function cjj_Inflate$Return__init_(var_0, var_1) {
        var var_2 = new cjj_Inflate$Return();
        cjj_Inflate$Return__init_0(var_2, var_0, var_1);
        return var_2;
    }
    function cjj_Inflate$Return__init_0($this, var$1, $r) {
        $this.$this$0 = var$1;
        jl_Exception__init_($this);
        $this.$r0 = $r;
    }
    function cjj_GZIPHeader() {
        var a = this; jl_Object.call(a);
        a.$text = 0;
        a.$fhcrc = 0;
        a.$time = Long_ZERO;
        a.$xflags = 0;
        a.$os = 0;
        a.$extra = null;
        a.$name2 = null;
        a.$comment = null;
        a.$hcrc = 0;
        a.$crc0 = Long_ZERO;
        a.$done = 0;
        a.$mtime = Long_ZERO;
    }
    function cjj_GZIPHeader__init_() {
        var var_0 = new cjj_GZIPHeader();
        cjj_GZIPHeader__init_0(var_0);
        return var_0;
    }
    function cjj_GZIPHeader__init_0($this) {
        $this.$text = 0;
        $this.$fhcrc = 0;
        $this.$os = 255;
        $this.$done = 0;
        $this.$mtime = Long_ZERO;
    }
    function ji_ByteArrayOutputStream() {
        var a = this; ji_OutputStream.call(a);
        a.$buf0 = null;
        a.$count = 0;
    }
    function ji_ByteArrayOutputStream__init_() {
        var var_0 = new ji_ByteArrayOutputStream();
        ji_ByteArrayOutputStream__init_0(var_0);
        return var_0;
    }
    function ji_ByteArrayOutputStream__init_0($this) {
        $this.$buf0 = $rt_createByteArray(32);
    }
    function ji_ByteArrayOutputStream_write($this, $b, $off, $len) {
        var $i, var$5, var$6, var$7, var$8;
        $i = $this.$count + $len | 0;
        var$5 = $this.$buf0.data.length;
        if (var$5 < $i) {
            var$6 = jl_Math_max($i, (var$5 * 3 | 0) / 2 | 0);
            $this.$buf0 = ju_Arrays_copyOf($this.$buf0, var$6);
        }
        $i = 0;
        while ($i < $len) {
            var$7 = $b.data;
            var$8 = $this.$buf0.data;
            var$6 = $this.$count;
            $this.$count = var$6 + 1 | 0;
            var$5 = $off + 1 | 0;
            var$8[var$6] = var$7[$off];
            $i = $i + 1 | 0;
            $off = var$5;
        }
    }
    function ji_ByteArrayOutputStream_toByteArray($this) {
        return ju_Arrays_copyOf($this.$buf0, $this.$count);
    }
    var jnc_CoderMalfunctionError = $rt_classWithoutFields(jl_Error);
    var jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException);
    function jnci_BufferedEncoder$Controller() {
        var a = this; jl_Object.call(a);
        a.$in0 = null;
        a.$out0 = null;
        a.$inPosition = 0;
        a.$outPosition = 0;
    }
    function jnci_BufferedEncoder$Controller_hasMoreOutput($this, $sz) {
        return jn_Buffer_remaining($this.$out0) < $sz ? 0 : 1;
    }
    var jn_ReadOnlyBufferException = $rt_classWithoutFields(jl_UnsupportedOperationException);
    var jn_BufferOverflowException = $rt_classWithoutFields(jl_RuntimeException);
    var jn_BufferUnderflowException = $rt_classWithoutFields(jl_RuntimeException);
    $rt_packages([-1, "com", 0, "jcraft", 1, "jzlib", -1, "java", 3, "util", 4, "zip", 3, "nio", 6, "charset", 3, "io", 3, "lang"
    ]);
    $rt_metadata([jl_Object, "Object", 9, 0, [], 0, 3, 0, 0, 0,
    cdmC_Client, 0, jl_Object, [], 0, 3, 0, 0, 0,
    jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 0, 3, 0, 0, 0,
    otji_JS, 0, jl_Object, [], 4, 0, 0, 0, 0,
    otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
    jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, 0,
    jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
    jl_RuntimeException, "RuntimeException", 9, jl_Exception, [], 0, 3, 0, 0, 0,
    jl_ClassCastException, "ClassCastException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, jl_String_$callClinit, 0,
    jl_Error, 0, jl_Throwable, [], 0, 3, 0, 0, 0,
    jl_LinkageError, 0, jl_Error, [], 0, 3, 0, 0, 0,
    jl_NoClassDefFoundError, 0, jl_LinkageError, [], 0, 3, 0, 0, 0,
    jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, 0,
    jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, 0, 0,
    jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, 0,
    jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, 0,
    jl_IncompatibleClassChangeError, 0, jl_LinkageError, [], 0, 3, 0, 0, 0,
    jl_NoSuchFieldError, 0, jl_IncompatibleClassChangeError, [], 0, 3, 0, 0, 0,
    jl_NoSuchMethodError, 0, jl_IncompatibleClassChangeError, [], 0, 3, 0, 0, 0,
    jl_Runnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    cmr_RubyDung, 0, jl_Object, [jl_Runnable], 0, 3, 0, 0, 0,
    jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
    otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
    ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_String$_clinit_$lambda$_93_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, 0,
    jl_IndexOutOfBoundsException, "IndexOutOfBoundsException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
    jl_NullPointerException, "NullPointerException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    jl_ArrayStoreException, "ArrayStoreException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, 0, 0,
    jl_Thread, 0, jl_Object, [jl_Runnable], 0, 3, 0, jl_Thread_$callClinit, 0,
    jl_StringIndexOutOfBoundsException, "StringIndexOutOfBoundsException", 9, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, 0,
    otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
    otjt_ArrayBufferView, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
    otjt_Float32Array, 0, otjt_ArrayBufferView, [], 1, 3, 0, 0, 0,
    otjt_Int16Array, 0, otjt_ArrayBufferView, [], 1, 3, 0, 0, 0,
    cmr_Player, 0, jl_Object, [], 0, 3, 0, 0, 0,
    jl_Thread$UncaughtExceptionHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_DefaultUncaughtExceptionHandler, 0, jl_Object, [jl_Thread$UncaughtExceptionHandler], 0, 3, 0, 0, 0,
    oti_AsyncCallback, 0, jl_Object, [], 3, 3, 0, 0, 0,
    otpp_AsyncCallbackWrapper, 0, jl_Object, [oti_AsyncCallback], 0, 0, 0, 0, ["$complete", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_complete), "$error", $rt_wrapFunction1(otpp_AsyncCallbackWrapper_error)],
    otp_PlatformRunnable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    otr_EventQueue$Event, 0, jl_Object, [], 3, 3, 0, 0, 0]);
    $rt_metadata([jl_ThreadInterruptHandler, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jl_Thread$SleepHandler, 0, jl_Object, [otp_PlatformRunnable, otr_EventQueue$Event, jl_ThreadInterruptHandler], 0, 0, 0, 0, 0,
    otjdx_Node, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
    otjdx_Document, 0, jl_Object, [otjdx_Node], 3, 3, 0, 0, 0,
    otjde_EventTarget, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
    otjdh_HTMLDocument, 0, jl_Object, [otjdx_Document, otjde_EventTarget], 3, 3, 0, 0, 0,
    cmrl_Level, 0, jl_Object, [], 0, 3, 0, 0, 0,
    cmrl_LevelListener, 0, jl_Object, [], 3, 3, 0, 0, 0,
    cmrl_LevelRenderer, 0, jl_Object, [cmrl_LevelListener], 0, 3, 0, 0, 0,
    otjde_FocusEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
    otjde_MouseEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
    otjde_KeyboardEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
    otjde_LoadEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
    otjde_GamepadEventTarget, 0, jl_Object, [otjde_EventTarget], 3, 3, 0, 0, 0,
    otjb_WindowEventTarget, 0, jl_Object, [otjde_EventTarget, otjde_FocusEventTarget, otjde_MouseEventTarget, otjde_KeyboardEventTarget, otjde_LoadEventTarget, otjde_GamepadEventTarget], 3, 3, 0, 0, 0,
    otjb_StorageProvider, 0, jl_Object, [], 3, 3, 0, 0, 0,
    otjc_JSArrayReader, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
    otjb_Window, 0, jl_Object, [otj_JSObject, otjb_WindowEventTarget, otjb_StorageProvider, otjc_JSArrayReader], 1, 3, 0, 0, ["$get$exported$0", $rt_wrapFunction1(otjb_Window_get$exported$0), "$addEventListener$exported$1", $rt_wrapFunction2(otjb_Window_addEventListener$exported$1), "$removeEventListener$exported$2", $rt_wrapFunction2(otjb_Window_removeEventListener$exported$2), "$removeEventListener$exported$3", $rt_wrapFunction3(otjb_Window_removeEventListener$exported$3), "$dispatchEvent$exported$4", $rt_wrapFunction1(otjb_Window_dispatchEvent$exported$4),
    "$getLength$exported$5", $rt_wrapFunction0(otjb_Window_getLength$exported$5), "$addEventListener$exported$6", $rt_wrapFunction3(otjb_Window_addEventListener$exported$6)],
    jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
    ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, 0,
    ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
    ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
    ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, 0,
    jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, 0,
    cmrl_Tesselator, 0, jl_Object, [], 0, 3, 0, 0, 0,
    cmrl_Chunk, 0, jl_Object, [], 0, 3, 0, 0, 0,
    jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
    jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
    ji_Flushable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ji_OutputStream, 0, jl_Object, [ji_Closeable, ji_Flushable], 1, 3, 0, 0, 0,
    ji_FilterOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, 0,
    ji_PrintStream, 0, ji_FilterOutputStream, [], 0, 3, 0, 0, 0,
    otcic_ConsoleOutputStream, 0, ji_OutputStream, [], 1, 3, 0, 0, 0,
    otcic_StderrOutputStream, 0, otcic_ConsoleOutputStream, [], 0, 3, 0, 0, 0,
    otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, otji_JSWrapper_$callClinit, 0,
    cmrp_AABB, 0, jl_Object, [], 0, 3, 0, 0, 0,
    cmr_Textures$TextureCallback, 0, jl_Object, [], 3, 3, 0, 0, 0,
    cmrl_Chunk$_init_$lambda$_0_0, 0, jl_Object, [cmr_Textures$TextureCallback], 0, 3, 0, 0, 0,
    cmr_Textures, 0, jl_Object, [], 0, 3, 0, 0, 0,
    jnc_Charset, 0, jl_Object, [jl_Comparable], 1, 3, 0, 0, 0,
    jnci_UTF8Charset, 0, jnc_Charset, [], 0, 3, 0, jnci_UTF8Charset_$callClinit, 0,
    jl_IllegalArgumentException, "IllegalArgumentException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    otjc_JSObjects, 0, jl_Object, [], 4, 3, 0, 0, 0,
    otjde_EventListener, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
    cmr_Textures$loadTexture$lambda$_1_0, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(cmr_Textures$loadTexture$lambda$_1_0_handleEvent$exported$0)],
    cmr_Textures$loadTexture$lambda$_1_1, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(cmr_Textures$loadTexture$lambda$_1_1_handleEvent$exported$0)]]);
    $rt_metadata([cmr_Textures$loadTexture$lambda$_1_2, 0, jl_Object, [otjde_EventListener], 0, 3, 0, 0, ["$handleEvent$exported$0", $rt_wrapFunction1(cmr_Textures$loadTexture$lambda$_1_2_handleEvent$exported$0)],
    otjc_JSWeakMap, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
    otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
    otjc_JSMap, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
    otjc_JSFinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
    otji_JSWrapper$_clinit_$lambda$_30_0, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$accept$exported$0", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_30_0_accept$exported$0)],
    otjc_JSFinalizationRegistry, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
    otji_JSWrapper$_clinit_$lambda$_30_1, 0, jl_Object, [otjc_JSFinalizationRegistryConsumer], 0, 3, 0, 0, ["$accept$exported$0", $rt_wrapFunction1(otji_JSWrapper$_clinit_$lambda$_30_1_accept$exported$0)],
    ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, 0,
    ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, ["$newElementArray", $rt_wrapFunction1(ju_HashMap_newElementArray)],
    jnc_IllegalCharsetNameException, "IllegalCharsetNameException", 7, jl_IllegalArgumentException, [], 0, 3, 0, 0, 0,
    jl_CloneNotSupportedException, "CloneNotSupportedException", 9, jl_Exception, [], 0, 3, 0, 0, 0,
    mr_lwjglkeys, 0, jl_Object, [], 0, 3, 0, 0, 0,
    oli_Keyboard, 0, jl_Object, [], 0, 3, 0, 0, 0,
    ji_InputStream, 0, jl_Object, [ji_Closeable], 1, 3, 0, 0, ["$read0", $rt_wrapFunction1(ji_InputStream_read)],
    ji_FilterInputStream, 0, ji_InputStream, [], 0, 3, 0, 0, ["$read0", $rt_wrapFunction1(ji_FilterInputStream_read)],
    ji_DataInput, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ji_DataInputStream, 0, ji_FilterInputStream, [ji_DataInput], 0, 3, 0, 0, 0,
    juz_InflaterInputStream, 0, ji_FilterInputStream, [], 0, 3, 0, 0, ["$read1", $rt_wrapFunction0(juz_InflaterInputStream_read)],
    juz_GZIPInputStream, 0, juz_InflaterInputStream, [], 0, 3, 0, 0, ["$close", $rt_wrapFunction0(juz_GZIPInputStream_close), "$read", $rt_wrapFunction3(juz_GZIPInputStream_read)],
    ji_FileInputStream, 0, ji_InputStream, [], 0, 3, 0, 0, ["$read", $rt_wrapFunction3(ji_FileInputStream_read), "$close", $rt_wrapFunction0(ji_FileInputStream_close), "$read1", $rt_wrapFunction0(ji_FileInputStream_read0)],
    ji_File, 0, jl_Object, [ji_Serializable, jl_Comparable], 0, 3, 0, ji_File_$callClinit, 0,
    ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
    ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, 0,
    ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, 0,
    nPo_LWJGLMain, 0, jl_Object, [], 0, 3, 0, nPo_LWJGLMain_$callClinit, 0,
    ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
    ji_IOException, "IOException", 8, jl_Exception, [], 0, 3, 0, 0, 0,
    ji_FileNotFoundException, "FileNotFoundException", 8, ji_IOException, [], 0, 3, 0, 0, 0,
    ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
    otjt_Uint8Array, 0, otjt_ArrayBufferView, [], 1, 3, 0, 0, 0,
    juz_Inflater, 0, jl_Object, [], 0, 3, 0, 0, 0,
    juz_Checksum, 0, jl_Object, [], 3, 3, 0, 0, 0,
    juz_CRC32, 0, jl_Object, [juz_Checksum], 0, 3, 0, 0, 0,
    ji_EOFException, "EOFException", 8, ji_IOException, [], 0, 3, 0, 0, 0,
    ju_AbstractSequentialList, 0, ju_AbstractList, [], 1, 3, 0, 0, 0,
    ju_Queue, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
    ju_Deque, 0, jl_Object, [ju_Queue, ju_SequencedCollection], 3, 3, 0, 0, 0,
    ju_LinkedList, 0, ju_AbstractSequentialList, [ju_Deque], 0, 3, 0, 0, 0,
    otjt_ArrayBuffer, 0, jl_Object, [otj_JSObject], 1, 3, 0, 0, 0,
    ju_Set, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
    ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1, 3, 0, 0, 0,
    ju_HashSet, 0, ju_AbstractSet, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, 0,
    otjt_Int32Array, 0, otjt_ArrayBufferView, [], 1, 3, 0, 0, 0,
    otrf_VirtualFileSystemProvider, 0, jl_Object, [], 4, 3, 0, 0, 0,
    cjj_ZStream, 0, jl_Object, [], 128, 3, 0, 0, 0,
    cjj_Inflater, 0, cjj_ZStream, [], 4, 3, 0, 0, 0,
    cjj_GZIPException, "GZIPException", 2, ji_IOException, [], 0, 3, 0, 0, 0,
    cjj_Checksum, 0, jl_Object, [], 3, 0, 0, 0, 0]);
    $rt_metadata([cjj_CRC32, 0, jl_Object, [cjj_Checksum], 4, 3, 0, 0, ["$update", $rt_wrapFunction3(cjj_CRC32_update), "$reset", $rt_wrapFunction0(cjj_CRC32_reset), "$reset0", $rt_wrapFunction1(cjj_CRC32_reset0), "$getValue", $rt_wrapFunction0(cjj_CRC32_getValue)],
    otrf_VirtualFileSystem, 0, jl_Object, [], 3, 3, 0, 0, 0,
    otrfm_InMemoryVirtualFileSystem, 0, jl_Object, [otrf_VirtualFileSystem], 0, 3, 0, 0, 0,
    otrfm_AbstractInMemoryVirtualFile, 0, jl_Object, [], 1, 3, 0, 0, 0,
    otrfm_InMemoryVirtualDirectory, 0, otrfm_AbstractInMemoryVirtualFile, [], 0, 3, 0, 0, 0,
    cjj_Adler32, 0, jl_Object, [cjj_Checksum], 4, 3, 0, 0, ["$reset0", $rt_wrapFunction1(cjj_Adler32_reset), "$reset", $rt_wrapFunction0(cjj_Adler32_reset0), "$getValue", $rt_wrapFunction0(cjj_Adler32_getValue), "$update", $rt_wrapFunction3(cjj_Adler32_update)],
    ju_SequencedMap, 0, jl_Object, [ju_Map], 3, 3, 0, 0, 0,
    ju_LinkedHashMap, 0, ju_HashMap, [ju_SequencedMap], 0, 3, 0, 0, ["$newElementArray", $rt_wrapFunction1(ju_LinkedHashMap_newElementArray)],
    jl_ArrayIndexOutOfBoundsException, "ArrayIndexOutOfBoundsException", 9, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, 0,
    ju_LinkedHashMap$LinkedHashMapEntry, 0, ju_HashMap$HashEntry, [], 4, 0, 0, 0, 0,
    cjj_Inflate, 0, jl_Object, [], 4, 0, 0, 0, 0,
    juz_DataFormatException, "DataFormatException", 5, jl_Exception, [], 0, 3, 0, 0, 0,
    jn_Buffer, 0, jl_Object, [], 1, 3, 0, 0, 0,
    jl_Readable, 0, jl_Object, [], 3, 3, 0, 0, 0,
    jn_CharBuffer, 0, jn_Buffer, [jl_Comparable, jl_Appendable, jl_CharSequence, jl_Readable], 1, 3, 0, 0, 0,
    jn_ByteBuffer, 0, jn_Buffer, [jl_Comparable], 1, 3, 0, 0, 0,
    jnc_CodingErrorAction, 0, jl_Object, [], 0, 3, 0, jnc_CodingErrorAction_$callClinit, 0,
    jn_CharBufferImpl, 0, jn_CharBuffer, [], 1, 0, 0, 0, 0,
    jn_CharBufferOverArray, 0, jn_CharBufferImpl, [], 0, 0, 0, 0, 0,
    jnc_CharsetEncoder, 0, jl_Object, [], 1, 3, 0, 0, 0,
    jnc_CoderResult, 0, jl_Object, [], 0, 3, 0, 0, 0,
    jn_ByteBufferImpl, 0, jn_ByteBuffer, [], 0, 0, 0, 0, 0,
    jn_ByteOrder, 0, jl_Object, [], 4, 3, 0, jn_ByteOrder_$callClinit, 0,
    otrf_VirtualFile, 0, jl_Object, [], 3, 3, 0, 0, 0,
    otrfm_VirtualFileImpl, 0, jl_Object, [otrf_VirtualFile], 0, 3, 0, 0, 0,
    cjj_InfBlocks, 0, jl_Object, [], 4, 0, 0, 0, 0,
    jl_IllegalStateException, "IllegalStateException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    jnci_BufferedEncoder, 0, jnc_CharsetEncoder, [], 1, 3, 0, 0, 0,
    jnci_UTF8Encoder, 0, jnci_BufferedEncoder, [], 0, 3, 0, 0, 0,
    cjj_InfTree, 0, jl_Object, [], 4, 0, 0, 0, 0,
    cjj_InfCodes, 0, jl_Object, [], 4, 0, 0, 0, 0,
    jl_NegativeArraySizeException, "NegativeArraySizeException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    otcic_Console, 0, jl_Object, [], 4, 3, 0, 0, 0,
    cjj_Inflate$Return, "Inflate$Return", 2, jl_Exception, [], 0, 0, 0, 0, 0,
    cjj_GZIPHeader, 0, jl_Object, [jl_Cloneable], 0, 3, 0, 0, 0,
    ji_ByteArrayOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, 0,
    jnc_CoderMalfunctionError, 0, jl_Error, [], 0, 3, 0, 0, 0,
    jl_UnsupportedOperationException, "UnsupportedOperationException", 9, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    jnci_BufferedEncoder$Controller, 0, jl_Object, [], 0, 3, 0, 0, 0,
    jn_ReadOnlyBufferException, "ReadOnlyBufferException", 6, jl_UnsupportedOperationException, [], 0, 3, 0, 0, 0,
    jn_BufferOverflowException, "BufferOverflowException", 6, jl_RuntimeException, [], 0, 3, 0, 0, 0,
    jn_BufferUnderflowException, "BufferUnderflowException", 6, jl_RuntimeException, [], 0, 3, 0, 0, 0]);
    function $rt_array(cls, data) {
        this.$monitor = null;
        this.$id$ = 0;
        this.type = cls;
        this.data = data;
        this.constructor = $rt_arraycls(cls);
    }
    $rt_array.prototype = $rt_globals.Object.create(($rt_objcls()).prototype);
    $rt_array.prototype.toString = function() {
        var str = "[";
        for (var i = 0;i < this.data.length;++i) {
            if (i > 0) {
                str += ", ";
            }
            str += this.data[i].toString();
        }
        str += "]";
        return str;
    };
    $rt_setCloneMethod($rt_array.prototype, function() {
        var dataCopy;
        if ('slice' in this.data) {
            dataCopy = this.data.slice();
        } else {
            dataCopy = new this.data.constructor(this.data.length);
            for (var i = 0;i < dataCopy.length;++i) {
                dataCopy[i] = this.data[i];
            }
        }
        return new $rt_array(this.type, dataCopy);
    });
    $rt_stringPool(["0", "Error: ", ": ", "\tat ", "Caused by: ", "null", "level.dat", "Vertex shader compilation failed: ", "Fragment shader compilation failed: ", "Shader program linking failed: ", "Either src or dest is null", "main", "Hlllll null", "http://localhost:8000/terrain.png", "Action must be non-null", "Replacement preconditions do not hold", "Index out of bounds", "object", "function", "string", "number", "undefined", "CanvasRenderingContext2D is null. WebGL rendering cannot proceed.", "Hellllooooo nulllll",
    "nuuullllll", "UTF-8", "fail", "Failed to load texture from URL: ", "Stream is closed", "This stream is already closed", "", "/", "NONE", "ESCAPE", "1", "2", "3", "4", "5", "6", "7", "8", "9", "MINUS", "EQUALS", "BACK", "TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "LBRACKET", "RBRACKET", "RETURN", "LCONTROL", "A", "S", "D", "F", "G", "H", "J", "K", "L", "SEMICOLON", "APOSTROPHE", "GRAVE", "LSHIFT", "BACKSLASH", "Z", "X", "C", "V", "B", "N", "M", "COMMA", "PERIOD", "SLASH", "RSHIFT", "MULTIPLY",
    "LMENU", "SPACE", "CAPITAL", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "NUMLOCK", "SCROLL", "NUMPAD7", "NUMPAD8", "NUMPAD9", "SUBTRACT", "NUMPAD4", "NUMPAD5", "NUMPAD6", "ADD", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD0", "DECIMAL", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "KANA", "F19", "CONVERT", "NOCONVERT", "YEN", "NUMPADEQUALS", "CIRCUMFLEX", "AT", "COLON", "UNDERLINE", "KANJI", "STOP", "AX", "UNLABELED", "NUMPADENTER", "RCONTROL", "SECTION", "NUMPADCOMMA", "DIVIDE",
    "SYSRQ", "RMENU", "FUNCTION", "PAUSE", "HOME", "UP", "PRIOR", "LEFT", "RIGHT", "END", "DOWN", "NEXT", "INSERT", "DELETE", "CLEAR", "LMETA", "RMETA", "APPS", "POWER", "SLEEP", "Error occurred: ", "need dictionary", "unknown compression method", "unknown header flags set", "incorrect data check", "incorrect length check", "incorrect header check", "invalid window size", "bad extra field length", "header crc mismatch", "New position ", " is outside of range [0;", "The last byte in src ", " is outside of array of size ",
    "Length ", " must be non-negative", "Offset ", "IGNORE", "REPLACE", "REPORT", "BIG_ENDIAN", "LITTLE_ENDIAN", "invalid stored block lengths", "invalid block type", "too many length or distance symbols", "invalid bit length repeat", "The last char in dst ", "oversubscribed dynamic bit lengths tree", "incomplete dynamic bit lengths tree", "oversubscribed distance tree", "incomplete distance tree", "empty distance tree with lengths", "oversubscribed literal/length tree", "incomplete literal/length tree", "invalid distance code",
    "invalid literal/length code"]);
    jl_String.prototype.toString = function() {
        return $rt_ustr(this);
    };
    jl_String.prototype.valueOf = jl_String.prototype.toString;
    jl_Object.prototype.toString = function() {
        return $rt_ustr(jl_Object_toString(this));
    };
    jl_Object.prototype.__teavm_class__ = function() {
        return $dbg_class(this);
    };
    var Long_eq;
    var Long_ne;
    var Long_gt;
    var Long_ge;
    var Long_lt;
    var Long_le;
    var Long_compare;
    var Long_ucompare;
    var Long_add;
    var Long_sub;
    var Long_inc;
    var Long_dec;
    var Long_mul;
    var Long_div;
    var Long_rem;
    var Long_udiv;
    var Long_urem;
    var Long_neg;
    var Long_and;
    var Long_or;
    var Long_xor;
    var Long_shl;
    var Long_shr;
    var Long_shru;
    var Long_not;
    if (typeof $rt_globals.BigInt !== 'function') {
        Long_eq = function(a, b) {
            return a.hi === b.hi && a.lo === b.lo;
        };
        Long_ne = function(a, b) {
            return a.hi !== b.hi || a.lo !== b.lo;
        };
        Long_gt = function(a, b) {
            if (a.hi < b.hi) {
                return false;
            }
            if (a.hi > b.hi) {
                return true;
            }
            var x = a.lo >>> 1;
            var y = b.lo >>> 1;
            if (x !== y) {
                return x > y;
            }
            return (a.lo & 1) > (b.lo & 1);
        };
        Long_ge = function(a, b) {
            if (a.hi < b.hi) {
                return false;
            }
            if (a.hi > b.hi) {
                return true;
            }
            var x = a.lo >>> 1;
            var y = b.lo >>> 1;
            if (x !== y) {
                return x >= y;
            }
            return (a.lo & 1) >= (b.lo & 1);
        };
        Long_lt = function(a, b) {
            if (a.hi > b.hi) {
                return false;
            }
            if (a.hi < b.hi) {
                return true;
            }
            var x = a.lo >>> 1;
            var y = b.lo >>> 1;
            if (x !== y) {
                return x < y;
            }
            return (a.lo & 1) < (b.lo & 1);
        };
        Long_le = function(a, b) {
            if (a.hi > b.hi) {
                return false;
            }
            if (a.hi < b.hi) {
                return true;
            }
            var x = a.lo >>> 1;
            var y = b.lo >>> 1;
            if (x !== y) {
                return x <= y;
            }
            return (a.lo & 1) <= (b.lo & 1);
        };
        Long_add = function(a, b) {
            if (a.hi === a.lo >> 31 && b.hi === b.lo >> 31) {
                return Long_fromNumber(a.lo + b.lo);
            } else if ($rt_globals.Math.abs(a.hi) < Long_MAX_NORMAL && $rt_globals.Math.abs(b.hi) < Long_MAX_NORMAL) {
                return Long_fromNumber(Long_toNumber(a) + Long_toNumber(b));
            }
            var a_lolo = a.lo & 0xFFFF;
            var a_lohi = a.lo >>> 16;
            var a_hilo = a.hi & 0xFFFF;
            var a_hihi = a.hi >>> 16;
            var b_lolo = b.lo & 0xFFFF;
            var b_lohi = b.lo >>> 16;
            var b_hilo = b.hi & 0xFFFF;
            var b_hihi = b.hi >>> 16;
            var lolo = a_lolo + b_lolo | 0;
            var lohi = a_lohi + b_lohi + (lolo >> 16) | 0;
            var hilo = a_hilo + b_hilo + (lohi >> 16) | 0;
            var hihi = a_hihi + b_hihi + (hilo >> 16) | 0;
            return new Long(lolo & 0xFFFF | (lohi & 0xFFFF) << 16, hilo & 0xFFFF | (hihi & 0xFFFF) << 16);
        };
        Long_inc = function(a) {
            var lo = a.lo + 1 | 0;
            var hi = a.hi;
            if (lo === 0) {
                hi = hi + 1 | 0;
            }
            return new Long(lo, hi);
        };
        Long_dec = function(a) {
            var lo = a.lo - 1 | 0;
            var hi = a.hi;
            if (lo ===  -1) {
                hi = hi - 1 | 0;
            }
            return new Long(lo, hi);
        };
        Long_neg = function(a) {
            return Long_inc(new Long(a.lo ^ 0xFFFFFFFF, a.hi ^ 0xFFFFFFFF));
        };
        Long_sub = function(a, b) {
            if (a.hi === a.lo >> 31 && b.hi === b.lo >> 31) {
                return Long_fromNumber(a.lo - b.lo);
            }
            var a_lolo = a.lo & 0xFFFF;
            var a_lohi = a.lo >>> 16;
            var a_hilo = a.hi & 0xFFFF;
            var a_hihi = a.hi >>> 16;
            var b_lolo = b.lo & 0xFFFF;
            var b_lohi = b.lo >>> 16;
            var b_hilo = b.hi & 0xFFFF;
            var b_hihi = b.hi >>> 16;
            var lolo = a_lolo - b_lolo | 0;
            var lohi = a_lohi - b_lohi + (lolo >> 16) | 0;
            var hilo = a_hilo - b_hilo + (lohi >> 16) | 0;
            var hihi = a_hihi - b_hihi + (hilo >> 16) | 0;
            return new Long(lolo & 0xFFFF | (lohi & 0xFFFF) << 16, hilo & 0xFFFF | (hihi & 0xFFFF) << 16);
        };
        Long_compare = function(a, b) {
            var r = a.hi - b.hi;
            if (r !== 0) {
                return r;
            }
            r = (a.lo >>> 1) - (b.lo >>> 1);
            if (r !== 0) {
                return r;
            }
            return (a.lo & 1) - (b.lo & 1);
        };
        Long_ucompare = function(a, b) {
            var r = $rt_ucmp(a.hi, b.hi);
            if (r !== 0) {
                return r;
            }
            r = (a.lo >>> 1) - (b.lo >>> 1);
            if (r !== 0) {
                return r;
            }
            return (a.lo & 1) - (b.lo & 1);
        };
        Long_mul = function(a, b) {
            var positive = Long_isNegative(a) === Long_isNegative(b);
            if (Long_isNegative(a)) {
                a = Long_neg(a);
            }
            if (Long_isNegative(b)) {
                b = Long_neg(b);
            }
            var a_lolo = a.lo & 0xFFFF;
            var a_lohi = a.lo >>> 16;
            var a_hilo = a.hi & 0xFFFF;
            var a_hihi = a.hi >>> 16;
            var b_lolo = b.lo & 0xFFFF;
            var b_lohi = b.lo >>> 16;
            var b_hilo = b.hi & 0xFFFF;
            var b_hihi = b.hi >>> 16;
            var lolo = 0;
            var lohi = 0;
            var hilo = 0;
            var hihi = 0;
            lolo = a_lolo * b_lolo | 0;
            lohi = lolo >>> 16;
            lohi = (lohi & 0xFFFF) + a_lohi * b_lolo | 0;
            hilo = hilo + (lohi >>> 16) | 0;
            lohi = (lohi & 0xFFFF) + a_lolo * b_lohi | 0;
            hilo = hilo + (lohi >>> 16) | 0;
            hihi = hilo >>> 16;
            hilo = (hilo & 0xFFFF) + a_hilo * b_lolo | 0;
            hihi = hihi + (hilo >>> 16) | 0;
            hilo = (hilo & 0xFFFF) + a_lohi * b_lohi | 0;
            hihi = hihi + (hilo >>> 16) | 0;
            hilo = (hilo & 0xFFFF) + a_lolo * b_hilo | 0;
            hihi = hihi + (hilo >>> 16) | 0;
            hihi = hihi + a_hihi * b_lolo + a_hilo * b_lohi + a_lohi * b_hilo + a_lolo * b_hihi | 0;
            var result = new Long(lolo & 0xFFFF | lohi << 16, hilo & 0xFFFF | hihi << 16);
            return positive ? result : Long_neg(result);
        };
        Long_div = function(a, b) {
            if ($rt_globals.Math.abs(a.hi) < Long_MAX_NORMAL && $rt_globals.Math.abs(b.hi) < Long_MAX_NORMAL) {
                return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
            }
            return (Long_divRem(a, b))[0];
        };
        Long_udiv = function(a, b) {
            if (a.hi >= 0 && a.hi < Long_MAX_NORMAL && b.hi >= 0 && b.hi < Long_MAX_NORMAL) {
                return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
            }
            return (Long_udivRem(a, b))[0];
        };
        Long_rem = function(a, b) {
            if ($rt_globals.Math.abs(a.hi) < Long_MAX_NORMAL && $rt_globals.Math.abs(b.hi) < Long_MAX_NORMAL) {
                return Long_fromNumber(Long_toNumber(a) % Long_toNumber(b));
            }
            return (Long_divRem(a, b))[1];
        };
        Long_urem = function(a, b) {
            if (a.hi >= 0 && a.hi < Long_MAX_NORMAL && b.hi >= 0 && b.hi < Long_MAX_NORMAL) {
                return Long_fromNumber(Long_toNumber(a) / Long_toNumber(b));
            }
            return (Long_udivRem(a, b))[1];
        };
        function Long_divRem(a, b) {
            if (b.lo === 0 && b.hi === 0) {
                throw new $rt_globals.Error("Division by zero");
            }
            var positive = Long_isNegative(a) === Long_isNegative(b);
            if (Long_isNegative(a)) {
                a = Long_neg(a);
            }
            if (Long_isNegative(b)) {
                b = Long_neg(b);
            }
            a = new LongInt(a.lo, a.hi, 0);
            b = new LongInt(b.lo, b.hi, 0);
            var q = LongInt_div(a, b);
            a = new Long(a.lo, a.hi);
            q = new Long(q.lo, q.hi);
            return positive ? [q, a] : [Long_neg(q), Long_neg(a)];
        }
        function Long_udivRem(a, b) {
            if (b.lo === 0 && b.hi === 0) {
                throw new $rt_globals.Error("Division by zero");
            }
            a = new LongInt(a.lo, a.hi, 0);
            b = new LongInt(b.lo, b.hi, 0);
            var q = LongInt_div(a, b);
            a = new Long(a.lo, a.hi);
            q = new Long(q.lo, q.hi);
            return [q, a];
        }
        function Long_shiftLeft16(a) {
            return new Long(a.lo << 16, a.lo >>> 16 | a.hi << 16);
        }
        function Long_shiftRight16(a) {
            return new Long(a.lo >>> 16 | a.hi << 16, a.hi >>> 16);
        }
        Long_and = function(a, b) {
            return new Long(a.lo & b.lo, a.hi & b.hi);
        };
        Long_or = function(a, b) {
            return new Long(a.lo | b.lo, a.hi | b.hi);
        };
        Long_xor = function(a, b) {
            return new Long(a.lo ^ b.lo, a.hi ^ b.hi);
        };
        Long_shl = function(a, b) {
            b &= 63;
            if (b === 0) {
                return a;
            } else if (b < 32) {
                return new Long(a.lo << b, a.lo >>> 32 - b | a.hi << b);
            } else if (b === 32) {
                return new Long(0, a.lo);
            } else {
                return new Long(0, a.lo << b - 32);
            }
        };
        Long_shr = function(a, b) {
            b &= 63;
            if (b === 0) {
                return a;
            } else if (b < 32) {
                return new Long(a.lo >>> b | a.hi << 32 - b, a.hi >> b);
            } else if (b === 32) {
                return new Long(a.hi, a.hi >> 31);
            } else {
                return new Long(a.hi >> b - 32, a.hi >> 31);
            }
        };
        Long_shru = function(a, b) {
            b &= 63;
            if (b === 0) {
                return a;
            } else if (b < 32) {
                return new Long(a.lo >>> b | a.hi << 32 - b, a.hi >>> b);
            } else if (b === 32) {
                return new Long(a.hi, 0);
            } else {
                return new Long(a.hi >>> b - 32, 0);
            }
        };
        Long_not = function(a) {
            return new Long(~a.hi, ~a.lo);
        };
        function LongInt(lo, hi, sup) {
            this.lo = lo;
            this.hi = hi;
            this.sup = sup;
        }
        function LongInt_mul(a, b) {
            var a_lolo = (a.lo & 0xFFFF) * b | 0;
            var a_lohi = (a.lo >>> 16) * b | 0;
            var a_hilo = (a.hi & 0xFFFF) * b | 0;
            var a_hihi = (a.hi >>> 16) * b | 0;
            var sup = a.sup * b | 0;
            a_lohi = a_lohi + (a_lolo >>> 16) | 0;
            a_hilo = a_hilo + (a_lohi >>> 16) | 0;
            a_hihi = a_hihi + (a_hilo >>> 16) | 0;
            sup = sup + (a_hihi >>> 16) | 0;
            a.lo = a_lolo & 0xFFFF | a_lohi << 16;
            a.hi = a_hilo & 0xFFFF | a_hihi << 16;
            a.sup = sup & 0xFFFF;
        }
        function LongInt_sub(a, b) {
            var a_lolo = a.lo & 0xFFFF;
            var a_lohi = a.lo >>> 16;
            var a_hilo = a.hi & 0xFFFF;
            var a_hihi = a.hi >>> 16;
            var b_lolo = b.lo & 0xFFFF;
            var b_lohi = b.lo >>> 16;
            var b_hilo = b.hi & 0xFFFF;
            var b_hihi = b.hi >>> 16;
            a_lolo = a_lolo - b_lolo | 0;
            a_lohi = a_lohi - b_lohi + (a_lolo >> 16) | 0;
            a_hilo = a_hilo - b_hilo + (a_lohi >> 16) | 0;
            a_hihi = a_hihi - b_hihi + (a_hilo >> 16) | 0;
            var sup = a.sup - b.sup + (a_hihi >> 16) | 0;
            a.lo = a_lolo & 0xFFFF | a_lohi << 16;
            a.hi = a_hilo & 0xFFFF | a_hihi << 16;
            a.sup = sup;
        }
        function LongInt_add(a, b) {
            var a_lolo = a.lo & 0xFFFF;
            var a_lohi = a.lo >>> 16;
            var a_hilo = a.hi & 0xFFFF;
            var a_hihi = a.hi >>> 16;
            var b_lolo = b.lo & 0xFFFF;
            var b_lohi = b.lo >>> 16;
            var b_hilo = b.hi & 0xFFFF;
            var b_hihi = b.hi >>> 16;
            a_lolo = a_lolo + b_lolo | 0;
            a_lohi = a_lohi + b_lohi + (a_lolo >> 16) | 0;
            a_hilo = a_hilo + b_hilo + (a_lohi >> 16) | 0;
            a_hihi = a_hihi + b_hihi + (a_hilo >> 16) | 0;
            var sup = a.sup + b.sup + (a_hihi >> 16) | 0;
            a.lo = a_lolo & 0xFFFF | a_lohi << 16;
            a.hi = a_hilo & 0xFFFF | a_hihi << 16;
            a.sup = sup;
        }
        function LongInt_inc(a) {
            a.lo = a.lo + 1 | 0;
            if (a.lo === 0) {
                a.hi = a.hi + 1 | 0;
                if (a.hi === 0) {
                    a.sup = a.sup + 1 & 0xFFFF;
                }
            }
        }
        function LongInt_dec(a) {
            a.lo = a.lo - 1 | 0;
            if (a.lo ===  -1) {
                a.hi = a.hi - 1 | 0;
                if (a.hi ===  -1) {
                    a.sup = a.sup - 1 & 0xFFFF;
                }
            }
        }
        function LongInt_ucompare(a, b) {
            var r = a.sup - b.sup;
            if (r !== 0) {
                return r;
            }
            r = (a.hi >>> 1) - (b.hi >>> 1);
            if (r !== 0) {
                return r;
            }
            r = (a.hi & 1) - (b.hi & 1);
            if (r !== 0) {
                return r;
            }
            r = (a.lo >>> 1) - (b.lo >>> 1);
            if (r !== 0) {
                return r;
            }
            return (a.lo & 1) - (b.lo & 1);
        }
        function LongInt_numOfLeadingZeroBits(a) {
            var n = 0;
            var d = 16;
            while (d > 0) {
                if (a >>> d !== 0) {
                    a >>>= d;
                    n = n + d | 0;
                }
                d = d / 2 | 0;
            }
            return 31 - n;
        }
        function LongInt_shl(a, b) {
            if (b === 0) {
                return;
            }
            if (b < 32) {
                a.sup = (a.hi >>> 32 - b | a.sup << b) & 0xFFFF;
                a.hi = a.lo >>> 32 - b | a.hi << b;
                a.lo <<= b;
            } else if (b === 32) {
                a.sup = a.hi & 0xFFFF;
                a.hi = a.lo;
                a.lo = 0;
            } else if (b < 64) {
                a.sup = (a.lo >>> 64 - b | a.hi << b - 32) & 0xFFFF;
                a.hi = a.lo << b;
                a.lo = 0;
            } else if (b === 64) {
                a.sup = a.lo & 0xFFFF;
                a.hi = 0;
                a.lo = 0;
            } else {
                a.sup = a.lo << b - 64 & 0xFFFF;
                a.hi = 0;
                a.lo = 0;
            }
        }
        function LongInt_shr(a, b) {
            if (b === 0) {
                return;
            }
            if (b === 32) {
                a.lo = a.hi;
                a.hi = a.sup;
                a.sup = 0;
            } else if (b < 32) {
                a.lo = a.lo >>> b | a.hi << 32 - b;
                a.hi = a.hi >>> b | a.sup << 32 - b;
                a.sup >>>= b;
            } else if (b === 64) {
                a.lo = a.sup;
                a.hi = 0;
                a.sup = 0;
            } else if (b < 64) {
                a.lo = a.hi >>> b - 32 | a.sup << 64 - b;
                a.hi = a.sup >>> b - 32;
                a.sup = 0;
            } else {
                a.lo = a.sup >>> b - 64;
                a.hi = 0;
                a.sup = 0;
            }
        }
        function LongInt_copy(a) {
            return new LongInt(a.lo, a.hi, a.sup);
        }
        function LongInt_div(a, b) {
            var bits = b.hi !== 0 ? LongInt_numOfLeadingZeroBits(b.hi) : LongInt_numOfLeadingZeroBits(b.lo) + 32;
            var sz = 1 + (bits / 16 | 0);
            var dividentBits = bits % 16;
            LongInt_shl(b, bits);
            LongInt_shl(a, dividentBits);
            var q = new LongInt(0, 0, 0);
            while (sz-- > 0) {
                LongInt_shl(q, 16);
                var digitA = (a.hi >>> 16) + 0x10000 * a.sup;
                var digitB = b.hi >>> 16;
                var digit = digitA / digitB | 0;
                var t = LongInt_copy(b);
                LongInt_mul(t, digit);
                if (LongInt_ucompare(t, a) >= 0) {
                    while (LongInt_ucompare(t, a) > 0) {
                        LongInt_sub(t, b);
                         --digit;
                    }
                } else {
                    while (true) {
                        var nextT = LongInt_copy(t);
                        LongInt_add(nextT, b);
                        if (LongInt_ucompare(nextT, a) > 0) {
                            break;
                        }
                        t = nextT;
                        ++digit;
                    }
                }
                LongInt_sub(a, t);
                q.lo |= digit;
                LongInt_shl(a, 16);
            }
            LongInt_shr(a, bits + 16);
            return q;
        }
    } else {
        Long_eq = function(a, b) {
            return a === b;
        };
        Long_ne = function(a, b) {
            return a !== b;
        };
        Long_gt = function(a, b) {
            return a > b;
        };
        Long_ge = function(a, b) {
            return a >= b;
        };
        Long_lt = function(a, b) {
            return a < b;
        };
        Long_le = function(a, b) {
            return a <= b;
        };
        Long_add = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a + b);
        };
        Long_inc = function(a) {
            return $rt_globals.BigInt.asIntN(64, a + 1);
        };
        Long_dec = function(a) {
            return $rt_globals.BigInt.asIntN(64, a - 1);
        };
        Long_neg = function(a) {
            return $rt_globals.BigInt.asIntN(64,  -a);
        };
        Long_sub = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a - b);
        };
        Long_compare = function(a, b) {
            return a < b ?  -1 : a > b ? 1 : 0;
        };
        Long_ucompare = function(a, b) {
            a = $rt_globals.BigInt.asUintN(64, a);
            b = $rt_globals.BigInt.asUintN(64, b);
            return a < b ?  -1 : a > b ? 1 : 0;
        };
        Long_mul = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a * b);
        };
        Long_div = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a / b);
        };
        Long_udiv = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(64, a) / $rt_globals.BigInt.asUintN(64, b));
        };
        Long_rem = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a % b);
        };
        Long_urem = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(64, a) % $rt_globals.BigInt.asUintN(64, b));
        };
        Long_and = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a & b);
        };
        Long_or = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a | b);
        };
        Long_xor = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a ^ b);
        };
        Long_shl = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a << $rt_globals.BigInt(b & 63));
        };
        Long_shr = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, a >> $rt_globals.BigInt(b & 63));
        };
        Long_shru = function(a, b) {
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(64, a) >> $rt_globals.BigInt(b & 63));
        };
        Long_not = function(a) {
            return $rt_globals.BigInt.asIntN(64, ~a);
        };
    }
    var Long_add = Long_add;

    var Long_sub = Long_sub;

    var Long_mul = Long_mul;

    var Long_div = Long_div;

    var Long_rem = Long_rem;

    var Long_or = Long_or;

    var Long_and = Long_and;

    var Long_xor = Long_xor;

    var Long_shl = Long_shl;

    var Long_shr = Long_shr;

    var Long_shru = Long_shru;

    var Long_compare = Long_compare;

    var Long_eq = Long_eq;

    var Long_ne = Long_ne;

    var Long_lt = Long_lt;

    var Long_le = Long_le;

    var Long_gt = Long_gt;

    var Long_ge = Long_ge;

    var Long_not = Long_not;

    var Long_neg = Long_neg;

    function TeaVMThread(runner) {
        this.status = 3;
        this.stack = [];
        this.suspendCallback = null;
        this.runner = runner;
        this.attribute = null;
        this.completeCallback = null;
    }
    TeaVMThread.prototype.push = function() {
        for (var i = 0;i < arguments.length;++i) {
            this.stack.push(arguments[i]);
        }
        return this;
    };
    TeaVMThread.prototype.s = TeaVMThread.prototype.push;
    TeaVMThread.prototype.pop = function() {
        return this.stack.pop();
    };
    TeaVMThread.prototype.l = TeaVMThread.prototype.pop;
    TeaVMThread.prototype.isResuming = function() {
        return this.status === 2;
    };
    TeaVMThread.prototype.isSuspending = function() {
        return this.status === 1;
    };
    TeaVMThread.prototype.suspend = function(callback) {
        this.suspendCallback = callback;
        this.status = 1;
    };
    TeaVMThread.prototype.start = function(callback) {
        if (this.status !== 3) {
            throw new $rt_globals.Error("Thread already started");
        }
        if ($rt_currentNativeThread !== null) {
            throw new $rt_globals.Error("Another thread is running");
        }
        this.status = 0;
        this.completeCallback = callback ? callback : function(result) {
            if (result instanceof $rt_globals.Error) {
                throw result;
            }
        };
        this.run();
    };
    TeaVMThread.prototype.resume = function() {
        if ($rt_currentNativeThread !== null) {
            throw new $rt_globals.Error("Another thread is running");
        }
        this.status = 2;
        this.run();
    };
    TeaVMThread.prototype.run = function() {
        $rt_currentNativeThread = this;
        var result;
        try {
            result = this.runner();
        } catch (e){
            result = e;
        } finally {
            $rt_currentNativeThread = null;
        }
        if (this.suspendCallback !== null) {
            var self = this;
            var callback = this.suspendCallback;
            this.suspendCallback = null;
            callback(function() {
                self.resume();
            });
        } else if (this.status === 0) {
            this.completeCallback(result);
        }
    };
    function $rt_suspending() {
        var thread = $rt_nativeThread();
        return thread != null && thread.isSuspending();
    }
    function $rt_resuming() {
        var thread = $rt_nativeThread();
        return thread != null && thread.isResuming();
    }
    function $rt_suspend(callback) {
        var nativeThread = $rt_nativeThread();
        if (nativeThread === null) {
            throw new $rt_globals.Error("Suspension point reached from non-threading context (perhaps, from native JS method).");
        }
        return nativeThread.suspend(callback);
    }
    function $rt_startThread(runner, callback) {
        (new TeaVMThread(runner)).start(callback);
    }
    var $rt_currentNativeThread = null;
    function $rt_nativeThread() {
        return $rt_currentNativeThread;
    }
    function $rt_invalidPointer() {
        throw new $rt_globals.Error("Invalid recorded state");
    }
    $rt_exports.main = $rt_mainStarter(cdmC_Client_main);
    $rt_exports.main.javaException = $rt_javaException;
    let $rt_jso_marker = $rt_globals.Symbol('jsoClass');
    (function() {
        var c;
        c = otjb_Window.prototype;
        c.removeEventListener = c.$removeEventListener$exported$3;
        c.dispatchEvent = c.$dispatchEvent$exported$4;
        c.get = c.$get$exported$0;
        c.addEventListener = c.$addEventListener$exported$6;
        Object.defineProperty(c, "length", {
            get: c.$getLength$exported$5
        });
        c = cmr_Textures$loadTexture$lambda$_1_0.prototype;
        c[$rt_jso_marker] = true;
        c.handleEvent = c.$handleEvent$exported$0;
        c = cmr_Textures$loadTexture$lambda$_1_1.prototype;
        c[$rt_jso_marker] = true;
        c.handleEvent = c.$handleEvent$exported$0;
        c = cmr_Textures$loadTexture$lambda$_1_2.prototype;
        c[$rt_jso_marker] = true;
        c.handleEvent = c.$handleEvent$exported$0;
        c = otji_JSWrapper$_clinit_$lambda$_30_0.prototype;
        c[$rt_jso_marker] = true;
        c.accept = c.$accept$exported$0;
        c = otji_JSWrapper$_clinit_$lambda$_30_1.prototype;
        c[$rt_jso_marker] = true;
        c.accept = c.$accept$exported$0;
    })();
}));

//# sourceMappingURL=../classes.js.map