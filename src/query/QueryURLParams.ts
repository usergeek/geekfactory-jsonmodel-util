import {GenericSortingJSONModel, GenericSortingJSONModelArrayValue, SortOrder} from "../model/GenericSortingJSONModel";
import {GenericFilterJSONModel, GenericFilterJSONModelArrayValue} from "../model/GenericFilterJSONModel";
import {GenericPagingJSONModel} from "../model/GenericPagingJSONModel";
import _ from "lodash"

type Key = string | number;

/**
 * Paging
 * @param {number} limit - number of items per page. Default: 10
 * @param {number} page - page number starting from 1. Default: 1
 */
export type PaginationQueryURLParams = { limit: number, page: number }
/**
 * Sorting
 * @param {Array<string>} sort - array of sort keys. Default order is ascending. Each key can be prefixed with "-" to indicate descending order. Default: []
 */
export type SortQueryURLParams<SortKey extends string> = { sort: Array<SortKey | `-${SortKey}`> }
/**
 * Filtering
 * @param {Record<`filter_${FilterKey}`, Array<FilterValue>>} filter - object with FilterKey as key and array of filter values as FilterValue. Default: {}
 */
export type FilterQueryURLParams<FilterKey extends string, FilterValue extends Key> = Record<`filter_${FilterKey}`, Array<FilterValue>>

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
export type QueryURLParams<SortKey extends string = never, FilterKey extends string = never, FilterValue extends Key = never> = PaginationQueryURLParams & SortQueryURLParams<SortKey> & FilterQueryURLParams<FilterKey, FilterValue>

export const getQueryURLParamsFrom = <SortKey extends string, FilterKey extends string, FilterValue extends Key>(paging: GenericPagingJSONModel, sorting: GenericSortingJSONModel<SortKey>, filter: GenericFilterJSONModel<FilterKey, FilterValue>): QueryURLParams<SortKey, FilterKey, FilterValue> => {
    const paginationQueryURLParams = getPaginationQueryURLParamsFromPagingJSONModelSerializedState(paging);
    const sortQueryURLParams = getSortQueryURLParamsFromSortJSONModelSerializedState(sorting);
    const filterQueryURLParams = getFilterQueryURLParamsFromFilterJSONModelSerializedState(filter);
    return {
        ...paginationQueryURLParams,
        ...sortQueryURLParams,
        ...filterQueryURLParams
    }
}

const getPaginationQueryURLParamsFromPagingJSONModelSerializedState = (paging: GenericPagingJSONModel): PaginationQueryURLParams => {
    return {
        page: paging.getPageValue(),
        limit: paging.getLimitValue(),
    }
}

const getSortQueryURLParamsFromSortJSONModelSerializedState = <SortKey extends string, >(sorting: GenericSortingJSONModel<SortKey>): SortQueryURLParams<SortKey> => {
    const value: Array<GenericSortingJSONModelArrayValue<SortKey>> | undefined = sorting.getSortValuesJSONModel().getValue();
    return {
        sort: _.compact(_.map<GenericSortingJSONModelArrayValue<SortKey>, SortKey | `-${SortKey}` | undefined>(value, v => {
            if (v.key != undefined && v.order != undefined) {
                switch (v.order as SortOrder) {
                    case "asc" :
                        return `${v.key}` as SortKey
                    case "desc" :
                        return `-${v.key}` as `-${SortKey}`
                    default:
                        return undefined
                }
            }
            return undefined
        }))
    }
}

const getFilterQueryURLParamsFromFilterJSONModelSerializedState = <FilterKey extends string, FilterValue extends Key>(filter: GenericFilterJSONModel<FilterKey, FilterValue>): FilterQueryURLParams<FilterKey, FilterValue> => {
    const value: Array<GenericFilterJSONModelArrayValue<FilterKey, FilterValue>> | undefined = filter.getFilterValuesJSONModel().getValue();
    return _.reduce<GenericFilterJSONModelArrayValue<FilterKey, FilterValue>, Record<`filter_${FilterKey}`, Array<FilterValue>>>(value, (result, v) => {
        if (v.name != undefined && v.values != undefined && v.values.length > 0) {
            const key = `filter_${v.name}`
            result[key] = v.values
        }
        return result
    }, {} as FilterQueryURLParams<FilterKey, FilterValue>)
}