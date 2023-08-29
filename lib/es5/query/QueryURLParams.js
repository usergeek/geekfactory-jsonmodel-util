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
    const value = sorting.getSortValuesJSONModel().getValue();
    return {
        sort: lodash_1.default.compact(lodash_1.default.map(value, v => {
            if (v.key != undefined && v.order != undefined) {
                switch (v.order) {
                    case "asc":
                        return `${v.key}`;
                    case "desc":
                        return `-${v.key}`;
                    default:
                        return undefined;
                }
            }
            return undefined;
        }))
    };
};
const getFilterQueryURLParamsFromFilterJSONModelSerializedState = (filter) => {
    const value = filter.getFilterValuesJSONModel().getValue();
    return lodash_1.default.reduce(value, (result, v) => {
        if (v.name != undefined && v.values != undefined && v.values.length > 0) {
            const key = `filter:${v.name}`;
            result[key] = v.values;
        }
        return result;
    }, {});
};
//# sourceMappingURL=QueryURLParams.js.map