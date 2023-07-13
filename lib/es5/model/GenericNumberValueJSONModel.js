"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericNumberValueJSONModel = void 0;
const lodash_1 = __importDefault(require("lodash"));
class GenericNumberValueJSONModel {
    constructor(serializedState, defaultValue) {
        this.setDefaultValue = (defaultValue) => {
            this.defaultValue = defaultValue;
        };
        this.reset = () => {
            this.value = this.defaultValue;
        };
        this.overwriteFromSerializedState = (serializedState) => {
            this.setValue(serializedState);
        };
        this.serialize = () => {
            return this.value;
        };
        ////////////////////////////////////////////////
        // Name
        ////////////////////////////////////////////////
        this.getValue = () => this.value;
        this.setValue = (value) => {
            if (lodash_1.default.isNumber(value) && lodash_1.default.isFinite(value)) {
                this.value = value;
            }
            else {
                this.reset();
            }
        };
        this.defaultValue = defaultValue;
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericNumberValueJSONModel = GenericNumberValueJSONModel;
//# sourceMappingURL=GenericNumberValueJSONModel.js.map