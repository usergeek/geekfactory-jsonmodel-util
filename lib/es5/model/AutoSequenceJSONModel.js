"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSequenceJSONModel = void 0;
const lodash_1 = __importDefault(require("lodash"));
class AutoSequenceJSONModel {
    constructor(serializedState) {
        this.reset = () => {
            this.value = 0;
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
        this.bumpValue = () => this.setValue(this.getValue() + 1);
        this.setValue = (value) => {
            if (lodash_1.default.isNil(value) || !lodash_1.default.isFinite(value)) {
                this.reset();
            }
            else {
                this.value = value;
            }
        };
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.AutoSequenceJSONModel = AutoSequenceJSONModel;
//# sourceMappingURL=AutoSequenceJSONModel.js.map