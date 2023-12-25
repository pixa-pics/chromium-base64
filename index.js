/*
* The MIT License (MIT)
*
* Copyright (c) 2005-2016 Nick Galbreath
* Copyright (c) 2023-2024 Affolter Matias
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
"use strict";

var B64chromium = (function B64chromium() {
    "use strict";
    var _D = {"43": [0xf8,0xe003,0x800f00,0x3e0000],"47": [0xfc,0xf003,0xc00f00,0x3f0000],"48": [0xd0,0x4003,0xd00,0x340000],"49": [0xd4,0x5003,0x400d00,0x350000],"50": [0xd8,0x6003,0x800d00,0x360000],"51": [0xdc,0x7003,0xc00d00,0x370000],"52": [0xe0,0x8003,0xe00,0x380000],"53": [0xe4,0x9003,0x400e00,0x390000],"54": [0xe8,0xa003,0x800e00,0x3a0000],"55": [0xec,0xb003,0xc00e00,0x3b0000],"56": [0xf0,0xc003,0xf00,0x3c0000],"57": [0xf4,0xd003,0x400f00,0x3d0000],"65": [0x0,0x0,0x0,0x0],"66": [0x4,0x1000,0x400000,0x10000],"67": [0x8,0x2000,0x800000,0x20000],"68": [0xc,0x3000,0xc00000,0x30000],"69": [0x10,0x4000,0x100,0x40000],"70": [0x14,0x5000,0x400100,0x50000],"71": [0x18,0x6000,0x800100,0x60000],"72": [0x1c,0x7000,0xc00100,0x70000],"73": [0x20,0x8000,0x200,0x80000],"74": [0x24,0x9000,0x400200,0x90000],"75": [0x28,0xa000,0x800200,0xa0000],"76": [0x2c,0xb000,0xc00200,0xb0000],"77": [0x30,0xc000,0x300,0xc0000],"78": [0x34,0xd000,0x400300,0xd0000],"79": [0x38,0xe000,0x800300,0xe0000],"80": [0x3c,0xf000,0xc00300,0xf0000],"81": [0x40,0x1,0x400,0x100000],"82": [0x44,0x1001,0x400400,0x110000],"83": [0x48,0x2001,0x800400,0x120000],"84": [0x4c,0x3001,0xc00400,0x130000],"85": [0x50,0x4001,0x500,0x140000],"86": [0x54,0x5001,0x400500,0x150000],"87": [0x58,0x6001,0x800500,0x160000],"88": [0x5c,0x7001,0xc00500,0x170000],"89": [0x60,0x8001,0x600,0x180000],"90": [0x64,0x9001,0x400600,0x190000],"97": [0x68,0xa001,0x800600,0x1a0000],"98": [0x6c,0xb001,0xc00600,0x1b0000],"99": [0x70,0xc001,0x700,0x1c0000],"100": [0x74,0xd001,0x400700,0x1d0000],"101": [0x78,0xe001,0x800700,0x1e0000],"102": [0x7c,0xf001,0xc00700,0x1f0000],"103": [0x80,0x2,0x800,0x200000],"104": [0x84,0x1002,0x400800,0x210000],"105": [0x88,0x2002,0x800800,0x220000],"106": [0x8c,0x3002,0xc00800,0x230000],"107": [0x90,0x4002,0x900,0x240000],"108": [0x94,0x5002,0x400900,0x250000],"109": [0x98,0x6002,0x800900,0x260000],"110": [0x9c,0x7002,0xc00900,0x270000],"111": [0xa0,0x8002,0xa00,0x280000],"112": [0xa4,0x9002,0x400a00,0x290000],"113": [0xa8,0xa002,0x800a00,0x2a0000],"114": [0xac,0xb002,0xc00a00,0x2b0000],"115": [0xb0,0xc002,0xb00,0x2c0000],"116": [0xb4,0xd002,0x400b00,0x2d0000],"117": [0xb8,0xe002,0x800b00,0x2e0000],"118": [0xbc,0xf002,0xc00b00,0x2f0000],"119": [0xc0,0x3,0xc00,0x300000],"120": [0xc4,0x1003,0x400c00,0x310000],"121": [0xc8,0x2003,0x800c00,0x320000],"122": [0xcc,0x3003,0xc00c00,0x330000]};
    var _AB = new ArrayBuffer(256*2+512*4);
    var _E0 = new Uint8Array(_AB, 0, 256);
    var _E1 = new Uint8Array(_AB, 256, 256);
    var _D0 = new Uint32Array(_AB, 512, 128);
    var _D1 = new Uint32Array(_AB, 512+512, 128);
    var _D2 = new Uint32Array(_AB, 512+512*2, 128);
    var _D3 = new Uint32Array(_AB, 512+512*3, 128);

    _E0.set(Uint8Array.from('AAAABBBBCCCCDDDDEEEEFFFFGGGGHHHHIIIIJJJJKKKKLLLLMMMMNNNNOOOOPPPPQQQQRRRRSSSSTTTTUUUUVVVVWWWWXXXXYYYYZZZZaaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz0000111122223333444455556666777788889999++++////'.split("").map(function (char) {return char.charCodeAt(0) & 0xFF;})));
    _E1.set(Uint8Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split("").map(function (char) {return char.charCodeAt(0) & 0xFF;})));
    _D0.set(new Uint32Array(128).fill(0x01FFFFFF));
    _D1.set(new Uint32Array(128).fill(0x01FFFFFF));
    _D2.set(new Uint32Array(128).fill(0x01FFFFFF));
    _D3.set(new Uint32Array(128).fill(0x01FFFFFF));
    Object.entries(_D).forEach(function (a){
        _D0[parseInt(a[0])] = a[1][0] & 0xFFFFFFFF;
        _D1[parseInt(a[0])] = a[1][1] & 0xFFFFFFFF;
        _D2[parseInt(a[0])] = a[1][2] & 0xFFFFFFFF;
        _D3[parseInt(a[0])] = a[1][3] & 0xFFFFFFFF;
    });

    // The class definition
    class B64 {
        constructor() {
            this._CHNK_L_ = Math.pow(108, 2) / 2 | 0;
            this._CHNK_L_STR_ = this._CHNK_L_ * 3 | 0;
            this._CHNK_L_BUFF_ = this._CHNK_L_ * 4 | 0;
            this._PAD_C_ = "=".charCodeAt(0) & 0xFF;

            this._E0_ = _E0.slice(0, _E0.length);
            this._E1_ = _E1.slice(0, _E1.length);
            this._D0_ = _D0.slice(0, _D0.length);
            this._D1_ = _D1.slice(0, _D1.length);
            this._D2_ = _D2.slice(0, _D2.length);
            this._D3_ = _D3.slice(0, _D3.length);

            this._AB_ = new ArrayBuffer(this._CHNK_L_BUFF_ + 4 | 0);
            this._u32aT_ = new Uint32Array(this._AB_, 0, 1);
            this._u8aT_ = new Uint8Array(this._AB_, 0, 3);
            this._T_ = new Uint8Array(this._AB_, 4, this._CHNK_L_BUFF_ | 0);
        }

        // Public getters and setters
        get PAD_C() {
            "use strict";
            return this._PAD_C_ & 0xFF;
        }

        get CHNK_L_STR() {
            "use strict";
            return this._CHNK_L_STR_ | 0;
        }

        get u32aT0() {
            "use strict";
            return this._u32aT_[0];
        }

        set u32aT0(v) {
            "use strict";
            this._u32aT_[0] = (v | 0) >>> 0;
        }

        get u8aTa() {
            "use strict";
            return this._u8aT_[0];
        }

        get u8aTb() {
            "use strict";
            return this._u8aT_[1];
        }

        get u8aTc() {
            "use strict";
            return this._u8aT_[2];
        }

        // Public methods
        _base64_decode_u32ax1(str, o) {
            "use strict";
            o = (o | 0) >>> 0;
            this.u32aT0 = this._D0_[str.charCodeAt(o) & 0xFF] | this._D1_[str.charCodeAt(o+1|0) & 0xFF] | this._D2_[str.charCodeAt(o+2|0) & 0xFF] | this._D3_[str.charCodeAt(o+3|0) & 0xFF];
        }

        _base64_encode_u8ax4(a, p, i) {
            "use strict";
            p = (p|0)>>>0;
            i = (i|0)>>>0;
            this._T_[p | 0] = this._E0_[a[(i | 0) >>> 0]];
            this._T_[(p + 1) | 0] = this._E1_[((a[(i | 0) >>> 0] & 0x03) << 4) | ((a[(i + 1 | 0) >>> 0] >> 4) & 0x0F)];
            this._T_[(p + 2) | 0] = this._E1_[((a[(i + 1 | 0) >>> 0] & 0x0F) << 2) | ((a[(i + 2 | 0) >>> 0] >> 6) & 0x03)];
            this._T_[(p + 3) | 0] = this._E1_[a[(i + 2 | 0) >>> 0]];
        }

        _base64_encode_final(a, i, l, p) {
            "use strict";
            i = (i | 0) >>> 0;
            l = (l | 0) >>> 0;
            p = (p | 0) >>> 0;
            switch ((l - i | 0) >>> 0) {
                case 1:
                    this._T_[p | 0] = this._E0_[a[(i | 0) >>> 0]];
                    this._T_[(p + 1) | 0] = this._E1_[((a[(i | 0) >>> 0] & 0x03) << 4) | ((a[(i + 1 | 0) >>> 0] >> 4) & 0x0F)];
                    this._T_[(p + 2) | 0] = this._PAD_C_;
                    this._T_[(p + 3) | 0] = this._PAD_C_;
                    p = (p + 4) | 0;
                    return this._T_.subarray(0, p | 0);
                case 2:
                    this._T_[p | 0] = this._E0_[a[(i | 0) >>> 0]];
                    this._T_[(p + 1) | 0] = this._E1_[((a[(i | 0) >>> 0] & 0x03) << 4) | ((a[(i + 1 | 0) >>> 0] >> 4) & 0x0F)];
                    this._T_[(p + 2) | 0] = this._E1_[((a[(i + 1 | 0) >>> 0] & 0x0F) << 2) | ((a[(i + 2 | 0) >>> 0] >> 6) & 0x03)];
                    this._T_[(p + 3) | 0] = this._PAD_C_;
                    p = (p + 4) | 0;
                    return this._T_.subarray(0, p | 0);
                case 0:
                    return this._T_.subarray(0, p | 0);
                default:
                    return this._T_;
            }
        }

        _base64_decode_final(dest, str, i, p, leftover) {
            "use strict";
            i = (i|0)>>>0;
            p = (p|0)>>>0;
            leftover = (leftover|0)>>>0;
            switch (leftover | 0) {
                case 0:
                    this.u32aT0 = (this._D0_[str.charCodeAt(i|0)] | this._D1_[str.charCodeAt(i+1|0)] | this._D2_[str.charCodeAt(i+2|0)] | this._D3_[str.charCodeAt(i+3|0)] | 0) >>> 0;
                    dest[p | 0] = this.u32aT0 & 0xff;
                    dest[p + 1 | 0] = (this.u32aT0 >> 8) & 0xff;
                    dest[p + 2 | 0] = (this.u32aT0 >> 16) & 0xff;
                    return p+3|0;
                case 1:
                    this.u32aT0 = (this._D0_[str.charCodeAt(i|0)] | 0) >>> 0;
                    dest[p | 0] = this.u32aT0 & 0xff;
                    return p+1|0;
                case 2:
                    this.u32aT0 = (this._D0_[str.charCodeAt(i|0)] | this._D1_[str.charCodeAt(i+1|0)] | 0) >>> 0;
                    dest[p | 0] = this.u32aT0 & 0xff;
                    return p+1|0;
                default:
                    this.u32aT0 = (this._D0_[str.charCodeAt(i|0)] | this._D1_[str.charCodeAt(i+1|0)] | this._D2_[str.charCodeAt(i+2|0)] | 0) >>> 0;
                    dest[p | 0] = this.u32aT0 & 0xff;
                    dest[p + 1 | 0] = (this.u32aT0 >> 8) & 0xff;
                    return p+2|0;
            }
        }

        _base64_store_u8ax3(arr, o) {
            "use strict";
            o = (o | 0) >>> 0;
            arr[o] = this.u8aTa; arr[o+1|0] = this.u8aTb; arr[o+2|0] = this.u8aTc;
        }

        // Public methods
        get_max_round_str(l) {
            "use strict";
            return Math.ceil(l / this.CHNK_L_STR) | 0;
        }

        base64_encode(a, round) {
            "use strict";
            round = round | 0;
            var l = a.length | 0, i = round * this.CHNK_L_STR | 0, p = 0,
                l1 = Math.min(i + this.CHNK_L_STR | 0, l | 0), l2 = l1 - 2 | 0;

            if ((l2 | 0) > 0) {
                for (; (i | 0) < (l2 | 0); i = (i + 3 | 0) >>> 0, p = (p + 4) | 0) {
                    this._base64_encode_u8ax4(a, p, i);
                }
            }

            return B64.encodeChars_(this._base64_encode_final(a, i, l, p));
        }

        bytesToBase64(bytes) {
            "use strict";
            var s = "", r = 0, max_r = this.get_max_round_str(bytes.length);
            for (; (r | 0) < (max_r | 0); r = (r + 1 | 0) >>> 0) {
                s = s + this.base64_encode(bytes, r | 0);
            }
            return s;
        }

        base64ToBytes(str) {
            "use strict";
            str|0; // Flatten String
            var dest,
                len = str.length|0,
                i = 0,
                p = 0,
                leftover = 0,
                chunks = 0,
                missingOctets = 0;
            if ((len | 0) === 0) return new Uint8Array(0);
            if (str.charCodeAt(len - 1 | 0) === this.PAD_C) {
                len = (len - 1) | 0;
                missingOctets = (missingOctets + 1) | 0;
                if (str.charCodeAt(len - 1 | 0) === this.PAD_C) {
                    len = (len - 1) | 0;
                    missingOctets = (missingOctets + 1) | 0;
                }
            }
            dest = new Uint8Array(3 * (str.length / 4) - missingOctets);
            leftover = len & 3;
            chunks = (leftover | 0) === 0 ? (len >>> 2) - 1 | 0 : len >>> 2;

            for (; (i | 0) < (chunks | 0); i = (i + 1 | 0) >>> 0) {
                this._base64_decode_u32ax1(str, i << 2);
                this._base64_store_u8ax3(dest, p);
                p = (p + 3) | 0;
            }
            i = i << 2;
            this._base64_decode_final(dest, str, i, p, leftover);
            return dest;
        }
    }

    // Static methods
    B64.charCode_ = function (char) {
        "use strict";
        return char.charCodeAt(0) & 0xFF;
    };

    B64.charCodeAt_ = function (str, at) {
        "use strict";
        return str.charCodeAt(at | 0) & 0xFF;
    };

    B64.encodeChars_ = function (a) {
        "use strict";
        return (a.length|0) > 0 ? String.fromCharCode.apply(null, a): "";
    };

    return B64;
})();

module.exports = {
    B64chromium: B64chromium
}