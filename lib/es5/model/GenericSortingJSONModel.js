"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSortingJSONModel = void 0;
const GenericStringValueJSONModel_1 = require("./GenericStringValueJSONModel");
const lodash_1 = __importDefault(require("lodash"));
class GenericSortingJSONModel {
    constructor(serializedState) {
        this.sortKeyJSONModel = new GenericStringValueJSONModel_1.GenericStringValueJSONModel();
        this.sortOrderJSONModel = new GenericStringValueJSONModel_1.GenericStringValueJSONModel();
        this.reset = () => {
            this.sortKeyJSONModel.reset();
            this.sortOrderJSONModel.reset();
        };
        this.overwriteFromSerializedState = (serializedState) => {
            if (serializedState) {
                this.sortKeyJSONModel.overwriteFromSerializedState(serializedState.sortKey);
                this.sortOrderJSONModel.overwriteFromSerializedState(serializedState.sortOrder);
            }
        };
        this.serialize = () => {
            const value = {
                sortKey: this.sortKeyJSONModel.serialize(),
                sortOrder: this.sortOrderJSONModel.serialize(),
            };
            if (lodash_1.default.every(value, lodash_1.default.isEmpty)) {
                return undefined;
            }
            return value;
        };
        this.getSortKeyJSONModel = () => this.sortKeyJSONModel;
        this.getSortOrderJSONModel = () => this.sortOrderJSONModel;
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericSortingJSONModel = GenericSortingJSONModel;
//# sourceMappingURL=GenericSortingJSONModel.js.map