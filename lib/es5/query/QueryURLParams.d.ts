import { GenericSortingJSONModel } from "../model/GenericSortingJSONModel";
import { GenericFilterJSONModel } from "../model/GenericFilterJSONModel";
import { GenericPagingJSONModel } from "../model/GenericPagingJSONModel";
declare type Key = string | number | boolean;
/**
 * Paging
 * @param {number} limit - number of items per page. Default: 10
 * @param {number} page - page number starting from 1. Default: 1
 */
export declare type PaginationQueryURLParams = {
    limit: number;
    page: number;
};
/**
 * Sorting
 * @param {Array<string>} sort - array of sort keys. Default order is ascending. Each key can be prefixed with "-" to indicate descending order. Default: []
 */
export declare type SortQueryURLParams<SortKey extends string> = {
    sort: Array<SortKey | `-${SortKey}`>;
};
/**
 * Filtering
 * @param {Record<`filter_${FilterKey}`, Array<FilterValue>>} filter - object with FilterKey as key and array of filter values as FilterValue. Default: {}
 */
export declare type FilterQueryURLParams<FilterKey extends string, FilterValue extends Key> = Record<`filter_${FilterKey}`, Array<FilterValue>>;
/**
 * QueryURLParams
 * Cumulative type of all query params types in format:
 * {
 *     limit: number,
 *     page: number,
 *     sort: Array<SortKey | `-${SortKey}`>,
 *     `filter_${FilterKey}`: Array<FilterValue>
 * }
 */
export declare type QueryURLParams<SortKey extends string = never, FilterKey extends string = never, FilterValue extends Key = never> = PaginationQueryURLParams & SortQueryURLParams<SortKey> & FilterQueryURLParams<FilterKey, FilterValue>;
export declare const getQueryURLParamsFrom: <SortKey extends string, FilterKey extends string, FilterValue extends Key>(paging: GenericPagingJSONModel, sorting: GenericSortingJSONModel<SortKey>, filter: GenericFilterJSONModel<FilterKey, FilterValue>) => QueryURLParams<SortKey, FilterKey, FilterValue>;
export {};
