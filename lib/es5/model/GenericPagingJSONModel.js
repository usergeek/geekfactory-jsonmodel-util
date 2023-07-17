"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPagingJSONModel = void 0;
const GenericNumberValueJSONModel_1 = require("./GenericNumberValueJSONModel");
const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
class GenericPagingJSONModel {
    constructor(serializedState, defaults) {
        this.currentPageJSONModel = new GenericNumberValueJSONModel_1.GenericNumberValueJSONModel(undefined);
        this.pageSizeJSONModel = new GenericNumberValueJSONModel_1.GenericNumberValueJSONModel(undefined);
        this.reset = () => {
            this.currentPageJSONModel.reset();
            this.pageSizeJSONModel.reset();
        };
        this.overwriteFromSerializedState = (serializedState) => {
            if (serializedState) {
                this.currentPageJSONModel.overwriteFromSerializedState(serializedState.currentPage);
                this.pageSizeJSONModel.overwriteFromSerializedState(serializedState.pageSize);
            }
        };
        this.serialize = () => {
            return {
                currentPage: this.currentPageJSONModel.serialize(),
                pageSize: this.pageSizeJSONModel.serialize(),
            };
        };
        this.getCurrentPage = () => this.currentPageJSONModel;
        this.getPageSize = () => this.pageSizeJSONModel;
        this.getCurrentPageValue = () => { var _a; return (_a = this.currentPageJSONModel.getValue()) !== null && _a !== void 0 ? _a : DEFAULT_CURRENT_PAGE; };
        this.getPageSizeValue = () => { var _a; return (_a = this.pageSizeJSONModel.getValue()) !== null && _a !== void 0 ? _a : DEFAULT_PAGE_SIZE; };
        this.setValue = (currentPage, pageSize) => {
            this.currentPageJSONModel.setValue(currentPage);
            this.pageSizeJSONModel.setValue(pageSize);
        };
        const { defaultCurrentPage = DEFAULT_CURRENT_PAGE, defaultPageSize = DEFAULT_PAGE_SIZE } = defaults || {};
        if (defaultCurrentPage !== undefined) {
            this.currentPageJSONModel.setDefaultValue(defaultCurrentPage);
        }
        if (defaultPageSize !== undefined) {
            this.pageSizeJSONModel.setDefaultValue(defaultPageSize);
        }
        this.reset();
        this.overwriteFromSerializedState(serializedState);
    }
}
exports.GenericPagingJSONModel = GenericPagingJSONModel;
//# sourceMappingURL=GenericPagingJSONModel.js.map