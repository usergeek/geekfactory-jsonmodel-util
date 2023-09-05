"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericArrayValueJSONModel = void 0;
const lodash_1 = __importDefault(require("lodash"));
class GenericArrayValueJSONModel {
    constructor(serializedState) {
        this.reset = () => {
            this.value = undefined;
        };
        this.overwriteFromSerializedState = (serializedState) => {
            this.setValue(serializedState ? serializedState : undefined);
        };
        this.serialize = () => {
            if (this.value == undefined || this.value.length == 0) {
                return undefined;
            }
            return this.value;
        };
        ////////////////////////////////////////////////
        // Name
        ////////////////////////////////////////////////
        this.getValue = () => {
            return this.value;
        };
        this.setValue = (value) => {
            if (lodash_1.default.isArray(value)) {
                this.value = value;
            }
            else {
                this.reset();
            }
        };
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericArrayValueJSONModel = GenericArrayValueJSONModel;
//# sourceMappingURL=GenericArrayValueJSONModel.js.map