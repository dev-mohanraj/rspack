(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./answer.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "answer", {
    enumerable: true,
    get: ()=>answer
});
const answer = 103330;
},
"./app.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _libJs = __webpack_require__("./lib.js");
setTimeout(()=>{
    console.log(_libJs.myanswer);
}, 1000);
if (module.hot?.accept) module.hot.accept((module1)=>{
    console.log("xxx:", module1);
});
},
"./index.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _appJs = __webpack_require__.interopRequire(__webpack_require__("./app.js"));
},
"./lib.js": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "myanswer", {
    enumerable: true,
    get: ()=>myanswer
});
const _answerJs = __webpack_require__("./answer.js");
const myanswer = _answerJs.answer;
},

},function(__webpack_require__) {
__webpack_require__("./index.js");
}
]);