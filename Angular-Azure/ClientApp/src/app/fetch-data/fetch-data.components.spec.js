"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockHttp = /** @class */ (function () {
    function MockHttp() {
    }
    MockHttp.prototype.get = function (url) {
        return {
            subscribe: function () { }
        };
    };
    return MockHttp;
}());
exports.MockHttp = MockHttp;
//# sourceMappingURL=fetch-data.components.spec.js.map