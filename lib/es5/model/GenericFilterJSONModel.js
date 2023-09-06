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
            this.filterValuesJSONModel.overwriteFromSerializedState(serializedState);
        };
        this.overwriteFromFilterValuesJSONModels = (filterValuesJSONModels) => {
            this.overwriteFromSerializedState(filterValuesJSONModels == undefined ? undefined : lodash_1.default.map(filterValuesJSONModels, v => v.serialize()));
        };
        this.serialize = () => {
            return this.filterValuesJSONModel.serialize();
        };
        this.getFilterItems = () => {
            const filterValues = this.filterValuesJSONModel.getValue();
            if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.length) == 0) {
                return undefined;
            }
            return lodash_1.default.compact(lodash_1.default.map(filterValues, filterValue => new GenericFilterItemJSONModel(filterValue)));
        };
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
                this.valuesJSONModel.overwriteFromSerializedState(serializedState.values);
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
        this.setNameAndValues = (name, values) => {
            this.nameJSONModel.setValue(name);
            this.valuesJSONModel.setValue(values);
        };
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericFilterItemJSONModel = GenericFilterItemJSONModel;
//# sourceMappingURL=GenericFilterJSONModel.js.map