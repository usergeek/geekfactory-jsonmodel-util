"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericStringValueJSONModel = void 0;
const lodash_1 = __importDefault(require("lodash"));
class GenericStringValueJSONModel {
    constructor(serializedState, defaultValue) {
        this.setDefaultValue = (defaultValue) => {
            this.defaultValue = defaultValue;
        };
        this.isDefaultValue = () => {
            return this.value === this.defaultValue;
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
            if (lodash_1.default.isString(value)) {
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
exports.GenericStringValueJSONModel = GenericStringValueJSONModel;
//# sourceMappingURL=GenericStringValueJSONModel.js.map