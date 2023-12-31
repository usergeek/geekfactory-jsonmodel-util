"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericBooleanValueJSONModel = void 0;
const lodash_1 = __importDefault(require("lodash"));
class GenericBooleanValueJSONModel {
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
            if (this.value === this.defaultValue) {
                return undefined;
            }
            return this.value;
        };
        ////////////////////////////////////////////////
        // Name
        ////////////////////////////////////////////////
        this.getValue = () => this.value;
        this.setValue = (value) => {
            if (lodash_1.default.isBoolean(value)) {
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
exports.GenericBooleanValueJSONModel = GenericBooleanValueJSONModel;
//# sourceMappingURL=GenericBooleanValueJSONModel.js.map