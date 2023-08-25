"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPagingJSONModel = void 0;
const GenericNumberValueJSONModel_1 = require("./GenericNumberValueJSONModel");
const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
class GenericPagingJSONModel {
    constructor(serializedState, defaults) {
        this.pageJSONModel = new GenericNumberValueJSONModel_1.GenericNumberValueJSONModel(undefined);
        this.limitJSONModel = new GenericNumberValueJSONModel_1.GenericNumberValueJSONModel(undefined);
        this.reset = () => {
            this.pageJSONModel.reset();
            this.limitJSONModel.reset();
        };
        this.overwriteFromSerializedState = (serializedState) => {
            this.pageJSONModel.overwriteFromSerializedState(serializedState === null || serializedState === void 0 ? void 0 : serializedState.page);
            this.limitJSONModel.overwriteFromSerializedState(serializedState === null || serializedState === void 0 ? void 0 : serializedState.limit);
        };
        this.serialize = () => {
            if (this.pageJSONModel.isDefaultValue() && this.limitJSONModel.isDefaultValue()) {
                return undefined;
            }
            return {
                page: this.pageJSONModel.serialize(),
                limit: this.limitJSONModel.serialize(),
            };
        };
        this.getPageJSONModel = () => this.pageJSONModel;
        this.getLimitJSONModel = () => this.limitJSONModel;
        this.getPageValue = () => { var _a; return (_a = this.pageJSONModel.getValue()) !== null && _a !== void 0 ? _a : DEFAULT_PAGE; };
        this.getLimitValue = () => { var _a; return (_a = this.limitJSONModel.getValue()) !== null && _a !== void 0 ? _a : DEFAULT_LIMIT; };
        this.setValue = (page, limit) => {
            this.pageJSONModel.setValue(page);
            this.limitJSONModel.setValue(limit);
        };
        const { defaultPage = DEFAULT_PAGE, defaultLimit = DEFAULT_LIMIT } = defaults || {};
        this.pageJSONModel.setDefaultValue(defaultPage);
        this.limitJSONModel.setDefaultValue(defaultLimit);
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericPagingJSONModel = GenericPagingJSONModel;
//# sourceMappingURL=GenericPagingJSONModel.js.map