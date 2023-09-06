"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSortingItemJSONModel = exports.GenericSortingJSONModel = exports.SORT_ODER_DESC = exports.SORT_ODER_ASC = void 0;
const GenericStringValueJSONModel_1 = require("./GenericStringValueJSONModel");
const GenericArrayValueJSONModel_1 = require("./GenericArrayValueJSONModel");
const lodash_1 = __importDefault(require("lodash"));
exports.SORT_ODER_ASC = "asc";
exports.SORT_ODER_DESC = "desc";
class GenericSortingJSONModel {
    constructor(serializedState) {
        this.sortValuesJSONModel = new GenericArrayValueJSONModel_1.GenericArrayValueJSONModel();
        this.reset = () => {
            this.sortValuesJSONModel.reset();
        };
        this.overwriteFromSerializedState = (serializedState) => {
            this.sortValuesJSONModel.overwriteFromSerializedState(serializedState);
        };
        this.overwriteFromSortValuesJSONModels = (sortValuesJSONModels) => {
            this.overwriteFromSerializedState(sortValuesJSONModels == undefined ? undefined : lodash_1.default.map(sortValuesJSONModels, v => v.serialize()));
        };
        this.serialize = () => {
            return this.sortValuesJSONModel.serialize();
        };
        this.getSortItems = () => {
            const sortValues = this.sortValuesJSONModel.getValue();
            if ((sortValues === null || sortValues === void 0 ? void 0 : sortValues.length) == 0) {
                return undefined;
            }
            return lodash_1.default.compact(lodash_1.default.map(sortValues, v => new GenericSortingItemJSONModel(v)));
        };
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericSortingJSONModel = GenericSortingJSONModel;
class GenericSortingItemJSONModel {
    constructor(serializedState) {
        this.keyJSONModel = new GenericStringValueJSONModel_1.GenericStringValueJSONModel();
        this.orderJSONModel = new GenericStringValueJSONModel_1.GenericStringValueJSONModel();
        this.reset = () => {
            this.keyJSONModel.reset();
            this.orderJSONModel.reset();
        };
        this.overwriteFromSerializedState = (serializedState) => {
            if (serializedState) {
                this.keyJSONModel.overwriteFromSerializedState(serializedState.key);
                this.orderJSONModel.overwriteFromSerializedState(serializedState.order);
            }
        };
        this.serialize = () => {
            const value = {
                key: this.keyJSONModel.serialize(),
                order: this.orderJSONModel.serialize(),
            };
            if (lodash_1.default.every(value, lodash_1.default.isEmpty)) {
                return undefined;
            }
            return value;
        };
        this.getKeyJSONModel = () => this.keyJSONModel;
        this.getOrderJSONModel = () => this.orderJSONModel;
        this.setKeyAndOrder = (key, order) => {
            this.keyJSONModel.setValue(key);
            this.orderJSONModel.setValue(order);
        };
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericSortingItemJSONModel = GenericSortingItemJSONModel;
//# sourceMappingURL=GenericSortingJSONModel.js.map