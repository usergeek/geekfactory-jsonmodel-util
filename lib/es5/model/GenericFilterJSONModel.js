"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericFilterItemJSONModel = exports.GenericFilterJSONModel = void 0;
const GenericArrayValueJSONModel_1 = require("./GenericArrayValueJSONModel");
const GenericStringValueJSONModel_1 = require("./GenericStringValueJSONModel");
const lodash_1 = __importDefault(require("lodash"));
class GenericFilterJSONModel {
    constructor(serializedState) {
        this.filterValuesJSONModel = new GenericArrayValueJSONModel_1.GenericArrayValueJSONModel();
        this.reset = () => {
            this.filterValuesJSONModel.reset();
        };
        this.overwriteFromSerializedState = (serializedState) => {
            this.filterValuesJSONModel.overwriteFromSerializedState(lodash_1.default.cloneDeep(serializedState));
        };
        this.serialize = () => {
            return this.filterValuesJSONModel.serialize();
        };
        this.getFilterValuesJSONModel = () => this.filterValuesJSONModel;
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericFilterJSONModel = GenericFilterJSONModel;
class GenericFilterItemJSONModel {
    constructor(serializedState) {
        this.nameJSONModel = new GenericStringValueJSONModel_1.GenericStringValueJSONModel();
        this.valuesJSONModel = new GenericArrayValueJSONModel_1.GenericArrayValueJSONModel();
        this.reset = () => {
            this.nameJSONModel.reset();
            this.valuesJSONModel.reset();
        };
        this.overwriteFromSerializedState = (serializedState) => {
            if (serializedState) {
                this.nameJSONModel.overwriteFromSerializedState(serializedState.name);
                this.valuesJSONModel.overwriteFromSerializedState(lodash_1.default.cloneDeep(serializedState.values));
            }
        };
        this.serialize = () => {
            return {
                name: this.nameJSONModel.serialize(),
                values: this.valuesJSONModel.serialize(),
            };
        };
        this.getNameJSONModel = () => this.nameJSONModel;
        this.getValuesJSONModel = () => this.valuesJSONModel;
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericFilterItemJSONModel = GenericFilterItemJSONModel;
//# sourceMappingURL=GenericFilterJSONModel.js.map