import {GenericSortingItemJSONModel, GenericSortingJSONModel, GenericSortingJSONModelArrayValue, SortOrder} from "../model/GenericSortingJSONModel";
import {GenericFilterItemJSONModel, GenericFilterJSONModel, GenericFilterJSONModelArrayValue} from "../model/GenericFilterJSONModel";
import {GenericPagingJSONModel} from "../model/GenericPagingJSONModel";
import _ from "lodash"

type Key = string | number | boolean;

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
    const value: Array<GenericSortingItemJSONModel<SortKey>> | undefined = sorting.getSortItems()
    return {
        sort: _.compact(_.map<GenericSortingItemJSONModel<SortKey>, SortKey | `-${SortKey}` | undefined>(value, v => {
            const key = v.getKeyJSONModel().getValue()
            const order = v.getOrderJSONModel().getValue()
            if (key != undefined && order != undefined) {
                switch (order as SortOrder) {
                    case "asc" :
                        return `${key}` as SortKey
                    case "desc" :
                        return `-${key}` as `-${SortKey}`
                    default:
                        return undefined
                }
            }
            return undefined
        }))
    }
}

const getFilterQueryURLParamsFromFilterJSONModelSerializedState = <FilterKey extends string, FilterValue extends Key>(filter: GenericFilterJSONModel<FilterKey, FilterValue>): FilterQueryURLParams<FilterKey, FilterValue> => {
    const value: Array<GenericFilterItemJSONModel<FilterKey, FilterValue>> | undefined = filter.getFilterItems()
    return _.reduce<GenericFilterItemJSONModel<FilterKey, FilterValue>, Record<`filter_${FilterKey}`, Array<FilterValue>>>(value, (result, v) => {
        const name = v.getNameJSONModel().getValue()
        const values = v.getValuesJSONModel().getValue()
        if (name != undefined && values != undefined && values.length > 0) {
            const key = `filter_${name}`
            result[key] = values
        }
        return result
    }, {} as FilterQueryURLParams<FilterKey, FilterValue>)
}