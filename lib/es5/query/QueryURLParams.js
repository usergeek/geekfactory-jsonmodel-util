"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryURLParamsFrom = void 0;
const lodash_1 = __importDefault(require("lodash"));
const getQueryURLParamsFrom = (paging, sorting, filter) => {
    const paginationQueryURLParams = getPaginationQueryURLParamsFromPagingJSONModelSerializedState(paging);
    const sortQueryURLParams = getSortQueryURLParamsFromSortJSONModelSerializedState(sorting);
    const filterQueryURLParams = getFilterQueryURLParamsFromFilterJSONModelSerializedState(filter);
    return {
        ...paginationQueryURLParams,
        ...sortQueryURLParams,
        ...filterQueryURLParams
    };
};
exports.getQueryURLParamsFrom = getQueryURLParamsFrom;
const getPaginationQueryURLParamsFromPagingJSONModelSerializedState = (paging) => {
    return {
        page: paging.getPageValue(),
        limit: paging.getLimitValue(),
    };
};
const getSortQueryURLParamsFromSortJSONModelSerializedState = (sorting) => {
    const value = sorting.getSortItems();
    return {
        sort: lodash_1.default.compact(lodash_1.default.map(value, v => {
            const key = v.getKeyJSONModel().getValue();
            const order = v.getOrderJSONModel().getValue();
            if (key != undefined && order != undefined) {
                switch (order) {
                    case "asc":
                        return `${key}`;
                    case "desc":
                        return `-${key}`;
                    default:
                        return undefined;
                }
            }
            return undefined;
        }))
    };
};
const getFilterQueryURLParamsFromFilterJSONModelSerializedState = (filter) => {
    const value = filter.getFilterItems();
    return lodash_1.default.reduce(value, (result, v) => {
        const name = v.getNameJSONModel().getValue();
        const values = v.getValuesJSONModel().getValue();
        if (name != undefined && values != undefined && values.length > 0) {
            const key = `filter_${name}`;
            result[key] = values;
        }
        return result;
    }, {});
};
//# sourceMappingURL=QueryURLParams.js.map